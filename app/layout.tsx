import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Katrina Dragonfly — International Model Portfolio",
  description:
    "Premium portfolio of Katrina Dragonfly, international model for fashion, studio, beauty and art nude projects across Ukraine and Europe.",
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
    title: "Katrina Dragonfly — International Model Portfolio",
    description:
      "Premium portfolio of Katrina Dragonfly, international model for fashion, studio, beauty and art nude projects across Ukraine and Europe.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#faf9f7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
