import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "<> CodeCraft | Enterprise ICT Solutions & Cybersecurity",
  description:
    "Professional ICT consultancy providing enterprise-grade cybersecurity, system upgrades, and custom software solutions for schools, hospitals, SMEs, and NGOs. Security-first. Reliability-focused.",
  generator: "v0.app",
  keywords:
    "ICT consulting, cybersecurity solutions, IT services, school ICT infrastructure, hospital IT systems, business IT consulting",
  metadataBase: new URL("https://codecraft-ict.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codecraft-ict.com",
    siteName: "CodeCraft ICT Solutions",
    title: "<> CodeCraft | Enterprise ICT Solutions & Cybersecurity",
    description:
      "Professional ICT consultancy providing enterprise-grade cybersecurity, system upgrades, and custom software solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@codecraft_ict",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e293b" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <WhatsAppWidget />
        <Analytics />
      </body>
    </html>
  )
}
