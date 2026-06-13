"use client";
import React from "react";
import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiStripe, SiSocketdotio } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

import Background from "../components/Background";

/* ================= ANIMATION ================= */
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
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Node.js", icon: IoLogoNodejs, color: "text-[#68A063]" },
    ],
  },
  {
    name: "E-commerce Store",
    type: "Product Launch",
    details:
      "Fullstack store with stripe payment and modern UI/UX system.",
    icon: SiTailwindcss,
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "Stripe", icon: SiStripe, color: "text-[#635BFF]" },
    ],
  },
  {
    name: "Realtime Chat",
    type: "Communication App",
    details:
      "Socket.io realtime chat application with live messaging.",
    icon: IoLogoNodejs,
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Socket.io", icon: SiSocketdotio, color: "text-white" },
      { name: "Node.js", icon: IoLogoNodejs, color: "text-[#68A063]" },
    ],
  },
  {
    name: "Portfolio Website",
    type: "Personal Branding",
    details:
      "Modern animated portfolio showcasing skills, work, and contact system.",
    icon: FaReact,
    badges: [
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" },
      { name: "CSS", icon: SiTailwindcss, color: "text-[#264DE4]" },
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
          {/* HEADING */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className={`text-4xl font-bold mb-3 text-white`}>
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
                  className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] transition duration-300"
                >
                  {/* TITLE */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-1">
                      <Icon className="text-2xl text-[#0968E5]" />

                      <h2 className="text-xl font-semibold text-white">
                        {project.name}
                      </h2>
                    </div>

                    <p
                      className={`text-sm ml-9 font-medium ${gradientText}`}
                    >
                      {project.type}
                    </p>
                  </div>

                  {/* DETAILS */}
                  <p className="text-slate-400 mb-5">
                    {project.details}
                  </p>

                  {/* BADGES */}
                  <div className="flex flex-wrap gap-2">
                    {project.badges.map((badge, i) => {
                      const BadgeIcon = badge.icon;

                      return (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-xs rounded-lg bg-white/10 border border-white/10 text-slate-200 flex items-center gap-2"
                        >
                          <BadgeIcon
                            className={`${badge.color} text-sm`}
                          />
                          {badge.name}
                        </span>
                      );
                    })}
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