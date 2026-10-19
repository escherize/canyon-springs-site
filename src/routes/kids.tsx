import { createFileRoute } from "@tanstack/react-router";
import { church } from "../data/site";
import { PageHead } from "../components/PageHead";
import { head } from "../lib/head";

export const Route = createFileRoute("/kids")({
  head: () => head("Canyon Kids", "Canyon Kids: newborn through 5th grade, Sundays at 9:00 and 10:30 AM."),
  component: Kids,
});

const faq = [
  ["What ages are each class?", "Nursery/Toddler: 0–3 years. PreK/K: 4–5. 1st–3rd: 6–8 years old. 4th–5th: 9–11 years old."],
  ["It's my first time. How do I register my children?", "There is a computer at the front desk where someone will ask for your names, your children's names, birthdates, address, email, and phone number. This registers them in the system so you can check them in."],
  ["How do we check in?", "There are check-in computers in the main hallway. Enter your phone number, select the children you're checking in, and click \"done.\" Labels will print for each child to stick on their shirt. You keep the parent tag for pickup; the person picking up a child must have the matching tag."],
  ["What time can I check my child in?", "Children can begin to arrive in class ten minutes before service begins, as long as there are two teachers in the class."],
  ["Who are the teachers?", "Loving, dedicated volunteers who care about your child and their spiritual growth. Each volunteer is a follower of Christ, has attended the church for at least 3 months, and has a cleared background check. They're trained by the Children's Director, and some are experienced with children with special needs."],
  ["How do I know my children are safe?", "Your child stays in the Children's Ministry area until you pick them up with a security tag that matches their code. Trained team members serve on the security team each week: they walk the halls, check classrooms, and keep everyone at church safe."],
  ["What if my child needs me during the service?", "The code on your parent tag will appear on the screen during the service (for example, \"Child pickup: XMN\"). Head to the class to check in with your child and their teacher."],
  ["What if my child needs the restroom?", "An adult accompanies them and waits outside. If your child needs help, a second qualified adult is asked to assist, so your child is never alone with an adult. In the nursery, you'll be asked whether you'd like the teacher to change diapers or would rather be paged."],
  ["What will my child learn?", "Each week children are taught chronologically through the Bible: 15 minutes to socialize and pray with their class, worship with our worship leaders, then back to class to read the Bible, answer questions, do activities, and work on a memory verse. At pickup you'll get a five-day family devotional, plus a monthly newsletter."],
];

function Kids() {
  return (
    <>
      <PageHead title="Canyon Kids" lead="Newborn through 5th grade, at both Sunday services. A place to equip children and families to pursue a life rooted in Christ and the Word of God." photo="christmas-play.jpg" alt="Kids in costume with hands raised at a Christmas play rehearsal." pos="50% 35%" />
      <section className="wrap section split">
        <div><h2>Our mission</h2></div>
        <dl className="facts">
          <div><dt>Teach children</dt><dd>To love God with all their hearts, souls, and minds.</dd></div>
          <div><dt>Train up children</dt><dd>To live a life rooted in Christ.</dd></div>
          <div><dt>Empower families</dt><dd>To be active participants in teaching and training.</dd></div>
        </dl>
      </section>
      <section className="section faq-band">
        <div className="wrap split">
          <div>
            <h2>Questions parents ask</h2>
            <p className="muted">Still wondering about something? Email <a href="mailto:Kids@canyonchristian.com">Kids@canyonchristian.com</a> or call {church.phone}.</p>
          </div>
          <div className="faq">
            {faq.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
          </div>
        </div>
      </section>
      <section className="wrap section-tight split">
        <div><h2 className="h-sm">Get involved</h2></div>
        <div className="btn-row">
          <a className="btn" href="https://www.canyonspringschristian.com/_files/ugd/4f69fe_58f2c86ab8a247b9a445908c5b2cec25.pdf" rel="noopener">Volunteer application</a>
          <a className="btn ghost" href="https://www.amazon.com/hz/wishlist/ls/CT7OSTOXSXIX" rel="noopener">Classroom wish list</a>
          <a className="btn ghost" href="https://www.instagram.com/canyon_kids_" rel="noopener">Canyon Kids on Instagram</a>
        </div>
      </section>
    </>
  );
}
