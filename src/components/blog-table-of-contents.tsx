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
const COLLAPSED_MAX_CHARS = 25; // show first ~3-5 words when collapsed

// truncate text to roughly 3-5 words
function truncateText(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  // find last space before maxChars to avoid cutting words
  const truncated = text.slice(0, maxChars);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > maxChars * 0.5) {
    return truncated.slice(0, lastSpace) + "…";
  }
  return truncated + "…";
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const activeItemRef = React.useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function handleScroll() {
      const windowScrollPosition = window.scrollY + HEADER_OFFSET;

      // find active heading
      let currentActiveId = "";
      let closestHeading: { id: string; distance: number } | null = null;

      // iterate backwards to find the last heading that's been scrolled past
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = document.getElementById(heading.id);

        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          const distanceFromTop = Math.abs(windowScrollPosition - elementTop + 100);

          // track the closest heading
          if (!closestHeading || distanceFromTop < closestHeading.distance) {
            closestHeading = { id: heading.id, distance: distanceFromTop };
          }

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

      // auto-scroll TOC to keep active item visible when expanded
      if (isExpanded && currentActiveId && activeItemRef.current && scrollContainerRef.current) {
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
  }, [headings, isExpanded]);

  // close drawer when clicking a link
  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  if (headings.length === 0) {
    return null;
  }

  // tick width based on heading level - smaller when collapsed
  const getTickWidth = (level: number, expanded: boolean): number => {
    if (expanded) {
      return level === 1 ? 40 : level === 2 ? 32 : 24;
    }
    // collapsed: shorter ticks that vary by level
    return level === 1 ? 24 : level === 2 ? 16 : 10;
  };

  // render desktop TOC items with expand/collapse animation
  const renderDesktopTocItems = () =>
    headings.map((heading, index) => {
      const isActive = activeId === heading.id;
      const isPrimary = heading.level <= 2;
      const tickWidth = getTickWidth(heading.level, isExpanded);

      return (
        <a
          key={heading.id}
          ref={isActive ? activeItemRef : null}
          href={`#${heading.id}`}
          className={cn(
            "relative flex items-center gap-2 py-1 transition-all duration-300 ease-out group",
            "hover:opacity-100",
            {
              "opacity-100": isActive,
              "opacity-50": !isActive,
            }
          )}
          style={{
            // staggered animation delay for "dial" effect
            transitionDelay: isExpanded ? `${index * 20}ms` : `${(headings.length - index) * 15}ms`,
          }}
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, "", `#${heading.id}`);
            document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          tabIndex={-1}
        >
          {/* tick mark - always visible */}
          <span
            className={cn(
              "h-px flex-shrink-0 transition-all duration-300 ease-out",
              {
                "bg-zinc-200": isActive,
                "bg-zinc-600 group-hover:bg-zinc-400": !isActive,
              }
            )}
            style={{ 
              width: `${tickWidth}px`,
              transitionDelay: isExpanded ? `${index * 20}ms` : `${(headings.length - index) * 15}ms`,
            }}
          />
          
          {/* text label - shows truncated when collapsed, full on expand */}
          <span
            className={cn(
              "text-xs font-light tracking-wide whitespace-nowrap transition-all duration-300 ease-out leading-none",
              {
                "text-zinc-100": isActive && isPrimary,
                "text-zinc-400 group-hover:text-zinc-200": !isActive && isPrimary,
                "text-zinc-300": isActive && !isPrimary,
                "text-zinc-500 group-hover:text-zinc-300": !isActive && !isPrimary,
              }
            )}
            style={{
              transitionDelay: isExpanded ? `${index * 25}ms` : `${(headings.length - index) * 10}ms`,
            }}
          >
            {isExpanded ? heading.text : truncateText(heading.text, COLLAPSED_MAX_CHARS)}
          </span>
        </a>
      );
    });

  // render mobile drawer items (always expanded)
  const renderMobileTocItems = () =>
    headings.map((heading) => {
      const isActive = activeId === heading.id;
      const isPrimary = heading.level <= 2;
      const tickWidth = getTickWidth(heading.level, true);

      return (
        <a
          key={heading.id}
          href={`#${heading.id}`}
          onClick={handleLinkClick}
          className={cn(
            "relative flex items-center gap-3 py-2 transition-all duration-200 group",
            "hover:opacity-100",
            {
              "opacity-100": isActive,
              "opacity-60": !isActive,
            }
          )}
          tabIndex={-1}
        >
          <span
            className={cn("h-px flex-shrink-0 transition-all duration-200", {
              "bg-zinc-200": isActive,
              "bg-zinc-600 group-hover:bg-zinc-400": !isActive,
            })}
            style={{ width: `${tickWidth}px` }}
          />
          <span
            className={cn(
              "text-sm font-medium tracking-wide transition-colors duration-200 leading-relaxed",
              {
                "text-zinc-100": isActive && isPrimary,
                "text-zinc-400 group-hover:text-zinc-200": !isActive && isPrimary,
                "text-zinc-300": isActive && !isPrimary,
                "text-zinc-500 group-hover:text-zinc-300": !isActive && !isPrimary,
              }
            )}
          >
            {heading.text}
          </span>
        </a>
      );
    });

  return (
    <>
      {/* Desktop: Fixed sidebar with expand on hover */}
      <aside
        className="hidden lg:flex flex-col select-none fixed right-6 top-1/2 -translate-y-1/2 z-30"
        aria-label="Table of contents"
        tabIndex={-1}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div
          ref={scrollContainerRef}
          className={cn(
            "flex flex-col gap-3 overflow-y-auto pr-2 py-3 transition-all duration-300 ease-out",
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]",
            {
              "max-h-[50vh]": !isExpanded,
              "max-h-[70vh] backdrop-blur-md bg-black/10 rounded-lg px-3 py-5 -m-3": isExpanded,
            }
          )}
        >
          {renderDesktopTocItems()}
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
          <div className="flex-1 overflow-y-auto px-6 py-4">
            <div className="flex flex-col">
              {renderMobileTocItems()}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
