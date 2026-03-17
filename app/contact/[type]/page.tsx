import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

const VALID_TYPES = new Set(["architect", "distributor", "project"] as const)

export default async function ContactTypePage({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  if (!VALID_TYPES.has(type as any)) return notFound()

  return (
    <main className="pt-20">
      <Navigation />
      <ContactSection defaultType={type as "architect" | "distributor" | "project"} />
      <Footer />
    </main>
  )
}

