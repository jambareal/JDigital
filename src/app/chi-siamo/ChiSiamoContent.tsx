'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CTASection from '@/components/CTASection'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Users, Target, Zap, Heart, Award, Clock, Globe, ArrowRight } from 'lucide-react'

const teamMembers = [
  {
    name: 'Antonio Gambarrota',
    role: 'Founder',
    description: 'Strategia digitale, UI/UX e presenza social per trasformare idee in prodotti che funzionano davvero.',
    skills: ['Strategia Digitale', 'UI/UX Design', 'Social Media', 'Frontend']
  },
  {
    name: 'Davide Persia',
    role: 'Founder',
    description: 'Backend, SEO e analytics per far crescere il business con numeri e performance reali.',
    skills: ['Backend', 'SEO', 'Analytics']
  }
]

const values = [
  {
    icon: Users,
    title: 'Team Giovane',
    description: 'Siamo un team di professionisti under 30, sempre aggiornati sulle ultime tendenze digitali e tecnologiche.'
  },
  {
    icon: Target,
    title: 'Orientati ai Risultati',
    description: 'Ogni progetto ha un obiettivo preciso: far crescere il tuo business online e aumentare le vendite.'
  },
  {
    icon: Zap,
    title: 'Creatività e Innovazione',
    description: 'Mettiamo passione e creatività in ogni dettaglio per distinguerti dalla concorrenza.'
  },
  {
    icon: Heart,
    title: 'Relazioni Autentiche',
    description: 'Non siamo solo fornitori, ma partner di crescita per il tuo successo digitale a lungo termine.'
  }
]

const stats = [
  { number: '50+', label: 'Progetti Completati', icon: Award },
  { number: '100%', label: 'Clienti Soddisfatti', icon: Heart },
  { number: '24h', label: 'Tempo di Risposta', icon: Clock },
  { number: '3+', label: 'Anni di Esperienza', icon: Globe }
]

export default function ChiSiamoContent() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-500/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-surface-200/50 border border-white/10 px-4 py-2 rounded-full mb-8 w-fit backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-widest text-gray-300">Chi Siamo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.0] tracking-tighter uppercase mb-6">
              Il Team che Trasforma le{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                Tue Idee
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans leading-relaxed">
              Siamo JDigital, un&apos;agenzia giovane, creativa e orientata ai risultati.
              La nostra missione è trasformare le tue idee in successi digitali tangibili.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-surface-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary-500/5 blur-[150px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-primary-500" />
              <span className="mx-4 text-primary-500 font-display uppercase tracking-widest text-sm font-bold">L&apos;Elite</span>
              <div className="w-12 h-px bg-primary-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase mb-6">
              Il Nostro <span className="text-primary-500 text-glow">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">
              Professionisti appassionati e competenti, pronti a trasformare le tue idee in realtà digitali.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full border border-white/10 bg-surface-100/50 p-6 rounded-2xl hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 noise-bg opacity-20 mix-blend-overlay pointer-events-none" />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-primary-500 text-2xl font-display font-bold group-hover:border-primary-500 group-hover:shadow-[0_0_30px_rgba(204,255,0,0.2)] transition-all duration-300">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-2 uppercase group-hover:text-primary-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-primary-500 font-semibold text-sm mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed font-sans">
                      {member.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 text-primary-400 text-xs rounded-full font-sans"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-primary-500" />
              <span className="mx-4 text-primary-500 font-display uppercase tracking-widest text-sm font-bold">Cosa ci Guida</span>
              <div className="w-12 h-px bg-primary-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase mb-6">
              I Nostri <span className="text-primary-500 text-glow">Valori</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">
              I principi che guidano il nostro lavoro e la nostra relazione con i clienti.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full border border-white/10 bg-surface-50 p-6 rounded-2xl hover:border-primary-500/50 transition-all duration-300">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 mb-4 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:border-primary-500 group-hover:bg-primary-500/10 group-hover:text-primary-500 text-gray-400 transition-all duration-300">
                      <value.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-3 uppercase group-hover:text-primary-400 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-sans">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-surface-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[300px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border-y border-white/10 py-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="py-6 md:py-0"
                >
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <stat.icon className="w-8 h-8 text-primary-500" />
                    <span className="text-5xl md:text-6xl font-display font-black text-white leading-none">
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="/contatti"
              className="btn-neo px-10 py-5 inline-flex items-center text-lg"
            >
              Parliamone
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
