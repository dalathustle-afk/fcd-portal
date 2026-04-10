/**
 * src/data/an-nhien.ts
 * Source: FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx
 * Bám sát triết lý "An" / "Nhìn", 5 Không, 10 bước kiểm soát, proof points, cost-per-cup.
 */

export interface AnNhienSection {
  id: string
  title: string
  description?: string
  bullets?: string[]
}

export interface CostPerCupItem {
  code: string
  name: string
  /** Giá 1kg (VND) */
  pricePerKg: number
  /** Chi phí / ly 70ml (VND) */
  costPerCup70: number
  /** Chi phí / ly 140ml (VND) */
  costPerCup140: number
  sourceRef: string
}

export interface AnNhienData {
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  meaningAn: AnNhienSection
  meaningNhin: AnNhienSection
  fiveNos: string[]
  controlSteps: string[]
  proofPoints: string[]
  costPerCup: CostPerCupItem[]
  combo12kg: AnNhienSection
  faqs: { q: string; a: string }[]
}

export const anNhienData: AnNhienData = {
  heroTitle: 'An Nhiên cùng FCD',
  heroSubtitle: 'Cà phê đặc sản — an toàn, minh bạch, nguyên bản',
  heroDescription:
    '"An Nhiên cùng FCD" là chương trình giá trị toàn diện: sản phẩm an toàn kiểm soát chặt, nguồn gốc minh bạch, và trải nghiệm cà phê đặc sản dễ tiếp cận.',

  // ── "AN" ─────────────────────────────────────────────────────────
  meaningAn: {
    id: 'an',
    title: '"AN" — An Toàn & An Tâm',
    description:
      'FCD kiểm soát chất lượng theo hệ thống 10 bước — từ vùng trồng, thu hoạch, sơ chế, rang, xay đến đóng gói và lưu trữ. Người dùng an tâm vì biết rõ mình đang uống gì, từ đâu, và ai chịu trách nhiệm.',
    bullets: [
      'An toàn cho sức khỏe — quy trình kiểm soát nhiều bước',
      'An tâm về nguồn gốc — truy xuất được từ vùng trồng',
      'An tâm về giá — niêm yết công khai, không ẩn phí',
    ],
  },

  // ── "NHÌN" ───────────────────────────────────────────────────────
  meaningNhin: {
    id: 'nhin',
    title: '"NHÌN" — Tự Nhiên & Nguyên Bản',
    description:
      '"Nhìn" trong An Nhiên hướng đến tự nhiên, nguyên bản và minh bạch — gắn liền với cam kết 5 Không của FCD.',
    bullets: [
      'Tự nhiên — không can thiệp hóa chất không cần thiết',
      'Nguyên bản — giữ đặc tính vùng trồng, không làm giả hương vị',
      'Minh bạch — thông tin sản phẩm, giá cả và nguồn gốc công khai',
    ],
  },

  // ── 5 KHÔNG ──────────────────────────────────────────────────────
  // Source: FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx
  fiveNos: [
    'Không trộn độn (không pha tạp chất ngoài cà phê)',
    'Không tẩm ướp (không dùng hương liệu nhân tạo)',
    'Không khét cháy (kiểm soát nhiệt độ rang chính xác)',
    'Không tạp hương / tạp vị (quy trình vệ sinh thiết bị nghiêm ngặt)',
    'Không nấm mốc độc tố (kiểm soát độ ẩm và bảo quản đúng chuẩn)',
  ],

  // ── 10 BƯỚC KIỂM SOÁT ─────────────────────────────────────────
  // Source: FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx
  controlSteps: [
    'Chọn lọc vùng trồng — chỉ làm việc với vùng nguyên liệu đủ tiêu chuẩn',
    'Thu hoạch chọn lọc — chỉ hái quả chín đỏ',
    'Sơ chế sau thu hoạch — kiểm soát lên men, phơi hoặc rửa nước đúng chuẩn',
    'Lựa hạt xanh — loại bỏ hạt lép, hạt lỗi, hạt mốc',
    'Kiểm định cảm quan trước rang — cupping hạt xanh',
    'Rang theo profile chuẩn — kiểm soát nhiệt độ và thời gian',
    'Kiểm định sau rang — cupping batch thành phẩm',
    'Xay và đóng gói trong môi trường kiểm soát',
    'Niêm phong và ghi rõ ngày rang, hạn dùng',
    'Bảo quản và vận chuyển đúng điều kiện — tránh nhiệt, ẩm, ánh sáng',
  ],

  // ── PROOF POINTS ─────────────────────────────────────────────────
  // Source: FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx
  proofPoints: [
    'Quy trình rang xay theo định hướng SCA (Specialty Coffee Association)',
    'Kiểm nghiệm an toàn thực phẩm theo tiêu chuẩn FDA',
    'Hướng đến ISO 22000 và HACCP trong kiểm soát sản xuất',
    'Sản phẩm không hương liệu, không phụ gia, không tạo màu nhân tạo',
    'Nguồn gốc từ Arabica Cầu Đất 1.500m+ và Robusta Buôn Ma Thuột',
  ],

  // ── COST PER CUP ─────────────────────────────────────────────────
  // Source: FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx
  // Giá 1kg tính theo bảng giá niêm yết. Chi phí/ly tính theo liều dùng chuẩn.
  costPerCup: [
    {
      code: 'P3',
      name: 'P3 — Gu Phổ Thông',
      pricePerKg: 449000,
      costPerCup70: 31430,
      costPerCup140: 62860,
      sourceRef: 'FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx',
    },
    {
      code: 'C3',
      name: 'C3 — Gu Truyền Thống',
      pricePerKg: 507000,
      costPerCup70: 35490,
      costPerCup140: 70980,
      sourceRef: 'FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx',
    },
    {
      code: 'B3',
      name: 'B3 — Gu Đậm Vị',
      pricePerKg: 559000,
      costPerCup70: 39130,
      costPerCup140: 78260,
      sourceRef: 'FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx',
    },
    {
      code: 'A3',
      name: 'A3 — Gu Cân Bằng',
      pricePerKg: 694000,
      costPerCup70: 48580,
      costPerCup140: 97160,
      sourceRef: 'FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx',
    },
    {
      code: 'CAO1',
      name: 'CAO1 — Gu Tinh Tế',
      pricePerKg: 814000,
      costPerCup70: 56980,
      costPerCup140: 113960,
      sourceRef: 'FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx',
    },
    {
      code: 'O1',
      name: 'O1 — Gu Nguyên Bản',
      pricePerKg: 1016000,
      costPerCup70: 71120,
      costPerCup140: 142240,
      sourceRef: 'FCD - BO GIAO TRINH - AN NHIEN CUNG FCD.docx',
    },
  ],

  // ── COMBO 12KG ───────────────────────────────────────────────────
  // Source: FCD-Bang-gia-niem-yet-KH-le-100226-1.pdf + FCD docx
  combo12kg: {
    id: 'combo-12kg',
    title: 'Gói An Nhiên 12kg',
    description:
      'Gói combo 12kg dành cho văn phòng, đối tác và doanh nghiệp — ổn định nguồn cung, tiết kiệm chi phí, linh hoạt lựa chọn gu.',
    bullets: [
      'Các mã: ANCF.P / ANCF.P3 / ANCF.C / ANCF.C3 / ANCF.B3 / ANCF.MIX / ANCF.A3 / ANCF.CAO1 / ANCF.O1',
      'Mix được nhiều gu khác nhau trong cùng gói 12kg',
      'Khi mua combo 12kg kèm điều kiện: được tặng kèm máy pha espresso 20 bar (chương trình áp dụng có điều kiện)',
      'Liên hệ để xác nhận điều kiện tặng máy và ưu đãi hiện hành',
    ],
  },

  // ── FAQ ──────────────────────────────────────────────────────────
  faqs: [
    {
      q: '5 Không của FCD là gì?',
      a: 'FCD cam kết không trộn độn, không tẩm ướp hương liệu, không khét cháy khi rang, không tạp hương/tạp vị, không nấm mốc độc tố. Đây là nền tảng chất lượng của mọi sản phẩm FCD.',
    },
    {
      q: 'Chi phí mỗi ly cà phê FCD là bao nhiêu?',
      a: 'Tùy gu: từ khoảng 31.000đ/ly (P3, ly 70ml) đến 71.000đ/ly (O1, ly 70ml). Với ly 140ml, chi phí nhân đôi. Xem bảng chi phí/ly đầy đủ trong mục cost-per-cup.',
    },
    {
      q: 'Gói An Nhiên 12kg phù hợp với ai?',
      a: 'Văn phòng từ 5-50 người, quán cà phê cần nguồn nguyên liệu ổn định, hoặc đối tác muốn tiết kiệm chi phí dài hạn. Mix được nhiều gu trong cùng gói.',
    },
    {
      q: 'FCD có chứng nhận chất lượng gì?',
      a: 'Quy trình rang theo định hướng SCA. Kiểm nghiệm an toàn thực phẩm theo tiêu chuẩn FDA. Hướng đến ISO 22000 và HACCP. Không sử dụng hương liệu hay phụ gia nhân tạo.',
    },
    {
      q: 'Combo 12kg có được tặng máy pha espresso không?',
      a: 'Chương trình tặng máy pha espresso 20 bar áp dụng có điều kiện khi mua combo An Nhiên 12kg. Vui lòng liên hệ FCD để xác nhận điều kiện và ưu đãi hiện hành.',
    },
  ],
}
