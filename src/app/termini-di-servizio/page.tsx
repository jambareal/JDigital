'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TerminiDiServizio() {
    return (
        <main className="min-h-screen bg-background text-white flex flex-col">
            <Navbar />
            <div className="flex-grow pt-40 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-10 text-white uppercase tracking-tight">Termini di Servizio</h1>

                <div className="prose prose-invert max-w-none text-gray-400 font-sans space-y-8 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Accettazione dei Termini</h2>
                        <p>
                            Accedendo e utilizzando il sito web di JDigital, accetti di essere vincolato dai presenti Termini di Servizio, da tutte le leggi e i regolamenti applicabili. Se non sei d'accordo con una qualsiasi di queste condizioni, ti è vietato l'utilizzo o l'accesso a questo sito.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Servizi Offerti</h2>
                        <p>
                            JDigital ("noi", "nostro", "l'agenzia") fornisce servizi di sviluppo Web App e Siti Web. I dettagli specifici, l'ambito del lavoro e le tariffe per questi servizi saranno delineati in contratti o preventivi separati forniti individualmente ai clienti.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Proprietà Intellettuale</h2>
                        <p>
                            Tutto il codice, il design e i contenuti sviluppati da JDigital per il cliente rimangono di proprietà di JDigital fino al completo pagamento del compenso concordato, momento in cui i diritti di proprietà verranno trasferiti al cliente, salvo diversamente specificato per iscritto.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Limitazione di Responsabilità</h2>
                        <p>
                            In nessun caso JDigital o i suoi fornitori saranno ritenuti responsabili per eventuali danni (inclusi, senza limitazione, danni per perdita di dati o profitti, o per interruzione dell'attività) derivanti dall'utilizzo o dall'impossibilità di utilizzare i materiali sul sito web di JDigital o dai servizi forniti.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Legge Applicabile</h2>
                        <p>
                            I presenti termini e condizioni sono regolati e interpretati in conformità con le leggi italiane e ti sottometti irrevocabilmente alla giurisdizione esclusiva dei tribunali di tale Stato o località.
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
