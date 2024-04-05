"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRef } from "react";
// import Particles from '../components/particles'
import { cn } from "@/utils/cn";

const navigation = [
  { name: "Project", href: "/project" },
  { name: "Blog", href: "/blogs" },
  { name: "CV", href: "/intro" },
];

export default function Home() {
  const [blur, setBlur] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-6 overflow-hidden bg-[#0e0e0e] md:px-24">
      <nav className="py-6 group/link">
        <ul
          onMouseEnter={() => setBlur(true)}
          onMouseLeave={() => setBlur(false)}
          className="flex items-center justify-center transform-all blur-sm hover:blur-none gap-4 duration-500 group/link"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mx-3 text-base  font-light  underline underline-offset-4  text-zinc-300 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>

        <h1
          className={cn(
            "z-10 text-4xl font-extrabold tracking-tighter blur-none transform-all duration-500  text-center cursor-default duration-800 sm:text-6xl md:text-9xl  text-zinc-50  ",
            blur ? "blur-sm duration-500" : "blur-none"
          )}
        >
          zmzlois
        </h1>
      </nav>
    </div>
  );
}
