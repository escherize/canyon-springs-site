import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { messages, noteFor, notes, longDate } from "../../lib/content";
import { Notes } from "../../components/Notes";
import { head } from "../../lib/head";

export const Route = createFileRoute("/watch/$date")({
  loader: ({ params }) => {
    const m = messages.find((x) => x.date === params.date);
    if (!m) throw notFound();
    return m;
  },
  head: ({ loaderData: m }) => (m ? head(m.title, `${m.series}: ${m.title} (${m.scripture}), ${longDate(m.date)}.`) : head("Watch")),
  component: Message,
});

function Message() {
  const m = Route.useLoaderData();
  const note = noteFor(m.date);
  const withNotes = notes.map((n) => messages.find((x) => n.id.startsWith(x.date))).filter((x): x is NonNullable<typeof x> => !!x);
  return (
    <article>
      <header className="wrap msg-head">
        <p className="muted"><Link to="/watch">Watch</Link> / {m.series}</p>
        <h1>{m.title}</h1>
        <p className="lead">{m.scripture} · {longDate(m.date)}</p>
      </header>
      <div className="wrap">
        <div className="video">
          <iframe src={`https://www.youtube-nocookie.com/embed/${m.youtubeId}`} title={`Video: ${m.title}`} loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen />
        </div>
      </div>
      <section id="notes" className="wrap section notes-wrap">
        {note ? (
          <Notes note={note} />
        ) : (
          <div className="notes empty">
            <h2>Sermon notes</h2>
            <p className="muted">
              Notes are up for {withNotes.map((x, i) => <span key={x.date}>{i > 0 && " and "}<Link to="/watch/$date" params={{ date: x.date }} hash="notes">{x.title}</Link></span>)}. Every week's notes show up here as soon as the office uploads the Word file.
            </p>
          </div>
        )}
      </section>
    </article>
  );
}
