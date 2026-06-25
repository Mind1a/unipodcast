"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  {
    id: 1,
    label: "მთავარი",
    href: "/",
  },
  {
    id: 2,
    label: "ჩვენს შესახებ",
    href: "/about-us",
  },
  {
    id: 3,
    label: "ეპიზოდები",
    href: "/episodes",
  },
  {
    id: 4,
    label: "რუბრიკები",
    href: "/rubric",
  },
  {
    id: 5,
    label: "სერვისები",
    href: "/services",
  },
];

export default function Header() {
  const pathname = usePathname();

  const linkRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  useEffect(() => {
    const activeIndex = navLinks.findIndex(
      (link) => link.href === pathname
    );

    const activeElement = linkRefs.current[activeIndex];

    if (activeElement) {
      setIndicator({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
      });
    }
  }, [pathname]);

  return (
    <header className="bg-[#000210] font-sans">
      <div className="max-w-310 w-full px-4 xl:px-0 py-4 mx-auto flex items-center justify-between">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src="/assets/images/logo.svg"
            alt="Logo"
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="relative flex items-center gap-6">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                ref={(el) => {
                  linkRefs.current[index] = el;
                }}
                className="px-2 py-1"
              >
                <Link
                  href={link.href}
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
              className="absolute -bottom-1 h-[2px] bg-[#FED403] transition-all duration-300"
              style={{
                left: indicator.left,
                width: indicator.width,
              }}
            />
          </ul>
        </nav>

        <Link
          href="/"
          className="bg-black hidden lg:flex hover:bg-[#FED403] group duration-200 hover:text-black border border-[#FED403] py-3 text-[#FED403] font-bold text-[16px] rounded-full pl-9 pr-3  items-center gap-3"
        >
          კონტაქტი

          <span className="p-0.75 border border-[#FED403] rounded-full group-hover:border-black duration-200">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              className="fill-[#FED403] group-hover:fill-black"
            >
              <path d="M2.96413 13.9345C2.73458 14.0411 2.5165 14.0176 2.3099 13.8641C2.1033 13.7107 2 13.4877 2 13.1951V9.59837L7.50933 7.99981L2 6.40124V2.80447C2 2.5114 2.1033 2.2884 2.3099 2.13547C2.5165 1.98254 2.73458 1.95909 2.96413 2.06513L13.5696 7.26047C13.8565 7.407 14 7.65345 14 7.99981C14 8.34616 13.8565 8.59261 13.5696 8.73914L2.96413 13.9345Z" />
            </svg>
          </span>
        </Link>


        {/* Burger Menu icon */}
        <button className="w-[32px] h-[32px] cursor-pointer flex flex-col gap-2 lg:hidden">
          <span className="h-1 w-full bg-white rounded-full"></span>
          <span className="h-1 w-full bg-white rounded-full"></span>
          <span className="h-1 w-full bg-white rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
