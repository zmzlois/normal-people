"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { useCycle, motion } from "framer-motion";
import { Island } from "./island";

export default function Page() {
  const [island, setIsland] = useState<"idle" | "ring" | "silent" | "timer">(
    "idle"
  );

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={"idle"}
      animate={island}
      ref={containerRef}
      className="bg-zinc-800  border border-zinc-800 rounded-lg drop-shadow-sm lg:p-8 p-4 lg:w-[400px] max-w-screen w-[90vw] aspect-square flex flex-col justify-between"
    >
      <div
        className="py-10 px-4 text-sm flex items-center justify-center"
        id="island"
      >
        <Island state={island} setState={setIsland} />
      </div>
      <div className="flex gap-4 justify-evenly">
        <Button text="Idle" toggle={() => setIsland("idle")} />
        <Button text="Ring" toggle={() => setIsland("ring")} />
        <Button text="Timer" toggle={() => setIsland("timer")} />
      </div>
    </motion.div>
  );
}
