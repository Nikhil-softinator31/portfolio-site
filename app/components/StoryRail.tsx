"use client";

import { useEffect, useState } from "react";

const chapters = [
  { id: "top", number: "00", label: "Opening" },
  { id: "showreel", number: "01", label: "Showreel" },
  { id: "work", number: "02", label: "Selected work" },
  { id: "process", number: "03", label: "The cut" },
  { id: "about", number: "04", label: "About" },
  { id: "services", number: "05", label: "Services" },
  { id: "contact", number: "06", label: "Contact" },
];

export function StoryRail() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const targets = chapters
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      const center = window.innerHeight / 2;
      const distanceToCenter = (entry: IntersectionObserverEntry) => {
        const { top, bottom } = entry.boundingClientRect;
        return top <= center && bottom >= center ? 0 : Math.min(Math.abs(top - center), Math.abs(bottom - center));
      };
      const closest = visible.sort((a, b) => distanceToCenter(a) - distanceToCenter(b))[0];
      setActive(closest.target.id);
    }, { rootMargin: "-38% 0px -38% 0px", threshold: 0 });

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const tone = active === "work" || active === "about" ? "on-light" : active === "contact" ? "on-contact" : "";

  return <nav className={`story-rail ${tone}`} aria-label="Story chapters">
    {chapters.map(({ id, number, label }) => <a
      key={id}
      href={`#${id}`}
      aria-label={`${number} ${label}`}
      aria-current={active === id ? "location" : undefined}
      className={active === id ? "active" : ""}
    ><span>{number}</span><i aria-hidden="true" /><b>{label}</b></a>)}
  </nav>;
}
