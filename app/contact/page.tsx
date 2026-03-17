import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Navigation />
      <ContactSection defaultType="architect" />
      <Footer />
    </main>
  )
}

