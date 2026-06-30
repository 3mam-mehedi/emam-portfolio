"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSocketdotio,
  SiFirebase,
} from "react-icons/si";
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
    details:
      "React + Node.js business dashboard system with scalable architecture.",
    live: "https://your-live-link.com",
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
    details:
      "Tech company specializing in Flutter, Artificial Intelligence, IoT, and Embedded Systems.",
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
    details:
      "Socket.io realtime chat application with live messaging.",
    live: "https://your-live-link.com",
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#dd2c00]" },
    ],
  },
  {
    name: "E-commerce",
    type: "Personal Branding",
    image: "/assets/projects/e-commerce.png",
    details:
      "Modern animated portfolio showcasing skills, work, and contact system.",
    live: "https://your-live-link.com",
    badges: [
     { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Firebase", icon: SiFirebase, color: "text-[#dd2c00]" },
    ],
  },
];

export default function Projects() {
  const gradientText =
    "bg-gradient-to-r from-[#0968E5] to-[#091970] bg-clip-text text-transparent";

  return (
    <>
      <Background />

      <div className="w-full px-4 lg:px-12 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold mb-3 text-black dark:text-white">
              Projects
            </h1>

            <p className="text-black/80 mb-10 dark:text-slate-300">
              Showcasing some of my best work, ranging from web applications to
              complex systems.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.article
                key={project.name}
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: idx * 0.15,
                }}
                className="rounded-3xl border border-[#0968E5]/35 bg-white/80 p-4 shadow-[0_10px_35px_rgba(15,23,42,0.06)] sm:p-6 hover:scale-[1.02] hover:border-[#0968E5]/30 transition-all duration-300 dark:border-white/10 dark:bg-white/5 dark:shadow-none"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row gap-5 mb-5">
                  {/* Image */}
                  <div className="w-full sm:w-52 shrink-0 overflow-hidden rounded-xl border border-[#0968E5]/35 dark:border-white/10">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto max-h-56 sm:w-52 sm:h-28 rounded-xl object-cover border border-[#0968E5]/35 shrink-0 dark:border-white/10"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg sm:text-xl font-semibold text-black mb-1 wrap-break-word dark:text-white">
                      {project.name}
                    </h2>

                    <p className={`text-sm font-medium ${gradientText}`}>
                      {project.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-black/80 text-sm sm:text-base leading-relaxed mb-5 dark:text-slate-400">
                  {project.details}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.badges.map((badge, i) => {
                    const Icon = badge.icon;

                    return (
                      <span
                        key={i}
                        className="flex items-center gap-2 rounded-lg border border-[#0968E5]/35 bg-slate-100/90 px-3 py-1.5 text-xs text-black/80 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
                      >
                        <Icon className={`${badge.color} text-sm`} />
                        {badge.name}
                      </span>
                    );
                  })}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-[#0968E5]/35 flex items-center justify-between dark:border-white/10">
                  <span className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                    Live Website
                  </span>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-black transition hover:text-[#4DA3FF] dark:text-white"
                  >
                    Visit Project

                    <FaExternalLinkAlt className="text-xs transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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