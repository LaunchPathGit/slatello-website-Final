import { NextResponse } from "next/server"

const baseUrl = "https://slatello.com"
const staticPages = [
  "",
  "about",
  "paving",
  "systems",
  "contact",
  "knowledge",
]

export function GET() {
  const urls = staticPages
    .map((page) => {
      const path = page === "" ? "" : `/${page}`
      return `  <url><loc>${baseUrl}${path}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
