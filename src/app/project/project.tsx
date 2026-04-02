"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  href: string;
  description: string;
  image?: string;
  imageAlt?: string;
  tags?: string[];
}

function FeaturedCard({
  title,
  href,
  description,
  image,
  imageAlt,
  tags,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="project-card group block"
    >
      {image && (
        <div className="overflow-hidden rounded-xl mb-5">
          <Image
            src={image}
            alt={imageAlt || title}
            width={900}
            height={500}
            className="w-full h-[280px] md:h-[360px] object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 px-1">
        {tags && (
          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-widest text-zinc-500 font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h2 className="text-zinc-100 text-2xl md:text-3xl font-normal tracking-tight group-hover:text-white transition-colors duration-200">
          {title}
        </h2>
        <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed max-w-2xl">
          {description}
        </p>
      </div>
    </a>
  );
}

function CompactCard({
  title,
  href,
  description,
  image,
  imageAlt,
  tags,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target={href.startsWith("/") ? undefined : "_blank"}
      className="project-card group flex flex-col rounded-2xl border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 hover:bg-zinc-900/40 overflow-hidden"
    >
      {image && (
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={imageAlt || title}
            width={600}
            height={340}
            className="w-full aspect-[16/10] object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="flex flex-col gap-2 p-5 md:p-6">
        {tags && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] uppercase tracking-widest text-zinc-500 font-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h2 className="text-zinc-200 text-lg font-normal tracking-tight group-hover:text-white transition-colors duration-200">
          {title}
        </h2>
        <p className="text-zinc-500 font-light text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
}

// featured projects — hero treatment
const featured: ProjectCardProps[] = [
  {
    title: "ComCord",
    href: "https://comcord.vision",
    description:
      "A Discord bot with a web app for team visibility — built out of frustration with remote collaboration. Turned it into a startup, applied for Y-Combinator. The project folded but I learnt more about Next.js, user experience and teamwork than anything before it.",
    image: "/comcord.png",
    imageAlt: "ComCord — Discord bot with web application",
    tags: ["startup", "next.js", "discord"],
  },
  {
    title: "LinkGoGo",
    href: "https://github.com/zmzlois/LinkGoGo",
    description:
      'Written in Go. Started with "why pay LinkTree for analytics when it\'s a 3-day build?" One of my speed challenges to see how fast I could build with a language I\'d only known for a month.',
    image: "/linkgogo.png",
    imageAlt: "LinkGoGo — open source LinkTree alternative",
    tags: ["golang", "speed build"],
  },
];

// experiments and smaller projects
const experiments: ProjectCardProps[] = [
  {
    title: "K3s the sane way",
    href: "https://github.com/zmzlois/k3s-the-sane-way",
    description:
      "Deploy k3s on 4 globally distributed VPS instances with Ansible, Prometheus, Grafana and Traefik.",
    image:
      "https://repository-images.githubusercontent.com/773121062/5e9260bf-6b9a-4d62-8c69-6cd90454a9f1",
    imageAlt: "K3s the sane way",
    tags: ["kubernetes", "devops"],
  },
  {
    title: "Docksible",
    href: "https://github.com/zmzlois/Docksible",
    description:
      "A clean Docker container to generate SSH keys on the fly for testing Ansible playbooks.",
    image:
      "https://repository-images.githubusercontent.com/742522711/ab095e7a-fef3-44e4-909b-1096e255d118",
    imageAlt: "Docksible — Docker template for Ansible",
    tags: ["docker", "ansible"],
  },
  {
    title: "GBITA — 7hr speed build",
    href: "https://gbita.ae",
    description:
      "Client site done in 7 hours. Email via Resend, assets on S3 + CloudFront, deployed on Vercel.",
    image: "/gbita.png",
    imageAlt: "GBITA — Global Business IT Approach",
    tags: ["speed build", "client work"],
  },
  {
    title: "npm for monorepo",
    href: "https://monorepo.loiszhao.com",
    description:
      "8-hour build. Converts npm install to pnpm add --filter for monorepos. Uses Zustand for session storage.",
    image: "/npm-for-monorepo.png",
    imageAlt: "npm package finder for monorepos",
    tags: ["speed build", "tooling"],
  },
  {
    title: "Frosting glass in the forest",
    href: "https://glass-in-forest.loiszhao.com",
    description:
      "Frosted glass with CSS backdrop-filter, mask and blur — transforms on mouse position. Scroll and hover!",
    image: "/glass-background.png",
    imageAlt: "Frosted glass CSS experiment",
    tags: ["css", "experiment"],
  },
  {
    title: "Dynamic Islands",
    href: "/dynamic-island",
    description:
      "iOS-style dynamic island on the web with Framer Motion. Spring animations behave differently at varying scales.",
    image: "/island.png",
    imageAlt: "Dynamic Island web experiment",
    tags: ["framer motion", "experiment"],
  },
  {
    title: "Painting a ball on the web",
    href: "https://ball-three.vercel.app",
    description:
      "One div, pure CSS. An experiment painting with complex shadows.",
    image: "/ball.png",
    imageAlt: "CSS ball painting",
    tags: ["css", "experiment"],
  },
];

export const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(".project-card");
    let delay = 0;
    cards.forEach((card) => {
      setTimeout(() => {
        card.classList.add("animate");
      }, delay);
      delay += 150;
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      {/* featured projects — hero cards */}
      <div className="flex flex-col gap-12">
        {featured.map((project) => (
          <FeaturedCard key={project.title} {...project} />
        ))}
      </div>

      {/* section label */}
      <div className="flex items-center gap-4 mt-6 mb-2">
        <div className="border-t border-zinc-800/60 flex-1" />
        <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 font-light">
          Experiments
        </span>
        <div className="border-t border-zinc-800/60 flex-1" />
      </div>

      {/* experiments grid — consistent aspect ratio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiments.map((project) => (
          <CompactCard key={project.title} {...project} />
        ))}
      </div>

      {/* sonner — interactive */}
      <SonnerCard />
    </div>
  );
};

// sonner has an interactive button so it stays as its own component
function SonnerCard() {
  const { toast } = require("sonner");

  return (
    <div className="project-card group flex flex-col md:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 hover:bg-zinc-900/40 items-center">
      <div className="flex flex-col gap-3 flex-1">
        <div className="flex flex-wrap gap-2">
          <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-light">
            experiment
          </span>
        </div>
        <a href="/blogs/remake-sonner" className="inline-block">
          <h2 className="text-zinc-200 text-lg font-normal tracking-tight hover:text-white transition-colors duration-200">
            Remake Sonner by Emil Kowalski (TBC)
          </h2>
        </a>
        <p className="text-zinc-500 font-light text-sm leading-relaxed">
          Tap into the world of Emil — your toast component will never be the
          same again.
        </p>
        <div>
          <button
            className="text-zinc-300 font-light border border-zinc-700 rounded-lg px-4 py-2 hover:text-white hover:border-zinc-500 transition-colors duration-200 text-sm"
            onClick={() => toast("I made ya click!")}
          >
            Click for a toast
          </button>
        </div>
      </div>
      <div className="md:w-[200px] flex-shrink-0 hidden md:block">
        <Image
          src="/sonner.png"
          width={200}
          height={200}
          alt="Sonner toast experiment"
          className="rounded-lg"
        />
      </div>
    </div>
  );
}
