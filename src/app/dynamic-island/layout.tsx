import React from "react";
import "./style.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-10  lg:pr-20">
      {children}
    </div>
  );
}
