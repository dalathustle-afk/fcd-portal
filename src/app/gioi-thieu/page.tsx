import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Award, ShieldCheck, Leaf, Heart, CheckCircle } from 'lucide-react'
import { brandInfo } from '@/content/brand'

export const metadata: Metadata = {
  title: 'Giới thiệu FCD',
  description: 'FROMCAUDAT — Cà phê đặc sản SCA từ Cầu Đất, Lâm Đồng. Arabica chất lượng cao, 100% không lỗi sơ cấp, không độc tố.',
}

const valueIcons = [
  { icon: Leaf, color: '#10b981', bg: 'bg-emerald-950/20', border: 'border-emerald-500/20' },
  { icon: ShieldCheck, color: '#38bdf8', bg: 'bg-sky-950/20', border: 'border-sky-500/20' },
  { icon: Award, color: 'var(--fcd-copper)', bg: 'bg-[#B87333]/10', border: 'border-[var(--fcd-copper)]/20' },
  { icon: Heart, color: '#f43f5e', bg: 'bg-rose-950/20', border: 'border-rose-500/20' },
]

export default function GioiThieuPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-24 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Cầu Đất" fill className="object-cover object-center mix-blend-luminosity opacity-40" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--fcd-bg)]/90 via-[var(--fcd-bg)]/60 to-[var(--fcd-bg)]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border border-[var(--fcd-copper)]/40 shadow-[0_0_30px_rgba(200,126,58,0.2)]">
              <Image
                src="/images/nature/logo-from-cau-dat.jpg"
                alt="From Cầu Đất Logo"
                width={96}
                height={96}
                className="object-cover w-full h-full mix-blend-screen"
              />
            </div>
          </div>
          <span className="badge badge-sage mb-5 inline-flex backdrop-blur-sm">🌿 Về chúng tôi</span>
          <h1 className="font-display text-4xl sm:text-6xl text-white italic mb-6 leading-tight drop-shadow-lg">
            FROM CẦU ĐẤT<br />
            <span className="text-[var(--fcd-copper)] text-3xl sm:text-4xl mix-blend-screen">Cà Phê Đặc Sản SCA</span>
          </h1>
          <p className="text-white/80 text-base max-w-2xl mx-auto leading-relaxed font-light">
            {brandInfo.mission}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/an-nhien" className="px-7 py-3.5 rounded-full bg-[var(--fcd-copper)] hover:bg-[var(--fcd-amber)] text-white font-semibold text-sm transition-all shadow-[0_0_15px_rgba(200,126,58,0.4)] glow">
              Chương trình An Nhiên →
            </Link>
            <Link href="/quy-trinh-chat-luong" className="px-7 py-3.5 rounded-full border border-white/20 glass-dark text-white hover:bg-white/10 text-sm font-medium transition-all">
              Quy trình chất lượng
            </Link>
          </div>
        </div>
      </section>

      {/* ══ GIÁ TRỊ CỐT LÕI ══════════════════════════════════════ */}
      <section className="py-20 section-dark-warm texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge badge-amber mb-4 inline-flex backdrop-blur-sm">💡 Giá trị cốt lõi</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white italic mb-3">Những cam kết của FCD</h2>
            <p className="text-white/60 text-sm max-w-md mx-auto text-center">
              Nền tảng xây dựng thương hiệu cà phê đặc sản trung thực
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brandInfo.values.map((val, i) => {
              const { icon: Icon, color, bg, border } = valueIcons[i]
              return (
                <div
                  key={val.title}
                  className={`rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in bento-card ${border}`}
                >
                  {/* Color top accent */}
                  <div className={`h-1.5 bg-gradient-to-r from-transparent to-white/10`} />
                  <div className={`p-6 ${bg}`}>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-[0_0_15px_currentColor] glass-dark ${border}`}
                      style={{ color }}
                    >
                      <Icon size={22} className="drop-shadow-md" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{val.title}</h3>
                    <p className="text-xs text-white/55 leading-relaxed opacity-80">{val.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ VÙNG NGUYÊN LIỆU ══════════════════════════════════════ */}
      <section className="py-20 section-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex backdrop-blur-sm">🗺️ Nguồn gốc</span>
            <h2 className="font-display text-3xl sm:text-4xl text-white italic mb-3">Hai vùng nguyên liệu</h2>
            <p className="text-white/60 text-sm text-center">Hai vùng trồng hàng đầu Việt Nam tạo nên hương vị FCD</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {brandInfo.regions.map((region, i) => (
              <div key={region.name} className={`bento-card overflow-hidden animate-fade-in delay-${(i+1)*200}`}>
                <div className={`h-1.5 ${i === 0 ? 'bg-gradient-to-r from-emerald-600 to-[#6B8C6B]' : 'bg-gradient-to-r from-[var(--fcd-copper)] to-[var(--fcd-amber)]'}`} />
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center glass-nature border ${i === 0 ? 'border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]' : 'border-[var(--fcd-copper)]/20 shadow-[0_0_15px_rgba(200,126,58,0.2)]'}`}>
                      <MapPin className={`${i === 0 ? 'text-emerald-400' : 'text-[var(--fcd-copper)]'} drop-shadow-md`} size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{region.name}</h3>
                      <span className="text-xs text-white/50">📍 {region.location}</span>
                    </div>
                  </div>
                  <dl className="space-y-3.5">
                    {[
                      { dt: 'Độ cao', dd: region.altitude },
                      { dt: 'Giống', dd: region.variety },
                      { dt: 'Đặc trưng', dd: region.character },
                    ].map(({ dt, dd }) => (
                      <div key={dt} className="flex gap-4">
                        <dt className="text-xs font-semibold text-white/40 w-20 shrink-0 pt-0.5 uppercase tracking-wide">{dt}</dt>
                        <dd className="text-sm text-white/90 leading-relaxed drop-shadow-sm">{dd}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TIÊU CHUẨN & CHỨNG NHẬN ══════════════════════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/farm-illustration.png" alt="Vườn cà phê" fill className="object-cover opacity-10 mix-blend-luminosity" />
          <div className="absolute inset-0 bg-[#0A0604]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex backdrop-blur-sm">🏆 Tiêu chuẩn</span>
            <h2 className="font-display text-3xl text-white italic mb-3">Tiêu chuẩn &amp; Kiểm định</h2>
            <p className="text-white/60 text-sm">Chất lượng được xác nhận, không tự công bố</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="bento-card rounded-2xl p-6">
              <h3 className="text-[var(--fcd-amber)] font-semibold mb-5 flex items-center gap-2 text-sm drop-shadow-sm">
                <Award size={16} /> Chứng nhận &amp; kiểm nghiệm
              </h3>
              <ul className="space-y-3">
                {brandInfo.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[var(--fcd-copper)] mt-0.5 shrink-0 glow" />
                    <span className="text-xs text-white/70 leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bento-card rounded-2xl p-6">
              <h3 className="text-emerald-400 font-semibold mb-5 flex items-center gap-2 text-sm drop-shadow-sm">
                <ShieldCheck size={16} /> Quy trình &amp; Tiêu chuẩn
              </h3>
              <ul className="space-y-3">
                {brandInfo.standards.map((std) => (
                  <li key={std} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0 shadow-[0_0_10px_currentColor]" />
                    <span className="text-xs text-white/70 leading-relaxed">{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
