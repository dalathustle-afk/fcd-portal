/**
 * src/data/partners.ts
 * Source: Danh-sach-kh-cong-ty.xlsx
 * Chỉ map field xác minh được từ file Excel.
 * Không gán tier/logo/city nếu không có trong nguồn.
 */

export interface PartnerRecord {
  id: string
  name: string
  shortName: string
  logo?: string
  category?: string
  city?: string
  featured: boolean
  sourceRef: string
}

// Partners verified from Danh-sach-kh-cong-ty.xlsx
// Categories are indicative only where inferable from name; city not assigned
// unless explicitly listed in source.
export const partners: PartnerRecord[] = [
  {
    id: 'kh001',
    name: 'Ngân hàng TMCP Quân đội',
    shortName: 'MB Bank',
    category: 'Ngân hàng',
    featured: true,
    sourceRef: 'Danh-sach-kh-cong-ty.xlsx',
  },
  {
    id: 'kh002',
    name: 'Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam',
    shortName: 'Agribank',
    category: 'Ngân hàng',
    featured: true,
    sourceRef: 'Danh-sach-kh-cong-ty.xlsx',
  },
  {
    id: 'kh003',
    name: 'RIKEN Vietnam',
    shortName: 'RIKEN Vietnam',
    category: 'Doanh nghiệp',
    featured: true,
    sourceRef: 'Danh-sach-kh-cong-ty.xlsx',
  },
  {
    id: 'kh004',
    name: 'RSM Việt Nam',
    shortName: 'RSM Việt Nam',
    category: 'Dịch vụ chuyên nghiệp',
    featured: true,
    sourceRef: 'Danh-sach-kh-cong-ty.xlsx',
  },
  {
    id: 'kh005',
    name: 'B. Braun Việt Nam',
    shortName: 'B. Braun VN',
    category: 'Y tế',
    featured: true,
    sourceRef: 'Danh-sach-kh-cong-ty.xlsx',
  },
  {
    id: 'kh006',
    name: 'ABB Automation and Electrification Việt Nam',
    shortName: 'ABB Vietnam',
    category: 'Công nghiệp',
    featured: true,
    sourceRef: 'Danh-sach-kh-cong-ty.xlsx',
  },
  {
    id: 'kh007',
    name: 'Beyond',
    shortName: 'Beyond',
    category: 'Doanh nghiệp',
    featured: true,
    sourceRef: 'Danh-sach-kh-cong-ty.xlsx',
  },
]

// TODO: Import full company list from Danh-sach-kh-cong-ty.xlsx
// when complete Excel data is available. The above are the 7 verified entries.
