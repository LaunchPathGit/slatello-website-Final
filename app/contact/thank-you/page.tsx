import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ContactThankYouPage() {
  return (
    <main className="pt-20">
      <Navigation />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl bg-card p-10 rounded-sm">
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Enquiry received
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight">
              Thank you
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We’ve received your enquiry. If you need to attach drawings or a project schedule,
              email us at{" "}
              <a className="text-primary hover:underline" href="mailto:info@slatello.co.za">
                info@slatello.co.za
              </a>
              .
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/paving">View Paving</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/systems">View Cladding</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

