import Image from "next/image";

export const Docksible = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col px-4 md:px-10 py-10 md:gap-10 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center ">
      <Image
        src="https://repository-images.githubusercontent.com/742522711/ab095e7a-fef3-44e4-909b-1096e255d118"
        className=" rounded-2xl w-full drop-shadow-sm"
        alt="Depth based blur image"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2 p-4">
        <a
          href="https://github.com/zmzlois/Docksible"
          rel="noopener noreferrer"
          aria-label="Glass in the forest by Emil Kowalski - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            Docksible
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider italic text-sm md:text-base leading-snug">
          {" "}
          A clean docker container to generate ssh keys on the fly for testing
          ansible playbook.
        </p>
      </div>
    </div>
  );
};
