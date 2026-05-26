"use client";
import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

import Background from "../components/Background";

/* ================= HOME STYLE ANIMATION ================= */
const fadeLeft = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const projects = [
  {
    name: "Productive CRM",
    type: "Business Dashboard",
    details:
      "React + Node.js business dashboard system with scalable architecture.",
    icon: FaReact,
    badges: ["React", "Tailwind", "Node.js"],
  },
  {
    name: "E-commerce Store",
    type: "Product Launch",
    details:
      "Fullstack store with stripe payment and modern UI/UX system.",
    icon: SiTailwindcss,
    badges: ["React", "Tailwind", "Stripe"],
  },
  {
    name: "Realtime Chat",
    type: "Communication App",
    details:
      "Socket.io realtime chat application with live messaging.",
    icon: IoLogoNodejs,
    badges: ["React", "Socket.io", "Node.js"],
  },
  {
    name: "Portfolio Website",
    type: "Personal Branding",
    details:
      "Modern animated portfolio showcasing skills, work, and contact system.",
    icon: FaReact,
    badges: ["React", "Tailwind", "CSS"],
  },
];

export default function Projects() {
  return (
    <>
      <Background />

      <div className="w-full px-4 lg:px-12 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">

          {/* HEADING */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold text-white mb-3">
              Projects
            </h1>

            <p className="text-slate-300 mb-10">
              Selected projects demonstrating design quality,
              technical work, and polished UI components.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, idx) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.name}
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: idx * 0.15,
                  }}
                  className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-cyan-400/40 hover:scale-[1.02] transition duration-300"
                >
                  {/* TITLE */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-1">
                      {Icon && (
                        <Icon className="text-cyan-400 text-2xl" />
                      )}

                      <h2 className="text-xl font-semibold text-white">
                        {project.name}
                      </h2>
                    </div>

                    <p className="text-sm text-cyan-300 ml-9">
                      {project.type}
                    </p>
                  </div>

                  {/* DETAILS */}
                  <p className="text-slate-400 mb-5">
                    {project.details}
                  </p>

                  {/* BADGES */}
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((b, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/10 border border-white/10 text-slate-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}