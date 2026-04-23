'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import type { TenStep } from '@/data/an-nhien'

const stepImgMap: Record<number, string> = {
  1:  '/images/nature/qtb-1.jpg',
  2:  '/images/nature/qtb-2.jpg',
  3:  '/images/nature/qtb-3.jpg',
  4:  '/images/nature/qtb4.jpg',
  5:  '/images/nature/qtb-5.jpg',
  6:  '/images/nature/qtb-6.jpg',
  7:  '/images/nature/qtb-7.jpg',
  8:  '/images/nature/qtb-8.jpg',
  9:  '/images/nature/qtb-9.jpg',
  10: '/images/nature/qtb-10.jpg',
}

interface Props {
  steps: TenStep[]
}

export default function QualityStepsSection({ steps }: Props) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  // Đóng bằng phím ESC
  useEffect(() => {
    if (!lightboxSrc) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxSrc(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightboxSrc])

  // Khoá scroll body khi lightbox mở
  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightboxSrc])

  return (
    <>
      {/* ── 10 Step cards ── */}
      <div className="space-y-10">
        {steps.map((step, i) => {
          const imgSrc = stepImgMap[step.step]
          const isEven = i % 2 === 0
          return (
            <div
              key={step.step}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`flex flex-col md:flex-row md:items-stretch ${!isEven ? 'md:flex-row-reverse' : ''}`}>

                {/* ── Image column: click → lightbox ── */}
                <button
                  type="button"
                  onClick={() => setLightboxSrc(imgSrc)}
                  aria-label={`Phóng to ảnh Bước ${step.step}: ${step.title}`}
                  className="md:w-2/5 shrink-0 h-64 md:h-auto md:min-h-[280px] relative bg-[#1A120A] overflow-hidden group block cursor-zoom-in border-0 p-0 text-left"
                >
                  <Image
                    src={imgSrc}
                    alt={`Bước ${step.step}: ${step.title}`}
                    fill
                    className="object-contain group-hover:scale-[1.04] transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    loading={i < 3 ? 'eager' : 'lazy'}
                  />
                  {/* Zoom hint khi hover */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-white text-[10px] bg-black/70 px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1 shadow">
                      🔍 Nhấn để phóng to
                    </span>
                  </div>
                </button>

                {/* ── Text column ── */}
                <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                  {/* Step badge */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md mb-4 shrink-0
                    ${step.step <= 5
                      ? 'bg-gradient-to-br from-amber-500 to-amber-600'
                      : 'bg-gradient-to-br from-emerald-500 to-emerald-600'
                    }`}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-3 leading-snug">
                    {step.icon} {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{step.description}</p>
                  <div className="flex items-center gap-2 mt-auto">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${step.step <= 5 ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                    <span className={`text-xs font-medium italic ${step.step <= 5 ? 'text-amber-700' : 'text-emerald-700'}`}>
                      {step.proof}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          )
        })}
      </div>

      {/* ── Lightbox modal ── */}
      {lightboxSrc && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ảnh phóng to"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setLightboxSrc(null)}
        >
          {/* Image wrapper — ngăn click vào ảnh đóng modal */}
          <div
            className="relative w-full h-full max-w-5xl p-8 md:p-12 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt="Phóng to ảnh kiểm soát chất lượng"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Nút đóng X */}
          <button
            type="button"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm flex items-center justify-center text-white transition-colors shadow-lg"
            onClick={() => setLightboxSrc(null)}
            aria-label="Đóng ảnh (ESC)"
          >
            <X size={22} />
          </button>

          {/* Hint */}
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs pointer-events-none select-none">
            Nhấn vào nền hoặc ✕ để đóng · ESC
          </p>
        </div>
      )}
    </>
  )
}
