/**
 * src/data/products.ts
 * ─────────────────────────────────────────────────────────────────
 * SOURCE OF TRUTH (strict):
 *   • Giá, blend%, origin, processing, tasting notes → FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf
 *   • Hình ảnh → fromcaudat.com (tải về local tại public/images/products/)
 *
 * Ngày hiệu lực giá: 10/02/2026
 * ─────────────────────────────────────────────────────────────────
 */

export type ProductGroup =
  | 'gu-pho-thong'
  | 'gu-truyen-thong'
  | 'gu-dam-vi'
  | 'gu-can-bang'
  | 'gu-tinh-te'       // internal key — keep for routing
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

/** Thang điểm 1–10 từ bảng giá PDF */
export interface TasteProfile {
  /** Vị đắng */
  bitter: number
  /** Độ ngọt */
  sweet: number
  /** Độ chua đặc trưng */
  acid: number
  /** Độ đậm (thể chất) */
  body: number
  /** Hậu vị béo */
  finish: number
}

export interface ProductRecord {
  id: string
  slug: string
  /** Mã chính thức từ bảng giá PDF */
  code: string
  name: string
  /** Tên gu ngắn gọn để hiển thị */
  guLabel: string
  group: ProductGroup
  /** Vùng nguyên liệu + độ cao */
  origin: string
  altitude?: string
  /** Công thức phối trộn % */
  blend: string
  /** Phương pháp chế biến */
  processing: string
  /** Cách rang */
  roastLevel?: string
  /** Cách pha phù hợp */
  brewingMethods?: string[]
  flavorNotes: string[]
  tasteProfile?: TasteProfile
  descriptionShort: string
  sizes: ProductSize[]
  prices: ProductPrice[]
  /** Sản phẩm nổi bật hiển thị trên homepage */
  featured: boolean
  /** Ảnh sản phẩm — local path hoặc remote URL */
  image: string
  alt: string
  /** Nguồn tài liệu */
  sourceRef: string
  todoImage?: boolean
}

// ─────────────────────────────────────────────────────────────────
// CÀ PHÊ TÚI — DÒN THƯỞNG THỨC
// ─────────────────────────────────────────────────────────────────

