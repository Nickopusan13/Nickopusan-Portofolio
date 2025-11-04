"use client";

import { motion } from "motion/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SideBarApp from "@/components/SideBar";
import UploadCsv from "./UploadCsv";

export default function FinanceMain() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="overflow-auto h-screen scroll-smooth scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500 bg-black"
    >
      <div className="p-3 fixed z-50 sm:z-100">
        <SidebarProvider defaultOpen={false}>
          <SideBarApp />
          <SidebarTrigger />
        </SidebarProvider>
      </div>
      <motion.div
        className="hero-section bg-zinc-900 bg-cover bg-center w-full scrollbar-thin py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex items-center h-full w-full flex-col px-5 gap-2 lg:px-70 sm:px-20">
          <motion.h1
            className="text-2xl lg:text-3xl text-white text-center mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Financial Report Generator (DEMO)
          </motion.h1>
          <div className="flex flex-col gap-10 w-full h-full">
            <UploadCsv />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
