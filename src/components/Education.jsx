import { motion } from 'framer-motion'

const GREEN = '#6AB42D'

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold tracking-[2px] uppercase mb-1" style={{ color: GREEN }}>
      {children}
    </p>
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
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#161616] border border-[#2a2a2a] rounded-xl p-5 hover:border-[#3a5a1a] transition-colors flex items-start gap-4"
          >
            {item.logo ? (
              <img
                src={item.logo}
                alt={item.institution}
                className="w-12 h-12 object-contain flex-shrink-0 rounded-lg"
                style={{ background: '#1a2a0f', padding: '4px' }}
              />
            ) : (
              <div
                className="w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center text-xs font-bold"
                style={{ background: '#1a2a0f', color: GREEN }}
              >
                LPI
              </div>
            )}
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
