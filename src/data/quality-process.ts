/**
 * src/data/quality-process.ts
 * NEW MODULE — STEP 2
 *
 * Source: "An Nhiên Cùng FCD.docx" §3.1 + §2.5 (SCA grading) + "Giới thiệu Cà phê Đặc sản SCA"
 * 
 * 10 Bước Kiểm Soát Cà Phê Đặc Sản Chất Lượng Cao
 * 6 Loại Hạt Lỗi SCA Sơ Cấp
 * Thang đo 5 cấp độ SCA
 */

export interface QualityStep {
  step: number
  title: string
  description: string
  proof: string
  icon: string
  category: 'origin' | 'processing' | 'sorting' | 'roasting' | 'packaging'
}

export interface SCADefect {
  id: string
  name: string
  nameEn: string
  why: string
  health: boolean
}

export interface SCAGrade {
  grade: number
  label: string
  description: string
  status: 'warning' | 'risk' | 'acceptable' | 'good' | 'specialty'
}

// ─── 10 BƯỚC KIỂM SOÁT ───────────────────────────────────────────────────────
// Source: An Nhiên Cùng FCD.docx §3.1 — "hệ sinh thái khép kín từ nông trại đến ly cà phê"

export const qualitySteps: QualityStep[] = [
  {
    step: 1,
    title: 'Lựa chọn vùng nguyên liệu',
    description:
      'Chỉ thu mua từ vùng cao Cầu Đất (1.500–1.650m) và Buôn Ma Thuột — hai vùng nguyên liệu đặc sản hàng đầu Việt Nam với điều kiện khí hậu và thổ nhưỡng lý tưởng.',
    proof: 'SCA origin traceability',
    icon: '🗺️',
    category: 'origin',
  },
  {
    step: 2,
    title: 'Thu hái chọn lọc',
    description:
      'Chỉ thu hái quả chín đỏ đều — loại bỏ quả xanh, quả còn non ngay từ vườn trồng. Đảm bảo đường trong quả đạt độ chín tối ưu cho chất lượng hương vị.',
    proof: 'Selective picking protocol',
    icon: '☕',
    category: 'origin',
  },
  {
    step: 3,
    title: 'Phân loại quả tươi',
    description:
      'Phân loại cơ học theo density — loại bỏ quả lép, quả lỗi bằng máy tách phù nổi trước khi đưa vào chế biến.',
    proof: 'Density sorting',
    icon: '⚖️',
    category: 'processing',
  },
  {
    step: 4,
    title: 'Chế biến theo quy trình',
    description:
      'Áp dụng quy trình chế biến phù hợp theo từng dòng sản phẩm: Washed (ướt) cho Arabica CAO1/O1, Honey/Natural cho các dòng blend — đảm bảo hương vị đặc trưng.',
    proof: 'Controlled processing protocol',
    icon: '🏭',
    category: 'processing',
  },
  {
    step: 5,
    title: 'Phơi sấy kiểm soát',
    description:
      'Phơi trên giàn cao, kiểm soát nhiệt độ và độ ẩm đến ngưỡng <11%. Đảm bảo hạt nhân xanh đồng đều, không mốc, không lên men không kiểm soát.',
    proof: 'Moisture control (<11%)',
    icon: '☀️',
    category: 'processing',
  },
  {
    step: 6,
    title: 'Phân loại hạt nhân xanh',
    description:
      'Sàng lọc theo kích thước và density. Phân loại theo tiêu chuẩn SCA — chỉ giữ lại hạt đạt ngưỡng đặc sản (specialty grade ≥ 80 điểm trên thang SCA).',
    proof: 'SCA Green Coffee Classification',
    icon: '🌿',
    category: 'sorting',
  },
  {
    step: 7,
    title: 'Loại bỏ hạt lỗi bằng máy quang học Nhật Bản',
    description:
      'Sử dụng máy quang học Nhật Bản loại bỏ 100% 6 loại hạt lỗi sơ cấp SCA: hạt mốc (Fungus Damaged), hạt đen (Full Black), hạt chua (Full Sour), hạt sâu mốc (Severe Insect Damage), vỏ quả khô (Dried Cherry), tạp chất (Foreign Matter). Loại bỏ hoàn toàn Ochratoxin A.',
    proof: 'Optical sorting — 100% primary defect removal',
    icon: '🔍',
    category: 'sorting',
  },
  {
    step: 8,
    title: 'Rang bằng máy Hot-air của Ý',
    description:
      'Rang bằng máy Hot-air Ý — kiểm soát nhiệt độ chính xác từng mẻ. Loại bỏ hoàn toàn tình trạng khét cháy sinh độc tố. 100 hạt đồng đều như 1 — không sai số do con người.',
    proof: 'Hot-air roasting — precision temperature control',
    icon: '🔥',
    category: 'roasting',
  },
  {
    step: 9,
    title: 'Kiểm định chất lượng sau rang',
    description:
      'Cupping theo giao thức SCA sau mỗi mẻ rang. Đánh giá hương/vị/aftertaste theo thang điểm chuẩn. Chỉ xuất kho khi đạt profile hương vị đã định hình cho từng SKU.',
    proof: 'SCA Cupping Protocol post-roast',
    icon: '✅',
    category: 'roasting',
  },
  {
    step: 10,
    title: 'Đóng gói & Bảo quản',
    description:
      'Đóng gói ngay sau rang để giữ CO₂ còn lại trong hạt. Túi one-way valve ngăn oxy xâm nhập. Truy xuất batch rang và ngày sản xuất trên bao bì — minh bạch đến từng túi.',
    proof: 'One-way valve packaging — degassing control',
    icon: '📦',
    category: 'packaging',
  },
]

