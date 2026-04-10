import type { AnNhienProgram } from '@/lib/types'

export const anNhienProgram: AnNhienProgram = {
  title: 'An Nhiên cùng FCD',
  subtitle: 'Giải pháp cà phê đặc sản — chất lượng minh bạch, trải nghiệm an tâm',
  description:
    '"An Nhiên cùng FCD" không chỉ là tên gọi — đây là chương trình giá trị toàn diện của FCD, kết hợp sản phẩm chất lượng cao, chính sách hỗ trợ rõ ràng và trải nghiệm thưởng thức cà phê đặc sản dễ tiếp cận hơn cho mọi người.',
  pillars: [
    {
      id: 'an-suckhoe',
      icon: '🛡️',
      title: 'An cho Sức Khỏe',
      description:
        'Cà phê FCD kiểm soát từ vùng trồng — không hương liệu nhân tạo, không tạp chất, rang xay theo tiêu chuẩn an toàn thực phẩm. Bạn uống cà phê đúng nghĩa, không lo phụ gia.',
    },
    {
      id: 'an-tam',
      icon: '✅',
      title: 'An Tâm cho Người Dùng',
      description:
        'Quy trình minh bạch, chính sách rõ ràng, nguồn gốc truy xuất được. Người dùng và đối tác biết chính xác mình đang mua gì, từ đâu, giá bao nhiêu — không mơ hồ, không ẩn thông tin.',
    },
    {
      id: 'an-nhien-trai-nghiem',
      icon: '☕',
      title: 'An Nhiên trong Trải Nghiệm',
      description:
        'Cà phê đặc sản chất lượng cao nhưng không cầu kỳ, không áp đặt. FCD giúp việc thưởng thức specialty coffee trở nên tự nhiên, dễ tiếp cận và phù hợp với nhịp sống hàng ngày.',
    },
  ],
  packages: [
    {
      id: 'pkg-ca-nhan',
      name: 'An Nhiên Cá Nhân',
      tier: 'basic',
      description: 'Dành cho cá nhân muốn dùng cà phê đặc sản FCD hàng ngày với giá hợp lý.',
      includes: [
        'Mua lẻ theo gói hoặc combo định kỳ',
        'Tư vấn gu cà phê phù hợp',
        'Được ưu tiên batch rang mới',
        'Hỗ trợ đổi trả sản phẩm lỗi',
      ],
      suitableFor: ['Cá nhân yêu cà phê', 'Sinh viên / freelancer', 'Người muốn thử đặc sản'],
      highlight: false,
    },
    {
      id: 'pkg-van-phong',
      name: 'An Nhiên Văn Phòng',
      tier: 'standard',
      description: 'Giải pháp cà phê cho văn phòng, nhóm làm việc — tiết kiệm, đơn giản, chất lượng.',
      includes: [
        'Đặt theo thùng combo giá ưu đãi',
        'Freeship nội thành TP.HCM, Hà Nội, Đà Lạt',
        'Hỗ trợ dụng cụ pha ban đầu',
        'Nhận hàng định kỳ ổn định',
        'Có thể thanh toán 30 ngày với đối tác lâu dài',
      ],
      suitableFor: ['Văn phòng 5-50 người', 'Co-working space', 'Startup / SME'],
      highlight: true,
    },
    {
      id: 'pkg-doi-tac',
      name: 'An Nhiên Đối Tác',
      tier: 'premium',
      description: 'Chương trình đồng hành sâu cho quán cà phê, đại lý, hoặc doanh nghiệp F&B.',
      includes: [
        'Chiết khấu theo sản lượng tháng',
        'Hỗ trợ thiết bị pha cà phê',
        'Training tư vấn sản phẩm cho nhân viên',
        'Tài liệu thương hiệu, menu mô tả sản phẩm',
        'Ưu tiên xử lý đơn hàng lớn',
        'Hợp đồng hợp tác minh bạch',
      ],
      suitableFor: ['Quán cà phê', 'Nhà hàng / khách sạn', 'Đại lý khu vực', 'Nhà phân phối'],
      highlight: false,
    },
    {
      id: 'pkg-dai-su',
      name: 'An Nhiên Đại Sứ',
      tier: 'standard',
      description: 'Dành cho cá nhân muốn trở thành đại sứ / CTV dài hạn của FCD.',
      includes: [
        'Chiết khấu mua vào 10-15%',
        'Hoa hồng giới thiệu khách',
        'Bộ kit giới thiệu thương hiệu (ảnh, video, nội dung)',
        'Tham gia cộng đồng đại sứ FCD',
        'Cập nhật chính sách và sản phẩm mới',
      ],
      suitableFor: ['Người yêu cà phê muốn chia sẻ', 'Influencer / KOL', 'Người muốn thu nhập thêm'],
      highlight: false,
    },
  ],
  targets: [
    {
      type: 'individual',
      icon: '👤',
      title: 'Cá Nhân',
      description: 'Bạn muốn uống cà phê ngon hơn mỗi ngày mà không cần phức tạp.',
      benefit: 'Tư vấn gu, đặt dễ, nhận nhanh',
    },
    {
      type: 'office',
      icon: '🏢',
      title: 'Văn Phòng & Doanh Nghiệp',
      description: 'Cần giải pháp cà phê ổn định, chất lượng cho đội ngũ làm việc.',
      benefit: 'Giá combo, freeship, thanh toán linh hoạt',
    },
    {
      type: 'partner',
      icon: '🤝',
      title: 'Đối Tác F&B',
      description: 'Quán cà phê, nhà hàng, khách sạn cần nguyên liệu chất lượng ổn định.',
      benefit: 'Chiết khấu sản lượng, hỗ trợ thiết bị',
    },
    {
      type: 'ambassador',
      icon: '🌟',
      title: 'Đại Sứ & CTV',
      description: 'Bạn tin vào FCD và muốn chia sẻ, đồng thời có thêm thu nhập.',
      benefit: 'Chiết khấu + hoa hồng + kit thương hiệu',
    },
  ],
  faq: [
    {
      question: '"An Nhiên cùng FCD" có phải là gói đăng ký tốn tiền không?',
      answer:
        'Không. "An Nhiên cùng FCD" là chương trình giá trị và định hướng — bạn không phải trả phí đăng ký. Bạn chỉ trả tiền khi mua sản phẩm, và các ưu đãi trong chương trình được áp dụng tự nhiên theo sản lượng và cam kết.',
    },
    {
      question: 'Tôi có thể chuyển từ gói cá nhân lên đối tác không?',
      answer:
        'Hoàn toàn được. Khi sản lượng tăng và bạn muốn hợp tác sâu hơn, FCD sẽ hỗ trợ chuyển lên gói đối tác hoặc đại sứ phù hợp.',
    },
    {
      question: 'An Nhiên có phải là sản phẩm riêng không?',
      answer:
        '"An Nhiên" là tên thương hiệu cho dòng blend hàng ngày và tên chương trình đồng hành. Bạn có thể tham gia chương trình An Nhiên với bất kỳ sản phẩm FCD nào.',
    },
    {
      question: 'Làm sao để biết combo An Nhiên có lợi hơn mua lẻ không?',
      answer:
        'Combo An Nhiên giảm 8-15% so với giá niêm yết lẻ, cộng thêm freeship (một số khu vực) và ưu tiên hàng mới. Với người dùng đều đặn, combo luôn tiết kiệm hơn.',
    },
    {
      question: 'FCD có chứng nhận gì về chất lượng?',
      answer:
        'Sản phẩm FCD được kiểm nghiệm độc lập theo tiêu chuẩn TCVN, đáp ứng tiêu chí an toàn thực phẩm FDA. Quy trình rang xay áp dụng định hướng SCA (Specialty Coffee Association).',
    },
    {
      question: 'Tôi ở tỉnh nhỏ có đặt được không?',
      answer:
        'Được. FCD giao toàn quốc qua Giao Hàng Nhanh, GHTK và J&T. Đơn combo thùng tại TP.HCM, Hà Nội, Đà Lạt được freeship nội thành.',
    },
  ],
}
