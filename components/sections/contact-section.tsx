"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Telegram", href: "https://telegram.org" },
  { label: "Email", href: "mailto:contact@katrinadragonfly.com" },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-6 text-balance">
              Let&apos;s create something visually intimate, clean and unforgettable.
            </h2>
            <p className="text-muted-foreground text-lg">
              For bookings, collaborations, creative projects and selected commercial work.
            </p>
          </div>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={100}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[160px]">
                  {link.label}
                </Button>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Contact Form */}
        <Reveal delay={200}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm text-muted-foreground mb-2">
                  Contact (Email or Telegram)
                </label>
                <input
                  type="text"
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm text-muted-foreground mb-2">
                Project Type
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors appearance-none cursor-pointer"
                required
              >
                <option value="">Select project type</option>
                <option value="fashion">Fashion Shoot</option>
                <option value="studio">Studio Session</option>
                <option value="beauty">Beauty Campaign</option>
                <option value="artnude">Art Nude Project</option>
                <option value="brand">Brand Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                required
              />
            </div>

            <div className="text-center pt-4">
              <Button type="submit" size="lg">
                Send request
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
