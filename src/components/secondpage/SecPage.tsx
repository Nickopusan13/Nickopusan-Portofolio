"use client";

import ImageScroller from "../ImageScroller";
import { useState } from "react";
import AppDialog from "../AppDialog";
import { DialogTitle } from "@headlessui/react";
import { AnimatePresence, motion } from "motion/react";
import { FaAngleDoubleRight, FaLink } from "react-icons/fa";
import { caufi_slides, automation_slides, slides } from "./Item";
import { Briefcase, ExternalLink } from "lucide-react";

export default function SecPage() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <motion.section
      id="my-work"
      className="hero-section relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 min-h-screen w-full p-5 snap-start overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
      <div className="relative flex flex-col items-center text-white h-full w-full lg:px-20 z-10">
        <motion.div
          className="flex flex-col items-center gap-4 mb-12 mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl shadow-lg shadow-blue-500/30 hover:scale-105 hover:rotate-5 duration-200">
            <Briefcase className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            My Work
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
          <p className="text-slate-400 text-center max-w-2xl">
            Explore my portfolio of full-stack applications and automation
            projects
          </p>
        </motion.div>
        <div className="flex flex-col items-center flex-grow w-full h-full lg:grid lg:grid-cols-2 lg:gap-8 gap-8 max-w-7xl">
          {slides.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col lg:min-h-170 items-center w-full gap-6 bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 group"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3 w-full">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-500/50" />
                <h2 className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                  {item.title}
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500/50" />
              </div>
              <button
                onClick={() => setOpen(item.key)}
                className="cursor-pointer w-full rounded-xl overflow-hidden shadow-lg border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group-hover:scale-[1.02] relative"
              >
                <ImageScroller
                  image_class="my-work-image-click"
                  images={item.images}
                  title={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </button>
              <p className="text-center text-slate-300 text-sm lg:text-base leading-relaxed lg:block hidden">
                {item.description}
              </p>
              <button
                onClick={() => setOpen(item.key)}
                className="mt-2 px-6 py-2.5 bg-gradient-to-r hover:scale-105 active:scale-95 from-blue-600 to-violet-600 rounded-xl text-white font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                View Details
                <ExternalLink className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
        <div className="h-full w-full flex items-center justify-center lg:mt-16 mt-12 mb-8">
          <div className="bg-slate-800/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 max-w-3xl">
            <p className="text-base lg:text-lg text-slate-300 text-center leading-relaxed">
              For a detailed look at my full project history and client
              feedback, please visit my profile on{" "}
              <a
                className="text-blue-400 hover:scale-105 active:scale-95 font-semibold underline inline-flex items-center gap-1 hover:text-blue-300 transition-colors"
                href="https://www.upwork.com/freelancers/nickopusan"
                target="_blank"
              >
                Upwork
                <ExternalLink className="w-3 h-3" />
              </a>{" "}
              or{" "}
              <a
                className="text-violet-400 hover:scale-105 active:scale-95 font-semibold underline inline-flex items-center gap-1 hover:text-violet-300 transition-colors"
                href="https://github.com/Nickopusan13"
                target="_blank"
              >
                Github
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open === "fullstack" && (
          <AppDialog onClose={() => setOpen(null)} open={true}>
            <div className="flex flex-col items-center justify-center text-white px-2 sm:px-4">
              <DialogTitle className="mb-6 text-xl sm:text-2xl font-semibold text-center">
                <a
                  className="flex gap-2 items-center justify-center underline cursor-pointer bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-violet-300 transition-all hover:scale-105"
                  href={caufi_slides.href}
                >
                  {caufi_slides.title} <FaAngleDoubleRight />
                </a>
              </DialogTitle>
              <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-full">
                {caufi_slides.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col w-full gap-4 p-6 bg-slate-800/40 rounded-xl border border-slate-700/30"
                  >
                    <div className="w-full max-w-full overflow-hidden rounded-lg border border-slate-700/50">
                      <ImageScroller
                        title={section.title}
                        images={section.images}
                      />
                    </div>
                    <h2 className="text-center italic text-slate-400 text-sm sm:text-base font-medium">
                      {section.title}
                    </h2>
                    <p className="text-justify text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
                      {section.description}
                    </p>
                    {idx < caufi_slides.sections.length - 1 && (
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent mt-4"></div>
                    )}
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
              <DialogTitle className="mb-6 text-xl sm:text-2xl font-semibold text-center">
                <a
                  className="flex gap-2 items-center justify-center underline cursor-pointer bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-violet-300 transition-all hover:scale-105"
                  href={automation_slides.href}
                >
                  {automation_slides.title} <FaAngleDoubleRight />
                </a>
              </DialogTitle>
              <div className="flex flex-col gap-8 sm:gap-12 w-full max-w-full">
                {automation_slides.sections.map((section, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col w-full gap-4 p-6 bg-slate-800/40 rounded-xl border border-slate-700/30"
                  >
                    <div className="w-full overflow-hidden rounded-lg border border-slate-700/50">
                      <ImageScroller
                        title={section.title}
                        images={section.images}
                      />
                    </div>
                    {section.href ? (
                      <div className="flex items-center justify-center">
                        <motion.a
                          href={section.href}
                          className="underline cursor-pointer flex items-center justify-center gap-2 text-center italic text-blue-400 text-sm sm:text-base hover:text-blue-300 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {section.title} <FaLink />
                        </motion.a>
                      </div>
                    ) : (
                      <h2 className="text-center italic text-slate-400 text-sm sm:text-base font-medium">
                        {section.title}
                      </h2>
                    )}
                    <p className="text-justify text-slate-300 mt-2 text-sm sm:text-base leading-relaxed">
                      {section.description}
                    </p>
                    {idx < automation_slides.sections.length - 1 && (
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent mt-4"></div>
                    )}
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
