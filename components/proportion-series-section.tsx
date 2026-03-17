export function ProportionSeriesSection() {
  const heights = [
    { size: 144, label: "144 mm" },
    { size: 89, label: "89 mm" },
    { size: 55, label: "55 mm" },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block">
              Architectural System
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground tracking-tight mb-6">
              Proportion Series™
              <br />
              <span className="italic">Cladding</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              The Slatello cladding system is based on three defined face heights that create 
              visual rhythm in natural stone wall installations. This proportional system 
              ensures architectural coherence across all stone applications.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground w-24">Thickness:</span>
                <span className="text-muted-foreground">40 mm & 46 mm riven</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground w-24">Lengths:</span>
                <span className="text-muted-foreground">300 – 600 mm random</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground w-24">Packaging:</span>
                <span className="text-muted-foreground">0.5 m² packs / 40 m² pallets</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-secondary p-8 md:p-12 rounded-sm">
              <h3 className="font-serif text-2xl mb-8 text-foreground">
                Defined Stone Heights for Architectural Design
              </h3>
              
              <div className="space-y-6">
                {heights.map((height, index) => (
                  <div key={height.size} className="flex items-end gap-6">
                    <span className="text-sm font-medium text-primary w-16">
                      {height.label}
                    </span>
                    <div 
                      className="flex-1 bg-stone-medium rounded-sm transition-all duration-500"
                      style={{ 
                        height: `${height.size * 0.4}px`,
                        opacity: 1 - (index * 0.15)
                      }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="block text-2xl font-serif text-foreground">3</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Heights</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-serif text-foreground">2</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Thicknesses</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-serif text-foreground">Random</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Lengths</span>
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
