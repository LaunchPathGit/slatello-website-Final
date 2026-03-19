import Link from "next/link"

const footerLinks = {
  paving: [
    { label: "Natural Slate Paving", href: "/paving" },
    { label: "Slasto Paving", href: "/paving#slasto" },
    { label: "Paving Blocks", href: "/paving#blocks" },
  ],
  systems: [
    { label: "Cladding", href: "/systems" },
    { label: "Dry Pack Cladding", href: "/systems/dry-pack-cladding" },
    { label: "Karoo Cladding", href: "/systems/karoo-cladding" },
    { label: "Riven Cladding", href: "/systems/riven-cladding" },
  ],
  resources: [
    { label: "Architect Resources", href: "/resources" },
    { label: "Knowledge Library", href: "/knowledge" },
    { label: "Installation Guides", href: "/resources#installation-guides" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-stone-dark text-sand py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-semibold tracking-wider text-sand">
                SLATELLO
              </span>
              <span className="text-xs tracking-widest text-sand/60 uppercase">
                Origin Stones of South Africa
              </span>
            </Link>
            <p className="text-sm text-sand/70 leading-relaxed">
              Natural Stone Systems for Architecture
            </p>
          </div>

          {/* Paving */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-sand/80">
              Paving
            </h4>
            <ul className="space-y-3">
              {footerLinks.paving.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/60 hover:text-sand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cladding */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-sand/80">
              Cladding
            </h4>
            <ul className="space-y-3">
              {footerLinks.systems.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/60 hover:text-sand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-sand/80">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/60 hover:text-sand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-4 text-sand/80">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand/60 hover:text-sand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-sand/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-sand/50">
              © {new Date().getFullYear()} Slatello. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="mailto:info@slatello.co.za"
                className="text-sm text-sand/50 hover:text-sand transition-colors"
              >
                info@slatello.co.za
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

