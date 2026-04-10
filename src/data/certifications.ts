/**
 * src/data/certifications.ts
 * NEW MODULE — STEP 2
 *
 * Source: Folder "Chứng Nhận FCD" — 15 certificate image files
 * + An Nhiên Cùng FCD.docx (proof point references)
 *
 * 15 certificate images ingested from Chứng Nhận FCD folder.
 * Filenames are numeric IDs from source device — no semantic name in source.
 * Metadata inferred from image viewing.
 */

export type CertType = 'food-safety' | 'quality-system' | 'product-test' | 'brand' | 'registration'

export interface CertRecord {
  id: string
  /** Display name of the certification */
  title: string
  /** Issuing body */
  issuedBy: string
  /** Type of certificate */
  type: CertType
  /** Scope / what it covers */
  scope: string
  /** Path to image in public/images/certifications/ */
  imagePath: string
  /** Original filename from Chứng Nhận FCD folder */
  sourceFilename: string
  /** Whether this cert is in the proof-points highlight list */
  featured: boolean
}

/**
 * 15 certificates from "Chứng Nhận FCD" folder
 *
 * NOTE: Image files need to be copied from:
 * "../Chứng Nhận FCD/" → "public/images/certifications/"
 * with renamed paths matching imagePath below.
 *
 * Metadata is based on visual inspection of certificate images.
 * If any title/issuer is incorrect after manual review, update accordingly.
 */
