import type { Policy } from '@/lib/types'

export const policies: Policy[] = [
  // ── BÁN HÀNG ────────────────────────────────────────────────────
  {
    id: 'pol-001',
    slug: 'chinh-sach-ban-hang-co-ban',
    title: 'Chính Sách Bán Hàng Cơ Bản',
    category: 'ban-hang',
    summary:
      'Quy định chung về giá niêm yết, điều kiện đặt hàng, thanh toán và giao nhận sản phẩm FCD.',
    suitableFor: ['Khách hàng lẻ', 'Đại sứ / CTV FCD', 'Đối tác mới'],
    conditions: [
      'Đặt hàng tối thiểu 1 gói sản phẩm',
      'Thanh toán trước khi giao hoặc theo thỏa thuận',
      'Giá niêm yết áp dụng đồng nhất toàn quốc',
      'Sản phẩm phải còn nguyên seal chưa mở',
    ],
    benefits: [
      { title: 'Giá minh bạch', value: 'Niêm yết công khai', description: 'Không có giá nội bộ ẩn' },
      { title: 'Giao hàng', value: 'Toàn quốc', description: 'Qua đối tác vận chuyển uy tín' },
      { title: 'Đổi trả', value: '7 ngày', description: 'Áp dụng với sản phẩm lỗi, không đúng mô tả' },
    ],
    example:
      'Chị A đặt 2 gói Arabica 500g (355.000đ/gói) qua đại sứ FCD → tổng 710.000đ → thanh toán chuyển khoản → giao trong 2-3 ngày.',
    faq: [
      {
        question: 'Tôi có thể đặt hàng ở đâu?',
        answer:
          'Bạn có thể đặt qua đại sứ / CTV FCD hoặc liên hệ trực tiếp qua form liên hệ trên app này.',
      },
      {
        question: 'Có ship toàn quốc không?',
        answer: 'Có. FCD giao toàn quốc qua Giao Hàng Nhanh, GHTK và J&T Express.',
      },
      {
        question: 'Phí ship tính như thế nào?',
        answer: 'Phí ship theo khoảng cách và trọng lượng của đơn vị vận chuyển. Đơn hàng đủ điều kiện combo An Nhiên có thể được hỗ trợ phí ship.',
      },
    ],
    effectiveDate: '2026-02-10',
    tags: ['ban-hang', 'co-ban', 'giao-hang'],
    featured: true,
  },
  // ── CHIẾT KHẤU ────────────────────────────────────────────────
  {
    id: 'pol-002',
    slug: 'chinh-sach-chiet-khau-san-luong',
    title: 'Chiết Khấu Theo Sản Lượng',
    category: 'chiet-khau',
    summary:
      'Chính sách ưu đãi chiết khấu khi mua với số lượng lớn — áp dụng cho đại sứ, đại lý và khách hàng doanh nghiệp theo tháng.',
    suitableFor: ['Đại sứ / CTV FCD', 'Đại lý khu vực', 'Khách hàng doanh nghiệp', 'Phụ huynh mua theo nhóm'],
    conditions: [
      'Áp dụng khi đặt từ 5kg/tháng trở lên',
      'Tính theo tổng sản lượng trong tháng, không tính từng đơn lẻ',
      'Phải thanh toán trong kỳ để được giữ mức chiết khấu',
      'Mức chiết khấu được xem xét lại mỗi quý',
    ],
    benefits: [
      { title: 'Từ 5kg – 10kg/tháng', value: 'Giảm 8%', description: 'Tính trên giá niêm yết' },
      { title: 'Từ 10kg – 25kg/tháng', value: 'Giảm 12%', description: 'Tính trên giá niêm yết' },
      { title: 'Từ 25kg – 50kg/tháng', value: 'Giảm 16%', description: 'Tính trên giá niêm yết' },
      { title: 'Trên 50kg/tháng', value: 'Giảm 20%+', description: 'Thương lượng riêng với FCD' },
    ],
    example:
      'Đại lý B đặt 30kg blend An Nhiên Everyday (500g = 215.000đ) → 60 gói × 215.000đ = 12.900.000đ → chiết khấu 16% = tiết kiệm 2.064.000đ/tháng.',
    faq: [
      {
        question: 'Có thể gộp nhiều sản phẩm để đủ sản lượng không?',
        answer: 'Có. Sản lượng được tính theo tổng kg của tất cả sản phẩm trong tháng.',
      },
      {
        question: 'Nếu tháng sau sản lượng giảm thì sao?',
        answer: 'Mức chiết khấu sẽ được áp dụng theo sản lượng thực tế của tháng đó, không giữ mức cũ nếu không đạt.',
      },
    ],
    effectiveDate: '2026-02-10',
    tags: ['chiet-khau', 'san-luong', 'dai-ly', 'dai-su'],
    featured: true,
  },
  // ── AN NHIÊN COMBO ─────────────────────────────────────────────
  {
    id: 'pol-003',
    slug: 'chinh-sach-combo-an-nhien',
    title: 'Chính Sách Combo An Nhiên',
    category: 'combo-an-nhien',
    summary:
      'Combo tiết kiệm theo chương trình An Nhiên — mua theo thùng hoặc combo định kỳ để được giá ưu đãi và hỗ trợ thêm.',
    suitableFor: [
      'Khách hàng muốn dùng cà phê chất lượng hàng tuần / hàng tháng',
      'Văn phòng / công ty',
      'Đại sứ FCD đặt định kỳ',
    ],
    conditions: [
      'Áp dụng khi đặt theo thùng (12 gói 500g hoặc tương đương)',
      'Đặt định kỳ ổn định tối thiểu 3 tháng liên tiếp',
      'Thanh toán trước cho từng đợt',
    ],
    benefits: [
      { title: 'Giá combo thùng', value: 'Tiết kiệm ~10%', description: 'So với mua lẻ từng gói' },
      { title: 'Hỗ trợ vận chuyển', value: 'Freeship nội thành', description: 'Với đơn đủ 1 thùng trở lên tại TP.HCM, Hà Nội, Đà Lạt' },
      { title: 'Ưu tiên hàng mới', value: 'Batch rang ưu tiên', description: 'Khách combo được nhận hàng rang mới nhất' },
    ],
    example:
      'Văn phòng C đặt 1 thùng An Nhiên Everyday (12×500g) → niêm yết 12×215.000đ = 2.580.000đ → giá combo thùng = 2.300.000đ + freeship nội thành.',
    faq: [
      {
        question: 'Combo thùng có thể mix sản phẩm không?',
        answer: 'Có, trong một số trường hợp có thể mix sản phẩm cùng dòng. Liên hệ đại sứ FCD để tư vấn.',
      },
    ],
    effectiveDate: '2026-02-10',
    tags: ['combo', 'an-nhien', 'thung', 'tiet-kiem'],
    featured: true,
  },
  // ── HỖ TRỢ SẢN PHẨM ───────────────────────────────────────────
  {
    id: 'pol-004',
    slug: 'chinh-sach-ho-tro-san-pham',
    title: 'Hỗ Trợ Sản Phẩm & Đổi Trả',
    category: 'ho-tro-san-pham',
    summary:
      'Chính sách bảo đảm chất lượng — đổi trả sản phẩm lỗi, không đúng mô tả hoặc vận chuyển hư hỏng.',
    suitableFor: ['Tất cả khách hàng', 'Đại sứ / CTV FCD'],
    conditions: [
      'Khiếu nại trong vòng 7 ngày kể từ ngày nhận hàng',
      'Cung cấp ảnh/video sản phẩm lỗi',
      'Sản phẩm phải còn nguyên seal (với trường hợp không đúng mô tả)',
      'Không áp dụng đổi trả với lý do "không hợp khẩu vị"',
    ],
    benefits: [
      { title: 'Sản phẩm lỗi', value: 'Đổi mới 100%', description: 'FCD chịu toàn bộ phí vận chuyển' },
      { title: 'Giao thiếu', value: 'Bù đủ ngay', description: 'Kiểm tra và giao bù trong 2-3 ngày' },
      { title: 'Hư hỏng khi vận chuyển', value: 'Hoàn tiền hoặc đổi', description: 'Theo xác nhận từ ảnh/video' },
    ],
    effectiveDate: '2026-02-10',
    tags: ['doi-tra', 'chat-luong', 'ho-tro'],
    featured: false,
  },
  // ── TẶNG MÁY ──────────────────────────────────────────────────
  {
    id: 'pol-005',
    slug: 'chinh-sach-tang-may-pha-ca-phe',
    title: 'Hỗ Trợ Thiết Bị Pha Cà Phê',
    category: 'tang-may',
    summary:
      'Chương trình hỗ trợ / tặng thiết bị pha cà phê cho đối tác / đại lý đạt sản lượng nhất định hoặc cam kết đơn hàng định kỳ.',
    suitableFor: [
      'Đại lý khu vực',
      'Đối tác mở quán cà phê',
      'Doanh nghiệp có nhu cầu phục vụ nội bộ lớn',
    ],
    conditions: [
      'Cam kết đặt hàng tối thiểu 6 tháng liên tiếp',
      'Sản lượng đạt ngưỡng từ 15kg/tháng trở lên',
      'Ký thỏa thuận hợp tác với FCD',
      'Thiết bị được hỗ trợ là phin, bình pour-over, hoặc máy espresso loại cơ bản',
    ],
    benefits: [
      { title: 'Sản lượng 15-30kg/tháng', value: 'Tặng bộ phin + dụng cụ pha', description: 'Trị giá khoảng 500.000đ' },
      { title: 'Sản lượng 30-60kg/tháng', value: 'Tặng bình Pour-over cao cấp', description: 'Trị giá khoảng 1.500.000đ' },
      { title: 'Sản lượng >60kg/tháng', value: 'Hỗ trợ máy espresso bán tự động', description: 'Thương lượng theo từng đối tác' },
    ],
    example:
      'Đối tác D cam kết 25kg/tháng trong 6 tháng → được tặng bộ pour-over + grinder tay → tổng trị giá ~1.200.000đ.',
    faq: [
      {
        question: 'Nếu dừng đặt hàng giữa chừng thì sao?',
        answer: 'Thiết bị được tặng là quà không hoàn trả, tuy nhiên FCD có thể không tiếp tục chương trình hỗ trợ nếu đối tác dừng cam kết.',
      },
    ],
    effectiveDate: '2026-02-10',
    tags: ['tang-may', 'thiet-bi', 'doi-tac', 'espresso'],
    featured: true,
  },
  // ── ĐẠI SỨ / CTV ──────────────────────────────────────────────
  {
    id: 'pol-006',
    slug: 'chinh-sach-dai-su-ctv',
    title: 'Chính Sách Đại Sứ & CTV FCD',
    category: 'dai-su-ctv',
    summary:
      'Chương trình dành cho Đại sứ và Cộng tác viên FCD — hưởng chiết khấu, hoa hồng và hỗ trợ từ FCD khi phát triển mạng lưới.',
    suitableFor: ['Người muốn giới thiệu FCD', 'CTV bán hàng', 'Đại sứ thương hiệu'],
    conditions: [
      'Đăng ký qua form chính thức từ FCD',
      'Tham gia buổi giới thiệu sản phẩm và chương trình',
      'Cam kết tuân thủ giá niêm yết khi bán ra',
      'Không tự ý thay đổi tên sản phẩm, mô tả không đúng thực tế',
    ],
    benefits: [
      { title: 'Chiết khấu mua vào', value: '10-15%', description: 'Tùy sản lượng và cấp độ' },
      { title: 'Hoa hồng giới thiệu', value: '3-5%', description: 'Từ đơn hàng của người được giới thiệu' },
      { title: 'Tài liệu bán hàng', value: 'Miễn phí', description: 'Bộ kit giới thiệu, hình ảnh sản phẩm, nội dung mạng xã hội' },
      { title: 'Hỗ trợ kỹ thuật', value: 'Trực tiếp từ FCD', description: 'Giải đáp thắc mắc sản phẩm, chính sách' },
    ],
    faq: [
      {
        question: 'Tôi có cần phải đặt hàng trước không?',
        answer: 'Không bắt buộc. Bạn có thể làm đại sứ chỉ với vai trò giới thiệu và hưởng hoa hồng khi khách mua thành công.',
      },
      {
        question: 'Có giới hạn số lượng đại sứ không?',
        answer: 'FCD không giới hạn số lượng đại sứ, nhưng ưu tiên chất lượng và cam kết lâu dài.',
      },
    ],
    effectiveDate: '2026-02-10',
    tags: ['dai-su', 'ctv', 'hoa-hong', 'ban-hang'],
    featured: true,
  },
]
