"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./button";
import { useCycle, motion } from "framer-motion";
import { Island } from "./island";

const useDimensions = (ref: React.RefObject<HTMLDivElement>) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current!.offsetWidth;
    dimensions.current.height = ref.current!.offsetHeight;
  }, []);

  return dimensions.current;
};

export default function Page() {
  const [island, setIsland] = useState<"idle" | "ring" | "silent" | "timer">(
    "idle"
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const aspect = useDimensions(containerRef);
  const textEle = [
    "New notification",
    "New message",
    "New follower",
    "New task",
  ];

  return (
    <motion.div
      initial={"idle"}
      animate={island}
      custom={aspect}
      ref={containerRef}
      className="bg-zinc-900  border border-zinc-800 rounded-lg drop-shadow-sm p-8 w-[400px] aspect-square flex flex-col justify-between"
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
