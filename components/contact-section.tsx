"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:md.asif.mahmud.dev@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}`
    window.location.href = mailtoLink

    setFormData({ name: "", email: "", message: "" })
    setSubmitted(true)

    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-4 mb-16 text-center">
          <span className="text-primary font-semibold">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I&apos;m always interested in hearing
            about new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:md.asif.mahmud.dev@gmail.com"
            className="p-6 bg-card rounded-lg border border-border hover:shadow-lg hover:border-primary transition-all group"
          >
            <Mail className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-1">Email</h3>
            <p className="text-sm text-muted-foreground">md.asif.mahmud.dev@gmail.com</p>
          </a>

          <a
            href="tel:+880177018408"
            className="p-6 bg-card rounded-lg border border-border hover:shadow-lg hover:border-primary transition-all group"
          >
            <Phone className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-1">Phone</h3>
            <p className="text-sm text-muted-foreground">+880 177 018 4085</p>
          </a>

          <div className="p-6 bg-card rounded-lg border border-border hover:shadow-lg transition-all group">
            <MapPin className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">Dhaka, Bangladesh</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-lg border border-border">
          {submitted && (
            <div className="p-4 bg-primary/10 border border-primary rounded-lg text-primary">
              Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="text-white w-full px-8 py-3 bg-primary  rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
