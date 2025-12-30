"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
  techStack: string[]
  demoUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Platform e-commerce modern dengan fitur lengkap untuk UMKM Indonesia",
    image: "/modern-ecommerce-interface.png",
    category: "Web Development",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Food Delivery App",
    description: "Aplikasi delivery makanan dengan real-time tracking dan payment gateway",
    image: "/food-delivery-app.png",
    category: "Mobile App",
    techStack: ["React Native", "Firebase", "Node.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Corporate Website",
    description: "Website corporate modern dengan CMS dan dashboard analytics",
    image: "/modern-corporate-website.png",
    category: "Web Development",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "Online Learning Platform",
    description: "Platform pembelajaran online dengan video streaming dan quiz interaktif",
    image: "/online-learning-platform.png",
    category: "Web Development",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: "5",
    title: "Brand Identity Design",
    description: "Desain identitas brand lengkap untuk startup teknologi",
    image: "/modern-brand-identity-design-mockup.jpg",
    category: "Design Graphic",
    techStack: ["Figma", "Illustrator", "Photoshop"],
    demoUrl: "#",
  },
  {
    id: "6",
    title: "Video Production",
    description: "Produksi video promosi dan konten media sosial",
    image: "/video-editing-timeline-interface.jpg",
    category: "Editing Video",
    techStack: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    demoUrl: "#",
  },
]

// Tech stack color mapping with gradients
const techColors: Record<string, string> = {
  React: "from-[#61dafb] to-[#0088cc]",
  "React Native": "from-[#61dafb] to-[#0088cc]",
  "Node.js": "from-[#68a063] to-[#3c6e3f]",
  MongoDB: "from-[#4db33d] to-[#13aa52]",
  Stripe: "from-[#635bff] to-[#0a2540]",
  Firebase: "from-[#ffca28] to-[#f57c00]",
  "Next.js": "from-[#000000] to-[#404040]",
  TypeScript: "from-[#3178c6] to-[#235a97]",
  "Tailwind CSS": "from-[#06b6d4] to-[#0891b2]",
  PostgreSQL: "from-[#336791] to-[#1a4d6d]",
  AWS: "from-[#ff9900] to-[#ec7211]",
  Figma: "from-[#f24e1e] to-[#a259ff]",
  Illustrator: "from-[#ff9a00] to-[#ff6a00]",
  Photoshop: "from-[#31a8ff] to-[#0078d4]",
  "Premiere Pro": "from-[#9999ff] to-[#6666cc]",
  "After Effects": "from-[#9999ff] to-[#6666cc]",
  "DaVinci Resolve": "from-[#e63946] to-[#c1121f]",
}

const categories = ["All", "Web Development", "Mobile App", "Design Graphic", "Editing Video"]

