"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface StatItemProps {
  value: string
  label: string
  delay: number
}

function StatItem({ value, label, delay }: StatItemProps) {
  const [count, setCount] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

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

  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const targetValue = Number.parseInt(value.replace(/\D/g, ""))
        const duration = 2000
        const steps = 60
        const increment = targetValue / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= targetValue) {
            setCount(targetValue)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, value, delay])

  return (
    <div
      ref={ref}
      className={`text-center transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
        {count}
        {value.includes("+") && "+"}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Animated Gradient Blobs - Lava Lamp Effect */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Blob 1 - Purple */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#733aff] to-[#f53aff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />

          {/* Blob 2 - Pink */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-[#f53aff] to-[#ff6b9d] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

          {/* Blob 3 - Yellow */}
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-[#e1ff2b] to-[#ffd700] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

          {/* Blob 4 - Cyan */}
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-[#00d4ff] to-[#733aff] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-6000" />

          {/* Blob 5 - Orange */}
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-[#ff6b9d] to-[#e1ff2b] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-3000" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full opacity-30 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
            {t("hero.title")} <span className="gradient-text">{t("hero.titleHighlight")}</span> {t("hero.titleEnd")}
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-balance mb-8">
            {t("hero.subtitle")} <span className="gradient-text">{t("hero.subtitleHighlight")}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto mb-12">
            {t("hero.description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3 text-lg group"
            >
              {t("hero.startProject")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10 px-8 py-3 text-lg group bg-transparent"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              {t("hero.viewDemo")}
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          <StatItem value="500+" label={t("hero.stats.projects")} delay={200} />
          <StatItem value="100+" label={t("hero.stats.clients")} delay={400} />
          <StatItem value="50+" label={t("hero.stats.team")} delay={600} />
          <StatItem value="5+" label={t("hero.stats.experience")} delay={800} />
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}
