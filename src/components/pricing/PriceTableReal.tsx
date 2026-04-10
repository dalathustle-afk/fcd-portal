'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import type { PriceItem } from '@/data/prices'

const categoryLabels: Record<string, string> = {
  retail: 'Giá lẻ (ký)',
  'phin-giay': 'Phin giấy',
  combo: 'Gói An Nhiên 12kg',
  gift: 'Hộp quà',
  'dung-cu': 'Dụng cụ',
}

interface Props {
  items: PriceItem[]
}

export function PriceTableReal({ items }: Props) {
  const [activeTab, setActiveTab] = useState<string>('retail')
  const categories = Array.from(new Set(items.map((i) => i.category)))

  const filtered = items.filter((i) => i.category === activeTab)

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={clsx(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all',
              activeTab === cat
                ? 'bg-[#6B2D0A] text-white'
                : 'bg-white border border-[#D9CABC] text-[#6B5A4E] hover:border-[#C07A2B]'
            )}
          >
            {categoryLabels[cat] ?? cat}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[520px]">
            <thead className="bg-[#1C0F07] text-[#EDE4D8]">
              <tr>
                <th className="text-left px-5 py-3.5 font-semibold text-xs">Mã</th>
                <th className="text-left px-5 py-3.5 font-semibold text-xs">Sản phẩm</th>
                <th className="text-center px-5 py-3.5 font-semibold text-xs">Đơn vị</th>
                <th className="text-right px-5 py-3.5 font-semibold text-xs">Giá niêm yết</th>
                <th className="text-left px-5 py-3.5 font-semibold text-xs">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, i) => (
                <tr
                  key={`${item.productCode}-${i}`}
                  className={clsx(
                    'border-t border-[#F5EDE0] transition-colors hover:bg-[#FDF6ED]',
                    i % 2 === 0 ? '' : 'bg-[#F5EDE0]/30'
                  )}
                >
                  <td className="px-5 py-3.5">
                    <span className="font-mono text-xs text-[#6B5A4E]">{item.productCode}</span>
                  </td>
                  <td className="px-5 py-3.5 font-medium text-[#1A0F08]">{item.productName}</td>
                  <td className="px-5 py-3.5 text-center text-[#6B5A4E]">{item.unit}</td>
                  <td className="px-5 py-3.5 text-right">
                    {item.retailPrice > 0 ? (
                      <span className="font-bold text-[#6B2D0A]">
                        {item.retailPrice.toLocaleString('vi-VN')}đ
                      </span>
                    ) : (
                      <span className="text-xs text-[#6B5A4E] italic">Liên hệ</span>
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-xs text-[#6B5A4E]">
                    {item.comboNote ?? ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-5 py-4 bg-[#FDF6ED] border-t border-[#F5EDE0]">
          <p className="text-xs text-[#6B5A4E]">
            📋 Giá niêm yết khách hàng lẻ — hiệu lực từ 10/02/2026.
            Vui lòng liên hệ đại sứ FCD để xác nhận giá trước khi đặt hàng.
          </p>
        </div>
      </div>
    </>
  )
}
