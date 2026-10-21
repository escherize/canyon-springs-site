import { createFileRoute, Link } from "@tanstack/react-router";
import { church } from "../data/site";
import { kids } from "../data/kids";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/kids")({
  head: () => head("Canyon Kids", "Canyon Kids: newborn through 5th grade, Sundays at 9:00 and 10:30 AM."),
  component: Kids,
});

function Kids() {
  return (
    <div className="kids-page">
      <PageHead title="Canyon Kids" lead={`${kids.ages}, at both Sunday services.`} photo="kids-group.webp" alt="Children and adults posing together in a room with tall windows and wooden beams." pos="50% 60%">
        <p className="kids-service"><strong>Sundays at {church.services.join(" & ")} AM</strong></p>
        <div className="btn-row">
          <a className="btn" href="#kids-faq">First-time families</a>
          <a className="btn ghost" href="#kids-contact">Contact Canyon Kids</a>
        </div>
      </PageHead>

      <section className="wrap section split" aria-labelledby="kids-rooted">
        <div>
          <h2 id="kids-rooted">Rooted in Christ</h2>
          <blockquote className="kids-scripture">
            <p>{kids.scriptures.psalm.text}</p>
            <cite>{kids.scriptures.psalm.reference}</cite>
          </blockquote>
        </div>
        <div className="stack">
          <p>{kids.intro}</p>
          <h3>Our mission</h3>
          <dl className="facts">
            {kids.mission.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="section faq-band" aria-labelledby="kids-values">
        <div className="wrap split">
          <h2 id="kids-values">Our values</h2>
          <dl className="facts">
            {kids.values.map((item) => <div key={item.title}><dt>{item.title}</dt><dd>{item.text}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="kids-growing">
        <h2 id="kids-growing">Growing in faith</h2>
        <p className="kids-section-intro">{kids.hopesIntro}</p>
        <div className="split even kids-goals">
          <section aria-labelledby="kids-know">
            <h3 id="kids-know">Know</h3>
            <ul className="dolist">{kids.know.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section aria-labelledby="kids-do">
            <h3 id="kids-do">Do</h3>
            <ul className="dolist">{kids.do.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </div>
      </section>

      <section id="kids-faq" className="section faq-band" aria-labelledby="kids-faq-title">
        <div className="wrap split">
          <div>
            <h2 id="kids-faq-title">Questions parents ask</h2>
            <p className="kids-section-intro">Have a question? Email <a href={`mailto:${kids.email}`}>{kids.email}</a>, call <a href={church.phoneHref}>{church.phone}</a>, or come see us in person.</p>
          </div>
          <div className="faq">
            {kids.faq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="wrap section split" aria-labelledby="kids-involved">
        <h2 id="kids-involved">How can I get involved?</h2>
        <div className="stack">
          <h3>Pray</h3>
          <blockquote className="kids-scripture">
            <p>{kids.scriptures.deuteronomy.text}</p>
            <cite>{kids.scriptures.deuteronomy.reference}</cite>
          </blockquote>
          <div className="btn-row">
            <a className="btn" href={kids.volunteerUrl} rel="noopener">Volunteer application (PDF)</a>
            <a className="btn ghost" href={kids.wishlistUrl} rel="noopener">Classroom wish list</a>
          </div>
        </div>
      </section>

      <section className="section faq-band" aria-labelledby="kids-resources">
        <div className="wrap">
          <h2 id="kids-resources">Parent resources</h2>
          <ul className="kids-resources">
            {kids.resources.map((resource) => <li key={resource.href}><a className="go" href={resource.href} rel="noopener"><span>{resource.title}</span></a></li>)}
          </ul>
        </div>
      </section>

      <section id="kids-contact" className="wrap section split" aria-labelledby="kids-contact-title">
        <h2 id="kids-contact-title">Contact Canyon Kids</h2>
        <div className="stack">
          <dl className="facts">
            <div><dt>Email</dt><dd><a href={`mailto:${kids.email}`}>{kids.email}</a></dd></div>
            <div><dt>Phone</dt><dd><a href={church.phoneHref}>{church.phone}</a></dd></div>
            <div><dt>Events</dt><dd><Link to="/events">View church events</Link></dd></div>
          </dl>
          <div className="btn-row">
            <a className="btn ghost" href={kids.instagram} rel="noopener">Instagram</a>
            <a className="btn ghost" href={kids.facebook} rel="noopener">Facebook group</a>
          </div>
        </div>
      </section>
    </div>
  );
}
