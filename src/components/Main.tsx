"use client";

import FirstPage from "./firstpage/FirstPage";
import SecPage from "./secondpage/SecPage";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";
import SideBarApp from "./SideBar";
import { motion } from "motion/react";
import ThirdPage from "./thirdpage/ThirdPage";
import FourPage from "./fourthpage/FourPage";
import { RiChatSmile2Fill } from "react-icons/ri";
import ChatBot from "./ChatBot";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
} from "./ui/drawer";
import { useState } from "react";

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
      className="overflow-auto snap-y snap-mandatory h-screen scroll-smooth scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500 bg-black"
    >
      <div className="p-3 fixed z-50 sm:z-100">
        <SidebarProvider defaultOpen={false}>
          <SideBarApp />
          <SidebarTrigger />
        </SidebarProvider>
      </div>
      <div className="hidden sm:block">
        <Popover>
          <motion.div className="fixed bottom-5 right-10 z-100">
            <PopoverTrigger className="w-15 h-15 bg-zinc-800 rounded-4xl flex items-center justify-center outline-none hover:scale-105 transition-transform duration-200">
              <RiChatSmile2Fill className="text-3xl text-green-500" />
            </PopoverTrigger>
            <PopoverContent className="divide-y divide-white/5 rounded-xl bg-zinc-800/80 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0 w-90 h-130 sm:mr-5 mr-2">
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
          <motion.div className="fixed bottom-5 right-5 z-100">
            <DrawerTrigger className="w-15 h-15 bg-zinc-800 rounded-4xl flex items-center justify-center outline-none hover:scale-105 transition-transform duration-200">
              <RiChatSmile2Fill className="text-3xl text-green-500" />
            </DrawerTrigger>
            <DrawerContent className="bg-black z-100">
              <div className="mx-auto w-full max-w-sm h-[70vh] py-4">
                <DrawerHeader className="hidden" />
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
