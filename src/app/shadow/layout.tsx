import { ReactNode } from "react";
import "./shadow.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center bg-zinc-200 justify-center min-h-screen">
      {children}
    </div>
  );
}
