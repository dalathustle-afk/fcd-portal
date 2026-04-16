import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, Handshake, AlertTriangle, CheckCircle2, ShieldCheck, 
  TrendingUp, GraduationCap, DollarSign, Home, Coffee, Briefcase 
} from 'lucide-react'

import {
  scaSpecialtyCriteria, primaryDefects, secondaryDefects,
  communitySolutions, marketValidation, partnerPillars
} from '@/data/an-nhien-vdtbk'

import { tenSteps, proofPoints, costPerCup, anNhienCombo } from '@/data/an-nhien'

export const metadata: Metadata = {
  title: 'Báo Cáo Dự Án — FCD & VDTBK',
  description: 'Thuyết minh dự án FCD An Nhiên. Định vị đẳng cấp Specialty, tuân thủ FDA, và sứ mệnh hệ sinh thái phân phối toàn quốc.',
}

export default function VDTBKPresentationPage() {
  const blockTitle = "font-display text-4xl sm:text-5xl text-slate-900 font-semibold mb-6";
  const bentoCard = "bg-white border border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] rounded-2xl p-8";

  return (
    <div className="font-body text-slate-800 bg-[#FDFBF7]">
      
      {/* =======================================================================
          KHỐI 1: ĐẲNG CẤP & TIÊU CHUẨN BẮT BUỘC (SCA, FDA, 18 KHIẾM KHUYẾT)
      ======================================================================= */}
      <section className="relative pt-24 pb-20 bg-slate-900 text-white overflow-hidden">
        {/* Abstract dark background for the first massive block */}
        <div className="absolute inset-0 z-0">
          <Image src="/images/nature/hero-caudat.png" alt="Cầu Đất" fill className="object-cover opacity-10 mix-blend-luminosity" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1118]/90 via-[#0C141D]/90 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          {/* Headline Khối 1 */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 mb-6 text-amber-500 font-bold tracking-widest text-xs uppercase px-4 py-1.5 border border-amber-500/30 rounded-full bg-amber-500/10">
              <Handshake size={14} /> Trình bày Giải Pháp Khởi Nghiệp VDTBK
            </span>
            <h1 className="font-display text-4xl sm:text-6xl text-white mb-6 leading-tight">
              Định Vị Đẳng Cấp Sản Phẩm <br /> Bằng Tiêu Chuẩn Quốc Tế
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Sản phẩm của chúng tôi không khẳng định chất lượng qua các khẩu hiệu marketing. Đẳng cấp của hệ sinh thái FCD được xác lập bởi năng lực vô hiệu hóa rủi ro độc tố và đạt chuẩn SCA (Specialty Coffee Association).
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-12 border-t border-slate-700/50 pt-16">
            {/* Phân tích SCA Standard */}
            <div>
              <h2 className="text-2xl font-bold text-amber-400 mb-6">1. Tiêu Chuẩn Specialty Grade (SCA)</h2>
              <p className="text-slate-400 mb-6 text-sm">Cà phê phải thỏa mãn đồng thời toàn bộ tiêu chuẩn này để được phân hạng Đặc sản.</p>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden">
                {scaSpecialtyCriteria.map((crit, idx) => (
                  <div key={crit.id} className={`grid grid-cols-3 p-4 ${idx !== 0 ? 'border-t border-slate-700/50' : ''}`}>
                    <div className="col-span-1 text-sm font-bold text-slate-100">{crit.title}</div>
                    <div className="col-span-2 text-sm text-slate-300">
                      <strong className="text-amber-500 mb-1 block">{crit.requirement}</strong>
                      {crit.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cảnh báo FDA & 18 Lỗi Khiếm khuyết */}
            <div>
              <h2 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <AlertTriangle /> 2. Răn Đe Từ FDA & Mối Nguy 18 Nhóm Lỗi 
              </h2>
              
              <div className="bg-red-950/30 border border-red-900/50 rounded-2xl p-6 mb-6">
                <p className="text-red-200 text-sm leading-relaxed">
                  Cục Quản lý Thực phẩm & Dược phẩm Mỹ (FDA) cảnh báo <strong className="text-red-400">Ochratoxin A (Mycotoxins)</strong> liên tục xuất hiện trong cà phê thu hoạch và bảo quản sai cách (chứa hạt đen, mốc). Độc tố này kháng nhiệt cực tốt, **cộng gộp theo thời gian gây suy thận, ung thư**.
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 p-6 rounded-2xl">
                 <h3 className="font-bold text-white mb-3 text-lg">Ma Trận 18 Khiếm Khuyết Hạt Xanh</h3>
                 <p className="text-xs text-slate-400 italic mb-4">*Trong một số tài liệu truyền thông bộ nội, FCD dùng danh xưng 16 nhóm lỗi để tối ưu hóa việc đào tạo. Tuy nhiên, theo bảng chuẩn SCA chính thức, phân hệ gồm đúng 18 nhóm lỗi (7 Sơ cấp, 11 Thứ cấp).</p>
                 
                 <div className="mb-4">
                   <div className="text-red-400 text-sm font-bold mb-2">7 Lỗi Sơ Cấp (Nghiêm Cấm Tuyệt Đối):</div>
                   <div className="flex flex-wrap gap-2">
                     {primaryDefects.map((def, i) => (
                       <span key={i} className="bg-red-900/30 border border-red-800/50 text-red-200 text-[11px] px-2.5 py-1 rounded-md">{def.name}</span>
                     ))}
                   </div>
                 </div>
                 
                 <div>
                   <div className="text-amber-400 text-sm font-bold mb-2">11 Lỗi Thứ Cấp (Làm vỡ cấu trúc đồng nhất):</div>
                   <div className="flex flex-wrap gap-2">
                     {secondaryDefects.map((def, i) => (
                       <span key={i} className="bg-slate-700 border border-slate-600 text-slate-200 text-[11px] px-2.5 py-1 rounded-md">{def.name}</span>
                     ))}
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
          KHỐI 2: LỜI KHẲNG ĐỊNH MẠNH MẼ (10 BƯỚC CÔNG NGHỆ + CHỨNG NHẬN)
      ======================================================================= */}
      <section className="py-24 bg-[#FAFAFA] border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={blockTitle}>Khẳng Định Sức Mạnh Thực Thi</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Để đáp ứng được ma trận an toàn khắt khe trên, FCD đã chuẩn hóa <strong className="text-slate-900">10 bước kiểm soát rủi ro bằng dây chuyền công nghệ hiện đại.</strong>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
             {/* Timeline 10 Steps */}
             <div className="relative">
               <div className="absolute left-6 top-8 bottom-8 w-1 bg-slate-200 rounded-full"></div>
               <div className="space-y-3">
                 {tenSteps.map((step) => (
                   <div key={step.step} className="flex gap-6 items-center group relative z-10">
                     <div className="w-12 h-12 rounded-full bg-white border-[3px] border-emerald-500 text-emerald-700 font-bold flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                       {step.step}
                     </div>
                     <div className="bg-white border border-slate-200 rounded-xl p-4 flex-1 shadow-sm group-hover:shadow-md transition-all">
                       <h4 className="font-bold text-slate-800 text-[15px] mb-1">{step.title}</h4>
                       <p className="text-xs text-slate-500 leading-snug hidden sm:block">{step.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>

             {/* Tech Highlight & Certs */}
             <div>
               <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl mb-8">
                 <h3 className="font-bold text-xl text-emerald-900 mb-4 border-b border-emerald-200 pb-4">Công Nghệ Át Chủ Bài</h3>
                 <ul className="space-y-4">
                   <li className="flex gap-3">
                     <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" />
                     <div>
                       <strong className="block text-slate-900">Máy Quang Học Nhật Bản</strong>
                       <span className="text-sm text-slate-600">Đọc và bắn bỏ 100% hạt mốc/đen/sâu phá vỡ nguyên lý sàng lọc bằng tay truyền thống. Triệt tiêu rủi ro Ochratoxin A.</span>
                     </div>
                   </li>
                   <li className="flex gap-3">
                     <CheckCircle2 className="text-emerald-600 shrink-0 mt-0.5" />
                     <div>
                       <strong className="block text-slate-900">Máy Rang Hot-air Của Ý</strong>
                       <span className="text-sm text-slate-600">Điều hướng luồng khí nóng bay quanh hạt, ngăn cà phê tiếp xúc trực tiếp nền lồng rang, chống biến đổi Acrylamide (cháy khét).</span>
                     </div>
                   </li>
                 </ul>
               </div>

               <div>
                 <h3 className="font-bold text-lg text-slate-900 mb-4 uppercase tracking-widest text-center">Bảo Chứng Quốc Tế</h3>
                 <div className="grid grid-cols-2 gap-4">
                   {proofPoints.map(pp => (
                     <div key={pp.id} className="bg-white border border-slate-200 rounded-2xl p-4 text-center shadow-sm">
                       <div className="text-2xl font-display italic text-[#C87E3A] font-bold mb-2">{pp.label}</div>
                       <div className="text-[11px] font-bold text-slate-500">{pp.fullName}</div>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* =======================================================================
          KHỐI 3: GIẢI PHÁP TIÊU DÙNG AN NHIÊN (Tiết Kiệm + Đẳng Cấp + An Toàn)
      ======================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={blockTitle}>Giải Pháp Tiêu Dùng An Nhiên</h2>
            <p className="text-slate-600 text-lg">
              Một giải pháp đồng bộ kết hợp <strong className="text-amber-700">Tiết kiệm + Đẳng cấp + An toàn</strong> dành riêng cho 3 định dạng cộng đồng: Tại gia, Văn Phòng & HoReCa.
            </p>
          </div>

          {/* 3 Cộng Đồng */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { ...communitySolutions[0], icon: <Home size={32} /> },
              { ...communitySolutions[1], icon: <Briefcase size={32} /> },
              { ...communitySolutions[2], icon: <Coffee size={32} /> },
            ].map((sol, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center">
                <div className="w-16 h-16 mx-auto bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">{sol.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{sol.title}</h3>
                <p className="text-sm text-slate-600">{sol.desc}</p>
              </div>
            ))}
          </div>

          {/* Combo 12kg & Bài toán Kinh tế */}
          <div className="bg-amber-50 rounded-[32px] border border-amber-200 overflow-hidden lg:flex items-stretch shadow-lg">
             <div className="lg:w-1/2 p-10 bg-gradient-to-br from-amber-600 to-amber-700 text-white flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10"><DollarSign size={200} /></div>
                <div className="relative z-10">
                  <h3 className="font-display text-4xl mb-4 font-bold">{anNhienCombo.title}</h3>
                  <p className="text-amber-100 mb-8">{anNhienCombo.subtitle}</p>
                  
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-6">
                    <div className="text-amber-200 font-bold uppercase tracking-wider text-xs mb-2">Đòn bẩy máy móc thiết bị:</div>
                    <div className="text-2xl font-bold text-white mb-2">Tặng 01 Máy Pha 20 Bar Ý</div>
                    <p className="text-amber-100 text-sm leading-relaxed">{anNhienCombo.machine.description}</p>
                  </div>

                  <p className="text-sm text-amber-200">* Thanh toán 50% chỉ với 2.612.000đ để nhận thiết bị pha chế tận nơi.</p>
                </div>
             </div>
             <div className="lg:w-1/2 p-10 bg-white flex flex-col justify-center">
                <h3 className="font-bold text-xl text-slate-900 mb-6 border-b border-slate-100 pb-4">Biểu Cước Vốn (Chỉ từ 3.271đ/Ly)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-400 border-b border-slate-200">
                        <th className="pb-3 font-medium">Phân Loại Cà Phê</th>
                        <th className="pb-3 font-medium text-right">Chi phí / Cốc 140 Ly</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {costPerCup.map(c => (
                        <tr key={c.code}>
                          <td className="py-3">
                            <span className="font-bold text-slate-800 block">{c.name}</span>
                            <span className="text-[10px] uppercase font-bold text-slate-400">{c.code}</span>
                          </td>
                          <td className="py-3 text-right font-bold text-amber-700 text-base">{c.costPer140.toLocaleString('vi-VN')} đ</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* =======================================================================
          KHỐI 4: TEST THỊ TRƯỜNG & CHƯƠNG TRÌNH VDTBK
      ======================================================================= */}
      <section className="py-24 bg-[#FDFBF7] border-y border-slate-200">
         <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12">
               
               {/* Market Validation */}
               <div className="bg-emerald-900 text-white p-10 rounded-[32px] relative overflow-hidden shadow-xl">
                 <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/20 blur-3xl rounded-full"></div>
                 <div className="relative z-10">
                   <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-8 border border-white/20">
                     <TrendingUp className="text-emerald-400" size={32} />
                   </div>
                   <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-2">Thực Chứng Thị Trường</h3>
                   <div className="font-display text-5xl font-bold mb-6">Test Demo <br/> ~{marketValidation.tested} Khách hàng</div>
                   <p className="text-emerald-100/80 leading-relaxed font-medium">"{marketValidation.feedback}"</p>
                 </div>
               </div>

               {/* VDTBK */}
               <div className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-200 flex flex-col justify-center">
                 <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mb-8 border border-indigo-100">
                   <GraduationCap className="text-indigo-600" size={32} />
                 </div>
                 <h3 className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-2">Sứ Mệnh Xã Hội</h3>
                 <h2 className="font-display text-4xl text-slate-900 font-bold mb-6">Chương Trình Khởi Nghiệp VDTBK</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                   {marketValidation.vdtbkMission}
                 </p>
                 <div className="mt-auto border-t border-slate-100 pt-6 flex items-center gap-4">
                    <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-md">Khởi nghiệp sinh viên</span>
                    <span className="text-xs font-bold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-md">Giáo dục thực chiến</span>
                 </div>
               </div>

            </div>
         </div>
      </section>

      {/* =======================================================================
          KHỐI 5: KÊU GỌI ĐỐI TÁC PHÂN PHỐI & CTA CUỐI
      ======================================================================= */}
      <section className="pt-24 pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className={blockTitle}>Hệ Giá Trị Phân Phối Của FCD</h2>
          <p className="text-slate-600 text-lg mb-12">
            Mở rộng tệp đại lý trên toàn quốc để lan tỏa cà phê thực sự an toàn. Chúng tôi không thu hút bằng lợi nhuận chộp giật, mà bằng hệ sinh thái văn hóa kinh doanh bền vững.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {partnerPillars.map((pillar, i) => (
              <div key={i} className="bg-amber-50/50 border border-amber-100 rounded-2xl p-6 hover:bg-amber-50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm text-amber-600 font-bold text-xl mx-auto mb-4 border border-amber-200">
                  <ShieldCheck size={20} />
                </div>
                <h4 className="font-bold text-slate-800 mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed hidden sm:block">{pillar.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 rounded-[40px] p-12 text-center shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 blur-[80px] rounded-full pointer-events-none"></div>
             <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/10 blur-[80px] rounded-full pointer-events-none"></div>
             
             <div className="relative z-10">
               <h2 className="font-display text-4xl text-white mb-8 font-bold">Thỏa Hiệp Sự An Nhiên? Quyết Định Là Ở Bạn.</h2>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="/lien-he?type=combo" className="px-8 py-4 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold transition-all shadow-lg hover:-translate-y-1">
                   1. Đăng Ký Trải Nghiệm Sản Phẩm
                 </Link>
                 <Link href="/lien-he?type=partner" className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold backdrop-blur-sm transition-all hover:-translate-y-1">
                   2. Đăng Ký Đại Lý Phân Phối
                 </Link>
               </div>
             </div>
          </div>

        </div>
      </section>

    </div>
  )
}
