import Image from "next/image"

const applications = [
  {
    name: "Luxury Residential",
    description: "Premium stone systems for high-end residential architecture.",
    image: "/images/hero-stone-house.jpg",
  },
  {
    name: "Golf & Lifestyle Estates",
    description: "Architectural stone for exclusive estate developments.",
    image: "/images/estate-project.jpg",
  },
  {
    name: "Lodge Developments",
    description: "Natural stone solutions for safari and wilderness lodges.",
    image: "/images/lodge-architecture.jpg",
  },
]

export function ApplicationsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-tight">
            Project Environments
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Natural stone is used in luxury residential architecture, golf estates, 
            lifestyle estates, lodge developments, and landscape architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div
              key={app.name}
              className="group relative aspect-[3/4] overflow-hidden rounded-sm"
            >
              <Image
                src={app.image}
                alt={app.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-dark/80 via-stone-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl text-sand mb-2">
                  {app.name}
                </h3>
                <p className="text-sm text-sand/80">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
