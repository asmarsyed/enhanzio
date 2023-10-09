import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Header from './components/header'

import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Enhanzio',
  description: 'Ease your DMAIC processes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
        <link rel='icon' href='/Logo Enhanzio.png'/>
      </head>
    <body className="bg-white">
      {children}
    </body>
  </html>
  )
}