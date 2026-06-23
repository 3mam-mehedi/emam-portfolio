import React, { useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Background from "../components/Background";

export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const gradientText = {
    background: "linear-gradient(90deg, #0968E5, #091970)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <>
      <Background />

      <section className="min-h-screen flex items-center px-4 lg:px-12 pt-2 lg:pt-24 pb-4">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-14">

            {/* TEXT */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h1
                className="text-[32px] sm:text-[60px] md:text-[60px] leading-none font-bold"
                style={gradientText}
              >
                Emam Mehedi
              </h1>

              <p className="mt-3 md:mt-6 text-base sm:text-xl md:text-3xl text-[#cbd5e1]">
                Cross-Platform Engineer
              </p>

              {/* BUTTON */}
              <div className="mt-6 md:mt-10">
                <a
                  href="/assets/Emam Mehedi.cv.pdf"
                  download
                  className="
                    px-5 py-2.5 md:px-6 md:py-3
                    rounded-2xl
                    text-white
                    font-medium
                    shadow-lg
                    transition-all
                    duration-500
                    hover:scale-110
                    hover:-translate-y-1
                    hover:shadow-[0_0_35px_rgba(9,104,229,0.8)]
                    active:scale-95
                  "
                  style={{
                    background:
                      "linear-gradient(90deg, #0968E5, #091970)",
                  }}
                >
                  Download CV
                </a>
              </div>

              {/* SOCIALS */}
              <div className="flex items-center gap-4 md:gap-5 mt-6 md:mt-8">

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/emam-mehedi-s-e/"
                  className="
                    w-10 h-10 md:w-12 md:h-12
                    flex items-center justify-center
                    rounded-full
                    border border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    shadow-lg
                    transition-all duration-500
                    hover:scale-125
                    hover:-translate-y-2
                    hover:bg-white/20
                    hover:shadow-[0_0_25px_rgba(10,102,194,0.8)]
                    text-[#0A66C2]
                  "
                >
                  <FaLinkedinIn size={20} />
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/3mam-mehedi"
                  className="
                    w-10 h-10 md:w-12 md:h-12
                    flex items-center justify-center
                    rounded-full
                    border border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    shadow-lg
                    transition-all duration-500
                    hover:scale-125
                    hover:-translate-y-2
                    hover:bg-white/20
                    hover:shadow-[0_0_25px_rgba(255,255,255,0.7)]
                    text-white
                  "
                >
                  <FaGithub size={20} />
                </a>

                {/* GMAIL */}
                <a
                  href="#"
                  className="
                    w-10 h-10 md:w-12 md:h-12
                    flex items-center justify-center
                    rounded-full
                    border border-white/20
                    bg-white/10
                    backdrop-blur-xl
                    shadow-lg
                    transition-all duration-500
                    hover:scale-125
                    hover:-translate-y-2
                    hover:bg-white/20
                    hover:shadow-[0_0_25px_rgba(15,187,97,0.8)]
                    text-[#0fbb61]
                  "
                >
                  <SiGmail size={20} />
                </a>

              </div>
            </motion.div>

            {/* IMAGE */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <div
                className="
                  relative
                  w-58 h-70
                  md:w-96 md:h-[500px]
                  overflow-hidden
                  bg-white/5
                  border border-white/10
                  backdrop-blur-md
                  shadow-[0_0_40px_rgba(9,104,229,0.35)]
                  transition-all duration-700
                  hover:scale-105
                  hover:shadow-[0_0_60px_rgba(9,104,229,0.6)]
                "
                style={{
                  borderRadius:
                    "38% 62% 63% 37% / 30% 30% 70% 70%",
                }}
              >
                <img
                  src="/assets/profile/2.png"
                  className="w-full h-full object-cover"
                  alt="profile"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}