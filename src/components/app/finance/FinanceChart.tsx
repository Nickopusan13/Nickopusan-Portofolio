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
import { financeChart } from "@/utils/api";
import type { ChartData } from "@/utils/api";

export default function FinanceChart({ children }: { children: ReactNode }) {
  return (
    <Card className="w-full divide-y divide-white/5 rounded-xl bg-zinc-800 text-white">
      <CardHeader className="text-2xl font-bold">
        <CardTitle>Report Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{children}</CardDescription>
        <CardAction className="w-full flex items-center justify-center mt-4">
          <motion.button
            className="py-2 px-4 bg-zinc-600 rounded-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Analyze Report
          </motion.button>
        </CardAction>
      </CardContent>
    </Card>
  );
}
