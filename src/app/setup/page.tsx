"use client";
import Link from "next/link";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function SetupPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      '/bin/bash -c "$(curl -fsSL https://normal-people.com/setup.sh)"'
    );
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto flex justify-center items-center">
      <div className="bg-slate-950 shadow-lg border border-gray-700 rounded-lg p-6 mb-8 flex justify-center items-center gap-4">
        <pre className="text-gray-200 font-mono">
          <code>
            /bin/bash -c "$(curl -fsSL https://normal-people.com/setup.sh)"
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="ml-2 hover:bg-slate-800 rounded-md p-2 border border-slate-700"
        >
          {copied ? (
            <CheckCircle2 className="w-5 h-5 text-green-500 transition-colors" />
          ) : (
            <Copy className="w-5 h-5 text-slate-300 hover:text-slate-200 transition-colors" />
          )}
        </button>
      </div>
    </div>
  );
}
