import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Đối tác doanh nghiệp — FCD',
  description: 'Hơn 57 doanh nghiệp và tổ chức đang đồng hành cùng cà phê đặc sản FCD FROMCAUDAT.',
}

// Generate logo list 1..57
const partnerLogos = Array.from({ length: 57 }, (_, i) => ({
  id:  i + 1,
  src: `/images/partner/${i + 1}.png`,
  alt: `Đối tác FCD #${i + 1}`,
}))

export default function DoiTacPage() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/nature/hero-caudat.png"
            alt="Đối tác FCD"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/92 via-[#1A120A]/80 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-sage mb-5 inline-flex">🤝 Đối tác</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Đối tác & Doanh nghiệp đồng hành
          </h1>
          <p className="text-white/65 max-w-lg mx-auto text-sm leading-relaxed text-center">
            Hơn <strong className="text-[#E8A84C]">57 doanh nghiệp</strong> đang tin dùng cà phê đặc sản FCD trong văn phòng, chuỗi F&B và không gian làm việc.
          </p>
        </div>
      </section>

      {/* ══ LOGO WALL ══════════════════════════════════════════════ */}
      <section className="py-20 section-cream texture-leaf">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Count badge */}
          <div className="text-center mb-14">
            <span className="badge badge-amber mb-4 inline-flex">🏢 57+ đối tác</span>
            <h2 className="font-display text-2xl sm:text-3xl text-[#1A120A] mb-2">
              Tin dùng bởi các doanh nghiệp
            </h2>
            <p className="text-[#6B5A4E] text-sm text-center max-w-md mx-auto">
              Từ văn phòng doanh nghiệp đến chuỗi F&B — FCD đồng hành trên từng tách cà phê
            </p>
          </div>

          {/* ── Logo grid — circles ── */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-5 sm:gap-6">
            {partnerLogos.map((logo, i) => (
              <div
                key={logo.id}
                className="flex flex-col items-center group"
                style={{ animationDelay: `${(i % 20) * 0.04}s` }}
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-white border-2 border-[#D9CABC] group-hover:border-[#B87333]/60 group-hover:shadow-lg group-hover:shadow-[#B87333]/15 transition-all duration-300 group-hover:scale-110 shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    loading={i < 30 ? 'eager' : 'lazy'}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* ── Stats row ── */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center">
            {[
              { value: '57+', label: 'Đối tác tin dùng' },
              { value: '100%', label: 'SCA Specialty' },
              { value: '2+', label: 'Năm đồng hành' },
            ].map((s) => (
              <div key={s.label} className="card-nature p-5">
                <div className="font-display text-2xl text-[#B87333] mb-1">{s.value}</div>
                <div className="text-xs text-[#6B5A4E]">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── Note ── */}
          <p className="text-center text-xs text-[#9C8472] mt-8">
            ⓘ Danh sách đối tác cập nhật định kỳ. Doanh nghiệp chưa xuất hiện?{' '}
            <Link href="/lien-he" className="text-[#B87333] underline hover:text-[#7C3D18]">
              Liên hệ FCD
            </Link>{' '}
            để cập nhật.
          </p>
        </div>
      </section>

      {/* ══ CTA ════════════════════════════════════════════════════ */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê arabica" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1A120A]/90" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl sm:text-3xl text-white mb-3">
            Trở thành đối tác FCD
          </h2>
          <p className="text-white/60 mb-8 text-sm max-w-md mx-auto text-center leading-relaxed">
            Bạn đang tìm giải pháp cà phê đặc sản chất lượng cao cho doanh nghiệp? Liên hệ để được tư vấn gói phù hợp.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all shadow-lg shadow-[#B87333]/30"
          >
            Liên hệ hợp tác <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
