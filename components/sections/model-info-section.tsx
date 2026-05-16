"use client"

import type { TranslationTree } from "@/data/translations"
import { Reveal } from "@/components/ui/reveal"
import { modelStats, type ModelStatId } from "@/data/model-info"
import { useLocale } from "@/components/providers/app-providers"

function displayValue(id: ModelStatId, raw: string, t: TranslationTree) {
  switch (id) {
    case "hair":
      return t.modelInfo.statValues.hairBrown
    case "eyes":
      return t.modelInfo.statValues.eyesBrown
    case "location":
      return t.modelInfo.statValues.location
    case "availability":
      return t.modelInfo.statValues.availability
    default:
      return raw
  }
}

export function ModelInfoSection() {
  const { t } = useLocale()

  return (
    <section className="section-ambient-in bg-background py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-12">
        <div className="mb-16 md:mb-20">
          <Reveal variant="text">
            <p className="label-sm mb-6 text-foreground/35">{t.modelInfo.label}</p>
          </Reveal>
          <Reveal variant="text" delay={100}>
            <h2 className="display-xl max-w-full text-pretty text-[clamp(1.75rem,5.5vw,3.75rem)] leading-[0.95] text-foreground">
              {t.modelInfo.title}
            </h2>
          </Reveal>
        </div>

        <Reveal variant="text" delay={150}>
          <div className="border-t border-foreground/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {modelStats.map((stat, index) => (
                <div
                  key={stat.id}
                  className="border-b border-r border-foreground/10 p-6 last:border-r-0 md:p-8 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0 lg:[&:nth-child(3n)]:border-r lg:[&:nth-child(4n)]:border-r-0"
                >
                  <span className="label-xs mb-4 block text-foreground/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="display-lg mb-2 block text-3xl text-foreground md:text-4xl">
                    {displayValue(stat.id, stat.value, t)}
                  </span>

                  <span className="label-xs text-foreground/40">
                    {t.modelInfo.stats[stat.id]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