export default function PortfolioSectionTimeline() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeProject, setActiveProject] = useState<string>(projects[0].id)
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((p) => p.category === selectedCategory)

  useEffect(() => {
    if (filteredProjects.length > 0) {
      setActiveProject(filteredProjects[0].id)
    }
  }, [selectedCategory])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear previous refs for filtered items
    const currentFilteredIds = filteredProjects.map((p) => p.id)
    Object.keys(cardRefs.current).forEach((key) => {
      if (!currentFilteredIds.includes(key)) {
        delete cardRefs.current[key]
      }
    })

    const observerOptions = {
      root: container,
      rootMargin: "-10% 0px -10% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the most visible entry
      let mostVisibleEntry: IntersectionObserverEntry | null = null
      let maxRatio = 0

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio
          mostVisibleEntry = entry
        }
      })

      // Special handling: check if we're at the very top or bottom
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight

      // If scrolled to top, activate first project
      if (scrollTop <= 10 && filteredProjects.length > 0) {
        setActiveProject(filteredProjects[0].id)
        return
      }

      // If scrolled to bottom, activate last project
      if (scrollTop + clientHeight >= scrollHeight - 10 && filteredProjects.length > 0) {
        setActiveProject(filteredProjects[filteredProjects.length - 1].id)
        return
      }

      // Otherwise, use the most visible entry
      if (mostVisibleEntry && mostVisibleEntry.isIntersecting) {
        const projectId = mostVisibleEntry.target.getAttribute("data-project-id")
        if (projectId) {
          setActiveProject(projectId)
        }
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    // Observe all current filtered project cards
    filteredProjects.forEach((project) => {
      const ref = cardRefs.current[project.id]
      if (ref) {
        observer.observe(ref)
      }
    })

    // Also listen to scroll events for edge cases
    const handleScroll = () => {
      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight

      if (scrollTop <= 10 && filteredProjects.length > 0) {
        setActiveProject(filteredProjects[0].id)
      } else if (scrollTop + clientHeight >= scrollHeight - 10 && filteredProjects.length > 0) {
        setActiveProject(filteredProjects[filteredProjects.length - 1].id)
      }
    }

    container.addEventListener("scroll", handleScroll)

    return () => {
      observer.disconnect()
      container.removeEventListener("scroll", handleScroll)
    }
  }, [filteredProjects])

  const handleCardClick = (projectId: string) => {
    const cardElement = cardRefs.current[projectId]
    if (cardElement && containerRef.current) {
      const container = containerRef.current
      const cardTop = cardElement.offsetTop
      const containerTop = container.offsetTop
      const scrollPosition = cardTop - containerTop - container.clientHeight / 2 + cardElement.clientHeight / 2

      container.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      })
      setActiveProject(projectId)
    }
  }

  const activeProjectData = filteredProjects.find((p) => p.id === activeProject) || filteredProjects[0]

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Portfolio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#733aff] to-[#f53aff]">Kami</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#3f3f3f] dark:text-gray-400 max-w-2xl mx-auto"
          >
            Lihat berbagai project yang telah kami kerjakan dengan teknologi terkini dan desain modern
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "text-white shadow-lg"
                  : "bg-gray-100 dark:bg-gray-900 text-[#3f3f3f] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
              style={
                selectedCategory === category
                  ? {
                      background: "linear-gradient(135deg, #733aff, #f53aff)",
                    }
                  : undefined
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Timeline Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Fixed Preview Image */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div
              className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 shadow-2xl"
              style={{ height: "400px" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <img
                    src={activeProjectData.image || "/placeholder.svg"}
                    alt={activeProjectData.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Project Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-bold mb-2"
                    >
                      {activeProjectData.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-gray-200 mb-3"
                    >
                      {activeProjectData.description}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="flex gap-3"
                    >
                      {activeProjectData.demoUrl && (
                        <a
                          href={activeProjectData.demoUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-sm font-medium transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {activeProjectData.githubUrl && (
                        <a
                          href={activeProjectData.githubUrl}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full text-sm font-medium transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side - Scrollable Cards with Gradient Line */}
          <div className="relative">
            {/* Vertical Gradient Line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 rounded-full opacity-60"
              style={{
                background: "linear-gradient(to bottom, #733aff, #f53aff, #e1ff2b)",
              }}
            />

            {/* Scrollable Container */}
            <div ref={containerRef} className="space-y-6 pl-8 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence mode="sync">
                {filteredProjects.map((project, index) => {
                  const isActive = activeProject === project.id

                  return (
                    <motion.div
                      key={project.id}
                      ref={(el) => {
                        cardRefs.current[project.id] = el
                      }}
                      data-project-id={project.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      onClick={() => handleCardClick(project.id)}
                      className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        isActive
                          ? "bg-white dark:bg-gray-900 shadow-xl"
                          : "bg-white dark:bg-gray-900 shadow-md hover:shadow-lg border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-800"
                      }`}
                      style={
                        isActive
                          ? {
                              border: "2px solid transparent",
                              backgroundImage:
                                "linear-gradient(white, white), linear-gradient(135deg, #733aff, #f53aff)",
                              backgroundOrigin: "border-box",
                              backgroundClip: "padding-box, border-box",
                            }
                          : undefined
                      }
                    >
                      {/* Active Indicator Dot */}
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute -left-[2.15rem] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full shadow-lg"
                          style={{
                            background: "linear-gradient(to right, #733aff, #f53aff)",
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}

                      {/* Category Badge */}
                      <div
                        className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 text-[#733aff] dark:text-[#f53aff]"
                        style={{
                          background: "linear-gradient(to right, rgba(115, 58, 255, 0.1), rgba(245, 58, 255, 0.1))",
                        }}
                      >
                        {project.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-[#3f3f3f] dark:text-white mb-2">{project.title}</h3>

                      {/* Description */}
                      <p className="text-[#3f3f3f]/80 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className={`px-3 py-1 rounded-full text-xs font-medium text-white shadow-sm bg-gradient-to-r ${
                              techColors[tech] || "from-gray-500 to-gray-700"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
