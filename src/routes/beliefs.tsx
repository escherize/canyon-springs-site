import { createFileRoute } from "@tanstack/react-router";
import { beliefs } from "../lib/content";
import { PageHead } from "../components/PageHead";
import { Markdown } from "../components/Markdown";
import { head } from "../lib/head";

export const Route = createFileRoute("/beliefs")({
  head: () => head("What we believe", "Read our statement of faith and the Scripture behind what we believe."),
  component: () => (
    <>
      <PageHead title="What we believe" />
      <section className="wrap section-tight stack" aria-labelledby="faith-title">
        <h2 id="faith-title" className="h-sm">Statement of faith</h2>
        <Markdown className="prose beliefs" text={beliefs} />
      </section>
    </>
  ),
});
