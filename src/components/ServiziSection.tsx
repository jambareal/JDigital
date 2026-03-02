'use client'

import { motion } from 'framer-motion'
import { Globe, ArrowRight, Code, Zap, Smartphone } from 'lucide-react'
import Link from 'next/link'

export default function ServiziSection() {
  return (
    <section id="servizi" className="py-24 bg-surface-50 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
            <div className="w-12 h-px bg-primary-500" />
            <span className="text-primary-500 font-display uppercase tracking-widest text-sm font-bold">La Nostra Arma Segreta</span>
            <div className="w-12 h-px bg-primary-500 lg:hidden" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase leading-[1.1]">
            Web App & <span className="text-primary-500 text-glow">Siti Web</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mt-6 mx-auto lg:mx-0 font-sans">
            Non siamo un&apos;agenzia generalista. Facciamo una sola cosa e la facciamo in modo maniacale:
            progettiamo e sviluppiamo piattaforme digitali radicali per dominare il mercato.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="group relative max-w-5xl mx-auto lg:mx-0"
        >
          <div className="glass-panel p-8 md:p-12 lg:p-16 rounded-3xl border border-primary-500/20 hover:border-primary-500/50 transition-all duration-500 relative overflow-hidden bg-surface-100/40">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary-500/5 blur-[100px] pointer-events-none group-hover:bg-primary-500/10 transition-colors duration-500" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-left">
                <div className="w-20 h-20 rounded-2xl bg-black border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.1)] group-hover:shadow-[0_0_50px_rgba(204,255,0,0.3)] group-hover:border-primary-500 transition-all duration-500">
                  <Globe className="w-10 h-10 text-primary-500" />
                </div>

                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white uppercase tracking-wide leading-tight">
                  Ecosistemi Digitali ad <span className="text-primary-400">Alte Prestazioni</span>
                </h3>

                <ul className="space-y-4 text-gray-400 font-sans text-lg">
                  <li className="flex items-start">
                    <Zap className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                    <span>Sviluppo all&apos;avanguardia con architetture moderne e codice pulito.</span>
                  </li>
                  <li className="flex items-start">
                    <Code className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                    <span>Costruzione di Web App complesse, SaaS e portali su misura.</span>
                  </li>
                  <li className="flex items-start">
                    <Smartphone className="w-6 h-6 text-primary-500 mr-4 flex-shrink-0 mt-1" />
                    <span>Siti web vetrina e e-commerce progettati maniacalmente per convertire.</span>
                  </li>
                </ul>

                <div className="pt-6">
                  <Link
                    href="/contatti"
                    className="btn-neo px-10 py-5 text-sm inline-flex w-full sm:w-auto text-center"
                  >
                    Richiedi Sviluppo
                    <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>

              <div className="hidden md:flex justify-center items-center relative h-full min-h-[400px]">
                {/* Abstract visualization of a web app */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-[80px]" />
                <div className="relative w-full max-w-sm aspect-[4/5] border border-white/10 rounded-2xl glass-panel flex flex-col p-6 shadow-2xl backdrop-blur-md">
                  <div className="h-4 w-1/3 bg-white/10 rounded-full mb-6" />
                  <div className="w-full flex flex-col space-y-4 flex-grow">
                    <div className="h-32 w-full bg-primary-500/10 border border-primary-500/20 rounded-xl" />
                    <div className="flex space-x-4">
                      <div className="h-24 w-1/2 bg-white/5 rounded-xl" />
                      <div className="h-24 w-1/2 bg-white/5 rounded-xl" />
                    </div>
                    <div className="h-12 w-full bg-primary-500/20 rounded-xl mt-auto self-end" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

