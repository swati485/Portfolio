import { useRef } from 'react'
import { skillCards } from '../data/content'
import { useRevealGSAP } from '../hooks/useRevealGSAP'
import { useBlurReveal } from '../hooks/useBlurReveal'
import TiltCard from './TiltCard'

export default function Skills() {
  const sectionInnerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  useBlurReveal(sectionInnerRef)
  useRevealGSAP(gridRef)

  return (
    <section
      id="skills"
      className="py-28 text-white"
      style={{
        background: 'radial-gradient(circle at 50% 60%, #0f2594 0%, #0a1240 60%, #05081f 100%)',
      }}
    >
      <div ref={sectionInnerRef} className="max-w-[1080px] mx-auto px-6 md:px-10">
        <span className="inline-block text-sm font-semibold text-accent-dark mb-2.5">Skills</span>
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">Tools I reach for</h2>
        <p className="max-w-[600px] mb-14 text-white/70">
          Technologies and concepts I use to build, learn, and solve problems.
        </p>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-5" style={{ perspective: '1200px' }}>
          {skillCards.map((card) => (
            <TiltCard
              key={card.number}
              className={`p-8 min-h-[220px] ${card.wide ? 'md:col-span-2 min-h-[190px]' : ''}`}
            >
              <div className="flex items-start justify-between gap-5">
                <h3 className="font-display text-lg font-semibold">{card.title}</h3>
                <span className="font-display text-4xl leading-none font-normal text-white/[0.18]">
                  {card.number}
                </span>
              </div>
              <div className="h-px bg-white/[0.13] my-6" />
              <div className="flex flex-wrap gap-2.5">
                {card.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-white/[0.14] bg-white/[0.055] text-white/80 text-[0.88rem] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
