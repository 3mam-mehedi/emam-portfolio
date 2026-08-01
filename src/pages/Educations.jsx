"use client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


/* ICONS */
import {
  FaLaravel,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaTeamspeak,
} from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { SiGrammarly, SiFirebase, SiNotepadplusplus, SiCplusplus, SiTailwindcss, SiPhp, SiMysql, SiDart, SiArduino } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { TbApi, TbVocabulary } from "react-icons/tb";
import { DiIllustrator } from "react-icons/di";
import { GrAssistListening } from "react-icons/gr";
import { RiSpeakAiFill, RiEnglishInput } from "react-icons/ri";
import { GiThink } from "react-icons/gi";
import { BsCpu } from "react-icons/bs";

/* ================= GRADIENT ================= */
const gradientText = {
  background: "linear-gradient(90deg, #0968E5, #091970)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

/* ================= ANIMATION ================= */
const fadeLeft = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

/* ================= EDUCATION DATA ================= */
const educations = [
  {
    institution: "Habibullah Bahar College (National University)",
    degree: "B.Sc. in Computer Science & Engineering",
    period: "2017 - 2021",
    summary:
      "Focused on Web Development and Software Engineering with strong academic foundation.",
    finalProject: "IoT-Based Smart Traffic Light System",
    projectLink: "/projects#traffic-light-system",
    gradeLabel: "CGPA",
    gpa: "2.50 / 4.00",
    img: "/assets/edu/habibullah.jpg",
  },
  {
    institution: "Kabi Nazrul Govt. College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2016",
    summary: "Science background with strong technical interest.",
    gradeLabel: "GPA",
    gpa: "3.92 / 5.00",
    img: "/assets/edu/kabi.jpg",
  },
  {
    institution: "Nawabpur Govt. High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2014",
    summary: "Strong foundation in science and mathematics.",
    gradeLabel: "GPA",
    gpa: "4.25 / 5.00",
    img: "/assets/edu/nawab.jpg",
  },
];

/* ================= EDUCATION CARD ================= */
function EducationCard({ item, delay = 0, isDarkMode }) {
  return (
    <motion.article
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      className="w-full rounded-3xl border p-6  hover:scale-[1.02] transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? "rgba(10, 25, 70, 0.35)" : "rgba(255, 255, 255, 0.45)",
        borderColor: isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(9, 104, 229, 0.25)",
        boxShadow: isDarkMode ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : "0 8px 32px 0 rgba(9, 104, 229, 0.08)"
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={item.img}
            className="w-14 h-14 rounded-full object-cover border-2 border-[#0968E5]"
            alt="institution-logo"
          />

          <div>
            <h2
              className="text-lg font-bold transition-colors duration-300"
              style={{ color: isDarkMode ? "#ffffff" : "#091970" }}
            >
              {item.degree}
            </h2>
            <p
              className="text-sm font-medium transition-colors duration-300"
              style={{ color: isDarkMode ? "#cbd5e1" : "#334155" }}
            >
              {item.institution}
            </p>
          </div>
        </div>

        <span
          className="text-sm font-bold whitespace-nowrap transition-colors duration-300"
          style={{ color: isDarkMode ? "rgba(255,255,255,0.5)" : "#0968E5" }}
        >
          {item.period}
        </span>
      </div>

      <p
        className="text-sm mb-4 transition-colors duration-300"
        style={{ color: isDarkMode ? "#94a3b8" : "#475569" }}
      >
        {item.summary}
      </p>

      {item.gpa && (
        <div className="font-semibold text-sm">
          <span
            style={{
              color: isDarkMode ? "#ffffff" : "#16aa64",
            }}
          >
            {item.gradeLabel}:
          </span>{" "}
          <span style={gradientText}>{item.gpa}</span>
        </div>
      )}

      {item.finalProject && (
        <div
          className="mt-4 rounded-2xl border  p-4 transition-all duration-300"
          style={{
            backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(9, 104, 229, 0.04)",
            borderColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(9, 104, 229, 0.15)"
          }}
        >
          <p className="text-xs uppercase tracking-wider mb-1 font-bold" style={gradientText}>
            Final Year Project
          </p>

          <h3
            className="font-bold transition-colors duration-300"
            style={{ color: isDarkMode ? "#ffffff" : "#0f172a" }}
          >
            {item.finalProject}
          </h3>

          {item.projectLink && (
            <Link
              to={item.projectLink}
              className="inline-flex items-center gap-2 mt-3 px-3.5 py-2 rounded-md border border-[#0968E5]/30 bg-[#0968E5]/5 text-[#0968E5] text-xs font-semibold"
            >
              View Project →
            </Link>
          )}
        </div>
      )}
    </motion.article>
  );
}

/* ================= SKILL CARD ================= */
function SkillCard(props) {
  const isDarkMode = props.isDarkMode;
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full rounded-3xl border p-6 hover:scale-[1.02] transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? "rgba(10, 25, 70, 0.35)" : "rgba(255, 255, 255, 0.45)",
        borderColor: isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(9, 104, 229, 0.25)",
        boxShadow: isDarkMode ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : "0 8px 32px 0 rgba(9, 104, 229, 0.08)"
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-1 mb-5">
        <div className="flex items-center gap-3">
          <div className="text-3xl" style={{ color: "#0968E5" }}>
            <props.icon />
          </div>

          <h2
            className="font-bold text-base sm:text-lg transition-colors duration-300 whitespace-nowrap"
            style={{ color: isDarkMode ? "#ffffff" : "#091970" }}
          >
            {props.title}
          </h2>
        </div>

        <div
          className="flex items-center gap-2 whitespace-nowrap text-xs font-bold transition-colors duration-300"
          style={{ color: isDarkMode ? "#cbd5e1" : "#0968E5" }}
        >
          {props.logo && (
            <img
              src={props.logo}
              className="w-8 h-8 rounded-full bg-white p-0.5 shadow-md border"
              style={{ borderColor: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(9,104,229,0.3)" }}
              alt="institute-logo"
            />
          )}
          <span>{props.institute}</span>
          <span className="opacity-50">• {props.year}</span>
          <span className="opacity-50">• {props.duration}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {props.items.map((it, i) => {
          const Ico = it.icon;
          const customColors = {
            HTML: "#e34a24",
            CSS: "#2b57f8",
            Bootstrap: "#6f2cf5",
            PHP: "#777bb3",
            MySQL: "#0a707f",
            API: "#00c2ff",
            Vocabulary: "#ff002e",
            Grammar: "#13a700",
            Listening: "#00bbf9",
            Speaking: "#00f5d4",
            Pronunciation: "#f15bb5",
            Thinking: "#f8961e",
          };

          const iconColor = customColors[it.label] || "#0968E5";

          return (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-xl transition-all duration-300 hover:scale-105"
              style={{
                background: isDarkMode
                  ? "rgba(255, 255, 255, 0.05)"
                  : "rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: isDarkMode
                  ? "1px solid rgba(255, 255, 255, 0.08)"
                  : "1px solid rgba(9, 104, 229, 0.45)",
                boxShadow: isDarkMode
                  ? "0 4px 18px rgba(0,0,0,0.18)"
                  : "0 8px 24px rgba(9,104,229,0.08)",
                color: isDarkMode ? "#ffffff" : "#0f172a",
              }}
            >
              <div
                className="text-xl"
                style={{
                  color: iconColor,
                  filter: "drop-shadow(0 0 6px rgba(255,255,255,0.2))",
                }}
              >
                <Ico />
              </div>

              <span
                className="text-xs font-semibold"
                style={{
                  color: isDarkMode ? "#ffffff" : "#0f172a",
                }}
              >
                {it.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function Education() {
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

          {/* TITLE */}
          <motion.h1
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-3 transition-colors duration-300"
            style={{ color: isDarkMode ? "#ffffff" : "#0949b7" }}
          >
            Education
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="mb-8 max-w-3xl font-medium transition-colors duration-300"
            style={{ color: isDarkMode ? "#cbd5e1" : "#000000" }}
          >
            My learning path combines formal study with practical training used directly in product work.
          </motion.p>

          {/* EDUCATION LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="md:col-span-2">
              <EducationCard item={educations[0]} isDarkMode={isDarkMode} />
            </div>
            <EducationCard item={educations[1]} delay={0.1} isDarkMode={isDarkMode} />
            <EducationCard item={educations[2]} delay={0.2} isDarkMode={isDarkMode} />
          </div>

          {/* SKILLS TITLE */}
          <h1
            className="text-4xl font-bold mb-6 transition-colors duration-300"
            style={{ color: isDarkMode ? "#ffffff" : "#0949b7" }}
          >
            Courses
          </h1>

          {/* SKILLS LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="md:col-span-2">
              <SkillCard
                icon={FaLaravel}
                title="PHP WITH LARAVEL FRAMEWORK"
                logo="/assets/skills/basis.png"
                institute="Basis"
                year="2023"
                duration="3 Months"
                isDarkMode={isDarkMode}
                items={[
                  { icon: FaHtml5, label: "HTML" },
                  { icon: FaCss3Alt, label: "CSS" },
                  { icon: FaBootstrap, label: "Bootstrap" },
                  { icon: SiPhp, label: "PHP" },
                  { icon: SiMysql, label: "MySQL" },
                  { icon: TbApi, label: "API" },
                ]}
              />
            </div>

            <SkillCard
              icon={MdShoppingCartCheckout}
              title={
                <>
                  <span className="hidden sm:inline">
                    ADVANCED
                    <br />
                    E-COMMERCE
                  </span>

                  <span className="sm:hidden">
                    ADVANCED E-COMMERCE
                  </span>
                </>
              }
              logo="/assets/skills/soft.png"
              institute="Soft Park IT"
              year="2023"
              duration="3 Months"
              isDarkMode={isDarkMode}
              items={[
                { icon: FaHtml5, label: "HTML" },
                { icon: FaCss3Alt, label: "CSS" },
                { icon: FaBootstrap, label: "Bootstrap" },
                { icon: SiPhp, label: "PHP" },
                { icon: SiMysql, label: "MySQL" },
                { icon: TbApi, label: "API" },
              ]}
            />

            <SkillCard
              icon={RiEnglishInput}
              title="SPOKEN ENGLISH"
              logo="/assets/skills/saifurs.png"
              institute="Saifurs"
              year="2024"
              duration="3 Months"
              isDarkMode={isDarkMode}
              items={[
                { icon: TbVocabulary, label: "Vocabulary" },
                { icon: SiGrammarly, label: "Grammar" },
                { icon: GrAssistListening, label: "Listening" },
                { icon: FaTeamspeak, label: "Speaking" },
                { icon: RiSpeakAiFill, label: "Pronunciation" },
                { icon: GiThink, label: "Thinking" },
              ]}
            />
          </div>

          {/* TECH STACK ICONS GRID (CIRCLE SECTION) */}
          <div className="w-full overflow-hidden px-2 md:px-0 flex flex-col items-center">
            <h1
              className="text-4xl font-bold mb-6 transition-colors duration-300 self-start"
              style={{ color: isDarkMode ? "#ffffff" : "#0949b7" }}
            >
              Skills
            </h1> 
            <div className="grid grid-cols-4 place-items-center gap-3 md:flex md:flex-wrap md:justify-center md:gap-6 w-full">
              {[
                { icon: <FaHtml5 />, color: "#e34a24" },
                { icon: <FaCss3Alt />, color: "#2b57f8" },
                { icon: <FaBootstrap />, color: "#6f2cf5" },
                { icon: <SiTailwindcss />, color: "#00bbff" },
                { icon: <SiCplusplus />, color: "#1469be" },
                { icon: <FaNodeJs />, color: "#65b849" },
                { icon: <SiPhp />, color: "#797db5" },
                { icon: <SiMysql />, color: "#0a707f" },
                { icon: <FaReact />, color: "#00d9ff" },
                { icon: <FaLaravel />, color: "#ff2919" },
                { icon: <FaFlutter />, color: "#5ec9f7" },
                { icon: <SiDart />, color: "#02599c" },
                { icon: <SiFirebase />, color: "#dd2c00" },
                { icon: <TbApi />, color: "#00c2ff" },
                { icon: <SiArduino />, color: "#118693" },
                { icon: <FaGitAlt />, color: "#f05232" },
                { icon: <SiNotepadplusplus />, color: "#00c2ff" },
                { icon: <BsCpu />, color: "#01c59a" },
                { icon: <FaFigma />, color: "#8f4aff" },
                { icon: <DiIllustrator />, color: "#ff7b1c" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.02 }}
                  className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:shadow-xl"
                  style={{
                    background: isDarkMode
                      ? "rgba(255,255,255,0.05)"
                      : "rgba(255,255,255,0.35)",

                    backdropFilter: "blur(18px)",
                    WebkitBackdropFilter: "blur(18px)",

                    border: isDarkMode
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(255,255,255,0.45)",

                    boxShadow: isDarkMode
                      ? "0 8px 24px rgba(0,0,0,0.25)"
                      : "0 8px 24px rgba(9,104,229,0.08)",
                  }}
                >
                  <div
                    className="text-2xl md:text-3xl transition-transform duration-300 hover:scale-125"
                    style={{
                      color: item.color,
                      filter: isDarkMode
                        ? "drop-shadow(0 0 8px rgba(255,255,255,0.15))"
                        : `drop-shadow(0 0 8px ${item.color}55)`,
                    }}
                  >
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}