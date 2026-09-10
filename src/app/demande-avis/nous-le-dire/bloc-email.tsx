'use client'

import { useState } from 'react'
import { Mail, Copy, Check } from 'lucide-react'

/* Le mailto seul ne suffit pas : sans application de messagerie declaree,
   un clic ne produit rien du tout, sans erreur visible. Une cliente pense
   que le site est casse. On garde donc le lien pour ceux qui ont un client
   mail, et on ajoute la copie de l'adresse pour tous les autres. */
const ADRESSE = 'odyssee.showroom@gmail.com'

export function BlocEmail() {
  const [copie, setCopie] = useState(false)

  async function copier() {
    try {
      await navigator.clipboard.writeText(ADRESSE)
      setCopie(true)
      setTimeout(() => setCopie(false), 2500)
    } catch {
      /* Navigateur qui refuse le presse-papiers : l'adresse reste
         selectionnable a la main juste au-dessus. */
    }
  }

  return (
    <div className="flex items-start gap-4 border border-blanc-casse/10 p-6">
      <Mail size={18} className="text-or mt-1 shrink-0" />
      <div className="min-w-0">
        <span className="block font-sans text-xs font-medium tracking-wide uppercase text-blanc-casse mb-1">
          E-mail
        </span>
        <span className="block font-sans text-sm text-blanc-casse/50 break-all select-all">
          {ADRESSE}
        </span>
        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href={`mailto:${ADRESSE}?subject=Retour%20sur%20ma%20visite`}
            className="font-sans text-xs text-or hover:underline"
          >
            Ouvrir ma messagerie
          </a>
          <button
            type="button"
            onClick={copier}
            className="inline-flex items-center gap-1.5 font-sans text-xs text-blanc-casse/40 hover:text-or transition-colors"
          >
            {copie ? <Check size={13} /> : <Copy size={13} />}
            {copie ? 'Adresse copiée' : 'Copier l’adresse'}
          </button>
        </div>
      </div>
    </div>
  )
}
