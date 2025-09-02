"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const navigation = {
  main: [
    { name: "Project", href: "/project", tooltip: "An incomplete, random dump of projects I wrote. " },
    { name: "Blog", href: "/blogs", tooltip: "Sometimes translating songs, sometimes write about businesses. " },
    { name: "CV", href: "/intro", tooltip: "Zero accuracy guarantee." },
  ],
  social: [
    { name: "Twitch", href: "https://www.twitch.tv/zmzlois", tooltip: "I stream about esoteric knowledge and dive into rabbit holes with friends." },
    { name: "Youtube", href: "https://www.youtube.com/@zmzlois", tooltip: "Not ready yet. " },
    { name: "X/Twitter", href: "https://x.com/zmzlois", tooltip: "Sometimes stupid, sometimes rage bait, occasionally useful and serious. " },
  ],
};

export const Nav = () => {
  const [blur, setBlur] = useState(false);
  return (
    <nav className="py-6 group/link w-full">
      <div
        onMouseEnter={() => setBlur(true)}
        onMouseLeave={() => setBlur(false)}
        className="transform-all md:blur-sm md:hover:blur-none duration-500 py-4 group/link"
      >
        <ul className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:hidden">
          {navigation.main.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className="relative mx-1 sm:mx-2 md:mx-3 text-sm sm:text-base font-light md:group-hover/link:scale-95 transition-all duration-500 text-zinc-300 md:after:absolute md:after:w-0 md:after:h-[1px] md:after:left-0 md:after:bottom-0 md:after:bg-zinc-300 md:after:transition-all md:after:duration-500 md:after:hover:w-full hover:text-zinc-100 md:hover:scale-125 px-2 py-1 rounded-md hover:bg-zinc-800/50 md:hover:bg-transparent"
                >
                  {item.name}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm text-zinc-400">{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </ul>
        <ul className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:hidden mt-2">
          {navigation.social.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className="relative mx-1 sm:mx-2 md:mx-3 text-sm sm:text-base font-light md:group-hover/link:scale-95 transition-all duration-500 text-zinc-300 md:after:absolute md:after:w-0 md:after:h-[1px] md:after:left-0 md:after:bottom-0 md:after:bg-zinc-300 md:after:transition-all md:after:duration-500 md:after:hover:w-full hover:text-zinc-100 md:hover:scale-125 px-2 py-1 rounded-md hover:bg-zinc-800/50 md:hover:bg-transparent"
                >
                  {item.name}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm text-zinc-400">{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </ul>
        <ul className="hidden lg:flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
          {[...navigation.main, ...navigation.social].map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className="relative mx-1 sm:mx-2 md:mx-3 text-sm sm:text-base font-light md:group-hover/link:scale-95 transition-all duration-500 text-zinc-300 md:after:absolute md:after:w-0 md:after:h-[1px] md:after:left-0 md:after:bottom-0 md:after:bg-zinc-300 md:after:transition-all md:after:duration-500 md:after:hover:w-full hover:text-zinc-100 md:hover:scale-125 px-2 py-1 rounded-md hover:bg-zinc-800/50 md:hover:bg-transparent"
                >
                  {item.name}
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm text-zinc-400">{item.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </ul>
      </div>

      <h1
        className={cn(
          "z-10 text-5xl sm:text-6xl font-extrabold transform-all duration-500 text-center cursor-default duration-800 md:text-9xl text-zinc-50 px-4",
          blur
            ? "md:blur-sm duration-500 scale-100 tracking-tighter"
            : "md:blur-none scale-[1.02] transition-all tracking-tight duration-500"
        )}
      >
        zmzlois
      </h1>
    </nav>
  );
};
