'use client'

import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, Sparkles, Zap, Target } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section id="contatti" className="py-32 bg-surface-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-500/10 blur-[150px] rounded-full" />

        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 md:left-32"
        >
          <Sparkles className="w-8 h-8 text-primary-500/40" />
        </motion.div>

        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 md:right-32"
        >
          <MessageCircle className="w-10 h-10 text-primary-500/40" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-16 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle noise inside the box */}
          <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay"></div>

          <div className="relative z-10 space-y-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 bg-surface-200/50 border border-white/10 px-4 py-2 rounded-full mb-4 shadow-lg backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-300">Pronto per scalare?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] uppercase tracking-tight"
            >
              Domina il Tuo<br />
              <span className="text-primary-500 text-glow">Mercato.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-sans"
            >
              Smettila di essere invisibile. Iniziamo a costruire un ecosistema digitale progettato per annientare la concorrenza.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Link
                href="/contatti"
                className="btn-neo px-10 py-5 w-full sm:w-auto text-lg"
              >
                Inizia il Progetto
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#servizi"
                className="btn-neo-outline px-10 py-5 w-full sm:w-auto text-lg"
              >
                Scopri di Più
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-10 border-t border-white/10 mt-10"
            >
              <div className="flex flex-wrap justify-center gap-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                <span className="flex items-center"><Sparkles className="w-4 h-4 mr-2 text-primary-500" /> Design Radicale</span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="flex items-center"><Zap className="w-4 h-4 mr-2 text-primary-500" /> Performance Estrema</span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="flex items-center"><Target className="w-4 h-4 mr-2 text-primary-500" /> Conversioni</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

