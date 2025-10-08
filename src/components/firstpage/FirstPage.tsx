"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import Link from "next/link";
import { motion } from "motion/react";

export default function FirstPage() {
  return (
    <motion.section
      id="intro"
      className="hero-section bg-zinc-900 bg-cover bg-center h-screen w-full scrollbar-thin snap-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex justify-center items-center h-full w-full flex-col px-5 gap-2 text-white lg:px-100 sm:px-20">
        <motion.h1
          className="text-4xl lg:text-6xl text-blue-600 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >{`Hi, I'm Nickopusan`}</motion.h1>
        <motion.p
          className="text-center text-gray-200 text-2xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          Full-Stack Engineer & Python Expert
        </motion.p>
        <motion.p
          className="text-center text-gray-200 lg:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {`I'm a Python expert who builds complete web solutions and automation
            tools. From creating modern websites with Next.js to automating
            repetitive tasks, to solve complex problems and improve efficiency.`}
        </motion.p>
        <motion.div
          className="flex gap-4 text-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Link href="https://github.com/Nickopusan13">
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-800 text-gray-400 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                borderColor: "#a78bfa",
                backgroundColor: "#6d28d9",
                color: "#f3e8ff",
                boxShadow:
                  "0 0 15px rgba(167, 139, 250, 0.7), inset 0 0 10px rgba(167, 139, 250, 0.5)",
              }}
            >
              <FaGithub />
            </motion.div>
          </Link>
          <Link href="https://www.linkedin.com/in/nickopusan13/">
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-800 text-gray-400 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                borderColor: "#38bdf8",
                backgroundColor: "#0369a1",
                color: "#e0f2fe",
                boxShadow:
                  "0 0 15px rgba(56, 189, 248, 0.7), inset 0 0 10px rgba(56, 189, 248, 0.5)",
              }}
            >
              <FaLinkedin />
            </motion.div>
          </Link>
          <Link href="https://www.upwork.com/freelancers/nickopusan">
            <motion.div
              className="relative flex h-16 w-16 items-center justify-center rounded-lg border-2 border-gray-600 bg-gray-800 text-gray-400 transition-all duration-300"
              whileHover={{
                scale: 1.1,
                borderColor: "#4ade80",
                backgroundColor: "#15803d",
                color: "#f0fdf4",
                boxShadow:
                  "0 0 15px rgba(74, 222, 128, 0.7), inset 0 0 10px rgba(74, 222, 128, 0.5)",
              }}
            >
              <FaSquareUpwork />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
