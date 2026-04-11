'use client'

import type { Metadata } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

// Tab data
const tabs = [
  {
    id: 'blend',
    label: 'Cà Phê Blend là gì?',
    icon: '🫘',
    images: [
      { src: '/images/nature/ca-phe-blend-la-gi-1.jpg', alt: 'Cà phê blend - phần 1' },
      { src: '/images/nature/ca-phe-blend-la-gi-2.jpg', alt: 'Cà phê blend - phần 2' },
      { src: '/images/nature/ca-phe-blend-la-gi-3.jpg', alt: 'Cà phê blend - phần 3' },
      { src: '/images/nature/ca-phe-blend-la-gi-4.jpg', alt: 'Cà phê blend - phần 4' },
    ],
    description: 'Blend cà phê là nghệ thuật kết hợp các loại hạt từ các vùng trồng khác nhau để tạo ra hương vị cân bằng và đặc trưng.',
  },
  {
    id: 'sach',
    label: 'Cà Phê Sạch là gì?',
    icon: '✨',
    images: [
      { src: '/images/nature/ca-phe-sach-la-gi.jpg', alt: 'Cà phê sạch là gì' },
    ],
    description: 'Cà phê sạch là cà phê không chứa hóa chất độc hại, không tẩm ướp hương liệu nhân tạo — đúng nghĩa thuần khiết từ hạt.',
  },
  {
    id: 'khoi-nghiep',
    label: 'Khởi Nghiệp cùng An Nhiên',
    icon: '🚀',
    images: [
      { src: '/images/nature/khoi-nghiep-an-nhien.jpg', alt: 'Khởi nghiệp cùng An Nhiên' },
    ],
    description: 'Chỉ từ 2.612.000đ — bắt đầu hành trình kinh doanh cà phê đặc sản cùng FCD với chính sách hỗ trợ toàn diện.',
  },
]

