import type { Metadata, Viewport } from "next"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
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
  themeColor: "#f7f6f4",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} bg-background`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
