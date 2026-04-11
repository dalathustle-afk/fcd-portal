import type { Metadata } from 'next'
import { Be_Vietnam_Pro, Spectral } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

/* ── Spectral — editorial serif, full Vietnamese Unicode ── */
const spectral = Spectral({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--ff-spectral',
})

/* ── Be Vietnam Pro — native Vietnamese sans-serif ── */
const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--ff-bevietnam',
})

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
    <html lang="vi" className={`${spectral.variable} ${beVietnamPro.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
