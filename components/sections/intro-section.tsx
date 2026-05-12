import { Reveal } from "@/components/ui/reveal"

export function IntroSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-background">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <Reveal>
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed text-center mb-8">
            &ldquo;Katrina Dragonfly is an international model working across fashion, 
            studio, beauty and art nude photography.&rdquo;
          </blockquote>
        </Reveal>
        
        <Reveal delay={150}>
          <p className="text-muted-foreground text-center text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Her visual presence blends softness, confidence and cinematic elegance — 
            made for selected creative and commercial projects.
          </p>
        </Reveal>

        {/* Decorative line */}
        <Reveal delay={300}>
          <div className="flex justify-center mt-16">
            <div className="w-24 h-px bg-border" />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
