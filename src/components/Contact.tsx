import { useRef } from 'react'
import { motion } from 'framer-motion'
import { contactEmail, socialLinks } from '../data/content'
import { useBlurReveal } from '../hooks/useBlurReveal'
import { GithubIcon, LinkedInIcon, EnvelopeIcon } from './icons'

const iconMap = {
  github: GithubIcon,
  linkedin: LinkedInIcon,
  envelope: EnvelopeIcon,
}

export default function Contact() {
  const innerRef = useRef<HTMLDivElement>(null)
  useBlurReveal(innerRef)

  return (
    <section id="contact" className="paper-grid bg-offwhite text-ink py-24 pb-32 text-left">
      <div ref={innerRef} className="w-full max-w-[1500px] mx-auto px-6">
        <div className="w-full">
          <span className="block mb-7 text-base font-semibold text-blue">Contact</span>
          <h2
            className="uppercase text-[#141414] font-black"
            style={{
              fontFamily: '"Arial Black", Arial, Helvetica, sans-serif',
              fontSize: 'clamp(2rem, 8vw, 9rem)',
              lineHeight: 0.76,
              letterSpacing: '0.05em',
            }}
          >
            <span>LET'S</span> <span className="text-blue">WORK</span>
            <br />
            <span>TOGETHER</span>
          </h2>
        </div>

        <div className="w-full h-px bg-black/10 mt-[70px]" />

        <div className="flex justify-between items-end gap-12 flex-wrap mt-11">
          <div className="max-w-[520px]">
            <p className="text-ink-soft text-[1.05rem] leading-[1.65] max-w-[470px]">
              Open to software internships, collaborations, or just saying hello — drop a
              line before you overthink it.
            </p>
            <div className="flex items-center gap-4 mt-8 flex-wrap">
              <motion.a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-3.5 px-[22px] py-[15px] rounded-full bg-[#171717] text-white font-display text-[0.82rem] font-bold tracking-wide"
                whileHover={{ y: -3, backgroundColor: '#1d4ed8' }}
                transition={{ duration: 0.25 }}
              >
                SAY HELLO
                <span className="w-[22px] h-[22px] flex items-center justify-center rounded-full bg-white/[0.12] text-[0.8rem]">
                  &#8599;
                </span>
              </motion.a>
              <a
                href={`mailto:${contactEmail}`}
                className="text-ink-soft font-display text-[0.78rem] font-semibold tracking-wider uppercase hover:text-blue transition-colors duration-200"
              >
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 flex-wrap">
            {socialLinks.map((social) => {
              const Icon = iconMap[social.icon]
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 min-w-[150px] px-[18px] py-[13px] rounded-full border border-black/10 text-ink"
                  whileHover={{ y: -3, backgroundColor: '#1d4ed8', borderColor: '#1d4ed8', color: '#fff' }}
                  transition={{ duration: 0.25 }}
                >
                  <Icon />
                  <span className="font-display text-[0.78rem] font-bold tracking-wider">{social.label}</span>
                  <small className="ml-auto text-[0.85rem]">&#8599;</small>
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
