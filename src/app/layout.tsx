import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#090a0f",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://my-showcase-spark-21.lovable.app"),
  title: "Sapna Kumari | Software Developer",
  description:
    "Portfolio and resume of Sapna Kumari — Software Developer specializing in full-stack web applications, backend APIs, and test automation.",
  keywords: [
    "Sapna Kumari",
    "Software Developer",
    "Full Stack Developer",
    "Backend Developer",
    "QA Engineer",
    "Python Developer",
    "React Developer",
    "OneSpider",
  ],
  authors: [{ name: "Sapna Kumari" }],
  creator: "Sapna Kumari",
  openGraph: {
    title: "Sapna Kumari | Software Developer",
    description:
      "Software Developer | Full Stack Web & Backend APIs",


    url: "https://my-showcase-spark-21.lovable.app/",
    siteName: "Sapna Kumari Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Sapna Kumari",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#090a0f] text-slate-100 antialiased selection:bg-purple-500/30 selection:text-purple-200">
        {children}
      </body>
    </html>
  );
}

