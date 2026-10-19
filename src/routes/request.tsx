import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHead } from "../components/PageHead";
import { Form } from "../components/Form";
import { head } from "../lib/head";

export const Route = createFileRoute("/request")({
  head: () => head("Request a change", "Ask for a change to the Canyon Springs website."),
  component: Request,
});

const pages = ["Home", "Plan a visit", "Watch / sermon notes", "Events", "Kids", "Students", "Life Groups", "Women's Ministry", "Garden Outreach", "About / beliefs", "Give", "Contact", "Something new"];

function Request() {
  return (
    <>
      <PageHead title="Request a website change" lead="Spot something out of date, or need something new? Tell us here. A person (sometimes with AI's help) makes the change, and you'll get an email when it's live." />
      <section className="wrap section-tight split">
        <aside className="stack small muted">
          <h2 className="h-xs">You don't need this form for</h2>
          <ul>
            <li><strong>Sermons:</strong> upload to YouTube as usual.</li>
            <li><strong>Sermon notes:</strong> attach the Word file below, or drop it in the shared folder.</li>
            <li><strong>Events:</strong> add them to the Church Center calendar.</li>
          </ul>
          <p>Those show up on the site by themselves.</p>
        </aside>
        <Form className="req" subject="Website change request" submitLabel="Send request" done={<><h2>Thanks, got it.</h2><p>You'll get an email when the change is live.</p><p><Link to="/">Back to the home page</Link></p></>}>
          <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required aria-describedby="email-hint" />
            <p className="hint" id="email-hint">We'll email you when the change is live.</p>
          </div>
          <div className="field"><label htmlFor="page">Which page?</label><select id="page" name="page">{pages.map((p) => <option key={p}>{p}</option>)}</select></div>
          <div className="field"><label htmlFor="what">What should change?</label><textarea id="what" name="what" rows={6} required placeholder="For example: the Women's retreat moved to March 14." /></div>
          <div className="field">
            <label htmlFor="file">Attach a file (optional)</label>
            <input id="file" name="file" type="file" accept=".docx,.pdf,.jpg,.jpeg,.png" aria-describedby="file-hint" />
            <p className="hint" id="file-hint">Photos, a flyer, or sermon notes as a Word file.</p>
          </div>
        </Form>
      </section>
    </>
  );
}
