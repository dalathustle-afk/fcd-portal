'use client'

import type { PartnerCompany } from '@/lib/types'
import { Building2 } from 'lucide-react'
import { clsx } from 'clsx'

interface Props {
  partners: PartnerCompany[]
  compact?: boolean
}

const tierColors: Record<string, string> = {
  platinum: 'border-[#E8A84C]/40 bg-[#E8A84C]/5',
  gold: 'border-[#C07A2B]/30 bg-[#C07A2B]/5',
  standard: 'border-[#D9CABC] bg-white',
}
const tierBadge: Record<string, { label: string; cls: string }> = {
  platinum: { label: 'Platinum', cls: 'badge-amber' },
  gold: { label: 'Gold', cls: 'badge-amber' },
  standard: { label: '', cls: '' },
}

export function PartnerGrid({ partners, compact = false }: Props) {
  return (
    <div className={clsx('grid gap-4', compact
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
    )}>
      {partners.map((partner) => (
        <div
          key={partner.id}
          className={clsx(
            'rounded-xl border p-4 transition-all card-hover',
            tierColors[partner.tier]
          )}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#F5EDE0] flex items-center justify-center shrink-0">
              <Building2 size={18} className="text-[#6B2D0A]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <h3 className={clsx('font-semibold text-[#1A0F08] leading-tight', compact ? 'text-sm' : 'text-base')}>
                  {partner.shortName || partner.name}
                </h3>
                {tierBadge[partner.tier].label && (
                  <span className={clsx('badge text-[10px]', tierBadge[partner.tier].cls)}>
                    {tierBadge[partner.tier].label}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#6B5A4E] mb-1">{partner.industry}</p>
              {partner.city && (
                <p className="text-xs text-[#6B5A4E]/70">📍 {partner.city}</p>
              )}
            </div>
          </div>
          {!compact && (
            <p className="mt-3 text-xs text-[#6B5A4E] leading-relaxed line-clamp-2">{partner.name}</p>
          )}
        </div>
      ))}
    </div>
  )
}
