import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[76px] z-[100] flex items-center justify-between px-6 md:px-10 border-b transition-colors duration-300 ${
        scrolled
          ? 'bg-[rgba(10,18,64,0.72)] backdrop-blur-md border-white/10'
          : 'bg-transparent border-transparent'
      }`}
    >
      <a href="#hero" className="font-mark text-2xl text-white">Swati Sharma</a>

      <nav className="hidden md:flex gap-8 text-[0.92rem] font-medium">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative text-white/75 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-accent-dark after:transition-all after:duration-200 hover:after:w-full"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <motion.a
        href="#contact"
        className="text-sm font-semibold text-blue-deep bg-white px-5 py-2 rounded-full"
        whileHover={{ y: -2, boxShadow: '0 8px 20px rgba(0,0,0,0.25)' }}
        transition={{ duration: 0.2 }}
      >
        Say hi
      </motion.a>
    </header>
  )
}
