"use client";

import { useEffect } from "react";

export const Background = () => {
  useEffect(() => {
    const v0 = document.getElementById("v0") as HTMLVideoElement;

    const v2 = document.getElementById("v2") as HTMLVideoElement;

    if (!v0 || !v2) null;
    v0.pause();
    v2.pause();

    window.onscroll = function () {
      v0.pause();
      v2.pause();
    };

    const interval = setInterval(function () {
      v0.currentTime = window.scrollY / 500;
      v2.currentTime = window.scrollY / 500;
    }, 40);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="relative items-center ">
      <video
        muted
        id="v0"
        preload="preload"
        className="md:w-screen w-auto h-screen scale-[x_2] md:scale-100 fixed z-20 opacity-80 translate-y-20 md:translate-y-0 inset-0 md:h-screen blur-2xl"
      >
        <source
          src="https://utfs.io/f/905520c7-1079-4733-a9f5-a5d543c7750d-breaaf.mp4"
          type="video/mp4"
        />
      </video>

      <video
        id="v2"
        preload="preload"
        poster="/glass-background.png"
        className=" md:w-screen md:object-scale-down md:scale-100 scale-150 rounded-2xl inset-0 translate-y-[4vh] h-screen md:h-[calc(100vh-10vh)] fixed z-30"
      >
        <source
          className="rounded-2xl "
          src="https://utfs.io/f/905520c7-1079-4733-a9f5-a5d543c7750d-breaaf.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
