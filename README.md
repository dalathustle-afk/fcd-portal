# FCD Portal — FROMCAUDAT Brand Web App

**Brand information hub chính thức của FCD (FROMCAUDAT)** — tra cứu sản phẩm, giá niêm yết, chính sách và chương trình An Nhiên.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Content-driven architecture** — dữ liệu trong `/src/content/*.ts`

---

## 🚀 Deploy lên Vercel (Không cần localhost)

### Bước 1: Tạo GitHub Repository

1. Vào [github.com](https://github.com) → **New repository**
2. Tên repo: `fcd-portal` (hoặc bất kỳ tên nào)
3. **Không** tích "Add README" (đã có sẵn)
4. Tạo repo → copy URL

### Bước 2: Push code lên GitHub

```bash
cd fcd-portal
git init
git add .
git commit -m "feat: initial FCD portal build"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/fcd-portal.git
git push -u origin main
```

### Bước 3: Deploy lên Vercel

1. Vào [vercel.com](https://vercel.com) → **Add New Project**
2. Import từ GitHub → chọn repo `fcd-portal`
3. Vercel tự phát hiện Next.js → **không cần config thêm**
4. Click **Deploy**
5. Khoảng 2-3 phút là live!

### Bước 4: Custom Domain (tuỳ chọn)

Trong Vercel Dashboard → Settings → Domains → thêm domain của bạn.

---

## 📁 Cấu trúc thư mục

```
fcd-portal/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx            # / Trang chủ
│   │   ├── gioi-thieu/         # /gioi-thieu
│   │   ├── an-nhien/           # /an-nhien ⭐
│   │   ├── san-pham/           # /san-pham + /san-pham/[slug]
│   │   ├── bang-gia/           # /bang-gia
│   │   ├── chinh-sach/         # /chinh-sach + /chinh-sach/[slug]
│   │   ├── gu-ca-phe/          # /gu-ca-phe
│   │   ├── doi-tac/            # /doi-tac
│   │   ├── tim-kiem/           # /tim-kiem
│   │   ├── lien-he/            # /lien-he
│   │   └── not-found.tsx       # 404
│   ├── components/             # UI Components
│   │   ├── layout/             # Navbar, Footer
│   │   ├── products/           # ProductFilters, FlavorRadar
│   │   ├── pricing/            # PriceTable
│   │   ├── partners/           # PartnerGrid
│   │   ├── search/             # HeroSearch
│   │   └── ui/                 # FAQAccordion, ...
│   ├── content/                # ⭐ TẤT CẢ DỮ LIỆU Ở ĐÂY
│   │   ├── brand.ts            # Thông tin thương hiệu
│   │   ├── products.ts         # Danh sách sản phẩm
│   │   ├── flavors.ts          # 4 gu cà phê
│   │   ├── prices.ts           # Bảng giá niêm yết
│   │   ├── policies.ts         # 6 nhóm chính sách
│   │   ├── partners.ts         # 25 đối tác doanh nghiệp
│   │   └── an-nhien.ts         # Chương trình An Nhiên
│   └── lib/
│       └── types.ts            # TypeScript types
├── public/                     # Static assets
├── next.config.ts
├── package.json
└── README.md
```

---

## ✏️ Cách cập nhật nội dung

**Tất cả nội dung** đều nằm trong `/src/content/` — chỉnh sửa file `.ts` là đủ, không cần sửa UI code.

### Thêm sản phẩm mới
Mở `/src/content/products.ts` → thêm object Product mới theo cú pháp sẵn có.

### Cập nhật bảng giá
Mở `/src/content/prices.ts` → sửa `retailPrice` / `comboPrice` và `updatedAt`.

### Thêm chính sách
Mở `/src/content/policies.ts` → thêm Policy object mới.

### Thêm đối tác
Mở `/src/content/partners.ts` → thêm PartnerCompany object.

---

## 🔧 Chạy local (optional — chỉ để dev)

```bash
npm install
npm run dev
# → http://localhost:3000
```

*(Không bắt buộc — deploy thẳng Vercel là đủ)*

---

## ✅ QA Checklist sau deploy

- [ ] Trang chủ load đúng, hero hiện rõ
- [ ] Search bar hoạt động và ra kết quả đúng
- [ ] Trang `/an-nhien` — 3 pillars, 4 gói, FAQ accordion
- [ ] Trang `/san-pham` — filter gu / dòng / giá hoạt động
- [ ] Trang `/san-pham/[slug]` — flavor radar hiển thị, bảng giá đúng
- [ ] Trang `/bang-gia` — tabs, bảng responsive trên mobile
- [ ] Trang `/chinh-sach` — nhóm đúng category
- [ ] Trang `/chinh-sach/[slug]` — tóm tắt, lợi ích, điều kiện, ví dụ, FAQ
- [ ] Trang `/gu-ca-phe` — 4 gu, anchor navigation, radar
- [ ] Trang `/doi-tac` — đủ 25 đối tác, phân tầng đúng
- [ ] Trang `/lien-he` — form submit, thông báo thành công
- [ ] Trang `/tim-kiem` — kết quả real-time
- [ ] 404 page hiển thị đúng
- [ ] Mobile responsive — navbar, bảng giá, form
- [ ] SEO: title + description đúng mỗi trang

---

## 📈 Phase 2 (chưa triển khai, đề xuất)

1. **Supabase** cho form liên hệ — lưu lead vào DB + email notification
2. **CMS headless** (Sanity / Contentful) cho team non-tech edit content
3. **Hình ảnh sản phẩm thật** từ bộ ảnh FCD
4. **Analytics** (Vercel Analytics hoặc Google Analytics)
5. **Đa ngôn ngữ** (i18n) — Tiếng Anh cho đối tác quốc tế
6. **Tích hợp Zalo OA** vào CTA liên hệ
