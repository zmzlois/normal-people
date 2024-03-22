import Balancer from "react-wrap-balancer";
import { DoubleRightArrow } from "../assets/icon";

export const CardTitle = ({ item }: { item: any }) => {
  return (
    <a href={item.slug} className="z-10  sm:col-span-6 sm:col-start-3">
      <h3 className="sm:font-medium font-normal leading-snug  hover:text-cyan-300 group-hover:!text-cyan-300 group-hover/lnk:text-cyan-300 focus-visible:text-cyan-300  text-slate-200 text-base tracking-wide  pt-4 md:pt-0 pb-4 md:pb-0 underline  lg:pb-0">
        <div className="inline-flex items-baseline  group/link ">
          {/* <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-5 md:-inset-y-4 lg:block" /> */}
          <span>
            {item.title}
            {item.title ? " · " : ""}

            <span className="inline-block no-underline lg:no-underline md:underline underline-offset-4 decoration-cyan-400/80 ">
              {item.name && item.name}
              <DoubleRightArrow
                className="
    ml-2 lg:ml-4 lg:mb-[0.16rem] inline-block text-slate-200 sm:h-4 sm:w-4 h-3 w-3
    lg:group-hover/link:-rotate-45 lg:group-hover/link:scale-125 lg:group-hover/link:translate-x-1 lg:group-hover/link:skew-y-1
    lg:group-hover/list:transform-all lg:group-hover/list:transition-all lg:group-hover/link:text-sky-300
    transition-all hover:-rotate-45 hover:scale-125 hover:translate-x-1 hover:skew-y-1
    hover:transform-all hover:transition-all hover:text-sky-300 group-hover/list:text-sky-300
  "
              />
            </span>
          </span>
        </div>
      </h3>
    </a>
  );
};
