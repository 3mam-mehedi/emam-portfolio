"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      const hasDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(hasDark);
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
     
      <div className="w-full px-4 lg:px-12 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1
              className="text-4xl font-bold mb-4 transition-colors duration-300"
              style={{ color: isDarkMode ? "#ffffff" : "#0949b7" }}
            >
              Experiences
            </h1>

            <p
              className="mb-8 transition-colors duration-300 font-medium"
              style={{ color: isDarkMode ? "#cbd5e1" : "#000000" }}
            >
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
                  border
                  p-6
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                "
                style={{
                  backgroundColor: isDarkMode ? "rgba(10, 25, 70, 0.35)" : "rgba(255, 255, 255, 0.45)",
                  borderColor: isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(9, 104, 229, 0.25)",
                  boxShadow: isDarkMode
                    ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)"
                    : "0 8px 32px 0 rgba(9, 104, 229, 0.08)"
                }}
              >
                <div className="flex items-center justify-between mb-4 gap-3">
                  <h2
                    className="text-xl font-bold transition-colors duration-300"
                    style={{ color: isDarkMode ? "#ffffff" : "#091970" }}
                  >
                    {item.role}
                  </h2>

                  <span
                    className="text-xs uppercase tracking-[0.2em] font-bold whitespace-nowrap transition-colors duration-300"
                    style={{ color: isDarkMode ? "rgba(255,255,255,0.4)" : "#0968E5" }}
                  >
                    {item.period}
                  </span>
                </div>

                <p
                  className="flex items-center gap-2 mb-5 font-semibold transition-colors duration-300"
                  style={{ color: isDarkMode ? "#e2e8f0" : "#1e293b" }}
                >
                  <FaBuilding style={{ color: isDarkMode ? "#94a3b8" : "#0968E5" }} />
                  {item.company}
                </p>

                {/* স্কিল ব্যাজগুলো */}
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="
                        flex items-center gap-2
                        px-3 py-1.5
                        rounded-full
                        text-sm
                        font-medium
                        hover:scale-105
                        transition-all
                        duration-300
                      "
                      style={{
                        backgroundColor: isDarkMode
                          ? "rgba(255, 255, 255, 0.06)"
                          : "rgba(255, 255, 255, 0.35)",
                        
                        color: isDarkMode ? "#ffffff" : "#0f172a",

                        border: isDarkMode
                          ? "1px solid rgba(255, 255, 255, 0.12)"
                          : "1px solid rgba(9, 104, 229, 0.45)",

                        boxShadow: isDarkMode
                          ? "0 8px 24px rgba(0,0,0,.18)"
                          : "0 8px 24px rgba(9,104,229,.08)",
                      }}
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