export const ProjectCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" relative z-0 inset-0 group transition-colors drop-shadow-sm shadow-slate-400 rounded-none my-4 md:grid md:grid-cols-5 md:flex-none flex flex-col gap-2 h-[calc(100vh-80vh)]">
      {children}
    </div>
  );
};
