'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Accueil', href: '/' },
  {
    label: 'Boutique',
    href: '/boutique',
    children: [
      { label: 'Robes de soirée & cocktail', href: '/boutique/robes-soiree-cocktail' },
      { label: 'Vêtements femme', href: '/boutique/vetements-femme' },
      { label: 'Accessoires & bijoux', href: '/boutique/accessoires-bijoux' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Stylisme', href: '/services/stylisme' },
      { label: 'Relooking', href: '/services/relooking' },
      { label: 'Shooting photo', href: '/services/shooting-photo' },
      { label: 'Shopping anniversaire', href: '/services/shopping-anniversaire' },
    ],
  },
  { label: 'Carte cadeau', href: '/carte-cadeau' },
  { label: 'Événements', href: '/evenements' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <header className="relative z-50">
      {/* Barre dorée */}
      <div className="h-0.5 bg-dore w-full" />
      
      {/* Bannière top info */}
      <div className="bg-charcoal text-warm-white text-center py-2 px-4">
        <p className="font-sans text-xs tracking-wide">
          Showroom privé sur rendez-vous · Mardi–Samedi 10h–19h ·{' '}
          <a href={`tel:${SITE_CONFIG.phone}`} className="underline hover:text-dore transition-colors">
            {SITE_CONFIG.phoneDisplay}
          </a>
        </p>
      </div>

      {/* Header principal */}
      <div className="bg-warm-white border-b border-sable">
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20">
            
            {/* CTA mobile gauche */}
            <div className="flex items-center gap-3 lg:hidden">
              <a href={SITE_CONFIG.whatsapp} className="text-tropical">
                <Phone size={18} />
              </a>
            </div>

            {/* Logo centré */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 text-center">
              <div className="font-serif text-2xl md:text-3xl font-light tracking-widest text-charcoal leading-none">
                ODYSSÉE
              </div>
              <div className="font-sans text-[9px] tracking-luxury uppercase text-dore mt-0.5">
                Showroom Privé · by Béa
              </div>
            </Link>

            {/* Nav desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="font-sans text-xs tracking-wide uppercase text-charcoal hover:text-dore transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  
                  {item.children && activeDropdown === item.href && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-warm-white border border-sable shadow-lg py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 font-sans text-xs text-charcoal hover:bg-sable hover:text-dore transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden lg:block">
              <a
                href={SITE_CONFIG.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs"
              >
                Prendre RDV
              </a>
            </div>

            {/* Hamburger mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-charcoal"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="lg:hidden bg-warm-white border-t border-sable px-4 pb-6">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 font-sans text-sm tracking-wide uppercase text-charcoal border-b border-sable/50"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 pl-4 font-sans text-xs text-charcoal/70 hover:text-dore"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <a
              href={SITE_CONFIG.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center mt-4"
            >
              Prendre RDV
            </a>
          </div>
        )}
      </div>
    </header>
  )
}