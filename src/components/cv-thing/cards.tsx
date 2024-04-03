"use client";
import type { ContentType, LinkType } from "./config";
import { Balancer } from "react-wrap-balancer";
import { DoubleRightArrow, LinkTwo, TopRightArrow } from "../assets/icons";
import { cn } from "@/utils/cn";
import { CardLink } from "./card-link";
import { CardTitle } from "./card-title";
export const Cards = ({
  title,
  items,
}: {
  title: string;
  items: ContentType[];
}) => {
  return (
    <>
      <div className="top-0 sticky z-50 backdrop-blur-md bg-zinc-900/70">
        <h2>{title.toUpperCase()}</h2>
      </div>
      <ol className="group/list flex flex-col space-y-16 lg:space-y-4">
        {items.map((item: any, index: number) => (
          <li className="mb-6 list-none" key={index}>
            <div>
              <div className="group relative rounded-xl bg-zinc-900 overflow-hidden px-[0.6px] pb-[1.02px] pt-[1px] lg:hover:!opacity-100 transition-all lg:group-hover/list:opacity-30">
                <div
                  id="glow"
                  className="absolute glow rotate-45 inset-0 w-[100px] h-[100px] z-0 hidden transition lg:-inset-x-6 lg:hidden lg:group-hover:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                />
                <div
                  className={cn(
                    "z-10 lg:px-5 lg:py-4 relative lg:hover:ring ring-cyan-950/50 rounded-xl  bg-zinc-900 grid  transition-all sm:grid-cols-8   sm:gap-8 lg:gap-4 md:gap-2 lg:hover:!opacity-100 lg:hover:bg-zinc-800 ",
                    { "md:gap-1": !item.description }
                  )}
                >
                  {item.time && (
                    <div className="z-10 text-xs md:py-1 py-0 font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      {item.time}
                    </div>
                  )}
                  {item.image && (
                    <header className="hidden z-10 col-span-1  mr-4 sm:col-span-2 sm:row-start-2 sm:row-end-3 sm:flex ">
                      <img
                        className="object-cover rounded-md w-60 border-[1px] border-cyan-950 aspect-video "
                        src={item.image}
                      ></img>
                    </header>
                  )}
                  <CardTitle item={item} />
                  {item.description && (
                    <Balancer className="text-sm italic tracking-wide text-slate-400 py-2 md:py-0 lg:py-0 sm:col-start-3 sm:col-end-10 ">
                      {item.description}
                    </Balancer>
                  )}
                  {item.context && (
                    <Balancer
                      className={cn(
                        "z-0 sm:py-1 py-2 leading-normal font-light  text-md tracking-wide group-hover/list:text-slate-200 text-slate-300 sm:col-span-2 sm:col-start-3 sm:col-end-10",
                        { "sm:row-start-2": !item.description }
                      )}
                    >
                      {item.context}
                    </Balancer>
                  )}
                  {item.links && (
                    <ul className="z-10 sm:pt-1 underline underline-offset-4 decoration-cyan-400/60 lg:no-underline py-2 flex flex-wrap gap-1 lg:gap-2 text-sm tracking-wide text-slate-500 sm:col-span-2 sm:col-start-3 sm:col-end-10">
                      {item.links.map((res: LinkType, index: number) => (
                        <CardLink item={res} key={index} />
                      ))}
                    </ul>
                  )}
                  {item.image && (
                    <header className="sm:hidden py-2 z-10 col-span-1  mr-4 sm:col-span-2 sm:row-start-2 sm:row-end-3 flex ">
                      <img
                        className="object-cover rounded-md w-60 border-[1px] border-cyan-950 aspect-video "
                        src={item.image}
                      ></img>
                    </header>
                  )}
                  {item.tags && (
                    <ul className="z-10 flex-wrap sm:row-span-1 pt-3 sm:pt-1 gap-2 flex  sm:col-start-3 sm:col-end-10">
                      {item.tags &&
                        item.tags.map((res: string, index: number) => (
                          <li
                            key={index}
                            className="text-cyan-200 text-xs font-light tracking-wider  bg-cyan-700/50 px-3 rounded-full py-1"
                          >
                            <p>{res}</p>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};
