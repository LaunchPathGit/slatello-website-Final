import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SpecCard } from "@/components/spec-card"

export default function RivenCladdingPage() {
  const images = [
    "https://slatello.com/images2014/riven1-(1-of-1).jpg",
    "https://slatello.com/images2014/riven2-(1-of-1).jpg",
    "https://slatello.com/images2014/riven3-(1-of-1).jpg",
  ]

  const specs = [
    { label: "Description", value: "Riven Cladding" },
    { label: "Material", value: "Slate Natural" },
    { label: "Size available", value: "From 150mm to 300mm" },
    { label: "Thickness", value: "10 - 18mm" },
    { label: "Colours Available", value: "Rich Autumn - Timbavati - African Blacks" },
    { label: "Application", value: "Internal - External - Wall" },
    { label: "Weight", value: "35 - 40 kg/m2" },
    { label: "Packaging", value: "30 - 40 m2 / crate" },
    { label: "Waste Factor", value: "5 - 10%" },
    { label: "Minimum order", value: "tba" },
    { label: "Delivery", value: "tba" },
    { label: "Price P/m2", value: "tba" },
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
                  src="https://slatello.com/images2014/rivenpanaroma-(1-of-1).jpg"
                  alt="Riven cladding panorama"
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
                Riven Cladding
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Riven cladding is DIY friendly and the most affordable cladding product. Enhancing your property internal or externally.
              </p>
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Slatello offers this product 40mm wide by 150 to 300mm. All rivens are manufactured from Natural Stone.
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

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
              {images.map((src) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt="Riven cladding"
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

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <SpecCard title="Spec - Sheet" items={specs} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

