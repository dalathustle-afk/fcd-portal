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
        <div className="sm:hidden mb-5 p-4 bg-white rounded-2xl border border-[#D9CABC]">
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

          return (
            <Link
              key={p.id}
              href={`/san-pham/${p.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-[#D9CABC] hover:border-[#C07A2B]/40 hover:shadow-lg hover:shadow-[#B87333]/8 transition-all duration-300"
            >
              {/* Image area — white bg, clean */}
              <div className="relative h-52 bg-white overflow-hidden flex items-center justify-center">
                {hasImage ? (
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500 p-5"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2 opacity-40">
                    <span className="text-4xl">☕</span>
                    <span className="text-xs font-bold text-[#7C3D18] bg-[#E3A558]/20 px-2 py-0.5 rounded-full font-mono">
                      {p.code}
                    </span>
                  </div>
                )}

                {/* Gu badge */}
                <span className="absolute top-2 left-2 text-[10px] font-semibold bg-[#1C0F07]/70 text-[#E8A84C] px-2 py-0.5 rounded-full backdrop-blur-sm">
                  {p.guLabel ?? groupLabels[p.group] ?? p.group}
                </span>
              </div>

              {/* Product info */}
              <div className="p-4 border-t border-[#F5EDE0]">
                <h3 className="font-semibold text-[#1A0F08] text-sm leading-snug mb-1 group-hover:text-[#7C3D18] transition-colors line-clamp-2">
                  {p.name}
                </h3>
                <p className="text-[11px] text-[#9C8472] line-clamp-2 leading-relaxed mb-3">
                  {p.descriptionShort}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[#F5EDE0]">
                  {minPrice > 0 ? (
                    <span className="font-bold text-[#7C3D18] text-sm">
                      {minPrice.toLocaleString('vi-VN')}đ
                    </span>
                  ) : (
                    <span className="text-xs text-[#6B5A4E]">Liên hệ</span>
                  )}
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
