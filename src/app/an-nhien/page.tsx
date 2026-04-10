import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Users, Building2, Coffee, Star } from 'lucide-react'
import { anNhienProgram } from '@/content/an-nhien'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Chương trình An Nhiên cùng FCD',
  description: 'An Nhiên cùng FCD — giải pháp cà phê đặc sản toàn diện: chất lượng an toàn, giá minh bạch, trải nghiệm dễ tiếp cận cho cá nhân, văn phòng và đối tác.',
}

const tierStyle: Record<string, string> = {
  basic: 'border-[#D9CABC] bg-white',
  standard: 'border-[#E8A84C]/40 bg-[#E8A84C]/5 ring-2 ring-[#E8A84C]/20',
  premium: 'border-[#6B2D0A]/30 bg-[#6B2D0A]/5',
}

export default function AnNhienPage() {
  const { pillars, packages, targets, faq } = anNhienProgram

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#E8A84C] blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-amber mb-5 inline-flex mx-auto">✨ Chương trình giá trị</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            An Nhiên cùng FCD
          </h1>
          <p className="text-xl text-[#EDE4D8]/80 mb-4 max-w-2xl mx-auto leading-relaxed">
            {anNhienProgram.subtitle}
          </p>
          <p className="text-[#EDE4D8]/60 mb-8 max-w-xl mx-auto text-sm leading-relaxed">
            {anNhienProgram.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/lien-he"
              className="px-6 py-3.5 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
            >
              Tìm hiểu gói phù hợp với tôi
            </Link>
            <Link
              href="/chinh-sach/chinh-sach-combo-an-nhien"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
            >
              Xem chính sách combo →
            </Link>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">3 Tầng ý nghĩa của An Nhiên</h2>
            <p className="text-[#6B5A4E]">Không chỉ là tên — đây là cam kết toàn diện</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-7 border border-[#D9CABC] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 text-8xl leading-none">
                  {i + 1}
                </div>
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="font-bold text-[#1A0F08] text-lg mb-3">{pillar.title}</h3>
                <p className="text-sm text-[#6B5A4E] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target audiences */}
      <section className="py-16 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">An Nhiên dành cho ai?</h2>
            <p className="text-[#6B5A4E]">Phù hợp với nhiều nhóm đối tượng khác nhau</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {targets.map((target) => (
              <div
                key={target.type}
                className="bg-white rounded-2xl p-5 border border-[#D9CABC] text-center"
              >
                <span className="text-3xl block mb-3">{target.icon}</span>
                <h3 className="font-semibold text-[#1A0F08] mb-1.5">{target.title}</h3>
                <p className="text-xs text-[#6B5A4E] mb-3 leading-relaxed">{target.description}</p>
                <div className="inline-block badge badge-amber text-xs">{target.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Các gói An Nhiên</h2>
            <p className="text-[#EDE4D8]/60">Chọn gói phù hợp với nhu cầu của bạn</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 border relative ${
                  pkg.highlight
                    ? 'border-[#E8A84C] bg-[#E8A84C]/10 ring-1 ring-[#E8A84C]/30'
                    : 'border-[#E8A84C]/15 bg-[#3D1A0A]/40'
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="badge badge-amber text-xs px-3">Phổ biến nhất</span>
                  </div>
                )}
                <h3 className="font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-xs text-[#EDE4D8]/60 mb-4 leading-relaxed">{pkg.description}</p>

                <ul className="space-y-2 mb-5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle size={13} className="text-[#E8A84C] mt-0.5 shrink-0" />
                      <span className="text-xs text-[#EDE4D8]/70">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-[#E8A84C]/10 pt-4">
                  <p className="text-xs text-[#EDE4D8]/40 mb-1">Phù hợp cho</p>
                  {pkg.suitableFor.slice(0, 2).map((s) => (
                    <div key={s} className="text-xs text-[#EDE4D8]/60">· {s}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold transition-all"
            >
              Nhận tư vấn gói phù hợp <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">Câu hỏi thường gặp</h2>
            <p className="text-[#6B5A4E]">Giải đáp nhanh về chương trình An Nhiên</p>
          </div>
          <FAQAccordion items={faq} />
        </div>
      </section>
    </>
  )
}
