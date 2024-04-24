import Image from "next/image";

import { Glass } from "@/app/glass/glass";
import { Background } from "@/app/glass/background";

export const Ball = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse w-full px-4 py-10 md:px-10 md:gap-20 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center">
      <Image
        src="/ball.png"
        className=""
        alt="Painting a ball with one div - zmzlois"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2 p-4">
        <a
          href="https://ball-three.vercel.app"
          rel="noopener noreferrer"
          aria-label="Painting a ball - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            Painting a ball on the web
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider text-sm md:text-base leading-snug">
          {" "}
          Painting a ball on the web with only one div and css. An experiment
          playing with complex shadows.
        </p>
      </div>
    </div>
  );
};
