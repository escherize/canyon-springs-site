import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/about")({
  head: () => head("About Us", "Love God, love others, serve the world. Learn about Canyon Springs and meet our team."),
  component: About,
});

const team = [
  ["Ben Williams", "Senior Pastor", "Ben@canyonchristian.com"],
  ["Connor Hill", "Students Minister", "Connor@canyonchristian.com"],
  ["Jamie Hart", "Children's Ministry Director", "Kids@canyonchristian.com"],
  ["Steve Alderete", "Worship Minister", "Steve@canyonchristian.com"],
  ["Tana Lyle", "Bookkeeper", "Canyonspringsfinance@gmail.com"],
  ["Zach Hart", "Elder", "Zach@canyonchristian.com"],
  ["Traber Cass", "Elder", "Traber@canyonchristian.com"],
  ["Jason Hill", "Elder", "Jason@canyonchristian.com"],
];

function About() {
  return (
    <>
      <PageHead title="About Us" lead="Love God. Love others. Serve the world. That's our mission, and our process for making disciples: bringing everyone at Canyon Springs into a lifelong, ever-deepening relationship with Jesus Christ and with the family of God." photo="worship.jpg" alt="A Sunday service seen from the back of the room: people seated, the band and screen up front." pos="50% 55%">
        <Link className="go" to="/beliefs">Read what we believe</Link>
      </PageHead>
      <section className="section team-band">
        <div className="wrap">
          <h2>Our team</h2>
          <ul className="team">
            {team.map(([name, role, email]) => (
              <li key={email}><strong>{name}</strong><span className="muted">{role}</span><a href={`mailto:${email}`}>{email}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
