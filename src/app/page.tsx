import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiziSection from '@/components/ServiziSection'
import TeamSection from '@/components/TeamSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiziSection />
      <TeamSection />
      <CTASection />
      <Footer />
    </main>
  )
}

