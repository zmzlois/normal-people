"use client";
import { motion, useAnimation } from "framer-motion";

import React, { useRef, useEffect } from "react";

const firstStrokePath =
  "m 48.699435,115.47928 -0.527182,-2.59475 c 0,0 -1.034838,-0.45126 -2.499232,-0.45126 -2.635909,0 -4.100303,2.25631";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 2,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0.2 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Animate() {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
      className="border"
    >
      <motion.path
        d={firstStrokePath}
        variants={draw}
        initial="hidden"
        animate="visible"
        fill="none"
        stroke="#fefefe"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* <motion.path
        d={secondStrokePath}
        variants={draw}
        initial="hidden"
        animate="visible"
        fill="none"
        stroke="#fefefe"
        strokeWidth="4"
        strokeLinecap="round" */}
      {/* // /> */}
    </motion.svg>
  );
}
