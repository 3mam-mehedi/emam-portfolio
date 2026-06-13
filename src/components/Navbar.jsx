import React, { useState } from "react";
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
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/", icon: House },
    { name: "Experiences", path: "/experiences", icon: BriefcaseBusiness },
    { name: "Educations", path: "/educations", icon: GraduationCap },
    { name: "Specializations", path: "/specializations", icon: Sparkles },
    { name: "Projects", path: "/projects", icon: FolderKanban },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  const gradientText = {
    background: "linear-gradient(90deg, #0968E5, #091970)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* SVG GRADIENT */}
      <svg width="0" height="0">
        <defs>
          <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0968E5" />
            <stop offset="100%" stopColor="#091970" />
          </linearGradient>
        </defs>
      </svg>

      {/* GLASS BACKGROUND */}
      <div className="absolute inset-0 backdrop-blur-3xl bg-transparent" />

      {/* MAIN WRAPPER */}
      <div className="relative flex items-center justify-center px-4 lg:px-12 py-2">
        <div className="w-full flex items-center justify-between lg:justify-center lg:gap-24">

          {/* LOGO */}
          <img
            src="/assets/logo/10.png"
            alt="logo"
            onClick={() => navigate("/")}
            className="w-10 h-10 rounded-full border border-white/10 cursor-pointer"
          />

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className="relative flex items-center gap-1.5 text-[11px] uppercase font-semibold tracking-[3px] px-1 py-1 group"
                >
                  <Icon
                    size={15}
                    strokeWidth={2.2}
                    style={{ stroke: "url(#navGradient)" }}
                  />

                  <span style={gradientText}>{item.name}</span>

                  {/* UNDERLINE */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] rounded-full
                      bg-gradient-to-r from-[#0968E5] to-[#091970]
                      shadow-[0_0_12px_rgba(9,104,229,0.7)]
                      transition-all duration-300 ease-out
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </NavLink>
              );
            })}
          </div>

          {/* MOBILE ICON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden ml-auto"
          >
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

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 px-3 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 py-6 mx-auto w-[88%] backdrop-blur-3xl border border-white/10 rounded-3xl">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-1.5 text-[11px] uppercase font-semibold tracking-[3px]"
                >
                  <Icon
                    size={15}
                    strokeWidth={2.2}
                    style={{ stroke: "url(#navGradient)" }}
                  />

                  <span style={gradientText}>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}