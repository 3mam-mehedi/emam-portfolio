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
 SiGmail, 
} from "react-icons/si";

import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { TbReportSearch } from "react-icons/tb";

import {
  MdOutlineDataExploration,
  MdAttachEmail,
} from "react-icons/md";


import { FaLaptopFile } from "react-icons/fa6";


const experiences = [
  {
    company: "Landco Solar Company Ltd. Dhaka",
    role: "Project Report Writer",
    period: "On Site",
    skills: [
      {
        icon: <PiMicrosoftWordLogoFill />,
        name: "MS Office",
        color: "#0765fe",
      },
      {
        icon: <FaFileExcel />,
        name: "Excel",
        color: "#13a700",
      },
      {
        icon: <TbReportSearch />,
        name: "Research",
        color: "#F4511E",
      },
      {
        icon: <MdOutlineDataExploration />,
        name: "Data Analysis",
        color: "#D81B60",
      },
      {
        icon: <SiGmail />,
        name: "Email",
        color: "#0fbb61",
      },
      {
        icon: <SiAltiumdesigner />,
        name: "Report Design",
        color: "#E040FB",
      },
    ],
  },
  {
    company: "Kitsware Technology",
    role: "Frontend Developer",
    period: "Remote",
    skills: [
      {
        icon: <FaReact />,
        name: "React",
        color: "#61DAFB",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind",
        color: "#06B6D4",
      },
      {
        icon: <SiJavascript />,
        name: "JavaScript",
        color: "#F7DF1E",
      },
      {
        icon: <FaLaptopFile />,
        name: "Responsive UI",
        color: "#F4511E",
      },
    ],
  },
];

const gradientText = {
  background: "linear-gradient(90deg, #0968E5, #091970)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
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
              className="text-4xl font-bold mb-4"
              style={gradientText}
            >
              Experiences
            </h1>

            <p className="text-slate-300 mb-8">
              Professional journey across development, reporting and UI work.
            </p>
          </motion.div>

          {/* Experience Cards */}
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
                className="
                  w-full
                  rounded-3xl
                  border border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-sm
                  hover:scale-[1.02]
                  hover:border-[#0968E5]/40
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center justify-between mb-4 gap-3">
                  <h2 className="text-xl font-semibold text-white">
                    {item.role}
                  </h2>

                  <span className="text-sm uppercase tracking-[0.2em] text-white/70 whitespace-nowrap">
                    {item.period}
                  </span>
                </div>

                <p className="text-white flex items-center gap-2 mb-4">
                  <FaBuilding style={{ color: "#0968E5" }} />
                  {item.company}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                        flex items-center gap-2
                        px-3 py-1.5
                        rounded-full
                        bg-white/10
                        text-white
                        text-sm
                        border border-white/10
                        backdrop-blur-sm
                        hover:bg-white/15
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                    >
                      <span
                        style={{
                          color: skill.color,
                          fontSize: "18px",
                        }}
                      >
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