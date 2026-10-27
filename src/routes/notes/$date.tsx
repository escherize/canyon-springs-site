import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Notes } from "../../components/Notes";
import { messages, noteFor, longDate } from "../../lib/content";
import { head } from "../../lib/head";

export const Route = createFileRoute("/notes/$date")({
  loader: ({ params }) => {
    const message = messages.find((m) => m.date === params.date);
    const note = noteFor(params.date);
    if (!message || !note) throw notFound();
    return { message, note };
  },
  head: ({ loaderData }) => loaderData
    ? head(`${loaderData.message.title} — sermon notes`, `Fill-in sermon notes for ${loaderData.message.title}, ${longDate(loaderData.message.date)}.`)
    : head("Sermon notes"),
  component: SermonNotes,
});

function SermonNotes() {
  const { message, note } = Route.useLoaderData();
  return (
    <article>
      <header className="wrap msg-head">
        <p className="muted"><Link to="/watch">Watch</Link> / <Link to="/watch/$date" params={{ date: message.date }}>{message.title}</Link></p>
        <h1>{message.title} — notes</h1>
        <p className="lead">{message.scripture} · {longDate(message.date)}</p>
      </header>
      <section className="wrap section-tight">
        <Notes note={note} />
      </section>
    </article>
  );
}
