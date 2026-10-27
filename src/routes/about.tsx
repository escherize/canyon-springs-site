import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";
import { team } from "../data/site";
import { asset } from "../lib/content";

export const Route = createFileRoute("/about")({
  head: () => head("About Us", "Love God, love others, serve the world. Learn about Canyon Springs and meet our team."),
  component: About,
});

function About() {
  return (
    <>
      <PageHead title="About Us" lead="Love God. Love others. Serve the world. That's our mission, and our process for making disciples: bringing everyone at Canyon Springs into a lifelong, ever-deepening relationship with Jesus Christ and with the family of God." photo="church-service.webp" alt="Adults standing in worship while children gather near the front of a church." pos="50% 35%">
        <Link className="go" to="/beliefs">Read what we believe</Link>
      </PageHead>
      <section className="section team-band">
        <div className="wrap">
          <h2>Our team</h2>
          <ul className="team">
            {team.map(({ name, role, email, photo }) => (
              <li key={email}>
                <img src={asset(`photos/${photo}`)} width="512" height="512" alt={name} loading="lazy" decoding="async" />
                <strong>{name}</strong>
                <span className="muted">{role}</span>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
