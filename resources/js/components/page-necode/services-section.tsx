"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Smartphone, Globe, Database, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Desain Grafis",
    description:
      "Menciptakan identitas visual yang kuat dan menarik untuk brand Anda dengan desain yang modern dan profesional.",
    features: ["Logo Design", "Brand Identity", "Print Design", "Digital Assets"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web System",
    description:
      "Membangun sistem web yang powerful dan scalable untuk mendukung operasional bisnis Anda secara optimal.",
    features: ["Custom Web App", "CMS Development", "E-commerce", "API Integration"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Mengembangkan aplikasi mobile yang user-friendly dan performant untuk iOS dan Android platform.",
    features: ["Native Development", "Cross Platform", "UI/UX Design", "App Store Optimization"],
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Database,
    title: "Editing Video",
    description: "Menyediakan layanan editing video profesional untuk kebutuhan marketing dan konten digital Anda.",
    features: ["Motion Graphics", "Color Grading", "Audio Mixing", "Social Media Content"],
    color: "from-orange-500 to-red-500",
  },
]

export function ServicesSection() {
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
    <section ref={ref} id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Layanan Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Layanan <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Kami menyediakan berbagai layanan digital yang komprehensif untuk membantu mengembangkan bisnis Anda dengan
            solusi teknologi terdepan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 cursor-pointer glass-effect border-0 transform ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground text-pretty">{service.description}</p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300 mt-4"
                  >
                    Pelajari Lebih Lanjut
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <h3 className="text-2xl font-bold mb-4">Butuh Solusi Custom?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Kami siap membantu Anda dengan solusi yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
              Konsultasikan proyek Anda dengan tim ahli kami.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
