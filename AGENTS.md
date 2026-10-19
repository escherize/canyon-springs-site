# For AI editors

This repo is edited by people and by AI tools (Lovable, Claude Code, Copilot). Read this before changing anything.

## Where content lives

Keep content out of components. Page copy and facts belong in files that a non-programmer can edit:

- **Facts** (address, service times, phone, links, nav): `src/data/site.ts`. Change them there, never inline.
- **Long text** (statement of faith, anything over a paragraph that is not page layout): Markdown in `src/text/`, rendered with the `Markdown` component.
- **Sermon notes**: `src/content/notes/*.md`, generated from Word files by `npm run notes`. Never hand-edit these; fix the `.docx` in `notes-inbox/` and rerun.
- **Sermons and events**: `src/data/messages.json` and `src/data/events.json`. These are snapshots of YouTube and Church Center. Edit them only to update the snapshot.
- **Photos**: `public/photos/`, with the source of each listed in `public/photos/SOURCES.txt`. Only the church's own photos or public-domain shots of the area. No stock photos, no AI-generated images.

## Style

- All styles are in `src/styles/global.css`, as plain CSS with the tokens at the top. Do not add Tailwind, CSS-in-JS, or a component library.
- Palette and fonts follow the brief: cream ground, olive primary, gold and rust accents, Montserrat headings, DM Sans body. Do not introduce new colors; use the tokens.
- Body text stays at least 16px. Tap targets at least 44px. Contrast AA or better.
- Content is visible by default; animation only adds. Respect `prefers-reduced-motion`.

## Pages

- One file per URL in `src/routes/`. TanStack Router file routing: `about.tsx` is `/about`, `watch/$date.tsx` is `/watch/:date`. Do not create `src/pages/`.
- Every page sets its `<title>` and description with `head()` from `src/lib/head.ts`.
- Internal links use `<Link to="/...">`. External links use `<a rel="noopener">`.
- `src/routeTree.gen.ts` is generated. Never edit it.

## Build

- Every route is prerendered to static HTML. Nothing may depend on a server at runtime; browser-only code goes in `useEffect`.
- `npm run check` and `npm run build` must pass before a change is done. The deploy runs both.
- Do not rewrite published git history (force-push, rebase, amend pushed commits). Lovable's sync depends on it.
