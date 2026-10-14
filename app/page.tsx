"use client";

import { useEffect, useRef, useState } from "react";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { Showreel } from "./components/sections/Showreel";
import { Work } from "./components/sections/Work";
import { Navigation } from "./components/Navigation";
import { StoryRail } from "./components/StoryRail";
import { ShowreelModal } from "./components/ShowreelModal";
import { usePageMotion } from "./hooks/usePageMotion";

export default function Home() {
  const root = useRef<HTMLElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [reelOpen, setReelOpen] = useState(false);

  usePageMotion(root);

  useEffect(() => {
    document.body.style.overflow = reelOpen || menuOpen ? "hidden" : "";
    if (reelOpen) window.setTimeout(() => document.getElementById("close-reel")?.focus(), 0);
    return () => { document.body.style.overflow = ""; };
  }, [reelOpen, menuOpen]);

  useEffect(() => {
    const closeOverlays = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setReelOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOverlays);
    return () => window.removeEventListener("keydown", closeOverlays);
  }, []);

  const closeReel = () => {
    setReelOpen(false);
    opener.current?.focus();
  };

  return <main ref={root}>
    <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <StoryRail />
    <Hero />
    <Showreel opener={opener} onOpen={() => setReelOpen(true)} />
    <Work />
    <Process />
    <About />
    <Services />
    <Contact />
    {reelOpen && <ShowreelModal onClose={closeReel} />}
  </main>;
}
