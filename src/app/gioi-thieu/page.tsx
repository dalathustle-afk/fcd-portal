import type { Metadata } from 'next'
import { MapPin, Award, Shield, Leaf, CheckCircle, Coffee } from 'lucide-react'
import { brandInfo } from '@/content/brand'

export const metadata: Metadata = {
  title: 'Giới thiệu FCD',
  description: 'FROMCAUDAT là thương hiệu cà phê đặc sản từ Cầu Đất, Lâm Đồng — Arabica chất lượng cao, tiêu chuẩn SCA, minh bạch từ nguồn gốc.',
}

export default function GioiThieuPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-amber mb-4 inline-flex">🌿 Về chúng tôi</span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            FROMCAUDAT là ai?
          </h1>
          <p className="text-[#EDE4D8]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            {brandInfo.mission}
          </p>
        </div>
      </section>

      {/* Brand Values */}
      <section className="py-16 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">Giá trị cốt lõi</h2>
            <p className="text-[#6B5A4E]">Những gì FCD cam kết với người dùng và đối tác</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandInfo.values.map((val) => (
              <div key={val.title} className="bg-white rounded-2xl p-6 border border-[#D9CABC] card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#FDF6ED] flex items-center justify-center mb-4">
                  <Coffee className="text-[#C07A2B]" size={24} />
                </div>
                <h3 className="font-semibold text-[#1A0F08] mb-2">{val.title}</h3>
                <p className="text-sm text-[#6B5A4E] leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Regions */}
      <section className="py-16 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#1A0F08] mb-2">Vùng nguyên liệu</h2>
            <p className="text-[#6B5A4E]">Hai vùng trồng hàng đầu Việt Nam</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {brandInfo.regions.map((region) => (
              <div
                key={region.name}
                className="bg-white rounded-2xl overflow-hidden border border-[#D9CABC]"
              >
                <div className="h-3 gradient-brand" />
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FDF6ED] flex items-center justify-center">
                      <MapPin className="text-[#C07A2B]" size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1A0F08] text-lg">{region.name}</h3>
                      <span className="text-sm text-[#6B5A4E]">{region.location}</span>
                    </div>
                  </div>

                  <dl className="space-y-3">
                    <div className="flex gap-3">
                      <dt className="text-xs font-semibold text-[#6B5A4E] w-24 shrink-0 pt-0.5">Độ cao</dt>
                      <dd className="text-sm text-[#1A0F08]">{region.altitude}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-xs font-semibold text-[#6B5A4E] w-24 shrink-0 pt-0.5">Giống</dt>
                      <dd className="text-sm text-[#1A0F08]">{region.variety}</dd>
                    </div>
                    <div className="flex gap-3">
                      <dt className="text-xs font-semibold text-[#6B5A4E] w-24 shrink-0 pt-0.5">Đặc trưng</dt>
                      <dd className="text-sm text-[#1A0F08] leading-relaxed">{region.character}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards & Certifications */}
      <section className="py-16 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">Tiêu chuẩn & Kiểm định</h2>
            <p className="text-[#EDE4D8]/60">Chất lượng được xác nhận, không tự công bố</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div>
              <h3 className="text-[#E8A84C] font-semibold mb-4 flex items-center gap-2">
                <Award size={16} /> Chứng nhận & kiểm nghiệm
              </h3>
              <ul className="space-y-3">
                {brandInfo.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#C07A2B] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#EDE4D8]/70">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[#E8A84C] font-semibold mb-4 flex items-center gap-2">
                <Shield size={16} /> Quy trình & Tiêu chuẩn
              </h3>
              <ul className="space-y-3">
                {brandInfo.standards.map((std) => (
                  <li key={std} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-[#C07A2B] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#EDE4D8]/70">{std}</span>
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
