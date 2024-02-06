"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";

export const Nav = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;

      // Update active link based on scroll position
      nav.forEach((item) => {
        const targetElement = window.document.getElementById(item.href)!;

        const offsetTop = targetElement.offsetTop;

        if (offsetTop <= scrollPosition) {
          setActiveLink(item.href);
        }
      });
    }
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {nav.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.href}`}
              className="group flex items-center py-3 active"
            >
              <span
                className={cn(
                  "nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:bg-slate-300  group-focus-visible:bg-cyan-300 group-focus-visible:w-16 motion-reduce:transition-none",
                  {
                    "bg-cyan-300 w-16 group-hover:bg-cyan-300":
                      activeLink === item.href,
                  }
                )}
              />
              <span
                className={cn(
                  "nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-300 group-focus-visible:text-slate-200",
                  { "text-slate-200": activeLink === item.href }
                )}
              >
                {item.name}
              </span>
              <span
                className={cn(
                  "nav-indicator ml-4 group-focus-visible:bg-cyan-300 group-focus-visible:w-16  h-px w-8 bg-slate-600 transition-all group-hover:bg-slate-300  motion-reduce:transition-none",
                  {
                    "bg-cyan-300 w-16 group-hover:bg-cyan-300":
                      activeLink === item.href,
                  }
                )}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface Nav {
  name: string;
  href: string;
}

const nav = [
  {
    name: "About",
    href: "about",
  },
  {
    name: "Experience",
    href: "experience",
  },
  {
    name: "Projects",
    href: "projects",
  },
] as Nav[];
