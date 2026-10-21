import { createFileRoute } from "@tanstack/react-router";
import { events, shortDate } from "../lib/content";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/students")({
  head: () => head("Canyon Students", "Canyon Students: 6th–12th grade. Wednesdays 6:30–8:30 PM and Sundays at 10:30 AM."),
  component: Students,
});

function Students() {
  const mine = events.upcoming.filter((e) => e.href === "/students");
  return (
    <>
      <PageHead title="Canyon Students" lead="A place for middle and high school students to know Jesus more and follow Him better." photo="students-nerf-night.webp" alt="Canyon Students gathered in the church lobby with colorful toy blasters for a Nerf night." pos="50% 40%" />
      <section className="wrap section split">
        <div>
          <h2>When we meet</h2>
          <p className="muted">Student Minister: Connor Hill<br /><a href="mailto:connor@canyonchristian.com">connor@canyonchristian.com</a></p>
        </div>
        <div className="meet">
          <article>
            <h3>Wednesday nights</h3>
            <p className="when">6:30–8:30 PM · 6th–12th grade</p>
            <p>An awesome time to find community and grow in relationship with others and with God. Games, dinner, a main lesson, and small groups where students break off by age to talk about what they learned and do life together.</p>
          </article>
          <article>
            <h3>Sunday mornings</h3>
            <p className="when">10:30 AM, during second service · middle school</p>
            <p>A class designed to help middle schoolers engage with Scripture together.</p>
          </article>
          <article>
            <h3>Sunday evenings</h3>
            <p className="when">1st and 3rd Sundays · 9th–12th grade</p>
            <p>High school small groups study the Bible, build friendships, and deepen their faith. Questions about scheduling? Email Connor.</p>
          </article>
        </div>
      </section>
      <section className="wrap section-tight split upnext">
        <div><h2 className="h-sm">Coming up</h2></div>
        <div>
          <ul className="list">
            {mine.map((e) => <li key={e.title + e.date}><span className="muted small">{shortDate(e.date)} · {e.time}</span><strong>{e.title}</strong></li>)}
            <li><span className="muted small">Wed, Nov 25 and Dec 23–30</span><strong>No youth group (Thanksgiving and Christmas breaks)</strong></li>
            <li><span className="muted small">June 19–25, 2027</span><strong>Mexico mission trip</strong><a href="https://canyon-springs-christian-church-451724.churchcenter.com/registrations/signups/3797101" rel="noopener">Apply on Church Center</a></li>
          </ul>
          <div className="btn-row"><a className="btn ghost" href="https://docs.google.com/forms/d/e/1FAIpQLSc24i1iwrMf8WwdfDm7NkwI8fV9fctZBrTjJmGYNrF8ztS55g/viewform" rel="noopener">Volunteer with students</a></div>
        </div>
      </section>
    </>
  );
}
