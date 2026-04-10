import type { FlavorCategory } from '@/lib/types'

export const flavorCategories: FlavorCategory[] = [
  {
    id: 'dam-vi',
    slug: 'dam-vi',
    label: 'Đậm Vị',
    icon: '🔥',
    color: '#7C2D12',
    description:
      'Cà phê đậm đặc, thân vị nặng, đắng rõ ràng — phong cách truyền thống Việt Nam và espresso Italy. Cho người ưa cà phê mạnh, kích thích tỉnh táo ngay từ ngụm đầu.',
    character: 'Mạnh mẽ · Đậm đặc · Kích thích',
    suitableFor: [
      'Người quen uống cà phê đen đậm truyền thống',
      'Dùng pha sữa đặc (cà phê sữa đá)',
      'Tỉnh táo vào buổi sáng sớm',
      'Yêu thích espresso mạnh',
    ],
    highlights: ['Dark chocolate', 'Đắng mượt', 'Ca cao thô', 'Crema dày', 'Khói gỗ nhẹ'],
    products: ['robusta-buon-ma-thuot', 'espresso-blend-dark'],
  },
  {
    id: 'can-bang',
    slug: 'can-bang',
    label: 'Cân Bằng',
    icon: '⚖️',
    color: '#92400E',
    description:
      'Hài hòa giữa đắng và ngọt, thân vị vừa phải, dễ uống — phù hợp cho mọi khẩu vị. Đây là gu phổ biến nhất của FCD, thích hợp cho cả uống đen lẫn pha sữa.',
    character: 'Hài hòa · Dễ uống · Đa dạng',
    suitableFor: [
      'Người mới bắt đầu khám phá cà phê đặc sản',
      'Văn phòng / cà phê hàng ngày',
      'Pha sữa hoặc uống đen đều được',
      'Đối tác muốn phục vụ nhiều nhóm khách',
    ],
    highlights: ['Chocolate sữa', 'Caramel nhẹ', 'Hạt điều rang', 'Cam nhẹ', 'Bánh mì nướng'],
    products: ['signature-blend-5gu', 'blend-an-nhien-everyday', 'hop-qua-an-nhien-3vi'],
  },
  {
    id: 'tinh-te',
    slug: 'tinh-te',
    label: 'Tinh Tế',
    icon: '🌸',
    color: '#BE185D',
    description:
      'Chua thanh sáng, hương hoa quả rõ nét, rang nhẹ — phong cách specialty coffee quốc tế. Dành cho người muốn khám phá hương vị ngoài vùng an toàn của cà phê truyền thống.',
    character: 'Phức tạp · Hoa quả · Tinh tế',
    suitableFor: [
      'Người ưa specialty coffee / third-wave coffee',
      'Pha Filter, Pour-over, Chemex, AeroPress',
      'Thưởng thức cà phê không đường, không sữa',
      'Muốn khám phá terroir vùng trồng',
    ],
    highlights: ['Đào vàng', 'Mật ong rừng', 'Hoa nhài', 'Cam bergamot', 'Chanh vàng', 'Vải thiều'],
    products: ['arabica-caudat-natural', 'arabica-caudat-washed'],
  },
  {
    id: 'nguyen-ban',
    slug: 'nguyen-ban',
    label: 'Nguyên Bản',
    icon: '🌿',
    color: '#15803D',
    description:
      'Vị cà phê cao nguyên đích thực — không cầu kỳ, không pha trộn hương liệu, chỉ đơn giản là cà phê xứ sở đúng nghĩa. Gần gũi, quen thuộc nhưng vẫn chất lượng.',
    character: 'Thuần khiết · Chân thật · Dễ gần',
    suitableFor: [
      'Người ưa vị cà phê truyền thống Việt Nam',
      'Uống nóng buổi sáng với sữa tươi',
      'Không muốn thử nghiệm, chỉ muốn ngon quen',
      'Cà phê hàng ngày bền vững',
    ],
    highlights: ['Đất cao nguyên', 'Ổi xanh', 'Trái cây khô', 'Cacao nhẹ', 'Thân vị vừa'],
    products: ['nguyen-ban-highland-blend'],
  },
]
