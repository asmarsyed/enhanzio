"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeContextProvider } from '../context/ThemeContext'

import Home from './page'
import Navbar from '../components/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeContextProvider>
        <head>
        </head>
        <body className="bg-white">
        <Navbar />
          {children}
        </body>
      </ThemeContextProvider>
  </html>
  )
}