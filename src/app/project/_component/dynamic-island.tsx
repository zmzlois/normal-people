import Image from "next/image";
export const DynamicIsland = () => {
  return (
    <div className="flex md:flex-row flex-col w-full px-4 py-10 md:px-10 md:gap-20 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center">
      <div className="flex flex-col gap-2 p-4">
        <a
          href="/dynamic-island"
          rel="noopener noreferrer"
          aria-label="Dynamic Island - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            Dynamic Islands
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider text-sm md:text-base leading-snug">
          {" "}
          Inspired by{" "}
          <a
            href="https://emilkowal.ski/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
          >
            Emil Kowalski
          </a>
          . This project built with{" "}
          <a
            href="https://zustand-demo.pmnd.rs/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
          >
            Framer Motion
          </a>{" "}
          to create a dynamic island on the web simulating iOS notification.
          Noticed how Spring effect plays an interesting role when the component
          is smaller, but when it is bigger - spring animation will disturb user
          experience.
        </p>
      </div>
      <Image
        src="/island.png"
        className=""
        alt="Dynamic Island - zmzlois"
        width={300}
        height={300}
      />
    </div>
  );
};
