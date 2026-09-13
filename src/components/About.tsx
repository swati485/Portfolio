import { useRef } from 'react'
import { aboutFacts } from '../data/content'
import { useRevealGSAP } from '../hooks/useRevealGSAP'
import { useBlurReveal } from '../hooks/useBlurReveal'

export default function About() {
  const gridRef = useRef<HTMLDivElement>(null)
  const factsRef = useRef<HTMLUListElement>(null)
  useBlurReveal(gridRef)
  useRevealGSAP(factsRef)

  return (
    <section id="about" className="paper-grid bg-offwhite text-ink py-28">
      <div
        ref={gridRef}
        className="max-w-[1080px] mx-auto px-6 md:px-10 grid md:grid-cols-[1.2fr_1fr] gap-14 items-start"
      >
        <div>
          <span className="inline-block text-sm font-semibold text-blue mb-2.5">About</span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Hey, I'm Swati.</h2>
          <p className="text-ink-soft text-[1.05rem] leading-[1.75] mb-4 max-w-[520px]">
            Coming from a B.Sc. (PCM) background, programming was completely new to me.
            Choosing an MCA meant starting from scratch — but every project made me more
            confident as a developer.
          </p>
          <p className="text-ink-soft text-[1.05rem] leading-[1.75] mb-4 max-w-[520px]">
            I wasn't chasing perfection. I kept learning, building projects, and improving
            every day. I study algorithms, databases, and systems, but I value them most
            when the software actually automates infrastructure or helps catch health
            issues early.
          </p>
          <p className="text-ink font-medium max-w-[520px]">
            The goal is simple: join a team building impactful software, automate real
            operations, and write code I'd be happy to hand off.
          </p>
        </div>

        <ul
          ref={factsRef}
          className="flex flex-col gap-6 border-l border-black/10 pl-8 md:mt-8"
        >
          {aboutFacts.map((f) => (
            <li key={f.label} className="flex flex-col">
              <span className="font-display text-4xl font-bold text-blue">{f.num}</span>
              <span className="text-ink-soft text-[0.92rem] mt-0.5">{f.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
