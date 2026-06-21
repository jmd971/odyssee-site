import Link from 'next/link'
import { Instagram, Facebook, Youtube, Phone, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="bg-noir">
      <div className="gradient-line w-full" />

      <div className="container-luxury py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Marque */}
          <div className="lg:col-span-1">
            <div className="font-serif text-3xl tracking-[0.25em] font-light text-blanc-casse mb-1">
              ODY<span className="text-or">SSÉE</span>
            </div>
            <div className="font-sans text-[9px] tracking-luxury uppercase mb-5">
              <span className="text-gradient">showroom privé · by Béa</span>
            </div>
            <p className="font-sans text-xs text-blanc-casse/40 leading-relaxed mb-6">
              Boutique de mode femme à Jarry, Guadeloupe. Robes de soirée, 
              prêt-à-porter et accessoires. Conseil personnalisé par Béatrice.
            </p>
            <div className="flex gap-4">
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer"
                className="text-blanc-casse/30 hover:text-or transition-colors">
                <Instagram size={18} />
              </a>
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer"
                className="text-blanc-casse/30 hover:text-or transition-colors">
                <Facebook size={18} />
              </a>
              <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer"
                className="text-blanc-casse/30 hover:text-or transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Boutique */}
          <div>
            <h3 className="font-sans text-[10px] tracking-luxury uppercase text-or mb-5">Boutique</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Robes de soirée & cocktail', href: '/boutique/robes-soiree-cocktail' },
                { label: 'Vêtements femme', href: '/boutique/vetements-femme' },
                { label: 'Accessoires & bijoux', href: '/boutique/accessoires-bijoux' },
                { label: 'Carte cadeau', href: '/carte-cadeau' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-xs text-blanc-casse/40 hover:text-or transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-[10px] tracking-luxury uppercase text-or mb-5">Services</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Stylisme', href: '/services/stylisme' },
                { label: 'Relooking', href: '/services/relooking' },
                { label: 'Shooting photo', href: '/services/shooting-photo' },
                { label: 'Shopping anniversaire', href: '/services/shopping-anniversaire' },
                { label: 'Événements', href: '/evenements' },
                { label: 'Blog mode', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-xs text-blanc-casse/40 hover:text-or transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-[10px] tracking-luxury uppercase text-or mb-5">Nous trouver</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={13} className="text-or mt-0.5 shrink-0" />
                <address className="font-sans text-xs text-blanc-casse/40 not-italic leading-relaxed">
                  {SITE_CONFIG.address.street}<br />
                  {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}<br />
                  {SITE_CONFIG.address.region}
                </address>
              </div>
              <div className="flex gap-3">
                <Clock size={13} className="text-or mt-0.5 shrink-0" />
                <span className="font-sans text-xs text-blanc-casse/40">{SITE_CONFIG.hours}</span>
              </div>
              <div className="flex gap-3">
                <Phone size={13} className="text-or mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="font-sans text-xs text-blanc-casse/40 hover:text-or transition-colors block">
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                  <a href={SITE_CONFIG.whatsapp} className="font-sans text-xs text-blanc-casse/40 hover:text-or transition-colors block">
                    WhatsApp {SITE_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blanc-casse/5 mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-[11px] text-blanc-casse/20">
            © 2025 Odyssée Showroom Privé. Tous droits réservés.
          </p>
          <p className="font-sans text-[11px] text-blanc-casse/20">
            Site créé par{' '}
            <a href="https://siboard-consulting.fr" className="hover:text-or transition-colors">
              Siboard Consulting
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
