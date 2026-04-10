import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, MapPin, Package, Tag } from 'lucide-react'
import { products } from '@/content/products'
import { flavorCategories } from '@/content/flavors'
import { FlavorRadar } from '@/components/products/FlavorRadar'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.description,
  }
}

const roastLabels: Record<string, string> = {
  light: 'Rang nhẹ',
  'medium-light': 'Rang vừa nhẹ',
  medium: 'Rang vừa',
  'medium-dark': 'Rang vừa đậm',
  dark: 'Rang đậm',
}

export default async function SanPhamChiTietPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const flavorCat = flavorCategories.find((f) => f.id === product.flavor.category)
  const relatedProducts = products
    .filter((p) => p.flavor.category === product.flavor.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-2 text-[#EDE4D8]/60 hover:text-[#E8A84C] text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> Quay lại danh sách
          </Link>
          <div className="flex items-center gap-3 mb-2">
            <span className="badge badge-amber">{flavorCat?.icon} Gu {flavorCat?.label}</span>
            <span className="text-[#EDE4D8]/40 text-sm font-mono">{product.code}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{product.name}</h1>
        </div>
      </section>

      <section className="py-10 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left: flavor radar + details */}
            <div className="space-y-6">
              {/* Flavor card */}
              <div className="bg-white rounded-2xl border border-[#D9CABC] p-7">
                <h2 className="font-bold text-[#1A0F08] mb-5">Biểu đồ hương vị</h2>
                <FlavorRadar flavor={product.flavor} />
              </div>

              {/* Flavor notes */}
              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h3 className="font-semibold text-[#1A0F08] mb-4">🎵 Notes hương vị</h3>
                <div className="flex flex-wrap gap-2">
                  {product.notes.map((note) => (
                    <span key={note} className="badge badge-amber px-3 py-1.5 text-sm">
                      {note}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-[#F5EDE0]">
                  <p className="text-xs text-[#6B5A4E]">
                    Phù hợp: {product.flavor.suitableFor.join(' · ')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: info */}
            <div className="space-y-6">
              {/* Description */}
              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h2 className="font-bold text-[#1A0F08] mb-3">Mô tả sản phẩm</h2>
                <p className="text-[#6B5A4E] leading-relaxed">{product.description}</p>
              </div>

              {/* Product specs */}
              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h3 className="font-semibold text-[#1A0F08] mb-4">Thông số kỹ thuật</h3>
                <dl className="space-y-3">
                  <div className="flex gap-3">
                    <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0 flex items-center gap-1">
                      <Tag size={12} /> Nguyên liệu
                    </dt>
                    <dd className="text-sm text-[#1A0F08]">{product.ingredients}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0 flex items-center gap-1">
                      <MapPin size={12} /> Vùng trồng
                    </dt>
                    <dd className="text-sm text-[#1A0F08]">{product.origin.join(', ')}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0">Độ rang</dt>
                    <dd className="text-sm text-[#1A0F08]">{roastLabels[product.roastLevel]}</dd>
                  </div>
                </dl>
              </div>

              {/* Pricing table */}
              <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
                <div className="px-6 py-4 border-b border-[#F5EDE0]">
                  <h3 className="font-semibold text-[#1A0F08] flex items-center gap-2">
                    <Package size={16} /> Quy cách & Giá niêm yết
                  </h3>
                </div>
                <div className="table-responsive">
                  <table className="w-full text-sm">
                    <thead className="bg-[#F5EDE0]">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B5A4E]">Quy cách</th>
                        <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B5A4E]">Giá lẻ</th>
                        <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B5A4E]">Giá combo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.format.map((fmt) => (
                        <tr key={fmt.sku} className="border-t border-[#F5EDE0]">
                          <td className="px-6 py-3">
                            <div className="font-medium text-[#1A0F08]">{fmt.weight}</div>
                            <div className="text-xs text-[#6B5A4E] font-mono">{fmt.sku}</div>
                          </td>
                          <td className="px-6 py-3 text-right font-semibold text-[#6B2D0A]">
                            {fmt.price.toLocaleString('vi-VN')}đ
                          </td>
                          <td className="px-6 py-3 text-right">
                            {fmt.priceCombo ? (
                              <span className="font-semibold text-[#166534]">
                                {fmt.priceCombo.toLocaleString('vi-VN')}đ
                              </span>
                            ) : (
                              <span className="text-[#6B5A4E]">—</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="px-6 py-4 bg-[#FDF6ED] border-t border-[#F5EDE0]">
                  <p className="text-xs text-[#6B5A4E]">
                    ⓘ Giá niêm yết, tham khảo tại thời điểm cập nhật. Giá combo áp dụng theo chương trình An Nhiên.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-[#1C0F07] rounded-2xl p-6 text-center">
                <p className="text-[#EDE4D8]/70 text-sm mb-4">
                  Quan tâm đến sản phẩm này? Liên hệ để được tư vấn và đặt hàng.
                </p>
                <Link
                  href={`/lien-he?product=${product.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
                >
                  Liên hệ tư vấn sản phẩm này
                </Link>
              </div>
            </div>
          </div>

          {/* Related products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-[#1A0F08] mb-6">Sản phẩm cùng gu</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/san-pham/${rp.slug}`}
                    className="bg-white rounded-xl border border-[#D9CABC] p-5 card-hover group"
                  >
                    <div className="font-semibold text-[#1A0F08] mb-1 group-hover:text-[#6B2D0A] transition-colors">
                      {rp.name}
                    </div>
                    <div className="text-sm text-[#6B5A4E]">
                      {rp.format[0].price.toLocaleString('vi-VN')}đ
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
