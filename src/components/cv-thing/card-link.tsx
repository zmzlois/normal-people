import type { LinkType } from "./config";
import { Balancer } from "react-wrap-balancer";
import { LinkTwo } from "../assets/icon";
export const CardLink = ({ item }: { item: LinkType }) => {
  return (
    <>
      {" "}
      <li className="text-slate-200 pr-3 rounded-full py-1">
        <a
          href={item.url}
          aria-label={`${item.aria ?? ""} (Open in new tab)`}
          title={item.title}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-200 duration-300 transition-color flex items-center space-x-1"
        >
          <LinkTwo className="inline-block" />
          <Balancer className="text-sm">{item.name}</Balancer>
        </a>
      </li>
    </>
  );
};
