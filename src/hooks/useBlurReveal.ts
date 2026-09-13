import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * "Blur → clear" reveal: applied to the direct children of a section
 * container. Each child starts blurred, translated down, and transparent,
 * then clears as it scrolls into view — and re-blurs if scrolled back out,
 * so the animation replays every time the section is revisited.
 */
export function useBlurReveal(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const children = Array.from(el.children)

    if (prefersReduced) {
      gsap.set(children, { opacity: 1, filter: 'blur(0px)', y: 0 })
      return
    }

    gsap.set(children, { opacity: 0, filter: 'blur(14px)', y: 35 })

    const triggers = children.map((child, i) =>
      gsap.to(child, {
        opacity: 1,
        filter: 'blur(0px)',
        y: 0,
        duration: 1.4,
        ease: 'power2.out',
        delay: (i % 5) * 0.15,
        scrollTrigger: {
          trigger: child,
          start: 'top 85%',
          toggleActions: 'play reverse play reverse',
        },
      }),
    )

    return () => triggers.forEach((t) => t.scrollTrigger?.kill())
  }, [ref])
}
