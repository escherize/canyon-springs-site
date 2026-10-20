# Canyon Springs website

The new site for Canyon Springs Christian Church (Middleton, Idaho), built as a static React site. Not the live site yet: that's https://www.canyonspringschristian.com/.

Preview: https://escherize.com/canyon-springs-site/

## What it does

- **Answers "when, where, kids" first.** Service times and the address sit under the homepage headline, so a phone sees them without scrolling. The Plan Your Visit page covers what to expect, how long it runs, what to wear, parking, kids check-in, and a "we're coming" form.
- **Screen-filling homepage photo.** The hero fills the visible viewport below the 4.5rem header and its 1px border, on desktop and phones. Dynamic viewport sizing follows mobile browser controls; the section can grow if its text and buttons need more space. Belong / Grow / Serve follows directly below it, with no separate Sunday information box.
- **Prominent, left-aligned visitor information.** Hero headings, service times, address, and action labels use a larger responsive scale, set lower in the photo with viewport-aware top spacing. The hero and closing visit buttons align with the text above; actions wrap onto left-aligned rows on narrow screens.
- **Pages and menu.** The right-aligned main menu is Home, About Us, Ministries, Watch, and Contact. Ministries opens a keyboard- and touch-accessible submenu for Students, Kids, Life Groups, Women, and Garden, plus an All ministries overview at `/ministries`. The homepage Serve section also links to that overview. Directory labels use bold DM Sans with space between names and descriptions for readability. Existing ministry URLs stay unchanged. Events, giving, and visit pages remain available through secondary links. Mobile navigation closes after choosing a page.
- **What we believe.** The full, unchanged statement of faith lives at `/beliefs`, rendered from `src/text/beliefs.md`. About Us links to it rather than embedding the statement. Plan a Visit and the existing footer belief link also point there; there is no primary menu item.
- **Canyon Kids.** `/kids` adapts the [current ministry page](https://www.canyonspringschristian.com/canyonkids) and [FAQ](https://www.canyonspringschristian.com/general-5) to the Sage style: mission, values, Know/Do goals, Scripture, 11 FAQ topics, all 10 parent resources, volunteering, wish list, contact, and social links. Editable content is in `src/data/kids.ts`. Prayer stays on the page with Deuteronomy 6:5–7 rather than linking to the unfinished Wix prayer template; events link to the church events page instead of duplicating empty Wix event widgets.
- **Women's Ministry.** `/women` adapts the [ministry's Google Site](https://sites.google.com/view/csccwomensministry/) to Sage: Bible studies, Coffee & Connect, three Life Groups with flyer-transcribed contacts, the annual retreat, meal trains, Facebook, and newsletter updates. Edit `src/data/women.ts`. The October 9–11, 2026 retreat and May tea party are historical; retreat pricing and the original registration link are archived, not promoted as a new sign-up. Study and newsletter details that the source has not published use leadership contact links instead of invented content or placeholder graphics.
- **Sermons from YouTube.** `src/data/messages.json` is a snapshot of the channel; the Talents entry uses [the supplied October 11 video](https://youtu.be/00mW4YF0nsc). The real site would refresh the snapshot automatically.
- **Events from Church Center.** `src/data/events.json` is a snapshot of the public calendar. Weekly listings cover Sunday worship, Canyon Students, and Women's Life Group. Past dates are dropped at build time, and the deploy reruns every Monday, so nothing goes stale.
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
| Canyon Kids mission, values, goals, FAQ, and resource links | `src/data/kids.ts` |
| Women's ministry gatherings, Life Groups, retreat, and resource links | `src/data/women.ts` |
| Statement of faith for `/beliefs` | `src/text/beliefs.md` |
| Sermon notes, one file per Sunday | `src/content/notes/` |
| Sermons and events snapshots | `src/data/messages.json`, `src/data/events.json` |
| Pages, one file per URL | `src/routes/` |
| Shared pieces: header and footer, sermon card, notes, form | `src/components/` |
| Look and feel: colors, type, every style | `src/styles/global.css` |
| Photos and logo | `public/` |

The header and mobile menu use `public/logo-horizontal.png` (804 × 215), cropped only to remove white margins from the supplied [horizontal logo](https://github.com/escherize/canyon_springs/blob/main/raw/Canyon_Springs_Christian_Church_02_horizontal_logo.png). The footer uses `public/logo-footer.png` at the same dimensions: transparent outside the circular artwork and lettering, with the existing letterforms reversed to the site's cream for contrast against the dark footer. The landscape's colors and enclosed white details are preserved; there is no white backing in the footer. The mobile menu retains its white backing. The favicon uses `public/logo-circle.png` (256 × 256), cropped and resized from the supplied [circular valley mark](https://github.com/escherize/canyon_springs/blob/main/raw/Minimalist%20Circular%20Valley%20Landscape%20Logo.png).

The site uses the **Sage** palette: muted green and warm cream, with gold and rust accents. DM Sans is used throughout, including bold headings, menus, and Scripture passages, for consistent readability. Decorative display fonts are not loaded. This style applies to every route; there is no theme selector or preview banner.

## Stack

Vite, React 19, TanStack Start with every route prerendered to HTML (`vite.config.ts`). No server. Content is Markdown and JSON in the repo, loaded at build time. react-markdown renders the Markdown; `src/lib/rehype-blanks.ts` turns `{{blank:answer}}` into fill-in fields.
