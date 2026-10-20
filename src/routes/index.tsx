import { createFileRoute, Link } from "@tanstack/react-router";
import { church, ministries } from "../data/site";
import { events, messages, asset, shortDate, to } from "../lib/content";
import { Sermon } from "../components/Sermon";
import { head } from "../lib/head";

export const Route = createFileRoute("/")({ head: () => head(), component: Home });

function Home() {
  const latest = messages[0];
  return (
    <>
      <section className="hero">
        <div className="hero-stage">
          <figure className="hero-photo">
            <img src={asset("photos/wheat-pivot-2400.jpg")} srcSet={`${asset("photos/wheat-pivot-1200.jpg")} 1200w, ${asset("photos/wheat-pivot-2400.jpg")} 2400w`} sizes="100vw" width="2400" height="1600" alt="Ripe wheat in the foreground, an irrigation pivot watering a green field behind it." fetchPriority="high" />
          </figure>
          <div className="wrap hero-text">
            <h1>
              <span className="rise" style={{ "--i": 0 } as React.CSSProperties}>A Place to <em>Belong</em></span>
              <span className="rise" style={{ "--i": 1 } as React.CSSProperties}>A Place to <em>Grow</em></span>
              <span className="rise" style={{ "--i": 2 } as React.CSSProperties}>A Place to <em>Serve</em></span>
            </h1>
            <p className="hero-when rise" style={{ "--i": 3 } as React.CSSProperties}>
              <strong>Sundays at {church.services.join(" & ")} AM</strong>
              <a href={church.mapUrl} rel="noopener">{church.street}, Middleton</a>
            </p>
            <div className="btn-row on-dark-btns rise" style={{ "--i": 4 } as React.CSSProperties}>
              <Link className="btn" to="/visit">Plan Your Visit</Link>
              <Link className="btn ghost" to="/watch">Watch a Message</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pillars wrap" aria-label="Who we are">
        <div>
          <h2>Belong</h2>
          <p>Life Groups meet every week outside of Sunday services to study God's Word and encourage each other.</p>
          <Link className="go" to="/groups">Find a group</Link>
        </div>
        <div>
          <h2>Grow</h2>
          <p>A new message every Sunday, with notes to fill in as you listen. This fall: the parables of Jesus in Matthew.</p>
          <Link className="go" to="/watch">Watch a message</Link>
        </div>
        <div>
          <h2>Serve</h2>
          <p>Garden Outreach grows and gleans food for local food banks and neighbors in need. It's run entirely by volunteers.</p>
          <Link className="go" to="/garden">See Garden Outreach</Link>
        </div>
      </section>

      <div className="strip">
        <img src={asset("photos/lobby.jpg")} width="1600" height="1066" alt="People catching up in the church lobby after a Sunday service." loading="lazy" />
        <img src={asset("photos/kids-class.jpg")} width="1600" height="1200" alt="Kids smiling at a craft table in a Canyon Kids classroom." loading="lazy" />
        <img src={asset("photos/garden-volunteers.jpg")} width="866" height="650" alt="Garden Outreach volunteers, adults and kids, at the community garden." loading="lazy" />
      </div>

      <section className="section-tight latest-band" aria-labelledby="latest-h">
        <div className="wrap">
          <h2 id="latest-h" className="band-h">Last Sunday</h2>
          <Sermon message={latest} />
        </div>
      </section>

      <section className="section wrap week" aria-labelledby="week-h">
        <div className="week-head">
          <h2 id="week-h">Coming up</h2>
          <p className="muted">Straight from the church calendar, so it's never out of date.</p>
        </div>
        <div className="week-cols">
          <div>
            <h3>Every week</h3>
            <ul className="timetable">
              <li><span className="tt-when">Sundays, 9:00 & 10:30 AM</span><span className="tt-what">Worship, plus kids' programs</span></li>
              {events.weekly.map((e) => (
                <li key={e.title}><span className="tt-when">{e.when}</span><Link className="tt-what" to={to(e.href)}>{e.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Special events</h3>
            <ul className="timetable">
              {events.upcoming.slice(0, 5).map((e) => (
                <li key={e.title + e.date}><span className="tt-when">{shortDate(e.date)} · {e.time}</span><Link className="tt-what" to={to(e.href)}>{e.title}</Link><span className="tt-where muted small">{e.where}</span></li>
              ))}
            </ul>
            <Link className="go" to="/events">All events</Link>
          </div>
        </div>
      </section>

      <section className="ministries" aria-labelledby="min-h">
        <div className="wrap"><h2 id="min-h">For every age</h2></div>
        <div className="wrap min-list">
          {ministries.map((ministry) => (
            <Link className="min" key={ministry.to} to={ministry.to}>
              <span className="min-name">{ministry.label}</span>
              <span className="min-detail">{ministry.description}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="closer on-dark">
        <img className="closer-img" src={asset("photos/pivot-sky-1200.jpg")} srcSet={`${asset("photos/pivot-sky-1200.jpg")} 1200w, ${asset("photos/pivot-sky-2400.jpg")} 2400w`} sizes="(min-width: 56rem) 50vw, 100vw" width="1200" height="800" alt="An irrigation pivot stretching across a green field toward the horizon." loading="lazy" />
        <div className="closer-text">
          <h2>First time? Here's what Sunday looks like.</h2>
          <p className="muted">Service times, parking, how kids check in, and what to expect. Come as you are.</p>
          <div className="btn-row"><Link className="btn" to="/visit">Plan your visit</Link></div>
        </div>
      </section>
    </>
  );
}
