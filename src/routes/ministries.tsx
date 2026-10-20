import { createFileRoute, Link } from "@tanstack/react-router";
import { ministries } from "../data/site";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/ministries")({
  head: () => head("Ministries", "Students, Kids, Life Groups, Women, and Garden Outreach at Canyon Springs Christian Church."),
  component: () => (
    <>
      <PageHead title="Ministries" />
      <section className="wrap section-tight ministries" aria-label="Ministries">
        <div className="min-list">
          {ministries.map((ministry) => (
            <Link className="min" key={ministry.to} to={ministry.to}>
              <span className="min-name">{ministry.label}</span>
              <span className="min-detail">{ministry.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  ),
});
