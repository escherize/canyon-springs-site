import { createFileRoute } from "@tanstack/react-router";
import { church } from "../data/site";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/contact")({
  head: () => head("Contact", "Call, email or visit Canyon Springs Christian Church in Middleton, Idaho."),
  component: () => (
    <>
      <PageHead title="Contact us" lead="We'd love to hear from you." />
      <section className="wrap section-tight split even">
        <dl className="facts">
          <div><dt>Call</dt><dd><a href={church.phoneHref}>{church.phone}</a></dd></div>
          <div><dt>Email</dt><dd><a href={`mailto:${church.email}`}>{church.email}</a></dd></div>
          <div><dt>Visit</dt><dd>{church.street}<br />{church.city}<br /><a href={church.mapUrl} rel="noopener">Get directions</a></dd></div>
          <div><dt>Follow</dt><dd><a href={church.facebook} rel="noopener">Facebook</a> · <a href={church.instagram} rel="noopener">Instagram</a> · <a href={church.youtube} rel="noopener">YouTube</a></dd></div>
        </dl>
        <iframe className="map" title="Map to Canyon Springs Christian Church" loading="lazy" src="https://maps.google.com/maps?q=1444+Cornell+St+Middleton+ID+83644&z=15&output=embed" />
      </section>
    </>
  ),
});
