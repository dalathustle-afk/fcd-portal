'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, SlidersHorizontal } from 'lucide-react'
import type { ProductRecord } from '@/data/products'

const groupLabels: Record<string, string> = {
  'gu-pho-thong':    'Gu Phổ Thông',
  'gu-truyen-thong': 'Gu Truyền Thống',
  'gu-dam-vi':       'Gu Đậm Vị',
  'gu-can-bang':     'Gu Cân Bằng',
  'gu-tinh-te':      'Gu Tinh Túy',
  'gu-nguyen-ban':   'Gu Nguyên Bản',
  'phin-giay':       'Phin Giấy',
  'bo-dung-cu':      'Bộ Dụng Cụ',
  'hop-qua-giay':    'Hộp Quà Giấy',
  'hop-qua-tinh-te': 'Hộp Quà Tinh Tế',
  'an-nhien-combo':  'Gói An Nhiên 12kg',
}

// Premium dark gradient per gu group — makes cut-out product images look amazing
const groupGradient: Record<string, string> = {
  'gu-pho-thong':    'from-[#2C1A0E] via-[#3D2412] to-[#1A0F07]',
  'gu-truyen-thong': 'from-[#1A1200] via-[#2E2204] to-[#1A0F07]',
  'gu-dam-vi':       'from-[#1A0D0D] via-[#2E1608] to-[#0F0805]',
  'gu-can-bang':     'from-[#0D1A14] via-[#1A2E20] to-[#091208]',
  'gu-tinh-te':      'from-[#12141A] via-[#1E2030] to-[#0A0C14]',
  'gu-nguyen-ban':   'from-[#1A1A0D] via-[#252510] to-[#101008]',
  'phin-giay':       'from-[#1A120A] via-[#2D1F12] to-[#0F0A06]',
  'bo-dung-cu':      'from-[#0F1A1A] via-[#17282A] to-[#080F10]',
  'hop-qua-giay':    'from-[#1A0F15] via-[#2A1828] to-[#100810]',
  'hop-qua-tinh-te': 'from-[#0D0D1A] via-[#18182E] to-[#060610]',
  'an-nhien-combo':  'from-[#0D1A0D] via-[#14281A] to-[#070F07]',
}

// Subtle glow color matching the gu
const groupGlow: Record<string, string> = {
  'gu-pho-thong':    'rgba(184,115,51,0.18)',
  'gu-truyen-thong': 'rgba(212,145,74,0.18)',
  'gu-dam-vi':       'rgba(180,60,40,0.20)',
  'gu-can-bang':     'rgba(74,103,65,0.22)',
  'gu-tinh-te':      'rgba(80,100,180,0.18)',
  'gu-nguyen-ban':   'rgba(160,150,50,0.18)',
  'phin-giay':       'rgba(184,115,51,0.16)',
  'bo-dung-cu':      'rgba(70,130,130,0.18)',
  'hop-qua-giay':    'rgba(180,80,150,0.15)',
  'hop-qua-tinh-te': 'rgba(80,80,200,0.18)',
  'an-nhien-combo':  'rgba(74,103,65,0.22)',
}

const groupBadgeColor: Record<string, string> = {
  'gu-pho-thong':    'bg-[#B87333]/20 text-[#E3A558] border border-[#B87333]/30',
  'gu-truyen-thong': 'bg-[#D4914A]/20 text-[#F0B86E] border border-[#D4914A]/30',
  'gu-dam-vi':       'bg-red-900/20 text-red-300 border border-red-800/30',
  'gu-can-bang':     'bg-green-900/20 text-green-300 border border-green-800/30',
  'gu-tinh-te':      'bg-blue-900/20 text-blue-300 border border-blue-800/30',
  'gu-nguyen-ban':   'bg-yellow-900/20 text-yellow-200 border border-yellow-800/30',
}

interface Props {
  products: ProductRecord[]
}

