'use client'

import { motion } from 'framer-motion'
import { Users, Target, Zap, Heart } from 'lucide-react'

const teamValues = [
  {
    icon: Users,
    title: 'Elite Squad',
    description: 'Un team di ribelli digitali under 30. Niente burocrazia, solo performance pura e codice impeccabile.',
  },
  {
    icon: Target,
    title: 'Data Native',
    description: 'Ogni pixel spinto in produzione ha un singolo scopo: distruggere i tuoi KPI e dominare.',
  },
  {
    icon: Zap,
    title: 'Design Radicale',
    description: 'Dimentica i template. Creiamo interfacce che fanno girare la testa e convertono.',
  },
  {
    icon: Heart,
    title: 'Partner In-Crime',
    description: 'Non siamo fornitori. Entriamo in trincea con te per scalare le vette del mercato.',
  }
]

export default function TeamSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden text-center sm:text-left">
      {/* Decorative floating grids */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/10 via-background to-background pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-surface-200/50 via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 uppercase tracking-tighter">
            L&apos;Impero del <br className="sm:hidden" />
            <span className="text-primary-500 text-glow">
              Codice
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-sans">
            Giovane, veloce, implacabile. L&apos;élite dello sviluppo web e del design strategico lavora per te.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {teamValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full border border-white/5 bg-surface-50 p-6 rounded-xl hover:border-primary-500 hover:bg-surface-100 transition-all duration-300">
                <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                  <div className="w-12 h-12 mb-6 rounded-lg bg-black text-gray-500 border border-white/10 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-black group-hover:border-primary-400 transition-all duration-300 shadow-xl">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors uppercase">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brutalist Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-y border-white/10 py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="py-4 md:py-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-display font-black text-primary-500 mb-2 leading-none"
              >
                100+
              </motion.div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Brand Elevati</p>
            </div>

            <div className="py-4 md:py-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-display font-black text-white mb-2 leading-none"
              >
                99%
              </motion.div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Uptime & Affidabilità</p>
            </div>

            <div className="py-4 md:py-0">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-display font-black text-white mb-2 leading-none"
              >
                24/7
              </motion.div>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Supporto Tattico</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

