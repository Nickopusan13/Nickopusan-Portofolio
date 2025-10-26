"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { motion } from "framer-motion";
import { postUserMessage } from "@/utils/api";
import { useState } from "react";
import toast from "react-hot-toast";
import ToasterProvider from "../Toaster";

export default function FourPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postUserMessage({
        name,
        email,
        message,
      });
      toast.success("Message sent!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something Wrong";
      toast.error(message, { duration: 5000 });
    }
  };
  return (
    <section
      id="contact-me"
      className="hero-section bg-zinc-900 bg-cover bg-center h-screen w-full flex items-center justify-center p-6 snap-start"
    >
      <ToasterProvider />
      <div className="flex flex-col items-center text-white w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg">
            {`LET'S BUILD SOMETHING AMAZING!`}
          </h1>
          <p className="text-lg mt-3 text-gray-200 max-w-xl mx-auto">
            {`Have a project in mind? I'd love to connect and bring it to life.`}
          </p>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full backdrop-blur-md bg-white/10 p-8 rounded-2xl shadow-2xl flex flex-col gap-5 border border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              id="input-name"
              placeholder="Your Name"
              value={name}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              className="bg-white/20 text-black placeholder:text-black placeholder:opacity-70 border-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <Input
              id="input-email"
              placeholder="Your Email"
              value={email}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/20 text-black placeholder:text-black placeholder:opacity-70 border-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>
          <Textarea
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={10}
            className="bg-white/20 text-black h-30 placeholder:text-black placeholder:opacity-70 border-none focus:ring-2 focus:ring-pink-400 resize-none scrollbar-thin scrollbar-thumb-white scrollbar-track-white/10"
            required
          />
          <Button
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-2 rounded-lg hover:opacity-90 transition"
            type="submit"
          >
            Send Message
          </Button>
        </motion.form>
        <p className="text-sm text-gray-400 mt-6 text-center">
          or email me directly at{" "}
          <a
            href="mailto:nickowork13@gmail.com"
            className="text-pink-400 font-medium hover:underline hover:text-pink-300 transition-colors duration-200"
          >
            nickowork13@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
