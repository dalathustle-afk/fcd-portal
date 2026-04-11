import type { Metadata } from 'next'
import Image from 'next/image'
import { products } from '@/data/products'
import { ProductFilters } from '@/components/products/ProductFilters'

export const metadata: Metadata = {
  title: 'Sản phẩm FCD',
  description: 'Danh sách sản phẩm cà phê đặc sản FCD — tra cứu theo gu, mã sản phẩm. Arabica Cầu Đất và Robusta Buôn Ma Thuột.',
}

export default function SanPhamPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê Arabica Cầu Đất" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/90 via-[#1A120A]/80 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-5 inline-flex">☕ Sản phẩm</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white italic mb-4 leading-tight">
            Tra cứu sản phẩm FCD
          </h1>
          <p className="text-white/60 max-w-xl text-sm leading-relaxed">
            Tìm kiếm theo tên, mã sản phẩm hoặc nhóm gu
          </p>
          {/* Quick stats */}
          <div className="flex flex-wrap gap-5 mt-6">
            {[
              { label: 'Sản phẩm', value: `${products.length}+` },
              { label: 'Tiêu chuẩn', value: 'SCA Specialty' },
              { label: 'Vùng trồng', value: '2 vùng' },
            ].map((s) => (
              <div key={s.label} className="glass-dark rounded-xl px-4 py-2">
                <div className="text-[#E3A558] font-bold text-sm">{s.value}</div>
                <div className="text-white/40 text-xs">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCTS ══════════════════════════════════════════════ */}
      <section className="py-12 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ProductFilters products={products} />
        </div>
      </section>
    </>
  )
}
