import { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import "./project.css";
import { cn } from "@/utils/cn";
import EnglishAnimate from "@/components/english-animate";

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="p-8 opacity-80">
        <EnglishAnimate size="small" />
      </div>
      <div className={cn(GeistSans.className, "container mx-auto p-4 pb-16")}>
        {children}
        <div className="p-8 opacity-80 items-center flex justify-center">
          <a 
            href="/" 
            className="text-zinc-300 font-light hover:text-white transition-colors duration-200 group flex items-center gap-2"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
            Back to home page
          </a>
        </div>
      </div>
    </div>
  );
}
