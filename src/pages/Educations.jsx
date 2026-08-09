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
  hidden: { x: -30, opacity: 0 },
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className="w-full rounded-2xl sm:rounded-3xl border p-4 sm:p-6 hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? "rgba(10, 25, 70, 0.35)" : "rgba(255, 255, 255, 0.45)",
        borderColor: isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(9, 104, 229, 0.25)",
        boxShadow: isDarkMode ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : "0 8px 32px 0 rgba(9, 104, 229, 0.08)"
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
        <div className="flex items-start sm:items-center gap-3 sm:gap-4">
          <img
            src={item.img}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-[#0968E5] shrink-0"
            alt="institution-logo"
          />

          <div>
            <h2
              className="text-base sm:text-lg font-bold transition-colors duration-300 leading-snug"
              style={{ color: isDarkMode ? "#ffffff" : "#091970" }}
            >
              {item.degree}
            </h2>
            <p
              className="text-xs sm:text-sm font-medium transition-colors duration-300 mt-0.5"
              style={{ color: isDarkMode ? "#cbd5e1" : "#334155" }}
            >
              {item.institution}
            </p>
          </div>
        </div>

        <span
          className="text-xs sm:text-sm font-bold whitespace-nowrap self-start sm:self-auto transition-colors duration-300"
          style={{ color: isDarkMode ? "rgba(255,255,255,0.5)" : "#0968E5" }}
        >
          {item.period}
        </span>
      </div>

      <p
        className="text-xs sm:text-sm mb-4 transition-colors duration-300 leading-relaxed"
        style={{ color: isDarkMode ? "#94a3b8" : "#475569" }}
      >
        {item.summary}
      </p>

      {item.gpa && (
        <div className="font-semibold text-xs sm:text-sm">
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
          className="mt-4 rounded-xl sm:rounded-2xl border p-3 sm:p-4 transition-all duration-300"
          style={{
            backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.03)" : "rgba(9, 104, 229, 0.04)",
            borderColor: isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(9, 104, 229, 0.15)"
          }}
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-wider mb-1 font-bold" style={gradientText}>
            Final Year Project
          </p>

          <h3
            className="text-sm sm:text-base font-bold transition-colors duration-300"
            style={{ color: isDarkMode ? "#ffffff" : "#0f172a" }}
          >
            {item.finalProject}
          </h3>

          {item.projectLink && (
            <div className="mt-3">
              <Link
                to={item.projectLink}
                className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-md border border-[#0968E5]/30 bg-[#0968E5]/5 text-[#0968E5] text-xs font-semibold hover:bg-[#0968E5]/10 transition-colors"
              >
                View Project →
              </Link>
            </div>
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full rounded-2xl sm:rounded-3xl border p-4 sm:p-6 hover:scale-[1.01] sm:hover:scale-[1.02] transition-all duration-300"
      style={{
        backgroundColor: isDarkMode ? "rgba(10, 25, 70, 0.35)" : "rgba(255, 255, 255, 0.45)",
        borderColor: isDarkMode ? "rgba(255, 255, 255, 0.12)" : "rgba(9, 104, 229, 0.25)",
        boxShadow: isDarkMode ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : "0 8px 32px 0 rgba(9, 104, 229, 0.08)"
      }}
    >
      {/* PC: 1 Line (lg:flex-row), Mobile/Tab: Stacked (flex-col) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 lg:gap-4 mb-4 sm:mb-5">
        <div className="flex items-center gap-3">
          <div className="text-2xl sm:text-3xl shrink-0" style={{ color: "#0968E5" }}>
            <props.icon />
          </div>

          <h2
            className="font-bold text-sm sm:text-base md:text-lg transition-colors duration-300 break-words"
            style={{ color: isDarkMode ? "#ffffff" : "#091970" }}
          >
            {props.title}
          </h2>
        </div>

        <div
          className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold whitespace-nowrap overflow-x-auto lg:overflow-visible py-1 lg:py-0 transition-colors duration-300"
          style={{ color: isDarkMode ? "#cbd5e1" : "#0968E5" }}
        >
          {props.logo && (
            <img
              src={props.logo}
              className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white p-0.5 shadow-md border shrink-0"
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
              className="flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl border backdrop-blur-xl transition-all duration-300 hover:scale-[1.03]"
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
                className="text-lg sm:text-xl shrink-0"
                style={{
                  color: iconColor,
                  filter: "drop-shadow(0 0 6px rgba(255,255,255,0.2))",
                }}
              >
                <Ico />
              </div>

              <span
                className="text-xs font-semibold truncate"
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
      <div className="w-full px-3 sm:px-6 lg:px-12 pt-20 sm:pt-24 pb-12">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <motion.h1
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-3 transition-colors duration-300"
            style={{ color: isDarkMode ? "#ffffff" : "#0949b7" }}
          >
            Education
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-6  text-sm sm:text-sm md:text-xl lg:text-base max-w-3xl font-medium transition-colors duration-300"
            style={{ color: isDarkMode ? "#cbd5e1" : "#000000" }}
          >
            My learning path combines formal study with practical training used directly in product work.
          </motion.p>

          {/* EDUCATION LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="md:col-span-2">
              <EducationCard item={educations[0]} isDarkMode={isDarkMode} />
            </div>
            <EducationCard item={educations[1]} delay={0.1} isDarkMode={isDarkMode} />
            <EducationCard item={educations[2]} delay={0.2} isDarkMode={isDarkMode} />
          </div>

          {/* SKILLS TITLE */}
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 transition-colors duration-300"
            style={{ color: isDarkMode ? "#ffffff" : "#0949b7" }}
          >
            Courses
          </h1>

          {/* SKILLS LIST */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
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
          <div className="w-full overflow-hidden px-1 sm:px-2 md:px-0 flex flex-col items-center">
            <h1
              className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 transition-colors duration-300 self-start"
              style={{ color: isDarkMode ? "#ffffff" : "#0949b7" }}
            >
              Skills
            </h1> 
            <div className="grid grid-cols-4 sm:grid-cols-5 md:flex md:flex-wrap md:justify-center gap-2.5 sm:gap-4 md:gap-6 w-full">
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
                  transition={{ duration: 0.4, delay: i * 0.015 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl sm:rounded-2xl backdrop-blur-xl border transition-all duration-300 hover:shadow-xl"
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
                    className="text-xl sm:text-2xl md:text-3xl transition-transform duration-300 hover:scale-125"
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