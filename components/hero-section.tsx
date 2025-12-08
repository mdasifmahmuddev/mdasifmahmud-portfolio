"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const blobRef = useRef<HTMLDivElement>(null)

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const projectsSection = document.querySelector("#projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollDown = () => {
    const nextSection = heroRef.current?.nextElementSibling
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animations triggered on scroll into view
      gsap.from(titleRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 40,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      })

      gsap.from(subtitleRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 40,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      })

      gsap.from(imageRef.current, {
        duration: 0.8,
        opacity: 0,
        scale: 0.8,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      })

      gsap.from(ctaRef.current, {
        duration: 0.8,
        opacity: 0,
        y: 40,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      })

      // Subtle pulse animation for the blob background
      if (blobRef.current) {
        gsap.to(blobRef.current, {
          scale: 1.05,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 ref={titleRef} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Frontend Developer <span className="text-primary">& React Specialist</span>
              </h1>
              <p ref={subtitleRef} className="text-lg md:text-xl text-muted-foreground mt-4 leading-relaxed max-w-lg">
                Building high-performance web applications with React, Next.js, and modern technologies. Based in Dhaka,
                Bangladesh.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-secondary rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="View My Work"
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1NnRQXl6RT_ZmPICfBIouu7XMo0QvD1tk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-secondary text-secondary rounded-lg font-semibold hover:bg-secondary/5 transition-all duration-300"
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://github.com/mdasifmahmuddev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/mdasifmahmuddev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.432-.666 1.204-1.61 2.928-1.61 2.136 0 3.745 1.395 3.745 4.393v5.588zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.705 0-.955.768-1.703 1.959-1.703 1.188 0 1.914.748 1.939 1.703 0 .947-.751 1.705-1.983 1.705zm1.946 11.019H3.391V9.956h3.892v10.496zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="mailto:md.asif.mahmud.dev@gmail.com"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div ref={imageRef} className="relative h-96 md:h-full flex items-center justify-center">
            <div ref={blobRef} className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-primary shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <Image
                src="https://i.ibb.co.com/kskdqjwB/1759042754809.png"
                alt="MD Asif Mahmud"
                fill
                className="object-cover"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce focus:outline-none"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  )
}