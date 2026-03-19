import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Slatello-house.jpeg"
          alt="Modern architectural home with natural stone cladding"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-stone-dark/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <span className="inline-block text-sm tracking-[0.3em] uppercase text-sand/80 mb-6">
          Origin Stones of South Africa
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-sand mb-6 tracking-tight text-balance">
          Natural Stone
          <br />
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-sand/90 mb-10 leading-relaxed">
        Slatello Natural Stone is riving our African stone heritage with innovating natural stone products.
        From Africa to Africa by Africa.
        </p>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-sand/90 mb-10 leading-relaxed">
        &ldquo;Among the gold mine of the inland plains between the Limpopo and the Zambezi rivers there is a fortress built of stone of a marvellous size,
          and there appears to be no mortar joining them.&rdquo;
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base"
          >
            <Link href="/projects">
              Our Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
    
  )
}

