import { cn } from "@/lib/utils"

export function SpecCard({
  title,
  items,
  className,
}: {
  title: string
  items: { label: string; value: string }[]
  className?: string
}) {
  return (
    <section
      className={cn(
        "rounded-sm border border-sand/15 bg-stone-medium/10 shadow-sm",
        className,
      )}
    >
      <div className="px-6 pt-6">
        <h3 className="font-serif text-2xl font-light tracking-tight text-sand">
          {title}
        </h3>
      </div>
      <div className="p-6 pt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <SpecItem key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
    </section>
  )
}

export function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-sand/15 bg-stone-dark/40 px-4 py-3">
      <div className="text-[11px] uppercase tracking-[0.2em] text-sand/60">
        {label}
      </div>
      <div className="mt-1 text-sm text-sand/90">{value}</div>
    </div>
  )
}


