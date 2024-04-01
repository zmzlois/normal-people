import { Background } from "./background";

export default function GlassPage() {
  return (
    <div className="w-screen h-[30500px] block">
      <Background />
      <div className="fixed backdrop-blur-lg shadow-2xl shadow-zinc-200/30 backdrop rounded-lg translate-x-[32vw] z-40 inset-0 bg-zinc-200/10 h-80 top-[30vh] w-[36rem]" />
      <div className="fixed backdrop-blur-xl backdrop rounded-lg translate-x-[32vw] z-[45] inset-0 bg-zinc-200/10 h-80 top-[30vh] w-[36rem]" />
      <div className="fixed backdrop-blur-2xl backdrop rounded-lg translate-x-[32vw] z-[50] inset-0 bg-zinc-200/10 h-80 top-[30vh] w-[36rem]" />
      <div className="fixed backdrop-blur-3xl backdrop rounded-lg translate-x-[32vw] z-[55] inset-0 border border-zinc-200/10 bg-zinc-200/10 h-80 top-[30vh] w-[36rem]" />{" "}
    </div>
  );
}
