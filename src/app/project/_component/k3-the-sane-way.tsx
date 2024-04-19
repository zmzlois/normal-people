import Image from "next/image";
export const K3sTheSaneWay = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col md:px-10 py-10 md:gap-10 px-4 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center">
      <Image
        src="https://repository-images.githubusercontent.com/773121062/5e9260bf-6b9a-4d62-8c69-6cd90454a9f1"
        className="max-w-screen w-full rounded-2xl drop-shadow-sm"
        alt="Depth based blur image"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2 p-4">
        <a
          href="https://github.com/zmzlois/k3s-the-sane-way"
          rel="noopener noreferrer"
          aria-label="K3s the sane way - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            K3s the sane way
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider italic text-sm md:text-base leading-snug">
          {" "}
          Deploy k3s on 4 globally distributed VPS instance with Ansible,
          Prometheus, Grafana and Traefik.
        </p>
      </div>
    </div>
  );
};
