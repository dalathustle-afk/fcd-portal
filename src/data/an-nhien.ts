/**
 * src/data/an-nhien.ts
 * Source: An Nhiên Cùng FCD.docx (CHƯƠNG 3 + CHƯƠNG 4)
 *
 * Verified content sections:
 * - 3.1 "AN" meaning (An Toàn + An Tâm)
 * - 3.2 "NHIÊN" + 5 Không
 * - 3.2.2 Cost-per-cup table (verified from docx table)
 * - Certifications mentioned in docx: FDA, ISO, HACCP, SCA
 * - Machine 20 bar (combo tặng kèm)
 * - 10 Bước kiểm soát chất lượng (referenced in docx §3.1)
 *
 * NOTE: File cũ đã bị xóa. Nguồn duy nhất là "An Nhiên Cùng FCD.docx"
 */

// ─── TYPES ───────────────────────────────────────────────────────────────────

export interface TenStep {
  step: number
  title: string
  description: string
  proof: string
  icon: string
}

export interface FiveNo {
  id: string
  number: number
  title: string
  description: string
  icon: string
}



// ─── AN MEANING ─────────────────────────────────────────────────────────────

export const anMeaning = {
  title: 'AN',
  subtitle: 'An Toàn · An Tâm',
  description:
    'Sự "An" này có được là nhờ FCD tuân thủ nghiêm ngặt một hệ sinh thái khép kín từ nông trại đến ly cà phê, được hệ thống hóa qua Quy trình 10 bước kiểm soát Cà phê Đặc sản Chất lượng cao.',
  pillars: [
    {
      id: 'an-toan',
      title: 'An Toàn',
      description:
        'Lọc sạch 100% hạt mốc (chứa độc tố Ochratoxin A), không hóa chất tẩm ướp, không hương liệu nhân tạo — được kiểm nghiệm độc lập và bảo chứng bởi hệ thống chứng nhận uy tín toàn cầu.',
    },
    {
      id: 'an-tam',
      title: 'An Tâm',
      description:
        'Quy trình khép kín từ vùng trồng đến tay người dùng — minh bạch, có thể kiểm chứng. Khách hàng sở hữu gói An Nhiên tự động trở thành thành viên VIP với chính sách bảo đảm xuyên suốt.',
    },
  ],
}

// ─── NHIEN MEANING ───────────────────────────────────────────────────────────

export const nhienMeaning = {
  title: 'NHIÊN',
  subtitle: 'Tự Nhiên · Nguyên Bản · Minh Bạch',
  description:
    'Trong bối cảnh nhiều thương hiệu trên thị trường phải nhờ cậy đến hóa chất để tạo mùi thơm, đánh lừa vị giác người tiêu dùng, FCD kiên định theo đuổi triết lý "5 Không" để trả lại giá trị thực sự cho hạt cà phê.',
  pillars: [
    {
      id: 'tu-nhien',
      title: 'Tự Nhiên',
      description: 'Hạt cà phê được xử lý và rang thuần khiết, không can thiệp nhân tạo.',
    },
    {
      id: 'nguyen-ban',
      title: 'Nguyên Bản',
      description: 'Giữ trọn bản sắc hương vị của vùng nguyên liệu — terroir Cầu Đất và Buôn Ma Thuột.',
    },
    {
      id: 'minh-bach',
      title: 'Minh Bạch',
      description: 'FCD đã hệ thống hóa và minh bạch hóa toàn bộ quy trình thông qua Hệ thống Chứng nhận uy tín toàn cầu — khách hàng có thể kiểm chứng.',
    },
  ],
}

// ─── 5 KHÔNG ─────────────────────────────────────────────────────────────────

