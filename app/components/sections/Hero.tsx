"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { media } from "../../data/media";
import { profile } from "../../data/profile";

export function Hero() {
  return <section className="hero" id="top" aria-label="Portfolio introduction">
    <div className="hero-backdrop" style={{ backgroundImage: `url(${media.hero})` }} aria-hidden="true" />
    <figure className="hero-portrait" style={{ backgroundImage: `url(${media.hero})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <figcaption><strong>Featured moving image</strong><small>Selected frame / 01</small></figcaption>
    </figure>
    <div className="hero-content">
      <p className="hero-overline">{profile.location}<span>/</span>{profile.role}</p>
      <h1 className="hero-title">
        <span className="hero-title-mask"><span className="line">CREATING WHAT IS</span></span>
        <span className="hero-title-mask"><span className="line"><span className="accent">WORTH REMEMBERING.</span></span></span>
      </h1>
      <div className="hero-intro">
        <p className="hero-copy">{profile.intro}</p>
        <div className="hero-actions"><a className="action light" href="#work">Explore portfolio <ArrowUpRight size={14} /></a><a className="action" href="#contact">Book appointment <ArrowUpRight size={14} /></a></div>
      </div>
    </div>
    <div className="hero-foot"><span>Scroll to explore</span><ArrowDown size={14} aria-hidden="true" /><span>01 / 06</span></div>
  </section>;
}
