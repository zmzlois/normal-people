"use client";
import { set } from "date-fns";
import { motion, useAnimation } from "framer-motion";

import React, { useRef, useEffect, useState } from "react";

const engPaths = {
  firstPath:
    "M 44.550 87 L 47.286 83.500 L 51.500 81.500 L 56.900 74.969 L 60 71.890",
  secondPath:
    "M 60 71.890 L 60 77.158 L 56.604 93.313 L 54.085 100.032 L 51.878 105.917 L 48.292 110.455 L 45.031 111.490 L 43.914 111.845 L 43 112.603 L 43 113.176 L 43 114.217 L 45.750 113.581 L 47.263 113.232 ",
  thirdPath:
    "M 47.263 113.232  L 43.550 113.917 L 44 112.601 L 44 112.113 L 44 111.626 L 45.462 111.005 L 47.250 110.734 L 50.500 110.241 L 56.947 112.650 L 63.394 115.059 L 70.447 115.622 L 77.500 116.186 L 79.498 114.675 L 82.265 112.582 ",
  fourthPath:
    "M 77 114.382 L 80.157 114.198 L 82.123 112.701 L 84.766 110.689 L 87.992 104.704 L 87.996 101.807 L 88 99.113 L 85.777 97.557 L 83.457 95.931 L 80 95.452 L 80 96.756",
  fifthPath:
    "M 78.443 97.250 L 74.146 100.198 L 73 103.283 L 73 107.865 L 73 112.028 L 74.410 114 L 77.389 114 L 79.377 114 ",
  sixthPath:
    "M 80.803 112.378 L 81.941 113.082 L 94.960 106.501 L 98.244 103.562 L 101.179 100.936 L 106 94.283 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 106 92.860 L 103.979 92.860 L 102.615 94.750",
  seventhPath:
    "M 102.736 94.656 L 102.736 94.656 L 99.249 100.220 L 96.789 107.269 L 97.170 110.605 L 97.500 113.500 L 100.052 113.797 L 102.604 114.095 L 104.538 111.958 L 106.472 109.821",
  eighthPath:
    "M 106.472 109.821 L 100.669 114.773 L 107.723 109.403 L 115.093 103.792 L 124 93.943 L 124 91.405 L 124 91.015 L 124 91 L 122.493 91 L 121.665 91 L 119.977 92.148 L 119 91.015",
  ninthPath:
    "M 117.200 92.200 L 115.236 94.164 L 115.827 97.711 L 118.616 100.698 L 120.054 102.239 L 122.478 105.003 L 124.002 106.839 L 126.772 110.179  ",
  tenthPath:
    "M 126.600 110.443 L 127 113.313 L 125 115.225 L 122 117 L 121 117.200 L 120.550 116   L 119.870 115.723  L 116.494 113.994 ",
  // eleventhPath:
  //   "M 132.213 69.145 L 132.820 70.975 L 141.014 72.787 L 149.212 72.904 L 155.925 73 L 161.462 70.928 L 164.508 69.789 L 167 68.439 L 167 67.928 L 167 66.715 L 164.957 66.795 L 162.724 68.095",
  // twelfthPath:
  //   "M 162.724 68.09 L 157.850 75.250 L 155.550 77.100 L 153.780 78.610 L 152.171 80.921 L 151.533 83.300 L 148.085 88.677 L 143.151 98.167 L 141.817 100.734 L 139.005 105.106 L 136.903 107.883 L 134.802 110.660 L 133.447 113.158 L 133.894 113.434",
  // thirteenthPath:
  //   "M 133.894 113.434 L 132.309 113.371 L 134.199 113.217 L 134.550 112.978 L 135.998 112.325 L 137.417 111.900 L 139.101 110.771 L 140.096 110 L 142.899 110 L 147.736 110.756 L 150.846 111.679 L 153.956 112.602 L 159.693 113.390 L 163.595 113.429 L 170.691 113.500 L 172.334 112.137 L 173.238 111.387 L 173.731 110.373 ",
  fourteenthPath:
    "M 103.500 83 L 103.840 83.550 L 105.441 84 L 107.059 84 L 108.677 84 L 110 83.550",
  // fifteenthPath: "M 183 109 L 185 109 L 185 107 ",
};

const figmaPaths = {
  firstPath:
    "M26.2431 1L24 5L23 8L22 10.5L21.5 12L21 13.5L20.5 15L20 16.5L19 19L17.5 22L16 25L14 27.5L12.5 29L11 30L10 30.5H8.5L7 30L5 29L4 28L2.5 26L1 23.5L0.5 22V20V18.5L2 21.5L3.5 23L5 24L7 25L9 26L11.5 27L15.5 28L20.5 29L23.5 29.5H27H30L31.5 29L38 27L42 24.5L44.8811 21L46 18V15.5L45 14L43 12.5H42L40.5 14L39 15.5L37.5 17.5L36.5 19.5L35.5 21L35 23V24.5V26L36 27L39.5 27.5L43.5 26.5L47 24L50.5 20L52.5 17L54 14.5L55.5 12.5L54 15L53 17L52.5 18.5L51.5 20.5L50.5 23L50 24.5V26L51 26.5H52L55 25.5L69.5 15.5L70.5 14.5L71 13.5L70.5 12.5L70 12L69 11.5H67.5L65.5 12.5L64.5 14V15L65 17L65.5 18L66 19L66.8128 21L67.5 23V24L66.5 25L65.5 26L64.5 26.5L63 27H61.5L60.5 26.5L60 26L59.5 25.5L59 24.6926L58.5 23.5",
  secondPath: "M55.5 0.5 h2.5",
};
export default function EnglishAnimate() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: any) => {
      const delay = 1 + i * 1.4;
      return {
        pathLength: 2,
        opacity: 1,
        transition: {
          pathLength: {
            delay,
            type: "spring",
            duration: 6,
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
        width="80"
        height="80"
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
        className=""
      >
        {Object.values(figmaPaths).map((path, index) => {
          return (
            <motion.path
              d={path}
              variants={draw}
              initial="hidden"
              animate="visible"
              key={index}
              custom={index}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}
      </motion.svg>
    </>
  );
}