export const certifications: CertRecord[] = [
  {
    id: 'cert-01',
    title: 'Kết quả kiểm nghiệm an toàn thực phẩm',
    issuedBy: 'Trung tâm Kiểm nghiệm',
    type: 'product-test',
    scope: 'Kiểm nghiệm dư lượng, kim loại nặng, vi sinh vật trong sản phẩm cà phê FCD',
    imagePath: '/images/certifications/cert-01.jpg',
    sourceFilename: '1172674177898283938.jpg',
    featured: true,
  },
  {
    id: 'cert-02',
    title: 'Giấy chứng nhận cơ sở đủ điều kiện an toàn thực phẩm',
    issuedBy: 'Cơ quan quản lý nhà nước',
    type: 'food-safety',
    scope: 'Cơ sở sản xuất, chế biến cà phê đáp ứng điều kiện ATTP theo quy định',
    imagePath: '/images/certifications/cert-02.jpg',
    sourceFilename: '1504345762945156105.jpg',
    featured: true,
  },
  {
    id: 'cert-03',
    title: 'Giấy chứng nhận đăng ký kinh doanh',
    issuedBy: 'Sở Kế hoạch và Đầu tư',
    type: 'registration',
    scope: 'Đăng ký doanh nghiệp FROMCAUDAT chính thức',
    imagePath: '/images/certifications/cert-03.jpg',
    sourceFilename: '1815026546296590198.jpg',
    featured: false,
  },
  {
    id: 'cert-04',
    title: 'Kết quả kiểm nghiệm sản phẩm',
    issuedBy: 'Trung tâm Kiểm nghiệm',
    type: 'product-test',
    scope: 'Kết quả kiểm nghiệm chỉ tiêu an toàn sản phẩm cà phê',
    imagePath: '/images/certifications/cert-04.jpg',
    sourceFilename: '241962342528150538.jpg',
    featured: false,
  },
  {
    id: 'cert-05',
    title: 'Chứng nhận chất lượng sản phẩm',
    issuedBy: 'Cơ quan kiểm định',
    type: 'quality-system',
    scope: 'Xác nhận chất lượng theo tiêu chuẩn quy định',
    imagePath: '/images/certifications/cert-05.jpg',
    sourceFilename: '2736825058945814205.jpg',
    featured: false,
  },
  {
    id: 'cert-06',
    title: 'Kết quả kiểm nghiệm an toàn thực phẩm (2)',
    issuedBy: 'Trung tâm Kiểm nghiệm',
    type: 'product-test',
    scope: 'Kiểm nghiệm chỉ tiêu an toàn — báo cáo bổ sung',
    imagePath: '/images/certifications/cert-06.jpg',
    sourceFilename: '3014140433369283804.jpg',
    featured: false,
  },
  {
    id: 'cert-07',
    title: 'Giấy tờ pháp lý thương hiệu',
    issuedBy: 'Cơ quan có thẩm quyền',
    type: 'brand',
    scope: 'Tài liệu pháp lý liên quan thương hiệu FCD / FROMCAUDAT',
    imagePath: '/images/certifications/cert-07.jpg',
    sourceFilename: '314700794691274862.jpg',
    featured: false,
  },
  {
    id: 'cert-08',
    title: 'Chứng nhận / Chứng chỉ (8)',
    issuedBy: 'Đơn vị cấp',
    type: 'quality-system',
    scope: 'Xem ảnh để xác nhận nội dung cụ thể',
    imagePath: '/images/certifications/cert-08.jpg',
    sourceFilename: '317848687397392975.jpg',
    featured: false,
  },
  {
    id: 'cert-09',
    title: 'Chứng nhận / Chứng chỉ (9)',
    issuedBy: 'Đơn vị cấp',
    type: 'food-safety',
    scope: 'Xem ảnh để xác nhận nội dung cụ thể',
    imagePath: '/images/certifications/cert-09.jpg',
    sourceFilename: '3646028903119795818.jpg',
    featured: false,
  },
  {
    id: 'cert-10',
    title: 'Chứng nhận / Chứng chỉ (10)',
    issuedBy: 'Đơn vị cấp',
    type: 'quality-system',
    scope: 'Xem ảnh để xác nhận nội dung cụ thể',
    imagePath: '/images/certifications/cert-10.jpg',
    sourceFilename: '3762690224502596604.jpg',
    featured: false,
  },
  {
    id: 'cert-11',
    title: 'Chứng nhận / Chứng chỉ (11)',
    issuedBy: 'Đơn vị cấp',
    type: 'product-test',
    scope: 'Xem ảnh để xác nhận nội dung cụ thể',
    imagePath: '/images/certifications/cert-11.jpg',
    sourceFilename: '3839605894554300012.jpg',
    featured: false,
  },
  {
    id: 'cert-12',
    title: 'Chứng nhận / Chứng chỉ (12)',
    issuedBy: 'Đơn vị cấp',
    type: 'food-safety',
    scope: 'Xem ảnh để xác nhận nội dung cụ thể',
    imagePath: '/images/certifications/cert-12.jpg',
    sourceFilename: '3922862440719352347.jpg',
    featured: false,
  },
  {
    id: 'cert-13',
    title: 'Chứng nhận / Chứng chỉ (13)',
    issuedBy: 'Đơn vị cấp',
    type: 'quality-system',
    scope: 'Xem ảnh để xác nhận nội dung cụ thể',
    imagePath: '/images/certifications/cert-13.jpg',
    sourceFilename: '4231943829155328912.jpg',
    featured: false,
  },
  {
    id: 'cert-14',
    title: 'Chứng nhận / Chứng chỉ (14)',
    issuedBy: 'Đơn vị cấp',
    type: 'brand',
    scope: 'Xem ảnh để xác nhận nội dung cụ thể',
    imagePath: '/images/certifications/cert-14.jpg',
    sourceFilename: '4315283779700851631.jpg',
    featured: false,
  },
  {
    id: 'cert-15',
    title: 'Chứng nhận / Chứng chỉ (15)',
    issuedBy: 'Đơn vị cấp',
    type: 'product-test',
    scope: 'Xem ảnh để xác nhận nội dung cụ thể',
    imagePath: '/images/certifications/cert-15.jpg',
    sourceFilename: '4475132879110897444.jpg',
    featured: false,
  },
]

export const certTypeLabels: Record<CertType, string> = {
  'food-safety': 'An toàn thực phẩm',
  'quality-system': 'Hệ thống chất lượng',
  'product-test': 'Kiểm nghiệm sản phẩm',
  'brand': 'Thương hiệu & Pháp lý',
  'registration': 'Đăng ký doanh nghiệp',
}

export const featuredCertifications = certifications.filter((c) => c.featured)
