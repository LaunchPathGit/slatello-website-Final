import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SpecCard } from "@/components/spec-card"

const PAVING_IMAGES = [
  "https://slatello.com/images2014/pavingpanaroma-(1-of-1).jpg",
  "https://slatello.com/images2014/paving1-(1-of-1).jpg",
  "https://slatello.com/images2014/paving2-(1-of-1).jpg",
  "https://slatello.com/images2014/pavingslasto3-(1-of-1).jpg",
  "https://slatello.com/images2014/pavingtile1-(1-of-1).jpg",
  "https://slatello.com/images2014/pavingtile2-(1-of-1).jpg",
  "https://slatello.com/images2014/pavingtile3-(1-of-1).jpg",
]

const SLASTO_SPECS = [
  { label: "Material", value: "Natural Slate" },
  { label: "Size", value: "Random" },
  { label: "Thickness", value: "18–30 mm" },
  { label: "Colours", value: "Rich Autumn, Timbavati, African Blacks" },
  { label: "Application", value: "Internal, External, Wall, Floor" },
  { label: "Weight", value: "50–60 kg/m²" },
  { label: "Packaging", value: "20–30 m² per crate" },
  { label: "Waste Factor", value: "5–10%" },
]

const BLOCK_SPECS = [
  { label: "Material", value: "Natural Slate" },
  { label: "Size", value: "150mm – 400mm" },
  { label: "Thickness", value: "18–30 mm" },
  { label: "Colours", value: "Rich Autumn, Timbavati, African Blacks" },
  { label: "Application", value: "Internal, External, Floor" },
  { label: "Weight", value: "50–60 kg/m²" },
  { label: "Packaging", value: "20–30 m² per crate" },
  { label: "Waste Factor", value: "5–10%" },
]

export default function PavingPage() {
  return (
    <main className="pt-20 bg-stone-dark text-sand">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-sand/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_60%)]" />
        <div className="container mx-auto px-6 py-16 md:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-[11px] uppercase tracking-[0.25em] text-sand/60">
                Paving
              </span>
              <h1 className="mt-4 font-serif text-4xl md:text-6xl font-light tracking-tight">
                Natural Slate Paving
              </h1>
              <p className="mt-6 text-base md:text-lg text-sand/75 leading-relaxed">
                Eco-friendly, durable, and timeless paving solutions crafted from natural stone.
                Designed to enhance residential and commercial spaces.
              </p>

              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">Contact Us</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-sand/30 text-sand hover:bg-sand/10"
                >
                  <Link href="/paving#gallery">View Gallery</Link>
                </Button>
              </div>
            </div>

            <div className="max-w-3xl mx-auto w-full">
              <div className="group relative overflow-hidden rounded-sm border border-sand/15 bg-stone-medium/10 shadow-sm">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src="https://slatello.com/images2014/pavingpanaroma-(1-of-1).jpg"
                    alt="Natural slate paving panorama"
                    loading="eager"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-sand/0 group-hover:ring-sand/15 transition" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">
                Image Gallery
              </h2>
              <p className="mt-3 text-sm md:text-base text-sand/65">
                Premium slate paving for driveways, patios, walkways, and entertainment areas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PAVING_IMAGES.map((src) => (
              <div
                key={src}
                className="group relative overflow-hidden rounded-sm border border-sand/15 bg-stone-medium/10 shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt="Natural slate paving"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-sand/0 group-hover:ring-sand/15 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 border-t border-sand/15 bg-stone-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">
              Slate paving
            </h2>
            <p className="mt-6 text-base md:text-lg text-sand/75 leading-relaxed">
              Slate paving offers an eco-friendly and cost-effective solution, manufactured entirely from natural stone.
              Ideal for driveways, patios, walkways, and entertainment areas, it delivers durability, texture, and timeless appeal
              for both residential and commercial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Slasto */}
      <section id="slasto" className="py-16 md:py-20 border-t border-sand/15 bg-stone-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">
                Slasto Paving
              </h2>
              <p className="mt-6 text-base md:text-lg text-sand/75 leading-relaxed">
                Inspired by a 120-year-old farmhouse in the Marico Valley, Slasto paving revives traditional craftsmanship.
                Each piece is hand-processed by skilled stone masons, ensuring authenticity while maintaining an environmentally
                conscious manufacturing process.
              </p>
            </div>
            <SpecCard title="Specifications" items={SLASTO_SPECS} />
          </div>
        </div>
      </section>

      {/* Paving Blocks */}
      <section id="blocks" className="py-16 md:py-20 border-t border-sand/15 bg-stone-dark">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">
                Paving Blocks
              </h2>
              <p className="mt-6 text-base md:text-lg text-sand/75 leading-relaxed">
                Modern manufacturing enables precision-cut paving blocks ranging from 150mm to 400mm. These offer consistent sizing
                while retaining the natural beauty of slate, making them ideal for structured layouts and contemporary designs.
              </p>
            </div>
            <SpecCard title="Specifications" items={BLOCK_SPECS} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 border-t border-sand/15 bg-stone-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center rounded-sm border border-sand/15 bg-stone-medium/10 shadow-sm px-8 py-12">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">
              Need Installation Advice or Pricing?
            </h2>
            <p className="mt-4 text-base md:text-lg text-sand/75">
              Contact us for expert guidance, quotations, and installation recommendations.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

