"use client";
import Link from "next/link";
import React from "react";
// import Particles from '../components/particles'
import { useStore } from "./store";
import clsx from "clsx";

const navigation = [
  { name: "Project", href: "/project" },
  { name: "Blog", href: "/blogs" },
  { name: "CV", href: "/intro" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-6 overflow-hidden bg-zinc-900 md:px-24">
      <nav className="py-6">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mx-3 text-sm font-light duration-500 text-zinc-300 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div
        className={clsx(
          " w-screen   md:block bg-gradient-to-r  from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
        )}
      />

      <h1
        className={clsx(
          "z-10 text-4xl font-extrabold tracking-tighter cursor-default duration-800 sm:text-6xl md:text-9xl  text-zinc-50 whitespace-nowrap text-edge-outline  bg-clip-text "
        )}
      >
        zmzlois
      </h1>
    </div>
  );
}
