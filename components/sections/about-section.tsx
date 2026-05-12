import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"

const highlights = [
  "Based between Ukraine and Europe",
  "Available for selected bookings",
  "Open to fashion, beauty, studio and creative projects",
  "Works with photographers, studios and brands",
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading title="About Katrina" />
        </Reveal>

        <div className="max-w-3xl mx-auto text-center">
          <Reveal delay={100}>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-12">
              Katrina Dragonfly is a model available for selected fashion, beauty, 
              studio and art nude projects. Her work is built around expressive posing, 
              soft cinematic presence and a refined visual language.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {highlights.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
