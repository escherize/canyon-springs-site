import { createFileRoute } from "@tanstack/react-router";
import { beliefs } from "../lib/content";
import { PageHead } from "../components/PageHead";
import { Markdown } from "../components/Markdown";
import { head } from "../lib/head";

export const Route = createFileRoute("/about")({
  head: () => head("About Us", "Love God, love others, serve the world. Meet the team at Canyon Springs and read what we believe."),
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
      <PageHead title="About Us" lead="Love God. Love others. Serve the world. That's our mission, and our process for making disciples: bringing everyone at Canyon Springs into a lifelong, ever-deepening relationship with Jesus Christ and with the family of God." photo="worship.jpg" alt="A Sunday service seen from the back of the room: people seated, the band and screen up front." pos="50% 55%" />
      <section className="wrap section split">
        <div><h2>What that means</h2></div>
        <dl className="facts">
          <div><dt>Disciple</dt><dd>Someone committed to the lordship of Christ and to His mission, being made to look like Him. <span className="refs">Matthew 4:19</span></dd></div>
          <div><dt>Love God</dt><dd>An all-consuming, fulfilling relationship with our Creator that radiates from an overwhelming appreciation of His love. <span className="refs">Matthew 22:37–39</span></dd></div>
          <div><dt>Love others</dt><dd>Valuing, accepting, and engaging others unselfishly, as He did. <span className="refs">John 13:34–35</span></dd></div>
          <div><dt>Serve the world</dt><dd>Communicating the Gospel of Jesus Christ to others through selfless acts of service. <span className="refs">Matthew 5:16</span></dd></div>
        </dl>
      </section>
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
      <section id="beliefs" className="wrap section split">
        <div><h2>What we believe</h2></div>
        <Markdown className="prose beliefs" text={beliefs} />
      </section>
    </>
  );
}
