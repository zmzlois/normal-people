"use client";
import React from "react";
import { navigation, NavigationType } from "./side";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";
import { Balancer } from "react-wrap-balancer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Content = NavigationType["content"][number];

function Left() {
  return (
    <div>
      <div className="flex flex-col col-span-2 gap-8 py-8 sm:mt-0 sm:col-span-1 ">
        <h1 className="flex  text-xl font-bold sm:hidden text-sky-400 sm:text-2xl">
          Miscellaneous
        </h1>
        {navigation.map((item, navindex) => (
          <div
            className={clsx(
              "flex flex-col",
              item.name === "Tech" && "sm:mb-72 lg:mb-0 mb-0"
            )}
            key={navindex}
          >
            <div className="flex items-center content-center justify-end py-3 pr-3 space-x-4 border border-red-400 text-end">
              <h1 className=" text-xl font-bold text-slate-50">{item.name}</h1>
              <span className="w-8 h-8">{item.icon}</span>
            </div>
            <div className="flex flex-col items-end content-center justify-end py-4 pr-3 space-y-4 border border-red-400">
              {item.content.map((con: Content, index) => (
                <div
                  key={index}
                  className="flex flex-row items-center content-center justify-end w-full space-x-4 text-sm"
                >
                  <div className="flex items-center content-center space-x-2">
                    {con.fluency && (
                      <p className=" text-sm text-slate-50">{con.fluency}</p>
                    )}
                    {con.fluency && (
                      <ArrowRight size={12} className="text-slate-50" />
                    )}
                  </div>
                  {con.href ? (
                    <a
                      href={con.href}
                      className=" underline text-end underline-offset-4 text-slate-50 decoration-1"
                    >
                      <Balancer>{con.name}</Balancer>
                    </a>
                  ) : (
                    <p className=" text-slate-50 text-end">{con.name}</p>
                  )}
                  <div className="text-slate-50">{con.icon}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Left;
