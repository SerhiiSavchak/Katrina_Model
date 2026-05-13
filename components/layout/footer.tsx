import Link from "next/link"

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Telegram", href: "https://telegram.org" },
  { label: "Email", href: "mailto:contact@katrinadragonfly.com" },
]

const navLinks = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#booking", label: "Booking" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-foreground/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Main Footer */}
        <div className="py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-12 gap-8 lg:gap-16">
            {/* Logo / Name */}
            <div className="col-span-12 lg:col-span-4">
              <Link href="/" className="block mb-4">
                <span className="editorial-display text-3xl md:text-4xl text-foreground">
                  KATRINA
                </span>
                <br />
                <span className="editorial-italic text-2xl md:text-3xl text-foreground/60">
                  Dragonfly
                </span>
              </Link>
              <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mt-4">
                International Model Portfolio
              </p>
            </div>

            {/* Navigation */}
            <div className="col-span-6 lg:col-span-2 lg:col-start-7">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 block mb-6">
                Navigation
              </span>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="col-span-6 lg:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 block mb-6">
                Connect
              </span>
              <ul className="space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-foreground/50 hover:text-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="col-span-12 lg:col-span-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/30 block mb-6">
                Work with me
              </span>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center border border-foreground/20 text-foreground text-[11px] uppercase tracking-[0.2em] px-6 py-3 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-foreground/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-foreground/30 leading-relaxed text-center md:text-left max-w-xl">
              All visual content is artistic and editorial. Katrina Dragonfly is 18+. 
              No explicit services are offered.
            </p>
            <p className="text-[10px] text-foreground/30">
              &copy; {new Date().getFullYear()} Katrina Dragonfly
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
