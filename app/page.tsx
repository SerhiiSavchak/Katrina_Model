import { HeroSection } from "@/components/sections/hero-section"
import { IntroSection } from "@/components/sections/intro-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { VisualStoriesSection } from "@/components/sections/visual-stories-section"
import { AboutSection } from "@/components/sections/about-section"
import { ModelInfoSection } from "@/components/sections/model-info-section"
import { BookingSection } from "@/components/sections/booking-section"
import { MerchSection } from "@/components/sections/merch-section"
import { ContactSection } from "@/components/sections/contact-section"

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
