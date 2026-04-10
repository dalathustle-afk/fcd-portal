// ─── FCD Data Types ────────────────────────────────────────────────────────

export interface Product {
  id: string
  slug: string
  code: string
  name: string
  shortName: string
  line: 'premium' | 'signature' | 'classic' | 'blend' | 'espresso' | 'gift'
  flavor: FlavorProfile
  origin: string[]
  ingredients: string
  roastLevel: 'light' | 'medium-light' | 'medium' | 'medium-dark' | 'dark'
  format: PackagingFormat[]
  description: string
  notes: string[]
  tags: string[]
  featured: boolean
}

export interface FlavorProfile {
  category: 'dam-vi' | 'can-bang' | 'tinh-te' | 'nguyen-ban'
  bitter: number   // 1-10
  sweet: number    // 1-10
  sour: number     // 1-10
  body: number     // 1-10
  aftertaste: number // 1-10
  highlights: string[]
  suitableFor: string[]
}

export interface PackagingFormat {
  unit: string
  weight: string
  price: number
  priceCombo?: number
  sku: string
}

export interface FlavorCategory {
  id: string
  slug: string
  label: string
  icon: string
  color: string
  description: string
  character: string
  suitableFor: string[]
  highlights: string[]
  products: string[] // product slugs
}

export interface PriceList {
  updatedAt: string
  effectiveDate: string
  note: string
  items: PriceItem[]
}

export interface PriceItem {
  productCode: string
  productName: string
  unit: string
  retailPrice: number
  comboPrice?: number
  comboNote?: string
  category: 'retail' | 'combo' | 'gift' | 'bulk'
}

export interface Policy {
  id: string
  slug: string
  title: string
  category: PolicyCategory
  summary: string
  suitableFor: string[]
  conditions: string[]
  benefits: PolicyBenefit[]
  example?: string
  faq?: FAQ[]
  effectiveDate: string
  tags: string[]
  featured: boolean
}

export type PolicyCategory =
  | 'ban-hang'
  | 'chiet-khau'
  | 'ho-tro-san-pham'
  | 'van-chuyen'
  | 'tang-may'
  | 'dai-su-ctv'
  | 'combo-an-nhien'

export interface PolicyBenefit {
  title: string
  value: string
  description?: string
}

export interface AnNhienProgram {
  title: string
  subtitle: string
  description: string
  pillars: AnNhienPillar[]
  packages: AnNhienPackage[]
  targets: AnNhienTarget[]
  faq: FAQ[]
}

export interface AnNhienPillar {
  id: string
  icon: string
  title: string
  description: string
}

export interface AnNhienPackage {
  id: string
  name: string
  tier: 'basic' | 'standard' | 'premium'
  price?: number
  period?: string
  description: string
  includes: string[]
  suitableFor: string[]
  highlight?: boolean
}

export interface AnNhienTarget {
  type: string
  icon: string
  title: string
  description: string
  benefit: string
}

export interface PartnerCompany {
  id: string
  name: string
  shortName?: string
  industry: string
  city?: string
  logo?: string
  featured: boolean
  tier: 'platinum' | 'gold' | 'standard'
}

export interface FAQ {
  question: string
  answer: string
}

export interface BrandInfo {
  name: string
  fullName: string
  tagline: string
  founded: string
  origin: string
  mission: string
  values: BrandValue[]
  regions: Region[]
  certifications: string[]
  standards: string[]
}

export interface BrandValue {
  icon: string
  title: string
  description: string
}

export interface Region {
  name: string
  location: string
  altitude: string
  variety: string
  character: string
}

export interface SearchResult {
  type: 'product' | 'policy' | 'flavor' | 'partner' | 'page'
  title: string
  subtitle?: string
  href: string
  tags?: string[]
}
