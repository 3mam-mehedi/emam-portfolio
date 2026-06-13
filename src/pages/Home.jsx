import React, { useEffect } from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

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

      <section className="min-h-screen flex items-center px-4 lg:px-12 pt-24 pb-8">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

            {/* TEXT */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <h1
                className="text-[42px] sm:text-[60px] md:text-[60px] leading-none font-bold"
                style={gradientText}
              >
                Emam Mehedi
              </h1>

              <p className="mt-4 md:mt-6 text-lg sm:text-xl md:text-3xl text-[#cbd5e1]">
                Frontend Developer.
              </p>

              {/* BUTTON */}
              <div className="mt-8 md:mt-10">
                <a
                  href="/cv.pdf"
                  download
                  className="px-6 py-3 rounded-2xl text-white font-medium shadow-lg transition duration-300 hover:scale-105"
                  style={{
                    background: "linear-gradient(90deg, #0968E5, #091970)",
                  }}
                >
                  Download CV
                </a>
              </div>

              {/* SOCIALS (UNCHANGED) */}
              <div className="flex items-center gap-5 mt-8">
                <a className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:scale-110 transition text-white">
                  <FaGithub />
                </a>

                <a className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:scale-110 transition text-[#0A66C2]">
                  <FaLinkedinIn />
                </a>

                <a className="w-12 h-12 flex items-center justify-center rounded-full border border-white/20 bg-white/5 hover:scale-110 transition text-[#E4405F]">
                  <FaInstagram />
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
                className="relative w-64 h-80 md:w-96 md:h-[500px] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_40px_rgba(9,104,229,0.35)]"
                style={{
                  borderRadius: "38% 62% 63% 37% / 30% 30% 70% 70%",
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