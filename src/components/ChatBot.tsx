"use client";

import { useState, useEffect } from "react";
import { postUserChatBot } from "@/utils/api";
import { Spinner } from "@/components/ui/spinner";
import ReactMarkdown from "react-markdown";

interface Message {
  sender: "user" | "bot";
  text: string;
}

interface ChatBotProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  sessionId: string | undefined;
  setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export default function ChatBot({
  messages,
  setMessages,
  sessionId,
  setSessionId,
}: ChatBotProps) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!sessionId && typeof window !== "undefined") {
      const existing = localStorage.getItem("chatbot_session_id");
      if (existing) setSessionId(existing);
    }
  }, [sessionId, setSessionId]);

  useEffect(() => {
    if (sessionId && typeof window !== "undefined") {
      localStorage.setItem("chatbot_session_id", sessionId);
    }
  }, [sessionId]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userInput = input.trim();
    const userMessage: Message = { sender: "user", text: userInput };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);
    try {
      const res = await postUserChatBot({
        prompt: userInput,
        session_id: sessionId,
      });
      const botMessage: Message = { sender: "bot", text: res.reply };
      setMessages((prev) => [...prev, botMessage]);
      setSessionId(res.session_id);
    } catch (error: unknown) {
      const errorMsg: Message = {
        sender: "bot",
        text: "I'm having trouble connecting. Please try again.",
      };
      setMessages((prev) => [...prev, errorMsg]);
      console.error("Chat error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full text-white">
      <div className="flex flex-col items-center justify-center pt-2 pb-1">
        <h1 className="text-base font-semibold">Welcome to chatbot</h1>
        <p className="text-xs text-white/70">
          Please you can tell anything and ask
        </p>
      </div>
      <div className="border-b border-white/10 my-2" />

      <div className="flex-1 overflow-y-auto scrollbar-none space-y-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && <Spinner />}
      </div>
      <div className="flex gap-2 border-t border-white/10 mt-2 pt-2 px-3 pb-2 bg-transparent">
        <input
          className="flex-1 bg-white/10 text-white rounded-xl px-3 py-2 outline-none text-sm"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 px-3 py-2 rounded-xl font-medium hover:bg-blue-700 transition text-sm disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
