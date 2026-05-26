"use client";
import React from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";

import {
  FaReact,
  FaCode,
  FaMobileAlt,
  FaFigma,
  FaLayerGroup,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

/* ================= HOME STYLE ANIMATION ================= */
const fadeLeft = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const skills = [
  {
    title: "Frontend Developer",
    description:
      "Building scalable UI with reusable components and modern React architecture.",
    icon: FaReact,
    badges: [
      { label: "Frontend", icon: FaCode },
      { label: "Hooks", icon: FaLayerGroup },
      { label: "SPA", icon: FaMobileAlt },
    ],
  },
  {
    title: "Embedded Systems",
    description:
      "Creating responsive layouts using modern utility-first CSS approach.",
    icon: SiTailwindcss,
    badges: [
      { label: "Responsive", icon: FaMobileAlt },
      { label: "UI Design", icon: FaFigma },
      { label: "Utility CSS", icon: FaCode },
    ],
  },
  {
    title: "UI / UX Design",
    description:
      "Designing smooth user experiences with modern and clean interfaces.",
    icon: FaFigma,
    badges: [
      { label: "Figma", icon: FaFigma },
      { label: "Wireframe", icon: FaLayerGroup },
      { label: "User Flow", icon: FaCode },
    ],
  },
  {
    title: "Mobile App Developer",
    description:
      "Modern frontend development with performance and scalability.",
    icon: FaReact,
    badges: [
      { label: "React", icon: FaReact },
      { label: "Optimization", icon: FaCode },
      { label: "Architecture", icon: FaLayerGroup },
    ],
  },
];

export default function Specializations() {
  return (
    <>
      <Background />

      <div className="w-full px-4 lg:px-12 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold text-white mb-3">
              Specializations
            </h1>

            <p className="text-slate-300 mb-10">
              Core areas of expertise that help deliver strong frontend experiences and polished digital products.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((item, idx) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: idx * 0.15,
                  }}
                  className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:scale-[1.02] transition duration-300"
                >
                  {/* TOP */}
                  <div className="flex items-center gap-3 mb-4">
                    {Icon && (
                      <Icon className="text-cyan-400 text-2xl" />
                    )}

                    <h2 className="text-xl font-semibold text-white">
                      {item.title}
                    </h2>
                  </div>

                  {/* DESCRIPTION */}
                  <p className="text-slate-400 mb-5">
                    {item.description}
                  </p>

                  {/* BADGES (NOW ALSO FADELEFT) */}
                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((b, i) => {
                      const BadgeIcon = b.icon;

                      return (
                        <motion.div
                          key={i}
                          variants={fadeLeft}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            delay: i * 0.05,
                          }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10"
                        >
                          {BadgeIcon && (
                            <BadgeIcon className="text-cyan-400 text-xs" />
                          )}

                          <span className="text-xs text-slate-200">
                            {b.label}
                          </span>
                        </motion.div>
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