'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

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
    <header className="relative z-50 bg-noir">
      {/* Barre dégradé signature */}
      <div className="gradient-line w-full" />

      {/* Bandeau info */}
      <div className="border-b border-blanc-casse/5 py-2 px-4 text-center">
        <p className="font-sans text-[11px] tracking-wide text-blanc-casse/50">
          Boutique de mode femme · Jarry, Baie-Mahault ·{' '}
          <span className="text-or">Mardi–Samedi 10h–19h</span>
          {' '}·{' '}
          <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-or transition-colors">
            {SITE_CONFIG.phoneDisplay}
          </a>
        </p>
      </div>

      {/* Header principal */}
      <div className="border-b border-blanc-casse/5">
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20 md:h-24">

            {/* Nav desktop gauche */}
            <nav className="hidden lg:flex items-center gap-6 flex-1">
              {navItems.slice(0, 4).map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="font-sans text-[11px] tracking-wide uppercase text-blanc-casse/60 hover:text-or transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                  {item.children && activeDropdown === item.href && (
                    <div className="absolute top-full left-0 mt-3 w-60 bg-noir-alt border border-blanc-casse/10 py-2 z-50">
                      <div className="gradient-line w-full mb-2" />
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-2.5 font-sans text-xs text-blanc-casse/60 hover:text-or hover:bg-blanc-casse/5 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Logo centré */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 text-center flex-shrink-0">
              <div className="font-serif text-3xl md:text-4xl font-light tracking-[0.25em] text-blanc-casse leading-none">
                ODY<span className="text-or">SSÉE</span>
              </div>
              <div className="font-sans text-[9px] tracking-luxury uppercase mt-1">
                <span className="text-gradient">showroom privé · by Béa</span>
              </div>
            </Link>

            {/* Nav desktop droite */}
            <nav className="hidden lg:flex items-center gap-6 flex-1 justify-end">
              {navItems.slice(4).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-[11px] tracking-wide uppercase text-blanc-casse/60 hover:text-or transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2.5 px-6 ml-2"
              >
                Prendre RDV
              </a>
            </nav>

            {/* Mobile */}
            <div className="flex items-center gap-4 lg:hidden">
              <a href={SITE_CONFIG.whatsapp} className="text-or">
                <Phone size={18} />
              </a>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-blanc-casse"
                aria-label="Menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="lg:hidden bg-noir-alt border-t border-blanc-casse/5 px-4 pb-6">
            <div className="gradient-line w-full mb-4" />
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3.5 font-sans text-sm tracking-wide uppercase text-blanc-casse/70 border-b border-blanc-casse/5 hover:text-or transition-colors"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-2 pl-4 font-sans text-xs text-blanc-casse/40 hover:text-or transition-colors"
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
              className="btn-primary w-full text-center mt-6 block"
            >
              Prendre RDV
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
