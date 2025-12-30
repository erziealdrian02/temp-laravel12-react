"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, Star } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Ahmad Rizki",
    role: "Full Stack Developer",
    specialization: "React & Node.js",
    image: "/placeholder.svg?height=300&width=300&text=Ahmad+Rizki",
    bio: "Berpengalaman 6+ tahun dalam pengembangan web modern dengan fokus pada React ecosystem dan backend scalable.",
    skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    rating: 4.9,
    projects: 120,
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "ahmad@necode.dev",
    },
  },
  {
    id: 2,
    name: "Sari Dewi",
    role: "UI/UX Designer",
    specialization: "Product Design",
    image: "/placeholder.svg?height=300&width=300&text=Sari+Dewi",
    bio: "Desainer berpengalaman dengan passion dalam menciptakan user experience yang intuitif dan visual yang memukau.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    rating: 4.8,
    projects: 85,
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "sari@necode.dev",
    },
  },
  {
    id: 3,
    name: "Budi Santoso",
    role: "Mobile Developer",
    specialization: "React Native",
    image: "/placeholder.svg?height=300&width=300&text=Budi+Santoso",
    bio: "Spesialis pengembangan aplikasi mobile cross-platform dengan pengalaman di berbagai industri dan startup.",
    skills: ["React Native", "Flutter", "iOS", "Android"],
    rating: 4.9,
    projects: 95,
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "budi@necode.dev",
    },
  },
  {
    id: 4,
    name: "Maya Putri",
    role: "Graphic Designer",
    specialization: "Brand Identity",
    image: "/placeholder.svg?height=300&width=300&text=Maya+Putri",
    bio: "Creative director dengan keahlian dalam branding dan visual identity untuk berbagai brand ternama di Indonesia.",
    skills: ["Illustrator", "Photoshop", "Branding", "Print Design"],
    rating: 4.7,
    projects: 110,
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "maya@necode.dev",
    },
  },
  {
    id: 5,
    name: "Andi Wijaya",
    role: "DevOps Engineer",
    specialization: "Cloud Infrastructure",
    image: "/placeholder.svg?height=300&width=300&text=Andi+Wijaya",
    bio: "Expert dalam cloud infrastructure dan automation dengan pengalaman mengelola sistem skala enterprise.",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    rating: 4.8,
    projects: 75,
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "andi@necode.dev",
    },
  },
  {
    id: 6,
    name: "Lisa Maharani",
    role: "Video Editor",
    specialization: "Motion Graphics",
    image: "/placeholder.svg?height=300&width=300&text=Lisa+Maharani",
    bio: "Video editor profesional dengan spesialisasi motion graphics dan visual effects untuk konten digital modern.",
    skills: ["Premiere Pro", "After Effects", "Cinema 4D", "DaVinci"],
    rating: 4.9,
    projects: 65,
    social: {
      github: "#",
      linkedin: "#",
      twitter: "#",
      email: "lisa@necode.dev",
    },
  },
]

export function TeamSection() {
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
    <section ref={ref} id="team" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Tim Profesional
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">
            Tim <span className="gradient-text">Profesional</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto">
            Bertemu dengan tim ahli kami yang berpengalaman dan berdedikasi untuk menghadirkan solusi digital terbaik
            bagi setiap klien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className={`group overflow-hidden glass-effect border-0 hover:shadow-2xl transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 px-2 py-1 rounded-full bg-white/90 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-medium">{member.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                  <p className="text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialization}</p>
                </div>

                <p className="text-sm text-muted-foreground text-center mb-4 text-pretty">{member.bio}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex justify-center gap-6 text-center">
                  <div>
                    <div className="text-lg font-bold text-primary">{member.projects}</div>
                    <div className="text-xs text-muted-foreground">Proyek</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-primary">{member.rating}</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="text-3xl font-bold gradient-text mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Tim Ahli</div>
          </div>
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "700ms" }}
          >
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
          </div>
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "800ms" }}
          >
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Support</div>
          </div>
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "900ms" }}
          >
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Kepuasan Klien</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div
            className={`transform transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <h3 className="text-2xl font-bold mb-4">Bergabung dengan Tim Kami?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Kami selalu mencari talenta terbaik untuk bergabung dengan tim profesional kami. Mari berkembang bersama
              dan ciptakan solusi digital yang luar biasa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-3"
              >
                Lihat Lowongan Kerja
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 hover:bg-primary/10 hover:border-primary/50 bg-transparent"
              >
                Kirim Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
