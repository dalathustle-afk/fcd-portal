import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Package } from 'lucide-react'
import { products } from '@/data/products'
import { ProductImageViewer } from '@/components/products/ProductImageViewer'

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
    title: `${product.name} — FCD`,
    description: product.descriptionShort,
  }
}

const groupLabels: Record<string, string> = {
  'gu-pho-thong': 'Gu Phổ Thông',
  'gu-truyen-thong': 'Gu Truyền Thống',
  'gu-dam-vi': 'Gu Đậm Vị',
  'gu-can-bang': 'Gu Cân Bằng',
  'gu-tinh-te': 'Gu Tinh Tế',
  'gu-tinh-tuy': 'Gu Tinh Túy',
  'gu-nguyen-ban': 'Gu Nguyên Bản',
  'phin-giay': 'Phin Giấy',
  'bo-dung-cu': 'Bộ Dụng Cụ',
  'hop-qua-giay': 'Hộp Quà Giấy',
  'hop-qua-tinh-te': 'Hộp Quà Tinh Tế',
  'an-nhien-combo': 'Gói An Nhiên 12kg',
}

export default async function SanPhamChiTietPage({ params }: Props) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const relatedProducts = products
    .filter((p) => p.group === product.group && p.id !== product.id)
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
            <span className="badge badge-amber">
              {groupLabels[product.group] ?? product.group}
            </span>
            <span className="text-[#EDE4D8]/40 text-sm font-mono">{product.code}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{product.name}</h1>
        </div>
      </section>

      <section className="py-10 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left: product detail */}
            <div className="space-y-6">
              {/* Product image — full + zoom */}
              {product.todoImage || !product.image ? (
                <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
                  <div className="h-56 flex flex-col items-center justify-center gap-3 bg-[#F5EDE0]">
                    <span className="text-6xl">☕</span>
                    <span className="text-sm font-bold text-[#6B2D0A] bg-[#E8A84C]/20 px-3 py-1 rounded-full">
                      {product.code}
                    </span>
                    <span className="text-xs text-[#6B5A4E] bg-white/60 px-2 py-0.5 rounded">
                      Ảnh thật sẽ được cập nhật
                    </span>
                  </div>
                </div>
              ) : (
                <ProductImageViewer src={product.image} alt={product.alt} />
              )}

              {/* Flavor notes */}
              {product.flavorNotes && product.flavorNotes.length > 0 && (
                <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                  <h3 className="font-semibold text-[#1A0F08] mb-4">🎵 Notes hương vị</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.flavorNotes.map((note) => (
                      <span key={note} className="badge badge-amber px-3 py-1.5 text-sm">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Taste profile bars */}
              {product.tasteProfile && (
                <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                  <h3 className="font-semibold text-[#1A0F08] mb-4">👅 Profile vị giác</h3>
                  <div className="space-y-2">
                    {([
                      { label: 'Đắng', value: product.tasteProfile.bitter },
                      { label: 'Ngọ t', value: product.tasteProfile.sweet },
                      { label: 'Chua', value: product.tasteProfile.acid },
                      { label: 'Đậm (body)', value: product.tasteProfile.body },
                      { label: 'Hậu vị béo', value: product.tasteProfile.finish },
                    ] as { label: string; value: number }[]).map(({ label, value }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="text-xs text-[#6B5A4E] w-20 shrink-0">{label}</span>
                        <div className="flex-1 bg-[#F5EDE0] rounded-full h-2">
                          <div
                            className="bg-[#C07A2B] rounded-full h-2 transition-all"
                            style={{ width: `${value * 10}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-[#6B2D0A] w-4">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Brewing methods */}
              {product.brewingMethods && product.brewingMethods.length > 0 && (
                <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                  <h3 className="font-semibold text-[#1A0F08] mb-3">☕ Cách pha phù hợp</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.brewingMethods.map((m) => (
                      <span key={m} className="text-xs bg-[#F5EDE0] text-[#6B2D0A] px-3 py-1 rounded-full border border-[#D9CABC]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h3 className="font-semibold text-[#1A0F08] mb-4">Thông số</h3>
                <dl className="space-y-3">
                  {product.origin && (
                    <div className="flex gap-3">
                      <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0 flex items-center gap-1">
                        <MapPin size={12} /> Vùng nguyên liệu
                      </dt>
                      <dd className="text-sm text-[#1A0F08]">{product.origin}</dd>
                    </div>
                  )}
                  {product.altitude && (
                    <div className="flex gap-3">
                      <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0">Độ cao</dt>
                      <dd className="text-sm text-[#1A0F08]">{product.altitude}</dd>
                    </div>
                  )}
                  {product.blend && product.blend !== '—' && (
                    <div className="flex gap-3">
                      <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0">Công thức phối</dt>
                      <dd className="text-sm text-[#1A0F08]">{product.blend}</dd>
                    </div>
                  )}
                  {product.processing && product.processing !== '—' && (
                    <div className="flex gap-3">
                      <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0">Chế biến</dt>
                      <dd className="text-sm text-[#1A0F08]">{product.processing}</dd>
                    </div>
                  )}
                  {product.roastLevel && (
                    <div className="flex gap-3">
                      <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0">Độ rang</dt>
                      <dd className="text-sm text-[#1A0F08]">{product.roastLevel}</dd>
                    </div>
                  )}
                  <div className="flex gap-3">
                    <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0">Mã sản phẩm</dt>
                    <dd className="text-sm text-[#1A0F08] font-mono">{product.code}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="text-xs font-semibold text-[#6B5A4E] w-28 shrink-0">Nhóm</dt>
                    <dd className="text-sm text-[#1A0F08]">{groupLabels[product.group] ?? product.group}</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right: description + pricing */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h2 className="font-bold text-[#1A0F08] mb-3">Mô tả sản phẩm</h2>
                <p className="text-[#6B5A4E] leading-relaxed">{product.descriptionShort}</p>
              </div>

              {/* Pricing table */}
              {product.prices.length > 0 && (
                <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
                  <div className="px-6 py-4 border-b border-[#F5EDE0]">
                    <h3 className="font-semibold text-[#1A0F08] flex items-center gap-2">
                      <Package size={16} /> Quy cách &amp; Giá niêm yết
                    </h3>
                  </div>
                  <table className="w-full text-sm">
                    <thead className="bg-[#F5EDE0]">
                      <tr>
                        <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B5A4E]">Quy cách</th>
                        <th className="text-right px-6 py-3 text-xs font-semibold text-[#6B5A4E]">Giá niêm yết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.prices.map((pt) => (
                        <tr key={pt.size} className="border-t border-[#F5EDE0]">
                          <td className="px-6 py-3 font-medium text-[#1A0F08]">{pt.size}</td>
                          <td className="px-6 py-3 text-right font-bold text-[#6B2D0A]">
                            {pt.price.toLocaleString('vi-VN')}đ
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="px-6 py-3 bg-[#FDF6ED] border-t border-[#F5EDE0]">
                    <p className="text-xs text-[#6B5A4E]">
                      ⓘ Giá niêm yết khách hàng lẻ, hiệu lực từ 10/02/2026.
                    </p>
                  </div>
                </div>
              )}

              {product.prices.length === 0 && (
                <div className="bg-[#FDF6ED] rounded-2xl border border-[#D9CABC] p-6">
                  <h3 className="font-semibold text-[#1A0F08] mb-2">Giá &amp; Quy cách</h3>
                  <p className="text-sm text-[#6B5A4E]">
                    Liên hệ FCD để xác nhận giá và điều kiện đặt hàng cho nhóm sản phẩm này.
                  </p>
                </div>
              )}

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
              <h2 className="text-xl font-bold text-[#1A0F08] mb-6">Sản phẩm cùng nhóm</h2>
              <div className="grid sm:grid-cols-3 gap-5">
                {relatedProducts.map((rp) => (
                  <Link
                    key={rp.id}
                    href={`/san-pham/${rp.slug}`}
                    className="bg-white rounded-xl border border-[#D9CABC] p-5 card-hover group"
                  >
                    <div className="font-medium text-[#1A0F08] mb-1 group-hover:text-[#6B2D0A] transition-colors">
                      {rp.name}
                    </div>
                    <div className="text-xs text-[#6B5A4E] font-mono">{rp.code}</div>
                    {rp.prices[0] && (
                      <div className="text-sm font-bold text-[#6B2D0A] mt-2">
                        {rp.prices[0].price.toLocaleString('vi-VN')}đ
                      </div>
                    )}
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
