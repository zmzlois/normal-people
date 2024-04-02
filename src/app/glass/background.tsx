"use client";
import { cn } from "@/utils/cn";
import { clear } from "console";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
export const Background = () => {
  useEffect(() => {
    const v0 = document.getElementById("v0") as HTMLVideoElement;
    // const v1 = document.querySelector("#v1") as HTMLVideoElement;
    const v2 = document.getElementById("v2") as HTMLVideoElement;

    if (!v0 || !v2) return;
    v0.pause();
    v2.pause();

    window.onscroll = function () {
      v0.pause();
      v2.pause();
    };
    console.log("window scroll", window.scrollY / 400);
    const interval = setInterval(function () {
      v0.currentTime = window.scrollY / 400;
      v2.currentTime = window.scrollY / 400;
    }, 40);
  });
  return (
    <div className="relative items-center ">
      <video
        muted
        id="v0"
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
