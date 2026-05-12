import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { modelStats } from "@/data/model-info"

export function ModelInfoSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading title="Model Info" />
        </Reveal>

        <Reveal delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border">
            {modelStats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-background p-6 md:p-8 text-center"
              >
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                  {stat.label}
                </span>
                <span className="font-serif text-lg md:text-xl text-foreground">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
