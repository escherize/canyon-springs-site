import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/women")({
  head: () => head("Women's Ministry", "Bible studies, retreats and a Friday morning group for women at Canyon Springs."),
  component: () => (
    <>
      <PageHead title="Women's Ministry" lead="Through Bible studies, conferences, retreats, and special events, the women at Canyon Springs are intentional about their fellowship with one another and growing in Christ together." />
      <section className="wrap section-tight split">
        <div><h2>Join us</h2></div>
        <div className="stack">
          <dl className="facts">
            <div><dt>Women's Life Group</dt><dd>Fridays, 10 AM–noon, at the church</dd></div>
            <div><dt>Questions</dt><dd><a href="mailto:women@canyonchristian.com">women@canyonchristian.com</a></dd></div>
          </dl>
          <p className="muted small">Retreats and studies show up on the <Link to="/events">events page</Link> as soon as they're on the church calendar.</p>
        </div>
      </section>
    </>
  ),
});
