import Image from "next/image";

export const NpmForMonorepo = () => {
  return (
    <div className="flex md:flex-row flex-col w-full px-4 py-10 md:px-10 md:gap-20 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center">
      <div className="flex flex-col gap-2 p-4">
        <a
          href="https://monorepo.loiszhao.com"
          rel="noopener noreferrer"
          aria-label="Glass in the forest by Emil Kowalski - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            Find any npm package for monorepo
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider italic text-sm md:text-base leading-snug">
          {" "}
          I was tired of typing out hundreds of commands to install packages I
          always know in a monorepo. This project uses{" "}
          <a
            href="https://zustand-demo.pmnd.rs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
          >
            Zustand
          </a>{" "}
          as session storage to store the selected package manager, flag and
          labels for custom installation commands.
        </p>
      </div>
      <Image
        src="/npm-for-monorepo.png"
        className=""
        alt="Depth based blur image"
        width={300}
        height={300}
      />
    </div>
  );
};
