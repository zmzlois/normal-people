"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import type { Heading } from "@/utils/extract-headings";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface TableOfContentsProps {
  headings: Heading[];
}

// constants
const HEADER_OFFSET = 120;
const MAX_SCROLL_DISTANCE = 300;

// reusable spacing ticks component
function SpacingTicks({ width }: { width: number }) {
  return (
    <>
      <span
        className="h-px bg-zinc-600 transition-all duration-300 ease-out"
        style={{ width: `${width}px`, marginLeft: "10px" }}
      />
      <span
        className="h-px bg-zinc-600 transition-all duration-300 ease-out"
        style={{ width: `${width}px`, marginLeft: "10px" }}
      />
    </>
  );
}

// list icon for mobile button
function ListIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<Record<string, number>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const activeItemRef = React.useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function handleScroll() {
      const windowScrollPosition = window.scrollY + HEADER_OFFSET;

      // find active heading and calculate progress
      let currentActiveId = "";
      let closestHeading: { id: string; distance: number } | null = null;
      const progressMap: Record<string, number> = {};

      // iterate backwards to find the last heading that's been scrolled past
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = document.getElementById(heading.id);

        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          const distanceFromTop = Math.abs(windowScrollPosition - elementTop);

          // track the closest heading
          if (!closestHeading || distanceFromTop < closestHeading.distance) {
            closestHeading = { id: heading.id, distance: distanceFromTop };
          }

          // calculate progress (0 = far away, 1 = very close/active)
          const progress = Math.max(0, 1 - distanceFromTop / MAX_SCROLL_DISTANCE);
          progressMap[heading.id] = progress;

          // heading is active if it's above the scroll position
          if (elementTop <= windowScrollPosition && !currentActiveId) {
            currentActiveId = heading.id;
          }
        }
      }

      // fallback to closest heading if none scrolled past
      if (!currentActiveId && closestHeading) {
        currentActiveId = closestHeading.id;
      }

      setActiveId(currentActiveId);
      setScrollProgress(progressMap);

      // auto-scroll TOC to keep active item centered
      if (currentActiveId && activeItemRef.current && scrollContainerRef.current) {
        const activeElement = activeItemRef.current;
        const container = scrollContainerRef.current;

        const targetScroll =
          activeElement.offsetTop -
          container.clientHeight / 2 +
          activeElement.offsetHeight / 2;

        const scrollDifference = Math.abs(container.scrollTop - targetScroll);

        if (scrollDifference > 10) {
          container.scrollTo({
            top: Math.max(0, targetScroll),
            behavior: "smooth",
          });
        }
      }
    }

    const timeoutId = setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [headings]);

  // close drawer when clicking a link
  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  if (headings.length === 0) {
    return null;
  }

  // determine variant based on heading level (primary for h1/h2, secondary for h3+)
  const getVariant = (level: number): "primary" | "secondary" => {
    return level <= 2 ? "primary" : "secondary";
  };

  // tick width based on heading level
  const getTickWidth = (level: number): number => {
    return level === 1 ? 50 : 32;
  };

  // render TOC items - accepts optional onLinkClick for mobile drawer
  const renderTocItems = (onLinkClick?: () => void) =>
    headings.map((heading, index) => {
      const isActive = activeId === heading.id;
      const variant = getVariant(heading.level);
      const tickWidth = getTickWidth(heading.level);
      const isPrimary = variant === "primary";
      const progress = scrollProgress[heading.id] || 0;
      const spacingTickWidth = 32 + progress * 18;

      return (
        <React.Fragment key={heading.id}>
          {isPrimary && index > 0 && <SpacingTicks width={spacingTickWidth} />}

          <a
            ref={isActive ? activeItemRef : null}
            href={`#${heading.id}`}
            onClick={onLinkClick}
            className={cn(
              "relative flex items-center gap-[10px] transition-all duration-200 group",
              "hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-black rounded-sm",
              {
                "opacity-100": isActive,
                "opacity-70": !isActive,
              }
            )}
            data-variant={variant}
            data-active={isActive}
            tabIndex={-1}
          >
            <span
              className={cn("h-px transition-all duration-200 flex-shrink-0", {
                "bg-zinc-300": isActive,
                "bg-zinc-600 group-hover:bg-zinc-500": !isActive,
              })}
              style={{ width: `${tickWidth}px` }}
            />
            <span
              className={cn(
                "text-xs font-medium tracking-wide whitespace-nowrap transition-colors duration-200 leading-none",
                {
                  "text-zinc-200": isActive && isPrimary,
                  "text-zinc-400 group-hover:text-zinc-300": !isActive && isPrimary,
                  "text-zinc-300": isActive && !isPrimary,
                  "text-zinc-500 group-hover:text-zinc-400": !isActive && !isPrimary,
                }
              )}
            >
              {heading.text}
            </span>
          </a>

          {!isPrimary && index < headings.length - 1 && (
            <SpacingTicks width={spacingTickWidth} />
          )}
        </React.Fragment>
      );
    });

  return (
    <>
      {/* Desktop: Fixed sidebar */}
      <aside
        className="hidden lg:flex flex-col select-none fixed right-8 top-1/2 -translate-y-1/2"
        aria-label="Table of contents"
        tabIndex={-1}
      >
        <div
          ref={scrollContainerRef}
          className="flex flex-col gap-2 overflow-y-auto max-h-[60vh] pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {renderTocItems()}
        </div>
      </aside>

      {/* Mobile: Drawer using vaul */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} dismissible={true}>
        <DrawerTrigger asChild>
          <button
            className={cn(
              "lg:hidden fixed bottom-6 right-6 z-40",
              "w-12 h-12 rounded-full",
              "bg-zinc-800/90 backdrop-blur-sm border border-zinc-700",
              "flex items-center justify-center",
              "shadow-lg shadow-black/20",
              "transition-all duration-200",
              "hover:bg-zinc-700 hover:scale-105",
              "active:scale-95"
            )}
            aria-label="Open table of contents"
          >
            <ListIcon className="text-zinc-300" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="lg:hidden max-h-[85vh]">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerTitle>Contents</DrawerTitle>
            <DrawerClose asChild>
              <button
                className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
                aria-label="Close drawer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-zinc-400"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </DrawerClose>
          </DrawerHeader>
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <div className="flex flex-col gap-3">
              {renderTocItems(handleLinkClick)}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