export const fiveNoes = [
  {
    id: 'no-1',
    number: 1,
    title: 'Không trộn độn',
    description:
      'Tuyệt đối không pha lẫn bắp, đậu nành hay bất kỳ ngũ cốc nào khác vào sản phẩm cà phê.',
    icon: '🌾',
  },
  {
    id: 'no-2',
    number: 2,
    title: 'Không tẩm ướp',
    description:
      'Không sử dụng bơ, vanilla, caramel hay các hương liệu hóa học nhân tạo để tạo mùi.',
    icon: '🧪',
  },
  {
    id: 'no-3',
    number: 3,
    title: 'Không khét cháy',
    description:
      'Áp dụng kỹ thuật rang Hot-air của Ý tiên tiến, loại bỏ hoàn toàn tình trạng hạt bị cháy khét sinh ra độc tố.',
    icon: '🔥',
  },
  {
    id: 'no-4',
    number: 4,
    title: 'Không tạp hương, tạp vị',
    description:
      'Mỗi mẻ rang đều tinh khiết, không bị dính mùi đất ẩm, mùi giấm lên men hay vị chát gắt của hạt non.',
    icon: '🎵',
  },
  {
    id: 'no-5',
    number: 5,
    title: 'Không nấm mốc, độc tố',
    description:
      'Lọc sạch 100% hạt mốc (chứa độc tố Ochratoxin A) và các loại hạt lỗi bằng máy quang học Nhật Bản trước khi chế biến.',
    icon: '🛡️',
  },
]

// ─── 10 BƯỚC KIỂM SOÁT ───────────────────────────────────────────────────────
// Source: "An Nhiên Cùng FCD.docx" §3.1 — hệ sinh thái khép kín
// Referenced as "Quy trình 10 bước kiểm soát Cà phê Đặc sản Chất lượng cao"

export const tenSteps: TenStep[] = [
  {
    step: 1,
    icon: '🗺️',
    title: 'Lựa chọn vùng nguyên liệu',
    description: 'Chỉ thu mua từ vùng cao Cầu Đất (1.500–1.650m) và Buôn Ma Thuột — hai vùng nguyên liệu đặc sản hàng đầu Việt Nam.',
    proof: 'SCA origin standards',
  },
  {
    step: 2,
    icon: '🌿',
    title: 'Thu hái chọn lọc',
    description: 'Chỉ thu hái quả chín đỏ đều, loại bỏ quả xanh, quả còn non ngay từ vườn trồng.',
    proof: 'Farm traceability',
  },
  {
    step: 3,
    icon: '⚖️',
    title: 'Phân loại quả tươi',
    description: 'Phân loại cơ học theo density, loại bỏ quả lép, quả lỗi trước khi chế biến.',
    proof: 'Post-harvest sorting',
  },
  {
    step: 4,
    icon: '🏭',
    title: 'Chế biến ướt / khô chọn lọc',
    description: 'Áp dụng quy trình chế biến phù hợp theo từng dòng sản phẩm — washed cho Arabica CAO/O1, honey/natural cho các dòng blend.',
    proof: 'Processing protocol',
  },
  {
    step: 5,
    icon: '☀️',
    title: 'Phơi sấy kiểm soát',
    description: 'Phơi trên giàn cao, kiểm soát nhiệt độ và độ ẩm — đảm bảo hạt nhân xanh đồng đều, không mốc.',
    proof: 'Moisture control',
  },
  {
    step: 6,
    icon: '📊',
    title: 'Phân loại hạt nhân xanh',
    description: 'Sàng lọc theo kích thước và density. Phân loại theo tiêu chuẩn SCA — chỉ giữ lại hạt đạt score ≥ 80 điểm.',
    proof: 'SCA grading system',
  },
  {
    step: 7,
    icon: '🔍',
    title: 'Loại bỏ hạt lỗi bằng máy quang học',
    description: 'Sử dụng máy quang học Nhật Bản loại bỏ 100% 6 loại hạt lỗi sơ cấp theo SCA: hạt mốc, hạt đen, hạt chua, hạt sâu mốc, vỏ quả khô, tạp chất.',
    proof: 'Optical sorting — Ochratoxin A elimination',
  },
  {
    step: 8,
    icon: '🔥',
    title: 'Rang bằng máy Hot-air của Ý',
    description: 'Rang bằng máy Hot-air Ý — kiểm soát nhiệt độ chính xác, loại bỏ hoàn toàn tình trạng khét cháy. 100 hạt đều như 1.',
    proof: 'Hot-air roasting — no carbonization',
  },
  {
    step: 9,
    icon: '✅',
    title: 'Kiểm định chất lượng sau rang',
    description: 'Cupping theo giao thức SCA sau mỗi mẻ rang. Chỉ xuất kho khi đạt tiêu chuẩn hương vị đã định hình.',
    proof: 'SCA Cupping Protocol',
  },
  {
    step: 10,
    icon: '📦',
    title: 'Đóng gói và bảo quản',
    description: 'Đóng gói ngay sau rang để giữ CO₂. Túi one-way valve ngăn oxy xâm nhập. Truy xuất batch rang trên bao bì.',
    proof: 'One-way valve packaging — degassing',
  },
]


