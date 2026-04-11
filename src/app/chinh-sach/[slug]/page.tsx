import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, Users, AlertCircle } from 'lucide-react'
import { policies } from '@/content/policies'
import { FAQAccordion } from '@/components/ui/FAQAccordion'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return policies.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const policy = policies.find((p) => p.slug === slug)
  if (!policy) return {}
  return { title: policy.title, description: policy.summary }
}

export default async function ChinhSachChiTietPage({ params }: Props) {
  const { slug } = await params
  const policy = policies.find((p) => p.slug === slug)
  if (!policy) notFound()

  return (
    <>
      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-14 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Chính sách FCD" fill className="object-cover object-top" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/92 via-[#2B1810]/82 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <Link href="/chinh-sach" className="inline-flex items-center gap-2 text-white/60 hover:text-[#E3A558] text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Thư viện chính sách
          </Link>
          <h1 className="font-display text-3xl sm:text-4xl text-white italic mb-3 leading-snug">{policy!.title}</h1>
          <p className="text-white/78 text-sm">Hiệu lực từ: <strong className="text-[#E3A558]">{policy!.effectiveDate}</strong></p>
        </div>
      </section>

      {/* ══ CONTENT ══════════════════════════════════════════════════ */}
      <section className="py-12 section-cream texture-leaf">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">

          {/* Summary box */}
          <div className="bg-[#FDF3E8] border border-[#B87333]/25 rounded-2xl p-6">
            <h2 className="font-semibold text-[#7C3D18] mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
              <AlertCircle size={15} /> Tóm tắt nhanh
            </h2>
            <p className="text-[#1A120A] leading-relaxed text-sm">{policy!.summary}</p>
          </div>

          {/* Suitable for */}
          <div className="card-nature p-6">
            <h2 className="font-semibold text-[#1A120A] mb-4 flex items-center gap-2 text-sm">
              <Users size={15} className="text-[#4A6741]" /> Ai phù hợp?
            </h2>
            <div className="flex flex-wrap gap-2">
              {policy!.suitableFor.map((s) => (
                <span key={s} className="badge badge-amber px-3 py-1.5 text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* Benefits table */}
          <div className="card-nature overflow-hidden">
            <div className="px-6 py-4 border-b border-[#F5EDE0] bg-[#FAF6F0]">
              <h2 className="font-semibold text-[#1A120A] text-sm">✨ Quyền lợi &amp; Ưu đãi</h2>
            </div>
            <div className="table-responsive">
              <table className="w-full text-sm">
                <thead className="bg-[#F5EDE0]">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B5A4E] uppercase tracking-wide">Hạng mục</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B5A4E] uppercase tracking-wide">Giá trị</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B5A4E] uppercase tracking-wide">Chi tiết</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5EDE0]">
                  {policy!.benefits.map((b, i) => (
                    <tr key={i} className="hover:bg-[#FDF8F3] transition-colors">
                      <td className="px-6 py-3.5 font-medium text-[#1A120A] text-sm">{b.title}</td>
                      <td className="px-6 py-3.5">
                        <span className="badge badge-amber">{b.value}</span>
                      </td>
                      <td className="px-6 py-3.5 text-[#6B5A4E] text-xs leading-relaxed">{b.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Conditions */}
          <div className="card-nature p-6">
            <h2 className="font-semibold text-[#1A120A] mb-4 text-sm">📋 Điều kiện áp dụng</h2>
            <ul className="space-y-3">
              {policy!.conditions.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={14} className="text-[#B87333] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#6B5A4E] leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Example */}
          {policy!.example && (
            <div className="bg-[#EDF3EC] border border-[#6B8C6B]/30 rounded-2xl p-6">
              <h2 className="font-semibold text-[#2D4A2D] mb-3 text-sm">💡 Ví dụ minh họa</h2>
              <p className="text-sm text-[#1A120A] leading-relaxed bg-white rounded-xl p-4 border border-[#6B8C6B]/15">
                {policy!.example}
              </p>
            </div>
          )}

          {/* FAQ */}
          {policy!.faq && policy!.faq.length > 0 && (
            <div>
              <h2 className="font-semibold text-[#1A120A] mb-4 text-sm">❓ Câu hỏi thường gặp</h2>
              <FAQAccordion items={policy!.faq} />
            </div>
          )}

          {/* CTA */}
          <div className="bg-[#2B1810] rounded-2xl p-6 text-center">
            <p className="text-white/65 text-sm mb-4">Cần tư vấn về chính sách này?</p>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all"
            >
              Liên hệ tư vấn ngay
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
