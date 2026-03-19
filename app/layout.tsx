import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slatello.com"),
  title: {
    default: "Slatello | Natural Stone Systems for Architecture",
    template: "%s | Slatello",
  },
  description:
    "Slatello develops premium natural stone systems for cladding, paving, and roofing across Southern Africa.",
  keywords: [
    "natural stone", "stone cladding", "slate paving", "quartzite", "construction", "Slatello",
  ],
  openGraph: {
    title: "Slatello | Natural Stone Systems",
    description:
      "Premium natural stone systems for architecture: cladding, paving, walling, and roofing.",
    url: "https://slatello.com",
    siteName: "Slatello",
    type: "website",
    images: [
      {
        url: "https://slatello.com/images/hero-stone-house.jpg",
        width: 1200,
        height: 630,
        alt: "Slatello natural stone home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Slatello",
    title: "Slatello Natural Stone Systems",
    description: "Natural stone systems for architecture and premium stone products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/slatello-logo.png",
    apple: "/slatello-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <script type="application/ld+json" suppressHydrationWarning>
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Slatello",
            "url": "https://slatello.com",
            "logo": "https://slatello.com/icon.svg",
            "sameAs": [
              "https://www.facebook.com/slatello",
              "https://www.instagram.com/slatello"
            ],
            "contactPoint": [{
              "@type": "ContactPoint",
              "telephone": "+27-123-456-789",
              "contactType": "customer service"
            }]
          }`}
        </script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

