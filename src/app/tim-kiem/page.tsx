'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { products } from '@/content/products'
import { policies } from '@/content/policies'
import { flavorCategories } from '@/content/flavors'
import { partners } from '@/content/partners'
import type { SearchResult } from '@/lib/types'

function buildAllResults(): SearchResult[] {
  const results: SearchResult[] = []
  products.forEach((p) => results.push({ type: 'product', title: p.name, subtitle: `${p.code} · ${p.description.substring(0, 80)}`, href: `/san-pham/${p.slug}`, tags: p.tags }))
  policies.forEach((p) => results.push({ type: 'policy', title: p.title, subtitle: p.summary, href: `/chinh-sach/${p.slug}`, tags: p.tags }))
  flavorCategories.forEach((f) => results.push({ type: 'flavor', title: `Gu ${f.label}`, subtitle: f.character, href: `/gu-ca-phe#${f.slug}`, tags: [f.slug] }))
  partners.forEach((p) => results.push({ type: 'partner', title: p.name, subtitle: `${p.industry} · ${p.city}`, href: '/doi-tac', tags: [] }))
  results.push(
    { type: 'page', title: 'Chương trình An Nhiên', subtitle: 'Giải pháp cà phê đặc sản toàn diện', href: '/an-nhien' },
    { type: 'page', title: 'Bảng giá niêm yết', subtitle: 'Xem bảng giá đầy đủ', href: '/bang-gia' },
    { type: 'page', title: 'Giới thiệu FCD', subtitle: 'Thương hiệu cà phê đặc sản Cầu Đất', href: '/gioi-thieu' },
  )
  return results
}

const typeLabels: Record<string, string> = { product: '☕ Sản phẩm', policy: '📜 Chính sách', flavor: '🎨 Gu cà phê', partner: '🤝 Đối tác', page: '📄 Trang' }
const allResults = buildAllResults()

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQ = searchParams.get('q') ?? ''
  const [query, setQuery] = useState(initialQ)
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (!query.trim()) { setResults([]); return }
    const q = query.toLowerCase()
    setResults(allResults.filter((r) =>
      r.title.toLowerCase().includes(q) ||
      r.subtitle?.toLowerCase().includes(q) ||
      r.tags?.some((t) => t.toLowerCase().includes(q))
    ))
  }, [query])

  const grouped = results.reduce<Record<string, SearchResult[]>>((acc, r) => {
    ;(acc[r.type] ??= []).push(r)
    return acc
  }, {})

  return (
    <>
      <div className="relative max-w-2xl">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B5A4E]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nhập tên sản phẩm, mã, chính sách, gu cà phê, đối tác…"
          id="main-search"
          autoFocus
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-[#D9CABC] bg-white text-[#1A0F08] placeholder:text-[#6B5A4E]/60 text-sm focus:outline-none focus:border-[#C07A2B] transition-colors shadow-sm"
        />
      </div>

      {query && (
        <div className="mt-2 text-sm text-[#6B5A4E]">
          {results.length > 0
            ? `${results.length} kết quả cho "${query}"`
            : `Không tìm thấy kết quả cho "${query}"`}
        </div>
      )}

      {Object.entries(grouped).map(([type, items]) => (
        <div key={type} className="mt-8">
          <h2 className="text-sm font-semibold text-[#6B5A4E] mb-3">{typeLabels[type]}</h2>
          <div className="space-y-2">
            {items.map((r, i) => (
              <Link
                key={i}
                href={r.href}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-[#D9CABC] hover:border-[#C07A2B] hover:shadow-sm transition-all group"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-[#1A0F08] group-hover:text-[#6B2D0A] transition-colors">
                    {r.title}
                  </div>
                  {r.subtitle && (
                    <p className="text-xs text-[#6B5A4E] mt-1 line-clamp-2">{r.subtitle}</p>
                  )}
                </div>
                <span className="text-xs text-[#6B5A4E] shrink-0 mt-1">{typeLabels[type]}</span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {!query && (
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: '/san-pham', icon: '☕', title: 'Tra cứu sản phẩm', desc: 'Tìm theo gu, dòng, giá' },
            { href: '/chinh-sach', icon: '📜', title: 'Chính sách', desc: 'Chiết khấu, hỗ trợ, đại sứ' },
            { href: '/bang-gia', icon: '📋', title: 'Bảng giá', desc: 'Giá lẻ và giá combo' },
            { href: '/gu-ca-phe', icon: '🎨', title: 'Gu cà phê', desc: '4 nhóm gu đặc trưng' },
            { href: '/an-nhien', icon: '✨', title: 'An Nhiên', desc: 'Chương trình giá trị FCD' },
            { href: '/doi-tac', icon: '🤝', title: 'Đối tác', desc: '25+ doanh nghiệp đồng hành' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#D9CABC] hover:border-[#C07A2B] transition-all"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <div className="font-medium text-[#1A0F08] text-sm">{item.title}</div>
                <div className="text-xs text-[#6B5A4E]">{item.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default function TimKiemPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-bold text-white mb-2">Tìm kiếm</h1>
          <p className="text-[#EDE4D8]/60">Tìm sản phẩm, chính sách, gu, đối tác…</p>
        </div>
      </section>
      <section className="py-10 bg-[#FDF6ED] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Suspense>
            <SearchContent />
          </Suspense>
        </div>
      </section>
    </>
  )
}
