import { createFileRoute, Link } from "@tanstack/react-router";
import { church, snapshot } from "../data/site";
import { events, to, type Upcoming } from "../lib/content";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/events")({
  head: () => head("Events", "Upcoming events at Canyon Springs Christian Church."),
  component: Events,
});

const day = (d: string) => new Date(d + "T12:00:00");

function Events() {
  const byMonth = new Map<string, Upcoming[]>();
  for (const e of events.upcoming) {
    const k = day(e.date).toLocaleDateString("en-US", { month: "long", year: "numeric" });
    byMonth.set(k, [...(byMonth.get(k) ?? []), e]);
  }
  return (
    <>
      <PageHead title="Events" lead="What's coming up. This list comes straight from the church calendar, so past events drop off on their own." />
      <section className="wrap section-tight split">
        <div>
          <h2 className="h-sm">Every week</h2>
          <ul className="weekly">
            <li><strong>Sunday worship</strong><span>Sundays, 9:00 & 10:30 AM · kids programs at both</span></li>
            {events.weekly.map((e) => <li key={e.title}><Link to={to(e.href)}><strong>{e.title}</strong></Link><span>{e.when} · {e.who}</span></li>)}
          </ul>
        </div>
        <div>
          {byMonth.size === 0 && <p className="muted">Nothing special on the calendar right now. Sunday worship and the weekly groups carry on as usual.</p>}
          {[...byMonth].map(([month, list]) => (
            <section className="month" key={month}>
              <h2 className="h-sm">{month}</h2>
              <ol className="cal">
                {list.map((e) => (
                  <li key={e.title + e.date}>
                    <time dateTime={e.date} className="cal-date">
                      <span className="dow">{day(e.date).toLocaleDateString("en-US", { weekday: "short" })}</span>
                      <span className="dnum">{day(e.date).getDate()}</span>
                    </time>
                    <div>
                      <Link className="cal-title" to={to(e.href)}>{e.title}</Link>
                      <p className="muted small">{e.time} · {e.where}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ))}
          <p><a className="go" href={church.calendarUrl} rel="noopener">Full calendar on Church Center</a></p>
        </div>
      </section>
      <aside className="wrap section-tight how">
        <h2 className="h-sm">How this list stays current</h2>
        <p className="muted">Staff add events to the Church Center calendar the way they already do. The website reads that calendar and shows only public events, upcoming ones first. {events.hidden} (Snapshot taken {snapshot}; past dates are dropped each time the site is built.)</p>
      </aside>
    </>
  );
}
