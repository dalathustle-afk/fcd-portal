'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'
import type { FAQ } from '@/lib/types'

interface Props {
  items: FAQ[]
}

export function FAQAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={clsx(
            'rounded-xl border transition-all overflow-hidden',
            open === i ? 'border-[#C07A2B]' : 'border-[#D9CABC]'
          )}
        >
          <button
            className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
            onClick={() => setOpen(open === i ? null : i)}
            id={`faq-${i}`}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-[#1A0F08] text-sm leading-relaxed">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={clsx('text-[#C07A2B] shrink-0 transition-transform mt-0.5', open === i && 'rotate-180')}
            />
          </button>
          {open === i && (
            <div className="px-5 pb-5">
              <p className="text-sm text-[#6B5A4E] leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
