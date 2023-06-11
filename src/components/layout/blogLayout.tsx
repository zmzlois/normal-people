"use client";

import React, { PropsWithRef } from 'react'
import LeftIcon from "@/components/icons/left"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLink = [{
    href: "/",
    label: "Home"
},
    {
        href: "/contact",
        label: "Contact"
    }]
function BlogLayout() {
    const path = usePathname()

  return (
      <div className="flex justify-between">
          <div>
        <Link href={path==="/blogs"? "/":"/blogs"}>
          <LeftIcon/>
        </Link>
      </div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>
      <nav className="md:space-x-4 space-y-4 space-x-2">
                  {navLink.map((link) => (
                      <Link href={link.href} key={link.href}>
                          <span className="text-sm font-light text-zinc-400 hover:text-zinc-200 transition transform">{link.label}</span>
                      </Link>
                    ))}
      </nav>
          </div>
      </div>
  )
}

export default BlogLayout;