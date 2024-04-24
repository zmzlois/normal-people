import Image from "next/image";

import { Glass } from "@/app/glass/glass";
import { Background } from "@/app/glass/background";

export const DepthBaseBlur = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse w-full px-4 py-10 md:px-10 md:gap-20 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center">
      <Image
        src="/glass-background.png"
        className=""
        alt="Depth based blur glass with scroll control video - zmzlois"
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
        <p className="text-start text-zinc-200 font-thin tracking-wider text-sm md:text-base leading-snug">
          {" "}
          <b> Make sure you scroll and hover mouse around!</b> An experiment to
          create a frosted glass effect using CSS properties, backdrop-filter,
          mask and blur filter with video playback control on scroll. The glass
          would transform and rotate on X axis and Y axis based on mouse
          position. Same as the 8 layers of masks -- it changes the linear
          gradient transparency based on mouse position. Video is hosted on
          Object Storage via{" "}
          <a
            href="https://aws.amazon.com/s3/"
            rel="noopener noreferrer"
            target="_blank"
          >
            AWS S3
          </a>{" "}
          and served via AWS' global CDN{" "}
          <a
            href="https://aws.amazon.com/cloudfront/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cloudfront
          </a>
          . Built with Next.js, TailwindCSS, TypeScript, and deployed Vercel.
        </p>
      </div>
    </div>
  );
};
