import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { anNhienData } from '@/data/an-nhien'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

export const metadata: Metadata = {
  title: 'Chương trình An Nhiên cùng FCD',
  description:
    'An Nhiên cùng FCD — cà phê đặc sản an toàn, minh bạch, nguyên bản. Tìm hiểu triết lý "An" & "Nhìn", 5 Không, 10 bước kiểm soát chất lượng và chi phí mỗi ly.',
}

export default function AnNhienPage() {
  const {
    heroTitle,
    heroSubtitle,
    heroDescription,
    meaningAn,
    meaningNhin,
    fiveNos,
    controlSteps,
    proofPoints,
    costPerCup,
    combo12kg,
    faqs,
  } = anNhienData

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-24 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-[#E8A84C] blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-amber mb-5 inline-flex mx-auto">✨ Chương trình giá trị</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {heroTitle}
          </h1>
          <p className="text-xl text-[#EDE4D8]/80 mb-4 font-medium">{heroSubtitle}</p>
          <p className="text-[#EDE4D8]/60 mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/lien-he"
              className="px-6 py-3.5 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
            >
              Liên hệ tư vấn An Nhiên
            </Link>
            <Link
              href="/bang-gia"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
            >
              Xem bảng giá niêm yết →
            </Link>
          </div>
        </div>
      </section>

      {/* ── AN & NHÌN ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">Ý nghĩa của &ldquo;An Nhiên&rdquo;</h2>
            <p className="text-[#6B5A4E]">Hai trụ cột cốt lõi trong triết lý FCD</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* AN */}
            <div className="bg-white rounded-2xl border border-[#D9CABC] p-7">
              <h3 className="text-xl font-bold text-[#1A0F08] mb-3">{meaningAn.title}</h3>
              <p className="text-[#6B5A4E] mb-5 leading-relaxed">{meaningAn.description}</p>
              {meaningAn.bullets && (
                <ul className="space-y-3">
                  {meaningAn.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-[#C07A2B] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#6B5A4E]">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* NHÌN */}
            <div className="bg-white rounded-2xl border border-[#D9CABC] p-7">
              <h3 className="text-xl font-bold text-[#1A0F08] mb-3">{meaningNhin.title}</h3>
              <p className="text-[#6B5A4E] mb-5 leading-relaxed">{meaningNhin.description}</p>
              {meaningNhin.bullets && (
                <ul className="space-y-3">
                  {meaningNhin.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-[#C07A2B] mt-0.5 shrink-0" />
                      <span className="text-sm text-[#6B5A4E]">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 KHÔNG ──────────────────────────────────────────────── */}
      <section className="py-16 bg-[#1C0F07]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">5 Cam kết &ldquo;Không&rdquo;</h2>
            <p className="text-[#EDE4D8]/60">Nền tảng chất lượng không thỏa hiệp</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {fiveNos.map((no, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#3D1A0A]/50 border border-[#E8A84C]/15 rounded-xl p-5"
              >
                <div className="w-8 h-8 rounded-full bg-[#C07A2B]/20 flex items-center justify-center shrink-0 text-[#E8A84C] font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-sm text-[#EDE4D8]/80 leading-relaxed">{no}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10 BƯỚC KIỂM SOÁT ─────────────────────────────────────── */}
      <section className="py-16 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">10 Bước kiểm soát chất lượng</h2>
            <p className="text-[#6B5A4E]">Từ vùng trồng đến tay người dùng</p>
          </div>
          <div className="space-y-3">
            {controlSteps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white border border-[#D9CABC] rounded-xl p-4"
              >
                <div className="w-8 h-8 rounded-lg bg-[#6B2D0A] flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-sm text-[#1A0F08] leading-relaxed pt-1">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF POINTS ──────────────────────────────────────────── */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">Tiêu chuẩn & Kiểm định</h2>
            <p className="text-[#6B5A4E]">Chất lượng được xác nhận, không chỉ tự công bố</p>
          </div>
          <div className="bg-white rounded-2xl border border-[#D9CABC] p-7">
            <ul className="space-y-4">
              {proofPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#C07A2B] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#6B5A4E] leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CHI PHÍ / LY ──────────────────────────────────────────── */}
      <section className="py-16 bg-[#1C0F07]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Chi phí mỗi ly cà phê</h2>
            <p className="text-[#EDE4D8]/60">Tính theo liều dùng chuẩn — ly 70ml và 140ml</p>
          </div>
          <div className="bg-[#3D1A0A]/40 rounded-2xl border border-[#E8A84C]/15 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="border-b border-[#E8A84C]/15">
                    <th className="text-left px-5 py-3.5 text-xs font-semibold text-[#E8A84C]">Mã / Gu</th>
                    <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#E8A84C]">Giá 1kg</th>
                    <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#E8A84C]">Chi phí ly 70ml</th>
                    <th className="text-right px-5 py-3.5 text-xs font-semibold text-[#E8A84C]">Chi phí ly 140ml</th>
                  </tr>
                </thead>
                <tbody>
                  {costPerCup.map((item) => (
                    <tr key={item.code} className="border-b border-[#E8A84C]/10 hover:bg-[#E8A84C]/5 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="font-medium text-[#EDE4D8]">{item.name}</div>
                      </td>
                      <td className="px-5 py-3.5 text-right text-[#EDE4D8]/70">
                        {item.pricePerKg.toLocaleString('vi-VN')}đ
                      </td>
                      <td className="px-5 py-3.5 text-right font-semibold text-[#E8A84C]">
                        {item.costPerCup70.toLocaleString('vi-VN')}đ
                      </td>
                      <td className="px-5 py-3.5 text-right text-[#EDE4D8]/70">
                        {item.costPerCup140.toLocaleString('vi-VN')}đ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3 text-xs text-[#EDE4D8]/40">
              ⓘ Chi phí tính theo liều dùng chuẩn từ tài liệu An Nhiên. Giá 1kg theo bảng giá niêm yết 10/02/2026.
            </div>
          </div>
        </div>
      </section>

      {/* ── COMBO 12KG ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-[#D9CABC] p-8">
            <h2 className="text-xl font-bold text-[#1A0F08] mb-3">{combo12kg.title}</h2>
            <p className="text-[#6B5A4E] mb-5 leading-relaxed">{combo12kg.description}</p>
            {combo12kg.bullets && (
              <ul className="space-y-3 mb-6">
                {combo12kg.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#C07A2B] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#6B5A4E]">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
            >
              Liên hệ để xác nhận điều kiện combo <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">Câu hỏi thường gặp</h2>
            <p className="text-[#6B5A4E]">Về chương trình An Nhiên và chất lượng sản phẩm FCD</p>
          </div>
          <FAQAccordion items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
        </div>
      </section>
    </>
  )
}
