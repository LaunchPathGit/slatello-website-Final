import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { SpecCard } from "@/components/spec-card"

const DRY_PACK_IMAGES = {
  madikwe: [
    "/images/madikwedrypack1-(1-of-1).jpg",
    "/images/madikwedrypack2-(1-of-1).jpg",
    "/images/madikwedrypack3-(1-of-1).jpg",
  ],
  timbavati: [
    "/images/timbavatidrypack1-(1-of-1).jpg",
    "/images/timbavatidrypack2-(1-of-1).jpg",
    "/images/timbavatidrypack3-(1-of-1).jpg",
  ],
  sable: [
    "/images/sabledrypack1-(1-of-1).jpg",
    "/images/stripwallblack3-(1-of-1).jpg",
    "/images/sabledrypack2-(1-of-1).jpg",
  ],
  custom: ["/images/customdrypack1-(1-of-1).jpg"],
}

const DRY_PACK_SPECS = [
  { label: "Description", value: "Dry Pack Cladding" },
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

function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {images.map((src) => (
        <div
          key={src}
          className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
        >
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={src}
              alt="Dry pack cladding"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function DryPackCladdingPage() {
  return (
    <main className="pt-20 bg-background text-foreground">
      <Navigation />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 text-center">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Cladding
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
            Dry Pack Cladding
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Slatello developed Dry Pack Cladding in 2006, since then it has become one of South-Africa&apos;s
            leading Cladding products.
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
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center">
              Madikwe Dry Pack
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Rich African Sunset colours pre masoned and processed by our team bringing back the old world charm of Natural Stone.
            </p>
            <div className="mt-10">
              <ImageGrid images={DRY_PACK_IMAGES.madikwe} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center">
              Timbavati Dry Pack
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              The name Timbavati derives from the African grass land with its majestic trees and age old year rings.
            </p>
            <div className="mt-10">
              <ImageGrid images={DRY_PACK_IMAGES.timbavati} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center">
              Sable Dry Pack
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Inspired by the majestic horns of the Sable Antelope this Dry pack cladding brings a unique depth and texture of grey to walls.
            </p>
            <div className="mt-10">
              <ImageGrid images={DRY_PACK_IMAGES.sable} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight text-center">
              Custom Dry Pack Cladding
            </h2>
            <p className="mt-4 text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Except our standard Dry Pack Cladding range, Slatello offers the opportunity to custom build a design module with mixed colours to achieve any specification.
            </p>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
              {DRY_PACK_IMAGES.custom.map((src) => (
                <div
                  key={src}
                  className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm md:col-start-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={src}
                      alt="Custom dry pack cladding"
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
            <SpecCard title="Spec - Sheet" items={DRY_PACK_SPECS} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


