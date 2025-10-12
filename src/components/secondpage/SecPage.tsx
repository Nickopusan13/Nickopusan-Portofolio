"use client";

import ImageScroller from "../ImageScroller";
import { useState } from "react";
import AppDialog from "../AppDialog";
import { DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import { FaAngleDoubleRight } from "react-icons/fa";

const slides = [
  {
    title: "Full-Stack E-commerce Platform",
    key: "fullstack",
    href: "https://github.com/Nickopusan13/Caufi-Website",
    images: ["/assets/Frame1.png", "/assets/Frame1.png", "/assets/Frame2.png"],
    description:
      "A feature-rich e-commerce platform designed for a seamless shopping experience. The responsive frontend is built with Next.js for fast page loads, while the FastAPI backend securely handles products, user accounts, and order processing.",
  },
  {
    title: "Automation Pipeline",
    key: "automation",
    herf: "#",
    images: [
      "/assets/Centris_1.png",
      "/assets/Centris_2.png",
      "/assets/Centris_3.png",
      "/assets/Centris_output.png",
    ],
    description:
      "This Python pipeline automates the entire data extraction workflow: logging in, searching, and scraping. It uses Playwright to handle dynamic sites and delivers clean, structured JSON data and downloaded images.",
  },
];

export default function SecPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <motion.section
      id="my-work"
      className="hero-section relative bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 min-h-screen w-full p-5 snap-start overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05),_transparent)] pointer-events-none"></div>
      <div className="relative flex flex-col items-center text-white h-full w-full lg:px-20">
        <motion.h1
          className="text-4xl mt-5 mb-10 font-bold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Work
        </motion.h1>
        <div className="flex flex-col items-center flex-grow w-full h-full lg:grid lg:grid-cols-2 lg:gap-10 gap-10">
          {slides.map((item, idx) => (
            <motion.a
              key={idx}
              className="flex flex-col items-center w-full gap-5 bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-pink-400/40 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <h2 className="text-xl font-semibold text-pink-400">
                {item.title}
              </h2>
              <button
                onClick={() => setOpen(item.key)}
                className="cursor-pointer w-full rounded-xl overflow-hidden shadow-lg hover:shadow-pink-500/20 transition"
              >
                <ImageScroller
                  image_class="my-work-image-click"
                  images={item.images}
                  title={item.title}
                />
              </button>
              <p className="text-center text-gray-300 text-sm lg:block hidden">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
        <div className="h-full w-full flex items-center justify-center lg:mt-10 mt-14">
          <div className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10">
            <p className="text-base text-gray-300 text-center">
              For a detailed look at my full project history and client
              feedback, please visit my profile on{" "}
              <motion.a
                className="text-pink-400 font-medium underline inline-block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.upwork.com/freelancers/nickopusan"
                target="_blank"
              >
                Upwork
              </motion.a>{" "}
              or{" "}
              <motion.a
                className="text-pink-400 font-medium underline inline-block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/Nickopusan13"
                target="_blank"
              >
                Github
              </motion.a>
            </p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {slides.map(
          (item) =>
            open === item.key && (
              <AppDialog
                onClose={() => setOpen(null)}
                open={true}
                key={item.key}
              >
                <div className="flex flex-col items-center justify-center text-white">
                  <DialogTitle className="mb-5 text-2xl font-semibold">
                    <motion.a
                      className="flex gap-1 items-center justify-center underline cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      href={item.href}
                    >
                      {item.title} <FaAngleDoubleRight />
                    </motion.a>
                  </DialogTitle>
                  <ImageScroller images={item.images} title={item.title} />
                  <p className="text-justify mt-10 text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AppDialog>
            )
        )}
      </AnimatePresence>
    </motion.section>
  );
}
