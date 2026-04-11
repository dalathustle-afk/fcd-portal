import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { qualitySteps, scaPrimaryDefects, scaGrades, scaExplained } from '@/data/quality-process'

export const metadata: Metadata = {
  title: 'Quy trình chất lượng FCD',
  description: '10 bước kiểm soát cà phê đặc sản của FCD — từ vùng nguyên liệu đến ly cà phê. Tiêu chuẩn SCA.',
}

const categoryColors: Record<string, string> = {
  origin: 'bg-[#EDF3EC] text-[#2D4A2D] border-[#6B8C6B]/30',
  processing: 'bg-blue-50 text-blue-700 border-blue-200',
  sorting: 'bg-amber-50 text-amber-700 border-amber-200',
  roasting: 'bg-red-50 text-red-700 border-red-200',
  packaging: 'bg-purple-50 text-purple-700 border-purple-200',
}
const categoryLabels: Record<string, string> = {
  origin: 'Vùng trồng', processing: 'Chế biến',
  sorting: 'Phân loại', roasting: 'Rang', packaging: 'Đóng gói',
}
const gradeColors: Record<string, string> = {
  specialty: 'bg-[#B87333]', good: 'bg-[#4A6741]',
  acceptable: 'bg-blue-500', risk: 'bg-orange-500', warning: 'bg-red-600',
}

export default function QuyTrinhChatLuongPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Quy trình chất lượng FCD" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/92 via-[#1A120A]/80 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-sage mb-5 inline-flex">⚙️ Quy trình</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">
            Quy trình chất lượng FCD
          </h1>
          <p className="text-white/65 max-w-lg mx-auto text-sm leading-relaxed text-center">
            Hệ sinh thái khép kín từ nông trại đến ly cà phê — 10 bước kiểm soát theo tiêu chuẩn SCA
          </p>
        </div>
      </section>

      {/* ══ SCA CONTEXT ═══════════════════════════════════════════ */}
      <section className="py-16 section-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="card-nature p-8">
            <div className="flex items-start gap-5">
              <div className="font-display text-5xl italic text-[#7C3D18] shrink-0">SCA</div>
              <div>
                <h2 className="font-semibold text-[#1A120A] text-lg mb-2">{scaExplained.fullName}</h2>
                <p className="text-[#6B5A4E] leading-relaxed mb-4 text-sm">{scaExplained.description}</p>
                <div className="bg-[#FAF6F0] rounded-xl p-4 border-l-4 border-[#B87333]">
                  <p className="text-sm text-[#7C3D18] font-medium leading-relaxed">{scaExplained.significance}</p>
                </div>
                <p className="text-xs text-[#6B5A4E] mt-4 leading-relaxed">{scaExplained.fcdCompliance}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10 STEPS ══════════════════════════════════════════════ */}
      <section className="py-20 section-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex">🔬 Kiểm soát</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">10 Bước Kiểm Soát Chất Lượng</h2>
            <p className="text-[#6B5A4E] text-sm">Mỗi bước đều có chứng minh kỹ thuật và bảo chứng độc lập</p>
          </div>

          {/* Category legend */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {(Object.entries(categoryLabels)).map(([cat, label]) => (
              <span key={cat} className={`text-xs font-medium px-3 py-1 rounded-full border ${categoryColors[cat]}`}>
                {label}
              </span>
            ))}
          </div>

          <div className="space-y-3">
            {qualitySteps.map((step, i) => (
              <div key={step.step} className="bg-white rounded-2xl border border-[#D9CABC] p-5 flex gap-4 items-start card-nature"
                style={{ animationDelay: `${i * 0.06}s` }}>
                <div className={`step-circle shrink-0 ${step.step <= 5 ? '' : 'step-circle-sage'}`}>
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-semibold text-[#1A120A] text-sm">{step.icon} {step.title}</h3>
                    <span className={`text-[10px] font-medium px-2.5 py-0.5 rounded-full border ${categoryColors[step.category]}`}>
                      {categoryLabels[step.category]}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5A4E] leading-relaxed mb-2">{step.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="nature-dot" />
                    <span className="text-[10px] text-[#B87333] font-medium">{step.proof}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SCA GRADE ═════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê Arabica quả chín" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#1A120A]/93" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex">📊 Phân loại SCA</span>
            <h2 className="font-display text-3xl text-white mb-3">5 Cấp độ chất lượng SCA</h2>
            <p className="text-white/55 text-sm max-w-md mx-auto text-center">Bạn đang uống cà phê loại nào? Hầu hết cà phê vỉa hè Việt Nam nằm ở cấp 4–5.</p>
          </div>
          <div className="space-y-3">
            {scaGrades.map((grade) => (
              <div key={grade.grade} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl ${gradeColors[grade.status]} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {grade.grade}
                </div>
                <div className="flex-1 glass-dark rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white text-sm">{grade.label}</span>
                    {grade.status === 'specialty' && (
                      <span className="text-[9px] bg-[#B87333] text-white px-2 py-0.5 rounded-full font-bold">FCD TARGET</span>
                    )}
                  </div>
                  <p className="text-xs text-white/50">{grade.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6 DEFECTS ═════════════════════════════════════════════ */}
      <section className="py-20 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-red mb-4 inline-flex">🔍 Hạt lỗi</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">6 Loại Hạt Lỗi Sơ Cấp SCA</h2>
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto text-center">FCD loại bỏ 100% 6 loại hạt lỗi này bằng máy quang học Nhật Bản (Bước 7)</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scaPrimaryDefects.map((defect, i) => (
              <div key={defect.id} className={`card-nature p-5 animate-fade-in delay-${(i+1)*100}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-[#1A120A] text-sm">{defect.name}</div>
                    <div className="text-[10px] text-[#9C8472] font-mono mt-0.5">{defect.nameEn}</div>
                  </div>
                  {defect.health && (
                    <span className="text-[9px] bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded-full shrink-0">
                      ⚠️ Sức khỏe
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#6B5A4E] leading-relaxed">{defect.why}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-[#EDF3EC] border border-[#6B8C6B]/30 rounded-2xl p-5 text-center">
            <p className="text-sm font-semibold text-[#2D4A2D]">✅ FCD loại bỏ 100% tất cả 6 loại hạt lỗi sơ cấp này trước khi rang</p>
            <p className="text-xs text-[#6B5A4E] mt-1">Sử dụng máy quang học Nhật Bản — bước 7 trong quy trình 10 bước kiểm soát</p>
          </div>
        </div>
      </section>

      {/* ══ CTA ═══════════════════════════════════════════════════ */}
      <section className="py-14 bg-[#1A120A]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl text-white italic mb-6">Muốn tìm hiểu thêm về chất lượng FCD?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/chung-nhan" className="px-7 py-3.5 rounded-full bg-[#B87333] text-white font-semibold hover:bg-[#D4914A] transition-all text-sm">
              Xem giấy chứng nhận
            </Link>
            <Link href="/an-nhien" className="px-7 py-3.5 rounded-full glass-dark text-white/80 hover:text-white transition-all text-sm">
              Tìm hiểu An Nhiên
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
