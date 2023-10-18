"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Home from "./page";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-white">
        <main className="flex">
          <Navbar />
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
