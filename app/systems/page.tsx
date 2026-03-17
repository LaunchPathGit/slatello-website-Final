import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function SystemsPage() {
  return (
    <main className="pt-20">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
              Cladding
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Inspired by historical stone buildings and old world craftmanship.
              These Cladding products capture moments in time of millions of years old stone architecture.
              The great advantage of this product is that it is 90% pre masoned and processed,
              which saves time and money.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link href="/contact">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/paving">View Paving</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "https://slatello.com/images2014/cladding1-(1-of-1).jpg",
              "https://slatello.com/images2014/cladding2-(1-of-1).jpg",
              "https://slatello.com/images2014/cladding3-(1-of-1).jpg",
            ].map((src) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt="Cladding product"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="outline">
                <Link href="/systems/dry-pack-cladding">Dry Pack Cladding</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/systems/karoo-cladding">Karoo Cladding</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/systems/strip-walling">Strip Walling</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/systems/hand-chip-cladding">Hand Chip Cladding</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/systems/riven-cladding">Riven Cladding</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

