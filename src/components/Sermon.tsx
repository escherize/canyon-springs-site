// One sermon: thumbnail, title, and links to the video and the notes page.
import { Link } from "@tanstack/react-router";
import { longDate, noteFor, type Message } from "../lib/content";

export function Sermon({ message: m }: { message: Message }) {
  const hasNotes = !!noteFor(m.date);
  return (
    <article className="sermon">
      <Link className="thumb" to="/watch/$date" params={{ date: m.date }} aria-label={`Watch “${m.title}”`}>
        <img src={`https://i.ytimg.com/vi/${m.youtubeId}/maxresdefault.jpg`} width="1280" height="720" alt="" loading="lazy" />
        <span className="play" aria-hidden="true"><svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="currentColor" /></svg></span>
      </Link>
      <div className="meta">
        <p className="series muted">{m.series} · {longDate(m.date)}</p>
        <h3 className="title"><Link to="/watch/$date" params={{ date: m.date }}>{m.title}</Link></h3>
        <p className="muted">{m.scripture}</p>
        <div className="btn-row">
          <Link className="btn" to="/watch/$date" params={{ date: m.date }}>Watch</Link>
          {hasNotes && <Link className="btn ghost" to="/notes/$date" params={{ date: m.date }} target="_blank" rel="noopener">Sermon notes (new tab)</Link>}
        </div>
      </div>
    </article>
  );
}
