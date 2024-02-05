import { Companies } from "./config";
import type { CompanyType } from "./config";
import { Balancer } from "react-wrap-balancer";
import { DoubleRightArrow, LinkTwo, TopRightArrow } from "../assets/icon";

export const Experience = () => {
  return (
    <>
      <h2>Experience</h2>
      <ol className="group/list" id="experience">
        {Companies.map((item: CompanyType, index) => (
          <li className="mb-6" key={index}>
            <div className="group relative rounded-xl bg-zinc-900 overflow-hidden px-[0.6px] pb-[1.02px] pt-[1px] lg:hover:!opacity-100 lg:group-hover/list:opacity-30">
              <div
                id="glow"
                className="absolute glow rotate-45 inset-0 w-[100px] h-[100px] z-0 hidden transition lg:-inset-x-6 lg:hidden lg:group-hover:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"
              />
              <div className="z-10 px-5 relative lg:hover:ring ring-slate-500/50 rounded-xl py-6 bg-zinc-900 grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:bg-zinc-800 ">
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {item.time}
                </header>
                <a href={item.slug} className="z-10 sm:col-span-6">
                  <h3 className="sm:font-medium font-normal leading-snug text-slate-200 sm:text-base text-sm mb-2 lg:mb-0">
                    <div>
                      <div className="inline-flex items-baseline leading-tight text-slate-200 hover:text-cyan-300 focus-visible:text-cyan-300 group/link ">
                        {/* <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-5 md:-inset-y-4 lg:block" /> */}
                        <span>
                          {item.title} ·{" "}
                          <span className="inline-block">
                            {item.name}
                            <DoubleRightArrow
                              className="
    ml-2 lg:ml-4 lg:mb-[0.16rem] inline-block text-slate-200 sm:h-4 sm:w-4 h-3 w-3
    lg:group-hover/link:-rotate-45 lg:group-hover/link:scale-125 lg:group-hover/link:translate-x-1 lg:group-hover/link:skew-y-1
    lg:group-hover/link:transform-all lg:group-hover/link:transition-all lg:group-hover/link:text-sky-300
    transition-all hover:-rotate-45 hover:scale-125 hover:translate-x-1 hover:skew-y-1
    hover:transform-all hover:transition-all hover:text-sky-300
  "
                            />
                          </span>
                        </span>
                      </div>
                    </div>
                  </h3>
                </a>
                <Balancer className="text-sm italic tracking-wide text-slate-400 sm:col-start-3 sm:col-end-10 ">
                  {item.description && item.description}
                </Balancer>
                <Balancer className="z-0 sm:mt-1 mt-3 sm:text-md text-sm tracking-wide text-slate-300 sm:col-span-2 sm:col-start-3 sm:col-end-10">
                  {item.context && item.context}
                </Balancer>
                <ul className="z-10 sm:mt-1 mt-3 flex gap-2 text-sm tracking-wide text-slate-500 sm:col-span-2 sm:col-start-3 sm:col-end-10">
                  {item.links &&
                    Object.values(item.links).map((res, index) => (
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
                          <Balancer className="text-sm">{res.name}</Balancer>
                        </a>
                      </li>
                    ))}
                </ul>
                <ul className="z-10 flex-wrap mt-1 gap-2 flex  sm:col-span-2 sm:col-start-3 sm:col-end-10">
                  {item.tags &&
                    item.tags.map((res, index) => (
                      <li
                        key={index}
                        className="text-cyan-100 text-sm font-light tracking-wider bg-cyan-700 px-3 rounded-full py-1"
                      >
                        <p>{res}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
        <a
          href="#cv"
          className="text-sky-100 hover:text-cyan-300 hover:transition-all group px-4 py-4"
        >
          <span className="">View full resume</span>{" "}
          <TopRightArrow className="inline-block hover:transition-all duration-250 group-hover:skew-x-2 group-hover:scale-[1.12]" />
        </a>
      </ol>
    </>
  );
};
