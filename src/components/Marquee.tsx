export default function Marquee() {
  const line = 'Code. Learn. Build. Repeat.'
  return (
    <div className="bg-offwhite text-blue overflow-hidden border-b border-black/10 py-5">
      <div className="marquee-track flex w-max gap-12 font-display text-2xl font-semibold whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} className="pr-12 border-r border-black/10">{line}</span>
        ))}
      </div>
    </div>
  )
}
