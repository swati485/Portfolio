import { useRef } from 'react'
import { timeline } from '../data/content'
import { useRevealGSAP } from '../hooks/useRevealGSAP'
import { useBlurReveal } from '../hooks/useBlurReveal'

export default function Experience() {
  const innerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  useBlurReveal(innerRef)
  useRevealGSAP(listRef)

  return (
    <section id="experience" className="paper-grid bg-offwhite text-ink py-28">
      <div ref={innerRef} className="max-w-[1080px] mx-auto px-6 md:px-10">
        <span className="inline-block text-sm font-semibold text-blue mb-2.5">Experience</span>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Where I've worked &amp; studied</h2>

        <ul ref={listRef} className="flex flex-col gap-12">
          {timeline.map((item) => (
            <li key={item.title} className="grid md:grid-cols-[160px_1fr] gap-6">
              <span className="font-display text-sm font-semibold text-blue pt-1">{item.date}</span>
              <div>
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-ink-soft text-[0.92rem] mb-3.5">{item.org}</p>
                <p className="text-ink-soft leading-[1.7] max-w-[620px]">{item.body}</p>
                <ul className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-black/10">
                  {item.stats.map((s) => (
                    <li key={s.label} className="text-[0.9rem] text-ink-soft">
                      <strong className="font-display text-blue">{s.value}</strong> {s.label}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
