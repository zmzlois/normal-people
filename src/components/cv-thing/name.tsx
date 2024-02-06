"use client";
import React from "react";
import { siteConfig as config } from "./side";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ChineseAnimate from "../chinese-animate";
import EnglishAnimate from "../english-animate";
import Balancer from "react-wrap-balancer";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "../assets/icon";
import { Nav } from "./nav";

function Head() {
  return (
    <>
      <div className="flex flex-col lg:sticky lg:max-h-screen top-0   py-20 sm:col-span-1 sm:pl-20 sm:ml-10">
        <div className="flex flex-col container justify-between mx-auto h-full px-20 content-start md:items-start">
          <div className="flex flex-col  ">
            <div className="text-start">
              <h1 className=" text-5xl flex font-bold tracking-tight text-slate-200 ">
                <EnglishAnimate />
              </h1>
              <h3 className="mt-3 text-lg font-normal text-slate-200 sm:text-xl">
                {config.occupation}
              </h3>
              {/* <p className="text-md font-medium tracking-tight sm:text-md text-slate-200">
                {config.location}
              </p> */}
              <Balancer className="mt-4 tracking-wide text-slate-400 max-w-xs leading-normal">
                I don't exist to use a framework. I exist to solve problems.{" "}
                <i className="underline underline-offset-2 decoration-red-400 decoration-3 decoration-wavy">
                  Girl in T3.
                </i>
              </Balancer>

              <Nav />
            </div>
          </div>
          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            {socials.map((item) => (
              <li className="ml-1 mt-8 flex items-center">
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={item.aria}
                  title={item.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-3 text-sm font-light  block   hover:cursor-pointer"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Head;

const socials = [
  {
    name: "Github",
    href: "https://github.com/zmzlois",
    icon: (
      <GithubIcon className="w-6 h-6 text-slate-400 hover:text-slate-100 transition-colors duration-400" />
    ),
    aria: "GitHub (opens in a new tab)",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/loiszhao/",
    icon: (
      <LinkedinIcon className="w-6 h-6 text-slate-400 hover:text-slate-100 transition-colors duration-400" />
    ),
  },
  {
    name: "Mail",
    href: "mailto:loisisar@outlook.com",
    icon: (
      <MailIcon className="w-6 h-6 text-slate-400 hover:text-slate-100 transition-colors duration-400" />
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com/zmzlois",
    icon: (
      <TwitterIcon className="w-6 h-6 text-slate-400 hover:text-slate-100 transition-colors duration-400" />
    ),
  },
];
