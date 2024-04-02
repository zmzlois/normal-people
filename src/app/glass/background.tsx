"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export const Background = () => {
  const v0 = useRef<HTMLVideoElement>();
  const v2 = useRef<HTMLVideoElement>();
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    v0.current && v0.current.pause();
    v2.current && v2.current.pause();

    const handleScroll = () => {
      console.log("handling scroll");
      setScrollY(window.scrollY);
      console.log("scrollY", scrollY);
      console.log("v0.current", v0.current && v0.current.scrollTop);

      v0.current && v0.current.pause();
      v2.current && v2.current.pause();
    };

    window.addEventListener("scroll", handleScroll);

    console.log("window.scrollY", scrollY);
    const interval = setInterval(function () {
      v0.current && (v0.current.currentTime = window.scrollY / 400 + 5000);
      v2.current && (v2.current.currentTime = window.scrollY / 400 + 5000);
    }, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [v0, v2]);

  return (
    <div className="relative items-center ">
      <video
        muted
        id="v0"
        ref={v0}
        preload="preload"
        className="w-screen fixed z-20 opacity-80 -translate-y-8 md:translate-y-0 inset-0 h-screen blur-2xl"
      >
        <source
          src="https://utfs.io/f/f610a361-7ef1-45e8-844d-e0c693f3a9de-wj5bq7.mp4"
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
          src="https://utfs.io/f/f610a361-7ef1-45e8-844d-e0c693f3a9de-wj5bq7.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
