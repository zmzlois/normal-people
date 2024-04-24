import Image from "next/image";
export const LinkGoGo = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse w-full py-10 px-4 md:px-10 md:gap-20 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center">
      <Image
        src="/linkgogo.png"
        className=""
        alt="Depth based blur image"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2 p-4">
        <a
          href="https://github.com/zmzlois/LinkGoGo"
          rel="noopener noreferrer"
          aria-label="Glass in the forest by Emil Kowalski - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            LinkGoGo
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider text-sm md:text-base leading-snug">
          {" "}
          Written in Golang. I was curious about how overengineered a Todo list
          (everyone's loved and hated) can be? I guess it's something similar to
          LinkTree. The idea started with "why do you need to pay LinkTree for
          analytics and fancy features" it's an overbloated next.js app + gatsby
          site (it has gotten much slower over the years) and the project itself
          its a 1 person product can be built in 3 days (I meant about 72
          hours). This is one of my <b>speed build challenges</b> to see how
          fast I can build with Golang - a new languages I learnt in one month.
        </p>
      </div>
    </div>
  );
};
