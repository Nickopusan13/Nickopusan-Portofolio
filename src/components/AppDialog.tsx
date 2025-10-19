"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ReactNode } from "react";

export default function AppDialog({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  return (
    <AnimatePresence>
      {open && (
        <Dialog
          as="div"
          className="fixed inset-0 z-50 flex items-center justify-center"
          open={open}
          onClose={onClose}
        >
          {/* Overlay animation */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />

          {/* Dialog content container */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-[90%] max-w-3xl mx-auto"
          >
            <DialogPanel
              className="relative bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900
                         border border-white/10 rounded-2xl shadow-2xl
                         p-6 sm:p-10 text-white backdrop-blur-md overflow-y-auto max-h-[90vh] overflow-x-hidden scrollbar-none"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="block absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Content */}
              {children}
            </DialogPanel>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
