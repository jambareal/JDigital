'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie } from 'lucide-react'

const STORAGE_KEY = 'jdigital-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY)
    if (consent === null) {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (accepted: boolean) => {
    localStorage.setItem(STORAGE_KEY, accepted ? 'accepted' : 'rejected')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay pointer-events-none" />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 border border-primary-500/30 flex items-center justify-center shrink-0">
                  <Cookie className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide mb-1">
                    Utilizzo dei Cookie
                  </h3>
                  <p className="text-gray-400 text-sm font-sans leading-relaxed">
                    Utilizziamo cookie tecnici e di statistica per migliorare la tua esperienza. Non raccogliamo dati per pubblicità.{' '}
                    <Link
                      href="/cookie-policy"
                      className="text-primary-500 hover:text-primary-400 underline underline-offset-2 transition-colors"
                    >
                      Leggi la Cookie Policy
                    </Link>
                  </p>
                </div>
              </div>
              <div className="flex gap-3 w-full sm:w-auto shrink-0">
                <button
                  onClick={() => handleChoice(false)}
                  className="btn-neo-outline flex-1 sm:flex-none px-6 py-3 text-sm"
                >
                  Rifiuta
                </button>
                <button
                  onClick={() => handleChoice(true)}
                  className="btn-neo flex-1 sm:flex-none px-6 py-3 text-sm"
                >
                  Accetta
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
