import FinanceMain from "@/components/app/finance/FinanceMain";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nickopusan Portfolio",
  description:
    "Python and Full-Stack Web Developer specializing in automation, web applications, data analysis, and scalable solutions.",
};

export default function FinanceDashboard() {
  return <FinanceMain />;
}
