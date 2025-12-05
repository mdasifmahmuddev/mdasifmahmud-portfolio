"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "BanglaBaari",
    description: "Full-stack e-commerce platform with admin dashboard and role-based access control",
    category: "E-Commerce",
    tech: ["Next.js 14", "NextAuth.js", "Express.js", "MongoDB", "Tailwind CSS"],
    features: ["Google OAuth", "Admin Dashboard", "Product Management", "Role-based Access"],
    date: "November 2025",
    image: "https://res.cloudinary.com/dmedavtx4/image/upload/v1764930762/bb-bari_udjpbl.png",
    links: {
      live: "https://bb-frontend-eight.vercel.app",
      github: "https://github.com/mdasifmahmuddev/bb-frontend",
    },
  },
  {
    id: 2,
    title: "Mind-Canvas",
    description: "Digital art marketplace where artists showcase and sell their work",
    category: "Marketplace",
    tech: ["React.js", "Node.js", "MongoDB", "Firebase", "Tailwind CSS"],
    features: ["Artist Platform", "Firebase Auth", "Search & Filtering", "Dark Mode"],
    date: "October 2025",
    image: "https://res.cloudinary.com/dmedavtx4/image/upload/v1764930763/mindcanva_agjvgk.png",
    links: {
      live: "https://mind-canva.web.app/",
      github: "https://github.com/mdasifmahmuddev/mindCanva-Client",
    },
  },
  {
    id: 3,
    title: "ToyTopia",
    description: "E-commerce platform for children toys with local seller integration",
    category: "E-Commerce",
    tech: ["React.js", "Firebase", "Tailwind CSS", "React Router"],
    features: ["Toy Marketplace", "Smart Search", "Store Locator", "Reviews"],
    date: "October 2025",
    image: "https://res.cloudinary.com/dmedavtx4/image/upload/v1764930763/toy-topia_pvbam0.png",
    links: {
      live: "https://toytopia-bd.netlify.app",
      github: "https://github.com/mdasifmahmuddev/ToyTopia",
    },
  },
  {
    id: 4,
    title: "Hero IO",
    description: "AI app store platform with app browsing, installation, and ratings",
    category: "Platform",
    tech: ["React", "React Router", "Tailwind CSS", "DaisyUI", "LocalStorage"],
    features: ["App Browsing", "Installation", "Rating System", "Responsive Design"],
    date: "September 2025",
    image: "https://res.cloudinary.com/dmedavtx4/image/upload/v1764930762/hero-io_eaup6q.png",
    links: {
      live: "https://ai-app-ph.netlify.app/",
      github: "https://github.com/mdasifmahmuddev/Hero-Io",
    },
  },
]

export function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    gsap.from(cardRef.current, {
      duration: 0.5,
      opacity: 0,
      x: 100,
      ease: "power2.out",
    })
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const current = projects[currentIndex]

  return (
    <section id="projects" className="py-20 md:py-32 px-4 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <span className="text-primary font-semibold">Featured Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Showcasing My Best Work</h2>
        </div>

        <div ref={containerRef} className="space-y-8">
          <div
            ref={cardRef}
            className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <span className="text-primary font-semibold text-sm">{current.date}</span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2">{current.title}</h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{current.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {current.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {current.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={current.links.live}
                    className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-secondary rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={current.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 border border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/5 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>

              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden bg-muted">
                <Image
                  src={current.image}
                  alt={current.title}
                  fill
                  className="object-cover object-top"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {String(currentIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="p-2 md:p-3 border border-border rounded-lg hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 md:p-3 border border-border rounded-lg hover:bg-primary hover:text-secondary hover:border-primary transition-all duration-300"
                aria-label="Next project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}