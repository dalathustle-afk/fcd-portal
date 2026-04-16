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
    icon: '⛔',
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
    icon: '🌬️',
  },
  {
    id: 'no-4',
    number: 4,
    title: 'Không tạp hương, tạp vị',
    description:
      'Mỗi mẻ rang đều tinh khiết, không bị dính mùi đất ẩm, mùi giấm lên men hay vị chát gắt của hạt non.',
    icon: '👃',
  },
  {
    id: 'no-5',
    number: 5,
    title: 'Không nấm mốc, độc tố',
    description:
      'Lọc sạch 100% hạt mốc (chứa độc tố Ochratoxin A) và các loại hạt lỗi bằng máy quang học Nhật Bản trước khi chế biến.',
    icon: '🔬',
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
    { benefit: 'Chiết khấu mua hạt', value: '15–22%', note: 'Vĩnh viễn khi là thành viên VIP' },
    { benefit: 'Hoa hồng CTV', value: '10%', note: 'Từ đơn hàng của người được giới thiệu' },
    { benefit: 'Đào tạo kiến thức cà phê, kỹ năng nghiệp vụ', value: 'Miễn phí', note: 'Online/offline về thưởng thức và vận hành' },
    { benefit: 'Chính sách hậu mãi', value: 'Thịnh vượng với đối tác, tích hợp công nghệ', note: 'Đối soát minh bạch trên nền tảng quản lý' },
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
      'FCD áp dụng đòn bẩy "Chia nhỏ tài chính" — phân kỳ thanh toán và tính toán ROI rõ ràng: chi phí/ly chỉ từ 3.271đ với định dạng 140 ly/kg. Đặc biệt: Trả trước 50% chỉ còn 2.612.000đ là đã được nhận ngay máy pha cà phê và bắt đầu hành trình An Nhiên.',
  },
]

// ─── SCA 5-GRADE SCALE ───────────────────────────────────────────────────────
// Source: "An Nhiên Cùng FCD.docx" §2.5.3 — Thang đo 5 cấp độ SCA
// Verified verbatim from user-supplied source: 2026-04-11

export const scaGrades = [
  {
    level: 1,
    name: 'Cà Phê Đặc Sản',
    nameEn: 'Specialty Grade',
    defects: 'Tuyệt đối 0 lỗi sơ cấp · Tối đa 5 lỗi tổng hợp',
    sensory: 'Hương vị xuất sắc, không có lỗi tạp vị. Không có hạt chưa chín. Độ ẩm 9–13%.',
    market: 'FCD: Ứng dụng máy quang học Nhật Bản loại bỏ 100% hạt lỗi mốc/đen, đưa chất lượng vươn tới cấp độ này.',
    color: '#E3A558',
    bgColor: '#2D1F0A',
    tag: '✓ Tiêu chuẩn FCD',
    tagType: 'positive' as const,
    danger: false,
  },
  {
    level: 2,
    name: 'Cà Phê Cao Cấp',
    nameEn: 'Premium Grade',
    defects: 'Có thể có lỗi sơ cấp · Tối đa 8 lỗi tổng hợp',
    sensory: 'Có ít nhất 1 thuộc tính hương vị tốt. Tối đa 3 hạt chưa chín.',
    market: 'Cà phê hạt rang xay cao cấp được tuyển chọn trên thị trường.',
    color: '#6B8C6B',
    bgColor: '#1A2D1A',
    tag: 'Thị trường cao cấp',
    tagType: 'neutral' as const,
    danger: false,
  },
  {
    level: 3,
    name: 'Cà Phê Thương Mại',
    nameEn: 'Exchange Grade',
    defects: 'Từ 9 đến 23 lỗi tổng hợp · Tối đa 5 hạt chưa chín',
    sensory: 'Tiêu chuẩn thấp hơn đáng kể. Tối đa 5 hạt chưa chín.',
    market: 'Các dòng cà phê rang mộc phổ thông, cà phê đóng gói bán đại trà tại siêu thị.',
    color: '#9C8472',
    bgColor: '#22160F',
    tag: 'Cà phê siêu thị đại trà',
    tagType: 'neutral' as const,
    danger: false,
  },
  {
    level: 4,
    name: 'Dưới Tiêu Chuẩn',
    nameEn: 'Below Standard',
    defects: 'Từ 24 đến 86 lỗi tổng hợp',
    sensory: 'Chất lượng giảm dần, hương vị lẫn nhiều tạp chất, đắng chát.',
    market: 'Các cơ sở nhỏ lẻ mua gom hàng xô, không qua phân loại, rang cháy khét để che mùi mốc.',
    color: '#C47B2B',
    bgColor: '#2A1A08',
    tag: '⚠ Rang cháy che mùi mốc',
    tagType: 'warning' as const,
    danger: true,
  },
  {
    level: 5,
    name: 'Cà Phê Thải Loại',
    nameEn: 'Off Grade',
    defects: 'Vượt quá 86 lỗi tổng hợp',
    sensory: 'Chất lượng cực kém, chứa đầy hạt mốc, đen, sâu bệnh nguy hiểm.',
    market: 'Thực trạng báo động: Đây là nguồn nguyên liệu chính của các ly cà phê lề đường bị tẩm ướp hóa chất.',
    color: '#C0392B',
    bgColor: '#2D0A08',
    tag: '⛔ Cà phê vỉa hè',
    tagType: 'danger' as const,
    danger: true,
  },
]

