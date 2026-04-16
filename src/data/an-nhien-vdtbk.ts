/**
 * src/data/an-nhien-vdtbk.ts
 * Business Presentation Data cho Module an-nhien-vdtbk
 * Cấu trúc thông tin minh bạch, học thuật và chuyên sâu dành riêng cho khối BOD, đối tác và VDTBK.
 */

// 1. CHUẨN SPECIALTY GRADE CỦA SCA/SCAA
export const scaSpecialtyCriteria = [
  { id: 'crit-1', title: 'Lỗi Sơ Cấp (Primary Defects)', requirement: 'Cấm tuyệt đối', detail: 'Không chứa bất kỳ lỗi sơ cấp nào (0 primary defects).' },
  { id: 'crit-2', title: 'Lỗi Tổng Hợp (Full Defects)', requirement: 'Tối đa 5 hạng mục', detail: 'Quá trình phân loại chỉ chấp nhận tối đa 5 lỗi tổng hợp trên mẫu thử chuẩn 300g.' },
  { id: 'crit-3', title: 'Độ Ẩm (Moisture)', requirement: '9% – 13%', detail: 'Kiểm soát chặt chẽ độ ẩm để ngăn chặn rủi ro nấm mốc và mất mùi.' },
  { id: 'crit-4', title: 'Cảm Quan (Cupping Quality)', requirement: 'Sạch hoàn toàn', detail: 'Tuyệt đối không có tạp vị (faults/taints). Không xuất hiện hạt chưa chín (quakers).' },
  { id: 'crit-5', title: 'Dấu Ấn (Distinctive Attributes)', requirement: 'Tối thiểu 1', detail: 'Phải sở hữu ít nhất một đặc tính nổi trội xuất sắc về Body, Flavor, Aroma hoặc Acidity.' }
];

// 2. MAPPING KHIẾM KHUYẾT (18 LỖI: 7 SƠ CẤP + 11 THỨ CẤP)
export const primaryDefects = [
  { name: 'Full Black', viName: 'Hạt đen hoàn toàn', impact: 'Độc giả nấm mốc cực cao, vị hôi, đắng khét.' },
  { name: 'Full Sour', viName: 'Hạt chua hoàn toàn', impact: 'Quá trình lên men bị thối, vị chua gắt khó chịu.' },
  { name: 'Pod/Cherry', viName: 'Quả khô nguyên vỏ', impact: 'Ổ lưu trú của nấm mốc, sinh tạp vị chát và mốc.' },
  { name: 'Large Stones', viName: 'Đá lớn', impact: 'Gây tắc nghẽn, làm hỏng lưỡi dao máy xay.' },
  { name: 'Medium Stones', viName: 'Đá vừa', impact: 'Gây hỏng thiết bị rang/xay và rách ruột người dùng.' },
  { name: 'Large Sticks', viName: 'Cành lớn', impact: 'Sinh mùi khói gỗ, mùi giấy cháy khi rang.' },
  { name: 'Medium Sticks', viName: 'Cành vừa', impact: 'Mùi gỗ cháy, ảnh hưởng độ sạch của ly cà phê.' }
];

export const secondaryDefects = [
  { name: 'Parchment', viName: 'Còn vỏ trấu' },
  { name: 'Hull/Husk', viName: 'Sót mảnh vỏ thóc' },
  { name: 'Broken/Chipped', viName: 'Hạt vỡ/sứt mẻ' },
  { name: 'Insect Damage', viName: 'Hạt sâu bọ/mọt cắn' },
  { name: 'Partial Black', viName: 'Hạt đen một phần' },
  { name: 'Partial Sour', viName: 'Hạt chua một phần' },
  { name: 'Floater', viName: 'Hạt xốp/hạt nổi' },
  { name: 'Shell', viName: 'Hạt tai voi/hạt vỏ ốc' },
  { name: 'Small Stones', viName: 'Đá nhỏ' },
  { name: 'Small Sticks', viName: 'Cành nhỏ' },
  { name: 'Water Damage', viName: 'Hạt mọng nước (xử lý sai)' }
];

