'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X, ZoomIn } from 'lucide-react'
import { flavorCategories } from '@/content/flavors'
import { products } from '@/data/products'

// Map flavor category slug to product group
const catSlugToGroup: Record<string, string> = {
  'dam-vi': 'gu-dam-vi',
  'can-bang': 'gu-can-bang',
  'tinh-te': 'gu-tinh-te',
  'nguyen-ban': 'gu-nguyen-ban',
}

// Map category slug to gu image
const catImages: Record<string, string> = {
  'dam-vi': '/images/products/gu-dam-vi-b3.jpg',
  'can-bang': '/images/products/gu-can-bang-a3.jpg',
  'tinh-te': '/images/products/gu-tinh-tuy-cao1.jpg',
  'nguyen-ban': '/images/products/gu-nguyen-ban-o1.jpg',
}

export default function GuCaPhePage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nature/hero-caudat.png"
            alt="Vườn cà phê Cầu Đất"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/92 via-[#1A120A]/78 to-[#FAF6F0]" />
          {/* Nature texture overlay */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, rgba(107,140,107,0.4) 0%, transparent 60%)' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-sage mb-5 inline-flex mx-auto">🎨 Tra cứu</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">Gu cà phê FCD</h1>
          <p className="text-white/65 max-w-lg mx-auto text-sm leading-relaxed text-center">
            4 nhóm gu vị đặc trưng — mỗi gu có sản phẩm tương ứng trong catalog chính thức
          </p>
        </div>
      </section>

      {/* ══ TABS NAV ════════════════════════════════════════════════ */}
      <section className="sticky top-16 z-30 py-3 bg-white/90 backdrop-blur-md border-b border-[#D9CABC] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {flavorCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.slug}`}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#D9CABC] bg-white text-sm font-medium text-[#6B5A4E] hover:border-[#B87333] hover:text-[#7C3D18] hover:shadow-sm transition-all"
              >
                <span>{cat.icon}</span> {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GU SECTIONS ═════════════════════════════════════════════ */}
      <section className="py-16 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-20">
            {flavorCategories.map((cat, idx) => {
              const groupKey = catSlugToGroup[cat.slug] ?? ''
              const catProducts = products.filter((p) => p.group === groupKey)
              const guImage = catImages[cat.slug]
              const isEven = idx % 2 === 0

              return (
                <div key={cat.id} id={cat.slug} className="scroll-mt-28">
                  {/* Color bar */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-1 rounded-full flex-1" style={{ backgroundColor: cat.color }} />
                    <span className="text-2xl">{cat.icon}</span>
                    <div className="h-1 rounded-full flex-1" style={{ backgroundColor: cat.color }} />
                  </div>

                  <div className={`grid lg:grid-cols-12 gap-8 items-start ${isEven ? '' : 'direction-rtl'}`}>

                    {/* Image Column — full natural size with zoom */}
                    {guImage && (
                      <div className={`lg:col-span-4 ${isEven ? '' : 'lg:order-last'}`}>
                        <div
                          className="group relative overflow-hidden rounded-3xl cursor-zoom-in shadow-lg hover:shadow-xl transition-shadow"
                          onClick={() => setLightbox({ src: guImage, alt: `Gu ${cat.label} FCD` })}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === 'Enter' && setLightbox({ src: guImage, alt: `Gu ${cat.label} FCD` })}
                          aria-label={`Xem ảnh lớn: Gu ${cat.label}`}
                        >
                          <Image
                            src={guImage}
                            alt={`Gu ${cat.label} FCD`}
                            width={600}
                            height={800}
                            className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                            loading={idx === 0 ? 'eager' : 'lazy'}
                          />
                          {/* Zoom overlay */}
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                              <ZoomIn size={20} className="text-[#1A120A]" />
                            </div>
                          </div>
                          {/* Label bar at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1A120A]/80 via-[#1A120A]/40 to-transparent p-5">
                            <div className="font-bold text-white text-lg">Gu {cat.label}</div>
                            <div className="text-white/70 text-xs mt-0.5">{cat.character}</div>
                          </div>
                        </div>
                        <p className="text-center text-xs text-[#9C8472] mt-2">Nhấp ảnh để phóng to</p>
                      </div>
                    )}

                    {/* Info Column */}
                    <div className={`lg:col-span-5 ${guImage ? '' : 'lg:col-start-2'}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-4xl">{cat.icon}</span>
                        <div>
                          <h2 className="text-2xl font-bold text-[#1A0F08]">Gu {cat.label}</h2>
                          <span className="text-sm text-[#6B5A4E]">{cat.character}</span>
                        </div>
                      </div>

                      <p className="text-[#6B5A4E] leading-relaxed mb-6 text-sm">{cat.description}</p>

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

                    {/* Products Column */}
                    <div className="lg:col-span-3 space-y-4">
                      {catProducts.length > 0 ? (
                        <div className="card-nature p-5">
                          <h3 className="font-semibold text-[#1A0F08] mb-4 text-sm">☕ Sản phẩm gu này</h3>
                          <div className="space-y-3">
                            {catProducts.map((product) => (
                              <Link
                                key={product.id}
                                href={`/san-pham/${product.slug}`}
                                className="flex items-center justify-between p-3 rounded-xl border border-[#F5EDE0] hover:border-[#D9CABC] hover:bg-[#FDF6ED] transition-all group"
                              >
                                <div>
                                  <div className="font-medium text-[#1A0F08] text-sm group-hover:text-[#6B2D0A] transition-colors leading-snug">
                                    {product.name}
                                  </div>
                                  <div className="text-xs text-[#6B5A4E] font-mono">{product.code}</div>
                                </div>
                                <div className="text-right shrink-0 ml-3">
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
                        <div className="card-nature p-5">
                          <p className="text-sm text-[#6B5A4E]">
                            Sản phẩm gu này sẽ được cập nhật.{' '}
                            <Link href="/san-pham" className="text-[#C07A2B] underline">Xem catalog FCD</Link>
                          </p>
                        </div>
                      )}

                      <div className="bg-[#1A120A] rounded-2xl p-5 text-center">
                        <p className="text-xs text-[#EDE4D8]/60 mb-3">Muốn tư vấn gu phù hợp?</p>
                        <Link
                          href="/lien-he"
                          className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-[#B87333] text-white text-xs font-semibold hover:bg-[#D4914A] transition-all"
                        >
                          Liên hệ tư vấn
                        </Link>
                      </div>
                    </div>
                  </div>

                  {idx < flavorCategories.length - 1 && (
                    <div className="mt-16 divider-leaf" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ LIGHTBOX ════════════════════════════════════════════════ */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Xem ảnh"
        >
          <button
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Đóng"
          >
            <X size={22} />
          </button>
          <div
            className="relative max-w-3xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              width={1200}
              height={1600}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              quality={95}
            />
            <p className="text-center text-white/60 text-sm mt-3">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </>
  )
}
