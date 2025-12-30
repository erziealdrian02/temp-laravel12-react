"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Target, Zap } from "lucide-react"

const features = [
  "Tim profesional berpengalaman 5+ tahun",
  "Teknologi terdepan dan modern",
  "Proses development yang terstruktur",
  "Support dan maintenance berkelanjutan",
  "Harga kompetitif dan transparan",
  "Komunikasi yang responsif 24/7",
]

const values = [
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Bekerja dengan tim ahli yang berpengalaman dalam berbagai teknologi modern",
  },
  {
    icon: Target,
    title: "Fokus Hasil",
    description: "Mengutamakan kualitas dan kepuasan klien dalam setiap proyek yang dikerjakan",
  },
  {
    icon: Zap,
    title: "Inovasi Berkelanjutan",
    description: "Selalu mengikuti perkembangan teknologi terbaru untuk solusi terbaik",
  },
]

export function AboutSection() {
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

  return (
    <section ref={ref} id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Tentang Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Tentang <span className="gradient-text">Necode</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Necode adalah grup freelance profesional yang menghadirkan solusi digital terdepan untuk mengembangkan
            bisnis Anda dengan teknologi modern dan inovatif.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Mengapa Memilih Necode?</h3>
            <p className="text-muted-foreground mb-8 text-pretty">
              Dengan pengalaman lebih dari 5 tahun di industri teknologi, kami telah membantu ratusan klien mewujudkan
              visi digital mereka. Tim kami terdiri dari para ahli yang berpengalaman dalam berbagai bidang teknologi
              modern.
            </p>

            <div className="grid gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 transform transition-all duration-500 ${
                    isVisible ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <img
                  src="/modern-office-team-working-on-computers-coding-dev.jpg"
                  alt="Tim Necode sedang bekerja"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">5+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card
                key={index}
                className={`glass-effect hover:shadow-lg transition-all duration-300 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
