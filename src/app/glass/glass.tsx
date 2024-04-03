"use client";
import { useRef, useEffect } from "react";
import "./glass.css";
import { useMousePosition } from "@/utils/mouse";
import { motion } from "framer-motion";

const layers = 8;
export const Glass = () => {
  const { x, y } = useMousePosition();

  const l1 = useRef<HTMLSpanElement | null>(null);
  const mainRef = useRef<HTMLDivElement | null>(null);

  const innerWidth = typeof window !== "undefined" ? window.innerWidth : 0;
  const innerHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  useEffect(() => {
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

    let translateX = 0;
    let translateY = 0;
    let rotateX = 0;
    let rotateY = 0;

    if (x < innerWidth / 2) {
      translateX = (x * 50) / (innerWidth / 2) - 50;
      // rotateX = (8 / (innerWidth / 2)) * x + 8;
    }

    if (x > innerWidth / 2) {
      translateX = (50 / (innerWidth / 2)) * x + (50 / (innerWidth / 2) - 50);
      // rotateX = (8 / innerWidth) * x - 8;
    }

    if (y < innerHeight / 2) {
      translateY = (y * 50) / (innerHeight / 2) - 50;
      // rotateY = (18 / (innerHeight / 2)) * y - 18;
    }

    if (y > innerHeight / 2) {
      translateY = (50 / (innerHeight / 2)) * y + (50 / (innerHeight / 2) - 50);
      //rotateY = (18 / innerHeight) * y + 18;
    }

    if (mainRef.current) {
      mainRef.current.style.setProperty("--translateX", `${translateX}px`);
      mainRef.current.style.setProperty("--translateY", `${translateY}px`);
      mainRef.current.style.setProperty("--rotateX", `${rotateX}deg`);
      mainRef.current.style.setProperty("--rotateY", `${rotateY}deg`);
    }
  });

  return (
    <>
      <motion.div
        ref={mainRef}
        transition={{ duration: 0.3 }}
        className="fixed w-[60vw] [transform:_translateX(var(--translateX))_translateY(var(--translateY))_translateZ(100px)_scale(1)_rotateX(var(--rotateX))_rotateY(var(--rotateY))] [rotateY(var(--rotateY))]  z-50 border-zinc-200 aspect-[2/1] max-w-[80vw] max-h-[60vw] inset-0 m-auto rounded-lg bg-zinc-200/10 glass-box-shadow "
      >
        <span
          ref={l1}
          className="glass-layer aboslute block z-[60] inset-[-40px] backdrop-[--blur]"
        ></span>
      </motion.div>
    </>
  );
};
