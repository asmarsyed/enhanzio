"use client";
import { useState, useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Home from "./page";
import Navbar from "../components/navbar";
import Footer from "../components/landingpage/footer";
import Headerphase from "../components/headerphase";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="bg-[#F3F7FC]">
        <main className="flex">
          <Headerphase />
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
