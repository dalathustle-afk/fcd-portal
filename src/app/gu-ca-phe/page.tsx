import type { Metadata } from 'next'
import Link from 'next/link'
import { flavorCategories } from '@/content/flavors'
import { products } from '@/content/products'
import { FlavorRadar } from '@/components/products/FlavorRadar'

export const metadata: Metadata = {
  title: 'Gu cà phê FCD',
  description: 'Tra cứu 4 gu cà phê đặc trưng FCD — Đậm vị, Cân bằng, Tinh tế, Nguyên bản. Biểu đồ hương vị và gợi ý sản phẩm cho mỗi gu.',
}

export default function GuCaPhePage() {
  return (
    <>
      <section className="pt-24 pb-10 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-amber mb-4 inline-flex mx-auto">🎨 Tra cứu</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Gu cà phê FCD</h1>
          <p className="text-[#EDE4D8]/60 max-w-lg mx-auto">
            4 nhóm gu vị đặc trưng — mỗi gu có biểu đồ hương vị riêng và gợi ý sản phẩm tương ứng
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

          {/* Each flavor */}
          <div className="space-y-16">
            {flavorCategories.map((cat) => {
              const catProducts = products.filter((p) =>
                cat.products.includes(p.slug)
              )
              // Use first product's flavor profile for the radar
              const sampleFlavor = catProducts[0]?.flavor ?? {
                category: cat.id as any,
                bitter: 5, sweet: 5, sour: 5, body: 6, aftertaste: 5,
                highlights: cat.highlights,
                suitableFor: cat.suitableFor,
              }

              return (
                <div key={cat.id} id={cat.slug} className="scroll-mt-20">
                  {/* Header */}
                  <div
                    className="h-1.5 rounded-full mb-6 max-w-xs"
                    style={{ backgroundColor: cat.color }}
                  />
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
                              <span
                                className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                                style={{ backgroundColor: cat.color }}
                              />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right: radar + products */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                        <h3 className="font-semibold text-[#1A0F08] mb-5">Biểu đồ hương vị</h3>
                        <FlavorRadar flavor={sampleFlavor} />
                      </div>

                      {catProducts.length > 0 && (
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
                                  <div className="font-bold text-[#6B2D0A] text-sm">
                                    {product.format[0].price.toLocaleString('vi-VN')}đ
                                  </div>
                                  <div className="text-xs text-[#6B5A4E]">{product.format[0].weight}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
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
