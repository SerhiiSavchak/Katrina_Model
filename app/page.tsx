import dynamic from "next/dynamic"
import { HeroSection } from "@/components/sections/hero-section"

const IntroSection = dynamic(() =>
  import("@/components/sections/intro-section").then((m) => ({ default: m.IntroSection }))
)
const PortfolioSection = dynamic(() =>
  import("@/components/sections/portfolio-section").then((m) => ({ default: m.PortfolioSection }))
)
const VisualStoriesSection = dynamic(() =>
  import("@/components/sections/visual-stories-section").then((m) => ({
    default: m.VisualStoriesSection,
  }))
)
const AboutSection = dynamic(() =>
  import("@/components/sections/about-section").then((m) => ({ default: m.AboutSection }))
)
const ModelInfoSection = dynamic(() =>
  import("@/components/sections/model-info-section").then((m) => ({ default: m.ModelInfoSection }))
)
const BookingSection = dynamic(() =>
  import("@/components/sections/booking-section").then((m) => ({ default: m.BookingSection }))
)
const MerchSection = dynamic(() =>
  import("@/components/sections/merch-section").then((m) => ({ default: m.MerchSection }))
)
const ContactSection = dynamic(() =>
  import("@/components/sections/contact-section").then((m) => ({ default: m.ContactSection }))
)

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PortfolioSection />
      <VisualStoriesSection />
      <AboutSection />
      <ModelInfoSection />
      <BookingSection />
      <MerchSection />
      <ContactSection />
    </>
  )
}
