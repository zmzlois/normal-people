"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import type { Heading } from "@/utils/extract-headings";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [scrollProgress, setScrollProgress] = useState<Record<string, number>>({});
  const [bottomFadeOpacity, setBottomFadeOpacity] = useState<number>(0);
  const [topFadeOpacity, setTopFadeOpacity] = useState<number>(0);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const activeItemRef = React.useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    function handleScroll() {
      // account for sticky header (approximately 64px) and some offset
      const headerOffset = 120;
      const scrollPosition = window.scrollY + headerOffset;

      // find the heading that's currently in view
      let currentActiveId = "";
      let closestHeading: { id: string; distance: number } | null = null;
      const progressMap: Record<string, number> = {};

      // iterate backwards to find the last heading that's been scrolled past
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        const element = document.getElementById(heading.id);

        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          // calculate distance from scroll position to heading
          const distanceFromTop = Math.abs(scrollPosition - elementTop);
          const distanceFromBottom = Math.abs(scrollPosition - elementBottom);
          const minDistance = Math.min(distanceFromTop, distanceFromBottom);
          
          // track the closest heading
          if (!closestHeading || minDistance < closestHeading.distance) {
            closestHeading = { id: heading.id, distance: minDistance };
          }
          
          // calculate progress (0 = far away, 1 = very close/active)
          // expand ticks when within 300px of the heading
          const maxDistance = 300;
          const progress = Math.max(0, 1 - minDistance / maxDistance);
          progressMap[heading.id] = progress;

          // heading is active if it's above the scroll position (accounting for header)
          // since we iterate backwards, the first one we find is the most recent
          if (elementTop <= scrollPosition && !currentActiveId) {
            currentActiveId = heading.id;
          }
        }
      }

      // if we're at the top or no heading has been scrolled past, use the closest one
      if (!currentActiveId && closestHeading) {
        currentActiveId = closestHeading.id;
      }

      setActiveId(currentActiveId);
      setScrollProgress(progressMap);

      // auto-scroll to keep active item centered in view
      if (currentActiveId && activeItemRef.current && scrollContainerRef.current) {
        const activeElement = activeItemRef.current;
        const container = scrollContainerRef.current;
        
        // calculate the position to center the active item
        const containerHeight = container.clientHeight;
        const activeElementTop = activeElement.offsetTop;
        const activeElementHeight = activeElement.offsetHeight;
        const scrollPosition = activeElementTop - (containerHeight / 2) + (activeElementHeight / 2);
        
        // only scroll if the active item is not already centered
        const currentScroll = container.scrollTop;
        const scrollDifference = Math.abs(currentScroll - scrollPosition);
        
        // scroll if difference is more than 10px to avoid jitter
        if (scrollDifference > 10) {
          container.scrollTo({
            top: Math.max(0, scrollPosition),
            behavior: 'smooth'
          });
        }
      }

      // calculate fade opacity based on scroll position in the TOC container
      let containerBottomFade = 0;
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        
        // fade at top when scrolled down
        const topFadeDistance = 60;
        const topFade = Math.min(1, scrollTop / topFadeDistance);
        setTopFadeOpacity(topFade);
        
        // fade at bottom when near the end
        const bottomFadeDistance = 60;
        const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
        const bottomFade = Math.min(1, distanceFromBottom / bottomFadeDistance);
        containerBottomFade = 1 - bottomFade;
      }
      
      // also calculate fade based on distance from footer in main page
      let footerFade = 0;
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const footerTop = footerRect.top + window.scrollY;
        const viewportBottom = window.scrollY + window.innerHeight;
        const distanceToFooter = footerTop - viewportBottom;
        
        // start fading when within 200px of footer
        const fadeStartDistance = 200;
        const fadeOpacity = Math.max(0, Math.min(1, distanceToFooter / fadeStartDistance));
        footerFade = 1 - fadeOpacity;
      }
      
      // use the maximum of container fade and footer fade
      setBottomFadeOpacity(Math.max(containerBottomFade, footerFade));
    }

    // initial check with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(handleScroll, 100);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) {
    return null;
  }

  // group headings by hierarchy to determine variant (primary for h1/h2, secondary for h3+)
  const getVariant = (level: number): "primary" | "secondary" => {
    return level <= 2 ? "primary" : "secondary";
  };

  // calculate indentation width based on heading level
  const getTickWidth = (level: number): number => {
    if (level === 1) return 50;
    if (level === 2) return 32;
    return 32;
  };

  return (
    <aside
      className="hidden lg:flex flex-col select-none fixed right-8 top-1/2 -translate-y-1/2 max-h-[80vh] overflow-hidden"
      aria-label="Table of contents"
      tabIndex={-1}
    >
      <div className="relative h-full">
        {/* gradient fade overlay at top */}
        <div
          className="absolute top-0 left-0 right-0 h-20 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, 
              rgba(0, 0, 0, ${topFadeOpacity * 0.9}) 0%, 
              rgba(0, 0, 0, ${topFadeOpacity * 0.5}) 50%,
              transparent 100%)`,
            opacity: topFadeOpacity > 0 ? 1 : 0,
          }}
        />
        {/* gradient fade overlay at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to bottom, 
              transparent 0%, 
              rgba(0, 0, 0, ${bottomFadeOpacity * 0.8}) 50%,
              rgba(0, 0, 0, ${bottomFadeOpacity}) 100%)`,
            opacity: bottomFadeOpacity > 0 ? 1 : 0,
          }}
        />
        <div 
          ref={scrollContainerRef}
          className="my-auto flex flex-col gap-2 overflow-y-auto max-h-full pr-2 transition-opacity duration-300 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onScroll={() => {
            // update fade opacities on scroll
            if (scrollContainerRef.current) {
              const container = scrollContainerRef.current;
              const scrollTop = container.scrollTop;
              const scrollHeight = container.scrollHeight;
              const clientHeight = container.clientHeight;
              
              const topFadeDistance = 60;
              const topFade = Math.min(1, scrollTop / topFadeDistance);
              setTopFadeOpacity(topFade);
              
              const bottomFadeDistance = 60;
              const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
              const bottomFade = Math.min(1, distanceFromBottom / bottomFadeDistance);
              const containerBottomFade = 1 - bottomFade;
              
              // also check footer fade
              const footer = document.querySelector('footer');
              let footerFade = 0;
              if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const footerTop = footerRect.top + window.scrollY;
                const viewportBottom = window.scrollY + window.innerHeight;
                const distanceToFooter = footerTop - viewportBottom;
                const fadeStartDistance = 200;
                const fadeOpacity = Math.max(0, Math.min(1, distanceToFooter / fadeStartDistance));
                footerFade = 1 - fadeOpacity;
              }
              
              setBottomFadeOpacity(Math.max(containerBottomFade, footerFade));
            }
          }}
        >
        {headings.map((heading, index) => {
          const isActive = activeId === heading.id;
          const variant = getVariant(heading.level);
          const tickWidth = getTickWidth(heading.level);
          const isPrimary = variant === "primary";
          const progress = scrollProgress[heading.id] || 0;
          
          // calculate tick width based on scroll progress (32px base, expand to 50px when active)
          const spacingTickWidth = 32 + progress * 18; // expands from 32px to 50px

          // calculate opacity based on distance from active item
          let itemOpacity = 1;
          if (activeId) {
            const activeIndex = headings.findIndex(h => h.id === activeId);
            const currentIndex = index;
            const distance = Math.abs(currentIndex - activeIndex);
            
            // fade items that are more than 3 items away from active
            const fadeStartDistance = 3;
            const maxDistance = 8;
            if (distance > fadeStartDistance) {
              const fadeAmount = Math.min(1, (distance - fadeStartDistance) / (maxDistance - fadeStartDistance));
              itemOpacity = Math.max(0.2, 1 - fadeAmount * 0.8);
            }
          }

          return (
            <React.Fragment key={heading.id}>
              {isPrimary && index > 0 && (
                <>
                  <span
                    className="h-px bg-zinc-600 transition-all duration-300 ease-out"
                    style={{ 
                      width: `${spacingTickWidth}px`, 
                      marginLeft: "10px",
                      opacity: (0.6 + progress * 0.4) * itemOpacity // fade in as we get closer
                    }}
                  />
                  <span
                    className="h-px bg-zinc-600 transition-all duration-300 ease-out"
                    style={{ 
                      width: `${spacingTickWidth}px`, 
                      marginLeft: "10px",
                      opacity: (0.6 + progress * 0.4) * itemOpacity
                    }}
                  />
                </>
              )}
              <a
                ref={isActive ? activeItemRef : null}
                href={`#${heading.id}`}
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
                data-interactive="true"
                tabIndex={-1}
                style={{
                  opacity: isActive ? 1 : itemOpacity * 0.7,
                }}
              >
                <span
                  className={cn(
                    "h-px transition-all duration-200 flex-shrink-0",
                    {
                      "bg-zinc-300": isActive,
                      "bg-zinc-600 group-hover:bg-zinc-500": !isActive,
                    }
                  )}
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
                  data-variant={variant}
                >
                  {heading.text}
                </span>
              </a>
              {/* add spacing ticks for nested items */}
              {!isPrimary && index < headings.length - 1 && (
                <>
                  <span
                    className="h-px bg-zinc-600 transition-all duration-300 ease-out"
                    style={{ 
                      width: `${spacingTickWidth}px`, 
                      marginLeft: "10px",
                      opacity: (0.6 + progress * 0.4) * itemOpacity
                    }}
                  />
                  <span
                    className="h-px bg-zinc-600 transition-all duration-300 ease-out"
                    style={{ 
                      width: `${spacingTickWidth}px`, 
                      marginLeft: "10px",
                      opacity: (0.6 + progress * 0.4) * itemOpacity
                    }}
                  />
                </>
              )}
            </React.Fragment>
          );
        })}
        </div>
      </div>
    </aside>
  );
}
