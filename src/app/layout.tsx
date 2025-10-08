import type { Metadata } from "next";
import { Love_Ya_Like_A_Sister } from "next/font/google";
import "./globals.css";

const loveYaLikeASister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  variable: "--font-love",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nickopusan Portofolio",
  description:
    "Python and Full-Stack Web Developer specializing in automation, web applications, data analysis, and scalable solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${loveYaLikeASister.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
