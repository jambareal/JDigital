'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function CookiePolicy() {
    return (
        <main className="min-h-screen bg-background text-white flex flex-col">
            <Navbar />
            <div className="flex-grow pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-10 text-white uppercase tracking-tight">Cookie Policy</h1>

                <div className="prose prose-invert max-w-none text-gray-400 font-sans space-y-8 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Cosa sono i Cookie?</h2>
                        <p>
                            I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, ove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie delle c.d. "terze parti" vengono, invece, impostati da un sito web diverso da quello che l'utente sta visitando.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Come utilizziamo i Cookie</h2>
                        <p>
                            Il nostro sito utilizza esclusivamente cookie tecnici necessari per il corretto funzionamento del sito e per garantire una navigazione sicura ed efficiente. Non utilizziamo cookie di profilazione per inviarti pubblicità personalizzata.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
                            <li><strong>Cookie Tecnici Essenziali:</strong> Necessari per permetterti di navigare nel sito e utilizzare le sue funzioni.</li>
                            <li><strong>Cookie di Statistica:</strong> (Analytics crittografati e anonimizzati) Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo e trasmettendo informazioni in forma aggregata.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Gestione dei Cookie</h2>
                        <p>
                            Puoi gestire le preferenze relative ai Cookie direttamente all'interno del tuo browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i Cookie installati in passato.
                        </p>
                        <p className="mt-4">
                            Per disabilitare i cookie nel tuo browser, verifica le guide ufficiali di <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" className="text-primary-500 hover:underline">Google Chrome</a>, <a href="https://support.mozilla.org/it/kb/gestione-dei-cookie" target="_blank" rel="noreferrer" className="text-primary-500 hover:underline">Mozilla Firefox</a>, o <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" className="text-primary-500 hover:underline">Apple Safari</a>.
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
