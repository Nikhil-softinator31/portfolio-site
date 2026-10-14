import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data";

export function Contact() {
  return <section id="contact" className="contact"><p className="section-label">05 / Let’s work together</p><h2 className="reveal">Creating what<br />is <em>worth remembering.</em></h2><p className="contact-copy reveal">Now booking video editing, motion graphics and colour grading projects worldwide.</p><a className="email reveal" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight /></a><footer><span>© {new Date().getFullYear()} {profile.name}</span><span>Video editor / motion designer</span><div>{profile.socials.map(social => <a key={social.label} href={social.href}>{social.label}</a>)}</div></footer></section>;
}
