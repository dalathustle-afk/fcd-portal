'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ZoomIn, X } from 'lucide-react'

interface Props {
  src: string
  alt: string
}

/**
 * ProductImageViewer
 * - Hiển thị ảnh đầy đủ, không crop (object-contain)
 * - Click để zoom lightbox toàn màn hình
 */
export function ProductImageViewer({ src, alt }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      {/* Main image card */}
      <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
        {/* Image container — tall enough to show full bag */}
        <div
          className="relative w-full cursor-zoom-in group"
          style={{ minHeight: '480px' }}
          onClick={() => setLightboxOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setLightboxOpen(true)}
          aria-label="Phóng to ảnh sản phẩm"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          {/* Zoom hint */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-[#1C0F07]/70 text-[#E8A84C] text-xs px-2.5 py-1.5 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn size={12} />
            <span>Phóng to</span>
          </div>
        </div>
      </div>

      {/* Lightbox overlay */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setLightboxOpen(false)}
            aria-label="Đóng"
          >
            <X size={22} />
          </button>

          {/* Full-size image */}
          <div
            className="relative max-w-3xl w-full max-h-[90vh]"
            style={{ aspectRatio: 'auto' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1400}
              className="object-contain w-full h-auto max-h-[88vh] rounded-xl shadow-2xl"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-xs">
            Click bên ngoài ảnh để đóng
          </p>
        </div>
      )}
    </>
  )
}
