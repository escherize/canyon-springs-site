import { createFileRoute } from "@tanstack/react-router";
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
    </>
  ),
});
