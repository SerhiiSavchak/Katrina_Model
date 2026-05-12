import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { stories } from "@/data/stories"
import Image from "next/image"
import Link from "next/link"

export function VisualStoriesSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <Reveal>
          <SectionHeading
            title="Selected Visual Stories"
            subtitle="Editorial series and creative explorations"
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stories.map((story, index) => (
            <Reveal key={story.id} delay={index * 100}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-card mb-6">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">
                  {story.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-3">
                  {story.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {story.description}
                </p>
                <Link
                  href="#"
                  className="text-sm text-foreground border-b border-foreground/30 hover:border-foreground transition-colors pb-0.5"
                >
                  View story
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
