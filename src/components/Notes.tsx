// Fill-in-the-blank sermon notes. Answers are saved on this device; hints reveal first letters, then the answer.
import { createContext, useContext, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { rehypeBlanks } from "../lib/rehype-blanks";
import { asset, type Note } from "../lib/content";

const NotesStorageKey = createContext("notes");

function Blank(props: Record<string, unknown>) {
  const n = String(props["data-n"] ?? props.dataN ?? "");
  const answer = String(props["data-answer"] ?? props.dataAnswer ?? "");
  const key = useContext(NotesStorageKey);
  const [value, setValue] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "{}");
      if (saved[n]) setValue(saved[n]);
    } catch {}
  }, [key, n]);

  const onChange = (v: string) => {
    setValue(v);
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "{}");
      saved[n] = v;
      localStorage.setItem(key, JSON.stringify(saved));
    } catch {}
  };

  const placeholder = step === 0 ? "" : step === 1 ? answer.replace(/\B\w/g, "_") : answer;
  return (
    <>
      <input
        type="text"
        className="blank"
        aria-label={`Blank ${n}`}
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        style={answer ? { width: `max(9ch, ${answer.length + 2}ch)` } : undefined}
      />
      {answer && (
        <button type="button" className="hint" disabled={step >= 2} aria-label={step >= 2 ? `Answer shown for blank ${n}` : `Hint for blank ${n}`} onClick={() => setStep((s) => s + 1)}>?</button>
      )}
    </>
  );
}

export function Notes({ note }: { note: Note }) {
  return (
    <div className="notes">
      <div className="notes-head">
        <h2>Sermon notes</h2>
        <p className="muted small">Fill in the blanks as you listen. Stuck? Tap <span className="hint-demo" aria-hidden="true">?</span> once for the first letters, twice for the answer. Your answers stay on this device.</p>
      </div>
      <div className="notes-body prose">
        {/* Keep the original sermon URL as the storage key so existing answers remain available. */}
        <NotesStorageKey value={`notes:${asset(`watch/${note.date}`)}`}>
          <ReactMarkdown rehypePlugins={[rehypeBlanks]} components={{ blank: Blank } as never}>{note.body}</ReactMarkdown>
        </NotesStorageKey>
      </div>
      <p className="small muted converted">This page was made automatically from the Word file the office already writes ({note.source}). No retyping.</p>
    </div>
  );
}
