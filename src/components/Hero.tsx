import { motion } from 'framer-motion'
import { heroTagline } from '../data/content'
import { FileTextIcon, ExternalLinkIcon } from './icons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6"
      style={{
        background:
          'radial-gradient(circle at 50% 55%, #0f2594 0%, #0a1240 65%, #060a24 100%)',
      }}
    >
      {/* Bright ambient glow */}
      <div
        className="hero-glow absolute w-[620px] h-[620px] rounded-full blur-[10px] z-0"
        style={{ background: 'radial-gradient(circle, rgba(29,78,216,0.55) 0%, transparent 70%)' }}
      />

      {/* Dark floating orb sitting directly behind the wordmark */}
      <div
        className="hero-orb absolute w-[480px] h-[480px] rounded-full z-[1]"
        style={{
          background: 'radial-gradient(circle, #060a24 0%, rgba(6,10,36,0.7) 55%, transparent 78%)',
        }}
      />

      <motion.h1
        className="hero-mark-float font-mark text-white relative z-[2] leading-none"
        style={{
          fontSize: 'clamp(4.5rem, 18vw, 13rem)',
          textShadow: '0 10px 40px rgba(0,0,0,0.35)',
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        swati
      </motion.h1>

      {/* Tagline — each word blurs in with its own stagger delay */}
      <p className="relative z-[3] flex justify-center items-center flex-wrap gap-2.5 mt-8 font-display text-base font-medium tracking-wide text-white">
        {heroTagline.map((word, i) => (
          <motion.span
            key={word}
            initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.6 + i * 0.3 }}
          >
            {word}
          </motion.span>
        ))}
      </p>

      {/* Floating resume button */}
      <a
        href="/SwatiSharma_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="absolute right-6 md:right-10 bottom-8 z-10 inline-flex items-center gap-2.5 px-5 py-[11px] rounded-full border border-white/35 bg-white/[0.06] text-white font-display text-[0.82rem] font-bold backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:bg-white/[0.12] hover:border-white/65"
      >
        <FileTextIcon />
        RESUME
        <ExternalLinkIcon />
      </a>
    </section>
  )
}
