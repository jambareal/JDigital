'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Send, ArrowRight, Sparkles, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContattiContent() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    dettagli: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setStatus('idle')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Errore durante l\'invio')
      }

      setStatus('success')
      setFormData({ nome: '', email: '', telefono: '', dettagli: '' })
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Errore durante l\'invio della richiesta')
    }
  }

  return (
    <main className="min-h-screen bg-background text-white flex flex-col">
      <Navbar />

      <div className="flex-grow pt-32 pb-24 relative overflow-hidden flex items-start">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

          {/* Heading - full width above the grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-surface-200/50 border border-white/10 px-4 py-2 rounded-full mb-8 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
              <span className="text-sm font-bold uppercase tracking-widest text-gray-300">Nuovo Progetto</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-display font-black text-white leading-[1.0] tracking-tighter uppercase">
              Inizia la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                Rivoluzione.
              </span>
            </h1>
          </motion.div>

          {/* Two columns: text left, form right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col justify-center min-w-0"
          >
            <p className="text-xl text-gray-400 leading-relaxed font-sans max-w-lg mb-10">
              Parlaci della tua idea. Sviluppiamo esclusivamente Web App e Siti Web ad altissime prestazioni per far esplodere il tuo business.
            </p>

            <div className="space-y-6 text-gray-400 font-sans">
              <div className="flex items-center">
                <Sparkles className="w-6 h-6 text-primary-500 mr-4" />
                <span>Risposta garantita entro 24 ore.</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="w-6 h-6 text-primary-500 mr-4" />
                <span>Prima consulenza strategica inclusa.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute inset-0 noise-bg opacity-30 mix-blend-overlay pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">

                <div>
                  <label htmlFor="nome" className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Nome / Azienda</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-surface-100/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-sans"
                    placeholder="Il tuo nome o azienda"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-surface-100/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-sans"
                      placeholder="mario@azienda.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Telefono (Opzionale)</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full bg-surface-100/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-sans"
                      placeholder="+39 333 000 0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="dettagli" className="block text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">Parlaci del progetto Web/App</label>
                  <textarea
                    id="dettagli"
                    name="dettagli"
                    required
                    rows={4}
                    value={formData.dettagli}
                    onChange={handleChange}
                    className="w-full bg-surface-100/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all font-sans resize-none"
                    placeholder="Vogliamo sviluppare una piattaforma per..."
                  ></textarea>
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-primary-500/20 border border-primary-500/50 text-primary-400">
                    <CheckCircle className="w-5 h-5 shrink-0" />
                    <span>Richiesta inviata! Ti risponderemo entro 24 ore.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-red-400">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-neo w-full py-5 flex items-center justify-center text-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      Invio in corso...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-3" />
                      Invia Richiesta
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
