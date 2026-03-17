import Image from "next/image"

const systems = [
  {
    id: "riven-cladding",
    name: "Riven Cladding",
    description: "Natural riven surface stone cladding with defined face heights.",
    specs: ["40 mm & 46 mm thickness", "300–600 mm lengths", "0.5 m² packs"],
    image: "/images/strata-slate.jpg",
  },
  {
    id: "dry-pack-walling",
    name: "Dry Pack Walling",
    description: "Traditional dry stack stone walling for landscape and architectural features.",
    specs: ["10 m² crates", "15 m² crates"],
    image: "/images/stone-walling.jpg",
  },
  {
    id: "flagstone-paving",
    name: "Flagstone Paving",
    description: "Natural slasto paving for patios, pathways and outdoor living spaces.",
    specs: ["25 m² per crate", "Random sizes"],
    image: "/images/flagstone-paving.jpg",
  },
  {
    id: "slate-roofing",
    name: "Slate Roofing",
    description: "Durable natural slate roofing tiles for timeless architectural design.",
    specs: ["300 × 200 mm", "400 × 250 mm"],
    image: "/images/slate-roofing.jpg",
  },
]

export function StoneSystemsSection() {
  return (
    <section id="stone-systems" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Stone Systems
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete natural stone solutions for cladding, walling, paving and roofing applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system) => (
            <div
              key={system.name}
              id={system.id}
              className="group bg-card rounded-sm overflow-hidden flex flex-col md:flex-row"
            >
              <div className="md:w-1/2 aspect-square md:aspect-auto relative">
                <Image
                  src={system.image}
                  alt={system.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {system.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {system.description}
                </p>
                <ul className="space-y-2">
                  {system.specs.map((spec) => (
                    <li
                      key={spec}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
