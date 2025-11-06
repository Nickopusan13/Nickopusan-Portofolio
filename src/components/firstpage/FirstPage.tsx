"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { motion } from "motion/react";
import { Sparkles, Code2, Rocket } from "lucide-react";

export default function FirstPage() {
  return (
    <motion.section
      id="intro"
      className="hero-section relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 bg-cover bg-center h-screen w-full scrollbar-thin snap-start overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />
      <div className="relative z-10 flex justify-center items-center h-full w-full flex-col px-5 gap-8 text-white lg:px-100 sm:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-3 mb-4"
        >
          <motion.div
            className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl shadow-lg shadow-blue-500/30"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
          <span className="text-slate-400 text-sm font-medium tracking-wider uppercase">
            Welcome to my portfolio
          </span>
          <motion.div
            className="p-3 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl shadow-lg shadow-violet-500/30"
            animate={{
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Code2 className="w-6 h-6 text-white" />
          </motion.div>
        </motion.div>
        <motion.h1
          className="text-4xl lg:text-7xl text-center font-bold mb-2 flex gap-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-slate-300">{`Hi, I'm`}</span>
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Nickopusan
          </span>
        </motion.h1>
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
          <Rocket className="w-5 h-5 text-blue-400" />
          <p className="text-center text-slate-100 text-xl lg:text-3xl font-bold">
            Full-Stack Engineer & Python Expert
          </p>
          <Rocket className="w-5 h-5 text-violet-400 transform scale-x-[-1]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500" />
        </motion.div>
        <motion.p
          className="text-center text-slate-300 lg:text-lg max-w-3xl leading-relaxed px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {`I'm a Python expert who builds complete web solutions and automation
          tools. From creating modern websites with Next.js to automating
          repetitive tasks, to solve complex problems and improve efficiency.`}
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {["Web Development", "Automation", "Python", "AI Integration"].map(
            (skill, idx) => (
              <motion.span
                key={idx}
                className="sm:px-4 px-2 py-2 bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-full text-xs lg:text-sm text-slate-300 font-medium shadow-lg cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  borderColor: "rgba(99, 102, 241, 0.5)",
                  boxShadow: "0 0 20px rgba(99, 102, 241, 0.3)",
                }}
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
        <motion.div
          className="flex gap-6 text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <a
            href="https://github.com/Nickopusan13"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-slate-700/50 bg-slate-800/60 backdrop-blur-sm text-slate-400 transition-all duration-300 shadow-lg overflow-hidden group"
              whileTap={{ scale: 0.95 }}
              whileHover={{
                scale: 1.1,
                borderColor: "#a78bfa",
                backgroundColor: "#6d28d9",
                color: "#f3e8ff",
              }}
            >
              <FaGithub className="relative z-10 group-hover:text-white transition-colors" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          </a>
          <a
            href="https://www.linkedin.com/in/nickopusan13/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-slate-700/50 bg-slate-800/60 backdrop-blur-sm text-slate-400 transition-all duration-300 shadow-lg overflow-hidden group"
              whileHover={{
                scale: 1.1,
                borderColor: "#38bdf8",
                backgroundColor: "#0369a1",
                color: "#e0f2fe",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="relative z-10 group-hover:text-white transition-colors" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          </a>
          <a
            href="https://www.upwork.com/freelancers/nickopusan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-slate-700/50 bg-slate-800/60 backdrop-blur-sm text-slate-400 transition-all duration-300 shadow-lg overflow-hidden group"
              whileHover={{
                scale: 1.1,
                borderColor: "#4ade80",
                backgroundColor: "#15803d",
                color: "#f0fdf4",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSquareUpwork className="relative z-10 group-hover:text-white transition-colors" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
