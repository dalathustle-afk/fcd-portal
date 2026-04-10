import type { Metadata } from 'next'
import Link from 'next/link'
import { flavorCategories } from '@/content/flavors'
import { products } from '@/data/products'

export const metadata: Metadata = {
  title: 'Gu cà phê FCD',
  description: 'Tra cứu 4 gu cà phê đặc trưng FCD — Đậm vị, Cân bằng, Tinh tế, Nguyên bản với sản phẩm tương ứng.',
}

// Map flavor category slug to product group
const catSlugToGroup: Record<string, string> = {
  'dam-vi': 'gu-dam-vi',
  'can-bang': 'gu-can-bang',
  'tinh-te': 'gu-tinh-te',
  'nguyen-ban': 'gu-nguyen-ban',
}

export default function GuCaPhePage() {
  return (
    <>
      <section className="pt-24 pb-10 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-amber mb-4 inline-flex mx-auto">🎨 Tra cứu</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Gu cà phê FCD</h1>
          <p className="text-[#EDE4D8]/60 max-w-lg mx-auto">
            4 nhóm gu vị đặc trưng — mỗi gu có sản phẩm tương ứng trong catalog chính thức
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {flavorCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[#D9CABC] bg-white text-sm font-medium text-[#6B5A4E] hover:border-[#C07A2B] hover:text-[#6B2D0A] transition-all card-hover"
              >
                <span>{cat.icon}</span> {cat.label}
              </a>
            ))}
          </div>

          {/* Each flavor category */}
          <div className="space-y-16">
            {flavorCategories.map((cat) => {
              // Find products matching this flavor group
              const groupKey = catSlugToGroup[cat.slug] ?? ''
              const catProducts = products.filter((p) => p.group === groupKey)

              return (
                <div key={cat.id} id={cat.slug} className="scroll-mt-20">
                  <div className="h-1.5 rounded-full mb-6 max-w-xs" style={{ backgroundColor: cat.color }} />
                  <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left: info */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{cat.icon}</span>
                        <div>
                          <h2 className="text-2xl font-bold text-[#1A0F08]">Gu {cat.label}</h2>
                          <span className="text-sm text-[#6B5A4E]">{cat.character}</span>
                        </div>
                      </div>

                      <p className="text-[#6B5A4E] leading-relaxed mb-6">{cat.description}</p>

                      {/* Highlights */}
                      <div className="mb-5">
                        <h3 className="font-semibold text-[#1A0F08] mb-3 text-sm">🎵 Hương vị nổi bật</h3>
                        <div className="flex flex-wrap gap-2">
                          {cat.highlights.map((h) => (
                            <span key={h} className="badge badge-amber">{h}</span>
                          ))}
                        </div>
                      </div>

                      {/* Suitable for */}
                      <div>
                        <h3 className="font-semibold text-[#1A0F08] mb-3 text-sm">👤 Hợp với ai?</h3>
                        <ul className="space-y-2">
                          {cat.suitableFor.map((s) => (
                            <li key={s} className="flex items-start gap-2 text-sm text-[#6B5A4E]">
                              <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: cat.color }} />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: products */}
                    <div className="space-y-4">
                      {catProducts.length > 0 ? (
                        <div className="bg-white rounded-2xl border border-[#D9CABC] p-5">
                          <h3 className="font-semibold text-[#1A0F08] mb-4 text-sm">
                            ☕ Sản phẩm gu này
                          </h3>
                          <div className="space-y-3">
                            {catProducts.map((product) => (
                              <Link
                                key={product.id}
                                href={`/san-pham/${product.slug}`}
                                className="flex items-center justify-between p-3 rounded-xl border border-[#F5EDE0] hover:border-[#D9CABC] hover:bg-[#FDF6ED] transition-all group"
                              >
                                <div>
                                  <div className="font-medium text-[#1A0F08] text-sm group-hover:text-[#6B2D0A] transition-colors">
                                    {product.name}
                                  </div>
                                  <div className="text-xs text-[#6B5A4E] font-mono">{product.code}</div>
                                </div>
                                <div className="text-right">
                                  {product.prices[0] && (
                                    <>
                                      <div className="font-bold text-[#6B2D0A] text-sm">
                                        {product.prices[0].price.toLocaleString('vi-VN')}đ
                                      </div>
                                      <div className="text-xs text-[#6B5A4E]">{product.prices[0].size}</div>
                                    </>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-white rounded-2xl border border-[#D9CABC] p-5">
                          <p className="text-sm text-[#6B5A4E]">
                            Sản phẩm gu này sẽ được cập nhật. Xem toàn bộ catalog →{' '}
                            <Link href="/san-pham" className="text-[#C07A2B] underline">Sản phẩm FCD</Link>
                          </p>
                        </div>
                      )}

                      <div className="bg-[#1C0F07] rounded-2xl p-5 text-center">
                        <p className="text-xs text-[#EDE4D8]/60 mb-3">
                          Muốn tư vấn gu phù hợp?
                        </p>
                        <Link
                          href="/lien-he"
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#C07A2B] text-[#1C0F07] text-xs font-semibold hover:bg-[#E8A84C] transition-all"
                        >
                          Liên hệ tư vấn
                        </Link>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-12 border-[#D9CABC]" />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
