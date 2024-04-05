"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Nav } from "./nav";
// import Particles from '../components/particles'
import { cn } from "@/utils/cn";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-6 overflow-hidden bg-[#0e0e0e] md:px-24">
      <Nav />
    </div>
  );
}
