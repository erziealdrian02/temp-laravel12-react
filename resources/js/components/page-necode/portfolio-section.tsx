"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Platform e-commerce modern dengan fitur lengkap untuk UMKM Indonesia",
    image: "/modern-ecommerce-interface.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Food Delivery App",
    category: "Mobile Development",
    description: "Aplikasi delivery makanan dengan real-time tracking dan payment gateway",
    image: "/food-delivery-app.png",
    technologies: ["React Native", "Firebase", "Google Maps", "PayPal"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Corporate Website",
    category: "Web Design",
    description: "Website corporate dengan desain modern dan sistem manajemen konten",
    image: "/modern-corporate-website.png",
    technologies: ["Next.js", "Tailwind", "Sanity CMS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Learning Management System",
    category: "Web System",
    description: "Platform pembelajaran online dengan fitur video streaming dan quiz interaktif",
    image: "/online-learning-platform.png",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Brand Identity Design",
    category: "Graphic Design",
    description: "Desain identitas brand lengkap untuk startup teknologi",
    image: "/modern-brand-identity-design-mockup.jpg",
    technologies: ["Adobe Illustrator", "Figma", "After Effects", "Photoshop"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    title: "Marketing Video Campaign",
    category: "Video Editing",
    description: "Video campaign marketing untuk produk teknologi dengan motion graphics",
    image: "/video-editing-timeline-interface.jpg",
    technologies: ["Premiere Pro", "After Effects", "Cinema 4D", "DaVinci"],
    liveUrl: "#",
    githubUrl: "#",
    gradient: "from-teal-500 to-blue-500",
  },
]

const categories = [
  "Semua",
  "Web Development",
  "Mobile Development",
  "Web Design",
  "Web System",
  "Graphic Design",
  "Video Editing",
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = React.useState("Semua")
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLElement>(null)

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "Semua") return portfolioItems
    return portfolioItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

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
    <section ref={ref} id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Portfolio Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Portfolio <span className="gradient-text">Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Lihat berbagai proyek yang telah kami kerjakan dengan teknologi terdepan dan desain yang memukau untuk
            berbagai klien dari berbagai industri.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  : "hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className={`group overflow-hidden glass-effect border-0 hover:shadow-2xl transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white text-xs font-medium`}
                >
                  {item.category}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 text-pretty">{item.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {item.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                >
                  Lihat Detail
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 hover:bg-primary/10 hover:border-primary/50 bg-transparent"
            >
              Lihat Semua Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <h3 className="text-2xl font-bold mb-4">Siap Memulai Proyek Anda?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Mari diskusikan ide dan kebutuhan proyek Anda. Tim ahli kami siap membantu mewujudkan visi digital Anda
              dengan solusi terbaik.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3"
            >
              Mulai Diskusi Proyek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
