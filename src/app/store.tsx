"use client";
import { create } from "zustand";
import { usePathname, useRouter } from "next/navigation";

type StoreState = {
  visited: boolean;
};

type StoreActions = {
  setVisited: () => void;
};

export const useStore = create<StoreState & StoreActions>((set) => ({
  visited: false,
  setVisited: () => set((state) => ({ visited: true })),
}));
let number = 1;
import React from "react";

function Store({ children }: { children: React.ReactNode }) {
  const { setVisited } = useStore();

  const pathname = usePathname();

  React.useEffect(() => {
    if (pathname === "/") {
      setVisited();
      console.log(number++);
    }
  }, [pathname, setVisited]);
  return <>{children}</>;
}

export default Store;
