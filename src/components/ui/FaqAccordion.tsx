'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import type { FaqItem } from '@/lib/schema'

/**
 * FAQ en accordéon (Radix).
 *
 * Les questions étaient empilées en blocs statiques : jusqu'à six d'affilée
 * sur une page, ce qui fait un mur de texte sur mobile. Radix apporte le
 * balisage aria et la navigation clavier corrects, que je ne réécris pas
 * à la main. L'habillage reste celui du site.
 */
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion.Root type="single" collapsible className="space-y-1">
      {items.map((item) => (
        <Accordion.Item
          key={item.question}
          value={item.question}
          className="border-b border-or/20"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left font-sans text-sm font-medium text-blanc-casse hover:text-or transition-colors">
              {item.question}
              <ChevronDown
                size={16}
                aria-hidden="true"
                className="shrink-0 text-or transition-transform duration-300 group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-fade-up">
            <p className="pb-5 pr-8 font-sans text-sm text-blanc-casse/65 leading-relaxed">
              {item.answer}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
