import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Événements mode & défilés en Guadeloupe | Odyssée',
  description: 'Défilés, ventes privées et soirées mode à Jarry, Baie-Mahault. Découvrez les prochains événements Odyssée Showroom Privé en Guadeloupe.',
  alternates: { canonical: 'https://odysseebybea.fr/evenements' },
}

const evenements = [
  {
    titre: 'Soirée dégustation Odyssée',
    date: '16 janvier 2025',
    heure: '18h30',
    lieu: 'Odyssée Showroom Privé – Jarry, Baie-Mahault',
    description: 'Une soirée exclusive pour découvrir les nouvelles collections dans une ambiance chaleureuse. Réservation recommandée.',
    statut: 'passé' as const,
  },
  {
    titre: 'Défilé mode Odyssée',
    date: '11 décembre 2024',
    heure: '',
    lieu: 'Casino du Gosier',
    description: 'Défilé de mode présentant les collections Odyssée dans un cadre exceptionnel au Casino du Gosier.',
    statut: 'passé' as const,
  },
  {
    titre: 'Défilé mode Odyssée',
    date: '10 novembre 2024',
    heure: '',
    lieu: 'Boutique Odyssée – Jarry',
    description: 'Premier défilé de mode organisé directement en boutique à Jarry, Baie-Mahault.',
    statut: 'passé' as const,
  },
]

export default function EvenementsPage() {
  return (
    <>
      <nav className="container-luxury py-4 text-xs font-sans text-blanc-casse/30">
        <Link href="/" className="hover:text-or transition-colors">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-blanc-casse/60">Événements</span>
      </nav>

      <section className="py-16 border-b border-blanc-casse/5">
        <div className="container-luxury">
          <span className="section-subtitle">Agenda</span>
          <h1 className="section-title text-blanc-casse">
            Événements<br />
            <span className="italic text-gradient">& défilés</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury max-w-3xl">
          <div className="border border-blanc-casse/10 p-8 mb-12 relative overflow-hidden">
            <div className="gradient-line absolute top-0 left-0 right-0" />
            <p className="font-sans text-xs tracking-luxury uppercase text-or mb-3">Prochain événement</p>
            <h2 className="font-serif text-2xl text-blanc-casse mb-3">
              Restez informée des prochains événements
            </h2>
            <p className="font-sans text-sm text-blanc-casse/50 mb-6">
              Défilés, ventes privées, soirées mode... Suivez-nous sur Instagram ou contactez-nous par WhatsApp pour ne rien manquer.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Suivre sur Instagram
              </a>
              <a href={SITE_CONFIG.whatsapp} className="btn-outline-white">
                WhatsApp
              </a>
            </div>
          </div>

          <h2 className="font-sans text-xs tracking-luxury uppercase text-blanc-casse/30 mb-8">Événements passés</h2>
          <div className="space-y-6">
            {evenements.map((e, i) => (
              <div key={i} className="border border-blanc-casse/5 p-6 hover:border-or/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 text-center">
                    <div className="gradient-line w-8 mb-3" />
                    <Calendar size={18} className="text-or" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-blanc-casse mb-1">{e.titre}</h3>
                    <p className="font-sans text-xs text-or mb-2">
                      {e.date}{e.heure ? ` · ${e.heure}` : ''}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin size={12} className="text-blanc-casse/30" />
                      <span className="font-sans text-xs text-blanc-casse/40">{e.lieu}</span>
                    </div>
                    <p className="font-sans text-sm text-blanc-casse/50 leading-relaxed">{e.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-blanc-casse/5">
        <div className="container-luxury text-center">
          <p className="font-sans text-sm text-blanc-casse/40 mb-6">
            Vous souhaitez organiser un événement mode en Guadeloupe ?
          </p>
          <Link href="/contact" className="btn-outline">Contactez-nous</Link>
        </div>
      </section>
    </>
  )
}
