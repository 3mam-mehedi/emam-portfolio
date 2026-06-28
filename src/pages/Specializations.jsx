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
  FaHtml5,
  FaCss3,

} from "react-icons/fa";
import { TbApi ,TbFileSettingsFilled ,TbNavigationStar } from "react-icons/tb";
import { GiProgression ,GiCircuitry ,GiWireframeGlobe } from "react-icons/gi";
import { BsCpu, BsJavascript ,BsCCircleFill} from "react-icons/bs";
import { MdOutlinePhoneIphone,MdOutlineScreenSearchDesktop } from "react-icons/md";
import { SiTailwindcss,SiArduino ,SiDart ,SiCplusplus ,SiAltiumdesigner ,SiFirebase } from "react-icons/si";
import { BiSolidWidget } from "react-icons/bi";
import { FaLaptopFile } from "react-icons/fa6";
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
    progress: 95,
    description:
      "Builds the user-facing part of websites and web applications.",
    icon: FaReact,
    badges: [
      { label: "HTML", icon: FaHtml5, color: "#e44d26" },
      { label: "CSS", icon: FaCss3, color: "#264de4" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "#36b7f0" },
      { label: "JavaScript", icon: BsJavascript, color: "#efd81d" },
      { label: "React.js", icon: FaReact, color: "#61DAFB" },
      { label: "Firebase", icon: SiFirebase, color: "#dd2c00" },
    ],
  },
  {
    title: "Embedded Systems Engineer",
    progress: 90,
    description:
      "Develops software and hardware for embedded devices and smart systems.",
    icon: BsCpu,
    badges: [
      { label: "C++", icon: SiCplusplus, color: "#0281d0" },
      { label: "Arduino", icon: SiArduino, color: "#00707d" },
      { label: "Microcontrollers", icon: BsCpu, color: "#01c59a" },
      { label: "PCB Design", icon: GiCircuitry, color: "#38BDF8" },
    ],
  },
  {
    title: "UI / UX Design",
    progress: 80,
    description:
      "Designs intuitive and visually appealing user experiences and interfaces.",
    icon: FaFigma,
    badges: [
      { label: "Figma", icon: FaFigma, color: "#904cff" },
      { label: "Wireframe", icon: GiWireframeGlobe, color: "#264de4" },
      { label: "UX Research", icon: MdOutlineScreenSearchDesktop, color: "#e44d26" },
      { label: "Prototyping", icon: TbFileSettingsFilled, color: "#01c59a" },
      { label: "Responsive Design", icon: FaLaptopFile, color: "#dd2c00" },
    ],
  },
  {
    title: "Mobile App Developer",
    progress: 75,
    description: "Creates applications for Android and iOS devices.",
    icon: MdOutlinePhoneIphone,
    badges: [
      { label: "Dart", icon: SiDart, color: "#61DAFB" },
      { label: "Flutter Widgets", icon: BiSolidWidget, color: "#F97316" },
      { label: "UI Design", icon: SiAltiumdesigner, color: "#264de4" },
      { label: "Navigation", icon: TbNavigationStar, color: "#6366F1" },
      { label: "Firebase", icon: SiFirebase, color: "#dd2c00" },
      { label: "API Integration", icon: TbApi, color: "#00707d" },
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

                  <div className="mt-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-slate-300">
                        <GiProgression />
                      </span>

                      <span className="text-sm font-semibold text-white">
                        {item.progress}%
                      </span>
                    </div>

                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: item.progress + "%",
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.2,
                          delay: index * 0.15,
                        }}
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #0968E5 0%, #091970 100%)",
                        }}
                      />
                    </div>
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