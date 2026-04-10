import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { certifications, certTypeLabels, type CertType } from '@/data/certifications'

export const metadata: Metadata = {
  title: 'Chứng Nhận FCD',
  description:
    'Toàn bộ giấy chứng nhận, kết quả kiểm nghiệm và tài liệu pháp lý của thương hiệu cà phê FCD — FROMCAUDAT. Minh bạch, có thể kiểm chứng.',
}

const typeColors: Record<CertType, string> = {
  'food-safety': 'bg-green-50 text-green-800 border-green-200',
  'quality-system': 'bg-blue-50 text-blue-800 border-blue-200',
  'product-test': 'bg-amber-50 text-amber-800 border-amber-200',
  'brand': 'bg-purple-50 text-purple-800 border-purple-200',
  'registration': 'bg-gray-50 text-gray-800 border-gray-200',
}

export default function ChungNhanPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">🏅 Chứng nhận</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Hệ thống Chứng nhận FCD
          </h1>
          <p className="text-[#EDE4D8]/60 max-w-xl">
            Chất lượng không tự công bố — có thể kiểm chứng qua {certifications.length} giấy chứng nhận và kết quả kiểm nghiệm độc lập.
          </p>
        </div>
      </section>

      {/* Type legend */}
      <section className="py-6 bg-[#FDF6ED] border-b border-[#D9CABC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-2">
            {(Object.entries(certTypeLabels) as [CertType, string][]).map(([type, label]) => (
              <span key={type} className={`text-xs font-medium px-3 py-1 rounded-full border ${typeColors[type]}`}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate gallery */}
      <section className="py-12 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden card-hover group"
              >
                {/* Certificate image */}
                <div className="relative aspect-[3/4] bg-[#F5EDE0] overflow-hidden">
                  <Image
                    src={cert.imagePath}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                {/* Metadata */}
                <div className="p-4">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${typeColors[cert.type]} mb-2 inline-block`}>
                    {certTypeLabels[cert.type]}
                  </span>
                  <h3 className="font-semibold text-[#1A0F08] text-sm leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#6B5A4E] line-clamp-2">{cert.scope}</p>
                  {cert.issuedBy && (
                    <p className="text-xs text-[#C07A2B] font-medium mt-1.5">
                      {cert.issuedBy}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-10 bg-[#E8A84C]/10 border border-[#E8A84C]/30 rounded-2xl p-6">
            <p className="text-sm text-[#6B5A4E] leading-relaxed">
              <strong className="text-[#6B2D0A]">Lưu ý:</strong> Một số giấy chứng nhận đang trong quá trình cập nhật thông tin metadata. Để xem bản gốc hoặc yêu cầu tài liệu pháp lý chính thức, vui lòng{' '}
              <Link href="/lien-he" className="text-[#C07A2B] underline hover:text-[#6B2D0A]">
                liên hệ FCD trực tiếp
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1C0F07]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Cần tài liệu pháp lý chính thức?
          </h2>
          <p className="text-[#EDE4D8]/60 mb-6 text-sm">
            FCD cung cấp file gốc của các giấy chứng nhận theo yêu cầu của đối tác doanh nghiệp.
          </p>
          <Link
            href="/lien-he"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
          >
            Yêu cầu tài liệu
          </Link>
        </div>
      </section>
    </>
  )
}
