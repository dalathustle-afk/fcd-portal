import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { policies } from '@/content/policies'

export const metadata: Metadata = {
  title: 'Thư viện chính sách FCD',
  description: 'Tra cứu chính sách bán hàng, chiết khấu, hỗ trợ sản phẩm, thiết bị và đại sứ CTV của FCD.',
}

const categoryMeta: Record<string, { label: string; icon: string }> = {
  'ban-hang':        { label: 'Bán hàng cơ bản',      icon: '🛒' },
  'chiet-khau':      { label: 'Chiết khấu sản lượng',  icon: '📉' },
  'combo-an-nhien':  { label: 'Combo An Nhiên',         icon: '✨' },
  'ho-tro-san-pham': { label: 'Hỗ trợ sản phẩm',      icon: '🔄' },
  'van-chuyen':      { label: 'Vận chuyển & Logistics', icon: '🚚' },
  'tang-may':        { label: 'Hỗ trợ thiết bị',        icon: '☕' },
  'dai-su-ctv':      { label: 'Đại sứ & CTV',           icon: '🌟' },
}

export default function ChinhSachPage() {
  const categories = Array.from(new Set(policies.map((p) => p.category)))

  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Chính sách FCD" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/55 via-[#FAF7F2]/28 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">📜 Tra cứu</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white italic mb-3 leading-tight">Thư viện Chính sách</h1>
          <p className="text-white/60 max-w-lg text-sm leading-relaxed">
            Tất cả chính sách được tổ chức rõ ràng — tìm nhanh theo nhóm hoặc đọc chi tiết từng chính sách.
          </p>
        </div>
      </section>

      {/* ══ CONTENT ══════════════════════════════════════════════════ */}
      <section className="py-12 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Category tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {categories.map((cat) => {
              const meta = categoryMeta[cat]
              const count = policies.filter((p) => p.category === cat).length
              return (
                <a
                  key={cat}
                  href={`#cat-${cat}`}
                  className="card-nature p-5 group text-left"
                >
                  <span className="text-2xl block mb-2">{meta?.icon ?? '📄'}</span>
                  <div className="font-semibold text-[#1A0F08] text-sm mb-1 group-hover:text-[#7C3D18] transition-colors leading-snug">
                    {meta?.label ?? cat}
                  </div>
                  <div className="text-xs text-[#9C8472]">{count} chính sách</div>
                </a>
              )
            })}
          </div>

          {/* Policies by category */}
          <div className="space-y-14">
            {categories.map((cat) => {
              const meta = categoryMeta[cat]
              const catPolicies = policies.filter((p) => p.category === cat)
              return (
                <section key={cat} id={`cat-${cat}`} className="scroll-mt-20">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{meta?.icon ?? '📄'}</span>
                    <div>
                      <h2 className="text-xl font-bold text-[#1A0F08]">{meta?.label ?? cat}</h2>
                      <p className="text-xs text-[#9C8472]">{catPolicies.length} chính sách</p>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {catPolicies.map((policy) => (
                      <Link
                        key={policy.id}
                        href={`/chinh-sach/${policy.slug}`}
                        className="card-nature p-6 group flex flex-col"
                      >
                        {policy.featured && (
                          <span className="badge badge-amber text-xs mb-3 inline-flex self-start">Nổi bật</span>
                        )}
                        <h3 className="font-semibold text-[#1A0F08] mb-2 group-hover:text-[#7C3D18] transition-colors leading-snug text-sm">
                          {policy.title}
                        </h3>
                        <p className="text-xs text-[#6B5A4E] mb-4 leading-relaxed line-clamp-3 flex-1">
                          {policy.summary}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {policy.suitableFor.slice(0, 2).map((s) => (
                            <span key={s} className="badge badge-amber text-xs">{s}</span>
                          ))}
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-[#F5EDE0]">
                          <span className="text-xs text-[#9C8472]">HH từ {policy.effectiveDate}</span>
                          <span className="text-sm font-medium text-[#B87333] group-hover:text-[#D4914A] flex items-center gap-1 transition-colors">
                            Xem chi tiết <ArrowRight size={12} />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
