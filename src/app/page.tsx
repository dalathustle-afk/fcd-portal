import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Leaf, MapPin, ShieldCheck, Coffee, Users } from 'lucide-react'
import { products } from '@/data/products'
import { partners } from '@/data/partners'
import { flavorCategories } from '@/content/flavors'
import { HeroSearch } from '@/components/search/HeroSearch'

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured)
  const featuredPartners = partners.filter((p) => p.featured)

  return (
    <>
      {/* ══ HERO — Cinematic Cầu Đất ══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">

        {/* ── Cinematic video background ── */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay muted loop playsInline
            poster="/images/nature/hero-caudat.png"
            className="absolute inset-0 w-full h-full object-cover object-center"
            preload="none"
          >
            <source src="/video/video-background.mp4" type="video/mp4" />
          </video>
          {/* Very light overlay — keeps video vivid and fresh */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2B1810]/45 via-[#2B1810]/20 to-transparent" />
          {/* Soft bottom transition to page bg */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#FAF7F2]/25 to-transparent" />
        </div>

        {/* ── Floating leaf accents ── */}
        <div className="absolute top-32 right-[7%] opacity-25 animate-leaf-sway pointer-events-none z-10">
          <svg width="48" height="68" viewBox="0 0 56 80" fill="none">
            <path d="M28 2C28 2 54 20 54 44C54 62 42 74 28 78C14 74 2 62 2 44C2 20 28 2 28 2Z" fill="#A8C4A2" opacity=".7"/>
            <line x1="28" y1="10" x2="28" y2="76" stroke="#6B8C6B" strokeWidth="1" opacity=".5"/>
          </svg>
        </div>
        <div className="absolute top-52 left-[5%] opacity-15 animate-leaf-sway pointer-events-none z-10" style={{ animationDelay: '1.4s' }}>
          <svg width="32" height="46" viewBox="0 0 40 56" fill="none">
            <path d="M20 2C20 2 38 14 38 30C38 44 30 52 20 54C10 52 2 44 2 30C2 14 20 2 20 2Z" fill="#6B8C6B" opacity=".8"/>
          </svg>
        </div>

        {/* ── Hero content — fully centered ── */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center pt-28 pb-20">

          {/* Overline badge */}
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <span className="badge badge-on-dark mb-8 inline-flex items-center gap-1.5">
              <Leaf size={10} className="text-[#A8C4A2]" />
              Cầu Đất, Lâm Đồng · 1.650m
            </span>
          </div>

          {/* H1 — Spectral italic display */}
          <h1 className="font-display text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] text-white leading-[1.05] mb-5 animate-fade-in" style={{ animationDelay: '200ms' }}>
            From Cầu Đất
            <span className="block gradient-text mt-1.5">Cà Phê Đặc Sản SCA</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[0.9rem] sm:text-base text-white/68 mb-10 max-w-xl leading-[1.85] font-light animate-fade-in" style={{ animationDelay: '360ms' }}>
            Từ những đồi cà phê phủ sương ở Cầu Đất - Nắng gắt của Ban Mê, chúng tôi bắt đầu hành trình gìn giữ sự tử tế trong từng hạt cà phê — để mỗi tách bạn nâng lên không chỉ là một thức uống, mà là câu chuyện của vùng đất, con người và những giá trị nguyên bản còn được nâng niu.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10 animate-fade-in" style={{ animationDelay: '480ms' }}>
            <Link
              href="/an-nhien"
              id="cta-an-nhien"
              className="btn-copper flex items-center justify-center gap-2 px-7 py-3.5 rounded-full"
            >
              Chương trình An Nhiên <ArrowRight size={14} />
            </Link>
            <Link
              href="/quy-trinh-chat-luong"
              id="cta-quy-trinh"
              className="btn-ghost flex items-center justify-center gap-2 px-7 py-3.5 rounded-full"
            >
              <ShieldCheck size={14} /> Quy trình chất lượng
            </Link>
          </div>

          {/* Search */}
          <div className="w-full max-w-lg animate-fade-in" style={{ animationDelay: '560ms' }}>
            <HeroSearch />
          </div>

          {/* Scroll indicator */}
          <div className="mt-14 flex flex-col items-center gap-2 animate-scroll-bounce opacity-45">
            <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
            <div className="w-1 h-1 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* ══ VÌ SAO CHỌN FCD ══════════════════════════════════════════ */}
      <section className="py-24 section-cream texture-leaf">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge badge-sage mb-5 inline-flex">🌿 Cam kết chất lượng</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] mb-4 italic">
              Vì sao chọn From Cầu Đất?
            </h2>
            <p className="text-[#6B5A4E] max-w-lg mx-auto leading-relaxed text-sm text-center">
              Từ vùng nguyên liệu đến thành phẩm — mỗi hạt cà phê đều mang dấu ấn của thiên nhiên và sự tỉ mỉ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <MapPin size={22} className="text-[#4A6741]" />,
                iconBg: 'bg-[#EDF3EC]',
                title: 'Vùng nguyên liệu',
                desc: 'Arabica Cầu Đất 1.650m và Robusta Buôn Ma Thuột — nguồn gốc xác minh, truy xuất được.',
              },
              {
                icon: <ShieldCheck size={22} className="text-[#B87333]" />,
                iconBg: 'bg-[#FBF3E8]',
                title: 'Tiêu chuẩn SCA',
                desc: '10 bước kiểm soát chất lượng từ farm đến pha chế — cupping theo chuẩn quốc tế.',
              },
              {
                icon: <Coffee size={22} className="text-[#4A6741]" />,
                iconBg: 'bg-[#EDF3EC]',
                title: '5 Không cam kết',
                desc: 'Không trộn độn, không tẩm ướp, không khét cháy, không tạp hương, không nấm mốc.',
              },
              {
                icon: <Users size={22} className="text-[#B87333]" />,
                iconBg: 'bg-[#FBF3E8]',
                title: 'Đối tác doanh nghiệp',
                desc: 'Được tin dùng bởi ngân hàng, doanh nghiệp nước ngoài và tổ chức uy tín.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`card-nature p-6 animate-fade-in delay-${(i+1)*100}`}
              >
                <div className={`w-11 h-11 rounded-2xl ${item.iconBg} flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#1A120A] mb-2 text-sm">{item.title}</h3>
                <p className="text-xs text-[#6B5A4E] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ AN NHIÊN CTA — Nature immersion ═════════════════════════ */}
      <section className="relative py-24 overflow-hidden">

        {/* Coffee cherry background */}
        <div className="absolute inset-0">
          <Image
            src="/images/nature/coffee-cherry.png"
            alt="Cà phê Arabica Cầu Đất — quả chín đỏ"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/45 via-[#2B1810]/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <span className="badge badge-sage mb-5 inline-flex backdrop-blur-sm">✨ Chương trình đặc biệt</span>
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight italic">
                An Nhiên<br />
                <span className="text-[#E3A558]">cùng FCD</span>
              </h2>
              <p className="text-white/70 mb-7 leading-relaxed max-w-md font-light">
                &ldquo;An&rdquo; — an toàn, an tâm, bảo chứng bởi 10 bước kiểm soát khép kín.
                &ldquo;Nhiên&rdquo; — tự nhiên, nguyên bản, minh bạch theo cam kết 5 Không.
              </p>
              <div className="space-y-2.5 mb-8">
                {[
                  'Không trộn độn, không tẩm ướp hương liệu nhân tạo',
                  '10 bước kiểm soát từ vùng trồng đến tay người dùng',
                  'Combo 12kg cho văn phòng — tặng kèm máy pha 20 bar',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="nature-dot shrink-0" />
                    <span className="text-sm text-white/75">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/an-nhien"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#B87333] hover:bg-[#D4914A] text-white font-semibold text-sm transition-all shadow-lg"
              >
                Tìm hiểu An Nhiên <ArrowRight size={15} />
              </Link>
            </div>

            {/* Proof stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '10', label: 'Bước kiểm soát', sub: 'chất lượng SCA', icon: '🔬' },
                { value: '5',  label: 'Cam kết', sub: '"5 Không"', icon: '🛡️' },
                { value: '2',  label: 'Vùng nguyên liệu', sub: 'Cầu Đất + Buôn Ma Thuột', icon: '🌿' },
                { value: '20', label: 'Bar', sub: 'máy pha tặng kèm', icon: '☕' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-dark rounded-2xl p-5 text-center hover:border-[#E3A558]/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="font-display text-3xl text-[#E3A558] mb-1 italic">{stat.value}</div>
                  <div className="text-xs font-semibold text-white/80">{stat.label}</div>
                  <div className="text-[10px] text-white/62 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ GU CÀ PHÊ ═══════════════════════════════════════════════ */}
      <section className="py-24 section-parchment">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge badge-amber mb-5 inline-flex">☕ Hệ gu cà phê</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] mb-4 italic">
              Tìm gu phù hợp với bạn
            </h2>
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto text-center">
              Từ vị đậm sâu đến nguyên bản nhẹ nhàng — mỗi gu là một câu chuyện của đất trời.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {flavorCategories.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/gu-ca-phe#${cat.slug}`}
                className={`group block rounded-2xl overflow-hidden border border-[#D9CABC] bg-white card-hover animate-fade-in delay-${(i+1)*100}`}
              >
                <div className="h-1.5 rounded-t-2xl" style={{ backgroundColor: cat.color }} />
                <div className="p-5">
                  <span className="text-3xl mb-3 block animate-float" style={{ animationDelay: `${i*0.5}s` }}>
                    {cat.icon}
                  </span>
                  <h3 className="font-semibold text-[#1A120A] mb-1.5 text-sm group-hover:text-[#7C3D18] transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-[#6B5A4E] leading-relaxed mb-3">{cat.character}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.highlights.slice(0, 2).map((h) => (
                      <span key={h} className="badge badge-dark text-[10px]">{h}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gu-ca-phe"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#7C3D18] hover:text-[#B87333] transition-colors"
            >
              Khám phá chi tiết <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SẢN PHẨM NỔI BẬT ════════════════════════════════════════ */}
      <section className="py-24 section-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="badge badge-amber mb-3 inline-flex">🏅 Nổi bật</span>
              <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] italic">Sản phẩm chủ lực</h2>
              <p className="text-[#6B5A4E] text-sm mt-1">4 gu chủ lực từ catalog chính thức</p>
            </div>
            <Link
              href="/san-pham"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-[#7C3D18] hover:text-[#B87333] transition-colors"
            >
              Xem tất cả <ArrowRight size={13} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product, i) => {
              const minPrice = product.prices[0]?.price ?? 0
              const hasImage = !product.todoImage && !!product.image
              return (
                <Link
                  key={product.id}
                  href={`/san-pham/${product.slug}`}
                  className={`group block bg-white rounded-2xl overflow-hidden border border-[#D9CABC] hover:border-[#C07A2B]/40 hover:shadow-lg transition-all duration-300 card-nature animate-fade-in delay-${(i+1)*100}`}
                >
                  <div className="relative h-52 bg-white overflow-hidden flex items-center justify-center">
                    {hasImage ? (
                      <Image
                        src={product.image}
                        alt={product.alt}
                        fill
                        className="object-contain object-center group-hover:scale-105 transition-transform duration-500 p-5"
                        sizes="(max-width: 640px) 100vw, 25vw"
                      />
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center gap-2 opacity-40">
                        <span className="text-5xl">☕</span>
                        <span className="text-xs font-bold text-[#7C3D18] bg-[#E3A558]/20 px-2 py-0.5 rounded-full font-mono">{product.code}</span>
                      </div>
                    )}
                    <span className="absolute top-2 left-2 text-[10px] font-semibold bg-[#1C0F07]/70 text-[#E8A84C] px-2 py-0.5 rounded-full backdrop-blur-sm">
                      {product.guLabel}
                    </span>
                  </div>
                  <div className="p-4 border-t border-[#F5EDE0]">
                    <h3 className="font-semibold text-[#1A120A] mb-1.5 text-sm group-hover:text-[#7C3D18] leading-snug transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-[#6B5A4E] mb-3 line-clamp-2 leading-relaxed">{product.descriptionShort}</p>
                    <div className="flex items-center justify-between pt-2 border-t border-[#F5EDE0]">
                      {minPrice > 0 ? (
                        <span className="font-bold text-[#7C3D18] text-sm">{minPrice.toLocaleString('vi-VN')}đ</span>
                      ) : (
                        <span className="text-xs text-[#6B5A4E]">Liên hệ</span>
                      )}
                      <span className="text-[10px] text-[#9C8472]">250g</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ ĐỐI TÁC ════════════════════════════════════════════════ */}
      <section className="py-24 section-nature">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge badge-sage mb-5 inline-flex">🤝 Đối tác</span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#1A120A] mb-3 italic">
              Doanh nghiệp tin dùng
            </h2>
            <p className="text-[#6B5A4E] text-sm max-w-md mx-auto text-center">
              Ngân hàng, tổ chức nước ngoài và doanh nghiệp lớn đã chọn FCD cho văn phòng của họ.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {featuredPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#D9CABC] p-4 hover:border-[#B87333]/40 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-[#1A120A] text-sm leading-snug">{partner.name}</div>
                {partner.category && (
                  <div className="text-[11px] text-[#9C8472] mt-0.5">{partner.category}</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-9">
            <Link
              href="/doi-tac"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#D9CABC] bg-white text-sm font-medium text-[#7C3D18] hover:border-[#B87333] hover:shadow-sm transition-all"
            >
              Xem tất cả đối tác <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ QUICK LINKS ══════════════════════════════════════════════ */}
      <section className="py-14 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="divider-leaf mb-10 opacity-30" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: '/bang-gia', icon: '📋', title: 'Bảng giá niêm yết', desc: 'Giá chính thức từ 10/02/2026' },
              { href: '/chinh-sach', icon: '📜', title: 'Thư viện chính sách', desc: 'Chiết khấu, hỗ trợ, đại sứ CTV' },
              { href: '/lien-he', icon: '💬', title: 'Liên hệ tư vấn', desc: 'Nhận tư vấn sản phẩm phù hợp' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 p-5 rounded-2xl glass-dark hover:border-[#E3A558]/25 group transition-all"
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="font-semibold text-white/90 group-hover:text-[#E3A558] transition-colors text-sm tracking-wide">
                    {item.title}
                  </div>
                  <div className="text-xs text-white/62 mt-0.5">{item.desc}</div>
                </div>
                <ArrowRight size={13} className="ml-auto text-white/72 group-hover:text-[#E3A558] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
