'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    'Navigazione': [
      { name: 'Home', href: '/' },
      { name: 'Chi Siamo', href: '/#chi-siamo' },
      { name: 'Contatti', href: '/contatti' },
    ],
    'Note Legali': [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Termini di Servizio', href: '/termini-di-servizio' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="bg-black text-foreground border-t border-white/5 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo e Descrizione */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="flex items-center space-x-3 mb-6 inline-flex group">
              <div className="w-12 h-12 bg-primary-500 rounded flex items-center justify-center transform group-hover:-rotate-6 transition-transform duration-300 shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                <Zap className="w-6 h-6 text-black fill-current" />
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white">JDigital</h3>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm text-sm">
              Non siamo la solita agenzia. Trasformiamo le tue idee digitali in esperienze indimenticabili.
              Siti web, branding e strategie per dominare il mercato.
            </p>

            {/* Contatti */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-gray-400 hover:text-primary-400 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary-500 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium tracking-wide">info@jdigitaldev.it</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 hover:text-primary-400 transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary-500 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium tracking-wide">+39 320 287 9442</span>
              </div>
              <div className="flex items-center space-x-4 text-gray-400">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm tracking-wide">BT, Puglia, Italia</span>
              </div>
            </div>
          </motion.div>

          {/* Link di Navigazione */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h4 className="text-lg font-display font-bold uppercase tracking-wider mb-6 text-white">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-primary-500 transition-colors duration-200 text-sm tracking-wide flex items-center group"
                    >
                      <span className="w-0 h-px bg-primary-500 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links e Copyright */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ y: -4 }}
                className="w-12 h-12 rounded bg-surface-100 border border-white/5 flex items-center justify-center text-gray-400 hover:text-black hover:bg-primary-500 hover:border-primary-500 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white/5 uppercase select-none tracking-tighter">
              JDigital
            </h1>
            <p className="text-gray-500 text-xs tracking-wider mt-2 uppercase">
              © {new Date().getFullYear()} JDigital. Tutti i diritti riservati.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

