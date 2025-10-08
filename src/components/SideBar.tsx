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

const items = [
  {
    title: "Intro",
    url: "#intro",
    icon: <Home className="w-5 h-5" />,
  },
  {
    title: "My Work",
    url: "#my-work",
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
      <SidebarHeader className="font-bold text-3xl text-center py-6 tracking-tight bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
        Navigation
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
      <SidebarFooter className="text-center text-sm py-4 text-gray-400 border-t border-white/10">
        © {new Date().getFullYear()} Nicko
      </SidebarFooter>
    </Sidebar>
  );
}