// ─── PROOF POINTS (CERTIFICATIONS) ───────────────────────────────────────────
// Source: "An Nhiên Cùng FCD.docx" §3.2 — "Hệ thống Chứng nhận uy tín toàn cầu"
// Mentioned explicitly as "bằng chứng thép": FDA, ISO, HACCP, SCA

export const proofPoints = [
  {
    id: 'sca',
    label: 'SCA',
    fullName: 'Specialty Coffee Association',
    description: 'Tiêu chuẩn đánh giá chất lượng cà phê đặc sản quốc tế — "bảo chứng vàng" cho tính minh bạch và chất lượng.',
    type: 'standard' as const,
  },
  {
    id: 'fda',
    label: 'FDA',
    fullName: 'Kiểm nghiệm FDA',
    description: 'Đáp ứng tiêu chí kiểm nghiệm an toàn thực phẩm — bảo đảm không tồn dư chất độc hại.',
    type: 'certification' as const,
  },
  {
    id: 'iso',
    label: 'ISO 22000',
    fullName: 'ISO 22000 Food Safety Management',
    description: 'Hệ thống quản lý an toàn thực phẩm theo tiêu chuẩn quốc tế.',
    type: 'certification' as const,
  },
  {
    id: 'haccp',
    label: 'HACCP',
    fullName: 'Hazard Analysis Critical Control Points',
    description: 'Quy trình kiểm soát điểm tới hạn — phân tích và ngăn ngừa rủi ro từ trang trại đến sản phẩm hoàn thiện.',
    type: 'standard' as const,
  },
]

// ─── COST PER CUP ────────────────────────────────────────────────────────────
// Source: "An Nhiên Cùng FCD.docx" — Cost-per-cup table §3.2.2
// Formula: giá/kg ÷ 1000g × dosage (7-14g/ly tùy định dạng)
// Định dạng 70 ly/kg = ~14.3g/ly; Định dạng 140 ly/kg = ~7.1g/ly

export const costPerCup = [
  {
    code: 'P3',
    name: 'Truyền thống 1',
    pricePerKg: 458000,
    costPer70: 6542,   // ~6,542đ/ly
    costPer140: 3271,  // ~3,271đ/ly
  },
  {
    code: 'C3',
    name: 'Truyền thống 2',
    pricePerKg: 518000,
    costPer70: 7400,
    costPer140: 3700,
  },
  {
    code: 'B3',
    name: 'Đậm Vị',
    pricePerKg: 570000,
    costPer70: 8142,
    costPer140: 4071,
  },
  {
    code: 'A3',
    name: 'Cân Bằng',
    pricePerKg: 706000,
    costPer70: 10085,
    costPer140: 5042,
  },
  {
    code: 'CAO1',
    name: 'Tinh Tuý',
    pricePerKg: 826000,
    costPer70: 11800,
    costPer140: 5900,
  },
  {
    code: 'O1',
    name: 'Nguyên Bản',
    pricePerKg: 1026000,
    costPer70: 14657,
    costPer140: 7328,
  },
]

// ─── AN NHIEN COMBO ───────────────────────────────────────────────────────────
// Source: "An Nhiên Cùng FCD.docx" §3.2.2 + §4 Customer Segments

