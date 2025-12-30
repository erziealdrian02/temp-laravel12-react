"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react"

const footerLinks = {
  company: [
    { name: "Tentang Kami", href: "#about" },
    { name: "Tim", href: "#team" },
    { name: "Karir", href: "#" },
    { name: "Blog", href: "#" },
  ],
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile App", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Digital Marketing", href: "#services" },
  ],
  resources: [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Case Studies", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Support", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
}

const socialLinks = [
  { name: "Github", icon: Github, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  const [email, setEmail] = React.useState("")
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter subscription:", email)
    setEmail("")
    alert("Terima kasih! Anda telah berlangganan newsletter kami.")
  }

  return (
    <footer ref={ref} className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div
              className={`lg:col-span-1 transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">N</span>
                </div>
                <span className="text-xl font-bold gradient-text">Necode</span>
              </div>
              <p className="text-muted-foreground mb-6 text-pretty">
                Grup freelance profesional yang menghadirkan solusi digital terdepan untuk mengembangkan bisnis Anda
                dengan teknologi modern dan inovatif.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Jakarta Pusat, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+62 21 1234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">hello@necode.dev</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-2 grid md:grid-cols-3 gap-8">
              <div
                className={`transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <h4 className="font-semibold mb-4">Perusahaan</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h4 className="font-semibold mb-4">Layanan</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div
              className={`transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground text-sm mb-4 text-pretty">
                Dapatkan update terbaru tentang teknologi, tips, dan insight dari tim Necode.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-background/50"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground"
                >
                  Berlangganan
                </Button>
              </form>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <Button
                      key={social.name}
                      variant="outline"
                      size="icon"
                      className="w-9 h-9 hover:bg-primary/10 hover:border-primary/50 bg-transparent"
                      asChild
                    >
                      <Link href={social.href}>
                        <Icon className="h-4 w-4" />
                        <span className="sr-only">{social.name}</span>
                      </Link>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Necode. All rights reserved. Made with ❤️ in Indonesia.
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="w-9 h-9 hover:bg-primary/10 hover:border-primary/50 bg-transparent"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Scroll to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
