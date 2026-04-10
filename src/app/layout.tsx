import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'FCD — FROMCAUDAT | Cà phê đặc sản Cầu Đất',
    template: '%s | FCD FROMCAUDAT',
  },
  description:
    'Thương hiệu cà phê đặc sản FROMCAUDAT (FCD) — Arabica Cầu Đất, Robusta Buôn Ma Thuột. Tra cứu sản phẩm, bảng giá, chính sách và chương trình An Nhiên cùng FCD.',
  keywords: ['FCD', 'FROMCAUDAT', 'cà phê Cầu Đất', 'cà phê đặc sản', 'An Nhiên', 'Arabica', 'specialty coffee'],
  openGraph: {
    title: 'FCD — FROMCAUDAT | Cà phê đặc sản Cầu Đất',
    description: 'Thông tin chính thức về thương hiệu cà phê FCD — sản phẩm, giá, chính sách, chương trình An Nhiên.',
    locale: 'vi_VN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
