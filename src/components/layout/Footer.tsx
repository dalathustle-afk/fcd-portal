import Link from 'next/link'
import { MapPin, MessageSquare, Leaf } from 'lucide-react'
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
      { href: '/co-the-ban-chua-biet', label: 'Có Thể Bạn Chưa Biết' },
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
    <footer className="bg-[#FAF7F2] text-[#4A3428] border-t border-[#D5C4B4]">

      {/* Leaf divider top */}
      <div className="divider-leaf opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Leaf size={16} className="text-[#6B8C6B]" />
              <span className="font-display text-[#E3A558] text-2xl italic">FCD</span>
              <span className="text-[#4A3428]/70 text-[10px] font-medium tracking-widest uppercase">FROMCAUDAT</span>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-[#6B5442] font-light">
              Cà phê đặc sản từ Cầu Đất — chất lượng minh bạch, trải nghiệm an nhiên.
            </p>

            <div className="space-y-2 text-sm">
              {contact.address && (
                <div className="flex items-start gap-2">
                  <MapPin size={13} className="mt-0.5 text-[#B87333] shrink-0" />
                  <span className="text-xs text-[#6B5442] leading-relaxed">{contact.address}</span>
                </div>
              )}
              {contact.showPhone && contact.phone && (
                <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-xs text-[#6B5442] hover:text-[#B87333] transition-colors">
                  {contact.phone}
                </a>
              )}
              {contact.showEmail && contact.email && (
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-xs text-[#6B5442] hover:text-[#B87333] transition-colors">
                  {contact.email}
                </a>
              )}
              {!contact.showPhone && !contact.showEmail && (
                <div className="flex items-center gap-2">
                  <MessageSquare size={13} className="text-[#B87333]" />
                  <Link href="/lien-he" className="text-xs text-[#6B5442] hover:text-[#B87333] transition-colors">
                    {contact.contactFallbackLabel}
                  </Link>
                </div>
              )}
            </div>

            {(social.facebook || social.zalo) && (
              <div className="flex gap-2 mt-5">
                {social.facebook && (
                  <a href={social.facebook} aria-label="Facebook FCD"
                    className="px-3 py-1.5 rounded-full bg-[#F5EDE0] hover:bg-[#E3A558]/15 text-[#7C3D18] hover:text-[#B87333] transition-colors text-xs font-semibold border border-[#D5C4B4]">
                    FB
                  </a>
                )}
                {social.zalo && (
                  <a href={social.zalo} aria-label="Zalo FCD"
                    className="px-3 py-1.5 rounded-full bg-[#F5EDE0] hover:bg-[#E3A558]/15 text-[#7C3D18] hover:text-[#B87333] transition-colors text-xs font-semibold border border-[#D5C4B4]">
                    Zalo
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Nav columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[#2B1810] font-semibold text-xs mb-4 tracking-widest uppercase">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-xs text-[#6B5442] hover:text-[#B87333] transition-colors leading-relaxed">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-[#D5C4B4] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#9C8472]">&copy; {new Date().getFullYear()} FROMCAUDAT. Mọi quyền được bảo lưu.</p>
          <p className="text-[10px] text-[#9C8472]">Giá niêm yết có thể thay đổi — vui lòng xác nhận trước khi đặt hàng.</p>
        </div>
      </div>
    </footer>
  )
}
