import { useRef } from 'react'
import { projects } from '../data/content'
import { useRevealGSAP } from '../hooks/useRevealGSAP'
import { useBlurReveal } from '../hooks/useBlurReveal'
import TiltCard from './TiltCard'
import { GithubIcon } from './icons'

export default function Projects() {
  const sectionInnerRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  useBlurReveal(sectionInnerRef)
  useRevealGSAP(listRef)

  return (
    <section
      id="projects"
      className="py-28 text-white"
      style={{
        background: 'radial-gradient(circle at 50% 60%, #0f2594 0%, #0a1240 60%, #05081f 100%)',
      }}
    >
      <div ref={sectionInnerRef} className="max-w-[1080px] mx-auto px-6 md:px-10">
        <span className="inline-block text-sm font-semibold text-accent-dark mb-2.5">Work</span>
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">Projects</h2>

        <div ref={listRef} className="flex flex-col gap-6">
          {projects.map((project) => (
            <TiltCard key={project.title} className="p-9">
              <div className="flex justify-between items-center gap-5 flex-wrap">
                <h3 className="text-[1.35rem] font-semibold">{project.title}</h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.88rem] font-semibold px-4 py-2 rounded-full border border-white/[0.14] inline-flex items-center gap-1.5 hover:bg-accent-dark hover:text-blue-deep hover:border-accent-dark transition-colors duration-200"
                >
                  <GithubIcon /> Code
                </a>
              </div>
              <span className="block text-accent-dark text-[0.85rem] font-semibold my-2.5">{project.tags}</span>
              <p className="text-white/70 leading-[1.7] max-w-[700px]">{project.body}</p>
              <ul className="flex gap-7 mt-5 flex-wrap">
                {project.stats.map((stat) => (
                  <li key={stat} className="text-[0.9rem]">
                    <strong className="font-display text-white">{stat}</strong>
                  </li>
                ))}
              </ul>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
