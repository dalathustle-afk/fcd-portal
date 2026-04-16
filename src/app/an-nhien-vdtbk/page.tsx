import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, ShieldAlert, CheckCircle2, Factory, TrendingUp, Handshake, ShieldCheck } from 'lucide-react'

import {
  scaSpecialtyCriteria, primaryDefects, secondaryDefects,
  riskControls, communitySolutions, marketValidation, partnerPillars
} from '@/data/an-nhien-vdtbk'

import { tenSteps, proofPoints, costPerCup, anNhienCombo } from '@/data/an-nhien'

export const metadata: Metadata = {
  title: 'Dự Án An Nhiên — FCD & VDTBK',
  description: 'Thuyết minh dự án phân phối Cà Phê Đặc Sản chất lượng cao. Chuyên môn hóa lộ trình chuẩn SCA, kiểm soát độc tố FDA và giải pháp cho cộng đồng khởi nghiệp VDTBK.',
}

export default function AnNhienVDTBKPage() {
  // Styles UI dùng chung
  const sectionBgWhite = "bg-white border-y border-slate-100";
  const sectionBgLight = "bg-[#FDFBF7]";
  const sectionBgDark = "bg-[#111A24] text-white"; // Deep navy cho khối kỹ thuật y khoa
  
  const bentoCard = "relative overflow-hidden bg-white border border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl";

  return (
    <div className="font-body text-slate-800 bg-[#FDFBF7]">
      
      {/* ══ SECTION 1: HERO DÀNH CHO BOD & ĐỐI TÁC ════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/nature/hero-caudat.png" 
            alt="Cầu Đất Farm FCD" 
            fill 
            className="object-cover opacity-30 mix-blend-luminosity" 
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1118]/80 via-[#0A1118]/60 to-[#FDFBF7]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 mb-6 text-amber-500 font-bold tracking-widest text-sm uppercase px-4 py-1.5 border border-amber-500/30 rounded-full bg-amber-500/10">
            <Handshake size={14} /> Trình Bày Giải Pháp Hệ Thống Phân Phối
          </span>
          <h1 className="font-display text-4xl sm:text-6xl text-white mb-6 leading-tight drop-shadow-lg">
            Chuẩn Hóa Tiêu Dùng <br className="hidden sm:block" /> Cà Phê Đặc Sản Minh Bạch
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
            Chúng tôi không bán một gói cà phê đơn lẻ. Chúng tôi cung cấp <strong className="text-white">một hệ giải pháp toàn diện</strong> nhằm thiết lập mạng lưới tiêu dùng an toàn (SCA Grade, chuẩn FDA) và cơ hội kinh doanh tinh gọn, kết nối mạng lưới VDTBK.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="#cta" className="px-8 py-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-bold transition-all shadow-lg shadow-amber-600/20">
              Khám Phá Dự Án <ArrowRight size={16} className="inline ml-1 -mt-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ SECTION 2: ĐẲNG CẤP SẢN PHẨM FCD LÀ GÌ? ═══════════════════════════════ */}
      <section className={`py-24 ${sectionBgWhite}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-6 font-semibold">Đẳng cấp của FCD đến từ đâu?</h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-slate-600 text-[17px] leading-relaxed max-w-3xl mx-auto">
            FCD được định vị là dòng cà phê đặc sản chất lượng cao. Đẳng cấp không chỉ nằm ở những mỹ từ miêu tả hương vị bay bổng, mà bản chất cốt lõi nằm ở <strong className="text-slate-900">năng lực kiểm soát đồng bộ rủi ro chuỗi cung ứng</strong>. Từ quy hoạch vùng trồng độ cao phù hợp, áp dụng máy quang học lọc hạt khiếm khuyết, hệ thống rang Hot-Air điều khiển biên thiên nhiệt chính xác cho đến quy trình đóng gói truy xuất nguồn gốc.
          </p>
        </div>
      </section>

      {/* ══ SECTION 3: TIÊU CHUẨN SCAA/SCA BẮT BUỘC ════════════════════════════════ */}
      <section className={`py-24 ${sectionBgLight}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-14 max-w-3xl">
            <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs mb-2 block">Tham Chiếu Đo Lường</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-4 font-semibold">Tiêu Chuẩn Specialty Grade (SCA)</h2>
            <p className="text-slate-600 font-medium leading-relaxed">
              Dựa trên cấu trúc 5 bậc xếp hạng (Green Coffee Grading) của Hiệp hội Cà phê Đặc sản Quốc tế, Sản phẩm phải thỏa mãn đồng thời toàn bộ ma trận tiêu chí khắt khe sau để đạt chứng nhận Loại 1.
            </p>
          </div>

          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-5 border-b border-slate-100 bg-slate-50 uppercase text-[11px] font-bold text-slate-500 tracking-wider">
               <div className="p-4 md:col-span-1 hidden md:block">Danh Mục</div>
               <div className="p-4 md:col-span-1 hidden md:block">Yêu Cầu</div>
               <div className="p-4 md:col-span-3 hidden md:block">Chi Tiết Kiểm Định</div>
            </div>
            <div className="divide-y divide-slate-100">
              {scaSpecialtyCriteria.map((crit) => (
                <div key={crit.id} className="grid grid-cols-1 md:grid-cols-5 hover:bg-slate-50 transition-colors">
                  <div className="p-4 md:col-span-1 font-bold text-slate-800 flex items-center">{crit.title}</div>
                  <div className="p-4 md:col-span-1 text-amber-700 font-bold text-sm bg-amber-50/30 flex items-center border-x border-slate-50">
                    {crit.requirement}
                  </div>
                  <div className="p-4 md:col-span-3 text-slate-600 text-[15px] leading-relaxed flex items-center">
                    {crit.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 4: 18 NHÓM KHIẾM KHUYẾT (DEFECTS) ══════════════════════════════ */}
      <section className={`py-24 ${sectionBgWhite}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-slate-900 mb-4 font-semibold">Cơ Chế Khuyết Tật Hạt Cà Phê Xanh</h2>
            <p className="text-slate-600 max-w-4xl mx-auto mb-6">
              Lỗi sơ cấp là tác nhân phá hủy trực tiếp mẻ rang và chứa độc tố, trong khi lỗi thứ cấp gây suy giảm tính đồng nhất. Chỉ quy đổi ra 1 lỗi sơ cấp cũng sẽ loại lô hàng khỏi chuẩn Specialty.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 inline-block text-left max-w-3xl text-xs text-slate-500">
              <span className="font-bold">Lưu ý chuyên môn:</span> Trong truyền thông nội bộ và tài liệu đào tạo thực chiến, FCD thường nhấn mạnh 16 nhóm lỗi trọng yếu dễ ảnh hưởng trực tiếp đến chất lượng. Tuy nhiên, khi đối chiếu báo cáo tham chiếu chuẩn quốc tế SCA/SCAA chính thức, hệ thống này được cấu trúc thành <strong className="text-slate-700">18 nhóm khiếm khuyết (7 lỗi sơ cấp + 11 lỗi thứ cấp)</strong>.
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Lỗi sơ cấp */}
            <div className="bg-red-50/40 rounded-3xl border border-red-100 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">7</div>
                <h3 className="text-xl font-bold text-slate-900">Lỗi Sơ Cấp (Primary Defects)</h3>
              </div>
              <p className="text-sm text-red-800 mb-6 bg-red-100/50 p-3 rounded-lg border border-red-200">
                Tác động tột bậc đến an toàn và sức khỏe. CẤM TUYỆT ĐỐI không được có bất kỳ tỷ lệ nào.
              </p>
              <div className="space-y-3">
                {primaryDefects.map((def, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-red-100/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
                    <div>
                      <div className="font-bold text-slate-800 font-mono text-sm">{def.name}</div>
                      <div className="text-slate-500 text-xs">{def.viName}</div>
                    </div>
                    <div className="text-[13px] text-red-700 font-medium sm:text-right sm:max-w-[55%]">
                      {def.impact}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lỗi thứ cấp */}
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold">11</div>
                 <h3 className="text-xl font-bold text-slate-900">Lỗi Thứ Cấp (Secondary Defects)</h3>
              </div>
              <p className="text-sm text-slate-600 mb-6">
                Nhóm lỗi nhẹ trên từng đơn vị. Tuy nhiên sự cộng dồn chúng (Full defects) sẽ làm phá vỡ ma trận hương vị và mất đi độ làm sạch tinh khiết của hạt nguyên liệu.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {secondaryDefects.map((def, i) => (
                   <div key={i} className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                     <div className="font-bold text-slate-700 text-sm">{def.name}</div>
                     <div className="text-slate-500 text-xs">{def.viName}</div>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 5: ĐỘC TỐ & RỦI RO FDA (Y KHOA/ KHOA HỌC) ═════════════════════ */}
      <section className={`py-24 ${sectionBgDark}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/3">
              <ShieldAlert size={80} className="text-red-500 mb-6 drop-shadow-[0_0_20px_rgb(239,68,68,0.5)]" />
              <h2 className="font-display text-4xl mb-4 font-semibold">Báo Động Cấp Thiết</h2>
              <p className="text-slate-400 leading-relaxed font-medium">An toàn thực phẩm trong chế biến và bảo quản cà phê nguyên liệu xanh.</p>
            </div>
            
            <div className="md:w-2/3 bg-[#1A2634] p-8 rounded-3xl border border-slate-700 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                 <ShieldAlert size={150} />
               </div>
               
               <h3 className="text-amber-400 font-bold text-xl uppercase tracking-widest mb-4">Mối đe dọa Mycotoxins & FDA</h3>
               
               <p className="text-slate-300 text-[15px] leading-relaxed mb-4">
                 Sự hiện diện của hạt lỗi (đặc biệt hạt mốc/đen), phơi sấy sai quy trình và độ ẩm vượt mức kéo theo rủi ro sinh sôi tàn khốc của nấm mốc. 
               </p>
               
               <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-4">
                 <p className="text-red-200 text-sm leading-relaxed">
                   Theo báo cáo từ Cục Quản lý Thực phẩm & Dược phẩm Mỹ (FDA), <strong className="text-red-400">Ochratoxin A</strong> — là một dạng Mycotoxin do nấm Aspergillus và Penicillium phát sinh — thường xuyên xuất hiện trong cà phê không đạt chuẩn. Độc tố này có tính bền nhiệt cực cao, không bị triệt tiêu dù rang ở nhiệt độ lớn, âm thầm tích lũy gây hại nghiêm trọng cho gan/thận.
                 </p>
               </div>
               
               <p className="text-slate-400 text-sm font-medium">
                 Đó là lý do FCD buộc phải triển khai giải pháp thanh lọc triệt để khuyết tật bằng máy quang học trước công đoạn cung ứng ra thị trường.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 6: QUY TRÌNH 10 BƯỚC ĐỂ TRIỆT TIÊU RỦI RO ══════════════════════ */}
      <section className={`py-24 ${sectionBgLight}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-700 font-bold uppercase tracking-widest text-xs mb-2 block">Cơ chế Bảo vệ</span>
            <h2 className="font-display text-4xl text-slate-900 mb-4 font-semibold">10 Bước Đối Xung Triệt Tiêu Rủi Ro</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              Không tồn tại rủi ro bằng 0 trên diện rộng, nhưng nhờ hệ quy trình 10 bước khép kín và máy móc tỷ giá lớn, FCD gỡ bỏ mọi điểm đứt gãy độc hại trong chuỗi cung ứng đặc sản.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Cột Quy trình chuẩn (Bên trái) */}
            <div>
              <h3 className="font-bold text-xl text-slate-800 mb-8 border-l-4 border-[#C87E3A] pl-3">Hệ thống sản xuất 10 bước</h3>
              <div className="space-y-4 relative">
                <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-200"></div>
                {tenSteps.map((step) => (
                  <div key={step.step} className="flex gap-4 items-center relative z-10">
                     <div className="w-8 h-8 rounded-full bg-white border border-[#C87E3A] flex items-center justify-center font-bold text-[#C87E3A] text-sm shrink-0 shadow-sm">{step.step}</div>
                     <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col justify-center min-h-[56px]">
                       <div className="font-bold text-slate-700 text-sm leading-tight flex items-center justify-between">
                         {step.title}
                         {step.step === 7 && <span className="bg-amber-100 text-amber-800 text-[9px] px-2 py-0.5 rounded-full uppercase">Cốt lõi</span>}
                       </div>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cột Ma trận chặn đứng rủi ro (Bên phải) */}
            <div>
              <h3 className="font-bold text-xl text-slate-800 mb-8 border-l-4 border-red-500 pl-3">Mapping Biện pháp Kiểm Soát</h3>
              <div className="space-y-6">
                {riskControls.map((rc, idx) => (
                  <div key={idx} className={`${bentoCard} p-6`}>
                     <div className="flex items-center gap-2 text-red-600 font-bold mb-3 border-b border-slate-100 pb-2">
                       <ShieldAlert size={16} /> Nguy cơ: {rc.risk}
                     </div>
                     <div className="space-y-3 mb-4">
                       <p className="text-xs text-slate-500"><strong className="text-slate-700">Nguyên do:</strong> {rc.source}</p>
                       <p className="text-xs text-slate-500"><strong className="text-slate-700">Hậu quả:</strong> {rc.consequence}</p>
                     </div>
                     <div className="bg-emerald-50 text-emerald-800 p-3 rounded-lg border border-emerald-100/50 text-sm font-medium flex gap-2 items-start">
                       <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-emerald-600" /> 
                       Giáp khiên FCD: {rc.control}
                     </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SECTION 7: CHỨNG NHẬN / BẢO CHỨNG PHÁP LÝ ══════════════════════════════ */}
      <section className={`py-24 ${sectionBgWhite}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-[#C87E3A] font-bold uppercase tracking-widest text-xs mb-2 block">Legal & Certificates Validation</span>
            <h2 className="font-display text-4xl text-slate-900 mb-4 font-semibold">Hệ thống Bảo Chứng Toàn Cầu</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Chất lượng không đến từ lời tự tuyên xưng. Mọi quy trình của nhà máy đều đặt dưới sự đánh giá của các chế định uy tín trên thế giới và tại Việt Nam.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {proofPoints.map((pp) => (
              <div key={pp.id} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="font-display text-3xl font-bold italic text-slate-300 group-hover:text-[#C87E3A] transition-colors mb-4">{pp.label}</div>
                <div className="font-bold text-slate-800 text-sm mb-2">{pp.fullName}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{pp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 8: GIẢI PHÁP AN NHIÊN CHO 3 CỘNG ĐỒNG ══════════════════════════ */}
      <section className={`py-24 ${sectionBgLight}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-slate-900 mb-4 font-semibold">Tích hợp Hệ Sinh Thái An Nhiên</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Chuyển hóa tiêu chuẩn chuyên môn thành tiện ích thiết thực. Đóng gói lộ trình cung ứng cho 3 nhóm cộng đồng nòng cốt.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {communitySolutions.map((sol, index) => (
              <div key={index} className={`${bentoCard} p-8 hover:-translate-y-1 transition-transform border-[#C87E3A]/20 bg-white`}>
                <div className="text-4xl mb-6">{sol.icon}</div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">{sol.title}</h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">{sol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 9: BÀI TOÁN HIỆU QUẢ KINH TẾ ═══════════════════════════════════ */}
      <section className={`py-24 ${sectionBgWhite}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-5/12">
              <span className="text-amber-600 font-bold uppercase tracking-widest text-xs mb-2 block">Economic Feasibility</span>
              <h2 className="font-display text-4xl text-slate-900 mb-6 font-semibold">Tối Ưu Hóa Chi Phí Vốn</h2>
              <p className="text-slate-600 text-[15px] leading-relaxed mb-6">
                Chất lượng Specialty nhưng sở hữu chi phí pha chế cực kỳ thấp nhờ vào động lực: <strong className="text-slate-900">Combo 12kg tặng thiết bị chiết xuất áp suất 20 Bar tiêu chuẩn Ý.</strong>
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="font-bold text-amber-900 text-sm">Chỉ từ 3.271 VNĐ / Ly</p>
                <p className="text-amber-700/80 text-xs mt-1">Chi phí cost nguyên liệu sạch lý tưởng cho vận hành doanh nghiệp & HoReCa.</p>
              </div>
            </div>
            
            <div className="md:w-7/12 w-full bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full text-left">
                <thead className="bg-[#111A24] text-slate-300">
                  <tr>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider">Mã Dòng Cà Phê</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-right">Chi phí Định mức 140 Ly</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/50">
                  {costPerCup.map(c => (
                     <tr key={c.code} className="hover:bg-white transition-colors">
                       <td className="px-5 py-3">
                         <div className="font-bold text-slate-800">{c.name}</div>
                         <div className="text-[11px] text-slate-400 font-mono">{c.code}</div>
                       </td>
                       <td className="px-5 py-3 text-right">
                         <span className="font-bold text-amber-700">{c.costPer140.toLocaleString('vi-VN')} đ</span>
                       </td>
                     </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 10 & 11: MARKET VALIDATION & MẠNG LƯỚI KHỞI NGHIỆP VDTBK ══════ */}
      <section className={`py-24 ${sectionBgDark}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Left: Validation */}
            <div className="p-10 rounded-3xl bg-[#1A2634] border border-slate-700 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center text-amber-400">
                  <TrendingUp size={24} />
                </div>
                <h3 className="font-display text-3xl font-semibold">Minh Chứng Từ Thị Trường</h3>
              </div>
              <div className="font-bold text-6xl text-white mb-2">{marketValidation.tested}+</div>
              <p className="text-amber-400 font-bold uppercase text-xs tracking-wider mb-6 border-b border-slate-700 pb-6">Khách hàng tiên phong kiểm chứng</p>
              <p className="text-slate-300 leading-relaxed font-medium">{marketValidation.feedback}</p>
            </div>

            {/* Right: VDTBK */}
            <div className="p-10 rounded-3xl bg-gradient-to-br from-[#0C121A] to-[#121B26] border border-emerald-500/30 shadow-xl relative overflow-hidden">
               {/* decoration */}
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full"></div>
               
               <div className="flex items-center gap-3 mb-6 relative z-10">
                 <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 border border-emerald-500/40">
                   <ShieldCheck size={24} />
                 </div>
                 <h3 className="font-display text-2xl font-semibold">Sứ Mệnh Đồng Hành VDTBK</h3>
               </div>
               <p className="text-slate-300 leading-relaxed font-medium relative z-10">{marketValidation.vdtbkMission}</p>
               
               <div className="mt-8 pt-6 border-t border-slate-700/50 relative z-10 flex gap-3 items-center">
                 <div className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-full font-bold border border-slate-600">Giáo dục trải nghiệm</div>
                 <div className="bg-slate-800 text-slate-300 text-xs px-3 py-1.5 rounded-full font-bold border border-slate-600">Khởi nghiệp sinh viên</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SECTION 12: MỜI GỌI ĐỐI TÁC PHÂN PHỐI ═════════════════════════════════ */}
      <section className={`py-24 ${sectionBgLight}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl text-slate-900 mb-6 font-semibold">Tầm Nhìn Hợp Tác Phân Phối</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-8">
              Bức tranh tài chính phải được xây dựng trên một móng nền đạo đức. FCD tìm kiếm các đối tác khao khát phủ sóng cà phê sạch, với hệ chuẩn mực văn hóa bất biến.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {partnerPillars.map((pillar, i) => (
              <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#C87E3A] opacity-30 mt-1">
                  {/* Decorative roman numerals */}
                  <span className="font-display text-3xl font-bold italic">{['I', 'II', 'III', 'IV'][i]}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">{pillar.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTION 13: DUAL CTA CUỐI CÙNG ═══════════════════════════════════════ */}
      <section id="cta" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 mb-6 font-semibold">Thiết Lập Vị Thế Dẫn Đầu Bước Sang Kỷ Nguyên Specialty</h2>
          <p className="text-slate-600 mb-10 text-[15px]">Hãy kết nối để triển khai Gói Tiêu dùng An Nhiên cho Doanh nghiệp, hoặc đồng hành tư cách nhà phân phối khu vực cùng hệ sinh thái kiến thức VDTBK.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/lien-he?type=combo" className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-colors shadow-lg">
               Đăng Ký Tiêu Dùng Doanh Nghiệp
             </Link>
             <Link href="/lien-he?type=partner" className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors shadow-lg">
               Đăng Ký Đối Tác Phân Phối
             </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
