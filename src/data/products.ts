/**
 * src/data/products.ts
 * Source of truth: FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf
 *
 * Maps official catalog codes and verified prices.
 * featured products (homepage): B3, A3, CAO1, O1
 * todoImage: true = placeholder image; replace with real product photo.
 */

export type ProductGroup =
  | 'gu-pho-thong'
  | 'gu-truyen-thong'
  | 'gu-dam-vi'
  | 'gu-can-bang'
  | 'gu-tinh-te'
  | 'gu-nguyen-ban'
  | 'phin-giay'
  | 'bo-dung-cu'
  | 'hop-qua-giay'
  | 'hop-qua-tinh-te'
  | 'an-nhien-combo'

export type ProductSize =
  | '250g'
  | '500g'
  | '1kg'
  | '2kg'
  | '1-goi-15g'
  | 'hop-5-goi'
  | 'hop-10-goi'
  | 'thung-10-hop-5-goi'
  | 'thung-10-hop-10-goi'
  | 'combo'
  | 'box'

export interface ProductPrice {
  size: ProductSize
  price: number
  currency: 'VND'
}

export interface ProductRecord {
  id: string
  slug: string
  /** Official code from price list PDF */
  code: string
  name: string
  group: ProductGroup
  subGroup?: string
  origin?: string
  blend?: string
  flavorNotes?: string[]
  roastLevel?: string
  descriptionShort: string
  descriptionLong?: string
  sizes: ProductSize[]
  prices: ProductPrice[]
  /** true = shown on homepage featured grid */
  featured: boolean
  image: string
  alt: string
  /** Source document reference */
  sourceRef: string
  /** true = real image not yet added; using fallback */
  todoImage?: boolean
}

/**
 * CATALOG TỪNG NHÓM GU
 * Source: FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf
 * Giá xác minh từ bảng giá niêm yết KH lẻ ngày 10/02/2026
 */
