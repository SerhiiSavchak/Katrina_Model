import type { Metadata, Viewport } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

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
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
