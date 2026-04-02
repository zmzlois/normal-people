import { ReactNode } from "react";
import Link from "next/link";
import EnglishAnimate from "@/components/english-animate";
import "./shadow.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-200">
      <div className="p-8 opacity-80 invert">
        <Link href="/" aria-label="Back to home">
          <EnglishAnimate size="small" />
        </Link>
      </div>
      <div className="flex items-center justify-center flex-1">
        {children}
      </div>
    </div>
  );
}
