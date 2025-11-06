"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
} from "./ui/sidebar";
import { motion } from "framer-motion";
import { Home, Briefcase, Code2, Mail } from "lucide-react";
import { Sparkles } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: "Finance Dashboard",
    url: "/app/finance-dashboard",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    title: "My Skills",
    url: "#my-skills",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    title: "Contact Me",
    url: "#contact-me",
    icon: <Mail className="w-5 h-5" />,
  },
];

export default function SideBarApp() {
  return (
    <Sidebar className="bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 text-white shadow-xl border-r border-white/10">
      <SidebarHeader className="relative z-10 py-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.div
            className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl shadow-lg shadow-blue-500/30"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Sparkles className="w-6 h-6 text-white" />
          </motion.div>
          <h2 className="font-bold text-2xl text-center tracking-tight bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 text-transparent bg-clip-text">
            Navigation
          </h2>
          <motion.div
            className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-5 overflow-hidden px-2">
            {items.map((item, index) => (
              <SidebarMenuItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <SidebarMenuButton className="p-0 group">
                    <a
                      href={item.url}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                    >
                      <span className="text-pink-400 group-hover:text-pink-300 transition-colors">
                        {item.icon}
                      </span>
                      <span className="text-gray-100 group-hover:text-white font-medium tracking-wide">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </motion.div>
              </SidebarMenuItem>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="relative z-10 text-center py-6 border-t border-slate-700/30 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-blue-400"
            >
              ✦
            </motion.span>
            <span>© {new Date().getFullYear()} Nicko</span>
            <motion.span
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="text-violet-400"
            >
              ✦
            </motion.span>
          </div>
          <p className="text-xs text-slate-500">Built with passion</p>
        </motion.div>
      </SidebarFooter>
    </Sidebar>
  );
}
