'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-background text-white flex flex-col">
            <Navbar />
            <div className="flex-grow pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-10 text-white uppercase tracking-tight">Privacy Policy</h1>

                <div className="prose prose-invert max-w-none text-gray-400 font-sans space-y-8 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Informazioni Generali</h2>
                        <p>
                            In ottemperanza al Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679), JDigital si impegna a proteggere e rispettare la tua privacy. Questa policy spiega quando e perché raccogliamo informazioni personali, come le utilizziamo, le condizioni in cui possiamo divulgarle a terzi e come le teniamo al sicuro.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Dati Raccolti</h2>
                        <p>
                            Possiamo raccogliere e trattare i seguenti dati:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                            <li>Informazioni fornite tramite la compilazione di moduli sul nostro sito web (es. nome, email, telefono).</li>
                            <li>Registrazione della corrispondenza in caso di contatto.</li>
                            <li>Dettagli delle visite al nostro sito web, inclusi ma non limitati a, dati sul traffico, dati sulla posizione e altri dati di comunicazione.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Utilizzo delle Informazioni</h2>
                        <p>
                            Utilizziamo le tue informazioni unicamente per:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                            <li>Rispondere alle tue richieste di contatto o preventivo.</li>
                            <li>Eseguire gli obblighi derivanti da eventuali contratti stipulati.</li>
                            <li>Fornirti comunicazioni relative ai nostri servizi.</li>
                            <li>Migliorare l'esperienza del nostro sito web.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Sicurezza dei Dati</h2>
                        <p>
                            Adottiamo misure di sicurezza appropriate per proteggere da accessi non autorizzati, alterazioni, divulgazioni o distruzioni dei tuoi dati personali, nome utente, password, informazioni sulle transazioni e dati memorizzati sul nostro sito.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. I Tuoi Diritti</h2>
                        <p>
                            Hai il diritto di accedere alle tue informazioni personali detenute da noi, richiederne la correzione, l'aggiornamento o la cancellazione. Per esercitare tali diritti, puoi contattarci a <a href="mailto:info@jdigitaldev.it" className="text-primary-500 hover:text-primary-400 transition-colors">info@jdigitaldev.it</a>.
                        </p>
                    </section>

                    <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-white/10">
                        Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    )
}
