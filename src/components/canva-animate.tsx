"use client";
import { motion, useAnimation } from "framer-motion";

import React, { useRef, useEffect } from "react";

const firstStrokePath =
  "M 75.069 28.847 L 74.545 30.856 L 73.752 35.650 L 73.308 39.500 L 72.500 46.500 L 65 48.892 L 50.114 53.640 L 48.439 54.416 L 44.405 58.428 L 40.245 62.564 L 36.323 70.464  ";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: any) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 2,
      opacity: 1,
      transition: {
        pathLength: {
          delay,
          type: "spring",
          duration: 5,
          bounce: 0.2,
        },
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
