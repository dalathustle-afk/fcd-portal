import type { Metadata } from 'next'
import Image from 'next/image'
import { priceList } from '@/data/prices'
import { PriceTableReal } from '@/components/pricing/PriceTableReal'

export const metadata: Metadata = {
  title: 'Bảng giá niêm yết FCD',
  description: 'Bảng giá niêm yết chính thức FCD — giá lẻ các gu P, P3, C, C3, B3, A3, CAO1, O1 và phin giấy. Cập nhật 10/02/2026.',
}

export default function BangGiaPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Cầu Đất" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/55 via-[#FAF7F2]/28 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-5 inline-flex">📋 Giá niêm yết</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white italic mb-4 leading-tight">
            Bảng giá niêm yết
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm mb-3">
            <span className="text-white/78">
              Cập nhật: <strong className="text-[#E3A558]">{priceList.updatedAt}</strong>
            </span>
            <span className="text-white/78">
              Hiệu lực từ: <strong className="text-[#E3A558]">{priceList.effectiveDate}</strong>
            </span>
          </div>
          <p className="text-white/62 text-xs max-w-2xl">{priceList.note}</p>
        </div>
      </section>

      {/* ══ TABLE ═════════════════════════════════════════════════ */}
      <section className="py-12 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <PriceTableReal items={priceList.items} />
        </div>
      </section>
    </>
  )
}