// 3. RỦI RO & BIỆN PHÁP KIỂM SOÁT TẠI FCD
export const riskControls = [
  {
    risk: 'Độc tố Mycotoxins (Ochratoxin A)',
    source: 'Hạt đen, hạt mốc, bảo quản và phơi sấy sai chuẩn. Nấm Aspergillus/Penicillium phát sinh.',
    consequence: 'Gây ngộ độc thực phẩm theo cảnh báo của tổ chức FDA, tổn thương gan, thận và có tính tích lũy.',
    control: 'Sử dụng MÁY QUANG HỌC NHẬT BẢN để bắn và loại bỏ 100% hạt khuyết tật đen/mốc ngay từ nhân xanh.'
  },
  {
    risk: 'Acrylamide (Khét cháy)',
    source: 'Quá trình rang cà phê truyền thống trên chảo lồng hoặc lửa trực tiếp làm cháy khét hạt không đều.',
    consequence: 'Phát sinh độc tố có nguy cơ gây ung thư (carcinogens). Tạo vị đắng gắt và cảm giác gai cổ.',
    control: 'Rang bằng công nghệ HOT-AIR CỦA Ý. Nhiệt truyền qua dòng khí nóng giúp hạt chín đồng đều 100%, không bị ám khói, không cháy khét.'
  },
  {
    risk: 'Suy giảm độ sạch & Tự sinh nấm mốc',
    source: 'Hấp hơi do chênh lệch nhiệt độ trong quá trình vận chuyển. Bao bì tiếp xúc oxy và độ ẩm.',
    consequence: 'Cà phê mất mùi, sinh vị chua ôi và tạo môi trường ẩm cho bào tử nấm mốc sống lại.',
    control: 'Đóng gói van một chiều (One-way valve) giúp nhả CO₂ nhưng chặn oxy xâm nhập. Giám sát độ ẩm chặt chẽ <12%.'
  }
];

// 4. GIẢI PHÁP AN NHIÊN CHO 3 CỘNG ĐỒNG
export const communitySolutions = [
  {
    icon: '🏠',
    title: 'Giải pháp Tại nhà',
    desc: 'Bảo vệ sức khỏe tổ ấm bằng nguồn cà phê Specialty lọc 100% hạt mốc. Không tẩm ướp bơ, hóa chất gây hại cho các thành viên trong gia đình. Cân bằng trải nghiệm pha máy 20 bar như ngoài tiệm.'
  },
  {
    icon: '🏢',
    title: 'Giải pháp Văn phòng (SME)',
    desc: 'Tạo văn hóa làm việc đẳng cấp cho não bộ với chi phí tối thiểu. Nâng cao hình ảnh doanh nghiệp khi tiếp đón đối tác. Combo cấp sẵn thiết bị 20 bar pha chế dễ dàng mà không cồng kềnh.'
  },
  {
    icon: '☕',
    title: 'Giải pháp HoReCa (Quán / Khách sạn)',
    desc: 'Tạo nên ly Espresso với Crema lý tưởng, cấu trúc body vững chắc và acidity sáng. Hương vị ổn định và đồng nhất qua từng mẻ rang nhờ hệ thống kiểm soát bằng công nghệ cao.'
  }
];

// 5. TEST THỊ TRƯỜNG & VDTBK
export const marketValidation = {
  tested: 300,
  feedback: "Sự ghi nhận hoàn toàn vượt mong đợi. Hầu hết đều bất ngờ bởi độ 'sạch' hiếm hoi của ly cà phê và cảm giác tỉnh táo êm dịu, không hề bị xây xẩm hay ép tim như khi dùng cà phê bị rang tẩm hỗn hợp.",
  vdtbkMission: "Từ kết quả này, FCD đã ký kết đồng hành cùng Mạng Lưới Cựu sinh viên & Hệ sinh thái Đại học (VDTBK) nhằm cung cấp CÔNG CỤ khởi nghiệp tinh gọn. Sinh viên được kinh doanh một sản phẩm có tính minh bạch tuyệt đối, bằng chứng khoa học vững chắc và nền tảng hỗ trợ chuyên sâu."
};

// 6. THÔNG ĐIỆP ĐỐI TÁC
export const partnerPillars = [
  { title: "Tử Tế", desc: "Không thỏa hiệp chạy theo lợi nhuận mà làm giả số liệu, tẩm ướp hóa chất hay bỏ qua hạt lỗi độc hại." },
  { title: "Tôn Trọng", desc: "Tương trợ công bằng trong hệ sinh thái phân phối. Tôn trọng sức khỏe của người dùng cuối." },
  { title: "Minh Bạch", desc: "Tất cả chất lượng đều được thể hiện qua các bộ chứng nhận khắt khe như SCA, ISO 22000, HACCP và FDA." },
  { title: "Cùng Thịnh Vượng", desc: "Xây dựng hạ tầng lợi nhuận chia sẻ bền vững, không phá rào giá trị, thiết lập mạng lưới tiêu dùng cà phê văn minh." }
];
