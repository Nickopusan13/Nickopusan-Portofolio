"use client";

import FirstPage from "./firstpage/FirstPage";
import SecPage from "./secondpage/SecPage";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import SideBarApp from "./SideBar";
import { motion } from "motion/react";
import ThirdPage from "./thirdpage/ThirdPage";
import FourPage from "./fourthpage/FourPage";

export default function Main() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="overflow-auto snap-y snap-mandatory h-screen scroll-smooth scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500"
    >
      <div className="p-3 fixed z-100">
        <SidebarProvider defaultOpen={false}>
          <SideBarApp />
          <SidebarTrigger />
        </SidebarProvider>
      </div>
      <FirstPage />
      <motion.div>
        <SecPage />
      </motion.div>
      <ThirdPage />
      <FourPage />
    </motion.div>
  );
}
