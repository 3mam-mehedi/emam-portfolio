"use client";
import React from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";

import {
  FaBuilding,
  FaReact,
  FaHtml5,
  FaFileExcel,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiAltiumdesigner,
} from "react-icons/si";

import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";

import {
  MdOutlineDataExploration,
  MdAttachEmail,
} from "react-icons/md";

const experiences = [
  {
    company: "Landco Solar Company Ltd. Dhaka",
    role: "Project Report Writer",
    period: "On Site",
    skills: [
      { icon: <PiMicrosoftWordLogoFill />, name: "MS Office" },
      { icon: <FaFileExcel />, name: "Excel" },
      { icon: <TbReportSearch />, name: "Research" },
      { icon: <MdOutlineDataExploration />, name: "Data Analysis" },
      { icon: <MdAttachEmail />, name: "Email" },
      { icon: <SiAltiumdesigner />, name: "Report Design" },
    ],
  },
  {
    company: "Kitsware Technology",
    role: "Frontend Developer",
    period: "Remote",
    skills: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiTailwindcss />, name: "Tailwind" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaHtml5 />, name: "Responsive UI" },
    ],
  },
];

const gradientText = {
  background: "linear-gradient(90deg, #0968E5, #091970)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const gradientBg = {
  background: "linear-gradient(90deg, #0968E5, #091970)",
};

export default function Experiences() {
  return (
    <>
      <Background />

      <div className="w-full px-4 lg:px-12 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              className="text-4xl text-white font-bold mb-4"
              
            >
              Experiences
            </h1>

            <p className="text-slate-300 mb-8">
              Professional journey across development, reporting and UI work.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {experiences.map((item, idx) => (
              <motion.article
                key={idx}
                initial={{ x: -60, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: idx * 0.15,
                }}
                className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:scale-[1.02] transition duration-300"
              >
                <div className="flex items-center justify-between mb-4 gap-3">
                  <h2 className="text-xl font-semibold text-white">
                    {item.role}
                  </h2>

                  <span
                    className="text-sm uppercase tracking-[0.2em] text-white/70 whitespace-nowrap"
                  >
                    {item.period}
                  </span>
                </div>

                <p className="text-slate-300 flex items-center gap-2 mb-4">
                  <FaBuilding style={{ color: "#0968E5" }} />
                  {item.company}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-3 py-1 rounded-full
                      bg-white/10 text-slate-200 text-sm border border-white/10
                      hover:bg-white/15 transition"
                    >
                      <span style={{ color: "#0968E5" }}>
                        {skill.icon}
                      </span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}