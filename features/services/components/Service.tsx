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

      const scrollDistancePerCard = 700;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => cards.length * scrollDistancePerCard,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      cards.slice(1).forEach((card) => {
        timeline.to(card, {
          yPercent: 0,
          ease: "none",
          duration: 1,
        });
      });

      timeline.to(
        {},
        {
          duration: 1,
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="bg-[#0a0118] mt-20 md:mt-0">
      <h2 className="font-display text-3xl font-bold justify-center text-white sm:text-4xl mb-21 flex md:hidden">
        <LgvBebasText>სერვისები</LgvBebasText>
      </h2>
      <div
        ref={sectionRef}
        className="relative hidden md:flex h-screen justify-center overflow-hidden"
      >
        <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:mt-30 mt-20 hidden md:flex">
          <LgvBebasText>სერვისები</LgvBebasText>
        </h2>

        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className="absolute inset-0 items-center justify-center hidden md:flex"
            style={{ zIndex: index + 1 }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
      {services.map((service) => (
        <div key={service.id} className="flex mb-20 md:hidden">
          <ServiceCard service={service} />
        </div>
      ))}
    </section>
  );
};

export default Service;
