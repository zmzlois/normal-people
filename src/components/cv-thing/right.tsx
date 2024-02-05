"use client";
import React from "react";
import { Volunteer, Education, Companies, Projects } from "./config";

import type { VolunteerType, EducationType } from "./config";
import clsx from "clsx";
import { Balancer } from "react-wrap-balancer";

import { About } from "./about";

import { Cards } from "./cards";

function Right() {
  return (
    <div className="flex flex-col sm:col-span-1 mx-5 sm:mx-0 py-4 sm:mr-10 sm:pr-20">
      <About />
      <div id="body" className="space-y-4 py-12">
        <div className="pb-36">
          <Cards title="experience" items={Companies} />
        </div>
        <div className="pb-36">
          <Cards title="projects" items={Projects} />
        </div>
      </div>
    </div>
  );
}

export default Right;
