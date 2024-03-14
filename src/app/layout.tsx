import "../styles/globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import Store from "./store";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import Head from "next/head";

export const metadata: Metadata = {
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
      <Head>
        {" "}
        <meta name="darkreader-lock" />
      </Head>
      <body className={GeistSans.className}>
        <Store>{children}</Store>
        <Analytics />
      </body>
    </html>
  );
}
