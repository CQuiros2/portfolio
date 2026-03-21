import { useState } from 'react'
import { content, techStack } from './data'
import avatar from './assets/avatar.jpg'
import tuberticoIcon from './assets/tubertico_icon.png'

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
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 border-b border-[#1e1e1e] bg-[#0f0f0f]/90 backdrop-blur-sm">
        <span className="text-base font-bold tracking-tight text-white">
          CQ<span style={{ color: GREEN }}>.</span>dev
        </span>
        <div className="hidden md:flex gap-6">
          {['about','stack','projects','blog','contact'].map(k => (
            <button key={k} onClick={() => scrollTo(k)}
              className="text-sm text-[#888] hover:text-[#6AB42D] transition-colors capitalize">
              {t.nav[k]}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
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
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <span className="inline-block text-xs px-3 py-1 rounded-full border mb-6"
          style={{ background: '#1a2a0f', color: GREEN, borderColor: '#2d4a1a' }}>
          {t.hero.tag}
        </span>
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white mb-4">
          {t.hero.title1}<br />
          {t.hero.title2}<span style={{ color: GREEN }}>.</span>
        </h1>
        <p className="text-[#777] text-base leading-relaxed max-w-xl mb-8">
          {t.hero.desc}
        </p>
        <div className="flex gap-3 flex-wrap">
          <button onClick={() => scrollTo('projects')}
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: GREEN }}>
            {t.hero.cta1}
          </button>
          <a href="/cv.pdf" download
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-[#ccc] border border-[#444] hover:border-[#666] transition-colors">
            {t.hero.cta2}
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-14 border-t border-[#1e1e1e]">
        <SectionLabel>{t.about.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{t.about.title}</h2>
        <div className="flex gap-6 items-start">
          <img src={avatar} alt="Cristian Quirós"
            className="w-20 h-20 rounded-full object-cover border-2 flex-shrink-0"
            style={{ borderColor: GREEN }} />
          <div className="space-y-3">
            <p className="text-[#888] text-sm leading-relaxed">{t.about.p1}</p>
            <p className="text-[#888] text-sm leading-relaxed">{t.about.p2}</p>
          </div>
        </div>
      </section>

      {/* STACK */}
      <section id="stack" className="max-w-3xl mx-auto px-6 py-14 border-t border-[#1e1e1e]">
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
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-3xl mx-auto px-6 py-14 border-t border-[#1e1e1e]">
        <SectionLabel>{t.projects.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{t.projects.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.projects.items.map((proj) => (
            <div key={proj.title}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a5a1a] transition-colors flex flex-col justify-between gap-4">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    {proj.title === 'tubertico.com' || proj.title === 'Tubertico ERP' ? (
                      <img src={tuberticoIcon} alt="Tubertico" className="w-5 h-7 object-contain" />
                    ) : null}
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
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="max-w-3xl mx-auto px-6 py-14 border-t border-[#1e1e1e]">
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
      <section id="contact" className="max-w-3xl mx-auto px-6 py-14 border-t border-[#1e1e1e]">
        <SectionLabel>{t.contact.label}</SectionLabel>
        <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">{t.contact.title}</h2>
        <p className="text-[#666] text-sm mb-8 max-w-md leading-relaxed">{t.contact.desc}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { icon: '✉', label: 'Email', value: 'cquiros2dev@gmail.com', href: 'mailto:cquiros2dev@gmail.com' },
            { icon: 'in', label: 'LinkedIn', value: '/in/cquiros2', href: 'https://www.linkedin.com/in/cquiros2/' },
            { icon: 'gh', label: 'GitHub', value: '@CQuiros2', href: 'https://github.com/CQuiros2' },
            { icon: '📍', label: 'Location', value: 'San José, Costa Rica', href: null },
          ].map(({ icon, label, value, href }) => (
            <div key={label}
              className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-4 flex items-center gap-3 hover:border-[#3a5a1a] transition-colors">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold flex-shrink-0"
                style={{ background: '#1a2a0f', color: GREEN }}>
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
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#1e1e1e] py-8 text-center">
        <p className="text-[#333] text-xs">
          Built with React + Vite + Tailwind · Cristian Quirós 2026
        </p>
      </footer>

    </div>
  )
}
