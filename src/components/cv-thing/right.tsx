"use client";
import React from "react";
import { Companies, Volunteer, Education } from "./config";

import type { CompanyType, VolunteerType, EducationType } from "./config";
import clsx from "clsx";
import { Balancer } from "react-wrap-balancer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { About } from "./about";
import { DoubleRightArrow, LinkTwo } from "../assets/icon";
function Right() {
  return (
    <div className="flex flex-col sm:col-span-1 py-20 sm:mr-10 sm:pr-20">
      <About />
      <div className="space-y-8 py-20">
        {Companies.map((item: CompanyType, index) => (
          <li className="mb-12" key={index}>
            <div className="group relative overflow-hidden grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                {item.time}
              </header>
              <a href={item.slug} className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-5 md:-inset-y-4 lg:block" />
                      <span>
                        {item.title} ·{" "}
                        <span className="inline-block">
                          {item.name}
                          <DoubleRightArrow className=" lg:ml-4 lg:mb-[0.16rem] inline-block text-slate-200 h-4 w-4 group-hover:-rotate-45 group-hover:scale-125 group-hover:translate-x-2 group-hover:skew-y-2 group-hover:transform-all group-hover:transition-all group-hover:text-sky-300" />
                        </span>
                      </span>
                    </div>
                  </div>
                </h3>
              </a>
              <p className="z-10 mt-1 text-md tracking-wide text-slate-400 sm:col-span-2 sm:col-start-3 sm:col-end-8">
                {item.context}
              </p>
              <ul className="z-10 mt-1 flex gap-2 text-sm tracking-wide text-slate-500 sm:col-span-2 sm:col-start-3 sm:col-end-8">
                {item.links &&
                  Object.values(item.links).map((res, index) => (
                    <li
                      key={index}
                      className="text-slate-200  px-3 rounded-full py-1"
                    >
                      <a
                        href={res.url}
                        className="hover:text-sky-300 duration-300 transition-color flex items-center space-x-1"
                      >
                        <LinkTwo className="inline-block" />
                        <span>{res.name}</span>
                      </a>
                    </li>
                  ))}
              </ul>
              <ul className="z-10 flex-wrap mt-1 gap-2 flex  sm:col-span-2 sm:col-start-3 sm:col-end-8">
                {item.tags &&
                  item.tags.map((res, index) => (
                    <li
                      key={index}
                      className="text-cyan-200 text-xs font-light tracking-wider bg-cyan-700 px-3 rounded-full py-1"
                    >
                      <Balancer>{res}</Balancer>
                    </li>
                  ))}
              </ul>
            </div>
          </li>
        ))}
        <div className="mt-4">
          <h1 className="font-mono text-lg font-bold sm:text-2xl text-sky-400">
            Open Source & Volunteering
          </h1>
        </div>
        {Volunteer.map((item: VolunteerType, index) => (
          <div
            className={clsx(
              "grid sm:grid-cols-3 grid-cols-1 gap-4  py-4 px-2 border border-pink-400",
              item.name === "ByteDance Infrastructure Team" &&
                "sm:mb-52 mb-0 lg:mb-0"
            )}
            key={index}
          >
            <div className="col-span-1 sm:text-end text-start">
              <h3 className="font-mono text-sm font-semibold sm:text-md text-slate-100">
                {item.title}
              </h3>
              <p className="text-sm text-slate-200">{item.location}</p>
              <p className="text-sm text-slate-300">{item.time}</p>
            </div>
            <div className="col-span-2 ml-0 space-y-1 sm:ml-2">
              <Balancer className="font-mono text-sm font-bold sm:text-md text-slate-100">
                {item.name}
              </Balancer>
              <div>
                {item.description && (
                  <>
                    <h5 className="italic font-semibold text-slate-300">
                      Description
                    </h5>
                    <Balancer className="text-xs text-slate-200">
                      {item.description}
                    </Balancer>
                  </>
                )}
              </div>
              <div>
                {item.responsibility && (
                  <>
                    {" "}
                    <h5 className="italic font-semibold text-slate-300">
                      Responsiblity
                    </h5>
                    <ul className="space-y-1 list-none sm:list-disc sm:list-inside text-slate-200">
                      {item.responsibility.map((res: string, index) => (
                        <li key={index} className="text-xs">
                          <Balancer>{res}</Balancer>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <h1 className="font-mono text-2xl font-bold text-sky-400">
            Education
          </h1>
        </div>
        {Education.map((item: EducationType, index) => (
          <div
            className={clsx(
              "grid sm:grid-cols-3 grid-cols-1 gap-4 px-2 py-4 border border-pink-400",
              item.name === "Knight Frank LLP" && "sm:mb-52 lg:mb-0 mb-0"
            )}
            key={index}
          >
            <div className="col-span-1 sm:text-end text-start">
              <h3 className="font-mono font-semibold text-md text-slate-100">
                {item.major}
              </h3>
              <p className="text-sm text-slate-200">{item.location}</p>
              <p className="text-sm text-slate-300">{item.time}</p>
            </div>
            <div className="col-span-2 ml-0 space-y-1 sm:ml-2">
              <h3 className="font-mono font-bold text-md text-slate-100">
                {item.name}
              </h3>

              <div>
                {item.modules && (
                  <>
                    {" "}
                    <h5 className="text-sm italic font-semibold text-slate-300">
                      Modules
                    </h5>
                    <ul className="flex flex-wrap text-slate-200">
                      {item.modules.map((res: string, index) => (
                        <li key={index} className="text-xs">
                          {res} |{" "}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div>
                {item.activity && (
                  <>
                    {" "}
                    <h5 className="text-sm italic font-semibold text-slate-300">
                      Activities
                    </h5>
                    <ul className="space-y-1 text-slate-200">
                      {item.activity.map((res: string, index) => (
                        <li key={index} className="text-xs">
                          {res}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Right;
