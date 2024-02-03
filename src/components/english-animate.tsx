"use client";
import { set } from "date-fns";
import { motion, useAnimation } from "framer-motion";

import React, { useRef, useEffect, useState } from "react";

const engPaths = {
  //   firstPath:
  //     "M 38.552 89.424 L 41.191 90.086 L 45.576 87.963 L 54.279 83.750 L 69.894 67 L 65.119 67 L 64.634 67 L 63.121 68.463 L 61.756 70.250",
  //   secondPath:
  //     "M 62.515 74.750 L 58.857 91.569 L 53.732 102.640 L 45.282 111.977 L 39.897 117.929 36.448 118.576 L 34.552 118.931 L 33 119.637 L 33 120.143 L 33 121.996 L 35.953 122.116 L 39.548 120.410 L 43.237 118.660 ",
  //   thirdPath:
  //     "M 43.237 118.660  L 33.166 122.019 L 34.719 121.681 L 35.315 121.085 L 36.400 120 L 34.200 120 L 31.749 120 L 31.394 119.006 L 33.200 117.200 L 34.878 115.522 L 38.530 115.705 L 42.300 117.656 L 52.331 122.846 L 74 118.694 L 74 118.797 L 74 118.865 L 74.750 118.951 ",
  //   fourthPath:
  //     "M 71.201 117.146 L 72.402 119.691 L 75.701 119.815 L 79 119.939 L 79 118.504 L 79 117.715 L 80.350 114.941 L 82 112.339 L 85 107.608 L 85 104.004 L 85 96.778 L 83 95.750 L 82 95.231 L 78 98.002   L 74.518 102.329 L 70 106.657 L 70 110.629 L 70 112.814 L 70.540 115.746 ",
  fifthPath:
    "M  80.330 115.924 L 87.253 111.572 L 91.322 108.287 L 92.874 107.034 L 95.349 103.779 L 96.822 101.054 L 98.295 98.329 L 100.510 94.953 L 101.743 93.550 L 84.765 115.901 L 87.510 114.187 L 92.500 111.072 L 93.354 114.557 L 94.208 118.041 L 96.197 119.106 L 98.186 120.170 L 100.843 119.507 L 104.065 118.703 L 107.165 116.076 L 106.384 114.812 L 105.815 113.891 L 103.348 115.507 L 101.992 116.396 L 99.896 116.983 L 98.691 116.812 L 96.500 116.500 L 96.571 112 L 96.642 107.500 L 99.974 104 L 104.120 99.646 L 106.991 95.045 L 106.996 92.750 L 107 91 L 105.493 91 L 104.665 91 L 102.977 92.148 L 101.743 93.550",
};
export default function EnglishAnimate() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 2;
      return {
        pathLength: 2,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 10,
            bounce: 0.2,
          },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <>
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
        className=" pl-4"
      >
        {Object.values(engPaths).map((path, index) => {
          return (
            <motion.path
              d={path}
              variants={draw}
              initial="hidden"
              animate="visible"
              key={index}
              custom={index}
              fill="none"
              stroke="#fffcfc"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}
      </motion.svg>
    </>
  );
}
