import type { RefObject } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageMotion(root: RefObject<HTMLElement | null>) {
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.timeline()
      .from(".site-nav", { y: -16, opacity: 0, duration: .65, ease: "power3.out" })
      .from(".hero-backdrop", { scale: 1.06, opacity: 0, duration: 1.2, ease: "power2.out" }, "-=.42")
      .from(".hero-portrait", { y: 28, opacity: 0, duration: .9, ease: "power3.out" }, "-=.78")
      .from(".hero-overline, .hero-title .line", { yPercent: 115, opacity: 0, stagger: .11, duration: .9, ease: "power4.out" }, "-=.68")
      .from(".hero-intro, .hero-foot", { y: 18, opacity: 0, stagger: .1, duration: .6, ease: "power3.out" }, "-=.38");
    gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
      gsap.from(element, { y: 24, opacity: 0, duration: .75, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
    });
    gsap.utils.toArray<HTMLElement>(".work-item").forEach((element) => {
      gsap.from(element, { y: 28, opacity: 0, duration: .8, ease: "power3.out", clearProps: "transform", scrollTrigger: { trigger: element, start: "top 88%", once: true } });
    });
  }, { scope: root });
}
