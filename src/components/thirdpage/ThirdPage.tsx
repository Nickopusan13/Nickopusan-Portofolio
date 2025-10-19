import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { frontend, backend, database, others } from "./Item";
import { motion } from "motion/react";
import { useState } from "react";

export default function ThirdPage() {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const handleTooltipClick = (id: string, e: React.MouseEvent) => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      e.preventDefault();
      setOpenTooltip(openTooltip === id ? null : id);
    }
  };
  return (
    <section
      id="my-skills"
      className="hero-section bg-zinc-900 bg-cover bg-center lg:h-screen md:h-screen h-auto p-5 w-full snap-start"
    >
      <div className="flex flex-col text-white h-full w-full px-2 md:px-10 lg:px-32">
        <h1 className="text-4xl mt-2 mb-10 text-center">My Skills</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center justify-center gap-2">
              Frontend{" "}
              <div className="border-1 max-w-[700px] border-white opacity-50 flex-1" />
            </h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              viewport={{ once: true }}
            >
              {frontend.map((item, idx) => {
                const tooltipId = `frontend-${idx}`;
                const isOpen = openTooltip === tooltipId;

                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Tooltip open={isOpen || undefined}>
                      <TooltipTrigger
                        onClick={(e) => handleTooltipClick(tooltipId, e)}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          setOpenTooltip(isOpen ? null : tooltipId);
                        }}
                        className="flex flex-col items-center justify-center p-5 text-center bg-slate-800/50 backdrop-blur-md rounded-2xl border border-sky-300/20 transition-all duration-300 ease-in-out hover:bg-slate-800/70 hover:border-sky-300/40 lg:hover:-translate-y-1"
                      >
                        {item.logo}
                      </TooltipTrigger>
                      <TooltipContent>{item.desc}</TooltipContent>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center justify-center gap-2">
              Backend{" "}
              <div className="border-1 max-w-[700px] border-white opacity-50 flex-1" />
            </h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              viewport={{ once: true }}
            >
              {backend.map((item, idx) => {
                const tooltipId = `backend-${idx}`;
                const isOpen = openTooltip === tooltipId;

                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Tooltip open={isOpen || undefined}>
                      <TooltipTrigger
                        onClick={(e) => handleTooltipClick(tooltipId, e)}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          setOpenTooltip(isOpen ? null : tooltipId);
                        }}
                        className="flex flex-col items-center justify-center p-5 text-center bg-slate-800/50 backdrop-blur-md rounded-2xl border border-sky-300/20 transition-all duration-300 ease-in-out hover:bg-slate-800/70 hover:border-sky-300/40 lg:hover:-translate-y-1"
                      >
                        {item.logo}
                      </TooltipTrigger>
                      <TooltipContent>{item.desc}</TooltipContent>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center justify-center gap-2">
              Database & API{" "}
              <div className="border-1 max-w-[700px] border-white opacity-50 flex-1" />
            </h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              viewport={{ once: true }}
            >
              {database.map((item, idx) => {
                const tooltipId = `database-${idx}`;
                const isOpen = openTooltip === tooltipId;

                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Tooltip open={isOpen || undefined}>
                      <TooltipTrigger
                        onClick={(e) => handleTooltipClick(tooltipId, e)}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          setOpenTooltip(isOpen ? null : tooltipId);
                        }}
                        className="flex flex-col items-center justify-center p-5 text-center bg-slate-800/50 backdrop-blur-md rounded-2xl border border-sky-300/20 transition-all duration-300 ease-in-out hover:bg-slate-800/70 hover:border-sky-300/40 lg:hover:-translate-y-1"
                      >
                        {item.logo}
                      </TooltipTrigger>
                      <TooltipContent>{item.desc}</TooltipContent>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="flex items-center justify-center gap-2">
              Others{" "}
              <div className="border-1 max-w-[700px] border-white opacity-50 flex-1" />
            </h2>
            <motion.div
              className="flex flex-wrap justify-center gap-5"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.08 },
                },
              }}
              viewport={{ once: true }}
            >
              {others.map((item, idx) => {
                const tooltipId = `others-${idx}`;
                const isOpen = openTooltip === tooltipId;
                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <Tooltip open={isOpen || undefined}>
                      <TooltipTrigger
                        onClick={(e) => handleTooltipClick(tooltipId, e)}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          setOpenTooltip(isOpen ? null : tooltipId);
                        }}
                        className="flex flex-col items-center justify-center p-5 text-center bg-slate-800/50 backdrop-blur-md rounded-2xl border border-sky-300/20 transition-all duration-300 ease-in-out hover:bg-slate-800/70 hover:border-sky-300/40 lg:hover:-translate-y-1"
                      >
                        {item.logo}
                      </TooltipTrigger>
                      <TooltipContent>{item.desc}</TooltipContent>
                    </Tooltip>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
