export const Button = ({
  text,
  toggle,
}: {
  text: string;
  toggle?: () => void;
}) => {
  return (
    <button
      onClick={toggle}
      className="bg-black text-zinc-100 border hover:bg-zinc-900/80 border-zinc-800 lg:px-8 px-4 text-sm lg:text-base font-light tracking-wide py-2 rounded-full transition-all drop-shadow-sm shadow-md"
    >
      {text}
    </button>
  );
};
