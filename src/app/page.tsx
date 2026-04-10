import Link from 'next/link'
import { ArrowRight, ShieldCheck, Coffee, MapPin, Users, Award } from 'lucide-react'
import { products } from '@/data/products'
import { partners } from '@/data/partners'
import { flavorCategories } from '@/content/flavors'
import { HeroSearch } from '@/components/search/HeroSearch'

/**
 * Homepage — reads from src/data/ (real data layer)
 * Featured products: B3 / A3 / CAO1 / O1 (official catalog)
 * Partners: from verified Excel list only
 */
export default function HomePage() {
  // Featured products = only the 4 official catalog entries marked featured: true
  const featuredProducts = products.filter((p) => p.featured)

  // Featured partners = verified from Excel
  const featuredPartners = partners.filter((p) => p.featured)

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C07A2B] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#6B2D0A] blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20 pb-16">
          <div className="badge badge-amber mb-6 mx-auto">
            ☕ Cà phê đặc sản Cầu Đất
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            FROMCAUDAT
            <span className="block gradient-text mt-1">An Nhiên từng ngụm</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#EDE4D8]/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Arabica Cầu Đất · Robusta Buôn Ma Thuột · Tiêu chuẩn SCA
            <br className="hidden sm:block" />
            Minh bạch từ vùng trồng đến tay bạn.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Link
              href="/an-nhien"
              id="cta-an-nhien"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all shadow-lg shadow-[#C07A2B]/30"
            >
              Chương trình An Nhiên <ArrowRight size={16} />
            </Link>
            <Link
              href="/san-pham"
              id="cta-san-pham"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
            >
              <Coffee size={16} /> Tra cứu sản phẩm &amp; giá
            </Link>
            <Link
              href="/chinh-sach"
              id="cta-chinh-sach"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-sm transition-all"
            >
              <ShieldCheck size={16} /> Xem chính sách
            </Link>
          </div>

          <HeroSearch />
        </div>
      </section>

      {/* ── VÌ SAO CHỌN FCD ──────────────────────────────────────── */}
      <section className="py-20 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A0F08] mb-3">Vì sao chọn FCD?</h2>
            <p className="text-[#6B5A4E] max-w-xl mx-auto">
              Từ vùng nguyên liệu đến thành phẩm — minh bạch, kiểm soát, đáng tin.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <MapPin className="text-[#C07A2B]" size={28} />,
                title: 'Vùng nguyên liệu',
                desc: 'Arabica Cầu Đất 1.500m+ và Robusta Buôn Ma Thuột — nguồn gốc xác minh được.',
              },
              {
                icon: <Award className="text-[#C07A2B]" size={28} />,
                title: 'Tiêu chuẩn SCA',
                desc: 'Quy trình rang xay và cupping theo định hướng Specialty Coffee Association.',
              },
              {
                icon: <Coffee className="text-[#C07A2B]" size={28} />,
                title: '5 Không cam kết',
                desc: 'Không trộn độn, không tẩm ướp, không khét cháy, không tạp hương, không nấm mốc.',
              },
              {
                icon: <Users className="text-[#C07A2B]" size={28} />,
                title: 'Đối tác doanh nghiệp',
                desc: 'Được tin dùng bởi ngân hàng, doanh nghiệp nước ngoài và tổ chức uy tín.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-[#D9CABC] card-hover">
                <div className="w-12 h-12 rounded-xl bg-[#FDF6ED] flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#1A0F08] mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B5A4E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AN NHIÊN CTA ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#1C0F07] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C07A2B] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge badge-amber mb-4 inline-flex">✨ Chương trình</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                An Nhiên cùng FCD
              </h2>
              <p className="text-[#EDE4D8]/70 mb-6 leading-relaxed">
                &ldquo;An&rdquo; — an toàn, an tâm, được bảo đảm bằng hệ kiểm soát chất lượng 10 bước.
                &ldquo;Nhìn&rdquo; — tự nhiên, nguyên bản, minh bạch theo cam kết 5 Không.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  '🛡️ Không trộn độn, không tẩm ướp hương liệu nhân tạo',
                  '✅ Kiểm soát 10 bước từ vùng trồng đến tay người dùng',
                  '☕ Combo 12kg cho văn phòng — linh hoạt gu, liên hệ để xác nhận giá',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="text-sm text-[#EDE4D8]/80">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/an-nhien"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C07A2B] hover:bg-[#E8A84C] text-[#1C0F07] font-semibold text-sm transition-all"
              >
                Tìm hiểu An Nhiên <ArrowRight size={16} />
              </Link>
            </div>

            {/* Proof stats — only verified facts */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10', label: 'Bước kiểm soát chất lượng', icon: '🔬' },
                { value: '5', label: 'Cam kết "Không"', icon: '🛡️' },
                { value: '2', label: 'Vùng nguyên liệu', icon: '🌿' },
                { value: '100%', label: 'Cà phê thật — không hương liệu', icon: '✅' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#3D1A0A]/60 border border-[#E8A84C]/15 rounded-xl p-5 text-center"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[#E8A84C] mb-1">{stat.value}</div>
                  <div className="text-xs text-[#EDE4D8]/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 GU CÀ PHÊ ──────────────────────────────────────────── */}
      <section className="py-20 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A0F08] mb-3">4 Gu cà phê FCD</h2>
            <p className="text-[#6B5A4E]">Tìm gu phù hợp với bạn</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {flavorCategories.map((cat) => (
              <Link
                key={cat.id}
                href={`/gu-ca-phe#${cat.slug}`}
                className="group block rounded-2xl overflow-hidden border border-[#D9CABC] bg-white card-hover"
              >
                <div className="h-2" style={{ backgroundColor: cat.color }} />
                <div className="p-5">
                  <span className="text-3xl mb-3 block">{cat.icon}</span>
                  <h3 className="font-bold text-[#1A0F08] mb-1.5 group-hover:text-[#6B2D0A] transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-[#6B5A4E] leading-relaxed mb-3">{cat.character}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.highlights.slice(0, 2).map((h) => (
                      <span key={h} className="badge badge-amber text-xs">{h}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gu-ca-phe"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6B2D0A] hover:text-[#C07A2B] transition-colors"
            >
              Xem chi tiết gu cà phê <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SẢN PHẨM NỔI BẬT ────────────────────────────────────── */}
      {/* Featured products: B3 / A3 / CAO1 / O1 from official catalog */}
      <section className="py-20 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-[#1A0F08] mb-2">Sản phẩm nổi bật</h2>
              <p className="text-[#6B5A4E]">4 gu chủ lực từ catalog chính thức</p>
            </div>
            <Link
              href="/san-pham"
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#6B2D0A] hover:text-[#C07A2B] transition-colors"
            >
              Xem tất cả <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => {
              const minPrice = product.prices[0]?.price ?? 0
              return (
                <Link
                  key={product.id}
                  href={`/san-pham/${product.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-[#D9CABC] card-hover"
                >
                  {/* Image placeholder — todoImage: true until real photos provided */}
                  <div className="h-40 flex flex-col items-center justify-center gap-2 bg-[#F5EDE0]">
                    <span className="text-5xl">☕</span>
                    <span className="text-xs font-bold text-[#6B2D0A] bg-[#E8A84C]/20 px-2 py-0.5 rounded-full">
                      {product.code}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="badge badge-amber text-xs">
                        {product.group === 'gu-dam-vi' && 'Đậm Vị'}
                        {product.group === 'gu-can-bang' && 'Cân Bằng'}
                        {product.group === 'gu-tinh-te' && 'Tinh Tế'}
                        {product.group === 'gu-nguyen-ban' && 'Nguyên Bản'}
                      </span>
                      <span className="text-xs text-[#6B5A4E] font-mono">{product.code}</span>
                    </div>
                    <h3 className="font-semibold text-[#1A0F08] mb-1 group-hover:text-[#6B2D0A] leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#6B5A4E] mb-3 line-clamp-2">{product.descriptionShort}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#F5EDE0]">
                      {minPrice > 0 ? (
                        <span className="font-bold text-[#6B2D0A]">
                          {minPrice.toLocaleString('vi-VN')}đ
                        </span>
                      ) : (
                        <span className="text-xs text-[#6B5A4E]">Liên hệ</span>
                      )}
                      <span className="text-xs text-[#6B5A4E]">250g</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-6 sm:hidden">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#6B2D0A]"
            >
              Xem tất cả sản phẩm <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── ĐỐI TÁC DOANH NGHIỆP ──────────────────────────────────── */}
      {/* Data from Danh-sach-kh-cong-ty.xlsx — verified entries only */}
      <section className="py-20 bg-[#FDF6ED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A0F08] mb-3">Đối tác doanh nghiệp</h2>
            <p className="text-[#6B5A4E] max-w-xl mx-auto">
              Được tin dùng bởi các doanh nghiệp, ngân hàng và tổ chức uy tín
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl border border-[#D9CABC] p-4 flex flex-col gap-2"
              >
                <div className="font-semibold text-[#1A0F08] text-sm leading-snug">
                  {partner.name}
                </div>
                {partner.category && (
                  <div className="text-xs text-[#6B5A4E]">{partner.category}</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/doi-tac"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#D9CABC] bg-white text-sm font-medium text-[#6B2D0A] hover:border-[#C07A2B] transition-all"
            >
              Xem tất cả đối tác <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ──────────────────────────────────────────── */}
      <section className="py-14 bg-[#3D1A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/bang-gia', icon: '📋', title: 'Bảng giá niêm yết', desc: 'Giá chính thức từ 10/02/2026' },
              { href: '/chinh-sach', icon: '📜', title: 'Thư viện chính sách', desc: 'Chiết khấu, hỗ trợ, đại sứ CTV' },
              { href: '/lien-he', icon: '💬', title: 'Liên hệ tư vấn', desc: 'Nhận tư vấn sản phẩm phù hợp' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 p-5 rounded-xl bg-[#1C0F07]/60 border border-[#E8A84C]/15 hover:border-[#E8A84C]/30 group transition-all"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-[#EDE4D8] group-hover:text-[#E8A84C] transition-colors text-sm">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#EDE4D8]/50">{item.desc}</div>
                </div>
                <ArrowRight size={14} className="ml-auto text-[#E8A84C]/40 group-hover:text-[#E8A84C] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
