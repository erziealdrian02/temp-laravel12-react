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
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Web Design",
  "Web System",
  "Graphic Design",
  "Video Editing",
]

const techColors: Record<string, string> = {
  React: "bg-gradient-to-r from-[#61dafb] to-[#4fa8c5]",
  "React Native": "bg-gradient-to-r from-[#61dafb] to-[#4fa8c5]",
  "Node.js": "bg-gradient-to-r from-[#68a063] to-[#4d7c47]",
  MongoDB: "bg-gradient-to-r from-[#4db33d] to-[#3a8c2f]",
  Stripe: "bg-gradient-to-r from-[#635bff] to-[#4b45cc]",
  Firebase: "bg-gradient-to-r from-[#ffca28] to-[#f57c00]",
  "Google Maps": "bg-gradient-to-r from-[#4285f4] to-[#34a853]",
  PayPal: "bg-gradient-to-r from-[#0070ba] to-[#005a94]",
  "Next.js": "bg-gradient-to-r from-[#000000] to-[#333333]",
  Tailwind: "bg-gradient-to-r from-[#06b6d4] to-[#0891b2]",
  "Sanity CMS": "bg-gradient-to-r from-[#f03e2f] to-[#c72e21]",
  Vercel: "bg-gradient-to-r from-[#000000] to-[#333333]",
  "Vue.js": "bg-gradient-to-r from-[#42b883] to-[#35495e]",
  Laravel: "bg-gradient-to-r from-[#ff2d20] to-[#cc2419]",
  MySQL: "bg-gradient-to-r from-[#00758f] to-[#005d73]",
  AWS: "bg-gradient-to-r from-[#ff9900] to-[#cc7a00]",
  "Adobe Illustrator": "bg-gradient-to-r from-[#ff9a00] to-[#cc7a00]",
  Figma: "bg-gradient-to-r from-[#f24e1e] to-[#a259ff]",
  "After Effects": "bg-gradient-to-r from-[#9999ff] to-[#6666cc]",
  Photoshop: "bg-gradient-to-r from-[#31a8ff] to-[#0078d4]",
  "Premiere Pro": "bg-gradient-to-r from-[#9999ff] to-[#6666cc]",
  "Cinema 4D": "bg-gradient-to-r from-[#011a6a] to-[#00134d]",
  DaVinci: "bg-gradient-to-r from-[#e63946] to-[#b02a37]",
}

export function PortfolioSectionLight() {
  const [activeCategory, setActiveCategory] = React.useState("All")
  const [selectedProject, setSelectedProject] = React.useState(portfolioItems[0])
  const [isAnimating, setIsAnimating] = React.useState(false)

  const filteredItems = React.useMemo(() => {
    if (activeCategory === "All") return portfolioItems
    return portfolioItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  const handleCategoryChange = (category: string) => {
    setIsAnimating(true)
    setActiveCategory(category)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleProjectClick = (project: (typeof portfolioItems)[0]) => {
    setSelectedProject(project)
  }

  return (
    <section id="portfolio" className="py-20" style={{ backgroundColor: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 border-2"
            style={{ borderColor: "#733aff", color: "#733aff" }}
          >
            Portfolio Kami
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6" style={{ color: "#3f3f3f" }}>
            Portfolio{" "}
            <span className="bg-gradient-to-r from-[#733aff] to-[#f53aff] bg-clip-text text-transparent">Kami</span>
          </h2>
          <p className="text-lg text-pretty max-w-3xl mx-auto" style={{ color: "#6b6b6b" }}>
            Lihat berbagai proyek yang telah kami kerjakan dengan teknologi terdepan dan desain yang memukau untuk
            berbagai klien dari berbagai industri.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={`transition-all duration-300 rounded-full px-6 ${
                activeCategory === category ? "text-white shadow-lg" : "hover:border-[#733aff] hover:text-[#733aff]"
              }`}
              style={
                activeCategory === category
                  ? {
                      background: "linear-gradient(135deg, #733aff 0%, #f53aff 100%)",
                      border: "none",
                    }
                  : {
                      borderColor: "#e0e0e0",
                      color: "#3f3f3f",
                      backgroundColor: "#ffffff",
                    }
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Large Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <Card
              className="overflow-hidden border-0 shadow-xl"
              style={{
                borderRadius: "1rem",
                backgroundColor: "#ffffff",
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{
                      background: "linear-gradient(135deg, #733aff 0%, #f53aff 100%)",
                    }}
                  >
                    {selectedProject.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                  <p className="text-sm text-white/90 mb-4">{selectedProject.description}</p>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="text-white"
                      style={{
                        background: "linear-gradient(135deg, #733aff 0%, #f53aff 100%)",
                      }}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white border-0"
                      style={{ color: "#3f3f3f" }}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Scrollable Cards List */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                onClick={() => handleProjectClick(item)}
                className={`group cursor-pointer overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
                  isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                } ${selectedProject.id === item.id ? "ring-2 ring-[#733aff]" : ""}`}
                style={{
                  borderRadius: "1rem",
                  backgroundColor: "#ffffff",
                  transitionDelay: `${index * 50}ms`,
                  borderLeft: selectedProject.id === item.id ? "4px solid #733aff" : "4px solid transparent",
                }}
              >
                <CardContent className="p-0">
                  <div className="flex gap-4 p-4 hover:bg-[#f9f9f9] transition-colors duration-300">
                    {/* Thumbnail */}
                    <div className="flex-shrink-0 w-32 h-24 rounded-lg overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1 truncate" style={{ color: "#3f3f3f" }}>
                        {item.title}
                      </h3>
                      <p className="text-sm mb-3 line-clamp-2" style={{ color: "#6b6b6b" }}>
                        {item.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            className={`text-xs font-medium text-white border-0 ${
                              techColors[tech] || "bg-gradient-to-r from-gray-500 to-gray-600"
                            }`}
                            style={{
                              borderRadius: "9999px",
                              padding: "0.25rem 0.75rem",
                            }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <div className="flex-shrink-0 flex items-center">
                      <ArrowRight
                        className="h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                        style={{ color: "#733aff" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div
          className="text-center mt-16 p-8 rounded-2xl border-2"
          style={{
            backgroundColor: "#fafafa",
            borderColor: "#733aff",
          }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: "#3f3f3f" }}>
            Siap Memulai Proyek Anda?
          </h3>
          <p className="mb-8 max-w-2xl mx-auto text-pretty" style={{ color: "#6b6b6b" }}>
            Mari diskusikan ide dan kebutuhan proyek Anda. Tim ahli kami siap membantu mewujudkan visi digital Anda
            dengan solusi terbaik.
          </p>
          <Button
            size="lg"
            className="px-8 py-3 text-white shadow-lg hover:shadow-xl transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #733aff 0%, #f53aff 100%)",
            }}
          >
            Mulai Diskusi Proyek
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
