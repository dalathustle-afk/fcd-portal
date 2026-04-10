import Link from 'next/link'
import { MapPin, MessageSquare } from 'lucide-react'
import { siteData } from '@/data/site'

const footerLinks = [
  {
    title: 'Thương hiệu',
    links: [
      { href: '/gioi-thieu', label: 'Giới thiệu FCD' },
      { href: '/an-nhien', label: 'Chương trình An Nhiên' },
      { href: '/doi-tac', label: 'Đối tác đồng hành' },
    ],
  },
  {
    title: 'Tra cứu',
    links: [
      { href: '/san-pham', label: 'Sản phẩm' },
      { href: '/bang-gia', label: 'Bảng giá niêm yết' },
      { href: '/gu-ca-phe', label: 'Gu cà phê' },
      { href: '/chinh-sach', label: 'Chính sách' },
    ],
  },
  {
    title: 'Hỗ trợ',
    links: [
      { href: '/lien-he', label: 'Liên hệ tư vấn' },
      { href: '/tim-kiem', label: 'Tìm kiếm' },
      { href: '/chinh-sach/chinh-sach-ho-tro-san-pham', label: 'Đổi trả sản phẩm' },
    ],
  },
]

export function Footer() {
  const { contact, social } = siteData

  return (
    <footer className="bg-[#1C0F07] text-[#EDE4D8]/70 border-t border-[#E8A84C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#E8A84C] font-bold text-2xl">FCD</span>
              <span className="text-[#EDE4D8]/40 text-xs font-medium tracking-widest uppercase">FROMCAUDAT</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Cà phê đặc sản từ Cầu Đất — chất lượng minh bạch, trải nghiệm an nhiên.
            </p>

            <div className="space-y-2 text-sm">
              {/* Address — verified */}
              {contact.address && (
                <div className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 text-[#C07A2B] shrink-0" />
                  <span>{contact.address}</span>
                </div>
              )}

              {/* Phone — only show if verified */}
              {contact.showPhone && contact.phone && (
                <div className="flex items-center gap-2">
                  <a href={`tel:${contact.phone}`} className="hover:text-[#E8A84C] transition-colors">
                    {contact.phone}
                  </a>
                </div>
              )}

              {/* Email — only show if verified */}
              {contact.showEmail && contact.email && (
                <div className="flex items-center gap-2">
                  <a href={`mailto:${contact.email}`} className="hover:text-[#E8A84C] transition-colors">
                    {contact.email}
                  </a>
                </div>
              )}

              {/* Fallback if no phone/email confirmed */}
              {!contact.showPhone && !contact.showEmail && (
                <div className="flex items-center gap-2">
                  <MessageSquare size={14} className="text-[#C07A2B]" />
                  <Link href="/lien-he" className="hover:text-[#E8A84C] transition-colors">
                    {contact.contactFallbackLabel}
                  </Link>
                </div>
              )}
            </div>

            {/* Social links — only render if URL is confirmed */}
            {(social.facebook || social.zalo) && (
              <div className="flex gap-3 mt-5">
                {social.facebook && (
                  <a
                    href={social.facebook}
                    aria-label="Facebook FCD"
                    className="p-2 rounded-lg bg-[#E8A84C]/10 hover:bg-[#E8A84C]/20 text-[#E8A84C] transition-colors text-xs font-semibold"
                  >
                    FB
                  </a>
                )}
                {social.zalo && (
                  <a
                    href={social.zalo}
                    aria-label="Zalo FCD"
                    className="p-2 rounded-lg bg-[#E8A84C]/10 hover:bg-[#E8A84C]/20 text-[#E8A84C] transition-colors text-xs font-semibold"
                  >
                    Zalo
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Nav columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[#EDE4D8] font-semibold text-sm mb-4 tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-[#E8A84C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#E8A84C]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#EDE4D8]/40">
            © {new Date().getFullYear()} FROMCAUDAT. Mọi quyền được bảo lưu.
          </p>
          <p className="text-xs text-[#EDE4D8]/40">
            Giá niêm yết có thể thay đổi — vui lòng xác nhận trước khi đặt hàng.
          </p>
        </div>
      </div>
    </footer>
  )
}
