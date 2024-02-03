"use client";
import { set } from "date-fns";
import { motion, useAnimation } from "framer-motion";

import React, { useRef, useEffect, useState } from "react";

// paint every stroke of the character zhao in lesser seal font/ancient chinese from Qin dynasty
const chinesePaths = {
  firstStroke:
    "M 59.844 28.250 L 59.759 28.938 L 59.609 35.800 L 59.512 43.500 L 59.293 60.780 L 58.106 64.530 L 50.724 71.266 L 44.913 76.568 L 44.661 76.770 L 40.689 79.321 L 37.409 81.427 L 37.352 84.861 ",
  secondStroke:
    "M 60 61.202 L 60 66.809 L 63.179 71.754 L 69.995 76.750 L 73.184 79.088 L 76.205 81 L 76.708 81 L 77.211 81 L 78.516 81.832 L 79.607 82.849 L 80.698 83.865",
  thirdStroke:
    "M 75.069 28.847 L 74.545 30.856 L 73.752 35.650 L 73.308 39.500 L 72.500 46.500 L 65 48.892 L 50.114 53.640 L 48.439 54.416 L 44.405 58.428 L 40.245 62.564 L 36.323 70.464 ",
  fourthStroke:
    "M 61.190 82.865  L 60.469 83.320 L 59.868 85.224 L 59.854 87.096 L 59.840 88.968 L 59.836 99.950 L 59.846 111.500 L 59.855 123.050 L 59.781 134.695 L 59.682 137.377 L 59.500 142.255",
  fifthStroke:
    "M 79.829 96.250 L 79.614 106.593 L 79.559 107.279 L 78.830 108.501 L 78.503 109.051 L 77.930 110.924 L 77.557 112.665 L 76.878 115.830 L 73.335 117.511 L 69.791 119.193 L 67.339 118.724 L 64.887 118.256 L 63.379 119.764 L 61.871 121.271",
  sixthStroke:
    "M 46.571 93.778 L 43.819 102.447 L 41.800 114.635 L 41.800 122.577 L 41.800 127.566 L 44.673 132.457 L 51.989 139.919 L 58.730 146.795 L 66.115 150.220 L 79.162 156.270 L 81.025 157 L 83.427 157 L 85.786 157 ",
  seventhStroke:
    "M 105.598 25.605 L 105.598 28.116 L 104.989 67.875 L 105.980 68.488 L 106.501 68.810 ",
  eighthStroke:
    "M 88.072 29.955 L 86.752 30.771 L 88.592 33.886 L 89.603 35.599 L 90.725 37 L 91.085 37 L 91.444 37 L 92.009 38.670 L 92.341 40.711 L 92.943 44.422 L 90.341 48.861 L 88.910 51.303 L 85.323 55.929 L 82.370 59.142 L 77.347 64.606  ",
  ninthStroke:
    "M 120.261 30.836 L 114.367 42.673 L 114.550 46.086 L 114.867 51.088 L 115.023 52.947 L 128.310 67 L 129.911 67 L 130.510 67.406 ",
  tenthStroke:
    "M 104.795 68.250 L 94.500 75.500 L 92.068 82.500 L 89.636 89.500 L 89.579 101.500 L 91.774 120.430 L 92.641 122.800 L 97.122 127 L 99.22 133 ",
  eleventhStroke:
    "M 107.477 64.072 L 106.820 66.143 L 108.392 67.881 L 110.334 70.026 L 114.333 77.011 L 117.050 83 L 118.173 85.475 L 119.556 88.338 L 120.125 89.363 L 122.110 92.941 L 123.259 99.750 L 123.271 108 L 123.279 113.908 L 123.055 115.887 L 121.612 122.652 L 121.359 123.836 L 120.351 126.311 L 119.371 128.152 L 118.391 129.993 L 117.678 131.828 L 117.787 132.228 L 117.896 132.629 L 113.639 137.354 L 108.328 142.728 L 99.877 151.278 L 96.589 156 ",
  twelvethStroke:
    "M 92.750 94.600 L 92 92.061 L 92 93.385 L 92 94.710 L 98.949 95.293 L 108.199 97.100 L 119 105.115 L 123.173 106.227 ",
  thirteenthStroke:
    "M 93.314 111.829 L 91.822 111.321 L 93.455 112.235 L 94.353 112.737 L 96.103 113.332 L 97.345 113.558 L 101.952 114.393 L 107.492 116.817 L 107.250 117.891 L 107.112 118.501 L 107.384 118.888 L 107.853 118.750 L 108.322 118.613 L 110.345 120.525 L 112.350 123 L 114.354 125.475 L 116.750 128.289 L 117.675 129.253 L 119.357 131.007",
};

export default function ChineseAnimate() {
  const timeoutId = useRef<any>(null);
  const [currentSVG, setCurrentSVG] = useState(1);

  const controls = useAnimation();

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
            duration: 3,
            bounce: 0.2,
          },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
    hiddenEnd: {
      pathLength: 0,
      opacity: 0,
      transition: { pathLength: { delay: 0, duration: 0.2, type: "sprint" } },
    },
  };

  function complete() {
    console.log("object length", Object.values(chinesePaths).length);
    setTimeout(() => {
      setCurrentSVG(2);
    }, 1000);
  }

  return (
    <>
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
        className=" pl-4"
        onAnimationComplete={complete}
      >
        {Object.values(chinesePaths).map((path, index) => {
          return (
            <motion.path
              d={path}
              variants={draw}
              initial="hidden"
              animate="visible"
              fill="none"
              stroke="#fffcfc"
              onAnimationComplete={complete}
              strokeWidth="4"
              strokeLinecap="round"
              key={index}
              custom={index}
            />
          );
        })}
      </motion.svg>
    </>
  );
}
