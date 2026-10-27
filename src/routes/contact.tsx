import { createFileRoute } from "@tanstack/react-router";
import { church } from "../data/site";
import { PageHead } from "../components/PageHead";
import { Form } from "../components/Form";
import { head } from "../lib/head";

export const Route = createFileRoute("/contact")({
  head: () => head("Contact", "Send a message, call, email or visit Canyon Springs Christian Church in Middleton, Idaho."),
  component: () => (
    <>
      <PageHead title="Contact us" lead="We'd love to hear from you." />
      <section className="wrap section-tight split even contact-layout" aria-labelledby="contact-message-title">
        <div className="stack">
          <h2 id="contact-message-title">Send us a message</h2>
          <p className="hint">First Name, Last Name, Email, and Message are required. Phone is optional.</p>
          <Form
            className="req"
            subject="Contact Canyon Springs"
            submitLabel={church.formEndpoint ? "Send Message" : "Open email draft"}
            done={church.formEndpoint ? (
              <><h2>Thank you for reaching out.</h2><p>Your message has been submitted.</p></>
            ) : (
              <><h2>Finish sending in your email app.</h2><p>Send the prepared draft to <a href={`mailto:${church.email}`}>{church.email}</a> to get in touch. This website has not sent your message; if no draft opened, you can email the office directly.</p></>
            )}
          >
            <div className="field">
              <label htmlFor="contact-first-name">First Name</label>
              <input id="contact-first-name" name="firstName" autoComplete="given-name" required />
            </div>
            <div className="field">
              <label htmlFor="contact-last-name">Last Name</label>
              <input id="contact-last-name" name="lastName" autoComplete="family-name" required />
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input id="contact-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="field">
              <label htmlFor="contact-phone">Phone <span className="muted">(optional)</span></label>
              <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea id="contact-message" name="message" rows={6} required />
            </div>
          </Form>
        </div>
        <div className="stack">
          <h2>Contact details</h2>
          <div className="stack contact-details">
            <dl className="facts">
              <div><dt>Call</dt><dd><a href={church.phoneHref}>{church.phone}</a></dd></div>
              <div><dt>Email</dt><dd><a href={`mailto:${church.email}`}>{church.email}</a></dd></div>
              <div><dt>Visit</dt><dd>{church.street}<br />{church.city}<br /><a href={church.mapUrl} rel="noopener">Get directions</a></dd></div>
              <div><dt>Follow</dt><dd><a href={church.facebook} rel="noopener">Facebook</a> · <a href={church.instagram} rel="noopener">Instagram</a> · <a href={church.youtube} rel="noopener">YouTube</a></dd></div>
            </dl>
            <iframe className="map" title="Map to Canyon Springs Christian Church" loading="lazy" src="https://maps.google.com/maps?q=1444+Cornell+St+Middleton+ID+83644&z=15&output=embed" />
          </div>
        </div>
      </section>
    </>
  ),
});
