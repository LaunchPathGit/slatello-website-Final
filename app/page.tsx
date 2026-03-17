import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="pt-20">
      <Navigation />
      <HeroSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
