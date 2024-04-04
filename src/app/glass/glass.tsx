"use client";
import { useRef, useEffect } from "react";
import "./glass.css";
import { useMousePosition } from "@/utils/mouse";
import cn from "classnames";
import { useFollowPointer } from "./use-follow-pointer";

const layers = 9;
let layerBlur = 1;
let blurString = "11.11px";
let translateX = 0;
let translateY = 0;
let rotateX = 0;
let rotateY = 0;

export const Glass = () => {
  const l1 = useRef<HTMLSpanElement | null>(null);

  const mainRef = useRef<HTMLDivElement | null>(null);
  const { x, y } = useFollowPointer(mainRef);

  useEffect(() => {
    for (let i = 1; i < layers; i++) {
      const layer = document.getElementById(`layer-${i}`) as HTMLSpanElement;

      if (!layer) void 0;

      // calculate the number of layers to give it depth
      const index = i * 11.11;

      // calculate the blur effect
      layerBlur = x * i * 0.1;

      console.log("layerBlur", layerBlur);

      if (i < 4) blurString = x < 0 ? "1px" : `${layerBlur * 0.04}px`;
      if (i >= 4) blurString = x < 0 ? `${-layerBlur * 0.01}px` : "1px";

      layer.style.setProperty("--blur", blurString);
      layer.style.setProperty("--x", `${index}%`);
    }

    translateX = x * 0.11;
    translateY = y * 0.11;
    rotateX = y * -0.02;
    rotateY = x * 0.04;

    if (mainRef.current) {
      mainRef.current.style.setProperty("--translateX", `${translateX}px`);
      mainRef.current.style.setProperty("--translateY", `${translateY}px`);
      mainRef.current.style.setProperty("--rotateX", `${rotateX}deg`);
      mainRef.current.style.setProperty("--rotateY", `${rotateY}deg`);
    }
  });

  return (
    <>
      <div
        id="glass"
        ref={mainRef}
        className="fixed w-[60vw] [transform:_translateX(var(--translateX))_translateY(var(--translateY))_translateZ(100px)_scale(1)_rotateX(var(--rotateX))_rotateY(var(--rotateY))]   z-50 border-zinc-200 aspect-[2/1] max-w-[80vw] max-h-[60vw] skew-x-[--skewX] skew-y-[--skewY] inset-0 m-auto rounded-lg bg-zinc-200/10 glass-box-shadow duration-500 ease-out transition-transform"
      >
        {[...Array(layers)].map((_, i) => (
          <span
            key={i}
            id={`layer-${i}`}
            className={
              "absolute glass-layer block backdrop-blur-[--blur] z-60 [var(--x)] inset-[-40px] [var(--blur)]"
            }
          ></span>
        ))}
      </div>
    </>
  );
};
