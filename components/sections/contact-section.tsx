"use client"

import { Reveal } from "@/components/ui/reveal"
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
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-32 md:py-40 lg:py-52 bg-dark text-dark-foreground relative overflow-hidden">
      {/* Section Number */}
      <div className="absolute top-16 md:top-20 left-6 md:left-10 lg:left-16">
        <Reveal>
          <span className="text-[10px] uppercase tracking-[0.3em] text-dark-foreground/30">
            09 / Contact
          </span>
        </Reveal>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Large Editorial Headline */}
        <div className="mb-20 md:mb-28">
          <Reveal>
            <h2 className="editorial-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-dark-foreground leading-[1.15] max-w-4xl">
              Let&apos;s create something 
              <span className="editorial-italic"> visually intimate,</span>
              <br className="hidden md:block" />
              clean and 
              <span className="editorial-italic"> unforgettable.</span>
            </h2>
          </Reveal>
          
          <Reveal delay={100}>
            <p className="mt-8 text-dark-foreground/50 text-base md:text-lg max-w-xl">
              For bookings, collaborations, creative projects and selected commercial work.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Social Links */}
          <div className="col-span-12 lg:col-span-4">
            <Reveal delay={150}>
              <div className="mb-10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-dark-foreground/30 block mb-6">
                  Direct Contact
                </span>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center justify-between py-4 border-b border-dark-foreground/10 group"
                    >
                      <span className="text-dark-foreground/80 group-hover:text-dark-foreground transition-colors duration-300">
                        {link.label}
                      </span>
                      <span className="text-dark-foreground/30 group-hover:translate-x-1 transition-transform duration-300">
                        &rarr;
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Contact Form */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal delay={200}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-[10px] uppercase tracking-[0.2em] text-dark-foreground/30 mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-dark-foreground/20 px-0 py-3 text-dark-foreground focus:outline-none focus:border-dark-foreground/50 transition-colors placeholder:text-dark-foreground/20"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="contact" 
                      className="block text-[10px] uppercase tracking-[0.2em] text-dark-foreground/30 mb-3"
                    >
                      Contact
                    </label>
                    <input
                      type="text"
                      id="contact"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full bg-transparent border-b border-dark-foreground/20 px-0 py-3 text-dark-foreground focus:outline-none focus:border-dark-foreground/50 transition-colors placeholder:text-dark-foreground/20"
                      placeholder="Email or Telegram"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="projectType" 
                    className="block text-[10px] uppercase tracking-[0.2em] text-dark-foreground/30 mb-3"
                  >
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent border-b border-dark-foreground/20 px-0 py-3 text-dark-foreground focus:outline-none focus:border-dark-foreground/50 transition-colors appearance-none cursor-pointer"
                    required
                  >
                    <option value="" className="bg-dark text-dark-foreground">Select project type</option>
                    <option value="fashion" className="bg-dark text-dark-foreground">Fashion Shoot</option>
                    <option value="studio" className="bg-dark text-dark-foreground">Studio Session</option>
                    <option value="beauty" className="bg-dark text-dark-foreground">Beauty Campaign</option>
                    <option value="artnude" className="bg-dark text-dark-foreground">Art Nude Project</option>
                    <option value="brand" className="bg-dark text-dark-foreground">Brand Collaboration</option>
                    <option value="other" className="bg-dark text-dark-foreground">Other</option>
                  </select>
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-[10px] uppercase tracking-[0.2em] text-dark-foreground/30 mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border-b border-dark-foreground/20 px-0 py-3 text-dark-foreground focus:outline-none focus:border-dark-foreground/50 transition-colors resize-none placeholder:text-dark-foreground/20"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <div className="pt-6">
                  <button 
                    type="submit" 
                    className="inline-flex items-center justify-center bg-dark-foreground text-dark text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-dark-foreground/90 transition-colors duration-300"
                  >
                    Send request
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
