import "../styles/globals.css";
// highlight.js theme for code block syntax highlighting
import "highlight.js/styles/github-dark.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Store from "./store";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  metadataBase: new URL("https://loiszhao.com"),
  title: "Zhao",
  description: "Personal website",
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
      <body className={GeistSans.className}>
        <Store>{children}</Store>
        <Analytics />
      </body>
    </html>
  );
}
