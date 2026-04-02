import React from "react";
import Link from "next/link";
import EnglishAnimate from "@/components/english-animate";
import "./style.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-8 opacity-80">
        <Link href="/" aria-label="Back to home">
          <EnglishAnimate size="small" />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 px-10 lg:pr-20">
        {children}
      </div>
    </div>
  );
}
