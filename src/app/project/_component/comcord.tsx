import Image from "next/image";
export const ComCord = () => {
  return (
    <div className="flex md:flex-row flex-col w-full px-4 py-10 md:px-10 md:gap-20 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center">
      <div className="flex flex-col gap-2 p-4">
        <a
          href="https://comcord.vision"
          rel="noopener noreferrer"
          aria-label="ComCord, a discord bot with web application - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            ComCord
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider text-sm md:text-base leading-snug">
          {" "}
          The project was built while I was sufferring the pain from remote
          collaboration for not knowing what happened within the team when I
          make other products. It's a Discord bot combined with web application
          for configuration. I eventually turned it into a start up and applied
          for Y-Combinator. Where I learnt the most for developing in Next.js,
          Tailwind, Javascript, user experience, support engineer and working in
          a team. The project had to fold but you can see the product demo on{" "}
          <a
            href="https://youtu.be/yt85yRCPY9I"
            rel="noopener noreferrer"
            target="_blank"
            className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
          >
            Youtube
          </a>
        </p>
      </div>
      <Image
        src="/comcord.png"
        className=""
        alt="Depth based blur image"
        width={300}
        height={300}
      />
    </div>
  );
};
