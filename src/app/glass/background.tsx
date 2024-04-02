"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useEffect, useRef } from "react";
export const Background = () => {
  const v0 = useRef<HTMLVideoElement>(null);
  const v2 = useRef<HTMLVideoElement>(null);
  const m0 = useRef<HTMLImageElement>(null);

  let width = 0;
  let height = 0;
  let scrollY = 0;

  if (typeof window !== "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;

    useEffect(() => {
      const handleScroll = () => {
        v0.current && v0.current.pause();
        v2.current && v2.current.pause();
      };

      window.addEventListener("scroll", handleScroll);

      const interval = setInterval(function () {
        scrollY = window.scrollY;
        v0.current && (v0.current.currentTime = window.scrollY / 400 + 10000);
        v2.current && (v2.current.currentTime = window.scrollY / 400 + 10000);
      }, 100);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearInterval(interval);
      };
    }, []);
  }
  return (
    <div className="relative items-center ">
      <Image
        src="/glass-background.png"
        className={cn(
          "z-50 w-screen md:h-screen h-auto inset-0",
          scrollY > 0 ? "hidden" : "fixed"
        )}
        ref={m0}
        width={width}
        height={height}
        alt="glass background"
      />
      <video
        muted
        ref={v0}
        id="v0"
        preload="preload"
        className="w-screen fixed z-20 opacity-80 -translate-y-8 md:translate-y-0 inset-0 h-screen blur-2xl"
      >
        <source
          src="https://utfs.io/f/f00f010b-3d1a-48be-afd3-ff18d7361b66-q0w3cs.mp4"
          type="video/mp4"
        />
      </video>

      <video
        id="v2"
        preload="preload"
        ref={v2}
        className="md:w-full w-[1600px] object-scale-down rounded-2xl inset-0 translate-y-[4vh] h-screen mix-blend-plus-darker md:h-[calc(100vh-10vh)] fixed z-30"
      >
        <source
          className="rounded-2xl"
          src="https://utfs.io/f/f00f010b-3d1a-48be-afd3-ff18d7361b66-q0w3cs.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
