"use client";

import { useState, useEffect, useRef } from "react";
import { Dispatch, SetStateAction } from "react";
import { useStopwatch } from "react-timer-hook";

export const Timer = ({
  setState,
}: {
  setState: Dispatch<SetStateAction<"idle" | "ring" | "timer">>;
}) => {
  const { seconds, minutes, pause, start } = useStopwatch({ autoStart: true });

  return (
    <div className=" flex items-center w-full justify-between text-zinc-100 ">
      <div className="flex gap-1">
        <button
          onClick={pause}
          className="bg-yellow-400/40 hover:bg-yellow-400/70 focus:brightness-110 transition-all rounded-full p-1"
        >
          <Pause className="w-3 h-3 opacity-70" />
        </button>
        <button
          onClick={() => setState("idle")}
          className="bg-gray-400/40 hover:bg-gray-400/70 transition-all focus:brightness-110 rounded-full p-1"
        >
          <Multiply className="w-3 h-3 opacity-70" />
        </button>
      </div>
      <div className="flex items-end gap-[1px]">
        <p className="font-semibold text-end text-[0.4rem] tracking-wide">
          Timer
        </p>
        <span className="text-2xl font-thin text-yellow-500">
          <span>{minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
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
