import { Metadata } from 'next'
import ContattiContent from './ContattiContent'

export const metadata: Metadata = {
  title: 'Contatti | JDigital - Parliamo del Tuo Progetto Digitale',
  description: 'Contattaci per una consulenza gratuita. Siamo qui per trasformare le tue idee digitali in successi concreti. Risposta garantita in 24 ore.',
}

export default function ContattiPage() {
  return <ContattiContent />
}
