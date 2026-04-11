'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Send, CheckCircle, Leaf } from 'lucide-react'
import Image from 'next/image'

const interests = [
  'Nhận tư vấn sản phẩm',
  'Tìm hiểu An Nhiên',
  'Xem chính sách phù hợp',
  'Trở thành đại sứ / CTV',
  'Hợp tác doanh nghiệp',
  'Khác',
]

function ContactForm() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: searchParams.get('product') ? 'Nhận tư vấn sản phẩm' : '',
    note: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="text-[#4A6741] mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-[#1A120A] mb-2 font-display italic">Đã nhận được thông tin!</h3>
        <p className="text-[#6B5A4E] text-sm leading-relaxed">
          Chúng tôi sẽ liên hệ lại trong vòng 24 giờ. Cảm ơn bạn đã quan tâm đến FCD.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold text-[#1A120A] mb-1.5 uppercase tracking-wide" htmlFor="contact-name">
            Họ và tên <span className="text-[#B87333]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            placeholder="Nguyễn Văn A"
            className="w-full px-4 py-3 rounded-xl border border-[#D9CABC] bg-[#FAF6F0] text-sm text-[#1A120A] placeholder:text-[#9C8472] focus:outline-none focus:border-[#B87333] focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-[#1A120A] mb-1.5 uppercase tracking-wide" htmlFor="contact-phone">
            Số điện thoại <span className="text-[#B87333]">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            placeholder="09xx xxx xxx"
            className="w-full px-4 py-3 rounded-xl border border-[#D9CABC] bg-[#FAF6F0] text-sm text-[#1A120A] placeholder:text-[#9C8472] focus:outline-none focus:border-[#B87333] focus:bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1A120A] mb-1.5 uppercase tracking-wide" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="email@example.com"
          className="w-full px-4 py-3 rounded-xl border border-[#D9CABC] bg-[#FAF6F0] text-sm text-[#1A120A] placeholder:text-[#9C8472] focus:outline-none focus:border-[#B87333] focus:bg-white transition-all"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1A120A] mb-2 uppercase tracking-wide">
          Nhu cầu quan tâm <span className="text-[#B87333]">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {interests.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setForm({ ...form, interest: opt })}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                form.interest === opt
                  ? 'bg-[#B87333] text-white border-[#B87333]'
                  : 'bg-white text-[#6B5A4E] border-[#D9CABC] hover:border-[#B87333] hover:text-[#7C3D18]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#1A120A] mb-1.5 uppercase tracking-wide" htmlFor="contact-note">
          Ghi chú
        </label>
        <textarea
          id="contact-note"
          rows={4}
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          placeholder="Thông tin thêm về nhu cầu của bạn…"
          className="w-full px-4 py-3 rounded-xl border border-[#D9CABC] bg-[#FAF6F0] text-sm text-[#1A120A] placeholder:text-[#9C8472] focus:outline-none focus:border-[#B87333] focus:bg-white transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all disabled:opacity-60 shadow-lg shadow-[#B87333]/30"
      >
        {loading ? (
          <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
        ) : (
          <Send size={16} />
        )}
        {loading ? 'Đang gửi…' : 'Gửi thông tin'}
      </button>
    </form>
  )
}

export default function LienHePage() {
  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/nature/coffee-cherry.png" alt="Cà phê Arabica Cầu Đất" fill className="object-cover object-center" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/90 via-[#2B1810]/78 to-[#FAF6F0]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-sage mb-4 inline-flex backdrop-blur-sm"><Leaf size={11} /> Liên hệ</span>
          <h1 className="font-display text-4xl sm:text-5xl text-white italic mb-4 leading-tight">
            Liên hệ & Tư vấn
          </h1>
          <p className="text-white/60 max-w-lg text-sm leading-relaxed">
            Điền form bên dưới — chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
          </p>
        </div>
      </section>

      <section className="py-12 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="card-nature p-8">
              <h2 className="font-display text-2xl italic text-[#1A120A] mb-6">Gửi thông tin</h2>
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              <div className="bg-[#2B1810] rounded-2xl p-7">
                <h3 className="font-display italic text-[#E3A558] text-xl mb-5">Chúng tôi hỗ trợ gì?</h3>
                <div className="space-y-4">
                  {[
                    { icon: '☕', title: 'Tư vấn sản phẩm', desc: 'Chọn gu phù hợp, so sánh dòng sản phẩm' },
                    { icon: '📋', title: 'Tư vấn chính sách', desc: 'Chiết khấu, combo, hỗ trợ thiết bị' },
                    { icon: '✨', title: 'Tìm hiểu An Nhiên', desc: 'Giải pháp phù hợp cho bạn hoặc doanh nghiệp' },
                    { icon: '🤝', title: 'Hợp tác đối tác', desc: 'Trở thành đại sứ, đại lý hoặc đối tác doanh nghiệp' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3 items-start">
                      <span className="text-xl shrink-0">{item.icon}</span>
                      <div>
                        <div className="font-semibold text-white/90 text-sm">{item.title}</div>
                        <div className="text-xs text-white/68 mt-0.5">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-nature p-6">
                <h3 className="font-semibold text-[#1A120A] mb-4 text-sm uppercase tracking-wide text-[#9C8472]">Thời gian hỗ trợ</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="nature-dot shrink-0" />
                    <span className="text-[#6B5A4E]">Giờ làm việc: T2–T7, 8:00–18:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#B87333] shrink-0" />
                    <span className="text-[#6B5A4E]">Phản hồi thông thường: trong 24 giờ</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E3A558] shrink-0" />
                    <span className="text-[#6B5A4E]">Đối tác ưu tiên: trong 4 giờ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
