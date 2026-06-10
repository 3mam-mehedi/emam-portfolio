import React from "react";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#05060a]">

      {/* Gradient Mesh Layer 1 */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[140px]" />
        <div className="absolute bottom-[-20%] left-[30%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[160px]" />
      </div>

      {/* Gradient Mesh Layer 2 (movement feel) */}
      <div className="absolute inset-0 opacity-60 animate-pulse">
        <div className="absolute top-[10%] left-[20%] w-[700px] h-[700px] rounded-full bg-sky-500/10 blur-[180px]" />
        <div className="absolute bottom-[10%] right-[20%] w-[650px] h-[650px] rounded-full bg-blue-400/10 blur-[200px]" />
      </div>

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Vignette (Gemini feel) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#05060a_100%)]" />
    </div>
  );
}