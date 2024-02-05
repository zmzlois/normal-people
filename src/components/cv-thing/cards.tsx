"use client";
import type { ContentType, LinkType } from "./config";
import { Balancer } from "react-wrap-balancer";
import { DoubleRightArrow, LinkTwo, TopRightArrow } from "../assets/icon";
import { cn } from "@/utils/cn";
export const Cards = ({
  title,
  items,
}: {
  title: string;
  items: ContentType[];
}) => {
  return (
    <>
      <h2>{title.toUpperCase()}</h2>
      <ol className="group/list" id={title}>
        {items.map((item: any, index: number) => (
          <li className="mb-6 list-none" key={index}>
            <a href={item.slug}>
              <div className="group relative rounded-xl bg-zinc-900 overflow-hidden px-[0.6px] pb-[1.02px] pt-[1px] lg:hover:!opacity-100 transition-all lg:group-hover/list:opacity-30">
                <div
                  id="glow"
                  className="absolute glow rotate-45 inset-0 w-[100px] h-[100px] z-0 hidden transition lg:-inset-x-6 lg:hidden lg:group-hover:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
                />
                <div
                  className={cn(
                    "z-10 lg:px-5 relative lg:hover:ring ring-cyan-950/50 rounded-xl py-6 bg-zinc-900 grid  transition-all sm:grid-cols-8   sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:bg-zinc-800 ",
                    { "md:gap-1": !item.description }
                  )}
                >
                  {item.time && (
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                      {item.time}
                    </header>
                  )}
                  {item.image && (
                    <header className="z-10col-span-1  mr-4 sm:col-span-2 sm:row-start-2 sm:row-end-3 flex ">
                      <img
                        className="object-cover rounded-md border-[1px] border-cyan-950 aspect-video "
                        src={item.image}
                      ></img>
                    </header>
                  )}
                  <div className="z-10  sm:col-span-6 sm:col-start-3">
                    <h3 className="sm:font-medium font-normal leading-snug  hover:text-cyan-300 group-hover:!text-cyan-300 group-hover/list:text-cyan-300 focus-visible:text-cyan-300  text-slate-200 text-base tracking-wide  pt-4 lg:pt-0 pb-4 lg:pb-0">
                      <div className="inline-flex items-baseline group/link ">
                        {/* <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-5 md:-inset-y-4 lg:block" /> */}
                        <span>
                          {item.title}
                          {item.title ? " · " : ""}
                          <span className="inline-block">
                            {item.name}
                            <DoubleRightArrow
                              className="
    ml-2 lg:ml-4 lg:mb-[0.16rem] inline-block text-slate-200 sm:h-4 sm:w-4 h-3 w-3
    lg:group-hover/list:-rotate-45 lg:group-hover/list:scale-125 lg:group-hover/list:translate-x-1 lg:group-hover/list:skew-y-1
    lg:group-hover/list:transform-all lg:group-hover/list:transition-all lg:group-hover/link:text-sky-300
    transition-all hover:-rotate-45 hover:scale-125 hover:translate-x-1 hover:skew-y-1
    hover:transform-all hover:transition-all hover:text-sky-300 group-hover/list:text-sky-300
  "
                            />
                          </span>
                        </span>
                      </div>
                    </h3>
                  </div>
                  {item.description && (
                    <Balancer className="text-sm italic tracking-wide text-slate-400 sm:col-start-3 sm:col-end-10 ">
                      {item.description}
                    </Balancer>
                  )}
                  {item.context && (
                    <Balancer
                      className={cn(
                        "z-0 sm:py-1   py-3 sm:text-md text-sm tracking-wide group-hover/list:text-slate-200 text-slate-300 sm:col-span-2 sm:col-start-3 sm:col-end-10",
                        { "sm:row-start-2": !item.description }
                      )}
                    >
                      {item.context}
                    </Balancer>
                  )}
                  {item.links && (
                    <ul className="z-10 sm:pt-1 pt-3 flex gap-2 text-sm tracking-wide text-slate-500 sm:col-span-2 sm:col-start-3 sm:col-end-10">
                      {item.links &&
                        item.links.map((res: LinkType, index: number) => (
                          <li
                            key={index}
                            className="text-slate-200  px-3 rounded-full py-1"
                          >
                            <a
                              href={res.url}
                              aria-label={`${res.aria ?? ""} (Open in new tab)`}
                              title={res.title}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-sky-200 duration-300 transition-color flex items-center space-x-1"
                            >
                              <LinkTwo className="inline-block" />
                              <Balancer className="text-sm">
                                {res.name}
                              </Balancer>
                            </a>
                          </li>
                        ))}
                    </ul>
                  )}
                  {item.tags && (
                    <ul className="z-10 flex-wrap sm:row-span-1 pt-3 sm:pt-1 gap-2 flex  sm:col-start-3 sm:col-end-10">
                      {item.tags &&
                        item.tags.map((res: string, index: number) => (
                          <li
                            key={index}
                            className="text-cyan-100 text-sm font-light tracking-wider bg-cyan-700 px-3 rounded-full py-1"
                          >
                            <p>{res}</p>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ol>
    </>
  );
};
