import { createFileRoute, Link } from "@tanstack/react-router";
import { church } from "../../data/site";
import { messages, monthDay } from "../../lib/content";
import { PageHead } from "../../components/PageHead";
import { Sermon } from "../../components/Sermon";
import { head } from "../../lib/head";

export const Route = createFileRoute("/watch/")({
  head: () => head("Watch", "Watch Sunday messages from Canyon Springs, live at 10:30 AM or any time after."),
  component: Watch,
});

function Watch() {
  const [latest, ...older] = messages;
  return (
    <>
      <PageHead title="Watch" lead="Live every Sunday at 10:30 AM. Every message stays up afterward, with notes you can fill in as you listen." />
      <section className="wrap section-tight"><Sermon message={latest} /></section>
      <section className="wrap section">
        <div className="list-head">
          <h2>{latest.series}</h2>
          <p className="muted">The current series, newest first.</p>
        </div>
        <ul className="msgs">
          {older.map((m) => (
            <li key={m.date}>
              <Link to="/watch/$date" params={{ date: m.date }}>
                <img src={`https://i.ytimg.com/vi/${m.youtubeId}/hqdefault.jpg`} width="480" height="360" alt="" loading="lazy" />
                <span className="m-date muted small">{monthDay(m.date)} · {m.scripture}</span>
                <span className="m-title">{m.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p><a className="go" href={church.youtube} rel="noopener">Every message on YouTube</a></p>
      </section>
    </>
  );
}
