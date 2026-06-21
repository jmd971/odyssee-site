import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Contact & boutique à Jarry, Baie-Mahault | Odyssée',
  description: "Rendez-nous visite à l'immeuble Les Lilas, Jarry, Baie-Mahault. Horaires, plan, téléphone et réservation en ligne. Parking gratuit.",
  alternates: { canonical: 'https://odysseebybea.fr/contact' },
}

const faqContact = [
  { q: 'Où est située la boutique ?', r: 'Immeuble Les Lilas, Impasse Guy Cornély, Jarry, 97122 Baie-Mahault. Parking gratuit devant la boutique.' },
  { q: 'Comment prendre rendez-vous pour une séance stylisme ?', r: 'Par téléphone au 0590 98 18 81, par WhatsApp au 0690 087 377, ou via le formulaire de réservation en ligne.' },
  { q: 'Proposez-vous un service de relooking pour femmes ?', r: 'Oui, Béatrice propose un diagnostic de style complet avec sélection de tenues et conseils personnalisés.' },
  { q: 'Peut-on organiser une séance photo à la boutique ?', r: 'Oui, des séances shooting sont disponibles en boutique ou en extérieur, avec stylisme et photos retouchées.' },
  { q: 'Les cartes cadeaux sont-elles disponibles en ligne ?', r: 'Oui, disponibles en boutique ou à distance (50€, 100€, 150€, 200€). Contactez-nous par WhatsApp pour commander.' },
  { q: 'Peut-on organiser un shopping anniversaire en groupe ?', r: 'Absolument ! Shopping privé avec séance photo et conseils personnalisés pour le groupe.' },
]

export default function ContactPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://odysseebybea.fr' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://odysseebybea.fr/contact' },
    ],
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqContact.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.r },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav className="container-luxury py-4 text-xs font-sans text-blanc-casse/30">
        <Link href="/" className="hover:text-or transition-colors">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-blanc-casse/60">Contact</span>
      </nav>

      <section className="py-16 border-b border-blanc-casse/5">
        <div className="container-luxury">
          <span className="section-subtitle">Nous trouver</span>
          <h1 className="section-title text-blanc-casse">
            Venez nous voir<br />
            <span className="italic text-gradient">à Jarry</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin size={18} className="text-or mt-1 shrink-0" />
                <div>
                  <h3 className="font-sans text-xs font-medium tracking-wide uppercase text-blanc-casse mb-2">Adresse</h3>
                  <address className="font-sans text-sm text-blanc-casse/50 not-italic leading-relaxed">
                    Immeuble Les Lilas<br />
                    Impasse Guy Cornély<br />
                    97122 Baie-Mahault, Guadeloupe
                  </address>
                  <p className="font-sans text-xs text-blanc-casse/30 mt-2">Parking gratuit devant la boutique</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={18} className="text-or mt-1 shrink-0" />
                <div>
                  <h3 className="font-sans text-xs font-medium tracking-wide uppercase text-blanc-casse mb-2">Horaires</h3>
                  <p className="font-sans text-sm text-blanc-casse/50">Mardi au samedi · 10h–19h</p>
                  <p className="font-sans text-xs text-blanc-casse/30 mt-1">Prise de rendez-vous disponible</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={18} className="text-or mt-1 shrink-0" />
                <div>
                  <h3 className="font-sans text-xs font-medium tracking-wide uppercase text-blanc-casse mb-2">Téléphone & WhatsApp</h3>
                  <a href={`tel:${SITE_CONFIG.phone}`} className="font-sans text-sm text-blanc-casse/50 hover:text-or transition-colors block">{SITE_CONFIG.phoneDisplay}</a>
                  <a href={SITE_CONFIG.whatsapp} className="font-sans text-sm text-blanc-casse/50 hover:text-or transition-colors block">WhatsApp {SITE_CONFIG.whatsappDisplay}</a>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={18} className="text-or mt-1 shrink-0" />
                <div>
                  <h3 className="font-sans text-xs font-medium tracking-wide uppercase text-blanc-casse mb-2">Email</h3>
                  <a href="mailto:odyssee.showroom@gmail.com" className="font-sans text-sm text-blanc-casse/50 hover:text-or transition-colors">odyssee.showroom@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="flex gap-4">
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-xs text-blanc-casse/40 hover:text-or transition-colors">
                    <Instagram size={14} /> @odyssee.boutique
                  </a>
                  <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-sans text-xs text-blanc-casse/40 hover:text-or transition-colors">
                    <Facebook size={14} /> Facebook
                  </a>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Immeuble+Les+Lilas+Impasse+Guy+Cornely+Baie-Mahault+Guadeloupe"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex"
              >
                Voir sur Google Maps
              </a>
            </div>

            <div>
              <span className="section-subtitle">Réservation en ligne</span>
              <h2 className="font-serif text-2xl text-blanc-casse mb-6">
                Prendre rendez-vous
              </h2>
              <div className="border border-blanc-casse/10 overflow-hidden relative">
                <div className="gradient-line absolute top-0 left-0 right-0" />
                <iframe
                  src={SITE_CONFIG.booking}
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Réservation Odyssée Showroom Privé"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-blanc-casse/5">
        <div className="container-luxury max-w-2xl">
          <span className="section-subtitle">FAQ</span>
          <h2 className="section-title text-blanc-casse mb-10">Questions fréquentes</h2>
          <div className="space-y-6">
            {faqContact.map((item, i) => (
              <div key={i} className="border-b border-blanc-casse/5 pb-6">
                <h3 className="font-sans text-sm font-medium text-blanc-casse mb-2">{item.q}</h3>
                <p className="font-sans text-sm text-blanc-casse/50 leading-relaxed">{item.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
