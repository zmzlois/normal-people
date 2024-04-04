"use client";

import { useEffect, useState } from "react";

export const Background = () => {
  useEffect(() => {
    // const v0 = document.getElementById("v0") as HTMLVideoElement;
    let speed = 500;

    let paused = false;

    const v2 = document.getElementById("v2") as HTMLVideoElement;
    const container = document.getElementById("container") as HTMLDivElement;

    if (!v2) null;

    v2.addEventListener("loadedmetadata", () => {
      container.style.height = Math.floor(v2.duration) * speed + "px";
    });

    // v0.pause();
    v2.pause();

    // const interval = setInterval(function () {
    //  v0.currentTime = window.scrollY / 500;
    //   v2.currentTime = window.scrollY / 500;
    //   console.log("currentTime", v2.currentTime);
    // }, 40);

    function animate() {
      if (paused) return;
      v2.currentTime = window.scrollY / speed;
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);

    return () => {
      paused = true;
    };
  }, []);

  return (
    <div id="container" className="relative items-center">
      {/* <video
        muted
        id="v0"
        preload="auto"
        className="md:w-screen w-auto h-screen scale-[x_2] md:scale-100 fixed z-20 opacity-80 translate-y-20 md:translate-y-0 inset-0 md:h-screen blur-2xl"
      >
        <source
          src="https://d3v5naxe3z2qca.cloudfront.net/forest-vid-v3.mp4"
          type="video/mp4"
        />
      </video> */}
      <video
        id="v2"
        preload="auto"
        poster="/glass-background.png"
        className=" w-screen inset-0  top-0 h-screen left-0 fixed z-30 object-cover"
      >
        <source
          className="rounded-2xl "
          src="https://d3v5naxe3z2qca.cloudfront.net/output_1920.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