export const products: ProductRecord[] = [

  // ── GU PHỔ THÔNG ────────────────────────────────────────────────
  {
    id: 'P',
    slug: 'gu-pho-thong-p',
    code: 'P',
    name: 'Cà Phê FCD — Gu Phổ Thông (P)',
    group: 'gu-pho-thong',
    origin: 'Arabica Cầu Đất & Robusta Buôn Ma Thuột',
    descriptionShort: 'Blend cân bằng, dễ uống, phù hợp cho người mới bắt đầu với cà phê FCD.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 111000, currency: 'VND' },
      { size: '500g', price: 218000, currency: 'VND' },
      { size: '1kg', price: 426000, currency: 'VND' },
      { size: '2kg', price: 850000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/p-250g.jpg',
    alt: 'Cà Phê FCD Gu Phổ Thông P',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'P3',
    slug: 'gu-pho-thong-p3',
    code: 'P3',
    name: 'Cà Phê FCD — Gu Phổ Thông (P3)',
    group: 'gu-pho-thong',
    origin: 'Arabica Cầu Đất & Robusta Buôn Ma Thuột',
    descriptionShort: 'Blend phổ thông cải tiến — đậm hơn P, vẫn dễ tiếp cận.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 117000, currency: 'VND' },
      { size: '500g', price: 229000, currency: 'VND' },
      { size: '1kg', price: 449000, currency: 'VND' },
      { size: '2kg', price: 897000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/p3-250g.jpg',
    alt: 'Cà Phê FCD Gu Phổ Thông P3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },

  // ── GU TRUYỀN THỐNG ─────────────────────────────────────────────
  {
    id: 'C',
    slug: 'gu-truyen-thong-c',
    code: 'C',
    name: 'Cà Phê FCD — Gu Truyền Thống (C)',
    group: 'gu-truyen-thong',
    origin: 'Arabica Cầu Đất & Robusta Buôn Ma Thuột',
    descriptionShort: 'Vị cà phê truyền thống Việt — thân quen, đậm đà, phù hợp pha phin.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 125000, currency: 'VND' },
      { size: '500g', price: 246000, currency: 'VND' },
      { size: '1kg', price: 482000, currency: 'VND' },
      { size: '2kg', price: 963000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/c-250g.jpg',
    alt: 'Cà Phê FCD Gu Truyền Thống C',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'C3',
    slug: 'gu-truyen-thong-c3',
    code: 'C3',
    name: 'Cà Phê FCD — Gu Truyền Thống (C3)',
    group: 'gu-truyen-thong',
    origin: 'Arabica Cầu Đất & Robusta Buôn Ma Thuột',
    descriptionShort: 'Phiên bản nâng cao của dòng truyền thống — hài hòa, rõ vị hơn.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 131000, currency: 'VND' },
      { size: '500g', price: 259000, currency: 'VND' },
      { size: '1kg', price: 507000, currency: 'VND' },
      { size: '2kg', price: 1014000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/c3-250g.jpg',
    alt: 'Cà Phê FCD Gu Truyền Thống C3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },

  // ── GU ĐẬM VỊ ───────────────────────────────────────────────────
  {
    id: 'B3',
    slug: 'gu-dam-vi-b3',
    code: 'B3',
    name: 'Cà Phê FCD — Gu Đậm Vị (B3)',
    group: 'gu-dam-vi',
    origin: 'Arabica Cầu Đất & Robusta Buôn Ma Thuột',
    flavorNotes: ['Đắng đậm', 'Ca cao', 'Thân vị dày'],
    descriptionShort: 'Đậm vị, thân dày, crema tốt — lựa chọn cho người ưa cà phê Việt mạnh.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 147000, currency: 'VND' },
      { size: '500g', price: 285000, currency: 'VND' },
      { size: '1kg', price: 559000, currency: 'VND' },
      { size: '2kg', price: 1107000, currency: 'VND' },
    ],
    // featured products chosen from official catalog
    featured: true,
    image: '/images/products/b3-250g.jpg',
    alt: 'Cà Phê FCD Gu Đậm Vị B3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },

  // ── GU CÂN BẰNG ─────────────────────────────────────────────────
  {
    id: 'A3',
    slug: 'gu-can-bang-a3',
    code: 'A3',
    name: 'Cà Phê FCD — Gu Cân Bằng (A3)',
    group: 'gu-can-bang',
    origin: 'Arabica Cầu Đất & Robusta Buôn Ma Thuột',
    flavorNotes: ['Cân bằng', 'Ngọt nhẹ', 'Hậu vị dài'],
    descriptionShort: 'Cân bằng giữa đắng và ngọt — phù hợp cho đa số khẩu vị, uống đen hoặc pha sữa.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 181000, currency: 'VND' },
      { size: '500g', price: 353000, currency: 'VND' },
      { size: '1kg', price: 694000, currency: 'VND' },
      { size: '2kg', price: 1379000, currency: 'VND' },
    ],
    // featured products chosen from official catalog
    featured: true,
    image: '/images/products/a3-250g.jpg',
    alt: 'Cà Phê FCD Gu Cân Bằng A3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },

  // ── GU TINH TẾ ──────────────────────────────────────────────────
  {
    id: 'CAO1',
    slug: 'gu-tinh-te-cao1',
    code: 'CAO1',
    name: 'Cà Phê FCD — Gu Tinh Tế (CAO1)',
    group: 'gu-tinh-te',
    origin: 'Arabica Cầu Đất cao độ',
    flavorNotes: ['Chua thanh', 'Hoa quả', 'Tinh tế'],
    descriptionShort: 'Arabica cao độ Cầu Đất — hương vị tinh tế, phù hợp pour-over và filter.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 211000, currency: 'VND' },
      { size: '500g', price: 413000, currency: 'VND' },
      { size: '1kg', price: 814000, currency: 'VND' },
      { size: '2kg', price: 1617000, currency: 'VND' },
    ],
    // featured products chosen from official catalog
    featured: true,
    image: '/images/products/cao1-250g.jpg',
    alt: 'Cà Phê FCD Gu Tinh Tế CAO1',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },

  // ── GU NGUYÊN BẢN ───────────────────────────────────────────────
  {
    id: 'O1',
    slug: 'gu-nguyen-ban-o1',
    code: 'O1',
    name: 'Cà Phê FCD — Gu Nguyên Bản (O1)',
    group: 'gu-nguyen-ban',
    origin: 'Arabica Cầu Đất — chế biến tự nhiên',
    flavorNotes: ['Nguyên bản', 'Trái cây', 'Phức hợp'],
    descriptionShort: 'Nguyên bản nhất trong dải sản phẩm FCD — giữ trọn terroir vùng trồng.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 261000, currency: 'VND' },
      { size: '500g', price: 513000, currency: 'VND' },
      { size: '1kg', price: 1016000, currency: 'VND' },
      { size: '2kg', price: 2022000, currency: 'VND' },
    ],
    // featured products chosen from official catalog
    featured: true,
    image: '/images/products/o1-250g.jpg',
    alt: 'Cà Phê FCD Gu Nguyên Bản O1',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },

  // ── PHIN GIẤY ───────────────────────────────────────────────────
  {
    id: 'C3-PHIN',
    slug: 'phin-giay-c3',
    code: 'C3 (phin giấy)',
    name: 'Phin Giấy FCD — C3',
    group: 'phin-giay',
    descriptionShort: 'Phin giấy C3 — convenient, giữ đúng hương vị gu Truyền Thống.',
    sizes: ['1-goi-15g', 'hop-5-goi', 'hop-10-goi'],
    prices: [
      { size: '1-goi-15g', price: 16000, currency: 'VND' },
      { size: 'hop-5-goi', price: 73000, currency: 'VND' },
      { size: 'hop-10-goi', price: 145000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/phin-giay-c3.jpg',
    alt: 'Phin Giấy FCD C3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'B3-PHIN',
    slug: 'phin-giay-b3',
    code: 'B3 (phin giấy)',
    name: 'Phin Giấy FCD — B3',
    group: 'phin-giay',
    descriptionShort: 'Phin giấy B3 — đậm vị, tiện lợi khi di chuyển.',
    sizes: ['1-goi-15g', 'hop-5-goi', 'hop-10-goi'],
    prices: [
      { size: '1-goi-15g', price: 17000, currency: 'VND' },
      { size: 'hop-5-goi', price: 78000, currency: 'VND' },
      { size: 'hop-10-goi', price: 155000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/phin-giay-b3.jpg',
    alt: 'Phin Giấy FCD B3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'A3-PHIN',
    slug: 'phin-giay-a3',
    code: 'A3 (phin giấy)',
    name: 'Phin Giấy FCD — A3',
    group: 'phin-giay',
    descriptionShort: 'Phin giấy A3 — gu cân bằng, dùng liền, không cần dụng cụ.',
    sizes: ['1-goi-15g', 'hop-5-goi', 'hop-10-goi'],
    prices: [
      { size: '1-goi-15g', price: 19000, currency: 'VND' },
      { size: 'hop-5-goi', price: 92000, currency: 'VND' },
      { size: 'hop-10-goi', price: 183000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/phin-giay-a3.jpg',
    alt: 'Phin Giấy FCD A3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },

  // ── BỘ DỤNG CỤ ──────────────────────────────────────────────────
  // TODO: Confirm exact prices from PDF — listed as category, specific prices need verification
  {
    id: 'DUNG-CU-TACH-CAP',
    slug: 'bo-tach-cappuccino',
    code: 'DỤNG CỤ',
    name: 'Bộ Tách Cappuccino',
    group: 'bo-dung-cu',
    descriptionShort: 'Bộ tách Cappuccino — dụng cụ thưởng thức cà phê FCD.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/tools/tach-cappuccino.jpg',
    alt: 'Bộ Tách Cappuccino FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'DUNG-CU-PHIN-LON',
    slug: 'combo-bo-pha-phin-lon',
    code: 'DỤNG CỤ',
    name: 'Combo Bộ Pha Phin Lớn 500ml',
    group: 'bo-dung-cu',
    descriptionShort: 'Combo bộ pha phin lớn 500ml — đủ bộ pha cà phê phin truyền thống.',
    sizes: ['combo'],
    prices: [],
    featured: false,
    image: '/images/tools/phin-lon-500ml.jpg',
    alt: 'Combo Bộ Pha Phin Lớn 500ml FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'DUNG-CU-PHIN-NHOM',
    slug: 'phin-nhom',
    code: 'DỤNG CỤ',
    name: 'Phin Nhôm FCD',
    group: 'bo-dung-cu',
    descriptionShort: 'Phin nhôm truyền thống — chuẩn vị cà phê phin Việt.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/tools/phin-nhom.jpg',
    alt: 'Phin Nhôm FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },

  // ── HỘP QUÀ GIẤY ────────────────────────────────────────────────
  {
    id: 'HQ-TRI-AN-B3',
    slug: 'hop-qua-tri-an-b3',
    code: 'TRI ÂN B3',
    name: 'Hộp Quà Giấy — Tri Ân B3',
    group: 'hop-qua-giay',
    descriptionShort: 'Hộp quà giấy Tri Ân với cà phê B3 — ý nghĩa, trang trọng, phù hợp dịp lễ.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/gifts/tri-an-b3.jpg',
    alt: 'Hộp Quà Tri Ân B3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'HQ-TRI-AN-A3',
    slug: 'hop-qua-tri-an-a3',
    code: 'TRI ÂN A3',
    name: 'Hộp Quà Giấy — Tri Ân A3',
    group: 'hop-qua-giay',
    descriptionShort: 'Hộp quà giấy Tri Ân với cà phê A3.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/gifts/tri-an-a3.jpg',
    alt: 'Hộp Quà Tri Ân A3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'HQ-TRI-AN-CAO1',
    slug: 'hop-qua-tri-an-cao1',
    code: 'TRI ÂN CAO1',
    name: 'Hộp Quà Giấy — Tri Ân CAO1',
    group: 'hop-qua-giay',
    descriptionShort: 'Hộp quà Tri Ân cao cấp với cà phê CAO1.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/gifts/tri-an-cao1.jpg',
    alt: 'Hộp Quà Tri Ân CAO1 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'HQ-TRI-AN-O1',
    slug: 'hop-qua-tri-an-o1',
    code: 'TRI ÂN O1',
    name: 'Hộp Quà Giấy — Tri Ân O1',
    group: 'hop-qua-giay',
    descriptionShort: 'Hộp quà Tri Ân cao cấp nhất với cà phê O1 nguyên bản.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/gifts/tri-an-o1.jpg',
    alt: 'Hộp Quà Tri Ân O1 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },
  {
    id: 'HQ-KET-GIAO-B3',
    slug: 'hop-qua-ket-giao-b3',
    code: 'KẾT GIAO B3',
    name: 'Hộp Quà Giấy — Kết Giao B3',
    group: 'hop-qua-giay',
    descriptionShort: 'Hộp quà Kết Giao với cà phê B3 — dành cho quà tặng đối tác.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/gifts/ket-giao-b3.jpg',
    alt: 'Hộp Quà Kết Giao B3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf',
    todoImage: true,
  },


  // ── GÓI AN NHIÊN 12KG (AN NHIÊN CÙNG FROM CẦU ĐẤT) ─────────────
  // Source: FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf — trang 11
  // Giá niêm yết/kg = giá tổng trị / 12kg
  // Cột "Thanh toán hàng tháng (vnd/kg)" = giá trả góp 11 tháng sau
  {
    id: 'ANCF-P',
    slug: 'an-nhien-combo-p',
    code: 'ANCF.P',
    name: 'Gói An Nhiên 12kg — Gu Phổ Thông P',
    group: 'an-nhien-combo',
    subGroup: 'Gu Phổ Thông',
    descriptionShort: 'Mua 12kg gu Phổ Thông P — tặng máy pha cà phê 20 bar. Thanh toán 50% trước.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 436000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-1.png',
    alt: 'Gói An Nhiên 12kg P FCD — mua 12kg tặng máy pha',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 1',
    todoImage: false,
  },
  {
    id: 'ANCF-P3',
    slug: 'an-nhien-combo-p3',
    code: 'ANCF.P3',
    name: 'Gói An Nhiên 12kg — Gu Phổ Thông P3',
    group: 'an-nhien-combo',
    subGroup: 'Gu Phổ Thông',
    descriptionShort: 'Mua 12kg gu Phổ Thông P3 — tặng máy pha cà phê 20 bar. Thanh toán 50% trước.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 458000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-1.png',
    alt: 'Gói An Nhiên 12kg P3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 2',
    todoImage: false,
  },
  {
    id: 'ANCF-C',
    slug: 'an-nhien-combo-c',
    code: 'ANCF.C',
    name: 'Gói An Nhiên 12kg — Gu Truyền Thống C',
    group: 'an-nhien-combo',
    subGroup: 'Gu Truyền Thống',
    descriptionShort: 'Mua 12kg gu Truyền Thống C — tặng máy pha cà phê 20 bar.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 492000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-1.png',
    alt: 'Gói An Nhiên 12kg C FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 3',
    todoImage: false,
  },
  {
    id: 'ANCF-C3',
    slug: 'an-nhien-combo-c3',
    code: 'ANCF.C3',
    name: 'Gói An Nhiên 12kg — Gu Truyền Thống C3',
    group: 'an-nhien-combo',
    subGroup: 'Gu Truyền Thống',
    descriptionShort: 'Mua 12kg gu Truyền Thống C3 — tặng máy pha cà phê 20 bar.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 518000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-1.png',
    alt: 'Gói An Nhiên 12kg C3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 4',
    todoImage: false,
  },
  {
    id: 'ANCF-B3',
    slug: 'an-nhien-combo-b3',
    code: 'ANCF.B3',
    name: 'Gói An Nhiên 12kg — Gu Đậm Vị B3',
    group: 'an-nhien-combo',
    subGroup: 'Gu Đậm Vị',
    flavorNotes: ['Sô-cô-la', 'Mạch nha'],
    descriptionShort: 'Mua 12kg gu Đậm Vị B3 — tặng máy pha cà phê 20 bar. Hương sô-cô-la đậm.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 570000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-1.png',
    alt: 'Gói An Nhiên 12kg B3 FCD — gu Đậm Vị',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 5',
    todoImage: false,
  },
  {
    id: 'ANCF-MIX',
    slug: 'an-nhien-combo-mix',
    code: 'ANCF.MIX',
    name: 'Gói An Nhiên 12kg — Trọn Gu Mix (8 gu)',
    group: 'an-nhien-combo',
    subGroup: 'Trọn Gu',
    descriptionShort: 'Mua 12kg mix đủ 8 gu — phù hợp văn phòng nhiều khẩu vị. Tặng máy pha 20 bar.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 628000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-1.png',
    alt: 'Gói An Nhiên 12kg Mix FCD — trọn 8 gu',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 6',
    todoImage: false,
  },
  {
    id: 'ANCF-A3',
    slug: 'an-nhien-combo-a3',
    code: 'ANCF.A3',
    name: 'Gói An Nhiên 12kg — Gu Cân Bằng A3',
    group: 'an-nhien-combo',
    subGroup: 'Gu Cân Bằng',
    flavorNotes: ['Sô-cô-la', 'Caramel', 'Hạnh nhân', 'Gia vị cay'],
    descriptionShort: 'Mua 12kg gu Cân Bằng A3 — tặng máy pha 20 bar. Medium roast, hương caramel.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 706000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-2.png',
    alt: 'Gói An Nhiên 12kg A3 FCD — gu Cân Bằng',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 7',
    todoImage: false,
  },
  {
    id: 'ANCF-CAO1',
    slug: 'an-nhien-combo-cao1',
    code: 'ANCF.CAO1',
    name: 'Gói An Nhiên 12kg — Gu Tinh Túy CAO1',
    group: 'an-nhien-combo',
    subGroup: 'Gu Tinh Túy',
    flavorNotes: ['Sô-cô-la', 'Hạnh nhân', 'Trái cây', 'Gia vị cay'],
    descriptionShort: 'Mua 12kg gu Tinh Túy CAO1 — tặng máy pha 20 bar. 50% Arabica Cầu Đất cao cấp.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 826000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-2.png',
    alt: 'Gói An Nhiên 12kg CAO1 FCD — gu Tinh Túy',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 8',
    todoImage: false,
  },
  {
    id: 'ANCF-O1',
    slug: 'an-nhien-combo-o1',
    code: 'ANCF.O1',
    name: 'Gói An Nhiên 12kg — Gu Nguyên Bản O1',
    group: 'an-nhien-combo',
    subGroup: 'Gu Nguyên Bản',
    flavorNotes: ['Sô-cô-la', 'Caramel', 'Mạch nha', 'Trái cây'],
    descriptionShort: 'Mua 12kg gu Nguyên Bản O1 — tặng máy pha 20 bar. 100% Catimor chế biến ướt.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 1026000, currency: 'VND' }],
    featured: false,
    image: '/images/products/page-ancf-2.png',
    alt: 'Gói An Nhiên 12kg O1 FCD — gu Nguyên Bản',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 9',
    todoImage: false,
  },
]
