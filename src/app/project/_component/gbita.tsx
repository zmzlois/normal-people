import Image from "next/image";
export const Gbita = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse w-full px-4 py-10 md:px-10 md:gap-20 gap-2 border-b border-zinc-200/20 md:border-none content-center items-center justify-center">
      <Image
        src="/gbita.png"
        className=""
        alt="Global Business IT Approach logo"
        width={300}
        height={300}
      />
      <div className="flex flex-col gap-2 p-4">
        <a
          href="https://gbita.ae"
          rel="noopener noreferrer"
          aria-label="Global business IT Approach - zmzlois"
          target="_blank"
          className="underline decoration-1 decoration-slate-500 underline-offset-4 hover:decoration-slate-200 transition-all duration-300"
        >
          <h2 className="text-zinc-200 md:text-2xl text-xl font-thin">
            7-hour speed build challenge- GBITA
          </h2>
        </a>
        <p className="text-start text-zinc-200 font-thin tracking-wider italic text-sm md:text-base leading-snug">
          {" "}
          This is one my speed building challenges. Done for one of my clients.
          Email functionality provided by{" "}
          <a
            href="https://resend.com/home"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resend
          </a>
          . Frontend finished in 7 hours. Assets are hosted on Object Storage
          via{" "}
          <a
            href="https://aws.amazon.com/s3/"
            rel="noopener noreferrer"
            target="_blank"
          >
            AWS S3
          </a>{" "}
          and served via AWS' global CDN{" "}
          <a
            href="https://aws.amazon.com/cloudfront/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cloudfront
          </a>
          . Built with Next.js, TailwindCSS, TypeScript, and deployed Vercel.
        </p>
      </div>
    </div>
  );
};
