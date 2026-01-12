"use client";

import React from "react";
import LeftIcon from "@/components/assets/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils/cn";

export default function BlogHeader() {
  const path = usePathname();
  const isBlogPage = path?.startsWith("/blogs");
  const isBlogsListPage = path === "/blogs";

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-gray-200/10 bg-black/80 backdrop-blur-sm",
        "transition-all duration-300"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href={isBlogsListPage ? "/" : isBlogPage ? "/blogs" : "/"}
            className="group flex items-center gap-2"
            aria-label={isBlogsListPage ? "Home" : isBlogPage ? "Back to blogs" : "Home"}
          >
            <LeftIcon className="text-slate-300 group-hover:text-slate-100 transition-all duration-300 w-5 h-5 group-hover:-translate-x-1" />
            <span className="text-sm font-light text-zinc-400 group-hover:text-zinc-200 transition-colors hidden sm:inline">
              {isBlogsListPage ? "Home" : isBlogPage ? "Blogs" : "Home"}
            </span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/blogs"
              className={cn(
                "text-sm font-light transition-colors",
                isBlogPage
                  ? "text-zinc-200"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              Articles
            </Link>
            <Link
              href="/contact"
              className="text-sm font-light text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
