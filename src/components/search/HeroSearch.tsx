'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { products } from '@/data/products'
import { policies } from '@/content/policies'
import { flavorCategories } from '@/content/flavors'
import { partners } from '@/data/partners'


interface SearchResult {
  type: string
  title: string
  subtitle?: string
  href: string
  tags?: string[]
}

function buildIndex(): SearchResult[] {
  const results: SearchResult[] = []

  products.forEach((p) => {
    const minPrice = p.prices[0]?.price
    results.push({
      type: 'product',
      title: p.name,
      subtitle: `Mã: ${p.code}${minPrice ? ` · ${minPrice.toLocaleString('vi-VN')}đ` : ''}`,
      href: `/san-pham/${p.slug}`,
      tags: [p.code, p.group],
    })
  })

  policies.forEach((p) => {
    results.push({
      type: 'policy',
      title: p.title,
      subtitle: p.summary.substring(0, 60) + '…',
      href: `/chinh-sach/${p.slug}`,
      tags: p.tags,
    })
  })

  flavorCategories.forEach((f) => {
    results.push({
      type: 'flavor',
      title: `Gu ${f.label}`,
      subtitle: f.character,
      href: `/gu-ca-phe#${f.slug}`,
      tags: [f.slug],
    })
  })

  partners.slice(0, 10).forEach((p) => {
    results.push({
      type: 'partner',
      title: p.name,
      subtitle: p.category ?? 'Đối tác doanh nghiệp',
      href: '/doi-tac',
      tags: [],
    })
  })

  results.push(
    { type: 'page', title: 'Chương trình An Nhiên', subtitle: 'Triết lý An & Nhìn, 5 Không, 10 bước', href: '/an-nhien' },
    { type: 'page', title: 'Bảng giá niêm yết', subtitle: 'Giá chính thức từ 10/02/2026', href: '/bang-gia' },
    { type: 'page', title: 'Giới thiệu FCD', subtitle: 'Thương hiệu cà phê Cầu Đất', href: '/gioi-thieu' },
  )

  return results
}

const typeLabel: Record<string, string> = {
  product: 'Sản phẩm',
  policy: 'Chính sách',
  flavor: 'Gu cà phê',
  partner: 'Đối tác',
  page: 'Trang',
}
const typeIcon: Record<string, string> = {
  product: '☕',
  policy: '📜',
  flavor: '🎨',
  partner: '🤝',
  page: '📄',
}

export function HeroSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [open, setOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const index = useRef(buildIndex())

  useEffect(() => {
    if (!query.trim()) { setResults([]); setOpen(false); return }
    const q = query.toLowerCase()
    const filtered = index.current.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.subtitle?.toLowerCase().includes(q) ||
        r.tags?.some((t) => t.toLowerCase().includes(q))
    )
    setResults(filtered.slice(0, 8))
    setOpen(true)
  }, [query])

  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EDE4D8]/50" />
        <input
          ref={inputRef}
          id="hero-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setOpen(true)}
          placeholder="Tìm sản phẩm, chính sách, gu cà phê…"
          className="w-full pl-11 pr-10 py-4 rounded-2xl bg-white/10 backdrop-blur border border-white/15 text-white placeholder:text-[#EDE4D8]/40 text-sm focus:outline-none focus:border-[#E8A84C]/50 focus:bg-white/15 transition-all"
          aria-label="Tìm kiếm nhanh"
        />
        {query && (
          <button
            onClick={() => { setQuery(''); setResults([]); setOpen(false) }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#EDE4D8]/50 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1C0F07]/98 backdrop-blur-xl rounded-2xl border border-[#E8A84C]/15 shadow-2xl overflow-hidden z-50">
          {results.map((r, i) => (
            <Link
              key={i}
              href={r.href}
              onClick={() => { setQuery(''); setOpen(false) }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#E8A84C]/5 transition-colors border-b border-[#E8A84C]/5 last:border-0"
            >
              <span className="text-lg shrink-0">{typeIcon[r.type]}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-[#EDE4D8] truncate">{r.title}</div>
                {r.subtitle && <div className="text-xs text-[#EDE4D8]/50 truncate">{r.subtitle}</div>}
              </div>
              <span className="text-xs text-[#E8A84C]/60 shrink-0">{typeLabel[r.type]}</span>
            </Link>
          ))}
          <Link
            href={`/tim-kiem?q=${encodeURIComponent(query)}`}
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-[#E8A84C] hover:bg-[#E8A84C]/5 transition-colors"
          >
            Xem tất cả kết quả <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {open && results.length === 0 && query && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-[#1C0F07]/98 backdrop-blur-xl rounded-2xl border border-[#E8A84C]/15 shadow-2xl px-4 py-6 text-center z-50">
          <p className="text-sm text-[#EDE4D8]/60">Không tìm thấy kết quả cho &ldquo;{query}&rdquo;</p>
        </div>
      )}
    </div>
  )
}
