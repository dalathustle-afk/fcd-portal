'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Send, CheckCircle } from 'lucide-react'

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
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle size={48} className="text-[#166534] mx-auto mb-4" />
        <h3 className="text-xl font-bold text-[#1A0F08] mb-2">Đã nhận được thông tin!</h3>
        <p className="text-[#6B5A4E]">
          Chúng tôi sẽ liên hệ lại trong vòng 24 giờ. Cảm ơn bạn đã quan tâm đến FCD.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#1A0F08] mb-1.5" htmlFor="contact-name">
            Họ và tên <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            placeholder="Nguyễn Văn A"
            className="w-full px-4 py-3 rounded-xl border border-[#D9CABC] text-sm text-[#1A0F08] placeholder:text-[#6B5A4E]/60 focus:outline-none focus:border-[#C07A2B] transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#1A0F08] mb-1.5" htmlFor="contact-phone">
            Số điện thoại <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
            placeholder="09xx xxx xxx"
            className="w-full px-4 py-3 rounded-xl border border-[#D9CABC] text-sm text-[#1A0F08] placeholder:text-[#6B5A4E]/60 focus:outline-none focus:border-[#C07A2B] transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A0F08] mb-1.5" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="email@example.com"
          className="w-full px-4 py-3 rounded-xl border border-[#D9CABC] text-sm text-[#1A0F08] placeholder:text-[#6B5A4E]/60 focus:outline-none focus:border-[#C07A2B] transition-colors"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A0F08] mb-2">
          Nhu cầu quan tâm <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {interests.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setForm({ ...form, interest: opt })}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                form.interest === opt
                  ? 'bg-[#6B2D0A] text-white border-[#6B2D0A]'
                  : 'bg-white text-[#6B5A4E] border-[#D9CABC] hover:border-[#C07A2B]'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1A0F08] mb-1.5" htmlFor="contact-note">
          Ghi chú
        </label>
        <textarea
          id="contact-note"
          rows={4}
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          placeholder="Thông tin thêm về nhu cầu của bạn…"
          className="w-full px-4 py-3 rounded-xl border border-[#D9CABC] text-sm text-[#1A0F08] placeholder:text-[#6B5A4E]/60 focus:outline-none focus:border-[#C07A2B] transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all disabled:opacity-60"
      >
        {loading ? (
          <span className="animate-spin w-4 h-4 border-2 border-[#1C0F07] border-t-transparent rounded-full" />
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
      <section className="pt-24 pb-10 bg-[#1C0F07]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <span className="badge badge-amber mb-4 inline-flex">💬 Liên hệ</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">Liên hệ & Tư vấn</h1>
          <p className="text-[#EDE4D8]/60 max-w-lg">
            Điền form bên dưới — chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl border border-[#D9CABC] p-8">
              <h2 className="font-bold text-[#1A0F08] text-lg mb-6">Gửi thông tin</h2>
              <Suspense>
                <ContactForm />
              </Suspense>
            </div>

            {/* Info sidebar */}
            <div className="space-y-6">
              <div className="bg-[#1C0F07] rounded-2xl p-7">
                <h3 className="font-bold text-white mb-5">Chúng tôi hỗ trợ gì?</h3>
                <div className="space-y-4">
                  {[
                    { icon: '☕', title: 'Tư vấn sản phẩm', desc: 'Chọn gu phù hợp, so sánh dòng sản phẩm' },
                    { icon: '📋', title: 'Tư vấn chính sách', desc: 'Chiết khấu, combo, hỗ trợ thiết bị' },
                    { icon: '✨', title: 'Tìm hiểu An Nhiên', desc: 'Giải pháp phù hợp cho bạn hoặc doanh nghiệp' },
                    { icon: '🤝', title: 'Hợp tác đối tác', desc: 'Trở thành đại sứ, đại lý hoặc đối tác doanh nghiệp' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-medium text-[#EDE4D8] text-sm">{item.title}</div>
                        <div className="text-xs text-[#EDE4D8]/50">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#D9CABC] p-6">
                <h3 className="font-semibold text-[#1A0F08] mb-3">Thời gian phản hồi</h3>
                <div className="space-y-2 text-sm text-[#6B5A4E]">
                  <div>🕘 Giờ làm việc: T2 – T7, 8:00 – 18:00</div>
                  <div>⚡ Phản hồi thông thường: trong 24 giờ</div>
                  <div>🌟 Đối tác ưu tiên: trong 4 giờ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
