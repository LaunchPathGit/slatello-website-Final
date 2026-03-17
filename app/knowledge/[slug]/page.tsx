import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const ARTICLES: Record<
  string,
  {
    title: string
    summary: string
    bullets: string[]
    nextLinks: { href: string; label: string }[]
  }
> = {
  "natural-stone-cladding": {
    title: "What is natural stone cladding?",
    summary:
      "Natural stone cladding is a façade or feature-wall system where stone is applied as an external skin (or internal feature finish) for durability and character.",
    bullets: [
      "System thinking matters: choose a stone, thickness, and fixing method that suits the wall build-up.",
      "Consider movement joints, corners/returns, and moisture management in detailing.",
      "Specify consistency: controlled heights/pack formats improve installation rhythm and waste.",
    ],
    nextLinks: [
      { href: "/systems", label: "View Cladding" },
      { href: "/resources", label: "Open Resources" },
    ],
  },
  "slate-vs-quartz": {
    title: "Slate vs quartz cladding",
    summary:
      "Slate tends to read darker with layered texture; quartzite often reads warmer and brighter with strong mineral character. Both can be specified for premium façades.",
    bullets: [
      "Choose by architectural intent: contrast vs warmth, crisp lines vs riven texture.",
      "Match the environment: sun exposure, coastal air, and adjacent material palette.",
      "Confirm pack formats and face heights early to align with elevations and module planning.",
    ],
    nextLinks: [
      { href: "/paving", label: "View Paving" },
      { href: "/contact", label: "Ask for a Recommendation" },
    ],
  },
  "flagstone-paving": {
    title: "What is flagstone paving?",
    summary:
      "Flagstone paving uses naturally irregular stone pieces for outdoor surfaces—great for patios, paths and landscape architecture with organic patterning.",
    bullets: [
      "Expect natural variation in size and colour—plan for sorting on site.",
      "Base preparation and drainage are key to longevity and even settlement.",
      "Pack format and m² per crate affect logistics and site staging.",
    ],
    nextLinks: [
      { href: "/systems#flagstone-paving", label: "See Flagstone Paving System" },
      { href: "/contact", label: "Request a Quote" },
    ],
  },
  "slate-roofing": {
    title: "Natural slate roofing explained",
    summary:
      "Slate roofing uses thin slate tiles laid in overlapping courses to produce a long-life, low-maintenance roof finish with classic lines.",
    bullets: [
      "Tile size + overlap determine exposure and weather performance.",
      "Fixing method and underlay selection should match local conditions.",
      "Ask for recommended details for ridges, hips, and penetrations.",
    ],
    nextLinks: [
      { href: "/systems#slate-roofing", label: "See Slate Roofing System" },
      { href: "/resources#installation-guides", label: "Installation Guides" },
    ],
  },
}

export default async function KnowledgeArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = ARTICLES[slug]
  if (!article) return notFound()

  return (
    <main className="pt-20">
      <Navigation />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Knowledge Library
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">
              {article.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {article.summary}
            </p>
          </div>

          <div className="mt-10 bg-card p-8 md:p-10 rounded-sm max-w-3xl">
            <h2 className="font-serif text-2xl text-foreground mb-6">Key points</h2>
            <ul className="space-y-3">
              {article.bullets.map((b) => (
                <li key={b} className="text-sm text-foreground flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {article.nextLinks.map((l) => (
                <Button key={l.href} asChild variant="outline">
                  <Link href={l.href}>{l.label}</Link>
                </Button>
              ))}
              <Button asChild>
                <Link href="/knowledge">Back to Knowledge Library</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

