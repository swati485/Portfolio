import { useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Applies the site's single scroll-reveal system to every direct child
 * of the given container: a staggered "pop" — scale + slight 3D tilt
 * settling into place — triggered once when the group scrolls into view.
 * This is the one shared animation used by every list/grid on the page.
 */
export function useRevealGSAP(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const children = Array.from(el.children)

    if (prefersReduced) {
      gsap.set(children, { opacity: 1, y: 0, scale: 1, rotateX: 0 })
      return
    }

    gsap.set(children, { opacity: 0, y: 22, scale: 0.86, rotateX: 8, transformPerspective: 900 })

    const tween = gsap.to(children, {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      duration: 0.7,
      ease: 'back.out(1.5)',
      stagger: 0.07,
      scrollTrigger: {
        trigger: el,
        start: 'top 82%',
        toggleActions: 'play reverse play reverse',
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [ref])
}
