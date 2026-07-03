import React, { useState, useEffect } from "react";
import {
  X,
  House,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  FolderKanban,
  Mail,
} from "lucide-react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  // ১. লোকাল স্টোরেজ বা সিস্টেম সেটিংস থেকে থিম ইনিশিয়ালাইজ করা
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  
  const location = useLocation();
  const navigate = useNavigate();

  // ২. থিম স্টেট চেঞ্জ হলেই <html> ক্লাসে ডার্ক মোড অ্যাড/রিমুভ হবে
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // ৩. সিম্পল টগল ফাংশন
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navItems = [
    { name: "Home", path: "/", icon: House },
    { name: "Experiences", path: "/experiences", icon: BriefcaseBusiness },
    { name: "Educations", path: "/educations", icon: GraduationCap },
    { name: "Specializations", path: "/specializations", icon: Sparkles },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const gradientText = {
    background: "linear-gradient(90deg,#0968E5,#091970)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const orbitalVariants = {
    initial: { y: 25, rotateZ: -70, scale: 0.3, opacity: 0 },
    animate: { y: 0, rotateZ: 0, scale: 1, opacity: 1 },
    exit: { y: -25, rotateZ: 70, scale: 0.3, opacity: 0 },
  };

  const springTransition = {
    type: "spring",
    stiffness: 260,
    damping: 22,
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <svg width="0" height="0">
        <defs>
          <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0968E5" />
            <stop offset="100%" stopColor="#091970" />
          </linearGradient>
        </defs>
      </svg>

      {/* Desktop Glass */}
      <div className="absolute inset-0 hidden lg:block backdrop-blur-3xl bg-transparent" />

      <div className="relative flex items-center justify-center px-4 lg:px-12 py-2 lg:py-1.5 backdrop-blur-md bg-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.08)] border-b border-[#0968E5]/35 dark:border-white/10 dark:bg-black/20 dark:shadow-none lg:backdrop-blur-none lg:bg-transparent lg:border-none lg:shadow-none">
        <div className="w-full flex items-center justify-between lg:justify-center lg:gap-17">
          <img
            src="/assets/logo/10.png"
            alt="logo"
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full border border-[#0968E5]/35 bg-white/80 shadow-sm cursor-pointer dark:border-white/10 dark:bg-black/20"
          />

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="relative flex items-center gap-2 text-[11px] uppercase font-semibold tracking-[3px] px-1 py-1 group"
                >
                  <Icon
                    size={15}
                    strokeWidth={2.2}
                    style={{ stroke: "url(#navGradient)" }}
                  />

                  <span style={gradientText}>{item.name}</span>

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-[#0968E5] to-[#091970] shadow-[0_0_12px_rgba(9,104,229,0.7)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </NavLink>
              );
            })}

            {/* TOGGLE BUTTON (DESKTOP) */}
            <button
              onClick={toggleTheme}
              className="relative overflow-hidden rounded-full border border-[#0968E5]/35 bg-white/80 hover:border-[#0968E5]/55 hover:bg-white shadow-inner transition-colors w-9 h-9 flex items-center justify-center cursor-pointer dark:border-white/10 dark:bg-black/20 dark:hover:border-white/20 dark:hover:bg-black/40"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    variants={orbitalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={springTransition}
                    className="absolute flex items-center justify-center"
                  >
                    <IoIosSunny size={20} className="text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    variants={orbitalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={springTransition}
                    className="absolute flex items-center justify-center"
                  >
                    <IoMoonSharp size={18} className="text-[#091970] dark:text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-4 lg:hidden ml-auto">
            {/* TOGGLE BUTTON (MOBILE) */}
            <button
              onClick={toggleTheme}
              className="relative overflow-hidden rounded-full border border-[#0968E5]/35 bg-white/80 shadow-inner w-10 h-10 flex items-center justify-center cursor-pointer dark:border-white/10 dark:bg-black/20"
              aria-label="Toggle Theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.div
                    key="sun-mobile"
                    variants={orbitalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={springTransition}
                    className="absolute flex items-center justify-center"
                  >
                    <IoIosSunny size={24} className="text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon-mobile"
                    variants={orbitalVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={springTransition}
                    className="absolute flex items-center justify-center"
                  >
                    <IoMoonSharp size={22} className="text-[#091970] dark:text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Mobile Menu Button */}
            <button onClick={() => setOpen(!open)} className="cursor-pointer">
              {open ? (
                <X size={28} style={{ stroke: "url(#navGradient)" }} />
              ) : (
                <HiOutlineMenuAlt2
                  size={28}
                  style={{ stroke: "url(#navGradient)" }}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="w-full border-t border-b border-[#0968E5]/35 bg-white/95 backdrop-blur-3xl shadow-[0_10px_30px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-black/80 dark:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <li
                key={item.name}
                className="border-b border-[#0968E5]/35 last:border-b-0 dark:border-white/5"
              >
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-4 px-8 py-4 transition-all duration-300 ${
                    isActive
                      ? "border-l-4 border-blue-500 bg-slate-100/90 dark:bg-white/10"
                      : "border-l-4 border-transparent hover:bg-slate-100/80 active:bg-slate-200/80 dark:hover:bg-white/5 dark:active:bg-white/10"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={2.3}
                    style={{ stroke: "url(#navGradient)" }}
                  />

                  <span
                    style={{
                      ...gradientText,
                      textShadow: "0 1px 8px rgba(255,255,255,.15)",
                    }}
                    className="uppercase text-[13px] tracking-[2px] font-semibold"
                  >
                    {item.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}