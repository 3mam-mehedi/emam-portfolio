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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

const specializations = [
  {
    title: "Frontend Developer",
    description:
      "Building scalable UI with reusable components and modern React architecture.",
    icon: FaReact,
    badges: [
      { label: "Frontend", icon: FaCode, color: "#61DAFB" },
      { label: "Hooks", icon: FaLayerGroup, color: "#A855F7" },
      { label: "SPA", icon: FaMobileAlt, color: "#22C55E" },
    ],
  },
  {
    title: "Embedded Systems",
    description:
      "Creating responsive layouts using modern utility-first CSS approach.",
    icon: SiTailwindcss,
    badges: [
      { label: "Responsive", icon: FaMobileAlt, color: "#F59E0B" },
      { label: "UI Design", icon: FaFigma, color: "#F24E1E" },
      { label: "Utility CSS", icon: FaCode, color: "#38BDF8" },
    ],
  },
  {
    title: "UI / UX Design",
    description:
      "Designing smooth user experiences with modern and clean interfaces.",
    icon: FaFigma,
    badges: [
      { label: "Figma", icon: FaFigma, color: "#F24E1E" },
      { label: "Wireframe", icon: FaLayerGroup, color: "#8B5CF6" },
      { label: "User Flow", icon: FaCode, color: "#10B981" },
    ],
  },
  {
    title: "Mobile App Developer",
    description:
      "Modern frontend development with performance and scalability.",
    icon: FaReact,
    badges: [
      { label: "React", icon: FaReact, color: "#61DAFB" },
      { label: "Optimization", icon: FaCode, color: "#F97316" },
      { label: "Architecture", icon: FaLayerGroup, color: "#6366F1" },
    ],
  },
];

export default function Specializations() {
  return (
    <>
      <Background />

      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient
            id="specialGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#0968E5" />
            <stop offset="100%" stopColor="#091970" />
          </linearGradient>
        </defs>
      </svg>

      <section className="w-full px-4 lg:px-12 pt-24 pb-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-white mb-3">
              Specializations
            </h1>

            <p className="text-slate-300 mb-10 max-w-2xl">
              Core areas of expertise that help deliver strong frontend
              experiences and polished digital products.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((item, index) => {
              const MainIcon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                  }}
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    backdrop-blur-sm
                    p-6
                    hover:scale-[1.02]
                    transition-all
                    duration-300
                  "
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MainIcon
                      size={28}
                      style={{
                        fill: "url(#specialGradient)",
                      }}
                    />

                    <h2 className="text-xl font-semibold text-white">
                      {item.title}
                    </h2>
                  </div>

                  <p className="text-slate-400 mb-5 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((badge) => {
                      const BadgeIcon = badge.icon;

                      return (
                        <div
                          key={badge.label}
                          className="
                            flex items-center gap-2
                            px-3 py-1.5
                            rounded-lg
                            bg-white/10
                            border border-white/10
                          "
                        >
                          <BadgeIcon
                            size={12}
                            style={{
                              color: badge.color,
                            }}
                          />

                          <span className="text-xs font-medium text-white">
                            {badge.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}