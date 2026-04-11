'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Search, Menu, X, ChevronDown } from 'lucide-react'
import { clsx } from 'clsx'

const navLinks = [
  { href: '/gioi-thieu', label: 'Giới thiệu' },
  { href: '/an-nhien', label: 'An Nhiên', highlight: true },
  {
    label: 'Tra cứu',
    children: [
      { href: '/san-pham', label: 'Sản phẩm' },
      { href: '/bang-gia', label: 'Bảng giá' },
      { href: '/gu-ca-phe', label: 'Gu cà phê' },
      { href: '/co-the-ban-chua-biet', label: 'Có Thể Bạn Chưa Biết' },
    ],
  },
  {
    label: 'Chất lượng',
    children: [
      { href: '/quy-trinh-chat-luong', label: 'Quy trình chất lượng' },
      { href: '/chung-nhan', label: 'Chứng nhận' },
    ],
  },
  { href: '/chinh-sach', label: 'Chính sách' },
  { href: '/doi-tac', label: 'Đối tác' },
  { href: '/lien-he', label: 'Liên hệ' },
]

export function Navbar() {
  const [scrolled, setScrolled]       = useState(false)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-400',
        scrolled
          ? 'bg-[#2B1810]/96 backdrop-blur-xl shadow-lg border-b border-[#E3A558]/08'
          : 'bg-gradient-to-b from-[#2B1810]/60 to-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-[#E3A558]/25 shrink-0 transition-all group-hover:border-[#E3A558]/50 group-hover:shadow-sm group-hover:shadow-[#E3A558]/20">
            <Image
              src="/images/nature/logo-from-cau-dat.jpg"
              alt="FCD FROMCAUDAT"
              width={36}
              height={36}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[#E8A84C] font-bold text-sm tracking-tight transition-colors group-hover:text-[#F0C98A]">FROMCAUDAT</span>
            <span className="text-white/55 text-[9px] font-medium tracking-widest uppercase">Cà phê đặc sản SCA</span>
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <ul ref={navRef} className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/82 hover:text-[#E8A84C] transition-colors duration-200 rounded-md group"
                  onClick={() => setOpenDropdown((prev) => prev === link.label ? null : link.label)}
                >
                  {link.label}
                  <ChevronDown
                    size={13}
                    className={clsx('transition-transform duration-200 text-white/62 group-hover:text-[#E8A84C]/60', openDropdown === link.label && 'rotate-180')}
                  />
                  {/* Underline hover effect */}
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-[#E8A84C]/0 group-hover:bg-[#E8A84C]/30 transition-all duration-200 rounded-full" />
                </button>
                {openDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-2 min-w-[190px] rounded-2xl bg-[#2B1810]/98 border border-[#E3A558]/12 shadow-xl overflow-hidden z-50 animate-fade-in-slow">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-white/80 hover:text-[#E8A84C] hover:bg-[#E8A84C]/08 transition-all duration-150 whitespace-nowrap"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href!}
                  className={clsx(
                    'px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 block',
                    link.highlight
                      ? 'text-[#E8A84C] font-semibold hover:text-[#F0C98A]'
                      : 'text-white/82 hover:text-[#E8A84C]'
                  )}
                >
                  {link.label}
                </Link>
                {/* Animated underline */}
                <span className="absolute bottom-1 left-3 right-3 h-px scale-x-0 group-hover:scale-x-100 transition-transform duration-250 origin-left rounded-full"
                  style={{ background: link.highlight ? 'rgba(227,165,88,0.5)' : 'rgba(227,165,88,0.25)' }} />
              </li>
            )
          )}
        </ul>

        {/* ── Actions ── */}
        <div className="flex items-center gap-1.5">
          <Link
            href="/tim-kiem"
            aria-label="Tìm kiếm"
            className="p-2 rounded-lg text-white/72 hover:text-[#E8A84C] hover:bg-[#E8A84C]/08 transition-all duration-200"
          >
            <Search size={17} />
          </Link>
          <Link
            href="/lien-he"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white text-xs font-semibold transition-all duration-220 shadow-sm shadow-[#B87333]/30"
          >
            Liên hệ tư vấn
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg text-white/78 hover:text-[#E8A84C] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu — full overlay ── */}
      <div
        className={clsx(
          'lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300',
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-[#2B1810]/97 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className="relative h-full overflow-y-auto px-5 pt-6 pb-24 space-y-1">
          {navLinks.map((link, idx) =>
            link.children ? (
              <div key={link.label} className="animate-fade-in" style={{ animationDelay: `${idx * 50}ms` }}>
                <div className="px-3 pt-4 pb-1.5 text-[10px] font-semibold text-[#E8A84C]/50 uppercase tracking-[0.12em]">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-3 py-3 text-base text-white/70 hover:text-[#E8A84C] hover:bg-[#E8A84C]/05 transition-colors rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={clsx(
                  'block px-3 py-3 text-base rounded-xl transition-colors animate-fade-in',
                  link.highlight
                    ? 'text-[#E8A84C] font-semibold hover:bg-[#E8A84C]/08'
                    : 'text-white/75 hover:text-white hover:bg-white/05'
                )}
                style={{ animationDelay: `${idx * 50}ms` }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          {/* Mobile CTA */}
          <div className="pt-6">
            <Link
              href="/lien-he"
              className="btn-copper w-full flex items-center justify-center gap-2 py-3.5 text-sm rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
