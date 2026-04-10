import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
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
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link href="/chinh-sach" className="inline-flex items-center gap-2 text-[#EDE4D8]/60 hover:text-[#E8A84C] text-sm mb-6 transition-colors">
            <ArrowLeft size={14} /> Thư viện chính sách
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">{policy.title}</h1>
          <p className="text-[#EDE4D8]/60 text-sm">Hiệu lực từ: {policy.effectiveDate}</p>
        </div>
      </section>

      <section className="py-10 bg-[#FDF6ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">

          {/* Summary box */}
          <div className="bg-[#E8A84C]/10 border border-[#E8A84C]/30 rounded-2xl p-6">
            <h2 className="font-bold text-[#6B2D0A] mb-2 flex items-center gap-2">
              <AlertCircle size={16} /> Tóm tắt nhanh
            </h2>
            <p className="text-[#1A0F08] leading-relaxed">{policy.summary}</p>
          </div>

          {/* Suitable for */}
          <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
            <h2 className="font-bold text-[#1A0F08] mb-4 flex items-center gap-2">
              <Users size={16} /> Ai phù hợp?
            </h2>
            <div className="flex flex-wrap gap-2">
              {policy.suitableFor.map((s) => (
                <span key={s} className="badge badge-amber px-3 py-1.5 text-sm">{s}</span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
            <div className="px-6 py-4 border-b border-[#F5EDE0]">
              <h2 className="font-bold text-[#1A0F08]">✨ Quyền lợi & Ưu đãi</h2>
            </div>
            <div className="table-responsive">
              <table className="w-full text-sm">
                <thead className="bg-[#F5EDE0]">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B5A4E]">Hạng mục</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B5A4E]">Giá trị</th>
                    <th className="text-left px-6 py-3 text-xs font-semibold text-[#6B5A4E]">Chi tiết</th>
                  </tr>
                </thead>
                <tbody>
                  {policy.benefits.map((b, i) => (
                    <tr key={i} className="border-t border-[#F5EDE0]">
                      <td className="px-6 py-3 font-medium text-[#1A0F08]">{b.title}</td>
                      <td className="px-6 py-3">
                        <span className="badge badge-amber">{b.value}</span>
                      </td>
                      <td className="px-6 py-3 text-[#6B5A4E] text-xs">{b.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Conditions */}
          <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
            <h2 className="font-bold text-[#1A0F08] mb-4">📋 Điều kiện áp dụng</h2>
            <ul className="space-y-3">
              {policy.conditions.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={14} className="text-[#C07A2B] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#6B5A4E]">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Example */}
          {policy.example && (
            <div className="bg-[#166534]/5 border border-[#166534]/20 rounded-2xl p-6">
              <h2 className="font-bold text-[#1A0F08] mb-3">💡 Ví dụ minh họa</h2>
              <p className="text-sm text-[#1A0F08] leading-relaxed bg-white rounded-xl p-4 border border-[#166534]/10">
                {policy.example}
              </p>
            </div>
          )}

          {/* FAQ */}
          {policy.faq && policy.faq.length > 0 && (
            <div>
              <h2 className="font-bold text-[#1A0F08] mb-4">❓ Câu hỏi thường gặp</h2>
              <FAQAccordion items={policy.faq} />
            </div>
          )}

          {/* CTA */}
          <div className="bg-[#1C0F07] rounded-2xl p-6 text-center">
            <p className="text-[#EDE4D8]/70 text-sm mb-4">Cần tư vấn về chính sách này?</p>
            <Link
              href="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
            >
              Liên hệ tư vấn ngay
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
