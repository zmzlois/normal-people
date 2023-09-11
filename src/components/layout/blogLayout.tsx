"use client";

import React, { PropsWithRef } from 'react'
import LeftIcon from "@/components/icons/left"
import Link from "next/link"
import { usePathname } from "next/navigation"
import cn from "classnames"

const navLink = [{
    href: "/",
    label: "Home"
},
    {
        href: "/contact",
        label: "Contact"
    }]
export default function BlogHeader() {
    const path = usePathname()
    const [didScroll, setDidScroll] = React.useState(false);
    const [lastScrollTop, setLastScrollTop] = React.useState(0);
    const delta = 5;
    const [navbarHeight, setNavbarHeight] = React.useState(0);

    React.useEffect(() => {
        setNavbarHeight(document.getElementById('navi').offsetHeight);

        const handleScroll = () => {
            setDidScroll(true);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    React.useEffect(() => {
        const hasScrolled = () => {
            const st = window.scrollY;

            if (Math.abs(lastScrollTop - st) <= delta) return;

            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                document.getElementById('navi').style.top = '-60px';
            } else {
                // Scroll Up
                if (st + window.innerHeight < document.documentElement.scrollHeight) {
                    document.getElementById('navi').style.top = '0';
                }
            }

            setLastScrollTop(st);
        };

        if (didScroll) {
            hasScrolled();
            setDidScroll(false);
        }

        const scrollInterval = setInterval(() => {
            if (didScroll) {
                hasScrolled();
                setDidScroll(false);
            }
        }, 250);

        return () => {
            clearInterval(scrollInterval);
        };
    }, [didScroll, lastScrollTop]);


    return (
      <div className={cn("flex justify-between  py-4 sm:py-6 transition-all duration-500 backdrop-")} id={"navi"}>
          <div>
        <Link href={path==="/blogs"? "/":"/blogs"} >
          <LeftIcon/>
        </Link>
      </div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div>
      <nav className="md:space-x-4 space-y-4 space-x-2">

                      <Link href="/">
                          <span className="text-sm font-light text-zinc-400 hover:text-zinc-200 transition transform">Home</span>
                  </Link>
                  <Link href={path==="/contact"? "/blogs" : "/contact"}>
                      <span className="text-sm font-light text-zinc-400 hover:text-zinc-200 transition transform">{path==="/contact"? "Blogs" : "Contact"}</span>
                    </Link>

      </nav>
          </div>
      </div>
  )
}