export function ProductFilters({ products }: Props) {
  const [search, setSearch] = useState('')
  const [group, setGroup] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)

  const groups = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.group)))
  }, [products])

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !search ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.code.toLowerCase().includes(search.toLowerCase()) ||
        (p.descriptionShort ?? '').toLowerCase().includes(search.toLowerCase())
      const matchGroup = group === 'all' || p.group === group
      return matchSearch && matchGroup
    })
  }, [products, search, group])

  const gradient = groupGradient[group] ?? 'from-[#1A120A] via-[#2D1E12] to-[#0F0807]'
  const glow = groupGlow[group] ?? 'rgba(184,115,51,0.15)'

  return (
    <div>
      {/* ── Filters ─────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9C8472]" />
          <input
            type="text"
            placeholder="Tìm theo tên, mã sản phẩm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#D9CABC] bg-white text-[#1A0F08] text-sm focus:outline-none focus:border-[#C07A2B] focus:ring-2 focus:ring-[#C07A2B]/10 transition"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden flex items-center gap-2 px-4 py-3 rounded-xl border border-[#D9CABC] bg-white text-sm text-[#6B5A4E]"
          >
            <SlidersHorizontal size={15} /> Lọc
          </button>
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="hidden sm:block px-4 py-3 rounded-xl border border-[#D9CABC] bg-white text-[#1A0F08] text-sm focus:outline-none focus:border-[#C07A2B] transition cursor-pointer"
          >
            <option value="all">Tất cả nhóm</option>
            {groups.map((g) => (
              <option key={g} value={g}>{groupLabels[g] ?? g}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile filter panel */}
      {showFilters && (
        <div className="sm:hidden mb-5 p-4 card-nature rounded-2xl">
          <p className="text-xs font-semibold text-[#6B5A4E] mb-3 uppercase tracking-wide">Nhóm sản phẩm</p>
          <div className="flex flex-wrap gap-2">
            {['all', ...groups].map((g) => (
              <button
                key={g}
                onClick={() => { setGroup(g); setShowFilters(false) }}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
                  group === g
                    ? 'bg-[#B87333] text-white border-[#B87333]'
                    : 'border-[#D9CABC] text-[#6B5A4E] hover:border-[#B87333]'
                }`}
              >
                {g === 'all' ? 'Tất cả' : (groupLabels[g] ?? g)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Result count */}
      <p className="text-sm text-[#9C8472] mb-6 font-medium">
        {filtered.length} sản phẩm{search && <span className="text-[#B87333]"> · &ldquo;{search}&rdquo;</span>}
      </p>

      {/* ── Product Grid ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {filtered.map((p) => {
          const minPrice = p.prices[0]?.price ?? 0
          const minSize  = p.sizes[0] ?? ''
          const hasImage = !p.todoImage && !!p.image
          const grad     = groupGradient[p.group] ?? gradient
          const glowColor = groupGlow[p.group] ?? glow
          const badgeCls  = groupBadgeColor[p.group] ?? 'bg-[#1C0F07]/70 text-[#E8A84C] border border-[#E8A84C]/20'

          return (
            <Link
              key={p.id}
              href={`/san-pham/${p.slug}`}
              className="group block rounded-2xl overflow-hidden card-hover border border-[#1A120A]/10 shadow-sm hover:shadow-xl hover:shadow-[#1A120A]/10 transition-all duration-300"
            >
              {/* ── Image area: premium dark gradient stage ── */}
              <div
                className={`relative h-52 bg-gradient-to-b ${grad} overflow-hidden flex items-center justify-center`}
              >
                {/* Radial glow from below — spotlight effect */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${glowColor}, transparent)`,
                  }}
                />
                {/* Subtle top vignette */}
                <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

                {hasImage ? (
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-contain object-center group-hover:scale-108 transition-transform duration-500 p-4 drop-shadow-2xl"
                    style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))' }}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-3 opacity-60">
                    <span className="text-5xl">☕</span>
                    <span className="text-xs font-bold text-[#E8A84C] bg-[#E8A84C]/10 px-3 py-1 rounded-full font-mono tracking-widest border border-[#E8A84C]/20">
                      {p.code}
                    </span>
                  </div>
                )}

                {/* Gu badge */}
                <span className={`absolute top-2.5 left-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-sm ${badgeCls}`}>
                  {p.guLabel ?? groupLabels[p.group] ?? p.group}
                </span>

                {/* Price floating chip */}
                {minPrice > 0 && (
                  <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 shadow">
                    <span className="text-xs font-bold text-[#7C3D18]">
                      {minPrice.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                )}
              </div>

              {/* ── Product info ── */}
              <div className="p-4 bg-white">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-[#1A0F08] text-sm leading-snug mb-1 group-hover:text-[#7C3D18] transition-colors line-clamp-2">
                      {p.name}
                    </h3>
                    <p className="text-[11px] text-[#9C8472] line-clamp-2 leading-relaxed mb-3">
                      {p.descriptionShort}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-[#F5EDE0]">
                  <span className="text-[10px] text-[#9C8472] font-mono bg-[#F5EDE0] px-2 py-0.5 rounded">
                    {p.code}
                  </span>
                  <span className="text-[11px] text-[#9C8472]">{minSize}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">☕</div>
          <p className="text-[#6B5A4E] font-medium">Không tìm thấy sản phẩm phù hợp.</p>
          <button
            onClick={() => { setSearch(''); setGroup('all') }}
            className="mt-4 text-sm text-[#B87333] hover:underline"
          >
            Xóa bộ lọc
          </button>
        </div>
      )}
    </div>
  )
}
