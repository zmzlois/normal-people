"use client";
import { Toaster, toast } from "sonner";
import { allBlogs } from "contentlayer/generated";
import { ProjectCard } from "./card";

export default function Sonner() {
  toast.message("I made you click!");
  const blog = allBlogs.find((blog) => blog.slug === "remake-sonner");

  if (!blog) {
    throw new Error(`Post not found for slug: remake-sonner`);
  }
  return (
    <ProjectCard>
      <div className="flex  flex-col col-span-2 z-10 items-center md:gap-2 gap-4 md:py-8 py-10 px-4 md:px-10">
        <a
          href="/blogs/remake-sonner"
          rel="noopener noreferrer"
          aria-label="Remake Sonner by Emil Kowalski - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            Remake Sonner by Emil Kowalski (TBC)
          </h2>
        </a>
        <div className="">
          <button
            className="text-zinc-200 font-light border border-zinc-700 rounded-lg px-4 py-2 hover:text-zinc-200 hover:border-zinc-400 transition-colors"
            onClick={() => toast("I made ya click!")}
          >
            Click for a toast
          </button>
        </div>
      </div>
      <div className="md:col-span-1  flex text-center md:items-start items-center md:py-14 px-6 md:px-0 py-2 leading-5 text-zinc-200">
        <p className="w-full text-start text-zinc-200 font-thin tracking-wider italic text-sm md:text-base leading-snug">
          {" "}
          {blog?.description}
        </p>
      </div>
      <div className="col-span-1 md:block hidden px-4">
        <img src="sonner.png" alt="sonner" className="col-span-1" />
      </div>
    </ProjectCard>
  );
}
