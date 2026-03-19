import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const ARTICLES = [
  {
    slug: "natural-stone-cladding",
    title: "What is natural stone cladding?",
    description: "A practical overview of cladding systems, detailing, and performance considerations.",
  },
  {
    slug: "slate-vs-quartz",
    title: "Slate vs quartz cladding",
    description: "How to choose a stone character that suits your project, environment, and finish.",
  },
  {
    slug: "flagstone-paving",
    title: "What is flagstone paving?",
    description: "Where it works best, how it is packed, and what to expect from natural variation.",
  },
  {
    slug: "slate-roofing",
    title: "Natural slate roofing explained",
    description: "A concise guide to slate sizes, overlaps, and durability in architectural roofing.",
  },
]

export default function KnowledgePage() {
  return (
    <main className="pt-20">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Knowledge Library
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
              Educational Articles
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Short, practical explanations to support specification, design decisions, and site execution.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/knowledge/${a.slug}`}
                className="bg-card p-6 rounded-sm hover:shadow-lg transition-shadow"
              >
                <h2 className="font-serif text-2xl text-foreground mb-2">{a.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                <div className="mt-4 text-sm font-medium text-primary">Read article</div>
              </Link>
            ))}
          </div>

          <div className="mt-14 bg-secondary p-8 md:p-10 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl text-foreground">Need project-specific help?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us your application and we’ll point you to the right system, pack format and guide.
              </p>
            </div>
            <Button asChild>
              <Link href="/contact">Contact Slatello</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


