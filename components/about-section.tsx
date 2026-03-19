import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
            <Image
              src="/images/desert-quartz.jpg"
              alt="Natural stone texture"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              About Slatello
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight mb-6">
              The Slatello
              <br />
              <span className="italic">Stone House</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Slatello is evolving from a traditional quarry operation into a Southern African 
              stone house dedicated to developing natural stone systems for architecture.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We develop materials from diverse geological regions of South Africa, 
              creating structured natural stone systems that bring architectural coherence 
              to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to position natural stone as a premium architectural material, 
              supplying architects, developers, and distributors across Southern Africa with 
              quality stone systems designed for enduring beauty.
            </p>
            
            <div className="mt-10 pt-10 border-t border-border">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <span className="block text-3xl font-serif text-primary">3</span>
                  <span className="text-sm text-muted-foreground">Stone Collections</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-primary">6</span>
                  <span className="text-sm text-muted-foreground">Countries Served</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif text-primary">5+</span>
                  <span className="text-sm text-muted-foreground">Stone Systems</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

