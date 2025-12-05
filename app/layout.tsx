import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MD Asif Mahmud - Frontend Developer & React.js Specialist",
  description:
    "Professional frontend developer specializing in React.js, Next.js, and MERN stack. Building high-performance web applications with modern technologies.",
  keywords: "React, Next.js, Frontend Developer, JavaScript, Tailwind CSS, Web Development, MERN Stack",
  authors: [{ name: "MD Asif Mahmud" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mdasifmahmud.dev",
    title: "MD Asif Mahmud - Frontend Developer",
    description: "Professional portfolio of MD Asif Mahmud - React.js & Next.js Developer",
    images: [
      {
        url: "https://i.ibb.co.com/kskdqjwB/1759042754809.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Asif Mahmud - Frontend Developer",
    description: "Professional frontend developer specializing in React.js and Next.js",
    images: ["https://i.ibb.co.com/kskdqjwB/1759042754809.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFB22C" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
