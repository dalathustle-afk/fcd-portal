import type { FlavorProfile } from '@/lib/types'

interface Props {
  flavor: FlavorProfile
}

const metrics = [
  { key: 'bitter' as const, label: 'Đắng', color: '#7C2D12' },
  { key: 'sweet' as const, label: 'Ngọt', color: '#C07A2B' },
  { key: 'sour' as const, label: 'Chua', color: '#9D174D' },
  { key: 'body' as const, label: 'Thân vị', color: '#3D1A0A' },
  { key: 'aftertaste' as const, label: 'Hậu vị', color: '#166534' },
]

export function FlavorRadar({ flavor }: Props) {
  return (
    <div className="space-y-4">
      {metrics.map((m) => {
        const val = flavor[m.key]
        const pct = (val / 10) * 100
        return (
          <div key={m.key}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-sm font-medium text-[#1A0F08]">{m.label}</span>
              <span className="text-sm font-bold" style={{ color: m.color }}>
                {val}/10
              </span>
            </div>
            <div className="flavor-bar">
              <div
                className="flavor-bar-fill"
                style={{
                  width: `${pct}%`,
                  background: `linear-gradient(90deg, ${m.color}88, ${m.color})`,
                }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
