'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search } from 'lucide-react'
import type { ProductRecord } from '@/data/products'

const groupLabels: Record<string, string> = {
  'gu-pho-thong': 'Gu Phổ Thông',
  'gu-truyen-thong': 'Gu Truyền Thống',
  'gu-dam-vi': 'Gu Đậm Vị',
  'gu-can-bang': 'Gu Cân Bằng',
  'gu-tinh-te': 'Gu Tinh Tế',
  'gu-nguyen-ban': 'Gu Nguyên Bản',
  'phin-giay': 'Phin Giấy',
  'bo-dung-cu': 'Bộ Dụng Cụ',
  'hop-qua-giay': 'Hộp Quà Giấy',
  'hop-qua-tinh-te': 'Hộp Quà Tinh Tế',
  'an-nhien-combo': 'Gói An Nhiên 12kg',
}

interface Props {
  products: ProductRecord[]
}

export function ProductFilters({ products }: Props) {
  const [search, setSearch] = useState('')
  const [group, setGroup] = useState<string>('all')

  const groups = useMemo(() => {
    const g = Array.from(new Set(products.map((p) => p.group)))
    return g
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
      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6B5A4E]" />
          <input
            type="text"
            placeholder="Tìm theo tên, mã sản phẩm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#D9CABC] bg-white text-[#1A0F08] text-sm focus:outline-none focus:border-[#C07A2B]"
          />
        </div>
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-[#D9CABC] bg-white text-[#1A0F08] text-sm focus:outline-none focus:border-[#C07A2B]"
        >
          <option value="all">Tất cả nhóm</option>
          {groups.map((g) => (
            <option key={g} value={g}>{groupLabels[g] ?? g}</option>
          ))}
        </select>
      </div>

      {/* Results count */}
      <p className="text-sm text-[#6B5A4E] mb-5">
        {filtered.length} sản phẩm
      </p>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((p) => {
          const minPrice = p.prices[0]?.price ?? 0
          const minSize = p.sizes[0] ?? ''
          return (
            <Link
              key={p.id}
              href={`/san-pham/${p.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-[#D9CABC] card-hover"
            >
              {/* Placeholder image until real photos available */}
              <div className="h-36 flex flex-col items-center justify-center gap-2 bg-[#F5EDE0]">
                <span className="text-4xl">☕</span>
                <span className="text-xs font-bold text-[#6B2D0A] bg-[#E8A84C]/20 px-2 py-0.5 rounded-full">
                  {p.code}
                </span>
              </div>
              <div className="p-4">
                <span className="text-xs text-[#C07A2B] font-semibold">
                  {groupLabels[p.group] ?? p.group}
                </span>
                <h3 className="font-semibold text-[#1A0F08] text-sm mt-0.5 mb-1 group-hover:text-[#6B2D0A] leading-snug">
                  {p.name}
                </h3>
                <p className="text-xs text-[#6B5A4E] line-clamp-2 mb-3">{p.descriptionShort}</p>
                <div className="flex items-center justify-between border-t border-[#F5EDE0] pt-2">
                  {minPrice > 0 ? (
                    <span className="font-bold text-[#6B2D0A] text-sm">
                      {minPrice.toLocaleString('vi-VN')}đ
                    </span>
                  ) : (
                    <span className="text-xs text-[#6B5A4E]">Liên hệ</span>
                  )}
                  <span className="text-xs text-[#6B5A4E]">{minSize}</span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-[#6B5A4E]">
          <div className="text-4xl mb-3">☕</div>
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        </div>
      )}
    </div>
  )
}
