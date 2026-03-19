import { FileText, Ruler, Package, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const resources = [
  {
    icon: Ruler,
    title: "Cladding Dimensions",
    description: "Complete specifications for the Proportion Series cladding system.",
  },
  {
    icon: Package,
    title: "Pack Formats",
    description: "Packaging information for cladding, walling, and paving products.",
  },
  {
    icon: FileText,
    title: "Installation Guides",
    description: "Technical guidelines for proper stone installation and application.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Library",
    description: "Educational articles about natural stone selection and design.",
  },
]

export function ResourcesSection() {
  return (
    <section id="resources" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            For Architects & Designers
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Architect Resources
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical information and specifications for architects, designers, 
            and construction professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-card p-6 rounded-sm hover:shadow-lg transition-shadow"
            >
              <resource.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-serif text-xl text-foreground mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {resource.description}
              </p>
            </div>
          ))}
        </div>

        {/* Knowledge Library Preview */}
        <div className="mt-16 bg-card p-8 md:p-12 rounded-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                Knowledge Library
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Explore our educational articles about natural stone, including guides 
                on stone selection, installation best practices, and architectural design principles.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="text-sm text-foreground">What is natural stone cladding</li>
                <li className="text-sm text-foreground">Slate vs quartz cladding</li>
                <li className="text-sm text-foreground">What is flagstone paving</li>
                <li className="text-sm text-foreground">Natural slate roofing explained</li>
                <li className="text-sm text-foreground">Designing stone walls with proportion</li>
              </ul>
              <Button asChild>
                <Link href="/knowledge">
                  Browse Knowledge Library
                </Link>
              </Button>
            </div>
            <div className="relative aspect-video bg-secondary rounded-sm overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                <p className="text-sm text-muted-foreground">
                  Educational content for architects and designers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

