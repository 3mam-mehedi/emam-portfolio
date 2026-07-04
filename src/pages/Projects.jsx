"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import Background from "../components/Background";

const fadeLeft = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const projects = [
  {
    name: "Traffic Light System",
    type: "Final Year Project",
    image: "/assets/projects/iot.png",
    details: "React + Node.js business dashboard system with scalable architecture.",
    live: "https://iot-trafic-light.vercel.app/",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Node.js", icon: IoLogoNodejs, color: "text-[#68A063]" },
    ],
  },
  {
    name: "Kitsware Technology",
    type: "Technology Company",
    image: "/assets/projects/kt.png",
    details: "Tech company specializing in Flutter, Artificial Intelligence, IoT, and Embedded Systems.",
    live: "https://kitsware.vercel.app",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#dd2c00]" },
    ],
  },
  {
    name: "TecTira",
    type: "Communication App",
    image: "/assets/projects/e-commerce.png",
    details: "Socket.io realtime chat application with live messaging.",
    live: "https://your-live-link.com",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Firebase", icon: SiFirebase, color: "#dd2c00" },
    ],
  },
  {
    name: "E-commerce",
    type: "Personal Branding",
    image: "/assets/projects/e-commerce.png",
    details: "Modern animated portfolio showcasing skills, work, and contact system.",
    live: "https://your-live-link.com",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Firebase", icon: SiFirebase, color: "#dd2c00" },
    ],
  },
];

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(hasDark);
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Background />
      <div className="w-full px-4 lg:px-12 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeLeft} initial="hidden" animate="show" transition={{ duration: 1 }}>
            <h1 className="text-4xl font-bold mb-3 transition-colors duration-300" style={{ color: isDarkMode ? "#ffffff" : "#0949b7" }}>
              Projects
            </h1>
            <p className="mb-10 font-medium transition-colors duration-300" style={{ color: isDarkMode ? "#cbd5e1" : "#000000" }}>
              Showcasing some of my best work, ranging from web applications to complex systems.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.article
                id={project.name === "Traffic Light System" ? "traffic-light-system" : undefined}
                key={project.name}
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="rounded-3xl border p-4 sm:p-6 hover:scale-[1.02] transition-all duration-300"
                style={{
                  backgroundColor: isDarkMode ? "rgba(10, 25, 70, 0.35)" : "rgba(255, 255, 255, 0.45)",
                  borderColor: isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(9, 104, 229, 0.25)",
                  boxShadow: isDarkMode ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : "0 8px 32px 0 rgba(9, 104, 229, 0.08)"
                }}
              >
                <div className="flex flex-col sm:flex-row gap-5 mb-5">
                  <div className="w-full sm:w-52 shrink-0 overflow-hidden rounded-xl border border-[#0968E5]/35 dark:border-white/10">
                    <img src={project.image} alt={project.name} className="w-full h-auto sm:h-28 object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold transition-colors duration-300" style={{ color: isDarkMode ? "#ffffff" : "#091970" }}>
                      {project.name}
                    </h2>
                    <p className="text-sm font-semibold text-[#0968E5]">{project.type}</p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed mb-5 transition-colors duration-300" style={{ color: isDarkMode ? "#94a3b8" : "#475569" }}>
                  {project.details}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, i) => {
                    const Icon = badge.icon;

                    return (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md hover:scale-105 transition-all duration-300"
                        style={{
                          backgroundColor: isDarkMode
                            ? "rgba(255, 255, 255, 0.06)"
                            : "rgba(255, 255, 255, 0.35)",

                          backdropFilter: "blur(18px)",
                          WebkitBackdropFilter: "blur(18px)",

                          border: isDarkMode
                            ? "1px solid rgba(255,255,255,0.12)"
                            : "1px solid rgba(255,255,255,0.45)",

                          boxShadow: isDarkMode
                            ? "0 8px 24px rgba(0,0,0,.18)"
                            : "0 8px 24px rgba(9,104,229,.08)",

                          color: isDarkMode ? "#e2e8f0" : "#334155",
                        }}
                      >
                        <Icon className={`${badge.color} text-sm`} />
                        {badge.name}
                      </span>
                    );
                  })}
                </div>

                <div
                  className="mt-6 pt-4 flex items-center justify-between"
                  style={{
                    borderTop: isDarkMode
                      ? "1px solid rgba(255,255,255,0.10)"
                      : "1px solid #c2c0c0",
                  }}
                >
                  <span className="text-xs uppercase tracking-[0.2em] transition-colors duration-300" style={{ color: isDarkMode ? "#94a3b8" : "#475569" }}>
                    Live Website
                  </span>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-bold transition hover:text-[#4DA3FF]"
                    style={{ color: isDarkMode ? "#ffffff" : "#091970" }}>
                    Visit Project <FaExternalLinkAlt className="text-xs group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}