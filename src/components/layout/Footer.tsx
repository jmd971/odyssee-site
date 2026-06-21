import Link from 'next/link'
import { Instagram, Facebook, Youtube, Phone, MapPin, Clock } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      {/* Bande dorée */}
      <div className="h-0.5 bg-dore w-full" />
      
      <div className="container-luxury py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Marque */}
          <div className="lg:col-span-1">
            <div className="font-serif text-2xl tracking-widest font-light mb-1">ODYSSÉE</div>
            <div className="font-sans text-[9px] tracking-luxury uppercase text-dore mb-4">
              Showroom Privé · by Béa
            </div>
            <p className="font-sans text-xs text-warm-white/60 leading-relaxed">
              Boutique de mode féminine en Guadeloupe. Prêt-à-porter chic, robes de soirée, 
              accessoires et conseils personnalisés. Showroom privé sur rendez-vous à Jarry.
            </p>
            <div className="flex gap-4 mt-6">
              <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-dore transition-colors">
                <Instagram size={18} />
              </a>
              <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-dore transition-colors">
                <Facebook size={18} />
              </a>
              <a href={SITE_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="text-warm-white/60 hover:text-dore transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sans text-xs tracking-luxury uppercase text-dore mb-5">Boutique</h3>
            <ul className="space-y-2">
              {[
                { label: 'Robes de soirée & cocktail', href: '/boutique/robes-soiree-cocktail' },
                { label: 'Vêtements femme', href: '/boutique/vetements-femme' },
                { label: 'Accessoires & bijoux', href: '/boutique/accessoires-bijoux' },
                { label: 'Carte cadeau', href: '/carte-cadeau' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-xs text-warm-white/60 hover:text-dore transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans text-xs tracking-luxury uppercase text-dore mb-5">Services</h3>
            <ul className="space-y-2">
              {[
                { label: 'Stylisme', href: '/services/stylisme' },
                { label: 'Relooking', href: '/services/relooking' },
                { label: 'Shooting photo', href: '/services/shooting-photo' },
                { label: 'Shopping anniversaire', href: '/services/shopping-anniversaire' },
                { label: 'Événements', href: '/evenements' },
                { label: 'Blog mode', href: '/blog' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-xs text-warm-white/60 hover:text-dore transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & NAP */}
          <div>
            <h3 className="font-sans text-xs tracking-luxury uppercase text-dore mb-5">Nous trouver</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin size={14} className="text-dore mt-0.5 shrink-0" />
                <address className="font-sans text-xs text-warm-white/60 not-italic leading-relaxed">
                  {SITE_CONFIG.address.street}<br />
                  {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}<br />
                  {SITE_CONFIG.address.region}
                </address>
              </div>
              <div className="flex gap-3">
                <Clock size={14} className="text-dore mt-0.5 shrink-0" />
                <span className="font-sans text-xs text-warm-white/60">{SITE_CONFIG.hours}</span>
              </div>
              <div className="flex gap-3">
                <Phone size={14} className="text-dore mt-0.5 shrink-0" />
                <div className="font-sans text-xs text-warm-white/60">
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-dore transition-colors block">{SITE_CONFIG.phoneDisplay}</a>
                  <a href={SITE_CONFIG.whatsapp} className="hover:text-dore transition-colors block">WhatsApp {SITE_CONFIG.whatsappDisplay}</a>
                </div>
              </div>
            </div>
            <a
              href={SITE_CONFIG.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-warm-white/30 text-warm-white hover:bg-dore hover:border-dore hover:text-charcoal mt-6 text-xs inline-flex"
            >
              Prendre RDV
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-warm-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-sans text-xs text-warm-white/40">
            © 2025 Odyssée Showroom Privé. Tous droits réservés.
          </p>
          <p className="font-sans text-xs text-warm-white/40">
            Site créé par{' '}
            <a href="https://siboard-consulting.fr" className="hover:text-dore transition-colors">
              Siboard Consulting
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}