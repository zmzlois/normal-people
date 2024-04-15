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
      className="bg-black text-zinc-100 border hover:bg-zinc-900/80 border-zinc-800 px-8 py-2 rounded-full transition-all drop-shadow-sm shadow-md"
    >
      {text}
    </button>
  );
};
