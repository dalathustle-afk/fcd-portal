import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Award, Shield, CheckCircle, Coffee } from 'lucide-react'
import { brandInfo } from '@/content/brand'

export const metadata: Metadata = {
  title: 'Giới thiệu FCD',
  description: 'FROMCAUDAT là thương hiệu cà phê đặc sản từ Cầu Đất, Lâm Đồng — Arabica chất lượng cao, tiêu chuẩn SCA, minh bạch từ nguồn gốc.',
}

export default function GioiThieuPage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative pt-24 pb-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image src="/images/nature/hero-caudat.png" alt="Cầu Đất" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/90 via-[#1A120A]/75 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-sage mb-5 inline-flex">🌿 Về chúng tôi</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white italic mb-5 leading-tight">
            FROMCAUDAT là ai?
          </h1>
          <p className="text-white/70 text-base max-w-xl mx-auto leading-relaxed font-light">
            {brandInfo.mission}
          </p>
        </div>
      </section>

      {/* ══ GIÁ TRỊ CỐT LÕI ══════════════════════════════════════ */}
      <section className="py-20 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-amber mb-4 inline-flex">💡 Core values</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">Giá trị cốt lõi</h2>
            <p className="text-[#6B5A4E] text-sm">Những gì FCD cam kết với người dùng và đối tác</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brandInfo.values.map((val, i) => (
              <div key={val.title} className={`card-nature p-6 animate-fade-in delay-${(i+1)*100}`}>
                <div className="w-11 h-11 rounded-2xl bg-[#FAF6F0] flex items-center justify-center mb-4 border border-[#D9CABC]">
                  <Coffee className="text-[#B87333]" size={20} />
                </div>
                <h3 className="font-semibold text-[#1A120A] mb-2 text-sm">{val.title}</h3>
                <p className="text-xs text-[#6B5A4E] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ VÙNG NGUYÊN LIỆU ══════════════════════════════════════ */}
      <section className="py-20 section-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-4 inline-flex">🗺️ Nguồn gốc</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic mb-3">Vùng nguyên liệu</h2>
            <p className="text-[#6B5A4E] text-sm">Hai vùng trồng hàng đầu Việt Nam</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {brandInfo.regions.map((region, i) => (
              <div key={region.name} className={`card-nature overflow-hidden animate-fade-in delay-${(i+1)*200}`}>
                <div className="h-1.5 bg-gradient-to-r from-[#4A6741] to-[#6B8C6B]" />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-[#EDF3EC] flex items-center justify-center">
                      <MapPin className="text-[#4A6741]" size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A120A]">{region.name}</h3>
                      <span className="text-xs text-[#9C8472]">{region.location}</span>
                    </div>
                  </div>
                  <dl className="space-y-3">
                    {[
                      { dt: 'Độ cao', dd: region.altitude },
                      { dt: 'Giống', dd: region.variety },
                      { dt: 'Đặc trưng', dd: region.character },
                    ].map(({ dt, dd }) => (
                      <div key={dt} className="flex gap-3">
                        <dt className="text-xs font-semibold text-[#9C8472] w-20 shrink-0 pt-0.5">{dt}</dt>
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
      <section className="py-20 bg-[#1A120A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
                <Shield size={16} /> Quy trình &amp; Tiêu chuẩn
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
