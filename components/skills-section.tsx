"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "DaisyUI",
    "GSAP",
    "Responsive Design",
  ],
  backend: ["Node.js", "Express.js", "RESTful API Design", "Authentication", "Server-Side Rendering"],
  database: ["MongoDB", "Firebase", "MySQL", "Firestore", "Data Modeling"],
  tools: ["Git", "GitHub", "Vercel", "Netlify", "AWS Amplify", "DigitalOcean", "VS Code", "Postman"],
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      skillsRef.current.forEach((skill, idx) => {
        gsap.from(skill, {
          scrollTrigger: {
            trigger: skill,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          duration: 0.6,
          opacity: 0,
          y: 30,
          delay: idx * 0.05,
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <span className="text-primary font-semibold">Professional Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Technologies & Tools</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Frontend</h3>
            <div className="space-y-2">
              {skills.frontend.map((skill, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el) skillsRef.current[idx] = el
                  }}
                  className="p-3 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <p className="text-sm font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Backend</h3>
            <div className="space-y-2">
              {skills.backend.map((skill, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el) skillsRef.current[skills.frontend.length + idx] = el
                  }}
                  className="p-3 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <p className="text-sm font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Database</h3>
            <div className="space-y-2">
              {skills.database.map((skill, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el) skillsRef.current[skills.frontend.length + skills.backend.length + idx] = el
                  }}
                  className="p-3 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <p className="text-sm font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">Tools & Deployment</h3>
            <div className="space-y-2">
              {skills.tools.map((skill, idx) => (
                <div
                  key={idx}
                  ref={(el) => {
                    if (el)
                      skillsRef.current[skills.frontend.length + skills.backend.length + skills.database.length + idx] =
                        el
                  }}
                  className="p-3 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all duration-300"
                >
                  <p className="text-sm font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "10+", label: "Projects Built" },
            { number: "1+", label: "Years Experience" },
            { number: "100%", label: "Dedication" },
            { number: "100%", label: "Responsive" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
