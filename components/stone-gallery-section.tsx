type StoneGalleryCategory = {
  title: string
  description?: string
  images: { src: string; alt: string }[]
}

const CATEGORIES: StoneGalleryCategory[] = [
  {
    title: "Limestone",
    images: [
      { src: "/images/coastal-limestone.jpg", alt: "Limestone texture" },
      { src: "/images/desert-quartz.jpg", alt: "Limestone project" },
      { src: "/images/Quartzite-Stone.jpeg", alt: "Limestone installation" },
      { src: "/images/estate-project.jpg", alt: "Limestone finish" },
    ],
  },
  {
    title: "Slate",
    images: [
      { src: "/images/slate-roofing.jpg", alt: "Slate roofing" },
      { src: "/images/flagstone-paving.jpg", alt: "Slate paving" },
      { src: "/images/stone-walling.jpg", alt: "Slate walling" },
      { src: "/images/strata-slate.jpg", alt: "Slate cladding" },
    ],
  },
  {
    title: "Quartzite",
    images: [
      { src: "/images/karoopanaroma-(1-of-1).jpg", alt: "Quartzite installation" },
      { src: "/images/panaroma-(1-of-1).jpg", alt: "Quartzite quarry" },
      { src: "/images/slatecladdinghome-(1-of-1).jpg", alt: "Quartzite home" },
      { src: "/images/handchippanaroma-(1-of-1).jpg", alt: "Quartzite feature" },
    ],
  },
  {
    title: "Quartz",
    images: [
      { src: "/images/hero-stone-house.jpg", alt: "Quartz pattern" },
      { src: "/images/slatello-house.jpg", alt: "Quartz branding" },
      { src: "/images/slate-roofing.jpg", alt: "Quartz durability" },
      { src: "/images/timbavatidrypack1-(1-of-1).jpg", alt: "Quartz architecture" },
    ],
  },
]

function GalleryRow({ category }: { category: StoneGalleryCategory }) {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground tracking-tight">
          {category.title}
        </h2>
        {category.description ? (
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            {category.description}
          </p>
        ) : null}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {category.images.map((img, index) => (
          <div
            key={`${category.title}-${index}`}
            className="group relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-foreground/0 group-hover:ring-foreground/10 transition" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function StoneGallerySection() {
  return (
    <section id="stone-gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">Natural Stone</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight">Natural Stone Gallery</h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
            Slatello stone categories in real installations.
          </p>
        </div>

        <div className="space-y-12">
          {CATEGORIES.map((category) => (
            <GalleryRow key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

