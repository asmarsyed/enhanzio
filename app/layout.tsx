import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Lato } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/landingpage/footer";
import Header from "./components/landingpage/header";
import { Analytics } from "@vercel/analytics/react";

import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  subsets: ["latin"],
  weight: "100",
});

export const metadata: Metadata = {
  title: "Enhanzio",
  description: "Ease your DMAIC processes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo Enhanzio.png" />
      </head>
      <main className="bg-white">
        {children}
        <Analytics />
      </main>
    </html>
  );
}
