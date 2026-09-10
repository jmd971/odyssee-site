import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MessageCircle } from 'lucide-react'
import { SITE_CONFIG, whatsappAvec } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Dites-nous ce qui n’a pas été',
  description: 'Un mot direct à Béatrice, sans passer par un formulaire public.',
  robots: { index: false, follow: false },
}

const MESSAGE = 'Bonjour Béatrice, je reviens de la boutique et quelque chose n’a pas été :'

export default function NousLeDirePage() {
  return (
    <>
      <section className="py-16 border-b border-blanc-casse/5">
        <div className="container-luxury">
          <span className="section-subtitle">Entre nous</span>
          <h1 className="section-title text-blanc-casse">
            Dites-nous ce<br />
            <span className="italic text-gradient">qui n’a pas été</span>
          </h1>
          <p className="font-sans text-sm text-blanc-casse/50 leading-relaxed max-w-xl mt-6">
            Ça ne part pas dans une boîte anonyme. Béatrice lit, et elle rappelle.
            Dites simplement ce qui s’est passé et quand vous êtes venue, on s’occupe du reste.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-luxury">
          <div className="max-w-xl space-y-6">

            <a
              href={whatsappAvec(MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 border border-blanc-casse/10 p-6 hover:border-or/40 transition-colors"
            >
              <MessageCircle size={18} className="text-or mt-1 shrink-0" />
              <span>
                <span className="block font-sans text-xs font-medium tracking-wide uppercase text-blanc-casse mb-1">
                  WhatsApp
                </span>
                <span className="block font-sans text-sm text-blanc-casse/50">
                  {SITE_CONFIG.whatsappDisplay} — le plus rapide, le message est déjà commencé
                </span>
              </span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-start gap-4 border border-blanc-casse/10 p-6 hover:border-or/40 transition-colors"
            >
              <Phone size={18} className="text-or mt-1 shrink-0" />
              <span>
                <span className="block font-sans text-xs font-medium tracking-wide uppercase text-blanc-casse mb-1">
                  Téléphone
                </span>
                <span className="block font-sans text-sm text-blanc-casse/50">
                  {SITE_CONFIG.phoneDisplay} — {SITE_CONFIG.hours}
                </span>
              </span>
            </a>

            <a
              href="mailto:odyssee.showroom@gmail.com?subject=Retour%20sur%20ma%20visite"
              className="flex items-start gap-4 border border-blanc-casse/10 p-6 hover:border-or/40 transition-colors"
            >
              <Mail size={18} className="text-or mt-1 shrink-0" />
              <span>
                <span className="block font-sans text-xs font-medium tracking-wide uppercase text-blanc-casse mb-1">
                  E-mail
                </span>
                <span className="block font-sans text-sm text-blanc-casse/50">
                  odyssee.showroom@gmail.com — si vous préférez écrire posément
                </span>
              </span>
            </a>

            <p className="font-sans text-xs text-blanc-casse/30 pt-4">
              <Link href="/demande-avis" className="hover:text-or transition-colors">
                Revenir en arrière
              </Link>
            </p>

          </div>
        </div>
      </section>
    </>
  )
}
