"use client";
import { useEffect, useState, useRef } from "react";
import Sonner from "./_component/sonner-experiment";
import { DepthBaseBlur } from "./_component/depth-base-blur";
import { NpmForMonorepo } from "./_component/npm-for-monorepo";
import { LinkGoGo } from "./_component/linkgogo";
import { ComCord } from "./_component/comcord";
import { Docksible } from "./_component/docksible";
import { K3sTheSaneWay } from "./_component/k3-the-sane-way";
import { useAnimate, stagger, inView, motion } from "framer-motion";
import { Gbita } from "./_component/gbita";

export const Project = () => {
  const itemsRef = useRef<HTMLLIElement[]>([]);

  useEffect(() => {
    const items = itemsRef.current;
    let delay = 0;
    items.forEach((item) => {
      setTimeout(() => {
        item.classList.add("animate");
      }, delay);
      delay += 200; // Adjust delay as needed
    });
  }, []);
  return (
    <ul>
      <li ref={(el) => (itemsRef.current[0] = el!)}>
        {" "}
        <ComCord />
      </li>
      <li ref={(el) => (itemsRef.current[1] = el!)}>
        <LinkGoGo />
      </li>
      <div className="grid grid-cols-1 md:grid-cols-2 md:pt-10 pt-2 items-start">
        {" "}
        <li ref={(el) => (itemsRef.current[2] = el!)}>
          {" "}
          <K3sTheSaneWay />
        </li>
        <li ref={(el) => (itemsRef.current[3] = el!)}>
          <Docksible />
        </li>
      </div>{" "}
      <li ref={(el) => (itemsRef.current[4] = el!)}>
        <Gbita />
      </li>
      <li ref={(el) => (itemsRef.current[5] = el!)}>
        <NpmForMonorepo />
      </li>
      <li ref={(el) => (itemsRef.current[6] = el!)}>
        <DepthBaseBlur />
      </li>
      <li ref={(el) => (itemsRef.current[7] = el!)}>
        <Sonner />
      </li>
    </ul>
  );
};
