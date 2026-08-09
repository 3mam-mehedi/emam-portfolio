"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaJs, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { TbApi } from "react-icons/tb";
import Background from "../components/Background";

const fadeLeft = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const projects = [
  {
    name: "IoT Traffic Light",
    type: "Embedded Systems",
    image: "/assets/projects/iot.png",
    details: "An IoT-based smart traffic light system for real-time monitoring and control.",
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
    name: "Tea Garden",
    type: "Business Website",
    image: "/assets/projects/tea.png",
    details: "A platform for tracking daily sales, inventory, and top products.",
    live: "https://tea-garden.vercel.app/",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#dd2c00]" },
    ],
  },
  {
    name: "Prayer Clock",
    type: "Web application",
    image: "/assets/projects/clock.png",
    details: "Real-time Islamic prayer clock.",
    live: "https://prayerclocklive.vercel.app/",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Api", icon: TbApi, color: "text-[#00c2ff]" },
    ],
  },
  {
    name: "Tectira",
    type: "Personal Branding",
    image: "/assets/projects/e-commerce.png",
    details: "A branding e-commerce platform for custom products.",
    live: "",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
    ],
  },
  {
    name: "Breaking News",
    type: "News Portal",
    image: "/assets/projects/br.png",
    details: "A real-time news portal for live updates and breaking headlines.",
    live: "",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "API", icon: TbApi, color: "text-[#00c2ff]" }
    ],
  },
  {
    name: "English Learning",
    type: "Educational Website",
    image: "/assets/projects/eng.png",
    details: "Learn grammar, sentences, and everyday English with Bangla.",
    live: "",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
    ],
  },
  {
    name: "Scoreboard",
    type: "Web application",
    image: "/assets/projects/score.png",
    details: "A web-based scoreboard to track runs, wickets, and overs.",
    live: "",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
    ],
  }
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
            <p className="mb-6 font-medium text-sm sm:text-sm md:text-xl lg:text-base transition-colors duration-300" style={{ color: isDarkMode ? "#cbd5e1" : "#000000" }}>
              Showcasing some of my best work, ranging from web applications to complex systems.
            </p>
          </motion.div>

          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
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
                  <div
                    className="w-full sm:w-52 shrink-0 overflow-hidden rounded-xl border"
                    style={{
                      borderColor: isDarkMode
                        ? "rgba(255,255,255,0.10)"
                        : "#afcef5",
                    }}
                  >
                    <img src={project.image} alt={project.name} className="w-full h-auto sm:h-20 md:h-28 lg:h-28 object-fill" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-lg md:text-3xl lg:text-xl font-bold transition-colors duration-300" style={{ color: isDarkMode ? "#ffffff" : "#091970" }}>
                      {project.name}
                    </h2>
                    <p className="text-sm sm:text-xs md:text-xl lg:text-sm font-semibold text-[#0968E5]">{project.type}</p>
                  </div>
                </div>

                <p className="text-base sm:text-xs md:text-2xl lg:text-sm leading-relaxed mb-5 transition-colors duration-300" style={{ color: isDarkMode ? "#94a3b8" : "#475569" }}>
                  {project.details}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, i) => {
                    const Icon = badge.icon;

                    return (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-xs md:text-xl lg:text-xs font-semibold hover:scale-105 transition-all duration-300"
                        style={{
                          backgroundColor: isDarkMode
                            ? "rgba(255, 255, 255, 0.06)"
                            : "rgba(255, 255, 255, 0.35)",

                          border: isDarkMode
                            ? "1px solid rgba(255,255,255,0.12)"
                            : "1px solid rgba(9, 104, 229, 0.45)",

                          boxShadow: isDarkMode
                            ? "0 8px 24px rgba(0,0,0,.18)"
                            : "0 8px 24px rgba(9,104,229,.08)",

                          color: isDarkMode ? "#e2e8f0" : "#334155",
                        }}
                      >
                        <Icon className={`${badge.color} text-sm sm:text-sm md:text-lg lg:text-sm`} />
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
                      : "1px solid #afcef5",
                  }}
                >
                  <span className="text-xs sm:text-xs md:text-base lg:text-xs uppercase tracking-[0.2em] transition-colors duration-300" style={{ color: isDarkMode ? "#94a3b8" : "#475569" }}>
                    Live Website
                  </span>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm sm:text-sm md:text-base lg:text-xs font-bold transition hover:text-[#4DA3FF]"
                    style={{ color: isDarkMode ? "#ffffff" : "#091970" }}>
                    Visit Project <FaExternalLinkAlt className="text-xs sm:text-xs md:text-base lg:text-xs group-hover:translate-x-1" />
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