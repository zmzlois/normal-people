"use client";
import React from "react";
import { Volunteer, Education, Companies, Projects, Writing } from "./config";

import type { VolunteerType, EducationType } from "./config";
import clsx from "clsx";
import { Balancer } from "react-wrap-balancer";

import { About } from "./about";
import { TopRightArrow } from "../assets/icons";
import { Cards } from "./cards";
import { BottomContent } from "./bottom";
import Link from "next/link";

function Right() {
  return (
    <div className="flex flex-col lg:col-span-1  px-10  py-20 lg:pr-20">
      <About />
      <div id="body" className="space-y-4">
        <div className="pt-16" id="experience">
          <Cards items={Companies} title="experience" />
        </div>
        <div>
          {" "}
          <Link
            href="/cv_lois_zhao_29032924_cje.pdf"
            target="_blank"
            locale={false}
            download={false}
            rel="noopener noreferrer"
            className="text-sky-100 text-lg relative w-auto hover:text-cyan-300 hover:transition-all group sm:py-4 py-2 "
          >
            <span className="">View full resume</span>{" "}
            <TopRightArrow className="inline-block transition-all duration-250 group-hover:skew-x-2 group-hover:-translate-y-1 group-hover:scale-[1.12]" />
          </Link>
        </div>

        <div className="py-16" id="projects">
          <Cards items={Projects} title="projects" />
        </div>
        <div className="py-16" id="writing">
          {Writing.length > 0 && <Cards items={Writing} title="writing" />}
        </div>

        <BottomContent />
      </div>
    </div>
  );
}

export default Right;