export default function CoTheBanChuaBietPage() {
  const [activeTab, setActiveTab] = useState('blend')
  const [activeImage, setActiveImage] = useState(0)

  const currentTab = tabs.find((t) => t.id === activeTab) ?? tabs[0]

  const handleTabChange = (id: string) => {
    setActiveTab(id)
    setActiveImage(0)
  }

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê Arabica Cầu Đất" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/90 via-[#2B1810]/80 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-5 inline-flex">💡 Kiến thức cà phê</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white italic mb-4 leading-tight">
            Có Thể Bạn Chưa Biết
          </h1>
          <p className="text-white/60 max-w-xl text-sm leading-relaxed">
            Những kiến thức cơ bản về cà phê đặc sản mà ít ai nói thật — FCD chia sẻ minh bạch để bạn uống đúng, uống ngon.
          </p>
        </div>
      </section>

      {/* ══ TAB CONTENT ═══════════════════════════════════════════ */}
      <section className="py-12 section-cream texture-leaf min-h-[70vh]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Tab navigation */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-[#D9CABC] pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#2B1810] text-[#E3A558] shadow-md'
                    : 'bg-white border border-[#D9CABC] text-[#6B5A4E] hover:border-[#B87333] hover:text-[#7C3D18]'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="grid lg:grid-cols-2 gap-10 items-start">

            {/* Images */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="rounded-3xl overflow-hidden border border-[#D9CABC] shadow-lg bg-[#F5EDE0] aspect-[4/3] relative">
                <Image
                  key={`${activeTab}-${activeImage}`}
                  src={currentTab.images[activeImage].src}
                  alt={currentTab.images[activeImage].alt}
                  fill
                  className="object-contain object-center p-2 animate-fade-in"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Thumbnail strip (if multiple images) */}
              {currentTab.images.length > 1 && (
                <div className="flex gap-3 flex-wrap">
                  {currentTab.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === idx
                          ? 'border-[#B87333] shadow-md'
                          : 'border-[#D9CABC] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Navigation arrows for multi-image */}
              {currentTab.images.length > 1 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveImage((prev) => Math.max(0, prev - 1))}
                    disabled={activeImage === 0}
                    className="flex-1 py-2 rounded-xl border border-[#D9CABC] text-sm text-[#6B5A4E] hover:border-[#B87333] disabled:opacity-30 transition-all"
                  >
                    ← Trước
                  </button>
                  <span className="px-4 py-2 text-xs text-[#9C8472] flex items-center">
                    {activeImage + 1} / {currentTab.images.length}
                  </span>
                  <button
                    onClick={() => setActiveImage((prev) => Math.min(currentTab.images.length - 1, prev + 1))}
                    disabled={activeImage === currentTab.images.length - 1}
                    className="flex-1 py-2 rounded-xl border border-[#D9CABC] text-sm text-[#6B5A4E] hover:border-[#B87333] disabled:opacity-30 transition-all"
                  >
                    Sau →
                  </button>
                </div>
              )}
            </div>

            {/* Info panel */}
            <div className="space-y-6">
              <div>
                <div className="text-4xl mb-3">{currentTab.icon}</div>
                <h2 className="font-display text-3xl text-[#1A120A] italic mb-4">{currentTab.label}</h2>
                <p className="text-[#6B5A4E] leading-relaxed text-sm">{currentTab.description}</p>
              </div>

              {/* CTA based on tab */}
              {activeTab === 'khoi-nghiep' && (
                <div className="rounded-2xl bg-gradient-to-r from-[#3D2412] to-[#2B1810] border border-[#E3A558]/40 p-5">
                  <div className="text-[#E3A558] font-bold mb-2">💡 Trả trước 50% — chỉ 2.612.000đ</div>
                  <p className="text-white/65 text-xs leading-relaxed mb-4">
                    Nhận ngay máy pha cà phê espresso 20 bar và bắt đầu hành trình An Nhiên ngay hôm nay.
                  </p>
                  <Link
                    href="/lien-he"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all"
                  >
                    Đăng ký tư vấn →
                  </Link>
                </div>
              )}

              {activeTab === 'sach' && (
                <div className="rounded-2xl bg-[#EDF3EC] border border-[#6B8C6B]/30 p-5">
                  <div className="text-[#2D4A2D] font-bold mb-2">✅ FCD đạt chuẩn Specialty Grade</div>
                  <p className="text-[#4A6741] text-xs leading-relaxed mb-4">
                    100% không lỗi sơ cấp — không độc tố — được kiểm nghiệm độc lập theo SCA + FDA.
                  </p>
                  <Link
                    href="/quy-trinh-chat-luong"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4A6741] hover:bg-[#2D4A2D] text-white font-semibold text-sm transition-all"
                  >
                    Xem quy trình chất lượng →
                  </Link>
                </div>
              )}

              {activeTab === 'blend' && (
                <div className="rounded-2xl bg-[#FDF3E8] border border-[#B87333]/30 p-5">
                  <div className="text-[#7C3D18] font-bold mb-2">☕ FCD dùng công thức blend nào?</div>
                  <p className="text-[#5C3317] text-xs leading-relaxed mb-4">
                    100% Arabica Cầu Đất hoặc blend Arabica + Robusta theo tỉ lệ chuẩn SCA — không pha tạp ngũ cốc.
                  </p>
                  <Link
                    href="/gu-ca-phe"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all"
                  >
                    Khám phá các gu →
                  </Link>
                </div>
              )}

              {/* All tabs nav */}
              <div className="pt-4 border-t border-[#D9CABC]">
                <p className="text-xs text-[#9C8472] mb-3 uppercase tracking-wide font-semibold">Chủ đề khác</p>
                <div className="space-y-2">
                  {tabs.filter((t) => t.id !== activeTab).map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleTabChange(t.id)}
                      className="w-full text-left px-4 py-3 rounded-xl border border-[#D9CABC] bg-white hover:border-[#B87333] hover:bg-[#FDF3E8] transition-all flex items-center gap-3"
                    >
                      <span className="text-xl">{t.icon}</span>
                      <span className="text-sm font-medium text-[#1A120A]">{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
