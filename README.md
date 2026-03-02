# JDigital - Agenzia Digitale

Sito web vetrina per JDigital, un'agenzia digitale italiana specializzata in siti web, social media, SEO e branding.

## 🚀 Tecnologie Utilizzate

- **Next.js 14** con App Router
- **TypeScript** per la type safety
- **Tailwind CSS** per lo styling
- **Framer Motion** per le animazioni
- **Lucide React** per le icone
- **shadcn/ui** per i componenti UI
- **Inter** come font principale

## 🎨 Design

Il sito è ispirato al design moderno e pulito di marckdev.it, con:
- Layout responsive e mobile-first
- Gradienti di sfondo morbidi
- Animazioni fluide con Framer Motion
- Colori pastello (verde acqua, blu, violetto)
- Componenti UI moderni e accessibili

## 📁 Struttura del Progetto

```
src/
├── app/                    # App Router di Next.js 14
│   ├── page.tsx           # Homepage
│   ├── servizi/page.tsx   # Pagina Servizi
│   ├── chi-siamo/page.tsx # Pagina Chi Siamo
│   ├── contatti/page.tsx  # Pagina Contatti
│   ├── layout.tsx         # Layout principale
│   └── globals.css        # Stili globali
├── components/            # Componenti riutilizzabili
│   ├── ui/               # Componenti UI base
│   ├── Navbar.tsx        # Navigazione
│   ├── Hero.tsx          # Sezione hero
│   ├── ServiziSection.tsx # Sezione servizi
│   ├── TeamSection.tsx   # Sezione team
│   ├── CTASection.tsx    # Call to action
│   └── Footer.tsx        # Footer
└── lib/                  # Utilities
    └── utils.ts          # Funzioni helper
```

## 🛠️ Installazione e Setup

1. **Clona il repository**
   ```bash
   git clone <repository-url>
   cd jdigital
   ```

2. **Installa le dipendenze**
   ```bash
   npm install
   ```

3. **Avvia il server di sviluppo**
   ```bash
   npm run dev
   ```

4. **Apri il browser**
   Vai su [http://localhost:3000](http://localhost:3000)

## 📱 Responsività

Il sito è completamente responsive e ottimizzato per:
- **Mobile** (320px+)
- **Tablet** (768px+)
- **Desktop** (1024px+)
- **Large Desktop** (1280px+)

## 🎯 Sezioni del Sito

### 🏠 Homepage
- **Navbar** con logo e menu di navigazione
- **Hero Section** con call-to-action principale
- **Servizi** con card animate
- **Team** con presentazione del team
- **CTA** finale per contatti
- **Footer** con link e informazioni

### 📋 Pagine
- **Servizi**: Dettagli completi di tutti i servizi offerti
- **Chi Siamo**: Presentazione del team e dei valori aziendali
- **Contatti**: Form di contatto e informazioni di contatto

## 🎨 Personalizzazione

### Colori
I colori principali sono definiti in `tailwind.config.js`:
- **Primary**: Blu (#0ea5e9)
- **Secondary**: Verde (#22c55e)
- **Accent**: Viola (#a855f7)

### Animazioni
Tutte le animazioni sono gestite con Framer Motion:
- Fade-in su scroll
- Hover effects sui componenti
- Transizioni fluide tra le pagine
- Elementi fluttuanti di sfondo

## 🚀 Deploy

Il sito è pronto per il deploy su:
- **Vercel** (raccomandato)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**

### Deploy su Vercel
1. Collega il repository a Vercel
2. Configura le variabili d'ambiente se necessario
3. Deploy automatico ad ogni push

## 📈 SEO

Il sito include:
- Meta tags ottimizzati
- Open Graph per social media
- Schema markup per i motori di ricerca
- Sitemap automatica
- Robots.txt

## 🔧 Sviluppo

### Scripts Disponibili
- `npm run dev` - Server di sviluppo
- `npm run build` - Build di produzione
- `npm run start` - Server di produzione
- `npm run lint` - Linting del codice

### Struttura dei Componenti
Ogni componente è:
- **TypeScript** per la type safety
- **Responsive** per tutti i dispositivi
- **Accessibile** seguendo le WCAG guidelines
- **Animato** con Framer Motion

## 📞 Contatti

Per domande o supporto:
- **Email**: info@jdigitaldev.it
- **Telefono**: +39 123 456 7890
- **Sede**: Milano, Italia

---

**JDigital** - Trasformiamo le tue idee digitali in successi concreti 🚀

