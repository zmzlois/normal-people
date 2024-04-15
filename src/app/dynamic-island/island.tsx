import { Variants, motion } from "framer-motion";
import { Ring } from "./ring";
import { Timer } from "./timer";
import { Dispatch, SetStateAction } from "react";

const islandVariant: Variants = {
  idle: {
    scale: 1,
    borderRadius: 100,
    content: "",
    width: 100,
    height: 20,
    transition: {
      duration: 0.2,
    },
  },
  ring: {
    opacity: 1,
    width: 150,
    height: 30,
    content: "Mom is calling",
    transition: {
      duration: 0.2,
    },
  },
  silent: {
    width: 168,
    transition: {
      duration: 0.2,
    },
  },
  timer: {
    scale: 2,
    opacity: 1,
    width: 170,
    height: 40,
    borderRadius: 100,
    transition: {
      duration: 0.2,
    },
  },
};
export const Island = ({
  state,
  setState,
}: {
  state: string;
  setState: Dispatch<SetStateAction<"idle" | "ring" | "silent" | "timer">>;
}) => {
  return (
    <motion.div
      className="bg-black flex justify-center min-w-[3rem] items-center px-2 text-zinc-100 "
      variants={islandVariant}
    >
      {state === "idle" && ""}
      {state === "ring" && <Ring />}
      {state === "timer" && <Timer setState={setState} />}
    </motion.div>
  );
};
