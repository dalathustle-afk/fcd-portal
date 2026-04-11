import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, AlertTriangle, CheckCircle2, Info } from 'lucide-react'
import {
  anMeaning, nhienMeaning, fiveNoes, tenSteps,
  proofPoints, costPerCup, anNhienCombo, barriersFaq,
  scaGrades, marketSegments, coffeeTypes,
} from '@/data/an-nhien'

export const metadata: Metadata = {
  title: 'An Nhiên Cùng FCD',
  description: 'Chương trình An Nhiên — cà phê đặc sản chất lượng cao cho văn phòng và doanh nghiệp. 5 Không, 10 bước kiểm soát, combo 12kg tặng kèm máy 20 bar.',
}

export default function AnNhienPage() {
  return (
    <>
      {/* ══ HERO — Cinematic An Nhiên ══════════════════════════════ */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden grain">
        {/* Video background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay muted loop playsInline
            poster="/images/nature/hero-caudat.png"
            className="absolute inset-0 w-full h-full object-cover object-center"
            preload="none"
          >
            <source src="/video/video-haicf-background.mp4" type="video/mp4" />
            <source src="/video/video-cf-background.mp4" type="video/mp4" />
          </video>
          {/* Warm espresso overlay — light enough to see video */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/65 via-[#2B1810]/45 to-[#2B1810]/55" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#FAF7F2] to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20 animate-fade-in">
          <span className="badge badge-on-dark mb-5 inline-flex items-center gap-1.5 backdrop-blur-sm">
            <Leaf size={10} className="text-[#A8C4A2]" /> Giải pháp FCD
          </span>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-5 leading-tight">
            AN NHIÊN<br /><span className="text-[#E3A558]">cùng FCD</span>
          </h1>
          <p className="text-white/75 text-base max-w-xl mx-auto leading-relaxed font-light mb-9">
            Cà phê đặc sản chất lượng cao — minh bạch từ vùng trồng đến ly cà phê.<br />
            An toàn, an tâm, và đúng nghĩa tự nhiên.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="#combo" className="btn-copper px-7 py-3.5 rounded-full flex items-center gap-2">
              Xem Gói An Nhiên <ArrowRight size={14} />
            </Link>
            <Link href="/lien-he" className="btn-ghost px-7 py-3.5 rounded-full">
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
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto text-center">Hai khía cạnh tạo nên giá trị cốt lõi của FCD</p>
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

      {/* ══ POSTER AN NHIÊN ════════════════════════════════════════ */}
      <section className="py-10 section-parchment">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#D9CABC]">
            <Image
              src="/images/nature/poster-an-nhien.png"
              alt="Poster chương trình An Nhiên cùng FCD"
              width={1200}
              height={680}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══ 5 KHÔNG ═══════════════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê" fill className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/92 to-[#2B1810]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex backdrop-blur-sm">🛡️ Cam kết</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white italic mb-3">Triết lý 5 Không</h2>
            <p className="text-white/60 text-sm max-w-md mx-auto text-center">FCD kiên định không dùng bất kỳ chất phụ gia nào — trả lại giá trị thực sự cho hạt cà phê</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fiveNoes.map((item, i) => (
              <div key={item.id} className={`glass-dark rounded-2xl p-5 text-center card-hover animate-fade-in delay-${(i+1)*100}`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-[#E3A558] font-bold text-xs mb-1.5 font-mono">#{item.number}</div>
                <div className="font-semibold text-white text-sm mb-2">{item.title}</div>
                <p className="text-white/78 text-xs leading-relaxed">{item.description}</p>
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
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto text-center">Hệ sinh thái khép kín từ nông trại đến ly cà phê — mỗi bước đều có chứng minh</p>
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
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto text-center">Chất lượng không tự công bố — có thể kiểm chứng qua hệ thống chứng nhận uy tín</p>
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
      <section className="py-20 bg-[#2B1810]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex">💰 Bài toán chi phí</span>
            <h2 className="font-display text-3xl text-white italic mb-3">Chi phí mỗi ly là bao nhiêu?</h2>
            <p className="text-white/78 text-sm max-w-md mx-auto text-center">Tính theo giá niêm yết chính thức tháng 02/2026 — với 2 mức pha chiết</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left px-5 py-3 text-white/72 font-medium text-xs uppercase tracking-wide">Sản phẩm</th>
                  <th className="text-right px-5 py-3 text-white/72 font-medium text-xs uppercase tracking-wide">70 ly/kg</th>
                  <th className="text-right px-5 py-3 text-white/72 font-medium text-xs uppercase tracking-wide">140 ly/kg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {costPerCup.map((row) => (
                  <tr key={row.code} className="group hover:bg-white/5 transition-colors">
                    <td className="px-5 py-3.5">
                      <div className="flex flex-col">
                        <span className="font-bold text-white text-xs font-mono tracking-wider">{row.code}</span>
                        <span className="text-white/68 text-xs mt-0.5">{row.name}</span>
                      </div>
                    </td>
                    <td className="text-right px-5 py-3.5 text-[#E3A558] font-semibold text-sm tabular-nums">
                      {row.costPer70.toLocaleString('vi-VN')}đ
                    </td>
                    <td className="text-right px-5 py-3.5 text-[#E3A558] font-semibold text-sm tabular-nums">
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
                <Image src="/images/nature/may-pha-an-nhien.jpg" alt="Máy pha espresso 20 bar — FCD An Nhiên" fill className="object-contain object-center p-4" sizes="(max-width: 768px) 100vw, 50vw" />
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

              {/* Deposit highlight */}
              <div className="mt-2 rounded-2xl bg-gradient-to-r from-[#3D2412] to-[#2B1810] border border-[#E3A558]/40 p-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#E3A558] text-xl shrink-0">💡</span>
                  <div>
                    <div className="text-[#E3A558] font-bold text-sm mb-1">Trả trước 50% — chỉ 2.612.000đ</div>
                    <p className="text-white/65 text-xs leading-relaxed">
                      Là đã được nhận ngay máy pha cà phê và bắt đầu hành trình An Nhiên. Phần còn lại thanh toán linh hoạt sau.
                    </p>
                  </div>
                </div>
              </div>

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

      {/* ══ SCA 5 CẤP ĐỘ ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#1C0F08]" id="sca-grade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="text-center mb-14">
            <span className="badge badge-amber mb-4 inline-flex">📊 Tiêu chuẩn SCA quốc tế</span>
            <h2 className="font-display text-3xl sm:text-5xl text-white italic mb-3 leading-tight">
              Thang Đo 5 Cấp Độ Chất Lượng
            </h2>
            <p className="text-[#E3A558]/80 font-display italic text-xl mb-2">theo tiêu chuẩn SCA</p>
            <p className="text-white/72 text-sm max-w-lg mx-auto leading-relaxed">
              Dựa trên tiêu chí đánh giá nghiêm ngặt, SCA đã xây dựng hệ thống 5 cấp độ chất lượng.
              Đây là lời giải đáp đanh thép nhất cho câu hỏi:{' '}
              <em className="text-white/70">Khách hàng đang thực sự bỏ tiền ra mua loại cà phê nào?</em>
            </p>
          </div>

          {/* 2-col layout: infographic + detail table */}
          <div className="grid lg:grid-cols-5 gap-8 items-start">

            {/* Left: Infographic */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E3A558]/15">
                  <Image
                    src="/images/nature/sca-grade-scale.png"
                    alt="Thang đo 5 cấp độ SCA — From Cầu Đất"
                    width={560}
                    height={840}
                    className="w-full h-auto"
                    priority
                  />
                </div>
                {/* FCD badge under image */}
                <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-[#3D2412] to-[#2B1810] border border-[#E3A558]/30">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-[#E3A558] shrink-0" />
                    <span className="text-xs font-semibold text-[#E3A558] uppercase tracking-wider">FCD đang đạt</span>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Máy quang học Nhật Bản loại bỏ <strong className="text-white">100% hạt lỗi sơ cấp</strong>,
                    đảm bảo sản phẩm đạt chuẩn <strong className="text-[#E3A558]">Specialty Grade — Loại 1</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Detailed grade cards */}
            <div className="lg:col-span-3 space-y-3">

              {/* Column headers — desktop only */}
              <div className="hidden sm:grid grid-cols-3 gap-2 px-4 pb-2 border-b border-white/8">
                <span className="text-[10px] font-semibold text-white/78 uppercase tracking-widest">Tiêu chuẩn khuyết tật</span>
                <span className="text-[10px] font-semibold text-white/78 uppercase tracking-widest">Cảm quan & Độ ẩm</span>
                <span className="text-[10px] font-semibold text-white/78 uppercase tracking-widest">Thực trạng tiêu dùng</span>
              </div>

              {scaGrades.map((grade) => (
                <div
                  key={grade.level}
                  className={`rounded-2xl border overflow-hidden transition-all ${
                    grade.level === 1
                      ? 'border-[#E3A558]/40 shadow-lg shadow-amber-900/20'
                      : grade.danger
                      ? 'border-red-900/40'
                      : 'border-white/8'
                  }`}
                  style={{ backgroundColor: grade.bgColor }}
                >
                  {/* Grade title row */}
                  <div
                    className="flex items-center gap-3 px-4 py-3 border-b"
                    style={{ borderColor: grade.color + '22' }}
                  >
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold font-mono"
                      style={{ backgroundColor: grade.color + '25', color: grade.color, border: `1.5px solid ${grade.color}60` }}
                    >
                      {grade.level}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                        <span className="font-bold text-white text-sm">LOẠI {grade.level} — {grade.name}</span>
                        <span className="text-[11px] font-mono" style={{ color: grade.color + 'AA' }}>{grade.nameEn}</span>
                      </div>
                    </div>
                    <span
                      className="shrink-0 text-[10px] px-2.5 py-1 rounded-full font-semibold"
                      style={{ backgroundColor: grade.color + '20', color: grade.color, border: `1px solid ${grade.color}40` }}
                    >
                      {grade.tag}
                    </span>
                  </div>

                  {/* Grade detail grid */}
                  <div className="grid sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x" style={{ '--tw-divide-opacity': 0.08 } as React.CSSProperties}>
                    {/* Col 1: Defects */}
                    <div className="p-3.5">
                      <div className="text-[9px] text-white/78 uppercase tracking-widest mb-1 font-semibold hidden sm:block">Khuyết tật</div>
                      <div className="flex items-start gap-1.5">
                        <Info size={10} className="mt-0.5 shrink-0" style={{ color: grade.color + '80' }} />
                        <p className="text-xs leading-relaxed" style={{ color: grade.color + 'CC' }}>
                          {grade.defects}
                        </p>
                      </div>
                    </div>
                    {/* Col 2: Sensory */}
                    <div className="p-3.5">
                      <div className="text-[9px] text-white/78 uppercase tracking-widest mb-1 font-semibold hidden sm:block">Cảm quan</div>
                      <p className="text-xs text-white/78 leading-relaxed">{grade.sensory}</p>
                    </div>
                    {/* Col 3: Market */}
                    <div className="p-3.5">
                      <div className="text-[9px] text-white/78 uppercase tracking-widest mb-1 font-semibold hidden sm:block">Thị trường</div>
                      <div className="flex items-start gap-1.5">
                        {grade.danger
                          ? <AlertTriangle size={10} className="mt-0.5 shrink-0 text-red-400" />
                          : <CheckCircle2 size={10} className="mt-0.5 shrink-0 text-green-500/70" />
                        }
                        <p className={`text-xs leading-relaxed ${grade.danger ? 'text-red-300/75' : 'text-white/72'}`}>
                          {grade.market}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom quality bar */}
                  <div className="px-4 pb-3">
                    <div className="h-0.5 rounded-full" style={{ background: `linear-gradient(to right, ${grade.color}55, transparent)`, width: `${(6 - grade.level) * 20}%` }} />
                  </div>
                </div>
              ))}

              {/* Warning callout */}
              <div className="mt-2 p-4 rounded-2xl border border-red-900/40 bg-red-950/20 flex items-start gap-3">
                <AlertTriangle size={16} className="text-red-400 shrink-0 mt-0.5" />
                <p className="text-red-200/65 text-xs leading-relaxed">
                  <strong className="text-red-300">Thực trạng nhức nhối:</strong> Đa số người tiêu dùng Việt Nam tại các
                  quán vỉa hè, xe đẩy bình dân đang uống cà phê{' '}
                  <strong className="text-red-300">Loại 4 và Loại 5</strong> — chứa đầy hạt đen, mốc, sâu bệnh — khi
                  rang cháy khét và tẩm ướp hóa chất, khách hàng không thể nhận ra mình đang nạp mầm bệnh vào cơ thể.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ PHÂN KHÚC THỊ TRƯỜNG ══════════════════════════════════ */}
      <section className="py-20 section-parchment">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex">📈 Phân tích thị trường</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">
              5 Phân Khúc Cà Phê Việt Nam
            </h2>
            <p className="text-[#6B5A4E] text-sm max-w-lg mx-auto">
              FCD tấn công trực tiếp vào phân khúc số 4 &amp; 5 — chiếm ~26–33% thị phần, tương đương 10–13 triệu khách hàng mục tiêu
            </p>
          </div>
          <div className="space-y-3">
            {marketSegments.map((seg) => (
              <div
                key={seg.id}
                className={`rounded-2xl p-5 border transition-all ${
                  seg.isFCDTarget
                    ? 'border-[#B87333]/40 bg-gradient-to-r from-[#FAF0E4] to-[#FDF8F2] shadow-md'
                    : 'bg-white border-[#D9CABC]/60 card-nature'
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl shrink-0">{seg.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="font-semibold text-[#1A120A] text-sm">{seg.name}</span>
                      <span
                        className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                        style={{ backgroundColor: seg.color + '22', color: seg.color }}
                      >
                        {seg.share}
                      </span>
                      <span className="text-xs text-[#9C8472]">{seg.population}</span>
                      {seg.isFCDTarget && (
                        <span className="ml-auto text-xs bg-[#B87333] text-white px-2.5 py-0.5 rounded-full font-semibold shrink-0">
                          🎯 FCD nhắm đến
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#6B5A4E] leading-relaxed">{seg.weakness}</p>
                  </div>
                </div>
                {/* Share bar */}
                <div className="mt-3 h-1.5 rounded-full bg-[#E8DDD4]">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: seg.share.split('–')[0].replace('%','').replace('~','').trim() + '%',
                      backgroundColor: seg.isFCDTarget ? '#B87333' : seg.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* FCD positioning callout */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#B87333] to-[#7C3D18] text-white shadow-xl">
            <div className="font-display text-xl italic mb-2">Cơ hội của FCD</div>
            <p className="text-white/80 text-sm leading-relaxed">
              Cung cấp chất lượng của nhóm cà phê cao cấp, nhưng với{' '}
              <strong className="text-[#E3A558]">chi phí vốn chỉ bằng ly cà phê hòa tan</strong> nhờ chiếc máy pha áp suất 20 bar được tặng miễn phí.
            </p>
          </div>
        </div>
      </section>

      {/* ══ NHẬN DIỆN 5 LOẠI CÀ PHÊ ═══════════════════════════════ */}
      <section className="py-20 bg-[#2B1810]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex backdrop-blur-sm">🔍 Nhận biết</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white italic mb-3">
              Phân Biệt 5 Loại Cà Phê
            </h2>
            <p className="text-white/78 text-sm max-w-md mx-auto">
              Nhận diện bằng mắt, mũi, miệng — để không bao giờ bị lừa bởi cà phê kém chất lượng
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {coffeeTypes.map((type, i) => (
              <div
                key={type.id}
                className={`rounded-2xl p-5 flex flex-col gap-3 border transition-all card-hover ${
                  type.isFCD
                    ? 'border-[#E3A558]/50 bg-gradient-to-b from-[#3D2412] to-[#2B1810] shadow-lg shadow-amber-900/20'
                    : type.danger
                    ? 'border-red-900/30 bg-red-950/20'
                    : 'border-white/8 bg-white/3'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{type.icon}</span>
                  {type.isFCD && (
                    <span className="text-[10px] bg-[#E3A558]/20 text-[#E3A558] border border-[#E3A558]/30 rounded-full px-2 py-0.5 font-semibold">
                      FCD
                    </span>
                  )}
                  {type.danger && (
                    <span className="text-[10px] bg-red-900/40 text-red-300 border border-red-800/40 rounded-full px-2 py-0.5 font-semibold">
                      ⚠ Nguy hiểm
                    </span>
                  )}
                </div>
                <div className="font-semibold text-white text-sm">{type.name}</div>

                <div className="space-y-2.5 flex-1">
                  <div>
                    <div className="text-[10px] text-[#E3A558]/70 font-semibold uppercase tracking-wider mb-0.5">👁 Thị giác</div>
                    <p className="text-white/72 text-[11px] leading-relaxed">{type.visual}</p>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#E3A558]/70 font-semibold uppercase tracking-wider mb-0.5">👃 Khứu giác</div>
                    <p className="text-white/72 text-[11px] leading-relaxed">{type.smell}</p>
                  </div>
                  <div>
                    <div className="text-[10px] text-[#E3A558]/70 font-semibold uppercase tracking-wider mb-0.5">👅 Vị giác</div>
                    <p className={`text-[11px] leading-relaxed ${type.isFCD ? 'text-[#E3A558]/80' : 'text-white/72'}`}>{type.taste}</p>
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

