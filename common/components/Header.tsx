"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { id: 1, label: "მთავარი", href: "/" },
  { id: 2, label: "ჩვენს შესახებ", href: "/about" },
  { id: 3, label: "ეპიზოდები", href: "/episodes" },
  { id: 4, label: "რუბრიკები", href: "/rubric" },
  { id: 5, label: "სერვისები", href: "/services" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);
  const indicatorRef = useRef<HTMLSpanElement>(null);

  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileTl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useGSAP(() => {
    mobileTl.current = gsap.timeline({ paused: true })
      .to(".mobile-only-nav", {
        x: "0%",
        duration: 0.4,
        ease: "power3.inOut",
      }, 0)
      .to(line1Ref.current, { y: 10, rotate: 45, duration: 0.3, ease: "power2.inOut" }, 0)
      .to(line2Ref.current, { opacity: 0, scaleX: 0, duration: 0.2, ease: "power2.inOut" }, 0)
      .to(line3Ref.current, { y: -10, rotate: -45, duration: 0.3, ease: "power2.inOut" }, 0);
  }, { scope: containerRef });

  useGSAP(() => {
    if (window.innerWidth < 1024) return;

    const activeIndex = navLinks.findIndex((link) => link.href === pathname);
    const activeElement = linkRefs.current[activeIndex];

    if (activeElement && indicatorRef.current) {
      gsap.set(indicatorRef.current, {
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        opacity: 1,
      });
    }
  }, { dependencies: [pathname], scope: containerRef });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, index: number) => {
    if (pathname === href) return;

    if (window.innerWidth >= 1024) {
      e.preventDefault();

      const targetElement = linkRefs.current[index];
      if (targetElement && indicatorRef.current) {
        gsap.to(indicatorRef.current, {
          left: targetElement.offsetLeft,
          width: targetElement.offsetWidth,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            router.push(href);
          },
        });
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        const activeIndex = navLinks.findIndex((link) => link.href === pathname);
        const activeElement = linkRefs.current[activeIndex];
        if (activeElement && indicatorRef.current) {
          gsap.set(indicatorRef.current, {
            left: activeElement.offsetLeft,
            width: activeElement.offsetWidth,
          });
        }
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  useEffect(() => {
    if (!mobileTl.current) return;
    if (isMenuOpen) {
      mobileTl.current.play();
    } else {
      mobileTl.current.reverse();
    }
  }, [isMenuOpen]);

  return (
    <header ref={containerRef} className="bg-[#000210] font-sans overflow-x-clip fixed w-full top-0 left-0 z-50">
      <div className="max-w-300 w-full px-4 py-4 mx-auto flex relative items-center justify-between">

        <Link href="/">
          <Image
            width={108}
            height={80}
            src="/assets/images/logo.svg"
            alt="Logo"
            loading="eager"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="relative flex flex-row items-center gap-6 px-4">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                className="py-1 px-2 text-center"
              >
                <Link
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, index)}
                  className={`duration-200 text-[16px] font-medium ${pathname === link.href
                      ? "text-[#FCF8FF]"
                      : "text-[#A5A1B8] hover:text-[#FCF8FF]"
                    }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <span
              ref={indicatorRef}
              className="hidden lg:block absolute -bottom-2 h-0.5 bg-[#FED403] opacity-0"
            />
          </ul>
        </nav>

        <Link
          href="/contact"
          className="bg-black hidden lg:flex hover:bg-[#FED403] group duration-200 hover:text-black border border-[#FED403] py-3 text-[#FED403] font-bold text-[16px] rounded-full pl-9 pr-3 items-center gap-3"
        >
          კონტაქტი
          <span className="p-1.25 border border-[#FED403] rounded-full group-hover:border-black duration-200">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              className="fill-[#FED403] group-hover:fill-black"
            >
              <path d="M2.96413 13.9345C2.73458 14.0411 2.5165 14.0176 2.3099 13.8641C2.1033 13.7107 2 13.4877 2 13.1951V9.59837L7.50933 7.99981L2 6.40124V2.80447C2 2.5114 2.1033 2.2884 2.3099 2.13547C2.5165 1.98254 2.73458 1.95909 2.96413 2.06513L13.5696 7.26047C13.8565 7.407 14 7.65345 14 7.99981C14 8.34616 13.8565 8.59261 13.5696 8.73914L2.96413 13.9345Z" />
            </svg>
          </span>
        </Link>

        <nav className="mobile-only-nav lg:hidden fixed top-26.5 right-0 w-full h-[calc(100vh-80px)] translate-x-full z-50">
          <ul className="flex flex-col w-full bg-[#0F011D] h-full px-6 py-8 pb-16 items-start gap-6 justify-between">
            <div className="flex flex-col w-full gap-6">
              {navLinks.map((link) => (
                <li key={link.id} className="py-2 w-full text-left">
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`duration-200 text-[22px] font-bold leading-[100%] ${pathname === link.href
                      ? "text-[#FED403]"
                      : "text-[#A5A1B8] hover:text-[#FCF8FF]"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </div>

            <li className="w-full pt-4 flex items-center justify-end">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-black flex hover:bg-[#FED403] group duration-200 hover:text-black border border-[#FED403] py-3 pl-9 text-[#FED403] font-bold text-[16px] rounded-full pr-3 items-center gap-3 w-fit"
              >
                კონტაქტი
                <span className="p-1.25 border flex items-center justify-center border-[#FED403] rounded-full group-hover:border-black duration-200">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    className="fill-[#FED403] group-hover:fill-black"
                  >
                    <path d="M2.96413 13.9345C2.73458 14.0411 2.5165 14.0176 2.3099 13.8641C2.1033 13.7107 2 13.4877 2 13.1951V9.59837L7.50933 7.99981L2 6.40124V2.80447C2 2.5114 2.1033 2.2884 2.3099 2.13547C2.5165 1.98254 2.73458 1.95909 2.96413 2.06513L13.5696 7.26047C13.8565 7.407 14 7.65345 14 7.99981C14 8.34616 13.8565 8.59261 13.5696 8.73914L2.96413 13.9345Z" />
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="w-8 h-8 cursor-pointer flex flex-col justify-center gap-1.5 lg:hidden relative z-60"
        >
          <span ref={line1Ref} className="h-1 w-full bg-white rounded-full origin-center"></span>
          <span ref={line2Ref} className="h-1 w-full bg-white rounded-full origin-center"></span>
          <span ref={line3Ref} className="h-1 w-full bg-white rounded-full origin-center"></span>
        </button>

      </div>
    </header>
  );
}
