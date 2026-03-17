import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SpecCard } from "@/components/spec-card"

const KAROO_IMAGES = [
  "https://slatello.com/images2014/karoocladding1-(1-of-1).jpg",
  "https://slatello.com/images2014/karoocladding2-(1-of-1).jpg",
  "https://slatello.com/images2014/karoocladding3-(1-of-1).jpg",
]

const KAROO_SPECS = [
  { label: "Description", value: "Karoo Cladding" },
  { label: "Material", value: "Slate Natural" },
  { label: "Size available", value: "Random" },
  { label: "Thickness", value: "18 - 50mm" },
  { label: "Colours Available", value: "Rich Autumn - Timbavati" },
  { label: "Application", value: "Internal - External - Wall - Floor" },
  { label: "Weight", value: "50 - 70 kg/m2" },
  { label: "Packaging", value: "20 - 30 m2 / crate" },
  { label: "Waste Factor", value: "10 - 20%" },
  { label: "Minimum order", value: "tba" },
  { label: "Delivery", value: "tba" },
  { label: "Price P/m2", value: "tba" },
]

export default function KarooCladdingPage() {
  return (
    <main className="pt-20 bg-background text-foreground">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div className="grid grid-cols-1 gap-5">
              {KAROO_IMAGES.map((src) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt="Karoo cladding"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center lg:text-left">
              <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Cladding
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight">
                Karoo Cladding
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                This new cladding product from Slatello was derived from the vast open spaces and early morning sun rises of the Karoo.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                This product is pre masoned but acquires on site skilled masonry. Contact us for advice and information.
              </p>

              <div className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button asChild variant="outline">
                  <Link href="/systems">Back to Cladding</Link>
                </Button>
                <Button asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <SpecCard title="Spec - Sheet" items={KAROO_SPECS} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

