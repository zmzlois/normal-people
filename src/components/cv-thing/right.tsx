"use client";
import React from "react";
import { Volunteer, Education, Companies, Projects } from "./config";

import type { VolunteerType, EducationType } from "./config";
import clsx from "clsx";
import { Balancer } from "react-wrap-balancer";

import { About } from "./about";
import { TopRightArrow } from "../assets/icon";
import { Cards } from "./cards";

function Right() {
  return (
    <div className="flex flex-col lg:col-span-1 mx-5  py-4 lg:pr-20">
      <About />
      <div id="body" className="space-y-4 py-12">
        <div className="">
          <Cards title="experience" items={Companies} />
        </div>
        <a
          href="#cv"
          className="text-sky-100 hover:text-cyan-300 hover:transition-all group px-4 py-4 "
        >
          <span className="">View full resume</span>{" "}
          <TopRightArrow className="inline-block hover:transition-all duration-250 group-hover:skew-x-2 group-hover:scale-[1.12]" />
        </a>
        <div className="py-36">
          <Cards title="projects" items={Projects} />
        </div>
      </div>
    </div>
  );
}

export default Right;
