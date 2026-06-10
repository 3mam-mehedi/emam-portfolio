"use client";
import React from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";

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
} from "react-icons/fa";

import { FaFlutter } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { DiIllustrator } from "react-icons/di";

import {
  SiCplusplus,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiDart,
  SiArduino,
} from "react-icons/si";

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
    period: "2016 - 2020",
    summary:
      "Focused on Web Development and Software Engineering with strong academic foundation.",
    extra: "IoT-Based Smart Traffic Light System",
    gpa: "2.50 / 4.00",
    img: "/assets/edu/habibullah.jpg",
  },
  {
    institution: "Kabi Nazrul Govt. College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2016",
    summary: "Science background with strong technical interest.",
    gpa: "3.92 / 5.00",
    img: "/assets/edu/kabi.jpg",
  },
  {
    institution: "Nawabpur Govt. High School",
    degree: "Secondary School Certificate (SSC)",
    period: "2014",
    summary: "Strong foundation in science and mathematics.",
    gpa: "4.25 / 5.00",
    img: "/assets/edu/nawab.jpg",
  },
];

/* ================= EDUCATION CARD ================= */
function EducationCard({ item, delay = 0 }) {
  return (
    <motion.article
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:scale-[1.02] transition"
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-4">
          <img
            src={item.img}
            className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400"
          />

          <div>
            <h2 className="text-lg font-semibold text-white">
              {item.degree}
            </h2>
            <p className="text-slate-300 text-sm">{item.institution}</p>
          </div>
        </div>

        <span className="text-sm text-white">
          {item.period}
        </span>
      </div>

      <p className="text-slate-400 text-sm mb-4">{item.summary}</p>

      {item.gpa && (
        <span style={gradientText} className="text-sm font-semibold">
          CGPA: {item.gpa}
        </span>
      )}

      {item.extra && (
        <div className="mt-4 p-4 rounded-xl bg-white/10 border border-white/10">
          <p className="text-white font-semibold">{item.extra}</p>
        </div>
      )}
    </motion.article>
  );
}

/* ================= SKILL CARD ================= */
function SkillCard(props) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 hover:scale-[1.02] transition"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div
            className="text-3xl"
            style={{ color: "#0968E5" }}
          >
            <props.icon />
          </div>

          <h2 className="font-semibold text-white text-lg">
            {props.title}
          </h2>
        </div>

        <div className="flex items-center gap-3 text-xs text-slate-300">
          {props.logo && (
            <img
              src={props.logo}
              className="w-6 h-6 rounded-full bg-white p-1"
              alt=""
            />
          )}

          <span>{props.institute}</span>
          <span>• {props.year}</span>
          <span>• {props.duration}</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {props.items.map((it, i) => {
          const Ico = it.icon;

          return (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/10 p-2 rounded-lg"
            >
              <div
                className="text-lg"
                style={{ color: "#0968E5" }}
              >
                <Ico />
              </div>

              <span className="text-xs text-slate-200">
                {it.label}
              </span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ================= CIRCLE SECTION ================= */
function Circle({ data, delay = 0 }) {
  return (
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      className="
        w-full
        md:w-44 md:h-44
        grid grid-cols-4
        md:flex md:flex-wrap
        gap-2 justify-center items-center
      "
    >
      {data.map((item, i) => (
        <div
          key={i}
          className="
            h-14 w-14
            md:w-[40%] md:h-[40%]
            flex items-center justify-center
            bg-white/10 backdrop-blur-xl
            border border-white/20
            rounded-2xl
          "
        >
          <div className="text-2xl md:text-3xl" style={{ color: item.color }}>
            {item.icon}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

/* ================= MAIN COMPONENT ================= */
export default function Education() {
  return (
    <>
      <Background />

      <div className="w-full px-4 lg:px-12 pt-24 pb-8">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <motion.h1
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-bold mb-3 text-white"
          >
            Education
          </motion.h1>

          <motion.p
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            className="text-slate-400 mb-8 max-w-3xl"
          >
            My learning path combines formal study with practical training used directly in product work.
          </motion.p>



          {/* EDUCATION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="md:col-span-2">
              <EducationCard item={educations[0]} />
            </div>

            <EducationCard item={educations[1]} delay={0.1} />
            <EducationCard item={educations[2]} delay={0.2} />
          </div>

          {/* SKILLS TITLE */}
          <h1 className="text-4xl text-white font-bold mb-6">
            Skills
          </h1>

          {/* SKILLS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="md:col-span-2">
              <SkillCard
                icon={FaLaravel}
                title="PHP WITH LARAVEL FRAMEWORK"
                logo="/assets/skills/basis.png"
                institute="Basis"
                year="2023"
                duration="3 Months"
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
              icon={FaReact}
              title="ADVANCED E-COMMERCE"
              logo="/assets/skills/spi.png"
              institute="Soft Park IT"
              year="2023"
              duration="3 Months"
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
              icon={FaFigma}
              title="SPOKEN ENGLISH"
              logo="/assets/skills/saifurs.png"
              institute="Saifurs"
              year="2022"
              duration="3 Months"
              items={[
                { icon: FaFigma, label: "Vocabulary" },
                { icon: FaFigma, label: "Grammar" },
                { icon: FaFigma, label: "Listening" },
                { icon: FaFigma, label: "Speaking" },
                { icon: FaFigma, label: "Pronunciation" },
                { icon: FaFigma, label: "Thinking" },
              ]}
            />
          </div>

          {/* CIRCLE SECTION */}
<div className="w-full overflow-hidden px-2 md:px-0">
  <div className="grid grid-cols-8 gap-1 md:flex md:flex-wrap md:justify-center md:gap-8">

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

      { icon: <SiArduino />, color: "#118693" },
      { icon: <FaGitAlt />, color: "#f05232" },
      { icon: <FaFigma />, color: "#8f4aff" },
      { icon: <DiIllustrator />, color: "#ff7b1c" },
    ].map((item, i) => (
      <motion.div
        key={i}
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.03 }}
        className="
          w-10 h-10
          md:w-16 md:h-16
          flex items-center justify-center
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          rounded-xl md:rounded-2xl
          hover:scale-110
          transition
        "
      >
        <div
          className="text-lg md:text-3xl"
          style={{ color: item.color }}
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