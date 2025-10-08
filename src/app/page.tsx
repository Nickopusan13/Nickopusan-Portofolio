import type { Metadata } from "next";
import Main from "@/components/Main";

export const metadata: Metadata = {
  title: "Nickopusan Portofolio",
  description:
    "Python and Full-Stack Web Developer specializing in automation, web applications, data analysis, and scalable solutions.",
};

export default function MainPage() {
  return (
    <div>
      <Main />
    </div>
  );
}
