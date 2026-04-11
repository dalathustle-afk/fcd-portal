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
  { icon: Leaf, color: '#4A6741', bg: 'from-[#EDF3EC] to-[#D4E8D2]', border: '#6B8C6B' },
  { icon: ShieldCheck, color: '#1A6B5A', bg: 'from-[#E8F5F1] to-[#C8E8E0]', border: '#3BA692' },
  { icon: Award, color: '#B87333', bg: 'from-[#FDF3E8] to-[#F5DFB8]', border: '#D4914A' },
  { icon: Heart, color: '#7C2D56', bg: 'from-[#FCF0F5] to-[#F0C8DB]', border: '#B8607A' },
]

export default function GioiThieuPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-24 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Cầu Đất" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/88 via-[#1A120A]/72 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#E3A558]/40 shadow-2xl shadow-black/40">
              <Image
                src="/images/nature/logo-from-cau-dat.jpg"
                alt="From Cầu Đất Logo"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <span className="badge badge-sage mb-5 inline-flex backdrop-blur-sm">🌿 Về chúng tôi</span>
          <h1 className="font-display text-4xl sm:text-6xl text-white italic mb-6 leading-tight">
            FROM CẦU ĐẤT<br />
            <span className="text-[#E3A558] text-3xl sm:text-4xl">Cà Phê Đặc Sản SCA</span>
          </h1>
          <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed font-light">
            {brandInfo.mission}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/an-nhien" className="px-7 py-3.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all shadow-lg shadow-[#B87333]/30">
              Chương trình An Nhiên →
            </Link>
            <Link href="/quy-trinh-chat-luong" className="px-7 py-3.5 rounded-full glass-dark text-white/80 hover:text-white text-sm font-medium transition-all">
              Quy trình chất lượng
            </Link>
          </div>
        </div>
      </section>

      {/* ══ GIÁ TRỊ CỐT LÕI ══════════════════════════════════════ */}
      <section className="py-20 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge badge-amber mb-4 inline-flex">💡 Giá trị cốt lõi</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">Những cam kết của FCD</h2>
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto">
              Nền tảng xây dựng thương hiệu cà phê đặc sản trung thực
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brandInfo.values.map((val, i) => {
              const { icon: Icon, color, bg, border } = valueIcons[i]
              return (
                <div
                  key={val.title}
                  className={`rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in`}
                  style={{ borderColor: border + '40' }}
                >
                  {/* Color top accent */}
                  <div className={`h-1.5 bg-gradient-to-r ${bg}`} style={{ background: `linear-gradient(135deg, ${border}60, ${border}20)` }} />
                  <div className={`p-6 bg-gradient-to-br ${bg}`}>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
                      style={{ backgroundColor: color + '18', border: `1.5px solid ${border}50` }}
                    >
                      <Icon size={22} style={{ color }} />
                    </div>
                    <h3 className="font-bold text-[#1A120A] mb-2">{val.title}</h3>
                    <p className="text-xs text-[#5C3317] leading-relaxed opacity-80">{val.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ VÙNG NGUYÊN LIỆU ══════════════════════════════════════ */}
      <section className="py-20 section-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex">🗺️ Nguồn gốc</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">Hai vùng nguyên liệu</h2>
            <p className="text-[#6B5A4E] text-sm">Hai vùng trồng hàng đầu Việt Nam tạo nên hương vị FCD</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {brandInfo.regions.map((region, i) => (
              <div key={region.name} className={`card-nature overflow-hidden animate-fade-in delay-${(i+1)*200}`}>
                <div className={`h-2 ${i === 0 ? 'bg-gradient-to-r from-[#4A6741] to-[#6B8C6B]' : 'bg-gradient-to-r from-[#B87333] to-[#E3A558]'}`} />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${i === 0 ? 'bg-[#EDF3EC]' : 'bg-[#FDF3E8]'}`}>
                      <MapPin className={i === 0 ? 'text-[#4A6741]' : 'text-[#B87333]'} size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A120A] text-lg">{region.name}</h3>
                      <span className="text-xs text-[#9C8472]">📍 {region.location}</span>
                    </div>
                  </div>
                  <dl className="space-y-3.5">
                    {[
                      { dt: 'Độ cao', dd: region.altitude },
                      { dt: 'Giống', dd: region.variety },
                      { dt: 'Đặc trưng', dd: region.character },
                    ].map(({ dt, dd }) => (
                      <div key={dt} className="flex gap-3">
                        <dt className="text-xs font-semibold text-[#9C8472] w-20 shrink-0 pt-0.5 uppercase tracking-wide">{dt}</dt>
                        <dd className="text-sm text-[#1A120A] leading-relaxed">{dd}</dd>
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
          <Image src="/images/nature/farm-illustration.png" alt="Vườn cà phê" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-[#1A120A]/90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex">🏆 Tiêu chuẩn</span>
            <h2 className="font-display text-3xl text-white italic mb-3">Tiêu chuẩn &amp; Kiểm định</h2>
            <p className="text-white/55 text-sm">Chất lượng được xác nhận, không tự công bố</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-[#E3A558] font-semibold mb-5 flex items-center gap-2 text-sm">
                <Award size={16} /> Chứng nhận &amp; kiểm nghiệm
              </h3>
              <ul className="space-y-3">
                {brandInfo.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle size={13} className="text-[#B87333] mt-0.5 shrink-0" />
                    <span className="text-xs text-white/65 leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-[#E3A558] font-semibold mb-5 flex items-center gap-2 text-sm">
                <ShieldCheck size={16} /> Quy trình &amp; Tiêu chuẩn
              </h3>
              <ul className="space-y-3">
                {brandInfo.standards.map((std) => (
                  <li key={std} className="flex items-start gap-3">
                    <CheckCircle size={13} className="text-[#4A6741] mt-0.5 shrink-0" />
                    <span className="text-xs text-white/65 leading-relaxed">{std}</span>
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
