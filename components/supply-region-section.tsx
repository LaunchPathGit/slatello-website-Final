import { MapPin } from "lucide-react"

const regions = [
  "South Africa",
  "Namibia",
  "Botswana",
  "Zambia",
  "Zimbabwe",
  "Mozambique",
]

export function SupplyRegionSection() {
  return (
    <section className="py-24 bg-stone-dark text-sand">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-sand/60 mb-4 block">
              Distribution
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-6">
              Southern African
              <br />
              <span className="italic">Supply Network</span>
            </h2>
            <p className="text-lg text-sand/80 mb-8 leading-relaxed">
              Slatello supplies projects across Southern Africa, delivering natural 
              stone systems to architects, developers, and distributors throughout the region.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {regions.map((region) => (
                <div
                  key={region}
                  className="flex items-center gap-2 text-sand/90"
                >
                  <MapPin className="h-4 w-4 text-earth-warm" />
                  <span className="text-sm">{region}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Stylized Map Representation */}
            <div className="aspect-square bg-stone-medium/20 rounded-sm p-8 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Abstract map visualization */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* South Africa outline simplified */}
                  <path
                    d="M100 200 Q120 150 180 140 Q240 130 280 160 Q320 190 340 250 Q350 300 320 340 Q280 370 220 360 Q160 350 120 320 Q90 290 100 200Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-sand/40"
                    fill="none"
                  />
                  
                  {/* Geological regions */}
                  <circle cx="200" cy="220" r="6" className="fill-earth-warm" />
                  <circle cx="160" cy="260" r="5" className="fill-sand/60" />
                  <circle cx="250" cy="200" r="5" className="fill-sand/60" />
                  <circle cx="280" cy="280" r="5" className="fill-sand/60" />
                  
                  {/* Labels */}
                  <text x="200" y="180" className="fill-sand/80 text-xs" textAnchor="middle">
                    Geological Origins
                  </text>
                </svg>
                
                {/* Legend */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-earth-warm" />
                    <span className="text-xs text-sand/60">Primary Quarries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-sand/60" />
                    <span className="text-xs text-sand/60">Stone Regions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
