"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4 max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl hover:text-primary transition-colors">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-secondary font-bold">
              A
            </div>
            <span className="hidden sm:inline">Asif</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-4">
            <a href="#about" className="block py-2 hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="block py-2 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="block py-2 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="block py-2 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
