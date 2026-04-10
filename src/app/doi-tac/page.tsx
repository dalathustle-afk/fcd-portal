import type { Metadata } from 'next'
import { partners } from '@/content/partners'
import { PartnerGrid } from '@/components/partners/PartnerGrid'

export const metadata: Metadata = {
  title: 'Đối tác đồng hành FCD',
  description: 'Danh sách 25+ doanh nghiệp và tổ chức đang đồng hành cùng FCD trên toàn quốc.',
}

const industries = Array.from(new Set(partners.map((p) => p.industry)))

export default function DoiTacPage() {
  const platinumPartners = partners.filter((p) => p.tier === 'platinum')
  const goldPartners = partners.filter((p) => p.tier === 'gold')
  const standardPartners = partners.filter((p) => p.tier === 'standard')

  return (
    <>
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">🤝 Đối tác</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Đối tác & Doanh nghiệp đồng hành
          </h1>
          <p className="text-[#EDE4D8]/60 max-w-lg">
            {partners.length}+ doanh nghiệp và tổ chức đang tin tưởng đồng hành cùng FCD — từ F&B đến y tế, giáo dục và công nghệ.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14">

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: `${partners.length}+`, label: 'Đối tác toàn quốc' },
              { value: `${platinumPartners.length}`, label: 'Đối tác Platinum' },
              { value: `${industries.length}+`, label: 'Ngành nghề' },
              { value: '3+', label: 'Vùng địa lý' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-[#D9CABC] p-5 text-center">
                <div className="text-2xl font-bold text-[#6B2D0A] mb-1">{stat.value}</div>
                <div className="text-xs text-[#6B5A4E]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Platinum */}
          {platinumPartners.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">⭐</span>
                <h2 className="text-xl font-bold text-[#1A0F08]">Đối tác Platinum</h2>
              </div>
              <PartnerGrid partners={platinumPartners} />
            </div>
          )}

          {/* Gold */}
          {goldPartners.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">🌟</span>
                <h2 className="text-xl font-bold text-[#1A0F08]">Đối tác Gold</h2>
              </div>
              <PartnerGrid partners={goldPartners} />
            </div>
          )}

          {/* Standard */}
          {standardPartners.length > 0 && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-lg">🤝</span>
                <h2 className="text-xl font-bold text-[#1A0F08]">Đối tác đồng hành</h2>
              </div>
              <PartnerGrid partners={standardPartners} />
            </div>
          )}

          {/* CTA */}
          <div className="bg-[#1C0F07] rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-2">Trở thành đối tác FCD</h3>
            <p className="text-[#EDE4D8]/60 mb-5 text-sm max-w-md mx-auto">
              Bạn đang tìm giải pháp cà phê chất lượng cho doanh nghiệp? Liên hệ để cùng xây dựng mối hợp tác bền vững.
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
