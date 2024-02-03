"use client";
import React from "react";
import { siteConfig as config } from "./side";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ChineseAnimate from "../chinese-animate";
import EnglishAnimate from "../english-animate";

function Head() {
  return (
    <>
      <div className="flex sticky h-screen top-0  sm:col-span-1 flex-col-reverse items-center content-center justify-center py-4   gap-y-6  sm:px-10 lg:gap-y-0 ">
        <div className="flex flex-col justify-center px-2 text-center sm:px-0 ">
          <h1 className=" text-xl font-bold sm:text-3xl text-slate-50">
            {config.name}
          </h1>
          <h3 className="text-md font-semibold tracking-wide sm:text-xl text-slate-200">
            {config.occupation}
          </h3>
          <p className="text-md font-medium tracking-wide sm:text-md text-slate-300">
            {config.location}
          </p>
          <p className="text-xs font-normal tracking-wide sm:text-md text-slate-300">
            Want to check this CV live? Click 👉🏻{" "}
            <a
              href={"https://normal-people.com/intro"}
              className={
                "decoration underline decoration-cyan-300 underline-offset-4"
              }
            >
              here
            </a>
          </p>
        </div>
        <div className="pb-6">
          {/* eslint-disable-next-line */}
          {/* <ChineseAnimate /> */}
          <EnglishAnimate />
          {/* <img
            className="w-20 h-20  rounded-full sm:w-36 sm:h-36 hover:cursor-pointer "
            src={config.avatar}
          /> */}
        </div>
      </div>
    </>
  );
}

export default Head;
