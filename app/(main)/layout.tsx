import type { Metadata } from "next";
import { Geist, Geist_Mono, Fredoka, Kalam } from "next/font/google";
import "@/app/globals.css";
import Header from "@/components/main/header";
import Footer from "@/components/main/footer";
import TawkChat from "@/app/tawkChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fun, playful fonts for children's education site that work consistently across all devices
const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Ensures good loading performance
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-kalam",
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "iLearner's Hub - Interactive Learning Platform for Students",
  description:
    "Join iLearner's Hub for engaging courses, expert tutoring, and interactive learning experiences. From Primary to Advanced Highers, we make learning fun and effective.",
  keywords: [
    "online learning",
    "tutoring",
    "education",
    "primary",
    "secondary",
    "national 5",
    "highers",
    "advanced highers",
    "exam revision",
    "homework help",
    "interactive learning",
    "student support",
  ],
  authors: [{ name: "iLearner's Hub" }],
  openGraph: {
    title: "iLearner's Hub - Interactive Learning Platform",
    description:
      "Join thousands of students achieving their educational goals with expert tutoring and engaging courses.",
    url: "https://iLearner's Hub.com",
    siteName: "iLearner's Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iLearner's Hub - Interactive Learning Platform",
    description:
      "Join thousands of students achieving their educational goals with expert tutoring and engaging courses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} ${kalam.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <TawkChat />
      </body>
    </html>
  );
}
