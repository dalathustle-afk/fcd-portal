import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, AlertTriangle, CheckCircle2, Info, BarChart3, Layers, GraduationCap, Rocket } from 'lucide-react'
import {
  anMeaning, nhienMeaning, fiveNoes, tenSteps,
  proofPoints, costPerCup, anNhienCombo, barriersFaq,
  scaGrades, marketSegments, coffeeTypes,
} from '@/data/an-nhien'

export const metadata: Metadata = {
  title: 'An Nhiên Cùng FCD',
  description: 'Chương trình An Nhiên — cà phê đặc sản chất lượng cao cho văn phòng và doanh nghiệp. 5 Không, 10 bước kiểm soát, combo 12kg tặng kèm máy 20 bar.',
}

export default function AnNhienPage() {
  // Utility cho bento card ánh sáng (Light Mode Bento)
  const bentoCardLight = "relative overflow-hidden bg-white border border-slate-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-slate-300 transition-all duration-300 rounded-[28px]";
  
  // Nền sáng cho các section
  const sectionBg1 = "bg-[#FDFBF7]"; // Kem sáng (hơi ngả lúa mạch)
  const sectionBg2 = "bg-white"; // Trắng tinh sạch sẽ
  const sectionBg3 = "bg-[#F4F7F4]"; // Xanh nature pastel siêu nhạt
  const sectionBg4 = "bg-slate-50"; // Ngả xanh lam/xám rất nhẹ cho tương phản

  return (
    <div className="bg-[#FDFBF7] text-slate-900 font-body">
      {/* ══ HERO — Cinematic An Nhiên (Giữ tối phần trên cùng để hợp với Video) ══════ */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <video
            autoPlay muted loop playsInline
            poster="/images/nature/hero-caudat.png"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-80"
            preload="none"
          >
            <source src="/video/video-haicf-background.mp4" type="video/mp4" />
            <source src="/video/video-cf-background.mp4" type="video/mp4" />
          </video>
          {/* Lớp phủ an toàn để vẫn đọc được text màu trắng */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A120A]/60 via-black/40 to-black/10" />
          
          {/* FADE RA MÀU SÁNG => Đây là điểm kết nối hoàn hảo xuống Light Theme */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center pt-32 pb-20 animate-fade-in">
          <span className="badge inline-flex items-center gap-1.5 backdrop-blur-md bg-white/20 text-white border border-white/40 mb-5">
            <Leaf size={10} className="text-[#BCE3B5]" /> Giải pháp FCD
          </span>
          <h1 className="font-display text-5xl sm:text-6xl text-white mb-5 leading-tight drop-shadow-md">
            AN NHIÊN<br /><span className="text-[#E3A558]">cùng FCD</span>
          </h1>
          <p className="text-white/90 text-base max-w-xl mx-auto leading-relaxed font-medium mb-9 drop-shadow-sm">
            Cà phê đặc sản chất lượng cao — minh bạch từ vùng trồng đến ly cà phê.<br />
            An toàn, an tâm, và đúng nghĩa tự nhiên.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="#combo" className="px-7 py-3.5 rounded-full flex items-center gap-2 bg-[#C87E3A] hover:bg-[#E89D52] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Xem Gói An Nhiên <ArrowRight size={14} />
            </Link>
            <Link href="/lien-he" className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/40 text-white font-medium backdrop-blur-sm transition-all hover:-translate-y-0.5">
              Liên hệ tư vấn
            </Link>
          </div>
        </div>
      </section>


      {/* ══ SCA 5 CẤP ĐỘ ═══════════════════════════════════════════ */}
      <section className={`py-20 ${sectionBg4}`} id="sca-grade">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="text-center mb-14">
            <span className="badge bg-amber-100 text-amber-800 border border-amber-200 mb-4 shadow-sm">📊 Tiêu chuẩn SCA quốc tế</span>
            <h2 className="font-display text-3xl sm:text-5xl text-slate-800 italic mb-2 leading-tight">
              Thang Đo 5 Cấp Độ Chất Lượng
            </h2>
            <p className="text-[#C87E3A] font-display italic text-xl mb-4">theo tiêu chuẩn Coffee Association (SCA)</p>
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
              Dựa trên tiêu chí đánh giá nghiêm ngặt, SCA đã xây dựng hệ thống 5 cấp độ. 
              Đây là câu trả lời rõ ràng nhất cho việc: <em className="italic text-slate-500">Người Việt Nam đang thực sự bỏ tiền ra mua loại cà phê nào?</em>
            </p>
          </div>

          <div className="flex flex-col items-center gap-12">
            
            {/* Left: Infographic */}
            <div className="w-full max-w-2xl mx-auto">
              <div>
                <div className={`${bentoCardLight} overflow-hidden bg-white p-2`}>
                  <div className="rounded-2xl overflow-hidden bg-slate-900 border border-[var(--fcd-copper)]/20 relative">
                    {/* The image is dark, so keep a dark container for it to blend well */}
                    <Image
                      src="/images/nature/sca-grade-scale.png"
                      alt="Thang đo 5 cấp độ SCA — From Cầu Đất"
                      width={560}
                      height={840}
                      className="w-full h-auto drop-shadow-xl opacity-90 mix-blend-screen"
                    />
                  </div>
                </div>
                
                {/* FCD badge under image */}
                <div className="mt-4 p-5 rounded-3xl bg-amber-50 border border-amber-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-amber-200 blur-2xl opacity-50"></div>
                  <div className="flex items-center gap-2 mb-2 relative z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,174,92,0.8)] shrink-0 animate-pulse" />
                    <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Tiêu chuẩn FCD đang áp dụng</span>
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed relative z-10">
                    Sử dụng máy quang học Nhật Bản loại bỏ <strong className="text-amber-700">100% hạt lỗi mốc/đen</strong>,
                    trực tiếp đưa sản phẩm đạt chuẩn <strong className="text-[#C87E3A]">Specialty Grade (Loại 1)</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Detailed grade cards */}
            <div className="w-full max-w-4xl mx-auto space-y-4">
              {scaGrades.map((grade) => (
                <div
                  key={grade.level}
                  className={`rounded-[24px] border overflow-hidden transition-all duration-300 shadow-sm relative group
                    ${grade.level === 1
                      ? 'border-amber-300 bg-white shadow-[0_8px_30px_rgb(200,126,58,0.12)] hover:-translate-y-1'
                      : grade.danger
                      ? 'border-red-200 bg-red-50/50 hover:bg-red-50'
                      : 'border-slate-200 bg-white hover:bg-slate-50'
                  }`}
                >
                  {/* FCD highlight outline for Level 1 */}
                  {grade.level === 1 && (
                     <div className="absolute inset-0 border-2 border-[#C87E3A]/40 rounded-[24px] pointer-events-none"></div>
                  )}

                  {/* Level Header */}
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100/50 bg-white/50 backdrop-blur-sm">
                    <div
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-sm"
                      style={{ backgroundColor: grade.level === 1 ? '#C87E3A' : grade.danger ? '#ef4444' : '#64748b', color: 'white' }}
                    >
                      {grade.level}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <span className={`font-bold text-sm sm:text-base ${grade.level === 1 ? 'text-amber-800' : grade.danger ? 'text-red-800' : 'text-slate-800'}`}>
                          LOẠI {grade.level} — {grade.name}
                        </span>
                        <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wide">{grade.nameEn}</span>
                      </div>
                    </div>
                    <span
                      className={`hidden sm:inline-flex shrink-0 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide`}
                      style={{ 
                        backgroundColor: grade.tagType === 'positive' ? '#fef3c7' : grade.tagType === 'warning' ? '#ffedd5' : grade.tagType === 'danger' ? '#fee2e2' : '#f1f5f9',
                        color: grade.tagType === 'positive' ? '#92400e' : grade.tagType === 'warning' ? '#c2410c' : grade.tagType === 'danger' ? '#b91c1c' : '#475569',
                      }}
                    >
                      {grade.tag}
                    </span>
                  </div>

                  {/* Details Grid */}
                  <div className="p-4 sm:p-5 grid sm:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div>
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Khuyết tật</span>
                         <div className="flex items-start gap-1.5">
                            <Info size={14} className={`mt-[2px] shrink-0 ${grade.danger ? 'text-red-500' : 'text-slate-400'}`} />
                            <p className="text-sm font-medium text-slate-700 leading-snug">{grade.defects}</p>
                         </div>
                      </div>
                      <div>
                         <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Cảm quan & Độ ẩm</span>
                         <p className="text-[13px] text-slate-600 leading-relaxed">{grade.sensory}</p>
                      </div>
                    </div>
                    
                    <div className={`p-3 rounded-xl border ${grade.danger ? 'bg-red-100/50 border-red-200' : 'bg-slate-100/50 border-slate-200'}`}>
                       <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1.5 ${grade.danger ? 'text-red-800' : 'text-slate-500'}`}>Thực trạng thị trường</span>
                       <div className="flex items-start gap-1.5">
                          {grade.danger 
                            ? <AlertTriangle size={14} className="mt-0.5 shrink-0 text-red-600" />
                            : <CheckCircle2 size={14} className={`mt-0.5 shrink-0 ${grade.level===1 ? 'text-amber-600' : 'text-emerald-600'}`} />
                          }
                          <p className={`text-[13px] leading-relaxed ${grade.danger ? 'text-red-900 font-medium' : 'text-slate-700'}`}>
                            {grade.market}
                          </p>
                       </div>
                    </div>
                  </div>
                  
                  {/* Mobile Tag Show */}
                  <div className="sm:hidden px-4 pb-3">
                    <span className={`inline-flex shrink-0 text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wide`}
                      style={{ backgroundColor: grade.danger ? '#fee2e2' : '#f1f5f9', color: grade.danger ? '#b91c1c' : '#475569' }}>
                      {grade.tag}
                    </span>
                  </div>
                </div>
              ))}

              {/* Warning box */}
              <div className="mt-6 p-5 rounded-2xl border border-red-200 bg-red-50/80 flex items-start gap-3 shadow-sm">
                <AlertTriangle size={20} className="text-red-600 shrink-0 mt-0.5" />
                <p className="text-red-900 text-sm leading-relaxed">
                  <strong className="text-red-700">Mối nguy khôn lường:</strong> Đa số phân khúc cà phê bình dân, xe đẩy lề đường đang sử dụng nguồn nguyên liệu là {' '}
                  <strong className="text-red-700">cà phê Loại 4 và Loại 5</strong> — đầy rẫy hạt mốc, lép, đen. Chúng thường bị rang khét lẹt và tẩm hóa chất tột độ để đánh lừa vị giác, che giấu hoàn toàn sự độc hại bên trong.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ══ 10 BƯỚC ═══════════════════════════════════════════════ */}
      <section className={`py-20 ${sectionBg2}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge bg-amber-100 text-amber-800 border border-amber-200 mb-4 shadow-sm">⚙️ Quy trình</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-800 italic mb-3">10 Bước Kiểm Soát Chất Lượng</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto text-center">Hệ sinh thái khép kín từ nông trại đến ly cà phê — mỗi bước đều có chứng minh</p>
          </div>
          
          <div className="flex flex-col items-center gap-10 w-full">

            <div className="w-full max-w-4xl mx-auto rounded-[32px] overflow-hidden shadow-xl border border-slate-200 bg-[#E6BF50] mb-8">
               <Image src="/images/nature/quy-trinh-10-buoc.jpg" alt="10 Bước" width={1200} height={800} className="w-full h-auto object-contain" />
            </div>
            <div className="grid lg:grid-cols-2 gap-4 w-full max-w-4xl mx-auto">
            {/* Connecting visual line (left side) */}
            
            
            {tenSteps.map((step, i) => (
              <div key={step.step} className={`\${bentoCardLight} p-6 flex flex-col items-center text-center gap-4 z-10 animate-fade-in`} style={{ animationDelay: `${i * 0.05}s` }}>
                <div className={`w-12 h-12 rounded-full flex flex-col items-center justify-center shrink-0 font-bold text-white shadow-md
                  ${step.step <= 5 
                    ? 'bg-gradient-to-br from-amber-500 to-amber-600' 
                    : 'bg-gradient-to-br from-emerald-500 to-emerald-600'
                  }
                `}>
                  <span className="text-[10px] uppercase opacity-70 mb-[-4px]">BƯỚC</span>
                  <span className="text-lg leading-none">{step.step}</span>
                </div>
                
                <div className="flex-1 min-w-0 pt-0.5">
                  <div className="flex flex-col items-center justify-center gap-2 mb-2">
                    <div className="font-bold text-slate-800 text-[15px] flex items-center gap-2">
                       <span className="text-lg drop-shadow-sm">{step.icon}</span> {step.title}
                    </div>
                    <span className="text-[10px] bg-slate-100 text-slate-500 border border-slate-200 rounded-full px-2.5 py-1 shrink-0 font-medium whitespace-nowrap">
                      {step.proof}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>


      {/* ══ AN + NHIÊN MEANING ════════════════════════════════════ */}
      <section className={`py-20 ${sectionBg1}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge bg-[#1C2E1C]/5 text-[#3A5233] border border-[#7D9C7D]/30 mb-4">💡 Triết lý</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-800 italic mb-3">&ldquo;AN NHIÊN&rdquo; là gì?</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto text-center">Hai khía cạnh tạo nên giá trị cốt lõi của FCD</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* AN */}
            <div className={bentoCardLight}>
              <div className="h-1.5 bg-gradient-to-r from-[#C87E3A] to-[#E89D52]" />
              <div className="p-8">
                <div className="font-display text-6xl italic text-[#C87E3A]/20 mb-2 drop-shadow-sm -mt-2 absolute top-8 right-8 pointer-events-none">AN</div>
                <div className="text-amber-700 font-bold mb-4 text-sm tracking-wide uppercase">{anMeaning.subtitle}</div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{anMeaning.description}</p>
                <div className="space-y-3">
                  {anMeaning.pillars.map((p) => (
                    <div key={p.id} className="bg-amber-50/50 rounded-xl p-4 border border-amber-100/50 hover:bg-amber-50 transition-colors">
                      <div className="font-semibold text-slate-800 mb-1 text-sm">{p.title}</div>
                      <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* NHIÊN */}
            <div className={bentoCardLight}>
              <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-emerald-400" />
              <div className="p-8 relative">
                <div className="font-display text-6xl italic text-emerald-600/10 mb-2 drop-shadow-sm -mt-2 absolute top-8 right-8 pointer-events-none">NHIÊN</div>
                <div className="text-emerald-700 font-bold mb-4 text-sm tracking-wide uppercase">{nhienMeaning.subtitle}</div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">{nhienMeaning.description}</p>
                <div className="space-y-3">
                  {nhienMeaning.pillars.map((p) => (
                    <div key={p.id} className="bg-emerald-50/50 rounded-xl p-4 border border-emerald-100/50 hover:bg-emerald-50 transition-colors">
                      <div className="font-semibold text-slate-800 mb-1 text-sm">{p.title}</div>
                      <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ POSTER AN NHIÊN ════════════════════════════════════════ */}
      <section className={`py-10 ${sectionBg2}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="rounded-[28px] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 bg-white">
            <Image
              src="/images/nature/poster-an-nhien.png"
              alt="Poster chương trình An Nhiên cùng FCD"
              width={1200}
              height={680}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* ══ 5 KHÔNG ═══════════════════════════════════════════════ */}
      <section className={`relative py-20 overflow-hidden ${sectionBg3}`}>
        {/* Subtle Nature Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/images/nature/coffee-cherry.png" alt="" fill className="object-cover object-center opacity-[0.03] mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge bg-emerald-100 text-emerald-800 border border-emerald-200 mb-4 shadow-sm">🛡️ Cam kết</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-800 italic mb-3">Triết lý 5 Không</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto text-center">FCD kiên định không dùng bất kỳ chất phụ gia nào — trả lại giá trị thực sự cho hạt cà phê</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {fiveNoes.map((item, i) => (
              <div key={item.id} className={`${bentoCardLight} p-6 text-center animate-fade-in delay-${(i+1)*100} group bg-white/80 backdrop-blur-sm`}>
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">{item.icon}</div>
                <div className="text-emerald-700 font-bold text-xs mb-1.5 font-mono">#{item.number}</div>
                <div className="font-bold text-slate-800 text-sm mb-2">{item.title}</div>
                <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ CHỨNG NHẬN ════════════════════════════════════════════ */}
      <section className={`py-20 ${sectionBg4}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge bg-slate-200 text-slate-700 border border-slate-300 mb-4 shadow-sm">✅ Chứng nhận</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-800 italic mb-3">Bảo chứng chất lượng</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto text-center">Chất lượng không tự công bố — có thể kiểm chứng qua hệ thống chứng nhận uy tín</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {proofPoints.map((pp, i) => (
              <div key={pp.id} className={`${bentoCardLight} p-6 px-5 text-center animate-fade-in delay-${(i+1)*100}`}>
                <div className="font-display text-4xl italic text-[#C87E3A] mb-3 drop-shadow-sm font-semibold">{pp.label}</div>
                <div className="text-sm font-bold text-slate-800 mb-2.5">{pp.fullName}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{pp.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/chung-nhan" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:text-amber-600 bg-amber-50 px-5 py-2.5 rounded-full border border-amber-100 transition-colors">
              Xem toàn bộ 15 hồ sơ chứng nhận <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ BÀI TOÁN CHI PHÍ/LY ════════════════════════════════════ */}
      <section className={`py-20 ${sectionBg2}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-amber-100 text-amber-800 border border-amber-200 mb-4 shadow-sm">💰 Bài toán chi phí</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-800 italic mb-3">Chi phí mỗi ly là bao nhiêu?</h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto text-center">
              Chỉ từ 3.271đ/ly chuẩn đặc sản cao cấp (Tính theo giá niêm yết Tháng 2/2026)
            </p>
          </div>
          
          <div className="rounded-[28px] overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white">
            <table className="w-full text-sm text-left whitespace-nowrap sm:whitespace-normal">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="px-5 py-4 text-slate-500 font-bold text-xs uppercase tracking-wider">Mã / Dòng cà phê</th>
                  <th className="text-right px-5 py-4 text-slate-500 font-bold text-xs uppercase tracking-wider">Định mức 70 ly/kg</th>
                  <th className="text-right px-5 py-4 text-slate-500 font-bold text-xs uppercase tracking-wider">Định mức 140 ly/kg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {costPerCup.map((row, index) => (
                  <tr key={row.code} className={`group hover:bg-amber-50/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                    <td className="px-5 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-800 text-sm">{row.name}</span>
                        <span className="text-slate-400 text-xs font-mono mt-0.5">{row.code}</span>
                      </div>
                    </td>
                    <td className="text-right px-5 py-4 text-amber-700 font-semibold text-[15px] tabular-nums">
                      {row.costPer70.toLocaleString('vi-VN')}đ
                    </td>
                    <td className="text-right px-5 py-4 text-emerald-700 font-semibold text-[15px] tabular-nums">
                      {row.costPer140.toLocaleString('vi-VN')}đ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-center text-slate-400 mt-4 italic">
            * 70 ly/kg: ~14g/ly (Cốc lớn đậm vị). * 140 ly/kg: ~7g/ly (Cốc vừa). 
          </p>
        </div>
      </section>

      {/* ══ GÓI AN NHIÊN COMBO ════════════════════════════════════ */}
      <section id="combo" className={`py-20 ${sectionBg1}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge bg-amber-100 text-amber-800 border border-amber-200 mb-4 shadow-sm">☕ Gói đặc quyền</span>
            <h2 className="font-display text-4xl sm:text-5xl text-slate-800 italic mb-4">{anNhienCombo.title}</h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">{anNhienCombo.subtitle}</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left: Machine highlight image */}
            <div className={`${bentoCardLight} overflow-hidden group`}>
              <div className="relative h-80 bg-slate-100 flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/50 to-transparent"></div>
                <Image 
                  src="/images/nature/may-pha-an-nhien.jpg" 
                  alt="Máy pha espresso 20 bar — FCD An Nhiên" 
                  fill 
                  className="object-contain object-center mix-blend-darken drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 p-8" 
                  sizes="(max-width: 768px) 100vw, 50vw" 
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-red-600 text-white border-0 text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_4px_15px_rgba(220,38,38,0.3)] animate-pulse">
                    🔥 {anNhienCombo.machine.highlight} TẶNG MÁY 20 BAR
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white relative z-10 border-t border-slate-100">
                <h3 className="font-bold text-slate-800 text-lg mb-2">{anNhienCombo.machine.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{anNhienCombo.machine.description}</p>
              </div>
            </div>
            
            {/* Right: Benefits & Pricing */}
            <div className="space-y-4">
              <h3 className="font-bold mb-5 text-sm tracking-widest uppercase text-slate-400">Quyền lợi thành viên VIP</h3>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {anNhienCombo.vipBenefits.map((b, i) => (
                  <div key={b.benefit} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                     <div className="font-bold text-[#C87E3A] text-lg mb-1 drop-shadow-sm">{b.value}</div>
                     <div className="text-sm font-semibold text-slate-800 leading-snug">{b.benefit}</div>
                     <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">{b.note}</p>
                  </div>
                ))}
              </div>

              {/* Deposit highlight */}
              <div className={`${bentoCardLight} p-6 relative overflow-hidden bg-gradient-to-r from-amber-50/80 to-white`}>
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C87E3A]" />
                <div className="flex items-start gap-4">
                  <span className="text-amber-500 text-3xl shrink-0 drop-shadow-md">💎</span>
                  <div>
                    <div className="text-slate-800 font-bold text-lg mb-1.5">
                      Trả trước 50% — chỉ <span className="text-[#C87E3A] text-2xl drop-shadow-sm">2.612.000đ</span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Là đã được **nhận ngay máy pha cà phê áp suất 20 bar** tại nhà/văn phòng và bắt đầu hành trình An Nhiên. Phần còn lại thanh toán linh hoạt.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link href="/lien-he" className="flex items-center justify-center gap-2 w-full px-8 py-4 rounded-full bg-[#1A120A] hover:bg-[#C87E3A] text-white font-bold text-sm transition-colors shadow-lg hover:shadow-xl">
                  Đăng ký tư vấn An Nhiên ngay <ArrowRight size={16} />
                </Link>
                <p className="text-center text-xs text-slate-400 mt-3">* Gói giải pháp được thiết kế tối ưu nhất cho văn phòng, phòng khám, SME.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CHIẾN LƯỢC MỞ RỘNG & HỢP TÁC VDTBK ════════════════════ */}
      <section id="strategic-validation" className="py-24 bg-[#FAF9F5] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-16">
            <span className="badge bg-slate-800 text-amber-400 border border-slate-700 mb-4 px-4 py-1.5 shadow-sm uppercase tracking-widest text-[10px] font-bold">Chiến lược</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-slate-900 italic mb-6 leading-tight">Kiểm Chứng Thực Tế <br className="hidden sm:block" />— Bước Đệm Cho Quyết Định Chiến Lược</h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">Từ phản hồi tích cực của gần 300 khách hàng, FCD không dừng lại ở việc cung cấp sản phẩm mà quyết định chuẩn hóa Giải pháp An Nhiên. Đặc biệt, chúng tôi mở hướng phối hợp cùng VDTBK và Quý nhà trường để trao tận tay sinh viên một công cụ khởi nghiệp tinh gọn, minh bạch và thực chiến.</p>
          </header>

          {/* IMAGE MOU HIGHLIGHT */}
          <div className="w-full max-w-5xl mx-auto rounded-[32px] overflow-hidden shadow-xl border border-slate-200 bg-[#E6BF50] mb-16">
             <Image src="/images/nature/fcd-mou.jpg" alt="Lễ Ký Kết Thỏa Thuận Hợp Tác FCD x VDTBK" width={1280} height={720} className="w-full h-auto object-contain mix-blend-multiply" />
          </div>

          {/* PROOF METRICS BOARD */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 text-slate-800 bg-white shadow-sm border border-slate-100 rounded-3xl sm:rounded-full px-6 sm:px-10 py-6 sm:py-4 mb-16 max-w-4xl mx-auto">
             <div className="flex-1 text-center py-2 sm:py-0 px-4"><span className="text-sm font-semibold block text-slate-700">Gần 300 khách hàng trải nghiệm</span></div>
             <div className="flex-1 text-center py-2 sm:py-0 px-4"><span className="text-sm font-semibold block text-slate-700">Phản hồi thị trường tích cực</span></div>
             <div className="flex-1 text-center py-2 sm:py-0 px-4"><span className="text-sm font-semibold block text-slate-700">Chuẩn hóa Giải pháp An Nhiên</span></div>
             <div className="flex-1 text-center py-2 sm:py-0 px-4"><span className="text-sm font-semibold block text-amber-700">Đồng hành cùng VDTBK</span></div>
          </div>

          {/* 3 CARDS LAYOUT */}
          <article className="grid lg:grid-cols-3 gap-8 mb-16">
            
            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_25px_rgb(0,0,0,0.03)] flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <BarChart3 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Khởi Nguồn Bằng Sự Đo Lường</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">Khảo sát và phục vụ thực tế gần 300 khách hàng tiên phong. Ghi nhận phản hồi vô cùng tích cực về giá trị thực của ly cà phê chuẩn SCA kết hợp cùng giải pháp thiết bị.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Thực thi dựa trên dữ liệu thật, không phỏng đoán cảm tính.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Sản phẩm chứng minh được tính cạnh tranh trong bài toán vận hành.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Khẳng định mô hình tiêu dùng &quot;An Nhiên&quot; là giải pháp tất yếu.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_25px_rgb(0,0,0,0.03)] flex flex-col hover:shadow-lg transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                 <Rocket size={120} />
              </div>
              <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 relative z-10">
                <Layers size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">Chuẩn Hóa Giải Pháp Vận Hành</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1 relative z-10">FCD tiến hành đóng gói toàn diện mô hình thay vì chỉ dừng ở quy mô bán lẻ nguyên liệu. Từ sản phẩm hạt, kỹ thuật pha chiết cho tới thông điệp truyền thông.</p>
              <ul className="space-y-3 relative z-10">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-slate-800 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Loại bỏ rào cản tài chính bằng chính sách hỗ trợ thiết bị pha chế.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-slate-800 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Cơ cấu lại quy trình vận hành tinh gọn, dễ dàng nhân bản.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-slate-800 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Chuyển tiếp từ thử nghiệm sản phẩm sang hệ sinh thái giải pháp.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_4px_25px_rgb(0,0,0,0.03)] flex flex-col hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Trao Công Cụ — Ươm Mầm Khởi Nghiệp</h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed flex-1">Định hướng phối hợp chiến lược cùng VDTBK và Quý nhà trường nhằm chuyển giao bộ công cụ khởi nghiệp thực chiến cho sinh viên.</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Tiêu chuẩn minh bạch, dễ tiếp cận và bắt đầu ở quy mô nhỏ.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Cung cấp mô hình sales kit và hướng dẫn cốt lõi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700 leading-snug">Xây dựng tư duy kinh doanh ưu việt với nền tảng là sự &quot;Tử Tế&quot;.</span>
                </li>
              </ul>
            </div>

          </article>

          <footer className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-[#3A5233] font-medium leading-relaxed italic text-base sm:text-lg">
              &quot;Sự minh bạch của sản phẩm là nền tảng. Khi quy trình đủ sắc bén và mô hình đủ tinh gọn, FCD mong muốn điều đó trở thành đòn bẩy thiết yếu để sinh viên tự tin hiện thực hóa tư duy học thuật thành năng lực kinh doanh.&quot;
            </p>
            <Link href="/lien-he" className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-slate-900 hover:bg-[#C87E3A] text-white font-bold text-sm transition-all shadow-md group">
              Tìm hiểu mô hình phối hợp khởi nghiệp tinh gọn 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </footer>
        </div>
      </section>

      {/* ══ FAQ / RÀO CẢN ═════════════════════════════════════════ */}
      <section className={`py-20 border-y border-slate-100 ${sectionBg2}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="badge bg-slate-100 text-slate-600 border border-slate-200 mb-4 shadow-sm">❓ Xóa bỏ âu lo</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-800 italic mb-3">Gỡ bỏ mọi rào cản</h2>
          </div>
          
          <div className="space-y-4">
            {barriersFaq.map((item, i) => (
              <div key={item.id} className={`${bentoCardLight} p-5 sm:p-6 group hover:bg-slate-50`}>
                <div className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center shrink-0 group-hover:bg-[#C87E3A] group-hover:text-white transition-colors text-sm">
                    {i + 1}
                  </span>
                  <div>
                    <div className="font-bold text-slate-800 mb-2 text-sm sm:text-[15px] leading-snug">{item.barrier}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ PHÂN KHÚC THỊ TRƯỜNG ══════════════════════════════════ */}
      <section className={`py-20 border-t border-slate-200 ${sectionBg2}`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge bg-indigo-50 text-indigo-700 border border-indigo-200 mb-4 shadow-sm">📈 Chiến lược</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-800 italic mb-3">
              5 Phân Khúc Cà Phê Việt Nam
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              Thị trường rộng lớn nhưng phân hóa sâu sắc. FCD nhắm thẳng vào nhóm uống mộc đại trà và đặc sản vô hình (chiếm 26-33% thị phần).
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {marketSegments.map((seg) => (
              <div
                key={seg.id}
                className={`${bentoCardLight} p-6 flex flex-col ${
                  seg.isFCDTarget
                    ? 'border-amber-300 bg-amber-50/20 shadow-[0_8px_20px_rgb(245,174,92,0.12)]'
                    : 'bg-white'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl drop-shadow-sm">{seg.icon}</span>
                  <div>
                     <h3 className="font-bold text-slate-800 text-[15px]">{seg.name}</h3>
                     <span className="text-xs font-bold px-2 py-0.5 rounded-md mt-1 inline-block"
                       style={{ backgroundColor: seg.color + '15', color: seg.color }}>
                       Thị phần: {seg.share}
                     </span>
                  </div>
                </div>
                
                <p className="text-[13px] text-slate-600 leading-relaxed mb-4 flex-1">
                  {seg.weakness}
                </p>
                
                <div className="mt-auto">
                   <div className="text-[11px] text-slate-400 font-medium mb-1.5 flex justify-between">
                     <span>Quy mô</span>
                     <span>{seg.population}</span>
                   </div>
                   <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
                     <div 
                       className="h-full rounded-full transition-all" 
                       style={{ 
                         width: seg.share.split('–')[0].replace('%','').replace('~','').trim() + '%',
                         backgroundColor: seg.isFCDTarget ? '#C87E3A' : seg.color,
                       }} 
                     />
                   </div>
                   {seg.isFCDTarget && (
                     <div className="mt-3 text-center">
                        <span className="text-[10px] font-bold bg-[#C87E3A] text-white px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          🎯 Mục tiêu FCD
                        </span>
                     </div>
                   )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-8 rounded-[28px] bg-gradient-to-br from-amber-50 to-white border border-amber-200 shadow-md relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 border border-amber-100">
                <span className="text-3xl">🎯</span>
              </div>
              <div>
                <div className="font-display text-2xl italic mb-2 text-amber-800">Cơ hội vàng của FCD</div>
                <p className="text-slate-700 text-[15px] leading-relaxed">
                  Đem đến cho khách hàng một ly cà phê chuẩn <strong className="text-amber-800">Specialty (Đặc sản)</strong>,
                  nhưng với <strong className="text-red-600 bg-red-50 px-1 rounded">chi phí vốn chỉ ngang ngửa cà phê hòa tan</strong> nhờ chính sách tặng miễn phí máy pha 20 bar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ NHẬN DIỆN 5 LOẠI CÀ PHÊ ═══════════════════════════════ */}
      <section className={`py-20 border-t border-slate-200 ${sectionBg1}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="badge bg-emerald-100 text-emerald-800 border border-emerald-200 mb-4 shadow-sm">🔍 Hướng dẫn nhận biết</span>
            <h2 className="font-display text-3xl sm:text-4xl text-slate-800 italic mb-3">
              Kỹ Năng Phân Biệt Cà Phê
            </h2>
            <p className="text-slate-500 text-sm max-w-md mx-auto">
              Trang bị kiến thức để không bao giờ bị lừa bởi hương liệu và cà phê bẩn. Thử mù qua 3 giác quan: Mắt, Mũi, Miệng.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
            {coffeeTypes.map((type) => (
              <div
                key={type.id}
                className={`${bentoCardLight} p-5 flex flex-col transition-all ${
                  type.isFCD
                    ? 'border-amber-300/80 bg-amber-50/50 shadow-md scale-100 xl:scale-105 z-10'
                    : type.danger
                    ? 'border-red-200 bg-white'
                    : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4 border-b border-slate-100/60 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl drop-shadow-sm">{type.icon}</span>
                    <h3 className={`font-bold text-[15px] leading-tight ${type.isFCD ? 'text-amber-800' : type.danger ? 'text-red-700' : 'text-slate-800'}`}>
                      {type.name}
                    </h3>
                  </div>
                  {type.isFCD && (
                    <span className="text-[10px] bg-amber-500 text-white rounded-full px-2 py-0.5 font-bold shadow-sm shrink-0 uppercase tracking-wide">
                      FCD
                    </span>
                  )}
                  {type.danger && (
                    <span className="text-[10px] bg-red-100 text-red-700 rounded-full px-2 py-0.5 font-bold shrink-0 uppercase tracking-wide">
                      Độc
                    </span>
                  )}
                </div>

                <div className="space-y-4 flex-1">
                  <div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 ${type.isFCD ? 'text-amber-700' : type.danger ? 'text-red-600' : 'text-slate-400'}`}>
                      <span className="opacity-70">👁️</span> Nhìn
                    </div>
                    <p className={`text-xs leading-relaxed ${type.isFCD ? 'text-slate-700' : 'text-slate-600'}`}>
                      {type.visual}
                    </p>
                  </div>
                  
                  <div>
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 ${type.isFCD ? 'text-amber-700' : type.danger ? 'text-red-600' : 'text-slate-400'}`}>
                       <span className="opacity-70">👃</span> Ngửi
                    </div>
                    <p className={`text-xs leading-relaxed ${type.isFCD ? 'text-slate-700' : 'text-slate-600'}`}>
                      {type.smell}
                    </p>
                  </div>
                  
                  <div className="bg-slate-50/50 -mx-3 p-3 rounded-xl mt-2">
                    <div className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 ${type.isFCD ? 'text-amber-700' : type.danger ? 'text-red-600' : 'text-slate-500'}`}>
                       <span className="opacity-70">👅</span> Nếm
                    </div>
                    <p className={`text-[13px] leading-relaxed font-medium ${type.isFCD ? 'text-amber-900' : type.danger ? 'text-red-800' : 'text-slate-800'}`}>
                      {type.taste}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
