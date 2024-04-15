"use client";

import { useState, useEffect, useRef } from "react";
import { Dispatch, SetStateAction } from "react";

export const Timer = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<"idle" | "ring" | "silent" | "timer">>;
}) => {
  const time = useRef({ minutes: 0, seconds: 0 });

  const [pause, setPause] = useState(false);

  useEffect(() => {
    if (!pause) {
      const interval = setInterval(() => {
        if (time.current.seconds === 59) {
          time.current.minutes += 1;
          time.current.seconds = 0;
        } else {
          time.current.seconds += 1;
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, pause]);

  return (
    <div className=" flex items-center w-full justify-between text-zinc-100 ">
      <div className="flex gap-1">
        <button
          onClick={() => setPause(true)}
          className="bg-yellow-400/40 rounded-full p-1"
        >
          <Pause className="w-3 h-3 opacity-70" />
        </button>
        <button
          onClick={() => setState("idle")}
          className="bg-gray-400/40 rounded-full p-1"
        >
          <Multiply className="w-3 h-3 opacity-70" />
        </button>
      </div>
      <div className="flex items-end gap-[1px]">
        <p className="font-semibold text-end text-[0.4rem] tracking-wide">
          Timer
        </p>
        <span className="text-2xl font-thin text-yellow-500">
          <span>{time.current.minutes}</span>:
          <span>
            {time.current.seconds < 10
              ? `0${time.current.seconds}`
              : time.current.seconds}
          </span>
        </span>
      </div>
    </div>
  );
};

const Multiply = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

const Pause = (props: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="14" y="4" width="4" height="16" rx="1" />
      <rect x="6" y="4" width="4" height="16" rx="1" />
    </svg>
  );
};
