"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";
import { services } from "../data/data";
import LgvBebasText from "@/features/news/components/LgvBebasText";

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(
        (card): card is HTMLDivElement => card !== null,
      );

      if (cards.length < 2) return;

      if (prefersReducedMotion) {
        gsap.set(cards, { yPercent: 0 });
        return;
      }

      gsap.set(cards.slice(1), { yPercent: 100 });

      const scrollDistancePerCard = 900;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${(cards.length - 1) * scrollDistancePerCard}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.slice(1).forEach((card, i) => {
        timeline.to(card, { yPercent: 0, ease: "none", duration: 1 }, i);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-[#0a0118]">
      <h2 className="font-display text-center text-3xl font-bold text-white sm:text-4xl">
        <LgvBebasText>სერვისები</LgvBebasText>
      </h2>

      <div
        ref={sectionRef}
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
