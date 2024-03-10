"use client";
import { Toaster, toast } from "sonner";
import { allBlogs } from "contentlayer/generated";

export default function Sonner() {
  toast.message("I made you click!");
  const blog = allBlogs.find((blog) => blog.slug === "remake-sonner");

  if (!blog) {
    throw new Error(`Post not found for slug: remake-sonner`);
  }
  return (
    <div className=" relative z-0 inset-0  group transition-colors drop-shadow-sm shadow-slate-400 rounded-none my-4 grid grid-cols-5 gap-2 h-[calc(100vh-80vh)]">
      <div className="flex  flex-col col-span-2 z-10 items-center gap-2 py-8 px-10">
        <a
          href="/blogs/remake-sonner"
          rel="noopener noreferrer"
          aria-label="Remake Sonner by Emil Kowalski - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 text-2xl font-thin">
            Remake Sonner by Emil Kowalski
          </h2>
        </a>
        <div className="absolute z-50 top-1/2">
          <button
            className="text-zinc-200 font-light border border-zinc-700 rounded-lg px-4 py-2 hover:text-zinc-200 hover:border-zinc-400 transition-colors"
            onClick={() => toast("success")}
          >
            Click for a toast
          </button>
        </div>
      </div>
      <div className="col-span-1 flex text-center items-start py-14 leading-5 text-zinc-200">
        <p className="w-full text-start text-zinc-200 font-thin tracking-wider italic leading-snug">
          {" "}
          {blog?.description}
        </p>
      </div>
      <div className="col-span-1 px-4">
        <img src="sonner.png" alt="sonner" className="col-span-1" />
      </div>
    </div>
  );
}
