import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SpecCard } from "@/components/spec-card"

export default function StripWallingPage() {
  const stripWallSpecs = [
    { label: "Description", value: "Strip Wall Cladding" },
    { label: "Material", value: "Slate Natural" },
    { label: "Size available", value: "From 150mm to 300mm" },
    { label: "Thickness", value: "30 - 100mm" },
    { label: "Colours Available", value: "Rich Autumn - Timbavati - African Blacks" },
    { label: "Application", value: "Internal - External - Wall" },
    { label: "Weight", value: "110 - 170 kg/m2" },
    { label: "Packaging", value: "10 - 15 m2 / crate" },
    { label: "Waste Factor", value: "10 - 20%" },
    { label: "Minimum order", value: "tba" },
    { label: "Delivery", value: "tba" },
    { label: "Price P/m2", value: "tba" },
  ]

  const madikwe = [
    "https://slatello.com/images2014/madikwestrip1-(1-of-1).jpg",
    "https://slatello.com/images2014/madikwestrip2-(1-of-1).jpg",
    "https://slatello.com/images2014/madikwestrip3-(1-of-1).jpg",
  ]

  const timbavati = [
    "https://slatello.com/images2014/timbavatstripwall1-(1-of-1).jpg",
    "https://slatello.com/images2014/timbavatstripwall2-(1-of-1).jpg",
    "https://slatello.com/images2014/timbavatstripwall3-(1-of-1).jpg",
  ]

  const sable = [
    "https://slatello.com/images2014/sablestripwall1-(1-of-1).jpg",
    "https://slatello.com/images2014/sablestripwall2-(1-of-1).jpg",
    "https://slatello.com/images2014/sablestripwall3-(1-of-1).jpg",
  ]

  return (
    <main className="pt-20 bg-background text-foreground">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src="https://slatello.com/images2014/stripwallpanaroma-(1-of-1).jpg"
                  alt="Strip walling panorama"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            <div className="mt-12 text-center">
              <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
                Cladding
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight">
                Strip Walling
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Strip Walling is a finer and more linear design Cladding than Dry Pack Cladding.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
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

      {/* Madikwe */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center">
              Madikwe Strip Walling
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Rich African Sunset colours pre masoned and processed by our team bringing back the old world charm of Natural Stone.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {madikwe.map((src) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt="Madikwe strip walling"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timbavati */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center">
              Timbavati Strip Walling
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              The name Timbavati derives from the African grass land with its majestic trees and age old year rings.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {timbavati.map((src) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt="Timbavati strip walling"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sable */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center">
              Sable Strip Walling
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Inspired by the majestic horns of the Sable Antelope this Dry pack cladding brings a unique depth and texture of grey to walls.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {sable.map((src) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt="Sable strip walling"
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center">
              Custom Strip Wall Cladding
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Except our standard Dry Pack Cladding range, Slatello offers the opportunity to custom build a design module with mixed colours to achieve any specification.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm md:col-start-2">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://slatello.com/images2014/custumstripwall1-(1-of-1).jpg"
                    alt="Custom strip wall cladding"
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <SpecCard title="Spec - Sheet" items={stripWallSpecs} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

