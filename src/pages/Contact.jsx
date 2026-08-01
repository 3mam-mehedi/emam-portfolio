"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


const fadeLeft = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Contact() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    const checkTheme = () => {
      const hasDark =
        document.documentElement.classList.contains("dark");
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

  function validate() {
    const e = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    }

    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter a valid email";
    }

    if (!form.message.trim()) {
      e.message = "Message is required";
    }

    setErrors(e);

    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    setForm((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return;

    const subject = encodeURIComponent(
      `Contact from ${form.name}`
    );

    const body = encodeURIComponent(
      `${form.message}\n\n---\n${form.name}\n${form.email}`
    );
       window.location.href = `mailto:youremail@example.com?subject=${subject}&body=${body}`;

    setStatus("Opening mail client...");
    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <>

      <section className="min-h-screen pt-24 pb-4 md:pb-10 px-4 lg:px-12">
        <div className="max-w-5xl mx-auto w-full">

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.9 }}
          >
            <h1
              className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 transition-colors duration-300"
              style={{
                color: isDarkMode ? "#ffffff" : "#0f172a",
              }}
            >
              Contact Me
            </h1>

            <p
              className="mb-6 md:mb-10 text-base font-medium transition-colors duration-300"
              style={{
                color: isDarkMode ? "#cbd5e1" : "#000000",
              }}
            >
              Have a project or question?
              Let’s build something awesome.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
            className="rounded-3xl border p-4 md:p-8"
            style={{
              backgroundColor: isDarkMode
                ? "rgba(10, 25, 70, 0.35)"
                : "rgba(255,255,255,.45)",

              borderColor: isDarkMode
                ? "rgba(255,255,255,.12)"
                : "rgba(9,104,229,.25)",

              boxShadow: isDarkMode
                ? "0 8px 32px rgba(0,0,0,.37)"
                : "0 8px 32px rgba(9,104,229,.08)",
            }}
          >
            <div className="grid gap-3 md:gap-5">
              {["name", "email"].map((field) => (
                <div key={field}>
                  <input
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field.charAt(0).toUpperCase() +
                      field.slice(1)
                    }
                    className="w-full p-3 md:p-4 rounded-2xl border outline-none transition-all duration-300 focus:ring-2 focus:ring-[#0968E5]"
                                       style={{
                      backgroundColor: isDarkMode
                        ? "rgba(0,0,0,.2)"
                        : "rgba(255,255,255,.5)",

                      borderColor: isDarkMode
                        ? "rgba(255,255,255,.1)"
                        : "rgba(9,104,229,.2)",

                      color: isDarkMode ? "#fff" : "#000",
                    }}
                  />

                  {errors[field] && (
                    <p className="text-red-400 text-sm mt-2">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Your message..."
                  className="w-full p-3 md:p-4 rounded-2xl border outline-none transition-all duration-300 focus:ring-2 focus:ring-[#0968E5]"
                  style={{
                    backgroundColor: isDarkMode
                      ? "rgba(0,0,0,.2)"
                      : "rgba(255,255,255,.5)",

                    borderColor: isDarkMode
                      ? "rgba(255,255,255,.1)"
                      : "rgba(9,104,229,.2)",

                    color: isDarkMode ? "#fff" : "#000",
                  }}
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 rounded-2xl text-white font-bold transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg,#0968E5 0%,#091970 100%)",
                  }}
                >
                  Send Message
                </motion.button>
                               {status && (
                  <p
                    className="text-sm font-medium"
                    style={{
                      color: isDarkMode ? "#cbd5e1" : "#475569",
                    }}
                  >
                    {status}
                  </p>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}   