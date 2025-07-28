"use client";

import navigation from "next/navigation";
import { useEffect } from "react";

export function DiscordPage() {
  const { redirect } = navigation;

  useEffect(() => {
    redirect("https://discord.gg/SY43FJGfuk");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <meta
        http-equiv="refresh"
        content="0; url=https://discord.gg/SY43FJGfuk"
      />
      <h1 className="text-4xl font-bold mb-4">Discord Page</h1>
      <p className="text-lg">Redirecting you discord.</p>
    </div>
  );
}
