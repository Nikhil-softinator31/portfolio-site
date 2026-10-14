import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data";

const links = [["Selected work", "work"], ["About", "about"], ["Services", "services"], ["Contact", "contact"]];

export function Navigation({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  return <>
    <nav className="site-nav" aria-label="Main navigation">
      <a className="wordmark" href="#top">{profile.wordmark}</a>
      <div className="nav-links">{links.map(([label, id]) => <a href={`#${id}`} key={id}>{label}</a>)}</div>
      <a className="availability" href="#contact"><i />Book appointment</a>
      <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button>
    </nav>
    {menuOpen && <div className="mobile-menu">
      <button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button>
      {links.map(([label, id]) => <a onClick={() => setMenuOpen(false)} href={`#${id}`} key={id}>{label}</a>)}
      <a href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight /></a>
    </div>}
  </>;
}
