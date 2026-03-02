'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Sparkles, Code, Crosshair } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background noise-bg selection:bg-primary-500 selection:text-black pt-20">

      {/* Cinematic Background Elements (Static for Performance) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[120px] opacity-50 mix-blend-screen"
        />
        <div
          className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-primary-700/5 rounded-full blur-[100px] opacity-40 mix-blend-screen"
        />

        {/* Floating Minimal Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        {/* Floating Icons */}
        <motion.div
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4"
        >
          <Code className="w-12 h-12 text-white/10" />
        </motion.div>

        <motion.div
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 right-1/4"
        >
          <Crosshair className="w-10 h-10 text-primary-500/20" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        {/* Mini badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center space-x-2 px-3 py-1 border border-primary-500/30 rounded-full bg-primary-500/5 backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-primary-400" />
          <span className="text-xs font-display uppercase tracking-widest text-primary-400 font-bold">L&apos;Agenzia Digitale del Futuro</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 max-w-5xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-white leading-[1.05] tracking-tighter uppercase">
            Dominare il <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 text-glow">
              Mercato
            </span> Digitale
          </h1>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed tracking-wide"
          >
            Design radicale, prestazioni estreme e conversioni massimizzate.
            Costruiamo esperienze che lasciano il segno.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <Link
              href="/#servizi"
              className="btn-neo px-10 py-5 text-lg w-full sm:w-auto group"
            >
              Cosa Facciamo
              <ArrowRight className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/contatti"
              className="btn-neo-outline px-10 py-5 text-lg w-full sm:w-auto"
            >
              Inizia Ora
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary-500/50 to-transparent">
          <motion.div
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="w-[3px] h-3 bg-primary-400 rounded-full -ml-[1px] shadow-[0_0_10px_#ccff00]"
          />
        </div>
      </motion.div>
    </section>
  )
}