// ─── MARKET SEGMENTS ─────────────────────────────────────────────────────────
// Source: "An Nhiên Cùng FCD.docx" §3.2.2 — Phân loại cà phê thị trường

export const marketSegments = [
  {
    id: 'seg-1',
    rank: 1,
    name: 'Cà Phê Hòa Tan',
    share: '40–50%',
    population: '~16–20 triệu người',
    weakness: 'Thành phần cà phê thật rất ít. Chứa nhiều đường và hương liệu nhân tạo. Không có giá trị sức khỏe.',
    icon: '🥤',
    color: '#9C8472',
  },
  {
    id: 'seg-2',
    rank: 2,
    name: 'Cà Phê Trộn',
    share: '15–20%',
    population: '~6–8 triệu người',
    weakness: 'Chứa tỷ lệ lớn bắp, đậu nành rang cháy đen kịt. Tốn từ 10–15 phút pha phin.',
    icon: '⚠️',
    color: '#C47B2B',
  },
  {
    id: 'seg-3',
    rank: 3,
    name: 'Cà Phê Tẩm',
    share: '5–7%',
    population: '~2–2.8 triệu người',
    weakness: 'Tẩm ướp bơ, hóa chất tạo mùi. Nguy cơ rất lớn dính phải hạt mốc, mang mầm bệnh ung thư.',
    icon: '🧪',
    color: '#C0392B',
  },
  {
    id: 'seg-4',
    rank: 4,
    name: 'Cà Phê Mộc Đại Trà',
    share: '25–30%',
    population: '~10–12 triệu người',
    weakness: 'Tuy nguyên chất nhưng quy trình hời hợt, không lọc bỏ hạt lỗi, dễ sinh tạp vị, chát gắt.',
    icon: '☕',
    color: '#7C5C3E',
    isFCDTarget: true,
  },
  {
    id: 'seg-5',
    rank: 5,
    name: 'Cà Phê Đặc Sản Thủ Công',
    share: '1–3%',
    population: '~400K–1.2 triệu người',
    weakness: 'Hương vị ngon nhưng chi phí duy trì quá đắt đỏ. Khách hàng phải tự mua máy pha đắt tiền.',
    icon: '⭐',
    color: '#4A6741',
    isFCDTarget: true,
  },
]

