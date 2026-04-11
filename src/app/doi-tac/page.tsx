import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { partners } from '@/data/partners'

export const metadata: Metadata = {
  title: 'Đối tác doanh nghiệp — FCD',
  description: 'Danh sách doanh nghiệp và tổ chức đang sử dụng cà phê FCD.',
}

export default function DoiTacPage() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê Arabica Cầu Đất" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/90 via-[#1A120A]/78 to-[#EDF3EC]/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-sage mb-5 inline-flex">🤝 Đối tác</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white italic mb-4 leading-tight">
            Đối tác &amp; Doanh nghiệp đồng hành
          </h1>
          <p className="text-white/60 max-w-lg text-sm leading-relaxed">
            Các doanh nghiệp và tổ chức đang tin dùng cà phê FCD trong môi trường làm việc.
          </p>
        </div>
      </section>

      {/* ══ PARTNER GRID ══════════════════════════════════════════ */}
      <section className="py-16 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, i) => (
              <div
                key={partner.id}
                className={`card-nature p-5 animate-fade-in`}
                style={{ animationDelay: `${(i % 9) * 0.05}s` }}
              >
                <h3 className="font-semibold text-[#1A120A] mb-1 leading-snug text-sm">{partner.name}</h3>
                {partner.category && (
                  <p className="text-xs text-[#9C8472]">{partner.category}</p>
                )}
                {partner.city && (
                  <p className="text-xs text-[#9C8472] mt-0.5">📍 {partner.city}</p>
                )}
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="bg-[#FAF6F0] border border-[#D9CABC] rounded-2xl p-5 text-sm text-[#6B5A4E]">
            ⓘ Danh sách đối tác cập nhật từ dữ liệu xác minh. Nếu doanh nghiệp của bạn chưa xuất hiện,
            vui lòng{' '}
            <Link href="/lien-he" className="text-[#B87333] underline hover:text-[#7C3D18]">liên hệ FCD</Link>
            {' '}để cập nhật.
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden bg-[#1A120A] rounded-2xl p-10 text-center">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#B87333] blur-3xl" />
            </div>
            <div className="relative">
              <h3 className="font-display text-2xl text-white italic mb-3">Trở thành đối tác FCD</h3>
              <p className="text-white/55 mb-6 text-sm max-w-md mx-auto text-center">
                Bạn đang tìm giải pháp cà phê chất lượng cho doanh nghiệp? Liên hệ để được tư vấn gói phù hợp.
              </p>
              <Link
                href="/lien-he"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all"
              >
                Liên hệ hợp tác <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
