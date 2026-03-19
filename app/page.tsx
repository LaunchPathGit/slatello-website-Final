import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StoneGallerySection } from "@/components/stone-gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Slatello | Natural Stone Systems",
  description:
    "Slatello offers natural stone cladding, paving, walling, and roofing systems across Southern Africa.",
  openGraph: {
    title: "Slatello | Home",
    description:
      "Natural stone systems and premium stone products for architecture.",
  },
}

export default function Home() {
  return (
    <main className="pt-20">
      <Navigation />
      <HeroSection />
      <StoneGallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}

