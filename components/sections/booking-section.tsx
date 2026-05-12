import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"

const services = [
  "Fashion shoots",
  "Studio sessions",
  "Beauty campaigns",
  "Lingerie / boudoir",
  "Art nude projects",
  "Brand collaborations",
  "Creative photo & video projects",
]

export function BookingSection() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading
            title="Available for selected projects"
            subtitle="Professional collaborations with photographers, studios and brands"
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 border border-border bg-background hover:border-primary/30 transition-colors duration-300"
              >
                <span className="text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto">
                Book via Instagram
              </Button>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Contact on Telegram
              </Button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
