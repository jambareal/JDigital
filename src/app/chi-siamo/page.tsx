import { Metadata } from 'next'
import ChiSiamoContent from './ChiSiamoContent'

export const metadata: Metadata = {
  title: 'Chi Siamo | JDigital - Il Team che Trasforma le Tue Idee Digitali',
  description: 'Conosci il team di JDigital: giovani professionisti creativi e orientati ai risultati. La nostra missione è far crescere il tuo business online.',
}

export default function ChiSiamoPage() {
  return <ChiSiamoContent />
}
