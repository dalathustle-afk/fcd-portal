import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { policies } from '@/content/policies'

export const metadata: Metadata = {
  title: 'Thư viện chính sách FCD',
  description: 'Tra cứu chính sách bán hàng, chiết khấu, hỗ trợ sản phẩm, thiết bị và đại sứ CTV của FCD.',
}

const categoryMeta: Record<string, { label: string; icon: string; color: string }> = {
  'ban-hang':     { label: 'Bán hàng cơ bản',     icon: '🛒', color: '#1C0F07' },
  'chiet-khau':   { label: 'Chiết khấu sản lượng',  icon: '📉', color: '#6B2D0A' },
  'combo-an-nhien': { label: 'Combo An Nhiên',      icon: '✨', color: '#C07A2B' },
  'ho-tro-san-pham': { label: 'Hỗ trợ sản phẩm',  icon: '🔄', color: '#166534' },
  'van-chuyen':   { label: 'Vận chuyển & Logistics',icon: '🚚', color: '#1E40AF' },
  'tang-may':     { label: 'Hỗ trợ thiết bị',       icon: '☕', color: '#92400E' },
  'dai-su-ctv':   { label: 'Đại sứ & CTV',          icon: '🌟', color: '#7C2D12' },
}

export default function ChinhSachPage() {
  const categories = Array.from(new Set(policies.map((p) => p.category)))

  return (
    <>
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">📜 Tra cứu</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Thư viện Chính sách</h1>
          <p className="text-[#EDE4D8]/60 max-w-lg">
            Tất cả chính sách được tổ chức rõ ràng — tìm nhanh theo nhóm hoặc đọc chi tiết từng chính sách.
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Category overview */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            {categories.map((cat) => {
              const meta = categoryMeta[cat]
              const count = policies.filter((p) => p.category === cat).length
              return (
                <a
                  key={cat}
                  href={`#cat-${cat}`}
                  className="bg-white rounded-xl border border-[#D9CABC] p-4 card-hover group"
                >
                  <span className="text-2xl block mb-2">{meta?.icon ?? '📄'}</span>
                  <div className="font-semibold text-[#1A0F08] text-sm mb-1 group-hover:text-[#6B2D0A] transition-colors">
                    {meta?.label ?? cat}
                  </div>
                  <div className="text-xs text-[#6B5A4E]">{count} chính sách</div>
                </a>
              )
            })}
          </div>

          {/* Policies by category */}
          {categories.map((cat) => {
            const meta = categoryMeta[cat]
            const catPolicies = policies.filter((p) => p.category === cat)
            return (
              <section key={cat} id={`cat-${cat}`} className="mb-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-2xl">{meta?.icon ?? '📄'}</span>
                  <h2 className="text-xl font-bold text-[#1A0F08]">{meta?.label ?? cat}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catPolicies.map((policy) => (
                    <Link
                      key={policy.id}
                      href={`/chinh-sach/${policy.slug}`}
                      className="bg-white rounded-2xl border border-[#D9CABC] p-6 card-hover group"
                    >
                      {policy.featured && (
                        <span className="badge badge-amber text-xs mb-3 inline-flex">Nổi bật</span>
                      )}
                      <h3 className="font-semibold text-[#1A0F08] mb-2 group-hover:text-[#6B2D0A] transition-colors leading-snug">
                        {policy.title}
                      </h3>
                      <p className="text-xs text-[#6B5A4E] mb-4 leading-relaxed line-clamp-3">
                        {policy.summary}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {policy.suitableFor.slice(0, 2).map((s) => (
                          <span key={s} className="badge badge-amber text-xs">{s}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-[#F5EDE0]">
                        <span className="text-xs text-[#6B5A4E]">HH từ {policy.effectiveDate}</span>
                        <span className="text-sm font-medium text-[#6B2D0A] group-hover:text-[#C07A2B] flex items-center gap-1 transition-colors">
                          Xem chi tiết <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </section>
    </>
  )
}
