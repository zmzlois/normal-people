"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { PauseIcon, PlayIcon } from "@/components/assets/icons";

export const Audio = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  if (typeof document === "undefined") return null;
  const a0 = document.getElementById("audio") as HTMLAudioElement;

  if (!a0) null;
  function onClick() {
    setIsPlaying(!isPlaying);

    console.log("isPlaying button clicked", isPlaying);
    if (isPlaying) {
      a0.pause();
    }
    if (!isPlaying) {
      a0.play();
    }
  }
  return (
    <div className=" z-[100] w-12 h-12 right-[10px] bottom-[10px] fixed">
      <button
        onClick={onClick}
        className="w-10 h-10 bg-zinc-300/40 items-center flex  justify-center rounded-full opacity-50 transition-transform duration-300 ease-in-out transform hover:scale-110 text-zinc-300  focus:text-zinc-200 focus-visible:text-zinc-200"
      >
        <PauseIcon className={cn("", isPlaying ? "block" : "hidden")} />
        <PlayIcon className={cn("", isPlaying ? "hidden" : "block")} />
      </button>
      <audio
        autoPlay
        loop
        id="audio"
        playsInline
        preload="preload"
        className="absolute "
      >
        <source
          src="https://utfs.io/f/9bbb0b6f-aa93-4cb7-b34d-0685685ba7ae-ecqv0m.mp3"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
};
