import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    slug: "strata",
    name: "STRATA™",
    subtitle: "Natural Slate Systems",
    description: "Premium slate for cladding, roofing, and walling applications.",
    image: "/images/strata-slate.jpg",
    applications: ["Cladding", "Roofing", "Walling"],
  },
  {
    slug: "desert-quartz",
    name: "DESERT QUARTZ™",
    subtitle: "Quartz Stone Systems",
    description: "Warm, golden quartzite for cladding and flagstone paving.",
    image: "/images/desert-quartz.jpg",
    applications: ["Cladding", "Flagstone Paving"],
  },
  {
    slug: "coastal-limestone",
    name: "COASTAL LIMESTONE™",
    subtitle: "Limestone Architectural Stone",
    description: "Elegant limestone for cladding and walling in coastal applications.",
    image: "/images/coastal-limestone.jpg",
    applications: ["Cladding", "Walling"],
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
            Stone Collections
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Slatello Stone Collections
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Slatello develops materials from diverse geological regions of South Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden bg-card rounded-sm"
            >
              <div className="aspect-[4/5] relative">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-stone-dark/40 group-hover:bg-stone-dark/50 transition-colors" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-sand">
                <span className="text-xs tracking-[0.15em] uppercase text-sand/70 mb-2">
                  {collection.subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  {collection.name}
                </h3>
                <p className="text-sm text-sand/80 mb-4 leading-relaxed">
                  {collection.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {collection.applications.map((app) => (
                    <span
                      key={app}
                      className="text-xs px-3 py-1 bg-sand/20 rounded-sm text-sand/90"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm font-medium group-hover:text-earth-warm transition-colors">
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
