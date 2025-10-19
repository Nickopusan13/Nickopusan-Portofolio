import type { Metadata } from "next";
import { Love_Ya_Like_A_Sister } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import GoogletagManager from "@/components/GTM";
import { SpeedInsights } from "@vercel/speed-insights/next";

const loveYaLikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  variable: "--font-love",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nickopusan Portofolio",
  description:
    "I'm a Python expert who builds complete web solutions and automation tools. From creating modern websites with Next.js to automating repetitive tasks, to solve complex problems and improve efficiency.",
  icons: {
    icon: "/briefcase.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="overflow-y-hidden scroll-smooth" lang="en">
      <body
        className={`${loveYaLikeASister.variable} antialiased h-full bg-black`}
      >
        <GoogletagManager />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
