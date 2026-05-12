import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { merchItems } from "@/data/merch"
import Image from "next/image"

export function MerchSection() {
  return (
    <section id="merch" className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading
            title="Limited Merch"
            subtitle="Small personal drops inspired by Katrina's visual world"
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {merchItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 75}>
              <article className="group">
                <div className="relative aspect-square overflow-hidden bg-card mb-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-1">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {item.description}
                </p>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full">
                    Order via Telegram
                  </Button>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
