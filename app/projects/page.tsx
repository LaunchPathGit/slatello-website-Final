import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { ApplicationsSection } from "@/components/applications-section"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
  return (
    <main className="pt-20">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Applications
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
              Project Environments
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From residential builds to estate developments and lodges, Slatello stone systems are
              designed to create consistent, premium architectural outcomes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/contact">Discuss a Project</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/paving">View Paving</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ApplicationsSection />
      <Footer />
    </main>
  )
}

