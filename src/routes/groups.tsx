import { createFileRoute, Link } from "@tanstack/react-router";
import { asset } from "../lib/content";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/groups")({
  head: () => head("Life Groups", "Life Groups meet weekly outside of Sunday services to study God's Word together."),
  component: () => (
    <>
      <PageHead title="Life Groups" lead="Small gatherings that meet weekly outside of Sunday services, to study God's Word and encourage each other to become fully devoted followers of Christ." photo="lobby.jpg" alt="People talking in the church lobby; a man holds a baby." pos="50% 30%" />
      <section className="wrap section split">
        <div>
          <h2>Find a group</h2>
          <p className="muted">Our goal is for everyone at Canyon Springs to be in a Life Group.</p>
        </div>
        <div className="stack">
          <p>Get connected today! See the current list of groups, or email the office with questions.</p>
          <div className="btn-row">
            <a className="btn" href="https://drive.google.com/file/d/1YGMKLT0RKjscLu7Ce6n9Vm4e1c8zfreC/view?usp=sharing" rel="noopener">See the group list</a>
            <a className="btn ghost" href="mailto:office@canyonchristian.com?subject=Life%20Group%20question">Email the office</a>
          </div>
        </div>
      </section>
      <section id="men" className="wrap section-tight split men">
        <img src={asset("photos/mens-breakfast.jpg")} width="1067" height="1600" alt="Men serving breakfast from slow cookers at the monthly men's breakfast." loading="lazy" />
        <div className="stack">
          <h2>Men</h2>
          <p>Through Bible studies and special events, the men at Canyon Springs aim to support each other.</p>
          <dl className="facts">
            <div><dt>Men's Life Group</dt><dd>Saturdays, 7:30–9:30 AM</dd></div>
            <div><dt>Men's breakfast</dt><dd>Monthly: fresh food, study, and fellowship. Watch the <Link to="/events">events page</Link>.</dd></div>
          </dl>
          <p><a href="mailto:men@canyonchristian.com">men@canyonchristian.com</a></p>
        </div>
      </section>
    </>
  ),
});
