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
  title: "Nickopusan Portfolio – Python & Next.js Developer",
  description:
    "Full-stack developer specializing in Python, Next.js, and automation tools. I build modern websites and automated solutions to solve complex problems efficiently.",
  icons: {
    icon: "/briefcase.svg",
  },
  openGraph: {
    title: "Nickopusan Portfolio – Python & Next.js Developer",
    description:
      "Full-stack developer specializing in Python, Next.js, and automation tools. I build modern websites and automated solutions to solve complex problems efficiently.",
    url: "https://www.nickopusan.dev",
    siteName: "Nickopusan",
    locale: "en_US",
    type: "website",
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
