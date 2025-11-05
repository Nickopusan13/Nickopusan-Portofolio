"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { ReactNode } from "react";
import { motion } from "motion/react";
import ToasterProvider from "@/components/Toaster";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { PreviewData } from "@/utils/api";

export default function FinanceChart({
  children,
  onClick,
  reportResult,
  chartResult,
  loading,
}: {
  children: ReactNode;
  onClick: () => void;
  reportResult?: string | null;
  chartResult?: {
    data: PreviewData["preview"];
    chart_suggestion: string;
  } | null;
  loading: boolean;
}) {
  return (
    <Card className="w-full divide-y divide-white/5 rounded-xl bg-zinc-800 text-white">
      <ToasterProvider />
      <CardHeader className="text-2xl font-bold">
        <CardTitle>Report Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{children}</CardDescription>
        <CardAction className="w-full flex items-center justify-center mt-4">
          {chartResult && (
            <motion.button
              className="py-2 px-4 bg-zinc-600 rounded-lg cursor-pointer"
              onClick={onClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? (
                <span className="animate-pulse">Loading...</span>
              ) : (
                <span>Analyze Report</span>
              )}
            </motion.button>
          )}
        </CardAction>
        <div className="mt-6 prose prose-invert max-w-none font-sans leading-relaxed">
          <ReactMarkDown remarkPlugins={[remarkGfm]}>
            {reportResult}
          </ReactMarkDown>
        </div>
      </CardContent>
    </Card>
  );
}
