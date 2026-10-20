# Canyon Springs website

The new site for Canyon Springs Christian Church (Middleton, Idaho), built as a static React site. Not the live site yet: that's https://www.canyonspringschristian.com/.

Preview: https://escherize.com/canyon-springs-site/

## What it does

- **Answers "when, where, kids" first.** Service times and the address sit under the homepage headline, so a phone sees them without scrolling. The Plan Your Visit page covers what to expect, how long it runs, what to wear, parking, kids check-in, and a "we're coming" form.
- **Sermons from YouTube.** `src/data/messages.json` is a snapshot of the channel. The real site would refresh it automatically.
- **Events from Church Center.** `src/data/events.json` is a snapshot of the public calendar. Past dates are dropped at build time, and the deploy reruns every Monday, so nothing goes stale.
- **Sermon notes from Word files.** Drop `YYYY-MM-DD-name.docx` into `notes-inbox/` and run `npm run notes`. It writes Markdown to `src/content/notes/`, and the message page turns the blanks into fill-in fields. Underline an answer in Word (instead of typing ______) and that blank gets a hint button.
- **Forms open an email** to the office until `formEndpoint` in `src/data/site.ts` points at a form service.
- **Real photos only.** The church's own photos plus USDA public-domain farmland shots taken near Middleton (`public/photos/SOURCES.txt`). No stock, no AI imagery.

## Run it

```sh
npm install
npm run dev      # http://localhost:3000/canyon-springs-site/
npm run build    # static site in dist/client/
npm run check    # type check
npm run notes    # convert notes-inbox/*.docx to src/content/notes/*.md
```

Pushing to `main` deploys to GitHub Pages (`.github/workflows/deploy.yml`). To build for a root domain instead, set `BASE_PATH=/`.

## Where things live

| What | Where |
|---|---|
| Church facts: address, times, links, nav | `src/data/site.ts` |
| Page text in Markdown (statement of faith) | `src/text/` |
| Sermon notes, one file per Sunday | `src/content/notes/` |
| Sermons and events snapshots | `src/data/messages.json`, `src/data/events.json` |
| Pages, one file per URL | `src/routes/` |
| Shared pieces: header and footer, sermon card, notes, form | `src/components/` |
| Look and feel: colors, type, every style | `src/styles/global.css` |
| Photos and logo | `public/` |

The header, mobile menu, and footer use `public/logo.png`, cropped from the supplied `public/Canyon-Springs-Horizontal-Logo-Original.png` to remove its white margins. `public/logo-mark.png` is the circular mark from that same image, used as the favicon. Keep the original colors; dark surfaces give the logo a white backing.

## Stack

Vite, React 19, TanStack Start with every route prerendered to HTML (`vite.config.ts`). No server. Content is Markdown and JSON in the repo, loaded at build time. react-markdown renders the Markdown; `src/lib/rehype-blanks.ts` turns `{{blank:answer}}` into fill-in fields.
