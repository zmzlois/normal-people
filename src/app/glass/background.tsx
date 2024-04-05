"use client";

import { useEffect, useState } from "react";

export const Background = () => {
  useEffect(() => {
    let speed = 500;

    let paused = false;

    const v2 = document.getElementById("v2") as HTMLVideoElement;
    const container = document.getElementById("container") as HTMLDivElement;

    if (!v2) null;

    v2.addEventListener("loadedmetadata", () => {
      container.style.height = Math.floor(v2.duration) * speed + "px";
    });

    v2.pause();

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
