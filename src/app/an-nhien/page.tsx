import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'
import {
  anMeaning, nhienMeaning, fiveNoes, tenSteps,
  proofPoints, costPerCup, anNhienCombo, barriersFaq,
} from '@/data/an-nhien'

export const metadata: Metadata = {
  title: 'An Nhiên Cùng FCD',
  description: 'Chương trình An Nhiên — cà phê đặc sản chất lượng cao cho văn phòng và doanh nghiệp. 5 Không, 10 bước kiểm soát, combo 12kg tặng kèm máy 20 bar.',
}

export default function AnNhienPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative min-h-[68vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Cầu Đất" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/88 via-[#1A120A]/70 to-[#2D4A2D]/40" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center pt-28 pb-20 animate-fade-in">
          <span className="badge badge-sage mb-5 inline-flex backdrop-blur-sm"><Leaf size={11} /> Giải pháp FCD</span>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-5 italic leading-tight">
            AN NHIÊN<br /><span className="text-[#E3A558]">cùng FCD</span>
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed font-light">
            Cà phê đặc sản chất lượng cao — minh bạch từ vùng trồng đến ly cà phê.<br />
            An toàn, an tâm, và đúng nghĩa tự nhiên.
          </p>
          <div className="flex flex-wrap gap-3 mt-9 justify-center">
            <Link href="#combo" className="px-7 py-3.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all shadow-lg">
              Xem Gói An Nhiên
            </Link>
            <Link href="/lien-he" className="px-7 py-3.5 rounded-full glass-dark text-white/90 hover:text-white font-medium text-sm transition-all">
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>

      {/* ══ AN + NHIÊN MEANING ════════════════════════════════════ */}
      <section className="py-20 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex">💡 Triết lý</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">&ldquo;AN NHIÊN&rdquo; là gì?</h2>
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto">Hai khía cạnh tạo nên giá trị cốt lõi của FCD</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* AN */}
            <div className="card-nature overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#B87333] to-[#E3A558]" />
              <div className="p-8">
                <div className="font-display text-6xl italic text-[#7C3D18] mb-2">AN</div>
                <div className="text-[#B87333] font-semibold mb-4 text-sm tracking-wide">{anMeaning.subtitle}</div>
                <p className="text-[#6B5A4E] leading-relaxed mb-6 text-sm">{anMeaning.description}</p>
                <div className="space-y-3">
                  {anMeaning.pillars.map((p) => (
                    <div key={p.id} className="bg-[#FAF6F0] rounded-xl p-4 border border-[#D9CABC]">
                      <div className="font-semibold text-[#1A120A] mb-1 text-sm">{p.title}</div>
                      <p className="text-xs text-[#6B5A4E] leading-relaxed">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* NHIÊN */}
            <div className="card-nature overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#4A6741] to-[#6B8C6B]" />
              <div className="p-8">
                <div className="font-display text-6xl italic text-[#2D4A2D] mb-2">NHIÊN</div>
                <div className="text-[#4A6741] font-semibold mb-4 text-sm tracking-wide">{nhienMeaning.subtitle}</div>
                <p className="text-[#6B5A4E] leading-relaxed mb-6 text-sm">{nhienMeaning.description}</p>
                <div className="space-y-3">
                  {nhienMeaning.pillars.map((p) => (
                    <div key={p.id} className="bg-[#EDF3EC] rounded-xl p-4 border border-[#6B8C6B]/20">
                      <div className="font-semibold text-[#1A120A] mb-1 text-sm">{p.title}</div>
                      <p className="text-xs text-[#6B5A4E] leading-relaxed">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 5 KHÔNG ═══════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/92 to-[#1A120A]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex backdrop-blur-sm">🛡️ Cam kết</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white italic mb-3">Triết lý 5 Không</h2>
            <p className="text-white/60 text-sm max-w-md mx-auto">FCD kiên định không dùng bất kỳ chất phụ gia nào — trả lại giá trị thực sự cho hạt cà phê</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fiveNoes.map((item, i) => (
              <div key={item.id} className={`glass-dark rounded-2xl p-5 text-center card-hover animate-fade-in delay-${(i+1)*100}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-[#E3A558] font-bold text-xs mb-1.5 font-mono">#{item.number}</div>
                <div className="font-semibold text-white text-sm mb-2">{item.title}</div>
                <p className="text-white/55 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 10 BƯỚC ═══════════════════════════════════════════════ */}
      <section className="py-20 section-parchment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex">⚙️ Quy trình</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">10 Bước Kiểm Soát Chất Lượng</h2>
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto">Hệ sinh thái khép kín từ nông trại đến ly cà phê — mỗi bước đều có chứng minh</p>
          </div>
          <div className="space-y-3">
            {tenSteps.map((step, i) => (
              <div key={step.step} className={`bg-white rounded-2xl border border-[#D9CABC] p-5 flex gap-4 items-start card-nature animate-fade-in delay-${Math.min(i*50, 500)}`} style={{ animationDelay: `${i * 0.06}s` }}>
                <div className={`step-circle shrink-0 ${step.step <= 5 ? '' : 'step-circle-sage'}`}>
                  {step.step}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="font-semibold text-[#1A120A] text-sm mb-1">{step.icon} {step.title}</div>
                    <span className="text-[10px] bg-[#FAF6F0] text-[#B87333] border border-[#B87333]/20 rounded-full px-2.5 py-0.5 shrink-0 hidden sm:block">
                      {step.proof}
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5A4E] leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CHỨNG NHẬN ════════════════════════════════════════════ */}
      <section className="py-20 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-green mb-4 inline-flex">✅ Chứng nhận</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">Bảo chứng chất lượng</h2>
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto">Chất lượng không tự công bố — có thể kiểm chứng qua hệ thống chứng nhận uy tín</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {proofPoints.map((pp, i) => (
              <div key={pp.id} className={`card-nature p-6 text-center animate-fade-in delay-${(i+1)*100}`}>
                <div className="font-display text-4xl italic text-[#7C3D18] mb-2">{pp.label}</div>
                <div className="text-sm font-semibold text-[#B87333] mb-3">{pp.fullName}</div>
                <p className="text-xs text-[#6B5A4E] leading-relaxed">{pp.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/chung-nhan" className="inline-flex items-center gap-2 text-sm font-medium text-[#7C3D18] hover:text-[#B87333] transition-colors">
              Xem toàn bộ 15 giấy chứng nhận <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CHI PHÍ/LY ════════════════════════════════════════════ */}
      <section className="py-20 bg-[#1A120A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex">💰 Bài toán chi phí</span>
            <h2 className="font-display text-3xl text-white italic mb-3">Chi phí mỗi ly là bao nhiêu?</h2>
            <p className="text-white/55 text-sm max-w-md mx-auto">Tính theo giá niêm yết chính thức tháng 02/2026 — với 2 mức pha chiết</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left pb-3 text-white/50 font-medium text-xs">Sản phẩm</th>
                  <th className="text-right pb-3 text-white/50 font-medium text-xs">70 ly/kg</th>
                  <th className="text-right pb-3 text-white/50 font-medium text-xs">140 ly/kg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {costPerCup.map((row) => (
                  <tr key={row.code} className="group hover:bg-white/3 transition-colors">
                    <td className="py-3.5">
                      <span className="font-semibold text-white text-xs font-mono">{row.code}</span>
                      <span className="text-white/40 text-xs ml-2">{row.name}</span>
                    </td>
                    <td className="text-right py-3.5 text-[#E3A558] font-semibold text-xs">
                      {row.costPer70.toLocaleString('vi-VN')}đ
                    </td>
                    <td className="text-right py-3.5 text-[#E3A558] font-semibold text-xs">
                      {row.costPer140.toLocaleString('vi-VN')}đ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ══ GÓI AN NHIÊN COMBO ════════════════════════════════════ */}
      <section id="combo" className="py-20 section-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex">☕ Gói đặc biệt</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">{anNhienCombo.title}</h2>
            <p className="text-[#6B5A4E] text-sm max-w-lg mx-auto">{anNhienCombo.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Machine highlight */}
            <div className="card-nature overflow-hidden">
              <div className="relative h-64 bg-[#F5EDE0]">
                <Image src="/images/nature/machine-poster.png" alt="Máy pha espresso 20 bar" fill className="object-contain object-center p-4" />
                <div className="absolute top-3 left-3">
                  <span className="badge bg-[#B87333] text-white border-0 text-xs font-bold px-3 py-1.5 rounded-full">
                    {anNhienCombo.machine.highlight}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-[#1A120A] mb-2">{anNhienCombo.machine.name}</h3>
                <p className="text-sm text-[#6B5A4E] leading-relaxed">{anNhienCombo.machine.description}</p>
              </div>
            </div>
            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="font-semibold text-[#1A120A] mb-4 text-sm tracking-wide uppercase text-[#9C8472]">Quyền lợi VIP</h3>
              {anNhienCombo.vipBenefits.map((b, i) => (
                <div key={b.benefit} className={`card-nature p-4 animate-fade-in delay-${(i+1)*100}`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm text-[#1A120A]">{b.benefit}</span>
                    <span className="font-bold text-[#7C3D18] text-sm shrink-0">{b.value}</span>
                  </div>
                  <p className="text-xs text-[#9C8472] mt-1">{b.note}</p>
                </div>
              ))}
              <Link href="/lien-he" className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all mt-4">
                Đăng ký tư vấn ngay <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ / RÀO CẢN ═════════════════════════════════════════ */}
      <section className="py-20 section-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex">❓ Câu hỏi thường gặp</span>
            <h2 className="font-display text-3xl text-[#1A120A] italic mb-3">Gỡ bỏ rào cản</h2>
          </div>
          <div className="space-y-4">
            {barriersFaq.map((item, i) => (
              <div key={item.id} className={`card-nature p-6 animate-fade-in delay-${(i+1)*100}`}>
                <div className="flex items-start gap-3">
                  <span className="step-circle shrink-0 text-xs" style={{ width: 28, height: 28 }}>{i + 1}</span>
                  <div>
                    <div className="font-semibold text-[#1A120A] mb-2 text-sm leading-snug">{item.barrier}</div>
                    <p className="text-xs text-[#6B5A4E] leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
