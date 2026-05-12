import Link from "next/link"

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Telegram", href: "https://telegram.org" },
  { label: "Email", href: "mailto:contact@katrinadragonfly.com" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="font-serif text-2xl tracking-tight text-foreground mb-2">
            Katrina Dragonfly
          </Link>
          <p className="text-muted-foreground text-sm mb-8">
            International Model Portfolio
          </p>

          <div className="flex items-center gap-8 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="w-full pt-8 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              All visual content is artistic and editorial. Katrina Dragonfly is 18+. 
              No explicit services are offered.
            </p>
            <p className="text-xs text-muted-foreground mt-4">
              &copy; {new Date().getFullYear()} Katrina Dragonfly. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
