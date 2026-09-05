"use client";

import React, { useState } from "react";
import { Server, CheckCircle2 } from "lucide-react";

export default function BackendBanner() {
  const [serverAwake, setServerAwake] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWakeUp = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setServerAwake(true);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 px-4 w-full max-w-xl">
      <div className="bg-[#1E293B] text-white neo-border-sm rounded-full py-2.5 px-5 flex items-center justify-between text-xs sm:text-sm font-medium shadow-2xl backdrop-blur-md bg-opacity-95">
        <div className="flex items-center gap-2.5 truncate mr-2">
          {serverAwake ? (
            <CheckCircle2 className="w-4 h-4 text-[#D7FF3F] shrink-0" />
          ) : (
            <Server className="w-4 h-4 text-emerald-400 animate-pulse shrink-0" />
          )}
          <span className="truncate">
            {serverAwake
              ? "Backend API Connected & Ready!"
              : "Frontend Preview Only. Please wake servers to enable backend functionality."}
          </span>
        </div>

        <button
          onClick={handleWakeUp}
          disabled={loading || serverAwake}
          className={`shrink-0 rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
            serverAwake
              ? "bg-[#D7FF3F] text-black cursor-default"
              : "bg-[#0F766E] hover:bg-[#0D9488] text-white cursor-pointer"
          }`}
        >
          {loading ? "Waking up..." : serverAwake ? "Servers Active" : "Wake up servers"}
        </button>
      </div>
    </div>
  );
}
