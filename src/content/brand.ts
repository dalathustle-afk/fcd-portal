import type { BrandInfo } from '@/lib/types'

export const brandInfo: BrandInfo = {
  name: 'FCD',
  fullName: 'FROMCAUDAT',
  tagline: 'Cà phê đặc sản từ Cầu Đất — Chất lượng minh bạch, trải nghiệm an nhiên',
  founded: '2019',
  origin: 'Cầu Đất, Đà Lạt, Lâm Đồng',
  mission:
    'Mang đến cà phê đặc sản Việt Nam chất lượng cao, minh bạch và đáng tin cậy — từ vùng nguyên liệu đến tay người dùng — thông qua tiêu chuẩn kiểm soát chặt và trải nghiệm thưởng thức an nhiên.',
  values: [
    {
      icon: 'leaf',
      title: 'Nguồn gốc minh bạch',
      description:
        'Arabica Cầu Đất và Robusta Buôn Ma Thuột — kiểm soát từ vùng trồng đến thành phẩm.',
    },
    {
      icon: 'shield-check',
      title: 'Tiêu chuẩn chất lượng cao',
      description:
        'Quy trình kiểm định theo tiêu chuẩn SCA (Specialty Coffee Association) và kiểm nghiệm FDA.',
    },
    {
      icon: 'award',
      title: 'Specialty Coffee định hướng',
      description:
        'Sản phẩm được rang xay theo profile phù hợp với từng gu vị, không dùng hương liệu nhân tạo.',
    },
    {
      icon: 'heart',
      title: 'An tâm — An nhiên',
      description:
        'Chương trình An Nhiên đồng hành cùng người dùng, đối tác và hệ sinh thái FCD.',
    },
  ],
  regions: [
    {
      name: 'Cầu Đất',
      location: 'Đà Lạt, Lâm Đồng',
      altitude: '1.500 – 1.650 mét so với mực nước biển',
      variety: 'Arabica (Typica, Bourbon, Catimor)',
      character:
        'Vị chua thanh tinh tế, hương hoa quả rõ nét, hậu vị ngọt dài — đặc trưng của vùng cao nguyên Lâm Đồng.',
    },
    {
      name: 'Buôn Ma Thuột',
      location: 'Đắk Lắk, Tây Nguyên',
      altitude: '450 – 600 mét so với mực nước biển',
      variety: 'Robusta (Conilon, Canephora)',
      character:
        'Thân vị dày, đắng nhẹ cân bằng, crema tốt — nền tảng cho các blend espresso đậm đà.',
    },
  ],
  certifications: ['Kiểm nghiệm độc lập theo tiêu chuẩn TCVN', 'Đáp ứng tiêu chí xuất khẩu FDA Hoa Kỳ'],
  standards: ['SCA Cupping Protocol', 'ISO 22000 Food Safety', 'HACCP quy trình rang xay'],
}