export const products: ProductRecord[] = [

  // ── GU PHỔ THÔNG ─────────────────────────────────────────────────
  {
    id: 'P',
    slug: 'gu-pho-thong-p',
    code: 'P',
    name: 'Cà Phê FCD — Gu Phổ Thông (P)',
    guLabel: 'Gu Phổ Thông',
    group: 'gu-pho-thong',
    origin: 'Robusta Buôn Ma Thuột, Đắk Lắk',
    altitude: '700m',
    blend: '100% Robusta',
    processing: 'Chế biến khô (Natural)',
    roastLevel: 'Medium–Dark Roast',
    brewingMethods: ['Pha phin', 'Pha máy espresso'],
    flavorNotes: ['Chocolate đen', 'Mạch nha', 'Đắng dịu'],
    tasteProfile: { bitter: 6, sweet: 5, acid: 1, body: 6, finish: 5 },
    descriptionShort: 'Blend phổ thông cân bằng — đậm vừa, dễ uống, thích hợp cho người mới làm quen với cà phê FCD.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 111000, currency: 'VND' },
      { size: '500g', price: 218000, currency: 'VND' },
      { size: '1kg',  price: 426000, currency: 'VND' },
      { size: '2kg',  price: 850000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/page-summary.png',
    alt: 'Cà Phê FCD Gu Phổ Thông P',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.2',
    todoImage: false,
  },
  {
    id: 'P3',
    slug: 'gu-pho-thong-p3',
    code: 'P3',
    name: 'Cà Phê FCD — Gu Phổ Thông (P3)',
    guLabel: 'Gu Phổ Thông',
    group: 'gu-pho-thong',
    origin: 'Robusta Buôn Ma Thuột, Đắk Lắk & Robusta Culi',
    altitude: '700m',
    blend: '70% Robusta + 30% Robusta Culi',
    processing: 'Chế biến khô (Natural)',
    roastLevel: 'Medium–Dark Roast',
    brewingMethods: ['Pha phin', 'Pha máy espresso'],
    flavorNotes: ['Chocolate đen', 'Mạch nha', 'Hậu vị đậm'],
    tasteProfile: { bitter: 7, sweet: 5, acid: 1, body: 7, finish: 6 },
    descriptionShort: 'Blend phổ thông cải tiến — đậm hơn P, vẫn dễ tiếp cận, vị culi tạo chiều sâu.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 117000, currency: 'VND' },
      { size: '500g', price: 229000, currency: 'VND' },
      { size: '1kg',  price: 449000, currency: 'VND' },
      { size: '2kg',  price: 897000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/page-summary.png',
    alt: 'Cà Phê FCD Gu Phổ Thông P3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.2',
    todoImage: false,
  },

  // ── GU TRUYỀN THỐNG ─────────────────────────────────────────────
  {
    id: 'C',
    slug: 'gu-truyen-thong-c',
    code: 'C',
    name: 'Cà Phê FCD — Gu Truyền Thống (C)',
    guLabel: 'Gu Truyền Thống',
    group: 'gu-truyen-thong',
    origin: 'Robusta Buôn Ma Thuột, Đắk Lắk & Arabica Cầu Đất, Lâm Đồng',
    altitude: '700–1650m',
    blend: '70% Robusta + 30% Arabica Cầu Đất',
    processing: 'Chế biến ướt (Washed)',
    roastLevel: 'Medium Roast',
    brewingMethods: ['Pha phin', 'Pha máy espresso'],
    flavorNotes: ['Các loại hạt béo rang', 'Chocolate', 'Caramel'],
    tasteProfile: { bitter: 6, sweet: 6, acid: 2, body: 7, finish: 6 },
    descriptionShort: 'Vị cà phê truyền thống Việt — quen thuộc, đậm đà, thân quen với khẩu vị người Việt.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 125000, currency: 'VND' },
      { size: '500g', price: 246000, currency: 'VND' },
      { size: '1kg',  price: 482000, currency: 'VND' },
      { size: '2kg',  price: 963000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/c3.png',
    alt: 'Cà Phê FCD Gu Truyền Thống C',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.3',
    todoImage: false,
  },
  {
    id: 'C3',
    slug: 'gu-truyen-thong-c3',
    code: 'C3',
    name: 'Cà Phê FCD — Gu Truyền Thống (C3)',
    guLabel: 'Gu Truyền Thống',
    group: 'gu-truyen-thong',
    origin: 'Robusta Culi Buôn Ma Thuột, Đắk Lắk & Arabica Cầu Đất, Lâm Đồng',
    altitude: '700–1650m',
    blend: '70% Robusta Culi + 30% Arabica Cầu Đất',
    processing: 'Chế biến ướt (Washed)',
    roastLevel: 'Medium Roast',
    brewingMethods: ['Pha phin', 'Pha máy espresso'],
    flavorNotes: ['Các loại hạt béo rang', 'Chocolate', 'Caramel nhẹ'],
    tasteProfile: { bitter: 7, sweet: 6, acid: 2, body: 7, finish: 7 },
    descriptionShort: 'Phiên bản nâng cao của dòng truyền thống — culi làm tăng crema và độ đậm vị.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 131000, currency: 'VND' },
      { size: '500g', price: 259000, currency: 'VND' },
      { size: '1kg',  price: 507000, currency: 'VND' },
      { size: '2kg',  price: 1014000, currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/c3.png',
    alt: 'Cà Phê FCD Gu Truyền Thống C3',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.3',
    todoImage: false,
  },

  // ── GU ĐẬM VỊ ────────────────────────────────────────────────────
  {
    id: 'B3',
    slug: 'gu-dam-vi-b3',
    code: 'B3',
    name: 'Cà Phê FCD — Gu Đậm Vị (B3)',
    guLabel: 'Gu Đậm Vị',
    group: 'gu-dam-vi',
    origin: '100% Robusta Culi Buôn Ma Thuột, Đắk Lắk',
    altitude: '700m',
    blend: '100% Robusta Culi',
    processing: 'Chế biến ướt (Washed)',
    roastLevel: 'Medium–Dark Roast',
    brewingMethods: ['Pha phin', 'Pha máy espresso', 'Pha sữa'],
    flavorNotes: ['Sô-cô-la', 'Mạch nha (Malt)', 'Hạnh nhân (Almond)'],
    tasteProfile: { bitter: 8, sweet: 8, acid: 0, body: 8, finish: 8 },
    descriptionShort: '100% Robusta Culi chế biến ướt — đậm vị, crema đặc, thích hợp pha sữa và espresso mạnh.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 147000, currency: 'VND' },
      { size: '500g', price: 285000, currency: 'VND' },
      { size: '1kg',  price: 559000, currency: 'VND' },
      { size: '2kg',  price: 1107000, currency: 'VND' },
    ],
    featured: true,
    image: '/images/products/b3.png',
    alt: 'Cà Phê FCD Gu Đậm Vị B3 — 100% Robusta Culi',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.4',
    todoImage: false,
  },

  // ── GU CÂN BẰNG ─────────────────────────────────────────────────
  {
    id: 'A3',
    slug: 'gu-can-bang-a3',
    code: 'A3',
    name: 'Cà Phê FCD — Gu Cân Bằng (A3)',
    guLabel: 'Gu Cân Bằng',
    group: 'gu-can-bang',
    origin: 'Robusta Culi Buôn Ma Thuột & Arabica hái bằng tay Cầu Đất, Lâm Đồng',
    altitude: '700–1650m',
    blend: '80% Robusta Culi chế biến khô + 20% Arabica Cầu Đất hái bằng tay',
    processing: 'Blend: Khô (Robusta) + Ướt (Arabica)',
    roastLevel: 'Medium Roast',
    brewingMethods: ['Pha phin', 'Pha máy', 'Pour over', 'Cold brew'],
    flavorNotes: ['Sô-cô-la (Chocolate)', 'Caramel', 'Hạnh nhân (Almond)', 'Gia vị cay (Spices)'],
    tasteProfile: { bitter: 7, sweet: 8, acid: 2, body: 7, finish: 8 },
    descriptionShort: '80% Robusta Culi + 20% Arabica Cầu Đất — cân bằng đắng–ngọt, medium roast, hương caramel và chocolate.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 181000, currency: 'VND' },
      { size: '500g', price: 353000, currency: 'VND' },
      { size: '1kg',  price: 694000, currency: 'VND' },
      { size: '2kg',  price: 1379000, currency: 'VND' },
    ],
    featured: true,
    image: '/images/products/a3.png',
    alt: 'Cà Phê FCD Gu Cân Bằng A3 — 80% Robusta Culi + 20% Arabica Cầu Đất',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.5',
    todoImage: false,
  },

  // ── GU TINH TÚY (CAO1) ─────────────────────────────────────────
  {
    id: 'CAO1',
    slug: 'gu-tinh-tuy-cao1',
    code: 'CAO1',
    name: 'Cà Phê FCD — Gu Tinh Túy (CAO1)',
    guLabel: 'Gu Tinh Túy',
    group: 'gu-tinh-te',
    origin: 'Robusta Buôn Ma Thuột, Đắk Lắk & Arabica hái bằng tay Cầu Đất, Lâm Đồng',
    altitude: '700–1650m',
    blend: '50% Robusta chế biến khô + 50% Arabica hái bằng tay Cầu Đất',
    processing: 'Blend: Natural (Robusta) + Washed (Arabica)',
    roastLevel: 'Medium Roast',
    brewingMethods: ['Pha phin', 'Pour over', 'Cold brew', 'Máy espresso'],
    flavorNotes: ['Sô-cô-la (Chocolate)', 'Hạnh nhân (Almond)', 'Trái cây (Fruity)', 'Gia vị cay (Spices)'],
    tasteProfile: { bitter: 7, sweet: 8, acid: 3, body: 7, finish: 9 },
    descriptionShort: '50% Robusta + 50% Arabica Cầu Đất cao độ 1650m — tinh túy, hậu vị dài, phù hợp thưởng thức slow coffee.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 211000, currency: 'VND' },
      { size: '500g', price: 413000, currency: 'VND' },
      { size: '1kg',  price: 814000, currency: 'VND' },
      { size: '2kg',  price: 1617000, currency: 'VND' },
    ],
    featured: true,
    image: '/images/products/cao1.png',
    alt: 'Cà Phê FCD Gu Tinh Túy CAO1 — 50% Arabica Cầu Đất 1650m',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.6',
    todoImage: false,
  },

  // ── GU NGUYÊN BẢN (O1) ──────────────────────────────────────────
  {
    id: 'O1',
    slug: 'gu-nguyen-ban-o1',
    code: 'O1',
    name: 'Cà Phê FCD — Gu Nguyên Bản (O1)',
    guLabel: 'Gu Nguyên Bản',
    group: 'gu-nguyen-ban',
    origin: '100% Catimor hái bằng tay Cầu Đất, Lâm Đồng',
    altitude: '1650m',
    blend: '100% Catimor Cầu Đất',
    processing: 'Chế biến ướt (Washed)',
    roastLevel: 'Light–Medium Roast',
    brewingMethods: ['Pour over', 'Cold brew', 'Pha phin', 'Aeropress'],
    flavorNotes: ['Sô-cô-la (Chocolate)', 'Caramel', 'Mạch nha (Malt)', 'Trái cây (Fruity)'],
    tasteProfile: { bitter: 5, sweet: 8, acid: 5, body: 6, finish: 9 },
    descriptionShort: '100% Catimor hái bằng tay chế biến ướt — nguyên bản nhất dải FCD, giữ trọn terroir Cầu Đất 1650m.',
    sizes: ['250g', '500g', '1kg', '2kg'],
    prices: [
      { size: '250g', price: 261000, currency: 'VND' },
      { size: '500g', price: 513000, currency: 'VND' },
      { size: '1kg',  price: 1016000, currency: 'VND' },
      { size: '2kg',  price: 2022000, currency: 'VND' },
    ],
    featured: true,
    image: '/images/products/o1.png',
    alt: 'Cà Phê FCD Gu Nguyên Bản O1 — 100% Catimor Cầu Đất',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.6',
    todoImage: false,
  },

  // ── PHIN GIẤY ────────────────────────────────────────────────────
  // Source: tr.7 — 3 gu × 4 pack sizes
  {
    id: 'C3-PHIN',
    slug: 'phin-giay-c3',
    code: 'C3 (phin giấy)',
    name: 'Phin Giấy FCD — C3',
    guLabel: 'Phin Giấy',
    group: 'phin-giay',
    origin: 'Robusta Culi & Arabica Cầu Đất',
    altitude: '700–1650m',
    blend: '70% Robusta Culi + 30% Arabica Cầu Đất',
    processing: 'Chế biến ướt (Washed)',
    roastLevel: 'Medium Roast',
    brewingMethods: ['Drip bag (pha tại chỗ, không cần thiết bị)'],
    flavorNotes: ['Caramel', 'Mạch nha (Malt)', 'Sô cô la đen (Dark Chocolate)'],
    descriptionShort: 'Phin giấy C3 tiện lợi — giữ đúng hương truyền thống, không cần dụng cụ.',
    sizes: ['1-goi-15g', 'hop-5-goi', 'hop-10-goi', 'thung-10-hop-5-goi', 'thung-10-hop-10-goi'],
    prices: [
      { size: '1-goi-15g',          price: 16000,  currency: 'VND' },
      { size: 'hop-5-goi',           price: 73000,  currency: 'VND' },
      { size: 'hop-10-goi',          price: 145000, currency: 'VND' },
      { size: 'thung-10-hop-5-goi',  price: 728000, currency: 'VND' },
      { size: 'thung-10-hop-10-goi', price: 1450000,currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/phin-a3.png',
    alt: 'Phin Giấy FCD C3 — tiện lợi, pha tại chỗ',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.7',
    todoImage: false,
  },
  {
    id: 'B3-PHIN',
    slug: 'phin-giay-b3',
    code: 'B3 (phin giấy)',
    name: 'Phin Giấy FCD — B3',
    guLabel: 'Phin Giấy',
    group: 'phin-giay',
    origin: '100% Robusta Culi Buôn Ma Thuột, Đắk Lắk & Arabica Cầu Đất',
    altitude: '700–1650m',
    blend: 'Robusta Culi + Arabica Cầu Đất',
    processing: 'Chế biến ướt (Washed)',
    roastLevel: 'Medium–Dark Roast',
    brewingMethods: ['Drip bag (pha tại chỗ, không cần thiết bị)'],
    flavorNotes: ['Caramel', 'Mạch nha (Malt)', 'Sô cô la đen (Dark Chocolate)'],
    descriptionShort: 'Phin giấy B3 — đậm vị, tiện lợi khi di chuyển hoặc văn phòng.',
    sizes: ['1-goi-15g', 'hop-5-goi', 'hop-10-goi', 'thung-10-hop-5-goi', 'thung-10-hop-10-goi'],
    prices: [
      { size: '1-goi-15g',          price: 17000,  currency: 'VND' },
      { size: 'hop-5-goi',           price: 78000,  currency: 'VND' },
      { size: 'hop-10-goi',          price: 155000, currency: 'VND' },
      { size: 'thung-10-hop-5-goi',  price: 779000, currency: 'VND' },
      { size: 'thung-10-hop-10-goi', price: 1545000,currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/phin-b3.jpg',
    alt: 'Phin Giấy FCD B3 — đậm vị đặc trưng',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.7',
    todoImage: false,
  },
  {
    id: 'A3-PHIN',
    slug: 'phin-giay-a3',
    code: 'A3 (phin giấy)',
    name: 'Phin Giấy FCD — A3',
    guLabel: 'Phin Giấy',
    group: 'phin-giay',
    origin: 'Robusta Culi & Arabica hái bằng tay Cầu Đất, Lâm Đồng',
    altitude: '700–1650m',
    blend: '80% Robusta Culi + 20% Arabica Cầu Đất hái bằng tay',
    processing: 'Blend: Khô (Robusta) + Ướt (Arabica)',
    roastLevel: 'Medium Roast',
    brewingMethods: ['Drip bag (pha tại chỗ, không cần thiết bị)'],
    flavorNotes: ['Caramel', 'Chocolate', 'Gia vị cay', 'Hạnh nhân (Almond)'],
    descriptionShort: 'Phin giấy A3 — gu cân bằng, dùng ngay không cần dụng cụ, phù hợp văn phòng.',
    sizes: ['1-goi-15g', 'hop-5-goi', 'hop-10-goi', 'thung-10-hop-5-goi', 'thung-10-hop-10-goi'],
    prices: [
      { size: '1-goi-15g',          price: 19000,  currency: 'VND' },
      { size: 'hop-5-goi',           price: 92000,  currency: 'VND' },
      { size: 'hop-10-goi',          price: 183000, currency: 'VND' },
      { size: 'thung-10-hop-5-goi',  price: 921000, currency: 'VND' },
      { size: 'thung-10-hop-10-goi', price: 1833000,currency: 'VND' },
    ],
    featured: false,
    image: '/images/products/phin-a3.png',
    alt: 'Phin Giấy FCD A3 — gu cân bằng, caramel và chocolate',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.7',
    todoImage: false,
  },

  // ── BỘ DỤNG CỤ ────────────────────────────────────────────────────
  // Source: tr.8 — prices chưa có trong bảng giá lẻ PDF (category only)
  {
    id: 'DUNG-CU-TACH-CAP',
    slug: 'bo-tach-cappuccino',
    code: 'DỤNG CỤ',
    name: 'Bộ Tách Cappuccino',
    guLabel: 'Dụng Cụ',
    group: 'bo-dung-cu',
    origin: '—',
    blend: '—',
    processing: '—',
    flavorNotes: [],
    descriptionShort: 'Bộ tách Cappuccino — dụng cụ thưởng thức cà phê FCD cao cấp.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/products/page-tools.png',
    alt: 'Bộ Tách Cappuccino FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.8',
    todoImage: false,
  },
  {
    id: 'DUNG-CU-PHIN-LON',
    slug: 'combo-bo-pha-phin-lon',
    code: 'DỤNG CỤ',
    name: 'Combo Bộ Pha Phin Lớn 500ml',
    guLabel: 'Dụng Cụ',
    group: 'bo-dung-cu',
    origin: '—',
    blend: '—',
    processing: '—',
    flavorNotes: [],
    descriptionShort: 'Combo bộ pha phin lớn 500ml — đủ bộ pha cà phê phin truyền thống cho gia đình.',
    sizes: ['combo'],
    prices: [],
    featured: false,
    image: '/images/products/page-tools.png',
    alt: 'Combo Bộ Pha Phin Lớn 500ml FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.8',
    todoImage: false,
  },
  {
    id: 'DUNG-CU-MUA-MAY',
    slug: 'may-pha-ca-phe-20bar',
    code: 'DỤNG CỤ',
    name: 'Máy Pha Cà Phê 20 Bar',
    guLabel: 'Dụng Cụ',
    group: 'bo-dung-cu',
    origin: '—',
    blend: '—',
    processing: '—',
    flavorNotes: [],
    descriptionShort: 'Máy pha cà phê 20 bar — tặng kèm khi đăng ký Gói An Nhiên 12kg.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/products/page-tools.png',
    alt: 'Máy Pha Cà Phê 20 Bar FCD — tặng kèm gói An Nhiên',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.8',
    todoImage: false,
  },

  // ── HỘP QUÀ GIẤY ────────────────────────────────────────────────
  // Source: tr.9 — tên hộp và sản phẩm bên trong xác minh từ PDF
  {
    id: 'HQ-TRI-AN-B3',
    slug: 'hop-qua-tri-an-b3',
    code: 'TRI ÂN B3',
    name: 'Hộp Quà Giấy — Tri Ân B3',
    guLabel: 'Quà Tặng',
    group: 'hop-qua-giay',
    origin: '—',
    blend: 'B3',
    processing: '—',
    flavorNotes: [],
    descriptionShort: 'Hộp quà giấy Tri Ân — chứa cà phê B3, thích hợp quà tặng đối tác và khách hàng.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/products/hop-qua.jpg',
    alt: 'Hộp Quà Tri Ân B3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.9',
    todoImage: false,
  },
  {
    id: 'HQ-TRI-AN-A3',
    slug: 'hop-qua-tri-an-a3',
    code: 'TRI ÂN A3',
    name: 'Hộp Quà Giấy — Tri Ân A3',
    guLabel: 'Quà Tặng',
    group: 'hop-qua-giay',
    origin: '—',
    blend: 'A3',
    processing: '—',
    flavorNotes: [],
    descriptionShort: 'Hộp quà giấy Tri Ân — chứa cà phê A3, hương caramel và chocolate.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/products/hop-qua.jpg',
    alt: 'Hộp Quà Tri Ân A3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.9',
    todoImage: false,
  },
  {
    id: 'HQ-TRI-AN-CAO1',
    slug: 'hop-qua-tri-an-cao1',
    code: 'TRI ÂN CAO1',
    name: 'Hộp Quà Giấy — Tri Ân CAO1',
    guLabel: 'Quà Tặng',
    group: 'hop-qua-giay',
    origin: '—',
    blend: 'CAO1',
    processing: '—',
    flavorNotes: [],
    descriptionShort: 'Hộp quà giấy cao cấp Tri Ân — chứa cà phê CAO1, hương tinh túy từ Cầu Đất.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/products/hop-qua.jpg',
    alt: 'Hộp Quà Tri Ân CAO1 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.9',
    todoImage: false,
  },
  {
    id: 'HQ-TRI-AN-O1',
    slug: 'hop-qua-tri-an-o1',
    code: 'TRI ÂN O1',
    name: 'Hộp Quà Giấy — Tri Ân O1',
    guLabel: 'Quà Tặng',
    group: 'hop-qua-giay',
    origin: '—',
    blend: 'O1',
    processing: '—',
    flavorNotes: [],
    descriptionShort: 'Hộp quà giấy cao cấp nhất Tri Ân — chứa cà phê O1 nguyên bản Cầu Đất.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/products/hop-qua.jpg',
    alt: 'Hộp Quà Tri Ân O1 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.9',
    todoImage: false,
  },
  {
    id: 'HQ-KET-GIAO-B3',
    slug: 'hop-qua-ket-giao-b3',
    code: 'KẾT GIAO B3',
    name: 'Hộp Quà Giấy — Kết Giao B3',
    guLabel: 'Quà Tặng',
    group: 'hop-qua-giay',
    origin: '—',
    blend: 'B3',
    processing: '—',
    flavorNotes: [],
    descriptionShort: 'Hộp quà Kết Giao với cà phê B3 — dành cho quà tặng đối tác, quà kết giao.',
    sizes: ['box'],
    prices: [],
    featured: false,
    image: '/images/products/hop-qua.jpg',
    alt: 'Hộp Quà Kết Giao B3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.9',
    todoImage: false,
  },

  // ── GÓI AN NHIÊN 12KG (AN NHIÊN CÙNG FROM CẦU ĐẤT) ──────────────
  // Source: FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11
  // Giá = vnd/kg niêm yết. Tổng trị = giá × 12.
  // Thanh toán 50% trước, 50% trả góp 11 tháng.
  // Kèm tặng máy pha cà phê 20 bar.
  {
    id: 'ANCF-P',
    slug: 'an-nhien-combo-p',
    code: 'ANCF.P',
    name: 'Gói An Nhiên 12kg — Gu Phổ Thông P',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: '100% Robusta Buôn Ma Thuột',
    altitude: '700m',
    blend: '100% Robusta',
    processing: 'Chế biến khô (Natural)',
    flavorNotes: ['Chocolate đen', 'Mạch nha', 'Đắng dịu'],
    descriptionShort: 'Mua 12kg gu Phổ Thông P — tặng máy pha cà phê 20 bar. Thanh toán 50% trước.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 436000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf.jpg',
    alt: 'Gói An Nhiên 12kg P FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 1',
    todoImage: false,
  },
  {
    id: 'ANCF-P3',
    slug: 'an-nhien-combo-p3',
    code: 'ANCF.P3',
    name: 'Gói An Nhiên 12kg — Gu Phổ Thông P3',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: '70% Robusta + 30% Robusta Culi Buôn Ma Thuột',
    altitude: '700m',
    blend: '70% Robusta + 30% Robusta Culi',
    processing: 'Chế biến khô (Natural)',
    flavorNotes: ['Chocolate đen', 'Mạch nha', 'Hậu vị đậm'],
    descriptionShort: 'Mua 12kg gu Phổ Thông P3 — tặng máy pha cà phê 20 bar. Thanh toán 50% trước.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 458000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf.jpg',
    alt: 'Gói An Nhiên 12kg P3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 2',
    todoImage: false,
  },
  {
    id: 'ANCF-C',
    slug: 'an-nhien-combo-c',
    code: 'ANCF.C',
    name: 'Gói An Nhiên 12kg — Gu Truyền Thống C',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: '70% Robusta + 30% Arabica Cầu Đất',
    altitude: '700–1650m',
    blend: '70% Robusta + 30% Arabica Cầu Đất',
    processing: 'Chế biến ướt (Washed)',
    flavorNotes: ['Các loại hạt béo rang', 'Chocolate', 'Caramel'],
    descriptionShort: 'Mua 12kg gu Truyền Thống C — tặng máy pha cà phê 20 bar.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 492000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf.jpg',
    alt: 'Gói An Nhiên 12kg C FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 3',
    todoImage: false,
  },
  {
    id: 'ANCF-C3',
    slug: 'an-nhien-combo-c3',
    code: 'ANCF.C3',
    name: 'Gói An Nhiên 12kg — Gu Truyền Thống C3',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: '70% Robusta Culi + 30% Arabica Cầu Đất',
    altitude: '700–1650m',
    blend: '70% Robusta Culi + 30% Arabica Cầu Đất',
    processing: 'Chế biến ướt (Washed)',
    flavorNotes: ['Các loại hạt béo rang', 'Chocolate', 'Caramel nhẹ'],
    descriptionShort: 'Mua 12kg gu Truyền Thống C3 — tặng máy pha cà phê 20 bar.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 518000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf.jpg',
    alt: 'Gói An Nhiên 12kg C3 FCD',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 4',
    todoImage: false,
  },
  {
    id: 'ANCF-B3',
    slug: 'an-nhien-combo-b3',
    code: 'ANCF.B3',
    name: 'Gói An Nhiên 12kg — Gu Đậm Vị B3',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: '100% Robusta Culi Buôn Ma Thuột, Đắk Lắk',
    altitude: '700m',
    blend: '100% Robusta Culi',
    processing: 'Chế biến ướt (Washed)',
    flavorNotes: ['Sô-cô-la', 'Mạch nha (Malt)', 'Hạnh nhân (Almond)'],
    descriptionShort: 'Mua 12kg gu Đậm Vị B3 — tặng máy pha 20 bar. Hương sô-cô-la đậm.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 570000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf.jpg',
    alt: 'Gói An Nhiên 12kg B3 FCD — gu Đậm Vị',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 5',
    todoImage: false,
  },
  {
    id: 'ANCF-MIX',
    slug: 'an-nhien-combo-mix',
    code: 'ANCF.MIX',
    name: 'Gói An Nhiên 12kg — Trọn Gu Mix (8 gu)',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: 'Robusta Buôn Ma Thuột & Arabica Cầu Đất, Lâm Đồng',
    altitude: '700–1650m',
    blend: 'Mix đủ 8 gu P, P3, C, C3, B3, A3, CAO1, O1',
    processing: 'Blend đa dạng',
    flavorNotes: ['Đa dạng theo lô', 'Phù hợp mọi khẩu vị'],
    descriptionShort: 'Mua 12kg mix đủ 8 gu — văn phòng nhiều người, nhiều khẩu vị. Tặng máy pha 20 bar.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 628000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf2.jpg',
    alt: 'Gói An Nhiên 12kg Mix FCD — trọn 8 gu',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 6',
    todoImage: false,
  },
  {
    id: 'ANCF-A3',
    slug: 'an-nhien-combo-a3',
    code: 'ANCF.A3',
    name: 'Gói An Nhiên 12kg — Gu Cân Bằng A3',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: '80% Robusta Culi + 20% Arabica Cầu Đất hái bằng tay',
    altitude: '700–1650m',
    blend: '80% Robusta Culi + 20% Arabica Cầu Đất',
    processing: 'Blend: Khô (Robusta) + Ướt (Arabica)',
    flavorNotes: ['Sô-cô-la (Chocolate)', 'Caramel', 'Hạnh nhân (Almond)', 'Gia vị cay (Spices)'],
    descriptionShort: 'Mua 12kg gu Cân Bằng A3 — tặng máy pha 20 bar. Medium roast, hương caramel.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 706000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf2.jpg',
    alt: 'Gói An Nhiên 12kg A3 FCD — gu Cân Bằng',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 7',
    todoImage: false,
  },
  {
    id: 'ANCF-CAO1',
    slug: 'an-nhien-combo-cao1',
    code: 'ANCF.CAO1',
    name: 'Gói An Nhiên 12kg — Gu Tinh Túy CAO1',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: '50% Robusta Buôn Ma Thuột + 50% Arabica hái bằng tay Cầu Đất 1650m',
    altitude: '700–1650m',
    blend: '50% Robusta + 50% Arabica Cầu Đất',
    processing: 'Blend: Natural (Robusta) + Washed (Arabica)',
    flavorNotes: ['Sô-cô-la (Chocolate)', 'Hạnh nhân (Almond)', 'Trái cây (Fruity)', 'Gia vị cay (Spices)'],
    descriptionShort: 'Mua 12kg gu Tinh Túy CAO1 — tặng máy pha 20 bar. 50% Arabica Cầu Đất cao cấp.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 826000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf2.jpg',
    alt: 'Gói An Nhiên 12kg CAO1 FCD — gu Tinh Túy',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 8',
    todoImage: false,
  },
  {
    id: 'ANCF-O1',
    slug: 'an-nhien-combo-o1',
    code: 'ANCF.O1',
    name: 'Gói An Nhiên 12kg — Gu Nguyên Bản O1',
    guLabel: 'Gói An Nhiên',
    group: 'an-nhien-combo',
    origin: '100% Catimor hái bằng tay Cầu Đất, Lâm Đồng',
    altitude: '1650m',
    blend: '100% Catimor Cầu Đất',
    processing: 'Chế biến ướt (Washed)',
    flavorNotes: ['Sô-cô-la (Chocolate)', 'Caramel', 'Mạch nha (Malt)', 'Trái cây (Fruity)'],
    descriptionShort: 'Mua 12kg gu Nguyên Bản O1 — tặng máy pha 20 bar. 100% Catimor chế biến ướt Cầu Đất.',
    sizes: ['combo'],
    prices: [{ size: 'combo', price: 1026000, currency: 'VND' }],
    featured: false,
    image: '/images/products/ancf2.jpg',
    alt: 'Gói An Nhiên 12kg O1 FCD — gu Nguyên Bản',
    sourceRef: 'FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf tr.11 STT 9',
    todoImage: false,
  },
]
