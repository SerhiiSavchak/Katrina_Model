import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { AppProviders } from "@/components/providers/app-providers"
import { SiteLoader } from "@/components/layout/site-loader"

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
  title: "Katrina Dragonfly — International Model",
  description:
    "International model portfolio of Katrina Dragonfly. Fashion, studio, beauty and art nude projects across Ukraine and Europe.",
  keywords: [
    "model",
    "fashion model",
    "beauty",
    "editorial",
    "studio photography",
    "art nude",
    "Ukraine",
    "Europe",
  ],
  openGraph: {
    title: "Katrina Dragonfly — International Model",
    description:
      "International model portfolio of Katrina Dragonfly. Fashion, studio, beauty and art nude projects across Ukraine and Europe.",
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
  children: React.ReactNode
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
