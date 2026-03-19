import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Contact | Slatello",
  description: "Get in touch with Slatello for stone systems, installation advice, and quotations.",
  openGraph: {
    title: "Contact Slatello",
    description: "Contact Slatello for stone products and services.",
  },
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      <Navigation />
      <ContactSection defaultType="architect" />
      <Footer />
    </main>
  )
}


