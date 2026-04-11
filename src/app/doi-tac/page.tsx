import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Đối tác doanh nghiệp — FCD',
  description: 'Hơn 56 doanh nghiệp và tổ chức đang đồng hành cùng cà phê đặc sản FCD FROMCAUDAT.',
}

// All logos 1..57 EXCEPT #3 (broken image)
const ALL_LOGOS = [
  1, 2,
  ...Array.from({ length: 54 }, (_, i) => i + 4), // 4..57
].map((n) => ({
  id:  n,
  src: `/images/partner/${n}.png`,
  alt: `Đối tác FCD #${n}`,
}))

// Split into 3 rows for 3 marquee belts
const ROW1 = ALL_LOGOS.slice(0, 19)   // 19 logos → scroll left
const ROW2 = ALL_LOGOS.slice(19, 38)  // 19 logos → scroll right
const ROW3 = ALL_LOGOS.slice(38)      // 18 logos → scroll left (slow)

// ── Logo circle ─────────────────────────────────────────────────────
function LogoCircle({ logo }: { logo: { id: number; src: string; alt: string } }) {
  return (
    <div className="shrink-0 mx-3 group">
      <div className="w-20 h-20 rounded-full overflow-hidden bg-white border-2 border-[#E8DDD0] shadow-sm group-hover:border-[#B87333]/50 group-hover:shadow-md transition-all duration-300 group-hover:scale-110 flex items-center justify-center p-2">
        <Image
          src={logo.src}
          alt={logo.alt}
          width={64}
          height={64}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default function DoiTacPage() {
  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Đối tác FCD" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/92 via-[#1A120A]/80 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-sage mb-5 inline-flex">🤝 Đối tác</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Đối tác &amp; Doanh nghiệp đồng hành
          </h1>
          <p className="text-white/65 max-w-lg mx-auto text-sm leading-relaxed text-center">
            Hơn <strong className="text-[#E8A84C]">56 doanh nghiệp</strong> đang tin dùng cà phê đặc sản FCD trong văn phòng, chuỗi F&B và không gian làm việc.
          </p>
        </div>
      </section>

      {/* ══ MARQUEE LOGO WALL ══════════════════════════════════════ */}
      <section className="py-20 section-cream texture-leaf">
        {/* Section header */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-14">
          <span className="badge badge-amber mb-4 inline-flex">🏢 56+ đối tác</span>
          <h2 className="font-display text-2xl sm:text-3xl text-[#1A120A] mb-2">
            Tin dùng bởi các doanh nghiệp
          </h2>
          <p className="text-[#6B5A4E] text-sm max-w-md mx-auto text-center">
            Từ văn phòng doanh nghiệp đến chuỗi F&B — FCD đồng hành trên từng tách cà phê
          </p>
        </div>

        {/* ── Row 1: scroll left ── */}
        <div className="marquee-wrap mb-6">
          <div className="marquee-track marquee-ltr">
            {[...ROW1, ...ROW1].map((logo, i) => (
              <LogoCircle key={`r1-${logo.id}-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* ── Row 2: scroll right ── */}
        <div className="marquee-wrap mb-6">
          <div className="marquee-track marquee-rtl">
            {[...ROW2, ...ROW2].map((logo, i) => (
              <LogoCircle key={`r2-${logo.id}-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* ── Row 3: scroll left slow ── */}
        <div className="marquee-wrap">
          <div className="marquee-track marquee-ltr" style={{ animationDuration: '42s' }}>
            {[...ROW3, ...ROW3].map((logo, i) => (
              <LogoCircle key={`r3-${logo.id}-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto text-center px-4">
          {[
            { value: '56+', label: 'Đối tác tin dùng' },
            { value: '100%', label: 'SCA Specialty' },
            { value: '2+',  label: 'Năm đồng hành' },
          ].map((s) => (
            <div key={s.label} className="card-nature p-5">
              <div className="font-display text-2xl text-[#B87333] mb-1">{s.value}</div>
              <div className="text-xs text-[#6B5A4E]">{s.label}</div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-[#9C8472] mt-8">
          ⓘ Danh sách đối tác cập nhật định kỳ. Doanh nghiệp chưa xuất hiện?{' '}
          <Link href="/lien-he" className="text-[#B87333] underline hover:text-[#7C3D18]">
            Liên hệ FCD
          </Link>{' '}
          để cập nhật.
        </p>
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all shadow-lg"
          >
            Liên hệ hợp tác <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  )
}
