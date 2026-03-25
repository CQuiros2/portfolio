import { motion } from 'framer-motion'

const GREEN = '#6AB42D'

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

export default function Education({ data }) {
  return (
    <section id="education" className="max-w-3xl mx-auto px-4 md:px-6 py-14 border-t border-[#1e1e1e]">
      <SectionLabel>{data.label}</SectionLabel>
      <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">{data.title}</h2>
      <div className="space-y-4">
        {data.items.map((item, i) => (
          <motion.div
            key={item.institution + item.degree}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a5a1a] transition-colors flex flex-col sm:flex-row items-start gap-5"
          >
            {/* Logo */}
            <div className="flex-shrink-0 bg-white rounded-xl px-3 py-2 flex items-center justify-center"
              style={{ minWidth: '96px', minHeight: '56px' }}>
              <img
                src={item.logo}
                alt={item.institution}
                className="w-24 h-12 object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                <span className="text-white font-semibold text-sm leading-snug">{item.institution}</span>
                <span
                  className="text-[11px] px-2 py-0.5 rounded-full border whitespace-nowrap flex-shrink-0"
                  style={{ background: '#0d2010', color: GREEN, borderColor: '#1e4020' }}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-[#aaa] text-sm mb-1">{item.degree}</p>
              <div className="flex flex-wrap gap-x-3 text-[#555] text-xs">
                <span>{item.period}</span>
                {item.location && <span>· {item.location}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
