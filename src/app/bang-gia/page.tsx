import type { Metadata } from 'next'
import { priceList } from '@/data/prices'
import { PriceTableReal } from '@/components/pricing/PriceTableReal'

export const metadata: Metadata = {
  title: 'Bảng giá niêm yết FCD',
  description:
    'Bảng giá niêm yết chính thức FCD — giá lẻ các gu P, P3, C, C3, B3, A3, CAO1, O1 và phin giấy. Cập nhật 10/02/2026.',
}

export default function BangGiaPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">📋 Giá niêm yết</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Bảng giá niêm yết</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="text-[#EDE4D8]/60">
              Cập nhật: <strong className="text-[#E8A84C]">{priceList.updatedAt}</strong>
            </span>
            <span className="text-[#EDE4D8]/60">
              Hiệu lực từ: <strong className="text-[#E8A84C]">{priceList.effectiveDate}</strong>
            </span>
          </div>
          <p className="text-[#EDE4D8]/50 text-sm mt-2 max-w-2xl">{priceList.note}</p>
        </div>
      </section>

      <section className="py-10 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <PriceTableReal items={priceList.items} />
        </div>
      </section>
    </>
  )
}
