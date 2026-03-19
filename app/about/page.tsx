import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "About Slatello | Natural Stone Systems",
  description: "Learn about Slatello's mission to revive Africa's stone heritage through premium stone products.",
  openGraph: {
    title: "About Slatello",
    description: "Slatello's story and natural stone product range.",
  },
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <Navigation />

      {/* About Slatello Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="md:flex md:items-center md:gap-12">
            {/* Text Content */}
            <div className="md:flex-1 max-w-3xl">
              <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Company
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
                About Slatello
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Slatello Natural Stone is reviving Africa’s stone heritage with innovative natural stone products. From Africa to Africa by Africa, we bring timeless elegance and durability to both commercial and residential projects.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Inspired by ancient architecture, our slate and natural stone products allow you to add opulence and status to your property. Formed over millions of years, slate is a locally sourced African stone perfect for cladding, tiling, and paving applications.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Based in Groot-Marico, North-West Province, Slatello maintains a vast logistical network, delivering to any destination across Southern Africa. Partnering with reputable retailers in all major cities, we ensure stock availability and expert guidance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild>
                  <Link href="/paving">Explore Paving</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="md:flex-1 mt-10 md:mt-0">
              <img
                src="/images/panaroma-(1-of-1).jpg"
                alt="Slatello Natural Stone Panorama"
                className="rounded-sm w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Opportunities */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="bg-card p-8 md:p-12 rounded-sm">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground tracking-tight mb-6">
              Business Opportunities
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-secondary rounded-sm">
                <h3 className="font-serif text-2xl text-foreground mb-2">Wholesale</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Existing companies can stock our extensive range of natural stone products. Contact us today for more information.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-sm">
                <h3 className="font-serif text-2xl text-foreground mb-2">Retail Outlets</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Entrepreneurs can partner with us to establish a network of stone yards and retail outlets across Southern Africa. Contact us today for details.
                </p>
              </div>
              <div className="p-6 bg-secondary rounded-sm">
                <h3 className="font-serif text-2xl text-foreground mb-2">Investors</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Slatello will soon offer investment opportunities in our core natural stone business. Reach out to explore how you can become part of our growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
