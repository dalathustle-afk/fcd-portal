import Link from 'next/link'
import { Coffee } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-hero flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl mb-6">☕</div>
        <h1 className="text-4xl font-bold text-white mb-3">404</h1>
        <p className="text-[#EDE4D8]/70 mb-2 text-lg">Trang không tồn tại</p>
        <p className="text-[#EDE4D8]/50 text-sm mb-8">
          Trang bạn đang tìm không có hoặc đã di chuyển.
          Có thể bạn muốn tra cứu sản phẩm hoặc chính sách?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
          >
            Về trang chủ
          </Link>
          <Link
            href="/tim-kiem"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
          >
            Tìm kiếm
          </Link>
        </div>
      </div>
    </div>
  )
}
