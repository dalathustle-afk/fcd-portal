import type { Metadata } from 'next'
import Link from 'next/link'
import { qualitySteps, scaPrimaryDefects, scaGrades, scaExplained } from '@/data/quality-process'

export const metadata: Metadata = {
  title: 'Quy trình chất lượng FCD',
  description:
    '10 bước kiểm soát cà phê đặc sản chất lượng cao của FCD — từ vùng nguyên liệu đến ly cà phê. 6 loại hạt lỗi SCA và hệ thống phân loại 5 cấp.',
}

const categoryColors = {
  origin: 'bg-green-100 text-green-800',
  processing: 'bg-blue-100 text-blue-800',
  sorting: 'bg-amber-100 text-amber-800',
  roasting: 'bg-red-100 text-red-800',
  packaging: 'bg-purple-100 text-purple-800',
}
const categoryLabels = {
  origin: 'Vùng trồng',
  processing: 'Chế biến',
  sorting: 'Phân loại',
  roasting: 'Rang',
  packaging: 'Đóng gói',
}

const gradeColors = {
  specialty: 'bg-amber-500',
  good: 'bg-green-500',
  acceptable: 'bg-blue-400',
  risk: 'bg-orange-500',
  warning: 'bg-red-600',
}

export default function QuyTrinhChatLuongPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-10 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">⚙️ Quy trình</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Quy trình chất lượng FCD
          </h1>
          <p className="text-[#EDE4D8]/60 max-w-xl">
            Hệ sinh thái khép kín từ nông trại đến ly cà phê — 10 bước kiểm soát theo tiêu chuẩn SCA
          </p>
        </div>
      </section>

      {/* SCA Context */}
      <section className="py-12 bg-[#FDF6ED]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-[#D9CABC] p-8">
            <div className="flex items-start gap-5">
              <div className="text-4xl font-black text-[#6B2D0A] shrink-0">SCA</div>
              <div>
                <h2 className="font-bold text-[#1A0F08] text-xl mb-1">{scaExplained.fullName}</h2>
                <p className="text-[#6B5A4E] leading-relaxed mb-3">{scaExplained.description}</p>
                <div className="bg-[#FDF6ED] rounded-xl p-4 border-l-4 border-[#C07A2B]">
                  <p className="text-sm text-[#6B2D0A] font-medium leading-relaxed">{scaExplained.significance}</p>
                </div>
                <p className="text-sm text-[#6B5A4E] mt-3 leading-relaxed">{scaExplained.fcdCompliance}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 Steps */}
      <section className="py-16 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A0F08] mb-2">
              10 Bước Kiểm Soát Chất Lượng
            </h2>
            <p className="text-[#6B5A4E]">Mỗi bước đều có chứng minh kỹ thuật và bảo chứng độc lập</p>
          </div>

          {/* Category filter visual */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {(Object.entries(categoryLabels) as [keyof typeof categoryLabels, string][]).map(([cat, label]) => (
              <span key={cat} className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[cat]}`}>
                {label}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            {qualitySteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-[#D9CABC] p-6 flex gap-5 items-start">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-[#6B2D0A] flex items-center justify-center text-white font-bold text-lg shrink-0">
                    {step.step}
                  </div>
                  {step.step < qualitySteps.length && (
                    <div className="w-0.5 h-4 bg-[#D9CABC]" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-[#1A0F08]">
                      {step.icon} {step.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[step.category]}`}>
                        {categoryLabels[step.category]}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B5A4E] leading-relaxed mb-2">{step.description}</p>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C07A2B]" />
                    <span className="text-xs text-[#C07A2B] font-medium">{step.proof}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCA Grading System */}
      <section className="py-16 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge badge-amber mb-4 inline-flex">📊 Phân loại SCA</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              5 Cấp độ chất lượng SCA
            </h2>
            <p className="text-[#EDE4D8]/60 max-w-xl mx-auto">
              Bạn đang uống cà phê loại nào? Hầu hết cà phê vỉa hè Việt Nam nằm ở cấp 4-5.
            </p>
          </div>
          <div className="space-y-3 max-w-3xl mx-auto">
            {scaGrades.map((grade) => (
              <div key={grade.grade} className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${gradeColors[grade.status]} flex items-center justify-center text-white font-bold shrink-0`}>
                  {grade.grade}
                </div>
                <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-white text-sm">{grade.label}</span>
                    {grade.status === 'specialty' && (
                      <span className="text-xs bg-[#C07A2B] text-[#1C0F07] px-2 py-0.5 rounded-full font-bold">FCD TARGET</span>
                    )}
                  </div>
                  <p className="text-xs text-[#EDE4D8]/60">{grade.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 SCA Primary Defects */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge badge-amber mb-4 inline-flex">🔍 Hạt lỗi</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1A0F08] mb-2">
              6 Loại Hạt Lỗi Sơ Cấp SCA
            </h2>
            <p className="text-[#6B5A4E] max-w-xl mx-auto">
              FCD loại bỏ 100% 6 loại hạt lỗi này bằng máy quang học Nhật Bản (Bước 7)
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {scaPrimaryDefects.map((defect) => (
              <div key={defect.id} className="bg-white rounded-2xl border border-[#D9CABC] p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="font-semibold text-[#1A0F08]">{defect.name}</div>
                    <div className="text-xs text-[#6B5A4E] font-mono">{defect.nameEn}</div>
                  </div>
                  {defect.health && (
                    <span className="text-xs bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded-full shrink-0">
                      ⚠️ Ảnh hưởng sức khỏe
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#6B5A4E] leading-relaxed">{defect.why}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 bg-[#166534]/5 border border-[#166534]/20 rounded-2xl p-5 text-center">
            <p className="text-sm text-[#166534] font-semibold">
              ✅ FCD loại bỏ 100% tất cả 6 loại hạt lỗi sơ cấp này trước khi rang
            </p>
            <p className="text-xs text-[#6B5A4E] mt-1">
              Sử dụng máy quang học Nhật Bản — bước 7 trong quy trình 10 bước kiểm soát
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1C0F07]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl font-bold text-white mb-3">
            Muốn tìm hiểu thêm về chất lượng FCD?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mt-6">
            <Link
              href="/chung-nhan"
              className="px-6 py-3 rounded-xl bg-[#C07A2B] text-[#1C0F07] font-semibold hover:bg-[#E8A84C] transition-all text-sm"
            >
              Xem giấy chứng nhận
            </Link>
            <Link
              href="/an-nhien"
              className="px-6 py-3 rounded-xl border border-[#EDE4D8]/30 text-[#EDE4D8] hover:border-[#E8A84C] hover:text-[#E8A84C] transition-all text-sm"
            >
              Tìm hiểu An Nhiên
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
