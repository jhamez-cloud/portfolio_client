import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio - Full Stack Developer",
  description: "Showcase of web, mobile, desktop apps, games, and embedded systems projects",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/protodotio.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/protodotio.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/protodotio.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
