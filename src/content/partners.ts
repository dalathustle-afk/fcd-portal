import type { PartnerCompany } from '@/lib/types'

export const partners: PartnerCompany[] = [
  // ── FEATURED / PLATINUM ────────────────────────────────────────
  { id: 'pt001', name: 'Công ty CP Đầu tư & Phát triển AHA', shortName: 'AHA Corp', industry: 'Đầu tư & Phát triển', city: 'TP.HCM', featured: true, tier: 'platinum' },
  { id: 'pt002', name: 'Công ty TNHH Thực phẩm Sạch Việt', shortName: 'Sạch Việt Foods', industry: 'Thực phẩm & Đồ uống', city: 'Hà Nội', featured: true, tier: 'platinum' },
  { id: 'pt003', name: 'Chuỗi Cafe 5S Wellness', shortName: 'Cafe 5S', industry: 'F&B / Nhà hàng', city: 'TP.HCM', featured: true, tier: 'platinum' },
  { id: 'pt004', name: 'Spa & Retreat Đà Lạt Xanh', shortName: 'Đà Lạt Xanh', industry: 'Nghỉ dưỡng & Spa', city: 'Đà Lạt', featured: true, tier: 'gold' },
  { id: 'pt005', name: 'Công ty TNHH Giải Pháp Văn phòng Office+', shortName: 'Office Plus', industry: 'Dịch vụ Văn phòng', city: 'TP.HCM', featured: true, tier: 'gold' },
  { id: 'pt006', name: 'Trường Đào tạo Nghề Ẩm thực Sài Gòn', shortName: 'Sài Gòn Culinary', industry: 'Giáo dục & Đào tạo', city: 'TP.HCM', featured: true, tier: 'gold' },
  { id: 'pt007', name: 'Hệ thống Khách sạn Mường Thanh Grand', shortName: 'Mường Thanh Grand', industry: 'Khách sạn & Du lịch', city: 'Nhiều tỉnh', featured: true, tier: 'platinum' },
  { id: 'pt008', name: 'Công ty CP Nông nghiệp Hữu cơ Lâm Đồng', shortName: 'Nông nghiệp HCO LĐ', industry: 'Nông nghiệp', city: 'Đà Lạt', featured: true, tier: 'gold' },
  { id: 'pt009', name: 'Chuỗi SmartHome & Decor Vietnam', shortName: 'SmartHome VN', industry: 'Nội thất & Decor', city: 'Hà Nội', featured: true, tier: 'gold' },
  { id: 'pt010', name: 'Tập đoàn Y tế Medlatec', shortName: 'Medlatec', industry: 'Y tế & Sức khỏe', city: 'Hà Nội', featured: true, tier: 'platinum' },
  { id: 'pt011', name: 'Công ty TNHH Vận tải & Logistics FastMove', shortName: 'FastMove Logistics', industry: 'Logistics & Vận tải', city: 'TP.HCM', featured: true, tier: 'gold' },
  { id: 'pt012', name: 'Trung tâm Thể thao & Sức khỏe California Fitness', shortName: 'California Fitness', industry: 'Thể thao & Sức khỏe', city: 'Nhiều tỉnh', featured: true, tier: 'platinum' },

  // ── STANDARD ──────────────────────────────────────────────────
  { id: 'pt013', name: 'Công ty TNHH Thương mại Dịch vụ Minh Tuấn', shortName: 'Minh Tuấn Trading', industry: 'Thương mại', city: 'Hà Nội', featured: false, tier: 'standard' },
  { id: 'pt014', name: 'Cty CP Bất Động Sản Thái Bình Dương', shortName: 'TBD Real Estate', industry: 'Bất động sản', city: 'Đà Nẵng', featured: false, tier: 'standard' },
  { id: 'pt015', name: 'Chuỗi Tiệm Net GIGA', shortName: 'GIGA Net', industry: 'Công nghệ & Giải trí', city: 'Nhiều tỉnh', featured: false, tier: 'standard' },
  { id: 'pt016', name: 'Trường THPT Quốc tế Á Châu', shortName: 'Á Châu School', industry: 'Giáo dục', city: 'TP.HCM', featured: false, tier: 'standard' },
  { id: 'pt017', name: 'Showroom Xe hơi Việt Nhật Auto', shortName: 'Việt Nhật Auto', industry: 'Ô tô', city: 'Hà Nội', featured: false, tier: 'standard' },
  { id: 'pt018', name: 'Công ty TNHH Bảo hiểm Prudential Vietnam', shortName: 'Prudential VN', industry: 'Bảo hiểm & Tài chính', city: 'TP.HCM', featured: false, tier: 'gold' },
  { id: 'pt019', name: 'Cty TNHH Dược phẩm Pharmacity', shortName: 'Pharmacity', industry: 'Dược phẩm', city: 'Nhiều tỉnh', featured: false, tier: 'standard' },
  { id: 'pt020', name: 'Liên Minh Startup Founders Hub Vietnam', shortName: 'Founders Hub VN', industry: 'Khởi nghiệp & Cộng đồng', city: 'TP.HCM', featured: false, tier: 'standard' },
  { id: 'pt021', name: 'Cty TNHH Truyền thông Minh Phú Media', shortName: 'Minh Phú Media', industry: 'Truyền thông & Marketing', city: 'TP.HCM', featured: false, tier: 'standard' },
  { id: 'pt022', name: 'HTX Cà phê Cầu Đất Xanh', shortName: 'Cầu Đất Xanh HTX', industry: 'Nông nghiệp', city: 'Đà Lạt', featured: false, tier: 'gold' },
  { id: 'pt023', name: 'Công ty TNHH XNK Thịnh Phát', shortName: 'Thịnh Phát Export', industry: 'Xuất nhập khẩu', city: 'TP.HCM', featured: false, tier: 'standard' },
  { id: 'pt024', name: 'Cty TNHH Khoa học & Công nghệ AIT Solutions', shortName: 'AIT Solutions', industry: 'Công nghệ thông tin', city: 'Hà Nội', featured: false, tier: 'standard' },
  { id: 'pt025', name: 'Hệ thống Mini Hotel Quê Hương', shortName: 'Quê Hương Mini Hotel', industry: 'Khách sạn', city: 'Nhiều tỉnh', featured: false, tier: 'standard' },
]
