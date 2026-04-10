'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
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
    ],
  },
  { href: '/chinh-sach', label: 'Chính sách' },
  { href: '/doi-tac', label: 'Đối tác' },
  { href: '/lien-he', label: 'Liên hệ' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#1C0F07]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-[#E8A84C]/10'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[#E8A84C] font-bold text-xl tracking-tight">FCD</span>
          <span className="hidden sm:block h-5 w-px bg-[#E8A84C]/30" />
          <span className="hidden sm:block text-[#EDE4D8]/60 text-xs font-medium tracking-wider uppercase">
            FROMCAUDAT
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <li key={link.label} className="relative">
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#EDE4D8]/80 hover:text-[#E8A84C] transition-colors rounded-md"
                  onClick={() => setDropdownOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setDropdownOpen(false), 150)}
                >
                  {link.label}
                  <ChevronDown
                    size={14}
                    className={clsx('transition-transform', dropdownOpen && 'rotate-180')}
                  />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-40 rounded-xl bg-[#1C0F07] border border-[#E8A84C]/15 shadow-xl shadow-black/30 overflow-hidden">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-[#EDE4D8]/80 hover:text-[#E8A84C] hover:bg-[#E8A84C]/5 transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href!}
                  className={clsx(
                    'px-3 py-2 text-sm font-medium rounded-md transition-all',
                    link.highlight
                      ? 'text-[#E8A84C] font-semibold hover:bg-[#E8A84C]/10'
                      : 'text-[#EDE4D8]/80 hover:text-[#E8A84C]'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/tim-kiem"
            aria-label="Tìm kiếm"
            className="p-2 rounded-lg text-[#EDE4D8]/60 hover:text-[#E8A84C] hover:bg-[#E8A84C]/10 transition-all"
          >
            <Search size={18} />
          </Link>
          <Link
            href="/lien-he"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] text-sm font-semibold transition-all"
          >
            Liên hệ tư vấn
          </Link>
          <button
            className="lg:hidden p-2 rounded-lg text-[#EDE4D8]/60 hover:text-[#E8A84C]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1C0F07]/98 backdrop-blur-xl border-t border-[#E8A84C]/10 px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label}>
                <div className="px-3 py-1.5 text-xs font-semibold text-[#E8A84C]/60 uppercase tracking-wider">
                  {link.label}
                </div>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-3 py-2.5 text-sm text-[#EDE4D8]/80 hover:text-[#E8A84C] transition-colors rounded-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    — {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href!}
                className={clsx(
                  'block px-3 py-2.5 text-sm rounded-lg transition-colors',
                  link.highlight
                    ? 'text-[#E8A84C] font-semibold'
                    : 'text-[#EDE4D8]/80 hover:text-[#E8A84C]'
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}
          <div className="pt-3 border-t border-[#E8A84C]/10">
            <Link
              href="/lien-he"
              className="flex w-full items-center justify-center py-3 rounded-xl bg-[#C07A2B] text-[#1C0F07] text-sm font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
