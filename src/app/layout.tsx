import "../styles/globals.css";
import React from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Store from "./store";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zhao",
  description: "It's Lois btw",
  applicationName: "zmzlois",
  keywords: [
    "zmzlois",
    "lois",
    "Machine Learning",
    "Software Development",
    "Full stack development",
    "Frontend Design",
    "UK Global Talent Visa",
    "Global Talent Visa",
    "GTV",
    "UK",
    "United Kingdom",
    "Chinese",
    "London",
    "London Expat",
  ],
  creator: "zmzlois",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Store>{children}</Store>
        <Analytics />
      </body>
    </html>
  );
}
