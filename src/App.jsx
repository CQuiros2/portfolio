import { useState } from 'react'
import { motion } from 'framer-motion'
import { content, techStack, education } from './data'
import avatar from './assets/avatar.jpg'
import tuberticoIcon from './assets/tubertico_icon.png'
import tuberticoIconGreen from './assets/tubertico_icon_green.png'
import Education from './components/Education'

const GREEN = '#6AB42D'

function Badge({ children, highlight }) {
  return (
    <span className={`text-xs px-3 py-1 rounded-md border ${
      highlight
        ? 'bg-[#111e09] border-[#3a5a1a] text-[#6AB42D]'
        : 'bg-[#1a1a1a] border-[#2a2a2a] text-[#aaa]'
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
    <p className="text-xs font-semibold tracking-[2px] uppercase mb-1" style={{ color: GREEN }}>
      {children}
    </p>
  )
}

export default function App() {
  const [lang, setLang] = useState('en')
  const t = content[lang]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#e5e5e5] font-sans">

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-[#1e1e1e] bg-[#0f0f0f]/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 grid grid-cols-3 items-center">
          <span className="text-base font-bold tracking-tight text-white">
            CQ<span style={{ color: GREEN }}>.</span>dev
          </span>
          <div className="hidden md:flex justify-center items-center gap-5">
            {['about','stack','projects','education','blog','contact'].map(k => (
              <button key={k} onClick={() => scrollTo(k)}
                className="text-sm text-[#888] hover:text-[#6AB42D] transition-colors capitalize whitespace-nowrap">
                {t.nav[k]}
              </button>
            ))}
          </div>
          <div className="flex justify-end gap-1">
            {['en','es'].map(l => (
              <button key={l} onClick={() => setLang(l)}
                className={`text-xs px-3 py-1 rounded border transition-colors uppercase font-medium ${
                  lang === l
                    ? 'bg-[#6AB42D] text-white border-[#6AB42D]'
                    : 'bg-transparent text-[#666] border-[#333] hover:border-[#555]'
                }`}>
                {l}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-4 md:px-6 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
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
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <p className="text-[#777] text-base leading-relaxed max-w-xl mb-8">
            {t.hero.desc}
          </p>
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => scrollTo('projects')}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ background: GREEN }}>
              {t.hero.cta1}
            </button>
            <a href={`/Cristian-Quiros-CV-${lang.toUpperCase()}.pdf`} download={`Cristian-Quiros-CV-${lang.toUpperCase()}.pdf`}
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-[#ccc] border border-[#444] hover:border-[#666] transition-colors">
              {t.hero.cta2}
            </a>
          </div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]">
        <SectionLabel>{t.about.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{t.about.title}</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <img src={avatar} alt="Cristian Quirós"
            className="w-20 h-20 rounded-full object-cover border-2 flex-shrink-0"
            style={{ borderColor: GREEN }} />
          <div className="space-y-3">
            <p className="text-[#888] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p className="text-[#888] text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.p2 }} />
          </div>
        </div>
      </section>

      {/* STACK */}
      <motion.section
        id="stack"
        className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <SectionLabel>{t.stack.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{t.stack.title}</h2>
        <div className="space-y-5">
          {[
            { key: 'backend', items: techStack.backend },
            { key: 'frontend', items: techStack.frontend },
            { key: 'infra', items: techStack.infra },
            { key: 'tools', items: techStack.tools },
          ].map(({ key, items }) => (
            <div key={key}>
              <p className="text-xs text-[#555] mb-2 uppercase tracking-widest">{t.stack[key]}</p>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <Badge key={item} highlight={['Java','Spring Boot','React 19','TypeScript','Node.js','PostgreSQL'].includes(item)}>
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]">
        <SectionLabel>{t.projects.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{t.projects.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.projects.items.map((proj, i) => (
            <motion.div key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a5a1a] transition-colors flex flex-col justify-between gap-4">
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
                  <span className={`text-[11px] px-2 py-0.5 rounded-full border ${
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
        <SectionLabel>{t.blog.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">{t.blog.title}</h2>
        <p className="text-[#555] text-sm mb-8">{t.blog.subtitle}</p>
        <div className="space-y-4">
          {t.blog.items.map((post, i) => (
            <div key={i}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a5a1a] transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="text-white font-medium text-sm leading-snug max-w-sm">{post.title}</span>
                <span className="text-[#444] text-[11px] ml-4 flex-shrink-0">{post.date}</span>
              </div>
              <p className="text-[#555] text-xs leading-relaxed mb-3">{post.desc}</p>
              <div className="flex flex-wrap gap-1">
                {post.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <SectionLabel>{t.contact.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">{t.contact.title}</h2>
        <p className="text-[#666] text-sm mb-8 max-w-md leading-relaxed">{t.contact.desc}</p>
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
          ].map(({ icon, label, value, href }) => (
            <div key={label}
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
            </div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e1e1e] py-8 text-center">
        <p className="text-[#333] text-xs">
          Built with React + Vite + Tailwind · Cristian Quirós 2026
        </p>
      </footer>

    </div>
  )
}
