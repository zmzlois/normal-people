"use client";
import React from "react";
import { cn } from "@/utils/cn";
import { useState, useEffect } from "react";
import { useScroll, motion, Variants } from "framer-motion";

const coverVariant: Variants = {
  initial: {
    opacity: 0,
    y: "0",
    backgroundImage: "linear-gradient(to bottom, #00000000, #00000000)",
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },

  animate: {
    opacity: 1,
    y: 0,
    backgroundImage: "linear-gradient(to bottom, #000000, #00000000)",
    transition: {
      duration: 2,
      transitionLeft: 2,
    },
  },
};

export const Cover = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [initial, setInitial] = useState<"initial" | "animate">("initial");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setInitial("animate");
      }
      if (window.scrollY < 200) {
        setInitial("initial");
      }
    });
  }, []);

  return (
    <motion.div
      ref={ref}
      variants={coverVariant}
      initial="initial"
      animate={initial}
      className="w-screen  fixed z-30 h-1/2 bg-gradient-to-b from-black transition-all duration-300 ease-in-out via-zinc-900/50 to-zinc-900/0  "
    />
  );
};
