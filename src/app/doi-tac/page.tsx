import type { Metadata } from 'next'
import { partners } from '@/data/partners'

export const metadata: Metadata = {
  title: 'Đối tác doanh nghiệp — FCD',
  description: 'Danh sách doanh nghiệp và tổ chức đang sử dụng cà phê FCD.',
}

export default function DoiTacPage() {
  return (
    <>
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">🤝 Đối tác</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Đối tác &amp; Doanh nghiệp đồng hành
          </h1>
          <p className="text-[#EDE4D8]/60 max-w-lg">
            Các doanh nghiệp và tổ chức đang tin dùng cà phê FCD trong môi trường làm việc.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">

          {/* Partner list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-2xl border border-[#D9CABC] p-6"
              >
                <h3 className="font-semibold text-[#1A0F08] mb-1 leading-snug">{partner.name}</h3>
                {partner.category && (
                  <p className="text-xs text-[#6B5A4E] mb-1">{partner.category}</p>
                )}
                {partner.city && (
                  <p className="text-xs text-[#6B5A4E]">📍 {partner.city}</p>
                )}
              </div>
            ))}
          </div>

          {/* Note về danh sách */}
          <div className="bg-[#E8A84C]/10 border border-[#E8A84C]/30 rounded-xl p-5 text-sm text-[#6B5A4E]">
            ⓘ Danh sách đối tác cập nhật từ dữ liệu xác minh. Nếu doanh nghiệp của bạn chưa xuất hiện,
            vui lòng{' '}
            <a href="/lien-he" className="text-[#C07A2B] underline hover:text-[#6B2D0A]">
              liên hệ FCD
            </a>{' '}
            để cập nhật.
          </div>

          {/* CTA */}
          <div className="bg-[#1C0F07] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Trở thành đối tác FCD</h3>
            <p className="text-[#EDE4D8]/60 mb-5 text-sm max-w-md mx-auto">
              Bạn đang tìm giải pháp cà phê chất lượng cho doanh nghiệp?
              Liên hệ để được tư vấn gói phù hợp.
            </p>
            <a
              href="/lien-he"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
            >
              Liên hệ hợp tác
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
