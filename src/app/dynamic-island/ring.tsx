"use client";
import React, { useState, useEffect } from "react";
import { Variants, motion } from "framer-motion";
import { set } from "date-fns";
import { cn } from "@/utils/cn";

const ringVariant: Variants = {
  idle: {
    opacity: 0,
    transition: {
      duration: 0.05,
    },
  },
  ring: {
    opacity: 1,
    rotate: [0, 20, -20, 20, -20, 20, -20, 20, -20, 20, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      loop: Infinity,
      transitionLeft: {
        opacity: 0,
      },
    },
  },
  silent: {
    opacity: 1,
    rotate: [0, 20, -20, 20, -20, 20, -20, 20, -20, 20, 0],
    transition: {
      duration: 1,
      ease: "easeInOut",
      times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      loop: Infinity,
      transitionLeft: {
        opacity: 0,
      },
    },
  },
};

const textVariant = {
  ring: {
    opacity: [0, 0.3, 0.5, 0.8, 1],
    rotate: [0, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      times: [0, 0.3, 0.6, 0.8, 1],
      transitionLeft: {
        opacity: 0,
      },
    },
  },
  silent: {
    opacity: [0, 0.3, 0.5, 0.8, 1],
    rotate: [0, 2, -2, 2, 0],
    transition: {
      duration: 0.3,
      times: [0, 0.3, 0.6, 0.8, 1],
      transitionLeft: {
        opacity: 0,
      },
    },
  },
  idle: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
export const Ring = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [text, setText] = useState("ring");

  const silent = setInterval(() => {
    setText("silent");

    setTimeout(() => {
      setText("ring");
    }, 3000);
  }, 5000);

  useEffect(() => {
    silent;
    return () => {
      clearInterval(silent);
    };
  }, [silent]);

  return (
    <motion.div
      ref={ref}
      initial="Ring"
      animate={text}
      className="flex items-center justify-between gap-10 w-full "
    >
      {text === "ring" && (
        <motion.div variants={ringVariant}>
          <Bell className="w-3 h-3" />
        </motion.div>
      )}
      {text === "silent" && (
        <div className="px-4 bg-red-500 rounded-full py-[2px]">
          <motion.div variants={ringVariant}>
            <BellOff className="w-3 h-3 " />
          </motion.div>
        </div>
      )}
      <motion.p
        variants={textVariant}
        className={cn(
          "text-center font-light text-xs tracking-wide",
          text === "ring" ? "text-zinc-100" : "text-red-500 brightness-110"
        )}
      >
        {text.slice(0, 1).toUpperCase() + text.slice(1)}
      </motion.p>
    </motion.div>
  );
};

export const Bell = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
};

export const BellOff = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5" />
      <path d="M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      <path d="m2 2 20 20" />
    </svg>
  );
};
