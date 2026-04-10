/**
 * src/data/prices.ts
 * Source: FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf
 * Ngày hiệu lực: 10/02/2026
 * Chỉ map giá xác minh trực tiếp từ bảng giá niêm yết.
 */

export interface PriceItem {
  productCode: string
  productName: string
  unit: string
  retailPrice: number
  comboPrice?: number
  comboNote?: string
  category: 'retail' | 'combo' | 'gift' | 'dung-cu' | 'phin-giay'
}

export interface PriceList {
  updatedAt: string
  effectiveDate: string
  note: string
  items: PriceItem[]
}

export const priceList: PriceList = {
  updatedAt: '2026-02-10',
  effectiveDate: '2026-02-10',
  note: 'Giá niêm yết khách hàng lẻ, áp dụng từ 10/02/2026. Đơn vị: VNĐ. Vui lòng xác nhận với đại sứ FCD trước khi đặt hàng.',

  items: [
    // ── GU PHỔ THÔNG ─────────────────────────────────────────────
    { productCode: 'P', productName: 'Gu Phổ Thông P — 250g', unit: 'gói', retailPrice: 111000, category: 'retail' },
    { productCode: 'P', productName: 'Gu Phổ Thông P — 500g', unit: 'gói', retailPrice: 218000, category: 'retail' },
    { productCode: 'P', productName: 'Gu Phổ Thông P — 1kg', unit: 'gói', retailPrice: 426000, category: 'retail' },
    { productCode: 'P', productName: 'Gu Phổ Thông P — 2kg', unit: 'gói', retailPrice: 850000, category: 'retail' },
    { productCode: 'P3', productName: 'Gu Phổ Thông P3 — 250g', unit: 'gói', retailPrice: 117000, category: 'retail' },
    { productCode: 'P3', productName: 'Gu Phổ Thông P3 — 500g', unit: 'gói', retailPrice: 229000, category: 'retail' },
    { productCode: 'P3', productName: 'Gu Phổ Thông P3 — 1kg', unit: 'gói', retailPrice: 449000, category: 'retail' },
    { productCode: 'P3', productName: 'Gu Phổ Thông P3 — 2kg', unit: 'gói', retailPrice: 897000, category: 'retail' },

    // ── GU TRUYỀN THỐNG ──────────────────────────────────────────
    { productCode: 'C', productName: 'Gu Truyền Thống C — 250g', unit: 'gói', retailPrice: 125000, category: 'retail' },
    { productCode: 'C', productName: 'Gu Truyền Thống C — 500g', unit: 'gói', retailPrice: 246000, category: 'retail' },
    { productCode: 'C', productName: 'Gu Truyền Thống C — 1kg', unit: 'gói', retailPrice: 482000, category: 'retail' },
    { productCode: 'C', productName: 'Gu Truyền Thống C — 2kg', unit: 'gói', retailPrice: 963000, category: 'retail' },
    { productCode: 'C3', productName: 'Gu Truyền Thống C3 — 250g', unit: 'gói', retailPrice: 131000, category: 'retail' },
    { productCode: 'C3', productName: 'Gu Truyền Thống C3 — 500g', unit: 'gói', retailPrice: 259000, category: 'retail' },
    { productCode: 'C3', productName: 'Gu Truyền Thống C3 — 1kg', unit: 'gói', retailPrice: 507000, category: 'retail' },
    { productCode: 'C3', productName: 'Gu Truyền Thống C3 — 2kg', unit: 'gói', retailPrice: 1014000, category: 'retail' },

    // ── GU ĐẬM VỊ ────────────────────────────────────────────────
    { productCode: 'B3', productName: 'Gu Đậm Vị B3 — 250g', unit: 'gói', retailPrice: 147000, category: 'retail' },
    { productCode: 'B3', productName: 'Gu Đậm Vị B3 — 500g', unit: 'gói', retailPrice: 285000, category: 'retail' },
    { productCode: 'B3', productName: 'Gu Đậm Vị B3 — 1kg', unit: 'gói', retailPrice: 559000, category: 'retail' },
    { productCode: 'B3', productName: 'Gu Đậm Vị B3 — 2kg', unit: 'gói', retailPrice: 1107000, category: 'retail' },

    // ── GU CÂN BẰNG ──────────────────────────────────────────────
    { productCode: 'A3', productName: 'Gu Cân Bằng A3 — 250g', unit: 'gói', retailPrice: 181000, category: 'retail' },
    { productCode: 'A3', productName: 'Gu Cân Bằng A3 — 500g', unit: 'gói', retailPrice: 353000, category: 'retail' },
    { productCode: 'A3', productName: 'Gu Cân Bằng A3 — 1kg', unit: 'gói', retailPrice: 694000, category: 'retail' },
    { productCode: 'A3', productName: 'Gu Cân Bằng A3 — 2kg', unit: 'gói', retailPrice: 1379000, category: 'retail' },

    // ── GU TINH TẾ ───────────────────────────────────────────────
    { productCode: 'CAO1', productName: 'Gu Tinh Tế CAO1 — 250g', unit: 'gói', retailPrice: 211000, category: 'retail' },
    { productCode: 'CAO1', productName: 'Gu Tinh Tế CAO1 — 500g', unit: 'gói', retailPrice: 413000, category: 'retail' },
    { productCode: 'CAO1', productName: 'Gu Tinh Tế CAO1 — 1kg', unit: 'gói', retailPrice: 814000, category: 'retail' },
    { productCode: 'CAO1', productName: 'Gu Tinh Tế CAO1 — 2kg', unit: 'gói', retailPrice: 1617000, category: 'retail' },

    // ── GU NGUYÊN BẢN ────────────────────────────────────────────
    { productCode: 'O1', productName: 'Gu Nguyên Bản O1 — 250g', unit: 'gói', retailPrice: 261000, category: 'retail' },
    { productCode: 'O1', productName: 'Gu Nguyên Bản O1 — 500g', unit: 'gói', retailPrice: 513000, category: 'retail' },
    { productCode: 'O1', productName: 'Gu Nguyên Bản O1 — 1kg', unit: 'gói', retailPrice: 1016000, category: 'retail' },
    { productCode: 'O1', productName: 'Gu Nguyên Bản O1 — 2kg', unit: 'gói', retailPrice: 2022000, category: 'retail' },

    // ── PHIN GIẤY ────────────────────────────────────────────────
    { productCode: 'C3', productName: 'Phin Giấy C3 — 1 gói 15g', unit: 'gói', retailPrice: 16000, category: 'phin-giay' },
    { productCode: 'C3', productName: 'Phin Giấy C3 — Hộp 5 gói', unit: 'hộp', retailPrice: 73000, category: 'phin-giay' },
    { productCode: 'C3', productName: 'Phin Giấy C3 — Hộp 10 gói', unit: 'hộp', retailPrice: 145000, category: 'phin-giay' },
    { productCode: 'B3', productName: 'Phin Giấy B3 — 1 gói 15g', unit: 'gói', retailPrice: 17000, category: 'phin-giay' },
    { productCode: 'B3', productName: 'Phin Giấy B3 — Hộp 5 gói', unit: 'hộp', retailPrice: 78000, category: 'phin-giay' },
    { productCode: 'B3', productName: 'Phin Giấy B3 — Hộp 10 gói', unit: 'hộp', retailPrice: 155000, category: 'phin-giay' },
    { productCode: 'A3', productName: 'Phin Giấy A3 — 1 gói 15g', unit: 'gói', retailPrice: 19000, category: 'phin-giay' },
    { productCode: 'A3', productName: 'Phin Giấy A3 — Hộp 5 gói', unit: 'hộp', retailPrice: 92000, category: 'phin-giay' },
    { productCode: 'A3', productName: 'Phin Giấy A3 — Hộp 10 gói', unit: 'hộp', retailPrice: 183000, category: 'phin-giay' },

    // ── GÓI AN NHIÊN 12KG (AN NHIÊN CÙNG FROM CẦU ĐẤT) ─────────────
    // Source: FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf — trang 11
    // Giá = niêm yết (vnd/kg). Tổng trị = giá × 12.
    // Thanh toán 50% trước, 50% còn lại trả góp 11 tháng.
    // Kèm tặng máy pha cà phê 20 bar.
    { productCode: 'ANCF.P',    productName: 'Gói An Nhiên 12kg — Gu Phổ Thông P',   unit: 'vnd/kg', retailPrice: 436000,  category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
    { productCode: 'ANCF.P3',   productName: 'Gói An Nhiên 12kg — Gu Phổ Thông P3',  unit: 'vnd/kg', retailPrice: 458000,  category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
    { productCode: 'ANCF.C',    productName: 'Gói An Nhiên 12kg — Gu Truyền Thống C', unit: 'vnd/kg', retailPrice: 492000,  category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
    { productCode: 'ANCF.C3',   productName: 'Gói An Nhiên 12kg — Gu Truyền Thống C3',unit: 'vnd/kg', retailPrice: 518000,  category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
    { productCode: 'ANCF.B3',   productName: 'Gói An Nhiên 12kg — Gu Đậm Vị B3',     unit: 'vnd/kg', retailPrice: 570000,  category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
    { productCode: 'ANCF.MIX',  productName: 'Gói An Nhiên 12kg — Trọn Gu Mix (8 gu)',unit: 'vnd/kg', retailPrice: 628000,  category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
    { productCode: 'ANCF.A3',   productName: 'Gói An Nhiên 12kg — Gu Cân Bằng A3',   unit: 'vnd/kg', retailPrice: 706000,  category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
    { productCode: 'ANCF.CAO1', productName: 'Gói An Nhiên 12kg — Gu Tinh Túy CAO1', unit: 'vnd/kg', retailPrice: 826000,  category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
    { productCode: 'ANCF.O1',   productName: 'Gói An Nhiên 12kg — Gu Nguyên Bản O1', unit: 'vnd/kg', retailPrice: 1026000, category: 'combo', comboNote: 'Mua 12kg tặng máy pha 20 bar — TT 50% trước' },
  ],
}
