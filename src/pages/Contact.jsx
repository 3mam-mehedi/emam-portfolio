"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background from "../components/Background";

/* ================= ANIMATION ================= */
const fadeLeft = {
  hidden: { x: -60, opacity: 0 },
  show: { x: 0, opacity: 1 },
};

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  function validate() {
    const e = {};

    if (!form.name.trim()) e.name = "Name is required";

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
    setStatus("");

    if (!validate()) return;

    const subject = encodeURIComponent(`Contact from ${form.name}`);
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

    setErrors({});
  }

  return (
    <>
      <Background />

      <section className="h-screen overflow-hidden px-4 lg:px-12 pt-20 md:pt-24 pb-8 flex items-start md:items-center">
        <div className="max-w-5xl mx-auto w-full">
          {/* ================= HEADING ================= */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold text-white mb-3">
              Contact Me
            </h1>

            <p className="text-slate-400 mb-10">
              Have a project or question? Let’s build something awesome.
            </p>
          </motion.div>

          {/* ================= FORM ================= */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 1 }}
            className="w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:scale-[1.01] transition duration-300"
          >
            <div className="grid gap-5">
              {/* NAME */}
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white outline-none focus:border-[#0968E5] transition"
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white outline-none focus:border-[#0968E5] transition"
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message..."
                  className="w-full p-4 rounded-2xl bg-black/30 border border-white/10 text-white outline-none focus:border-[#0968E5] resize-none transition"
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-2">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 rounded-2xl text-white font-semibold transition duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, #0968E5, #091970)",
                  }}
                >
                  Send Message
                </motion.button>

                {status && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-slate-400 text-sm"
                  >
                    {status}
                  </motion.p>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}