import { ArrowUpRight } from "lucide-react";
import { media, profile } from "../../data";

export function About() {
  return <section id="about" className="about section-light"><p className="section-label reveal">03 / About & craft</p><div className="about-grid"><div className="portrait reveal"><img src={media.about} alt="Editorial frame from Raghav Bharti's work" /><span>Story first. Always.</span></div><div className="about-copy reveal"><h2>Pacing is<br /><em>emotion.</em></h2><p>{profile.bio}</p><p>{profile.approach}</p><a className="under-link" href="#contact">Let’s make something memorable <ArrowUpRight size={16} /></a></div></div></section>;
}
