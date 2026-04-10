'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, X } from 'lucide-react'
import { clsx } from 'clsx'
import type { Product, FlavorCategory } from '@/lib/types'

const lineLabels: Record<string, string> = {
  premium: 'Premium',
  signature: 'Signature',
  classic: 'Classic',
  blend: 'Blend',
  espresso: 'Espresso',
  gift: 'Hộp quà',
}
const roastLabels: Record<string, string> = {
  light: 'Rang nhẹ',
  'medium-light': 'Rang vừa nhẹ',
  medium: 'Rang vừa',
  'medium-dark': 'Rang vừa đậm',
  dark: 'Rang đậm',
}

interface Props {
  products: Product[]
  flavors: FlavorCategory[]
}

export function ProductFilters({ products, flavors }: Props) {
  const [query, setQuery] = useState('')
  const [selectedFlavor, setSelectedFlavor] = useState<string>('all')
  const [selectedLine, setSelectedLine] = useState<string>('all')
  const [maxPrice, setMaxPrice] = useState<number>(500000)

  const lines = Array.from(new Set(products.map((p) => p.line)))

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const q = query.toLowerCase()
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
      const matchesFlavor = selectedFlavor === 'all' || p.flavor.category === selectedFlavor
      const matchesLine = selectedLine === 'all' || p.line === selectedLine
      const minPrice = Math.min(...p.format.map((f) => f.price))
      const matchesPrice = minPrice <= maxPrice
      return matchesQuery && matchesFlavor && matchesLine && matchesPrice
    })
  }, [products, query, selectedFlavor, selectedLine, maxPrice])

  return (
    <>
      {/* Filter bar */}
      <div className="bg-white rounded-2xl border border-[#D9CABC] p-5 mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div className="relative sm:col-span-2 lg:col-span-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B5A4E]" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tên, mã sản phẩm, gu…"
              id="product-search"
              className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#D9CABC] text-sm text-[#1A0F08] placeholder:text-[#6B5A4E]/60 focus:outline-none focus:border-[#C07A2B] transition-colors"
            />
          </div>

          {/* Flavor filter */}
          <select
            value={selectedFlavor}
            onChange={(e) => setSelectedFlavor(e.target.value)}
            id="filter-flavor"
            className="py-2.5 px-3 rounded-lg border border-[#D9CABC] text-sm text-[#1A0F08] focus:outline-none focus:border-[#C07A2B] bg-white"
          >
            <option value="all">Tất cả gu</option>
            {flavors.map((f) => (
              <option key={f.id} value={f.id}>{f.icon} Gu {f.label}</option>
            ))}
          </select>

          {/* Line filter */}
          <select
            value={selectedLine}
            onChange={(e) => setSelectedLine(e.target.value)}
            id="filter-line"
            className="py-2.5 px-3 rounded-lg border border-[#D9CABC] text-sm text-[#1A0F08] focus:outline-none focus:border-[#C07A2B] bg-white"
          >
            <option value="all">Tất cả dòng</option>
            {lines.map((l) => (
              <option key={l} value={l}>{lineLabels[l]}</option>
            ))}
          </select>

          {/* Price */}
          <div>
            <label className="block text-xs text-[#6B5A4E] mb-1.5">
              Giá tối đa: <strong>{maxPrice.toLocaleString('vi-VN')}đ</strong>
            </label>
            <input
              type="range"
              min={100000}
              max={500000}
              step={25000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-[#C07A2B]"
            />
          </div>
        </div>

        {/* Active filters */}
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          <span className="text-xs text-[#6B5A4E]">{filtered.length} sản phẩm</span>
          {(query || selectedFlavor !== 'all' || selectedLine !== 'all') && (
            <button
              onClick={() => { setQuery(''); setSelectedFlavor('all'); setSelectedLine('all') }}
              className="flex items-center gap-1 text-xs text-[#6B2D0A] hover:text-[#C07A2B] transition-colors"
            >
              <X size={12} /> Xóa bộ lọc
            </button>
          )}
        </div>
      </div>

      {/* Product grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-5xl mb-4">☕</p>
          <p className="text-[#6B5A4E]">Không tìm thấy sản phẩm phù hợp</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((product) => {
            const mainFmt = product.format[0]
            const flavorColor =
              product.flavor.category === 'tinh-te' ? '#9D174D'
              : product.flavor.category === 'dam-vi' ? '#7C2D12'
              : product.flavor.category === 'nguyen-ban' ? '#166534'
              : '#92400E'

            return (
              <Link
                key={product.id}
                href={`/san-pham/${product.slug}`}
                className="group bg-white rounded-2xl border border-[#D9CABC] overflow-hidden card-hover"
              >
                {/* Product image placeholder */}
                <div
                  className="h-36 flex flex-col items-center justify-center gap-2"
                  style={{ background: `${flavorColor}12` }}
                >
                  <span className="text-5xl">☕</span>
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: flavorColor }}
                  >
                    {lineLabels[product.line]}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-[#6B5A4E]">{product.code}</span>
                    <span className="text-xs text-[#6B5A4E]">{roastLabels[product.roastLevel]}</span>
                  </div>

                  <h3 className="font-semibold text-[#1A0F08] mb-2 leading-snug group-hover:text-[#6B2D0A] transition-colors">
                    {product.name}
                  </h3>

                  {/* Flavor hints */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.notes.slice(0, 3).map((note) => (
                      <span key={note} className="badge badge-amber text-xs">
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#F5EDE0]">
                    <div>
                      <span className="font-bold text-[#6B2D0A]">
                        {mainFmt.price.toLocaleString('vi-VN')}đ
                      </span>
                      <span className="text-xs text-[#6B5A4E] ml-1">/ {mainFmt.weight}</span>
                    </div>
                    {mainFmt.priceCombo && (
                      <span className="badge badge-green text-xs">
                        Combo {mainFmt.priceCombo.toLocaleString('vi-VN')}đ
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </>
  )
}
