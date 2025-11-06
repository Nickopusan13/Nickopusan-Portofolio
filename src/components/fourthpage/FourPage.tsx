"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { motion } from "motion/react";
import { postUserMessage } from "@/utils/api";
import { useState } from "react";
import toast from "react-hot-toast";
import ToasterProvider from "../Toaster";
import { Mail, Send, User, MessageSquare, Sparkles } from "lucide-react";

export default function FourPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await postUserMessage({
        name,
        email,
        message,
      });
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong";
      toast.error(errorMessage, { duration: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section
      id="contact-me"
      className="hero-section relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 bg-cover bg-center min-h-screen w-full flex items-center justify-center p-6 snap-start overflow-hidden"
    >
      <ToasterProvider />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center text-white w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 flex flex-col items-center gap-4"
        >
          <motion.div
            className="p-3 bg-gradient-to-br from-blue-500 to-violet-500 rounded-2xl shadow-lg shadow-blue-500/30"
            whileHover={{ scale: 1.05, rotate: 5 }}
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              rotate: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.div>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {`LET'S BUILD SOMETHING AMAZING!`}
            </span>
          </h1>
          <motion.div
            className="h-1 w-32 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            {`Have a project in mind? I'd love to connect and bring it to life.`}
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full backdrop-blur-xl bg-slate-800/40 p-8 lg:p-10 rounded-2xl shadow-2xl flex flex-col gap-6 border border-slate-700/50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <Input
                id="input-name"
                placeholder="Your Name"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                className="pl-12 bg-slate-900/60 text-white placeholder:text-slate-400 border-slate-700/50 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 rounded-xl h-12 transition-all"
                required
              />
            </motion.div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Mail className="w-5 h-5 text-slate-400" />
              </div>
              <Input
                id="input-email"
                placeholder="Your Email"
                type="email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 bg-slate-900/60 text-white placeholder:text-slate-400 border-slate-700/50 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 rounded-xl h-12 transition-all"
                required
              />
            </motion.div>
          </div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.995 }}
          >
            <div className="absolute left-4 top-4 pointer-events-none">
              <MessageSquare className="w-5 h-5 text-slate-400" />
            </div>
            <Textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
              className="pl-12 pt-4 h-40 bg-slate-900/60 text-white placeholder:text-slate-400 border-slate-700/50 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 rounded-xl resize-none scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800 transition-all"
              required
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="relative w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold py-6 rounded-xl hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
              type="submit"
              disabled={isSubmitting}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Sparkles className="w-5 h-5" />
                    </motion.div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center"
        >
          <p className="text-sm text-slate-300 text-center">
            or email me directly at{" "}
            <motion.a
              href="mailto:nickowork13@gmail.com"
              className="text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-200 inline-flex items-center gap-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              nickowork13@gmail.com
            </motion.a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
