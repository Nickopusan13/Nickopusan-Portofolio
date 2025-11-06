"use client";

import FirstPage from "./firstpage/FirstPage";
import SecPage from "./secondpage/SecPage";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import SideBarApp from "./SideBar";
import { motion } from "motion/react";
import ThirdPage from "./thirdpage/ThirdPage";
import FourPage from "./fourthpage/FourPage";
import ChatBot from "./ChatBot";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from "./ui/drawer";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export default function Main() {
  const [sessionId, setSessionId] = useState<string | undefined>(undefined);
  const [messages, setMessages] = useState<Message[]>([]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="overflow-auto snap-y snap-mandatory h-screen scroll-smooth scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-600 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="p-3 fixed z-50 sm:z-100">
        <SidebarProvider defaultOpen={false}>
          <SideBarApp />
          <SidebarTrigger className="bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm border border-slate-700/50 rounded-lg transition-all duration-300 shadow-lg" />
        </SidebarProvider>
      </div>
      <div className="hidden sm:block">
        <Popover>
          <motion.div
            className="fixed bottom-8 right-8 z-100"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
          >
            <PopoverTrigger className="relative w-16 h-16 rounded-2xl flex items-center justify-center outline-none group overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 group-hover:from-blue-500 group-hover:to-violet-500 transition-all duration-300" />
              <motion.div
                className="relative z-10"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-7 h-7 text-white" />
              </motion.div>
            </PopoverTrigger>
            <PopoverContent className="divide-y divide-slate-700/50 rounded-2xl bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl transition duration-300 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-2 data-closed:opacity-0 w-96 h-[600px] sm:mr-5 mr-2 overflow-hidden">
              <div className="flex flex-col h-full">
                <ChatBot
                  messages={messages}
                  setMessages={setMessages}
                  sessionId={sessionId}
                  setSessionId={setSessionId}
                />
              </div>
            </PopoverContent>
          </motion.div>
        </Popover>
      </div>
      <div className="sm:hidden block">
        <Drawer>
          <motion.div
            className="fixed bottom-6 right-6 z-100"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5, type: "spring" }}
          >
            <DrawerTrigger className="relative w-14 h-14 rounded-2xl flex items-center justify-center outline-none group overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-violet-600 group-active:from-blue-500 group-active:to-violet-500 transition-all duration-300" />
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(99, 102, 241, 0.5)",
                    "0 0 40px rgba(99, 102, 241, 0.8)",
                    "0 0 20px rgba(99, 102, 241, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative z-10"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            </DrawerTrigger>
            <DrawerContent className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 z-100">
              <div className="mx-auto w-full max-w-sm h-[75vh] py-4">
                <DrawerTitle hidden />
                <ChatBot
                  messages={messages}
                  setMessages={setMessages}
                  sessionId={sessionId}
                  setSessionId={setSessionId}
                />
              </div>
            </DrawerContent>
          </motion.div>
        </Drawer>
      </div>
      <FirstPage />
      <SecPage />
      <ThirdPage />
      <FourPage />
    </motion.div>
  );
}