// ─── COFFEE TYPES RECOGNITION ────────────────────────────────────────────────
// Source: "An Nhiên Cùng FCD.docx" §2.6 — Nhận diện và phân biệt 5 loại cà phê

export const coffeeTypes = [
  {
    id: 'type-1',
    name: 'Cà Phê Trộn',
    visual: 'Nước pha sẫm đen, đặc sệt và sóng sánh do chứa tỷ lệ lớn bắp và đậu nành. Khi châm nước sôi, bột cà phê thường xẹp xuống ngay lập tức.',
    smell: 'Mùi khói nồng nặc và mùi khét của ngũ cốc (bắp, đậu) bị rang cháy.',
    taste: 'Vị đậm, đắng nghét, đôi khi để lại cảm giác lợ ở cổ họng. Thiếu hoàn toàn hương vị nguyên bản của cà phê.',
    icon: '👁️',
    danger: true,
  },
  {
    id: 'type-2',
    name: 'Cà Phê Tẩm',
    visual: 'Bề mặt hạt màu nâu đậm và bóng dầu nhẫy nhụa. Nếu dùng hóa chất tạo bọt, lớp bọt thường mỏng, lâu tan và có ánh màu cầu vồng.',
    smell: 'Mùi hương liệu nhân tạo (bơ, praline, almond, hazelnut, vanilla) bốc lên nồng nặc, lấn át hoàn toàn mùi tự nhiên của cà phê.',
    taste: 'Đắng gắt, béo ngậy của bơ tẩm. Dư vị để lại cảm giác gắt ở cuống họng, làm mất đi vị chua thanh tự nhiên.',
    icon: '👃',
    danger: true,
  },
  {
    id: 'type-3',
    name: 'Cà Phê Mộc',
    visual: 'Hạt màu nâu trung bình tối, lấm tấm dầu, bột nở phồng khi ủ nước. Nước pha màu nâu cánh gián. Tuy nhiên, hạt thiếu đồng đều do không được loại bỏ hạt lỗi.',
    smell: 'Thơm dịu nhẹ, mộc mạc mùi đậu rang. Tuy nhiên, thường dính "tạp hương" do trộn từ nhiều vùng trồng và lẫn hạt mốc, hạt thối.',
    taste: 'Đắng nhẹ dễ chịu, hậu ngọt. Tuy nhiên, dễ bị dính "tạp vị" (chát, đắng gắt) do quy trình không loại bỏ hạt non, hạt sâu bệnh.',
    icon: '🌿',
    danger: false,
  },
  {
    id: 'type-4',
    name: 'Cà Phê Đặc Sản',
    visual: 'Hạt mang danh đặc sản nhưng do thu hoạch và sơ chế thủ công, thiếu công nghệ phân loại hiện đại nên vẫn lẫn hạt lỗi (lỗi thứ cấp, hạt vỡ, hạt xốp).',
    smell: 'Có dải hương hoa, trái cây đặc biệt nhưng thiếu tính ổn định. Có mẻ rất thơm, nhưng có mẻ lại mất mùi hoặc lẫn tạp hương do kiểm soát quá trình lên men kém.',
    taste: 'Thể hiện được vị chua thanh, ngọt hậu nhưng thi thoảng bị mất cân bằng, gắt hoặc chát nhẹ do tàn dư của các hạt lỗi chưa được lọc sạch hoàn toàn.',
    icon: '🌺',
    danger: false,
  },
  {
    id: 'type-5',
    name: 'Đặc Sản CLC (FCD)',
    visual: 'Hạt to đều, sạch tuyệt đối, không bóng dầu.',
    smell: 'Mùi thơm đặc trưng, đan xen hương ớt chuông, socola và các loại hạt béo rang nguyên bản.',
    taste: 'Cân bằng hoàn hảo: Vị đậm đà, đắng nhẹ, chua thanh tự nhiên, hậu vị ngọt sâu và vô cùng "sạch".',
    icon: '⭐',
    danger: false,
    isFCD: true,
  },
]
