import React from "react";

export default function Background() {
  return (
    <div
      className="background-shell fixed inset-0 -z-10 select-none pointer-events-none overflow-hidden touch-none bg-white dark:bg-[#0b0f19]"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}