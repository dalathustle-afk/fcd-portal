import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ZoomIn } from 'lucide-react'
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Vườn cà phê Cầu Đất" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/92 via-[#1A120A]/80 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-amber mb-5 inline-flex">🏅 Chứng nhận</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Hệ thống Chứng nhận FCD
          </h1>
          <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed text-center">
            Chất lượng không tự công bố — có thể kiểm chứng qua {certifications.length} giấy chứng nhận và kết quả kiểm nghiệm độc lập.
          </p>
        </div>
      </section>

      {/* Type legend */}
      <section className="py-5 section-cream border-b border-[#D9CABC]">
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

      {/* Gallery */}
      <section className="py-16 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <div key={cert.id} className="card-nature overflow-hidden group cursor-zoom-in" style={{ animationDelay: `${(i%8)*0.05}s` }}>
                <div className="relative aspect-[3/4] bg-[#F5EDE0] overflow-hidden">
                  <Image
                    src={cert.imagePath}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-2.5 shadow">
                      <ZoomIn size={16} className="text-[#1A120A]" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${typeColors[cert.type]} mb-2 inline-block`}>
                    {certTypeLabels[cert.type]}
                  </span>
                  <h3 className="font-semibold text-[#1A120A] text-xs leading-snug mb-1">{cert.title}</h3>
                  <p className="text-[10px] text-[#6B5A4E] line-clamp-2">{cert.scope}</p>
                  {cert.issuedBy && <p className="text-[10px] text-[#B87333] font-medium mt-1.5">{cert.issuedBy}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-[#FAF6F0] border border-[#D9CABC] rounded-2xl p-5">
            <p className="text-sm text-[#6B5A4E] leading-relaxed">
              <strong className="text-[#7C3D18]">Lưu ý:</strong> Một số giấy chứng nhận đang trong quá trình cập nhật thông tin metadata. Để xem bản gốc, vui lòng{' '}
              <Link href="/lien-he" className="text-[#B87333] underline hover:text-[#7C3D18]">liên hệ FCD trực tiếp</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê arabica" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1A120A]/90" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl text-white mb-3">Cần tài liệu pháp lý chính thức?</h2>
          <p className="text-white/55 mb-6 text-sm text-center">FCD cung cấp file gốc của các giấy chứng nhận theo yêu cầu của đối tác doanh nghiệp.</p>
          <Link href="/lien-he" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all">
            Yêu cầu tài liệu
          </Link>
        </div>
      </section>
    </>
  )
}
