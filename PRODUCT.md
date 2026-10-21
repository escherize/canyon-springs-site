# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static React site: Vite, React 19, TanStack Start with every route prerendered. Content is Markdown and JSON in the repo. Plain CSS with tokens, no Tailwind. Hosted on GitHub Pages for preview; the real site goes to Cloudflare Pages or Netlify under the church's domain. Edited by staff through Lovable (synced to this GitHub repo) and by Bryan through Claude Code on branches.

## Users

- **Primary: first-time visitors on a phone.** They're deciding whether to come on Sunday. Their job: find the service times, the place and directions, what happens with their kids, and what to expect. Often the week before, or Sunday morning in the car.
- Secondary: members (events, sermons, giving, sign-ups) and online viewers (the weekly YouTube sermon and the Sunday 10:30 livestream).
- Editors: church staff, non-technical, plus Bryan as the long-term maintainer. They need to update events and sermons without help.

## Product Purpose

The church website for Canyon Springs Christian Church, Middleton, Idaho. Success means a newcomer can go from the first screen to "I know when, where, and what to do with my kids" in one scroll on a phone, and staff keep it current.

## Positioning

A local, family-oriented church: Sunday worship and teaching, a newborn–5th grade kids program at both services, a student ministry (grades 6–12), Life Groups, Women's Ministry, and a community Garden Outreach.

## Operating Context

- Sundays at 9:00 and 10:30 AM. Children's programs (newborn–5th grade) run at both services. Students meet Sundays at 10:30 AM and Wednesdays 6:30–8:30 PM.
- Address: 1444 Cornell Street, Middleton, Idaho 83644. Phone (208) 585-6788. Email office@canyonchristian.com.
- A new sermon video goes up on YouTube every week, with fill-in-the-blank sermon notes written in Word.
- Giving: Pushpay. There is a church app (App Store and Google Play). Events and sign-ups live in Church Center.

- Main pages: Home, About Us, Ministries, Watch, and Contact. Ministries groups Students, Kids, Life Groups, Women, and Garden; each retains its existing URL, with an overview at `/ministries`. Events, giving, and visit information remain secondary destinations.
- What we believe is a standalone page at `/beliefs`, linked from About Us and Plan a Visit without a main-menu item. About Us currently keeps the brief mission introduction, beliefs link, worship photo, and team; the expanded "What that means" definitions and full statement of faith are not shown there.
- About Us lists the elders after the staff in this order: Traber Cass, Jason Hill, Zach Hart.
- The Life Groups page opens its shared Google Drive group list in a new tab, leaving the church page open.
- The shared header pairs Plan a visit with Give Online. Give Online currently opens the existing `/give` page; its platform destination remains `church.giveUrl` in `src/data/site.ts`. On narrow screens the two buttons share a row below the logo and menu control, with the hero height and ministry anchor offsets adjusted for the taller header.

## Capabilities and Constraints

- Weekly content (sermons, events, notes) must flow from the tools staff already use: YouTube, Church Center, Word. A design that needs code to update is a bug.
- No server. Forms post to a form service or open an email.
- Undecided: the church's final name (Canyon Springs or Canyon Christian), who owns the domain, and who pays for Lovable.

## Brand Commitments

Selected style: Sage's muted green on warm cream, with gold and rust accents. Typography is DM Sans throughout with bold headings; decorative display lettering was removed for readability. Use the supplied Canyon Springs horizontal logo in its original colors. The preview banner is no longer shown.

## Evidence on Hand

- Research on church websites, October 2026: `~/dv/church_website/research-church-websites-2026-10-18.md`. Findings: service times, address and one Plan Your Visit button above the fold; a dedicated visit page with what to expect, parking, kids and a form; real photos only; automate what goes stale.
- The church's own photos from the current site, and USDA public-domain farmland photos taken near Middleton. No stock, no AI imagery.

## Product Principles

1. **Answer "when, where, kids" before anything else.**
2. **Staff can edit everything.**
3. **Phone first.**
4. **Plain words over church jargon.**

## Accessibility & Inclusion

WCAG AA contrast, tap targets of at least 44px, and real link text. Many congregants are older readers, so body text is at least 16px.