// ─── 6 LOẠI HẠT LỖI SCA SƠ CẤP ─────────────────────────────────────────────
// Source: An Nhiên Cùng FCD.docx §2.5.2 — "6 loại Lỗi sơ cấp (Primary Defects) cực kỳ nguy hiểm"

export const scaPrimaryDefects: SCADefect[] = [
  {
    id: 'fungus-damaged',
    name: 'Hạt mốc',
    nameEn: 'Fungus Damaged',
    why: 'Chứa độc tố Ochratoxin A — gây hại cho gan và thận khi tích lũy lâu dài.',
    health: true,
  },
  {
    id: 'full-black',
    name: 'Hạt đen',
    nameEn: 'Full Black',
    why: 'Hạt bị lên men quá mức — gây vị đắng chát và chua lạ không kiểm soát.',
    health: false,
  },
  {
    id: 'full-sour',
    name: 'Hạt chua',
    nameEn: 'Full Sour',
    why: 'Hạt bị lên men acid — gây vị chua bất thường, phá hủy hương vị toàn mẻ rang.',
    health: false,
  },
  {
    id: 'severe-insect',
    name: 'Hạt sâu mốc',
    nameEn: 'Severe Insect Damage',
    why: 'Hạt bị sâu đục và phân hủy — kèm nấm mốc thứ cấp nguy hiểm.',
    health: true,
  },
  {
    id: 'dried-cherry',
    name: 'Vỏ quả khô',
    nameEn: 'Dried Cherry / Pod',
    why: 'Lẫn vỏ quả khô — gây vị lên men và chua không có chủ đích khi rang.',
    health: false,
  },
  {
    id: 'foreign-matter',
    name: 'Tạp chất',
    nameEn: 'Foreign Matter',
    why: 'Đá, kim loại, đất cát lẫn vào hạt — nguy cơ vật lý và ô nhiễm.',
    health: true,
  },
]

// ─── THANG ĐO 5 CẤP ĐỘ SCA ────────────────────────────────────────────────────
// Source: An Nhiên Cùng FCD.docx §2.5.3

export const scaGrades: SCAGrade[] = [
  {
    grade: 1,
    label: 'SCA Specialty Grade',
    description: 'Cà phê đặc sản — dưới 5 lỗi sơ cấp/300g mẫu. FCD target.',
    status: 'specialty',
  },
  {
    grade: 2,
    label: 'SCA Premium Grade',
    description: 'Chất lượng cao — dưới 8 lỗi sơ cấp/300g. Có thể chấp nhận.',
    status: 'good',
  },
  {
    grade: 3,
    label: 'SCA Exchange Grade',
    description: 'Hàng sàn giao dịch — từ 8–23 lỗi sơ cấp. Cà phê thương mại phổ thông.',
    status: 'acceptable',
  },
  {
    grade: 4,
    label: 'SCA Below Standard',
    description: 'Dưới tiêu chuẩn — từ 24–86 lỗi sơ cấp. Nhiều quán vỉa hè Việt Nam.',
    status: 'risk',
  },
  {
    grade: 5,
    label: 'SCA Off Grade',
    description: 'Thải loại — trên 86 lỗi sơ cấp. Hàng kém chất lượng nghiêm trọng.',
    status: 'warning',
  },
]

// ─── SCA EXPLANATION ──────────────────────────────────────────────────────────
// Source: An Nhiên Cùng FCD.docx §2.5.1

export const scaExplained = {
  fullName: 'Specialty Coffee Association',
  description:
    'SCA (Specialty Coffee Association) là Hiệp hội Cà phê Đặc sản Thế giới — tổ chức phi lợi nhuận quốc tế uy tín nhất, tập hợp hàng ngàn chuyên gia nhằm thiết lập các quy chuẩn đánh giá chất lượng khắt khe cho ngành công nghiệp cà phê toàn cầu.',
  significance:
    'Tuân thủ tiêu chuẩn SCA chính là "bảo chứng vàng" cho tính minh bạch, sự bền vững và chất lượng hảo hạng từ nông trại cho đến tận ly cà phê.',
  fcdCompliance:
    'FCD áp dụng tiêu chuẩn SCA ở tất cả các bước từ lựa chọn vùng nguyên liệu, phân loại hạt nhân xanh, đến cupping kiểm định sau rang.',
}
