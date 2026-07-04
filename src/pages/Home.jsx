import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Background from "../components/Background";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

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

    return () => {
      document.body.style.overflow = "auto";
      observer.disconnect();
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

      <section className="min-h-screen flex items-center px-4 lg:px-12 pt-2 lg:pt-24 pb-4 bg-white/5 dark:bg-transparent transition-colors duration-500">
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-14">

            {/* TEXT SECTION */}
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

              {/* FIX 1: ইনলাইন স্টাইল দিয়ে লাইট মোডে সরাসরি কুচকুচে কালো (#0f172a) কালার হার্ডকোড করে দেওয়া হলো */}
              <p
                className="mt-3 md:mt-6 text-base sm:text-xl md:text-3xl font-bold transition-colors duration-500"
                style={{ color: isDarkMode ? "#cbd5e1" : "#0f172a" }}
              >
                Cross-Platform Engineer
              </p>

              {/* DOWNLOAD BUTTON */}
              <div className="mt-6 md:mt-10">
                <a
                  href="/assets/Emam Mehedi.cv.pdf"
                  download
                  className="px-5 py-2.5 md:px-6 md:py-3 rounded-2xl text-white font-medium shadow-lg transition-all duration-500 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(9,104,229,0.8)] active:scale-95 inline-block"
                  style={{ background: "linear-gradient(90deg, #0968E5, #091970)" }}
                >
                  Download CV
                </a>
              </div>

              {/* SOCIAL LINKS */}
              <div className="flex items-center gap-4 md:gap-5 mt-6 md:mt-8">

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/emam-mehedi-s-e/"
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(10,102,194,0.8)]"
                  style={{
                    background: isDarkMode
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.35)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: isDarkMode
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid rgba(255,255,255,0.9)",
                    boxShadow: isDarkMode
                      ? "0 8px 32px rgba(0,0,0,0.35)"
                      : "0 8px 32px rgba(9,104,229,0.08)",
                    color: "#0A66C2",
                  }}
                >
                  <FaLinkedinIn size={20} />
                </a>

                {/* GITHUB */}
                <a
                  href="https://github.com/3mam-mehedi"
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md transition-all duration-500 hover:scale-125 hover:-translate-y-2"
                  style={{
                    background: isDarkMode
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.35)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: isDarkMode
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid rgba(255,255,255,0.9)",
                    boxShadow: isDarkMode
                      ? "0 8px 32px rgba(0,0,0,0.35)"
                      : "0 8px 32px rgba(9,104,229,0.08)",
                    color: isDarkMode ? "#ffffff" : "#0f172a",
                  }}
                >
                  <FaGithub size={20} />
                </a>

                {/* GMAIL */}
                <a
                  href="#"
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full shadow-md transition-all duration-500 hover:scale-125 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(15,187,97,0.8)]"
                  style={{
                    background: isDarkMode
                      ? "rgba(255,255,255,0.08)"
                      : "rgba(255,255,255,0.35)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: isDarkMode
                      ? "1px solid rgba(255,255,255,0.12)"
                      : "1px solid rgba(255,255,255,0.9)",
                    boxShadow: isDarkMode
                      ? "0 8px 32px rgba(0,0,0,0.35)"
                      : "0 8px 32px rgba(9,104,229,0.08)",
                    color: "#0fbb61",
                  }}
                >
                  <SiGmail size={20} />
                </a>

              </div>
            </motion.div>

            {/* IMAGE SECTION */}
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center"
            >
              <div
                className="relative w-58 h-70 md:w-96 md:h-[500px] overflow-hidden bg-white/50 dark:bg-white/5 shadow-[0_10px_40px_rgba(9,104,229,0.15)] dark:shadow-[0_0_40px_rgba(9,104,229,0.15)] transition-all duration-700 hover:scale-105 hover:shadow-[0_0_60px_rgba(9,104,229,0.24)] border-2 border-[#0968E5] dark:border-white/10"
                style={{
                  borderRadius: "38% 62% 63% 37% / 30% 30% 70% 70%"
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