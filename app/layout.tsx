import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Inter, Space_Grotesk } from "next/font/google"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { SiteLoader } from "@/components/layout/site-loader"
import { AppProviders } from "@/components/providers/app-providers"
import {
  getSiteMetadataBase,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_TITLE,
} from "@/lib/site-meta"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  metadataBase: getSiteMetadataBase(),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#f5f4f2",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} bg-background`}>
      <head>
        <link rel="preload" href="/videos/hero-katrina.mp4" as="video" type="video/mp4" />
      </head>
      <body className="flex min-h-screen flex-col antialiased font-sans">
        <AppProviders>
          <SiteLoader />
          <Header />
          <main className="min-w-0 flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  )
}
