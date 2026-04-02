import { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import "./project.css";
import { cn } from "@/utils/cn";
import EnglishAnimate from "@/components/english-animate";

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="p-8 opacity-80">
        <Link href="/" aria-label="Back to home">
          <EnglishAnimate size="small" />
        </Link>
      </div>
      <div className={cn(GeistSans.className, "container mx-auto p-4 pb-16")}>
        {children}
      </div>
    </div>
  );
}
