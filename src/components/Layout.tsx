import type { MouseEvent, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { church, nav, footerNav } from "../data/site";
import { asset } from "../lib/content";

const Menu = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);
const Close = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);

function closeNavigation(event: MouseEvent<HTMLAnchorElement>) {
  event.currentTarget.closest("details")?.removeAttribute("open");
  event.currentTarget.closest<HTMLElement>("nav[popover]")?.hidePopover();
}

function NavigationItems() {
  return nav.map((item) => (
    <li key={item.to}>
      {"children" in item ? (
        <details
          className="nav-group"
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape" && event.currentTarget.open) {
              event.preventDefault();
              event.stopPropagation();
              event.currentTarget.open = false;
              event.currentTarget.querySelector("summary")?.focus();
            }
          }}
        >
          <summary>
            {item.label}
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </summary>
          <ul className="nav-submenu">
            <li><Link to={item.to} onClick={closeNavigation} activeProps={{ "aria-current": "page" }}>{item.overviewLabel}</Link></li>
            {item.children.map((child) => (
              <li key={child.to}><Link to={child.to} onClick={closeNavigation} activeProps={{ "aria-current": "page" }}>{child.label}</Link></li>
            ))}
          </ul>
        </details>
      ) : (
        <Link to={item.to} onClick={closeNavigation} activeOptions={{ exact: item.to === "/" }} activeProps={{ "aria-current": "page" }}>{item.label}</Link>
      )}
    </li>
  ));
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="wrap bar">
          <Link className="brand" to="/" aria-label={`${church.name}, home`}>
            <img src={asset("logo.png")} width="676" height="198" alt="" />
          </Link>
          <nav aria-label="Main" className="nav-desktop">
            <ul>
              <NavigationItems />
            </ul>
          </nav>
          <div className="bar-actions">
            <Link className="btn" to="/visit">Plan a visit</Link>
            <button className="menu-btn" popoverTarget="menu" aria-label="Open menu"><Menu /></button>
          </div>
        </div>
        <nav id="menu" popover="auto" aria-label="Menu" className="menu on-dark">
          <div className="menu-top">
            <img className="logo-panel" src={asset("logo.png")} width="676" height="198" alt={church.name} />
            <button popoverTarget="menu" popoverTargetAction="hide" className="menu-btn" aria-label="Close menu"><Close /></button>
          </div>
          <ul>
            <NavigationItems />
          </ul>
          <p className="menu-meta">Sundays {church.services.join(" & ")} AM<br />{church.street}, Middleton</p>
        </nav>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer on-dark">
        <div className="wrap foot-grid">
          <div>
            <img className="logo-panel foot-logo" src={asset("logo.png")} width="676" height="198" alt={church.name} loading="lazy" />
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
