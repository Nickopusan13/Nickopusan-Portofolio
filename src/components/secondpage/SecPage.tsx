"use client";

import ImageScroller from "../ImageScroller";
import { useState } from "react";
import AppDialog from "../AppDialog";
import { DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import { FaAngleDoubleRight, FaLink } from "react-icons/fa";
import { caufi_slides, automation_slides, slides } from "./Item";

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
        {open === "fullstack" && (
          <AppDialog onClose={() => setOpen(null)} open={true}>
            <div className="flex flex-col items-center justify-center text-white px-2 sm:px-4">
              <DialogTitle className="mb-5 text-xl sm:text-2xl font-semibold text-center">
                <motion.a
                  className="flex gap-1 items-center justify-center underline cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  href={caufi_slides.href}
                >
                  {caufi_slides.title} <FaAngleDoubleRight />
                </motion.a>
              </DialogTitle>
              <div className="flex flex-col gap-6 sm:gap-10 w-full max-w-full">
                {caufi_slides.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col w-full gap-2">
                    <div className="w-full max-w-full overflow-hidden">
                      <ImageScroller
                        title={section.title}
                        images={section.images}
                      />
                    </div>
                    <h2 className="text-center italic opacity-40 text-sm sm:text-base">
                      {section.title}
                    </h2>
                    <p className="text-justify mt-2 text-sm sm:text-base leading-relaxed">
                      {section.description}
                    </p>
                    <div className="border-1 w-full border-white opacity-40"></div>
                  </div>
                ))}
              </div>
            </div>
          </AppDialog>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open === "automation" && (
          <AppDialog onClose={() => setOpen(null)} open={true}>
            <div className="flex flex-col items-center justify-center text-white px-2 sm:px-4">
              <DialogTitle className="mb-5 text-xl sm:text-2xl font-semibold text-center">
                <motion.a
                  className="flex gap-1 items-center justify-center underline cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  href={automation_slides.href}
                >
                  {automation_slides.title} <FaAngleDoubleRight />
                </motion.a>
              </DialogTitle>
              <div className="flex flex-col gap-6 sm:gap-10 w-full max-w-full">
                {automation_slides.sections.map((section, idx) => (
                  <div key={idx} className="flex flex-col w-full gap-2">
                    <div className="w-full">
                      <ImageScroller
                        title={section.title}
                        images={section.images}
                      />
                    </div>
                    {section.href ? (
                      <div className="flex items-center justify-center">
                        <motion.a
                          href={section.href}
                          className="underline cursor-pointer flex items-center justify-center gap-3 text-center italic opacity-40 text-sm sm:text-base"
                          whileHover={{ scale: 1.05 }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {section.title} <FaLink />
                        </motion.a>
                      </div>
                    ) : (
                      <h2 className="text-center italic opacity-40 text-sm sm:text-base">
                        {section.title}
                      </h2>
                    )}
                    <p className="text-justify mt-2 text-sm sm:text-base leading-relaxed">
                      {section.description}
                    </p>
                    <div className="border-1 w-full border-white opacity-40"></div>
                  </div>
                ))}
              </div>
            </div>
          </AppDialog>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
