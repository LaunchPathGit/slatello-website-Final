"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Building2, Briefcase, HardHat } from "lucide-react"

const enquiryTypes = [
  { id: "architect", label: "Architect Enquiry", icon: Building2 },
  { id: "distributor", label: "Distributor Enquiry", icon: Briefcase },
  { id: "project", label: "Project Enquiry", icon: HardHat },
]

export function ContactSection({
  defaultType = "architect",
}: {
  defaultType?: (typeof enquiryTypes)[number]["id"]
}) {
  const router = useRouter()
  const [selectedType] = useState(defaultType)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/contact/thank-you")
  }

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
              Contact Slatello
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Trade enquiries welcome. Connect with us for architect specifications, 
              distributor partnerships, or project quotations.
            </p>
          </div>

          {/* Enquiry Type Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {enquiryTypes.map((type) => (
              <Link
                key={type.id}
                href={`/contact/${type.id}`}
                className={`flex items-center gap-2 px-6 py-3 rounded-sm transition-colors ${
                  selectedType === type.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-foreground hover:bg-card/80"
                }`}
              >
                <type.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{type.label}</span>
              </Link>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company / Practice
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground"
                placeholder="Your company or practice name"
              />
            </div>
            
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-foreground resize-none"
                placeholder="Tell us about your project or enquiry..."
                required
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full md:w-auto px-12">
              Send Enquiry
            </Button>
          </form>

          {/* Direct Email */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Or contact us directly</p>
            <a
              href="mailto:info@slatello.co.za"
              className="inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              info@slatello.co.za
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
