import React from "react";

export default function Background() {
  return (
    <div
      className="background-shell fixed inset-0 -z-10 select-none pointer-events-none overflow-hidden touch-none"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}