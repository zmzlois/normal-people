import Balancer from "react-wrap-balancer";

export const BottomContent = () => {
  return (
    <div className="lg:text-end">
      <Balancer className="text-slate-400 items-baseline content-center  font-light">
        Built with <a href="https://nextjs.org">Next.js</a>&nbsp;and{" "}
        <a href="https://tailwindcss.com">Tailwind CSS</a>, deployed on{" "}
        <a href="https://vercel.com">Vercel</a>.
      </Balancer>
    </div>
  );
};
