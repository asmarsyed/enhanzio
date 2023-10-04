"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Home from './page'
import Navbar from '../components/navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="bg-white">
        <main className="">
          <div className="flex">
          <Navbar />
          {children}
          </div>
        </main>
      </body>
    </html>
  )
}
