"use client";
import { useState } from "react";
import { media } from "../../data";

export function Process() {
  const [compare, setCompare] = useState(56);
  return <section id="process" className="process section-dark"><div className="process-top reveal"><p className="section-label">02 / The work between</p><h2>The shift from<br />raw to <em>resonant.</em></h2></div>
    <div className="comparison reveal" style={{ "--split": `${compare}%` } as React.CSSProperties}><img src={media.raw} alt="Raw-footage demonstration" /><div className="graded"><img src={media.final} alt="Finished-grade demonstration" /></div><span className="raw-label">Raw / demo</span><span className="final-label">Final grade / demo</span><input aria-label="Compare raw and final grade" type="range" min="0" max="100" value={compare} onChange={event => setCompare(Number(event.target.value))} /></div>
    <p className="comparison-note reveal">A working demonstration of the colour, contrast and emotional precision that finishing can bring to a frame.</p>
  </section>;
}
