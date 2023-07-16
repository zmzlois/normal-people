"use client"
import Link from 'next/link'
import React from 'react'
import Particles from '../components/particles'
import { useStore } from './store'
import clsx from 'clsx'
const navigation = [
  //{ name: "Projects", href: "/projects" },
  { name: 'Blog', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
]

export default function Home() {
   const { visited } = useStore()
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen px-6 overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black md:px-24">
      <nav className={clsx("my-16", !visited && "animated-fade-in" )}>
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mx-3 text-sm font-light duration-500 text-zinc-300 hover:text-zinc-100"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className={clsx("hidden w-screen   md:block bg-gradient-to-r  from-zinc-300/0 via-zinc-300/50 to-zinc-300/0", !visited && "animate-fade-left animate-glow  h-px")} />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      {/* bg-gradient-to-tr from-yellow-200 via-orange-100 to-red-200 cursor-default text-edge-outline animate-title bg-clip-text */}
      <h1 className={clsx("z-10 text-4xl font-extrabold tracking-tighter cursor-default duration-800 sm:text-6xl md:text-9xl  text-zinc-50 whitespace-nowrap text-edge-outline  bg-clip-text ", !visited && " animate-title ")}>
        zmzlois
      </h1>

      <div className={clsx("hidden w-screen md:block bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 ", !visited && "animate-glow animate-fade-right h-px")} />
      <div className={clsx("my-16 text-center ", !visited && "animate-fade-in")}>
        <h2 className="text-sm font-light text-zinc-300">
          <b className="text-zinc-200">Also called Lois. </b>
          <br /> Stumbling on building SaaS
          
          .<br className="block md:hidden" /> Tinker with{' '}
          <a
            target="_blank"
            href="https://modernjs.dev/en"
            className="underline duration-500 hover:text-zinc-300"
          >
            Bytedance Infra
          </a>{' '}
          and{' '}
          <a
            target="_blank"
            href="https://zenstack.dev/"
            className="underline duration-500 hover:text-zinc-300"
          >
            ZenStack
          </a>{' '}
          at night.
          <br className="block" />
          Occasionally detangle <span className="rotate-180">
            businesses
          </span>{' '}
          in my head for fun and turn them into{' '}
          <Link
            target="_blank"
            href="/blogs"
            className="underline duration-500 hover:text-zinc-300"
          >
            blogs
          </Link>
          .
        </h2>
      </div>
    </div>
  )
}
