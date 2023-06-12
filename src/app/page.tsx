import Link from 'next/link'
import React from 'react'
import Particles from '../components/particles'

const navigation = [
  //{ name: "Projects", href: "/projects" },
  { name: 'Blog', href: '/blogs' },
  { name: 'Contact', href: '/contact' },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black md:px-24 px-6">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-300 hover:text-zinc-100 font-light mx-3"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      {/* bg-gradient-to-tr from-yellow-200 via-orange-100 to-red-200 cursor-default text-edge-outline animate-title bg-clip-text */}
      <h1 className="z-10 text-4xl  duration-800  font-extrabold sm:text-6xl md:text-9xl whitespace-nowrap  tracking-tighter text-zinc-50 cursor-default text-edge-outline animate-title bg-clip-text ">
        zmzlois
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-300 font-light">
          <b className="text-zinc-200">Also called Lois. </b>
          <br /> Stumbling on building SaaS like{' '}
          <Link
            target="_blank"
            href="https://wait.gg"
            className="underline duration-500 hover:text-zinc-300"
          >
            Wait
          </Link>
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
