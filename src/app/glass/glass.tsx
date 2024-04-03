"use client";
import { useRef } from "react";
import "./glass.css";
import { useMousePosition } from "@/utils/mouse";

const layers = 8;
export const Glass = () => {
  const { x, y } = useMousePosition();
  const l1 = useRef<HTMLSpanElement | null>(null);
  const l2 = useRef<HTMLSpanElement | null>(null);
  const l3 = useRef<HTMLSpanElement | null>(null);
  const l4 = useRef<HTMLSpanElement | null>(null);
  const innerWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const innerHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  console.log(
    "x",
    x,
    "y",
    y,
    "innerWidth",
    innerWidth,
    "innerHeight",
    innerHeight
  );
  return (
    <>
      <div className="fixed w-[60vw] translate-x-[--translateX] translate-y-[--translateY] z-[50] border-zinc-200 aspect-[2/1] max-w-[80vw] max-h-[60vw] inset-0 m-auto rounded-lg bg-zinc-200/10 glass-box-shadow">
        <span
          ref={l1}
          className="glass-layer aboslute z-[60] inset-[-40px] backdrop-[--blur]"
        ></span>
        <span
          ref={l2}
          className="glass-layer aboslute z-[60] inset-[-40px] backdrop-[--blur]"
        ></span>
        <span
          ref={l3}
          className="glass-layer aboslute z-[60] inset-[-40px] backdrop-[--blur]"
        ></span>
        <span
          ref={l4}
          className="glass-layer aboslute z-[60] inset-[-40px] backdrop-[--blur]"
        ></span>
      </div>
    </>
  );
};
