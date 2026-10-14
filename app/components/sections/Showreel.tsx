import type { RefObject } from "react";
import { Play } from "lucide-react";
import { media } from "../../data";

export function Showreel({ opener, onOpen }: { opener: RefObject<HTMLButtonElement | null>; onOpen: () => void }) {
  return <section id="showreel" className="showreel section-dark"><div className="section-label reveal">00 / Selected reel</div>
    <div className="showreel-head reveal"><h2>Stories, shaped<br />for the <em>screen.</em></h2><p>A concise look at the rhythm, colour and motion behind the work.</p></div>
    <button ref={opener} className="reel-frame reveal" onClick={onOpen} style={{ backgroundImage: `url(${media.showreel})` }} aria-label="Open showreel player"><span className="frame-gradient" /><span className="play-disc"><Play fill="currentColor" size={22} /></span><span className="reel-caption">Showreel <b>02:14</b></span></button>
  </section>;
}
