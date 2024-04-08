import Image from "next/image";
import { ProjectCard } from "./card";
import { Glass } from "@/app/glass/glass";
import { Background } from "@/app/glass/background";

export const DepthBaseBlur = () => {
  return (
    <div className="flex md:flex-row flex-col w-full px-4 md:px-10 md:gap-20 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center">
      <Image
        src="/glass-background.png"
        className=""
        alt="Depth based blur image"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2 p-4">
        <a
          href="https://glass-in-forest.loiszhao.com"
          rel="noopener noreferrer"
          aria-label="Glass in the forest by Emil Kowalski - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            Frosting glass in the forest
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider italic text-sm md:text-base leading-snug">
          {" "}
          An experiment to create a frosted glass effect using CSS properties,
          backdrop-filter, mask and blur filter with video playback control on
          scroll.
        </p>
      </div>
    </div>
  );
};
