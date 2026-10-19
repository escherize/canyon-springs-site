import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { church, nav, footerNav, snapshot } from "../data/site";
import { asset } from "../lib/content";

const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);
const Close = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="preview-note">
        <div className="wrap">
          <strong>Preview of the new site, not the live one.</strong> Sermons and events are a snapshot of YouTube and Church Center from {snapshot}. The real site would update itself.
        </div>
      </div>

      <header className="site-header">
        <div className="wrap bar">
          <Link className="brand" to="/" aria-label={`${church.name}, home`}>
            <img src={asset("logo.png")} width="640" height="154" alt="" />
          </Link>
          <nav aria-label="Main" className="nav-desktop">
            <ul>
              {nav.slice(1).map((l) => (
                <li key={l.to}><Link to={l.to} activeProps={{ "aria-current": "page" }}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>
          <div className="bar-actions">
            <Link className="btn" to="/visit">Plan a visit</Link>
            <button className="menu-btn" popoverTarget="menu" aria-label="Open menu"><Menu /></button>
          </div>
        </div>
        <nav id="menu" popover="auto" aria-label="Menu" className="menu on-dark">
          <div className="menu-top">
            <img className="logo-white" src={asset("logo.png")} width="640" height="154" alt={church.name} />
            <button popoverTarget="menu" popoverTargetAction="hide" className="menu-btn" aria-label="Close menu"><Close /></button>
          </div>
          <ul>
            {nav.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}
          </ul>
          <p className="menu-meta">Sundays {church.services.join(" & ")} AM<br />{church.street}, Middleton</p>
        </nav>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer on-dark">
        <div className="wrap foot-grid">
          <div>
            <img className="logo-white foot-logo" src={asset("logo.png")} width="640" height="154" alt={church.name} loading="lazy" />
            <p className="muted">A Place to Belong • A Place to Grow • A Place to Serve</p>
          </div>
          <div>
            <h2 className="foot-h">Sundays</h2>
            <p>{church.services.join(" & ")} AM<br />Kids programs at both</p>
            <p><a href={church.mapUrl} rel="noopener">{church.street}<br />{church.city}</a></p>
          </div>
          <div>
            <h2 className="foot-h">Reach us</h2>
            <p><a href={church.phoneHref}>{church.phone}</a><br /><a href={`mailto:${church.email}`}>{church.email}</a></p>
            <p className="socials">
              <a href={church.facebook} rel="noopener">Facebook</a>
              <a href={church.instagram} rel="noopener">Instagram</a>
              <a href={church.youtube} rel="noopener">YouTube</a>
            </p>
          </div>
          <div>
            <h2 className="foot-h">More</h2>
            <ul className="foot-links">
              {footerNav.map((l) => <li key={l.label}><Link to={l.to} hash={"hash" in l ? l.hash : undefined}>{l.label}</Link></li>)}
            </ul>
          </div>
        </div>
        <div className="wrap foot-base small">
          <p>© 2026 {church.name}</p>
          <p>Photos: farmland near Middleton, USDA NRCS (public domain), and the church's own photos and videos.</p>
        </div>
      </footer>
    </>
  );
}
