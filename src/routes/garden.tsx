import { createFileRoute } from "@tanstack/react-router";
import { events, asset, shortDate } from "../lib/content";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/garden")({
  head: () => head("Garden Outreach", "Canyon Springs Garden Outreach: gardening, teaching, and sharing the harvest in Middleton."),
  component: Garden,
});

function Garden() {
  const mine = events.upcoming.filter((e) => e.href === "/garden");
  return (
    <>
      <PageHead title="Garden Outreach" lead="Growing together to build community through gardening, teaching, and sharing the harvest. We're a 100% volunteer non-profit farm and garden." photo="garden-entrance.webp" alt="The Canyon Springs Garden Outreach entrance with a market stand, flowers, and a turquoise garden sign." />
      <section className="wrap section split">
        <div><h2>What we do</h2></div>
        <ul className="dolist">
          <li><strong>Garden volunteers of all ages</strong> learn, grow, and share the harvest of vegetables, fruit, herbs, and flowers through sustainable growing practices.</li>
          <li><strong>Junior Master Gardeners</strong> classes for youth, and gardening classes and events for adults and families.</li>
          <li><strong>Growing and gleaning</strong> food for our local food banks and community in need.</li>
        </ul>
      </section>
      <section className="section-tight garden-band">
        <div className="wrap split">
          <img src={asset("photos/zinnias.jpg")} width="720" height="720" alt="A girl in a sun hat standing among bright zinnias in the garden." loading="lazy" />
          <div className="stack">
            <h2 className="h-sm">Coming up</h2>
            <ul className="list">
              {mine.length === 0 && <li><span className="muted">Nothing scheduled right now. Email Suzanne for this season's volunteer hours.</span></li>}
              {mine.map((e) => <li key={e.title + e.date}><span className="muted small">{shortDate(e.date)} · {e.time}</span><strong>{e.title}</strong><span className="muted small">{e.where}</span></li>)}
            </ul>
            <dl className="facts">
              <div><dt>Garden</dt><dd>10568 Highway 44, Middleton, ID 83644</dd></div>
              <div><dt>Contact</dt><dd>Suzanne Ubry<br /><a href="mailto:canyonspringsgardenoutreach@gmail.com">canyonspringsgardenoutreach@gmail.com</a></dd></div>
            </dl>
            <p className="muted small">Volunteer hours change with the season. Email Suzanne for this season's hours.</p>
          </div>
        </div>
      </section>
    </>
  );
}