export const anNhienCombo = {
  title: 'Gói An Nhiên 12kg',
  subtitle: 'Giải pháp cà phê đặc sản toàn diện cho văn phòng & doanh nghiệp',
  description:
    'Khách hàng tham gia gói An Nhiên sẽ được tặng kèm máy pha cà phê espresso áp suất 20 bar (chuẩn quốc tế) và trở thành thành viên VIP với chiết khấu mua hạt 25–32% vĩnh viễn.',
  machine: {
    name: 'Máy pha espresso 20 bar',
    description:
      'Đạt chuẩn áp suất 20 bar (chuẩn quốc tế để ép kiệt lớp Crema của Espresso). FCD áp dụng chính sách bảo hành chính hãng, lỗi 1 đổi 1.',
    highlight: 'TẶNG MIỄN PHÍ',
  },
  capacity: [
    { format: '70 ly/kg', dosage: '~14g/ly', description: 'Espresso đậm vị, ly nhỏ' },
    { format: '140 ly/kg', dosage: '~7g/ly', description: 'Espresso pha loãng, ly lớn hơn' },
  ],
  vipBenefits: [
    { benefit: 'Chiết khấu mua hạt', value: '25–32%', note: 'Vĩnh viễn khi là thành viên VIP' },
    { benefit: 'Hoa hồng CTV', value: '11%', note: 'Từ đơn hàng của người được giới thiệu' },
    { benefit: 'Đào tạo cà phê', value: 'Miễn phí', note: 'Online/offline về thưởng thức và vận hành máy' },
    { benefit: 'Chính sách hậu mãi', value: 'Số hóa', note: 'Đối soát minh bạch trên nền tảng quản lý' },
  ],
  skus: ['ANCF.P', 'ANCF.P3', 'ANCF.C', 'ANCF.C3', 'ANCF.B3', 'ANCF.A3', 'ANCF.CAO1', 'ANCF.O1', 'ANCF.MIX'],
  targetSegments: [
    { segment: 'Doanh nghiệp & Văn phòng (B2B)', detail: 'SME 50–500 nhân viên, coworking space, khách sạn & resort', format: 'Combo 12kg' },
    { segment: 'Quán Cà phê Specialty & Độc lập', detail: 'Third-wave coffee, quán takeaway, café concept', format: 'Thùng 10kg' },
    { segment: 'Cá nhân & Đại Sứ Thương Hiệu', detail: 'Người yêu specialty (25–45 tuổi), micro-influencer', format: 'Combo 12kg' },
    { segment: 'Quà tặng Doanh nghiệp (B2B Gift)', detail: 'Phòng procurement, wedding planner, event company', format: 'Hộp quà cao cấp' },
  ],
}

// ─── BARRIERS & SOLUTIONS (Q&A) ──────────────────────────────────────────────
// Source: "An Nhiên Cùng FCD.docx" §3.3 — Gỡ bỏ rào cản

export const barriersFaq = [
  {
    id: 'barrier-1',
    barrier: 'Không có kiến thức về đặc sản theo chuẩn SCA',
    solution:
      'Cung cấp tài liệu Infographic trực quan, dễ hiểu. Khách hàng tham gia gói An Nhiên được tặng kèm các buổi đào tạo online/offline miễn phí về kiến thức thưởng thức cà phê và cách vận hành máy chuyên nghiệp.',
  },
  {
    id: 'barrier-2',
    barrier: 'Không phân biệt được giá trị của cà phê đặc sản SCA',
    solution:
      'Hướng dẫn khách hàng "thử mù" (Blind test) hoặc Cupping trực tiếp ngay tại điểm tư vấn. So sánh sự khác biệt rõ rệt về mùi hương và màu sắc. Đưa ra các chứng nhận FDA, ISO, HACCP, SCA làm bằng chứng.',
  },
  {
    id: 'barrier-3',
    barrier: 'Không có niềm tin là máy được tặng sẽ chất lượng',
    solution:
      'Máy pha tặng kèm là dòng thiết bị đạt chuẩn áp suất 20 bar. FCD áp dụng chính sách bảo hành chính hãng, lỗi 1 đổi 1. Có thể pha chiết xuất thử ngay tại chỗ.',
  },
  {
    id: 'barrier-4',
    barrier: 'Không tin máy có thể pha được 70–140 ly với chất lượng cam kết',
    solution:
      'Độ đồng đều nằm ở HẠT. FCD đã dùng máy quang học Nhật Bản loại bỏ 100% hạt lỗi và rang bằng máy Hot-air của Ý, nên 100 hạt đều như 1. Khi kết hợp với máy pha tự động đã lập trình sẵn nhiệt độ/áp suất, mọi ly cà phê đều cho ra hương vị nhất quán.',
  },
  {
    id: 'barrier-5',
    barrier: 'Kênh tư vấn bán hàng còn nông, chưa đúng ý',
    solution:
      'Chuẩn hóa toàn bộ quy trình tư vấn bằng Bộ Sales Kit. FCD cung cấp đầy đủ tài liệu, hình ảnh sản phẩm, nội dung mạng xã hội cho đại sứ.',
  },
  {
    id: 'barrier-6',
    barrier: 'Đầu tư 1 lần từ 5–12 triệu là quá lớn',
    solution:
      'FCD áp dụng đòn bẩy "Chia nhỏ tài chính" — phân kỳ thanh toán và tính toán ROI rõ ràng: chi phí/ly chỉ từ 3.271đ với định dạng 140 ly/kg.',
  },
]
