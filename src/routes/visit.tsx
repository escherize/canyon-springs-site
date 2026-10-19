import { createFileRoute, Link } from "@tanstack/react-router";
import { church } from "../data/site";
import { asset } from "../lib/content";
import { PageHead } from "../components/PageHead";
import { Form } from "../components/Form";
import { head } from "../lib/head";

export const Route = createFileRoute("/visit")({
  head: () => head("Plan your visit", "Sundays at 9:00 and 10:30 AM at 1444 Cornell Street, Middleton. What to expect, parking, kids check-in, and how to let us know you're coming."),
  component: Visit,
});

const expect = [
  ["How long is it?", "About 75 minutes. Singing together, a message from the Bible, and a few minutes to say hello. Most people are back in the parking lot within an hour and a half."],
  ["What should I wear?", "Whatever you're comfortable in. You'll see jeans and boots next to Sunday best. Nobody is checking."],
  ["Where do I park?", "The lot is right in front of the building on Cornell Street, with spaces near the doors for guests and anyone who needs them. Greeters at the entrance can point you to the room, the coffee, and the kids' check-in."],
  ["Will I be singled out?", "No. You won't be asked to stand or introduce yourself. Say hi to as many or as few people as you like."],
  ["Is there coffee?", "Yes, in the lobby before and after every service. Bring it in with you."],
  ["Can I watch first?", "Of course. Every message is on YouTube, and the 10:30 service streams live, so you can hear the teaching before you walk in."],
];

function Visit() {
  return (
    <>
      <PageHead title="We can't wait to meet you" lead="Join us in person on Sunday at 9:00 or 10:30 AM. Here's everything you need for your first visit." />

      <section className="wrap section-tight split">
        <div className="stack">
          <h2 className="h-sm">When and where</h2>
          <dl className="facts">
            <div><dt>Sundays</dt><dd>9:00 & 10:30 AM. Worship and teaching at both.</dd></div>
            <div><dt>Kids</dt><dd>Newborn–5th grade, at both services. <Link to="/kids">About Canyon Kids</Link></dd></div>
            <div><dt>Students</dt><dd>6th–12th grade: Sundays at 10:30 AM, and Wednesdays 6:30–8:30 PM for games, dinner, a lesson and small groups.</dd></div>
            <div><dt>Address</dt><dd>{church.street}<br />{church.city}<br /><a href={church.mapUrl} rel="noopener">Get directions</a></dd></div>
            <div><dt>Can't make it?</dt><dd>The 10:30 service streams live. <Link to="/watch">Watch online</Link></dd></div>
          </dl>
        </div>
        <figure className="arrive">
          <img src={asset("photos/building.jpg")} width="1600" height="780" alt="The front entrance of Canyon Springs Christian Church: a peaked roof, stone pillars, glass doors and a cross on the tower." />
          <figcaption className="small muted">Look for this entrance at 1444 Cornell Street. Park out front and come in through the glass doors.</figcaption>
        </figure>
      </section>

      <section className="section expect">
        <div className="wrap">
          <h2>What to expect</h2>
          <div className="expect-grid">
            <div>
              <h3>Family friendly</h3>
              <p>Jesus loves your whole family and so do we. You will find age-appropriate classes designed to help you all deepen your relationship with Jesus.</p>
            </div>
            <div>
              <h3>Warm and welcoming</h3>
              <p>Everyone is welcome! You can expect to be greeted with kindness and a warm smile. Come as you are and have a seat at the table.</p>
            </div>
            <div>
              <h3>Lovingly challenging</h3>
              <p>Each of us has next steps in our faith journey. We will not compromise on guiding everyone to Scripture as we challenge you to become more like Christ.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap section split">
        <div>
          <h2>Good questions</h2>
          <p className="muted">The things people wonder about before a first Sunday.</p>
        </div>
        <div className="faq">
          {expect.map(([q, a]) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </section>

      <section className="section-tight kids-band">
        <div className="wrap split">
          <div>
            <h2>Bringing kids?</h2>
            <p className="muted">Here's how check-in works on your first Sunday.</p>
          </div>
          <ol className="steps">
            <li><strong>Stop at the front desk.</strong> Someone will take your names, your children's names and birthdates, and your contact info. This registers them so you can check in.</li>
            <li><strong>Check in at the hallway computers.</strong> Enter your phone number, pick your kids, and tap done. A label prints for each child, plus a parent tag for you.</li>
            <li><strong>Drop off up to ten minutes early.</strong> Classes open once two teachers are in the room.</li>
            <li><strong>Keep your parent tag.</strong> You'll need the matching tag at pickup. If your child needs you during the service, their code shows on the screen.</li>
          </ol>
        </div>
      </section>

      <section className="wrap section split" id="coming">
        <div>
          <h2>Let us know you're coming</h2>
          <p className="muted">Optional, but it helps. We'll have a greeter watching for you, and your kids pre-registered so check-in takes a minute instead of five.</p>
        </div>
        <Form className="req" subject="We're coming on Sunday" submitLabel="We're coming" done={<><h2>See you Sunday.</h2><p>We'll be watching for you. If anything changes, no need to tell us, just come when you can.</p><p><Link to="/">Back to the home page</Link></p></>}>
          <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
          <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
          <div className="field">
            <label htmlFor="service">Which service?</label>
            <select id="service" name="service"><option>9:00 AM</option><option>10:30 AM</option><option>Not sure yet</option></select>
          </div>
          <div className="field"><label htmlFor="kids">Kids coming with you? (names and ages, optional)</label><input id="kids" name="kids" placeholder="For example: Ava, 4 and Sam, 9" /></div>
          <div className="field"><label htmlFor="questions">Anything you'd like to ask first? (optional)</label><textarea id="questions" name="questions" rows={3} /></div>
        </Form>
      </section>

      <section className="on-dark section-tight">
        <div className="wrap closing">
          <h2>Questions before Sunday?</h2>
          <p>Call <a href={church.phoneHref}>{church.phone}</a> or email <a href={`mailto:${church.email}`}>{church.email}</a>.</p>
          <div className="btn-row"><a className="btn" href={church.mapUrl} rel="noopener">Get directions</a><Link className="btn ghost" to="/about" hash="beliefs">What we believe</Link></div>
        </div>
      </section>
    </>
  );
}
