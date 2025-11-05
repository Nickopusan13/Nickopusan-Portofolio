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
  title: "Muhammad Nickopusan Guntara – Full-Stack Python & Next.js Developer",
  description:
    "Muhammad Nickopusan Guntara is a full-stack developer specializing in Python, Next.js, automation, and modern web solutions. Building fast, scalable, and efficient websites and automation workflows.",
  icons: {
    icon: "/briefcase.svg",
  },
  openGraph: {
    title:
      "Muhammad Nickopusan Guntara – Full-Stack Python & Next.js Developer",
    description:
      "Muhammad Nickopusan Guntara is a full-stack developer specializing in Python, Next.js, automation, and modern web solutions. Building fast, scalable, and efficient websites and automation workflows.",
    url: "https://www.nickopusan.dev",
    siteName: "Muhammad Nickopusan Guntara",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Muhammad Nickopusan Guntara",
    "Nickopusan",
    "Guntara",
    "Muhammad Guntara",
    "Python Developer",
    "Next.js Developer",
    "Full-Stack Developer",
    "Web Automation",
    "Automation Developer",
    "Portfolio",
  ],
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
