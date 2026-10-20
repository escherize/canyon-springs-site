import { createFileRoute, Link } from "@tanstack/react-router";
import { women } from "../data/women";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/women")({
  head: () => head("Women's Ministry", "Bible studies, Coffee & Connect, Life Groups, retreats, and meal trains for women at Canyon Springs."),
  component: Women,
});

function Women() {
  const emailTeam = `mailto:${women.email}`;
  return (
    <div className="women-page">
      <PageHead title="Women's Ministry" lead={women.intro}>
        <div className="btn-row">
          <a className="btn" href="#women-groups">Find a Life Group</a>
          <a className="btn ghost" href={emailTeam}>Email the leadership team</a>
        </div>
      </PageHead>

      <section className="wrap section split" aria-labelledby="women-grow">
        <h2 id="women-grow">Gather and grow</h2>
        <div className="meet">
          <article>
            <h3>{women.bibleStudy.title}</h3>
            <p className="when">{women.bibleStudy.schedule}</p>
            <p>{women.bibleStudy.description}</p>
            <a className="go" href={emailTeam}>{women.bibleStudy.contactLabel}</a>
          </article>
          <article>
            <h3>{women.coffee.title}</h3>
            <p className="when">{women.coffee.schedule}</p>
            <p>{women.coffee.description}</p>
            <p>{women.coffee.childcare}</p>
            <a className="go" href={emailTeam}>{women.coffee.contactLabel}</a>
            <div className="faq">
              <details>
                <summary>{women.coffee.previous.title}</summary>
                <p><strong>{women.coffee.previous.date}</strong><br />{women.coffee.previous.description}</p>
              </details>
            </div>
          </article>
        </div>
      </section>

      <section id="women-groups" className="section faq-band" aria-labelledby="women-groups-title">
        <div className="wrap split">
          <div>
            <h2 id="women-groups-title">Women's Life Groups</h2>
            <p className="women-intro">Contact a group leader or email <a href={emailTeam}>{women.email}</a> to get connected.</p>
          </div>
          <div className="meet women-groups">
            {women.groups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <p className="when">{group.schedule}</p>
                <dl className="facts">
                  <div><dt>Leader</dt><dd>{group.leader}</dd></div>
                  {"location" in group && <div><dt>Location</dt><dd>{group.location}</dd></div>}
                  {"study" in group && <div><dt>Bible study</dt><dd>{group.study}</dd></div>}
                  {"phone" in group && <div><dt>Phone</dt><dd><a href={group.phoneHref}>{group.phone}</a></dd></div>}
                  {"email" in group && <div><dt>Email</dt><dd><a href={`mailto:${group.email}`}>{group.email}</a></dd></div>}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap section split" aria-labelledby="women-retreat">
        <h2 id="women-retreat">Annual retreat</h2>
        <div className="stack">
          <h3 className="women-retreat-title">{women.retreat.title}</h3>
          <p className="when">{women.retreat.status}</p>
          <p>{women.retreat.description}</p>
          <dl className="facts">
            <div><dt>Dates</dt><dd>{women.retreat.dates}</dd></div>
            <div><dt>Location</dt><dd>{women.retreat.location}</dd></div>
          </dl>
          <a className="go" href={emailTeam}>{women.retreat.contactLabel}</a>
          <div className="faq">
            <details>
              <summary>2026 retreat registration details</summary>
              <dl className="facts">
                {women.retreat.fees.map((fee) => <div key={fee.label}><dt>{fee.label}</dt><dd>{fee.value}</dd></div>)}
              </dl>
              <p>{women.retreat.registrationNote}</p>
              <a className="go" href={women.retreat.registrationUrl} rel="noopener">{women.retreat.registrationLabel}</a>
            </details>
          </div>
        </div>
      </section>

      <section className="section faq-band" aria-labelledby="women-meals">
        <div className="wrap split">
          <h2 id="women-meals">{women.meals.title}</h2>
          <div className="stack">
            <p>{women.meals.description}</p>
            <div className="btn-row">
              <a className="btn" href={women.meals.trainUrl} rel="noopener">{women.meals.trainLabel}</a>
              <a className="btn ghost" href={women.meals.requestUrl} rel="noopener">{women.meals.requestLabel}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section split" aria-labelledby="women-connect">
        <div>
          <h2 id="women-connect">Stay connected</h2>
          <p className="women-intro">Contact a member of the Women's Ministry Leadership Team at <a href={emailTeam}>{women.email}</a>.</p>
          <Link className="go" to="/events">View church events</Link>
        </div>
        <div className="meet">
          <article>
            <h3>{women.facebook.title}</h3>
            <p>{women.facebook.description}</p>
            <a className="go" href={women.facebook.href} rel="noopener">{women.facebook.label}</a>
          </article>
          <article>
            <h3>{women.newsletter.title}</h3>
            <p>{women.newsletter.description}</p>
            <a className="go" href={emailTeam}>{women.newsletter.contactLabel}</a>
          </article>
        </div>
      </section>
    </div>
  );
}
