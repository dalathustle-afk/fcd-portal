'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import type { PriceItem } from '@/lib/types'

const categoryLabels: Record<string, string> = {
  retail: 'Khách lẻ',
  combo: 'Combo / Thùng',
  gift: 'Hộp quà',
  bulk: 'Số lượng lớn',
}

interface Props {
  items: PriceItem[]
}

export function PriceTable({ items }: Props) {
  const [activeTab, setActiveTab] = useState<string>('all')
  const categories = Array.from(new Set(items.map((i) => i.category)))

  const filtered = activeTab === 'all' ? items : items.filter((i) => i.category === activeTab)

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveTab('all')}
          className={clsx(
            'px-4 py-2 rounded-lg text-sm font-medium transition-all',
            activeTab === 'all'
              ? 'bg-[#6B2D0A] text-white'
              : 'bg-white border border-[#D9CABC] text-[#6B5A4E] hover:border-[#C07A2B]'
          )}
        >
          Tất cả
        </button>
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
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Desktop table */}
      <div className="bg-white rounded-2xl border border-[#D9CABC] overflow-hidden">
        <div className="table-responsive">
          <table className="w-full text-sm min-w-[600px]">
            <thead className="bg-[#1C0F07] text-[#EDE4D8]">
              <tr>
                <th className="text-left px-5 py-3.5 font-semibold text-xs">Mã SKU</th>
                <th className="text-left px-5 py-3.5 font-semibold text-xs">Sản phẩm</th>
                <th className="text-center px-5 py-3.5 font-semibold text-xs">Đơn vị</th>
                <th className="text-right px-5 py-3.5 font-semibold text-xs">Giá niêm yết</th>
                <th className="text-right px-5 py-3.5 font-semibold text-xs">Giá combo</th>
                <th className="text-left px-5 py-3.5 font-semibold text-xs">Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, i) => (
                <tr
                  key={item.productCode}
                  className={clsx('border-t border-[#F5EDE0] transition-colors hover:bg-[#FDF6ED]', i % 2 === 0 ? '' : 'bg-[#F5EDE0]/30')}
                >
                  <td className="px-5 py-3.5">
                    <span className="font-mono text-xs text-[#6B5A4E]">{item.productCode}</span>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="font-medium text-[#1A0F08]">{item.productName}</span>
                  </td>
                  <td className="px-5 py-3.5 text-center text-[#6B5A4E]">{item.unit}</td>
                  <td className="px-5 py-3.5 text-right">
                    <span className="font-bold text-[#6B2D0A]">
                      {item.retailPrice.toLocaleString('vi-VN')}đ
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    {item.comboPrice ? (
                      <div>
                        <span className="font-bold text-[#166534]">
                          {item.comboPrice.toLocaleString('vi-VN')}đ
                        </span>
                        <br />
                        <span className="badge badge-green text-[10px]">
                          -{Math.round((1 - item.comboPrice / item.retailPrice) * 100)}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-[#6B5A4E]">—</span>
                    )}
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-xs text-[#6B5A4E]">{item.comboNote || ''}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-5 py-4 bg-[#FDF6ED] border-t border-[#F5EDE0] flex flex-wrap gap-4 items-center justify-between">
          <p className="text-xs text-[#6B5A4E]">
            📋 <strong>Giá tham khảo</strong> — Liên hệ đại sứ FCD để xác nhận giá chính thức trước khi đặt hàng.
          </p>
          <div className="flex items-center gap-4 text-xs text-[#6B5A4E]">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#6B2D0A] inline-block" /> Giá lẻ
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-[#166534] inline-block" /> Giá combo
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
