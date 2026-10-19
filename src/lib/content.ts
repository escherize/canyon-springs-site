// Content that lives as files in the repo: sermons, events, notes, beliefs.
import messagesJson from "../data/messages.json";
import eventsJson from "../data/events.json";

export type Message = { date: string; series: string; title: string; scripture: string; youtubeId: string; published: string };
export type Upcoming = { title: string; date: string; time: string; where: string; href: string };
export type Weekly = { title: string; when: string; who: string; href: string };
export type Note = { id: string; title: string; date: string; scripture: string; source: string; body: string };

export const messages: Message[] = messagesJson;

// Past events drop off at build time. The deploy runs weekly, so the list stays current without edits.
const today = new Date().toISOString().slice(0, 10);
export const events = {
  weekly: eventsJson.weekly as Weekly[],
  upcoming: (eventsJson.upcoming as Upcoming[]).filter((e) => e.date >= today),
  hidden: eventsJson.hidden,
};

// Sermon notes: one Markdown file per Sunday, made from the office's Word file by `npm run notes`.
const noteFiles = import.meta.glob("../content/notes/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

function parseNote(path: string, raw: string): Note {
  const id = path.split("/").pop()!.replace(/\.md$/, "");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta: Record<string, string> = {};
  for (const line of (m?.[1] ?? "").split("\n")) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1");
  }
  return { id, title: meta.title ?? id, date: meta.date ?? id.slice(0, 10), scripture: meta.scripture ?? "", source: meta.source ?? "", body: m?.[2] ?? raw };
}

export const notes: Note[] = Object.entries(noteFiles).map(([p, raw]) => parseNote(p, raw)).sort((a, b) => b.date.localeCompare(a.date));
export const noteFor = (date: string) => notes.find((n) => n.id.startsWith(date));

export { default as beliefs } from "../text/beliefs.md?raw";

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const longDate = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
export const shortDate = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
export const monthDay = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" });

// events.json links to pages by path ("/students"). Typed as a route so <Link> accepts it.
export const to = (href: string) => href as "/";
