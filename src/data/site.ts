/**
 * src/data/site.ts
 * Source: tài liệu xác minh. Không bịa contact/social.
 * showPhone / showEmail = false vì chưa có số/email xác minh từ tài liệu.
 */

export interface SiteMeta {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  canonical?: string
}

export interface SiteContact {
  address?: string
  phone?: string
  email?: string
  showPhone: boolean
  showEmail: boolean
  contactFallbackLabel: string
}

export interface SiteData {
  brand: string
  brandFull: string
  tagline: string
  meta: SiteMeta
  contact: SiteContact
  social: {
    facebook?: string
    zalo?: string
  }
}

export const siteData: SiteData = {
  brand: 'FCD',
  brandFull: 'FROMCAUDAT',
  tagline: 'An Nhiên từng ngụm',

  meta: {
    title: 'FROMCAUDAT (FCD) — Cà phê đặc sản Cầu Đất',
    description:
      'Portal tra cứu thông tin chính thức của FCD — sản phẩm, bảng giá, chính sách và chương trình An Nhiên. Arabica Cầu Đất & Robusta Buôn Ma Thuột, tiêu chuẩn SCA.',
    ogTitle: 'FCD — FROMCAUDAT | Cà phê đặc sản Cầu Đất',
    ogDescription:
      'Tra cứu sản phẩm, giá niêm yết, chính sách và chương trình An Nhiên của FROMCAUDAT.',
  },

  contact: {
    // Phone và email chưa xác minh từ tài liệu — không render số giả
    address: 'Cầu Đất, Đà Lạt, Lâm Đồng',
    showPhone: false,
    showEmail: false,
    contactFallbackLabel: 'Liên hệ qua form',
  },

  social: {
    // Chưa có URL xác minh — không render link giả
    facebook: undefined,
    zalo: undefined,
  },
}
