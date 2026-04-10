import type { Metadata } from 'next'
import Link from 'next/link'
import {
  anMeaning,
  nhienMeaning,
  fiveNoes,
  tenSteps,
  proofPoints,
  costPerCup,
  anNhienCombo,
  barriersFaq,
} from '@/data/an-nhien'

export const metadata: Metadata = {
  title: 'An Nhiên Cùng FCD',
  description:
    'Chương trình An Nhiên — giải pháp cà phê đặc sản chất lượng cao cho văn phòng và doanh nghiệp. 5 Không, 10 bước kiểm soát, combo 12kg tặng kèm máy 20 bar.',
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function SectionHeader({ badge, title, subtitle }: { badge: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-10">
      <span className="badge badge-amber mb-4 inline-flex">{badge}</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-[#1A0F08] mb-2">{title}</h2>
      {subtitle && <p className="text-[#6B5A4E] max-w-xl mx-auto">{subtitle}</p>}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function AnNhienPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-amber mb-4 inline-flex mx-auto">✨ Giải pháp FCD</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            AN NHIÊN<br />
            <span className="text-[#E8A84C]">cùng FCD</span>
          </h1>
          <p className="text-[#EDE4D8]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Cà phê đặc sản chất lượng cao — minh bạch từ vùng trồng đến ly cà phê. An toàn, an tâm, và đúng nghĩa tự nhiên.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Link
              href="#combo"
              className="px-6 py-3 rounded-xl bg-[#C07A2B] text-[#1C0F07] font-semibold hover:bg-[#E8A84C] transition-all"
            >
              Xem Gói An Nhiên
            </Link>
            <Link
              href="/lien-he"
              className="px-6 py-3 rounded-xl border border-[#EDE4D8]/30 text-[#EDE4D8] hover:border-[#E8A84C] hover:text-[#E8A84C] transition-all"
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      {/* ── AN + NHIEN MEANING ─────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader badge="💡 Triết lý" title='"AN NHIÊN" là gì?' subtitle='Hai khía cạnh tạo nên giá trị cốt lõi của FCD' />
          <div className="grid md:grid-cols-2 gap-8">
            {/* AN */}
            <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
              <div className="h-2 gradient-brand" />
              <div className="p-8">
                <div className="text-5xl font-black text-[#6B2D0A] mb-2">AN</div>
                <div className="text-[#C07A2B] font-semibold mb-4">{anMeaning.subtitle}</div>
                <p className="text-[#6B5A4E] leading-relaxed mb-6">{anMeaning.description}</p>
                <div className="space-y-3">
                  {anMeaning.pillars.map((p) => (
                    <div key={p.id} className="bg-[#FDF6ED] rounded-xl p-4">
                      <div className="font-semibold text-[#1A0F08] mb-1">{p.title}</div>
                      <p className="text-sm text-[#6B5A4E]">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* NHIEN */}
            <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-green-700 to-green-500" />
              <div className="p-8">
                <div className="text-5xl font-black text-[#166534] mb-2">NHIÊN</div>
                <div className="text-[#15803D] font-semibold mb-4">{nhienMeaning.subtitle}</div>
                <p className="text-[#6B5A4E] leading-relaxed mb-6">{nhienMeaning.description}</p>
                <div className="space-y-3">
                  {nhienMeaning.pillars.map((p) => (
                    <div key={p.id} className="bg-[#F0FDF4] rounded-xl p-4">
                      <div className="font-semibold text-[#1A0F08] mb-1">{p.title}</div>
                      <p className="text-sm text-[#6B5A4E]">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 KHÔNG ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge badge-amber mb-4 inline-flex">🛡️ Cam kết</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Triết lý 5 Không</h2>
            <p className="text-[#EDE4D8]/60 max-w-xl mx-auto">
              FCD kiên định không dùng bất kỳ chất phụ gia nào — trả lại giá trị thực sự cho hạt cà phê
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fiveNoes.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center card-hover"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-[#E8A84C] font-bold text-sm mb-1">#{item.number}</div>
                <div className="font-semibold text-white text-sm mb-2">{item.title}</div>
                <p className="text-[#EDE4D8]/60 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10 BƯỚC ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="⚙️ Quy trình"
            title="10 Bước Kiểm Soát Chất Lượng"
            subtitle="Hệ sinh thái khép kín từ nông trại đến ly cà phê — mỗi bước đều có chứng minh"
          />
          <div className="space-y-3">
            {tenSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-2xl border border-[#D9CABC] p-5 flex gap-5 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#6B2D0A] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-[#1A0F08] mb-1">
                        {step.icon} {step.title}
                      </div>
                      <p className="text-sm text-[#6B5A4E] leading-relaxed">{step.description}</p>
                    </div>
                    <span className="text-xs bg-[#FDF6ED] text-[#C07A2B] border border-[#E8A84C]/30 rounded-lg px-2 py-1 shrink-0 hidden sm:block">
                      {step.proof}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROOF POINTS ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="✅ Chứng nhận"
            title="Bảo chứng chất lượng"
            subtitle="Chất lượng không tự công bố — có thể kiểm chứng qua hệ thống chứng nhận uy tín"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {proofPoints.map((pp) => (
              <div key={pp.id} className="bg-white rounded-2xl border border-[#D9CABC] p-6 text-center card-hover">
                <div className="text-3xl font-black text-[#6B2D0A] mb-2">{pp.label}</div>
                <div className="text-sm font-semibold text-[#C07A2B] mb-3">{pp.fullName}</div>
                <p className="text-xs text-[#6B5A4E] leading-relaxed">{pp.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/chung-nhan"
              className="inline-flex items-center gap-2 text-sm text-[#C07A2B] hover:text-[#6B2D0A] transition-colors"
            >
              Xem toàn bộ 15 giấy chứng nhận →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COST PER CUP ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge badge-amber mb-4 inline-flex">💰 Bài toán chi phí</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Cost-per-cup</h2>
            <p className="text-[#EDE4D8]/60 max-w-xl mx-auto">
              So sánh chi phí mỗi ly giữa các dòng sản phẩm FCD — được tính toán dựa trên giá/kg thực tế
            </p>
          </div>
          <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-white/10">
                <tr>
                  <th className="text-left px-6 py-3 text-[#E8A84C] font-semibold">Dòng sản phẩm</th>
                  <th className="text-right px-6 py-3 text-[#E8A84C] font-semibold">Giá / kg</th>
                  <th className="text-right px-6 py-3 text-[#E8A84C] font-semibold">
                    Chi phí/ly
                    <div className="text-xs font-normal text-[#EDE4D8]/50">70 ly/kg</div>
                  </th>
                  <th className="text-right px-6 py-3 text-[#E8A84C] font-semibold">
                    Chi phí/ly
                    <div className="text-xs font-normal text-[#EDE4D8]/50">140 ly/kg</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {costPerCup.map((row) => (
                  <tr key={row.code} className="border-t border-white/5">
                    <td className="px-6 py-3">
                      <span className="font-bold text-[#E8A84C] mr-2">{row.code}</span>
                      <span className="text-[#EDE4D8]/70 text-xs">{row.name}</span>
                    </td>
                    <td className="px-6 py-3 text-right text-[#EDE4D8]/70">
                      {row.pricePerKg.toLocaleString('vi-VN')}đ
                    </td>
                    <td className="px-6 py-3 text-right font-semibold text-white">
                      ~{row.costPer70.toLocaleString('vi-VN')}đ
                    </td>
                    <td className="px-6 py-3 text-right font-bold text-[#E8A84C]">
                      ~{row.costPer140.toLocaleString('vi-VN')}đ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-3 bg-white/5 border-t border-white/5">
              <p className="text-xs text-[#EDE4D8]/50">
                ⓘ Chi phí tính theo định dạng 70 ly/kg (~14g/ly) và 140 ly/kg (~7g/ly) — nhờ máy pha espresso 20 bar tặng kèm gói An Nhiên.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMBO 12KG ──────────────────────────────────────────────────────── */}
      <section id="combo" className="py-16 bg-[#FDF6ED] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="📦 Gói An Nhiên"
            title={anNhienCombo.title}
            subtitle={anNhienCombo.subtitle}
          />
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Machine & package */}
            <div className="space-y-5">
              <div className="bg-[#1C0F07] rounded-2xl p-7">
                <div className="inline-block bg-[#C07A2B] text-[#1C0F07] text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {anNhienCombo.machine.highlight}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{anNhienCombo.machine.name}</h3>
                <p className="text-[#EDE4D8]/70 text-sm leading-relaxed">{anNhienCombo.machine.description}</p>
              </div>

              {/* Capacity */}
              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h3 className="font-semibold text-[#1A0F08] mb-4">Năng suất pha chế</h3>
                <div className="grid grid-cols-2 gap-3">
                  {anNhienCombo.capacity.map((cap) => (
                    <div key={cap.format} className="bg-[#FDF6ED] rounded-xl p-4 text-center">
                      <div className="font-bold text-[#6B2D0A] text-lg">{cap.format}</div>
                      <div className="text-xs text-[#C07A2B] font-semibold">{cap.dosage}</div>
                      <p className="text-xs text-[#6B5A4E] mt-1">{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKU list */}
              <div className="bg-white rounded-2xl border border-[#D9CABC] p-5">
                <h3 className="font-semibold text-[#1A0F08] mb-3 text-sm">Mã sản phẩm combo</h3>
                <div className="flex flex-wrap gap-2">
                  {anNhienCombo.skus.map((sku) => (
                    <span key={sku} className="text-xs font-mono bg-[#F5EDE0] text-[#6B2D0A] border border-[#D9CABC] px-2 py-1 rounded">
                      {sku}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#6B5A4E] mt-3">
                  ⓘ Liên hệ FCD để xác nhận giá combo và điều kiện cụ thể.
                </p>
              </div>
            </div>

            {/* VIP Benefits + Target Segments */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h3 className="font-semibold text-[#1A0F08] mb-4">Quyền lợi thành viên VIP</h3>
                <div className="space-y-3">
                  {anNhienCombo.vipBenefits.map((b) => (
                    <div key={b.benefit} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#C07A2B] mt-2 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-[#1A0F08]">
                          {b.benefit}
                          <span className="ml-2 badge badge-amber text-xs">{b.value}</span>
                        </div>
                        <p className="text-xs text-[#6B5A4E]">{b.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h3 className="font-semibold text-[#1A0F08] mb-4">Phù hợp cho ai?</h3>
                <div className="space-y-3">
                  {anNhienCombo.targetSegments.map((seg) => (
                    <div key={seg.segment} className="bg-[#FDF6ED] rounded-xl p-3">
                      <div className="font-medium text-[#1A0F08] text-sm">{seg.segment}</div>
                      <div className="text-xs text-[#6B5A4E] mt-0.5">{seg.detail}</div>
                      <div className="text-xs text-[#C07A2B] font-semibold mt-1">→ {seg.format}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ / BARRIERS ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#F5EDE0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionHeader badge="❓ Giải đáp" title="Câu hỏi thường gặp" subtitle="Gỡ bỏ các rào cản tâm lý — FCD trả lời thẳng thắn" />
          <div className="space-y-4">
            {barriersFaq.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <div className="font-semibold text-[#6B2D0A] mb-3 flex items-start gap-2">
                  <span className="shrink-0">❓</span> {item.barrier}
                </div>
                <p className="text-sm text-[#6B5A4E] leading-relaxed pl-6">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-[#1C0F07]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Sẵn sàng trải nghiệm An Nhiên?
          </h2>
          <p className="text-[#EDE4D8]/60 mb-8">
            Gói An Nhiên 12kg phù hợp cho văn phòng, doanh nghiệp, và cá nhân yêu cà phê đặc sản. Liên hệ để được tư vấn chi tiết.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/lien-he"
              className="px-8 py-4 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold transition-all"
            >
              Liên hệ tư vấn ngay
            </Link>
            <Link
              href="/bang-gia"
              className="px-8 py-4 rounded-xl border border-[#EDE4D8]/30 text-[#EDE4D8] hover:border-[#E8A84C] hover:text-[#E8A84C] transition-all"
            >
              Xem bảng giá
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
