import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { content, techStack, education } from './data'
import avatar from './assets/avatar.jpg'
import tuberticoIcon from './assets/tubertico_icon.png'
import tuberticoIconGreen from './assets/tubertico_icon_green.png'
import Education from './components/Education'

const GREEN = '#6AB42D'
const NAV_KEYS = ['about', 'stack', 'projects', 'education', 'blog', 'contact']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
  viewport: { once: true },
})

function Badge({ children, highlight }) {
  return (
    <span className={`text-xs px-3 py-1 rounded-md border transition-all ${
      highlight
        ? 'bg-[#111e09] border-[#3a5a1a] text-[#6AB42D] badge-highlight'
        : 'bg-[#1a1a1a] border-[#2a2a2a] text-[#aaa] hover:border-[#3a3a3a]'
    }`}>
      {children}
    </span>
  )
}

function Tag({ children }) {
  return (
    <span className="text-[11px] px-2 py-0.5 rounded bg-[#111] border border-[#222] text-[#666]">
      {children}
    </span>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: GREEN }} />
      <p className="text-xs font-semibold tracking-[2px] uppercase" style={{ color: GREEN }}>
        {children}
      </p>
    </div>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const t = content[lang]
  const navRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [menuOpen])

  // Scroll-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans overflow-x-hidden">

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX, background: GREEN }}
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      />

      {/* NAV */}
      <nav ref={navRef} className="sticky top-0 z-50 border-b border-[#1e1e1e] bg-[#0f0f0f]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 grid grid-cols-3 items-center">

          {/* Logo */}
          <span className="text-base font-bold tracking-tight text-white">
            CQ<span style={{ color: GREEN }}>.</span>dev
          </span>

          {/* Desktop nav links */}
          <div className="hidden md:flex justify-center items-center gap-5">
            {NAV_KEYS.map(k => (
              <button key={k} onClick={() => scrollTo(k)}
                className="nav-link text-sm text-[#888] hover:text-[#6AB42D] transition-colors capitalize whitespace-nowrap">
                {t.nav[k]}
              </button>
            ))}
          </div>

          {/* Right: lang toggle + hamburger */}
          <div className="flex justify-end items-center gap-2">
            {['en', 'es'].map(l => (
              <button key={l} onClick={() => setLang(l)}
                className={`text-xs px-3 py-1 rounded border transition-colors uppercase font-medium min-h-[36px] ${
                  lang === l
                    ? 'bg-[#6AB42D] text-white border-[#6AB42D]'
                    : 'bg-transparent text-[#666] border-[#333] hover:border-[#555]'
                }`}>
                {l}
              </button>
            ))}

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden flex flex-col gap-[6px] p-2 min-h-[44px] min-w-[44px] items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-0.5 bg-[#888] rounded-full"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.15 }}
                className="block w-5 h-0.5 bg-[#888] rounded-full"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-0.5 bg-[#888] rounded-full"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="md:hidden border-t border-[#1e1e1e] overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-sm"
            >
              <div className="px-4 py-3 flex flex-col">
                {NAV_KEYS.map((k, i) => (
                  <motion.button
                    key={k}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.2 }}
                    onClick={() => scrollTo(k)}
                    className="text-left py-3 text-sm text-[#888] hover:text-[#6AB42D] transition-colors capitalize border-b border-[#1a1a1a] last:border-0 min-h-[44px] flex items-center"
                  >
                    {t.nav[k]}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section className="relative max-w-3xl mx-auto px-4 md:px-6 pt-20 pb-16">
        {/* Dot grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #1e1e1e 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 20% 40%, black 30%, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 20% 40%, black 30%, transparent 80%)',
          }}
        />

        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <span className="inline-block text-xs px-3 py-1 rounded-full border mb-6"
            style={{ background: '#1a2a0f', color: GREEN, borderColor: '#2d4a1a' }}>
            {t.hero.tag}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-4">
            {t.hero.title1}<br />
            {t.hero.title2}<span style={{ color: GREEN }}>.</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
        >
          <p className="text-[#777] text-base leading-relaxed max-w-xl mb-8">
            {t.hero.desc}
          </p>
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => scrollTo('projects')}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90 min-h-[44px]"
              style={{ background: GREEN }}>
              {t.hero.cta1}
            </button>
            <a href={`/Cristian-Quiros-CV-${lang.toUpperCase()}.pdf`}
              download={`Cristian-Quiros-CV-${lang.toUpperCase()}.pdf`}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-[#ccc] border border-[#444] hover:border-[#666] transition-colors min-h-[44px] flex items-center">
              {t.hero.cta2}
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section id="about"
        className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]"
        {...fadeUp()}
      >
        <SectionLabel>{t.about.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{t.about.title}</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img src={avatar} alt="Cristian Quirós"
            className="w-20 h-20 rounded-full object-cover border-2 flex-shrink-0"
            style={{ borderColor: GREEN }} />
          <div className="space-y-3 text-center md:text-left">
            <p className="text-[#888] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p className="text-[#888] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
          </div>
        </div>
      </motion.section>

      {/* STACK */}
      <section id="stack" className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]">
        <motion.div {...fadeUp()}>
          <SectionLabel>{t.stack.label}</SectionLabel>
          <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{t.stack.title}</h2>
        </motion.div>
        <div className="space-y-5">
          {[
            { key: 'backend', items: techStack.backend },
            { key: 'frontend', items: techStack.frontend },
            { key: 'infra', items: techStack.infra },
            { key: 'tools', items: techStack.tools },
          ].map(({ key, items }, groupIdx) => (
            <motion.div key={key} {...fadeUp(groupIdx * 0.09)}>
              <p className="text-xs text-[#555] mb-2 uppercase tracking-widest">{t.stack[key]}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <Badge key={item} highlight={['Java', 'Spring Boot', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL'].includes(item)}>
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]">
        <motion.div {...fadeUp()}>
          <SectionLabel>{t.projects.label}</SectionLabel>
          <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{t.projects.title}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.projects.items.map((proj, i) => (
            <motion.div key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a5a1a] hover:shadow-[0_0_24px_rgba(106,180,45,0.08)] flex flex-col justify-between gap-4 cursor-default">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {proj.title === 'tubertico.com' && (
                      <img src={tuberticoIconGreen} alt="" className="w-4 h-6 object-contain" />
                    )}
                    {proj.title === 'Tubertico ERP' && (
                      <img src={tuberticoIcon} alt="" className="w-4 h-6 object-contain" />
                    )}
                    <span className="text-white font-semibold text-base">{proj.title}</span>
                  </div>
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border flex-shrink-0 ${
                    proj.status === 'live'
                      ? 'bg-[#0d2010] text-[#6AB42D] border-[#1e4020]'
                      : 'bg-[#1a1a00] text-[#aaa800] border-[#2a2a00]'
                  }`}>
                    {proj.status === 'live' ? t.projects.live : t.projects.wip}
                  </span>
                </div>
                <p className="text-[#666] text-xs leading-relaxed mb-3">{proj.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {proj.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
                </div>
              </div>
              {proj.link && (
                <a href={proj.link} target="_blank" rel="noopener noreferrer"
                  className="text-xs mt-1 inline-flex items-center gap-1 transition-colors"
                  style={{ color: GREEN }}>
                  Visit site →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <Education data={education[lang]} />

      {/* BLOG */}
      <section id="blog" className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]">
        <motion.div {...fadeUp()}>
          <SectionLabel>{t.blog.label}</SectionLabel>
          <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">{t.blog.title}</h2>
          <p className="text-[#555] text-sm mb-8">{t.blog.subtitle}</p>
        </motion.div>
        <div className="space-y-4">
          {t.blog.items.map((post, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.08, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a5a1a] transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium text-sm leading-snug max-w-sm">{post.title}</span>
                <span className="text-[#444] text-[11px] ml-4 flex-shrink-0">{post.date}</span>
              </div>
              <p className="text-[#555] text-xs leading-relaxed mb-3">{post.desc}</p>
              <div className="flex flex-wrap gap-1">
                {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]">
        <motion.div {...fadeUp()}>
          <SectionLabel>{t.contact.label}</SectionLabel>
          <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">{t.contact.title}</h2>
          <p className="text-[#666] text-sm mb-8 max-w-md leading-relaxed">{t.contact.desc}</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              ),
              label: 'Email', value: 'cquiros2dev@gmail.com', href: 'mailto:cquiros2dev@gmail.com',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#e5e5e5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.863-3.058-1.863 0-2.148 1.455-2.148 2.959v5.703h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.002 3.604 4.604v5.592z"/>
                </svg>
              ),
              label: 'LinkedIn', value: '/in/cquiros2', href: 'https://www.linkedin.com/in/cquiros2/',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#e5e5e5">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              ),
              label: 'GitHub', value: '@CQuiros2', href: 'https://github.com/CQuiros2',
            },
            {
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e5e5e5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              ),
              label: 'Location', value: 'San José, Costa Rica', href: null,
            },
          ].map(({ icon, label, value, href }, i) => (
            <motion.div key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-4 flex items-center gap-3 hover:border-[#3a5a1a] transition-colors">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: '#1a2a0f' }}>
                {icon}
              </div>
              <div>
                <p className="text-[#444] text-[11px] uppercase tracking-wider">{label}</p>
                {href ? (
                  <a href={href} target="_blank" rel="noopener noreferrer"
                    className="text-[#ccc] text-sm font-medium hover:text-[#6AB42D] transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-[#ccc] text-sm font-medium">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e1e1e] py-8 text-center">
        <p className="text-[#333] text-xs">
          Built with React + Vite + Tailwind · Cristian Quirós 2026
        </p>
      </footer>

      {/* SCROLL TO TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center z-40 border border-[#3a5a1a] hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: '#1a2a0f' }}
            aria-label="Scroll to top"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  )
}
