import type { Metadata } from 'next'
import { products } from '@/data/products'
import { ProductFilters } from '@/components/products/ProductFilters'

export const metadata: Metadata = {
  title: 'Sản phẩm FCD',
  description: 'Danh sách sản phẩm cà phê đặc sản FCD — tra cứu theo gu, mã sản phẩm. Arabica Cầu Đất và Robusta Buôn Ma Thuột.',
}

export default function SanPhamPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">☕ Sản phẩm</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Tra cứu sản phẩm FCD</h1>
          <p className="text-[#EDE4D8]/60 max-w-xl">
            Tìm kiếm theo tên, mã sản phẩm hoặc nhóm gu
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ProductFilters products={products} />
        </div>
      </section>
    </>
  )
}
