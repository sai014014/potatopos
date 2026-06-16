'use client'

import { Check } from 'lucide-react'

const screens = [
  {
    title: 'Dashboard',
    color: 'from-[#0f1f5c] to-[#1a3080]',
    rows: [
      { type: 'header', revenue: '£12,450', pct: '+8.2%' },
      { type: 'bars', data: [40, 65, 50, 80, 55, 90, 70] },
      { type: 'grid', stats: [{ l: 'Orders', v: '142' }, { l: 'Covers', v: '89' }, { l: 'Avg Check', v: '£87' }, { l: 'Waste', v: '2.1%' }] },
    ],
  },
  {
    title: 'HACCP Logs',
    color: 'from-[#0c1a4a] to-[#1a3080]',
    sensors: [
      { name: 'Fridge 1', temp: '3.2°C', ok: true },
      { name: 'Fridge 2', temp: '4.1°C', ok: true },
      { name: 'Freezer', temp: '-18°C', ok: true },
      { name: 'Hot Hold', temp: '68.4°C', ok: true },
      { name: 'Pre-shift', temp: '14/15', ok: false },
    ],
  },
  {
    title: 'Order Tickets',
    color: 'from-[#1a1040] to-[#0f1f5c]',
    tickets: [
      { table: 'T3', items: ['Ribeye', 'Salad'], time: '2m', status: 'new' },
      { table: 'T7', items: ['Pasta', 'Wine'], time: '8m', status: 'prep' },
      { table: 'T12', items: ['Burger', 'Fries'], time: '14m', status: 'ready' },
    ],
  },
  {
    title: 'Shift Manager',
    color: 'from-[#0f1f5c] to-[#0d2060]',
    shifts: [
      { name: 'AM Prep', prog: 100, color: 'bg-green-400' },
      { name: 'Service', prog: 72, color: 'bg-blue-400' },
      { name: 'PM Close', prog: 0, color: 'bg-white/20' },
    ],
    tasks: [
      { task: 'Pre-open allergen check', done: true },
      { task: 'Fridge temps logged', done: true },
      { task: 'Calibration reminder', done: false },
    ],
  },
  {
    title: 'Allergen Matrix',
    color: 'from-[#0d1a3d] to-[#0f1f5c]',
    matrix: [
      { name: 'Ribeye', g: false, d: true, n: false, e: false },
      { name: 'Pasta', g: true, d: true, n: false, e: true },
      { name: 'Salad', g: false, d: false, n: true, e: false },
      { name: 'Crème Brûlée', g: false, d: true, n: false, e: true },
      { name: 'Bread', g: true, d: false, n: false, e: false },
    ],
  },
]

function Screen({ screen, index }: { screen: (typeof screens)[0]; index: number }) {
  const statusColor = (s: string) =>
    s === 'ready' ? 'border-green-500/30 bg-green-500/20 text-green-300' :
    s === 'new' ? 'border-blue-500/30 bg-blue-500/20 text-blue-300' :
    'border-amber-500/20 bg-amber-500/20 text-amber-300'

  return (
    <div className={`reveal stagger-${index + 1}`}>
      <div className="rounded-[20px] overflow-hidden border border-[#0f1f5c]/10 device-shadow card-hover">
        <div className={`h-6 bg-gradient-to-r ${screen.color} flex items-center justify-center`}>
          <div className="w-10 h-1 bg-white/15 rounded-full" />
        </div>
        <div className={`bg-gradient-to-b ${screen.color} p-4`} style={{ height: '240px' }}>
          {'rows' in screen && (
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <p className="text-white/50 text-[9px] uppercase tracking-wider">Today</p>
                  <p className="text-white font-bold text-lg">{screen.rows[0].revenue}</p>
                </div>
                <span className="bg-green-500/20 text-green-300 text-[8px] px-2 py-0.5 rounded-full font-semibold">{screen.rows[0].pct}</span>
              </div>
              <div className="flex gap-1 mb-3">
                {screen.rows[1].data?.map((h: number, i: number) => (
                  <div key={i} className="flex-1 flex items-end">
                    <div className="w-full bg-blue-500/40 rounded-sm" style={{ height: `${h * 0.4}px` }} />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-1.5 mt-auto">
                {screen.rows[2].stats?.map((s: { l: string; v: string }, i: number) => (
                  <div key={i} className="bg-white/8 rounded-lg p-1.5">
                    <p className="text-white/40 text-[7px]">{s.l}</p>
                    <p className="text-white font-bold text-[11px]">{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {'sensors' in screen && (
            <div className="h-full flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-[10px]">✓</span>
                </div>
                <div>
                  <p className="text-white text-[10px] font-bold">HACCP Status</p>
                  <p className="text-green-400 text-[8px]">All checks passed</p>
                </div>
              </div>
              <div className="space-y-1.5 flex-1">
                {screen.sensors.map((s, i: number) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1">
                    <span className="text-white/70 text-[8px]">{s.name}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-white/80 text-[8px] font-semibold">{s.temp}</span>
                      <div className={`w-1.5 h-1.5 rounded-full ${s.ok ? 'bg-green-400' : 'bg-amber-400'}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {'tickets' in screen && (
            <div className="h-full flex flex-col gap-2">
              {screen.tickets.map((ticket, i: number) => (
                <div key={i} className={`flex items-start gap-2 rounded-xl p-2.5 border ${statusColor(ticket.status)}`}>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-[10px] font-bold ${statusColor(ticket.status)}`}>{ticket.table}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[9px] font-semibold truncate">{ticket.items.join(', ')}</p>
                    <p className="text-white/40 text-[8px]">{ticket.time} ago</p>
                  </div>
                  <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded uppercase ${statusColor(ticket.status)}`}>{ticket.status}</span>
                </div>
              ))}
            </div>
          )}

          {'shifts' in screen && (
            <div className="h-full flex flex-col">
              <p className="text-white text-[10px] font-bold mb-2">Today&apos;s Shifts</p>
              <div className="space-y-1.5 mb-3">
                {screen.shifts.map((s, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-white/60 text-[8px]">{s.name}</span>
                      <span className="text-white/60 text-[8px]">{s.prog}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className={`h-full ${s.color} rounded-full`} style={{ width: `${s.prog}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-auto space-y-1">
                {screen.tasks.map((t, i: number) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-sm flex items-center justify-center ${t.done ? 'bg-green-500' : 'border border-white/20'}`}>
                      {t.done && <Check size={7} className="text-white" />}
                    </div>
                    <span className={`text-[8px] ${t.done ? 'text-white/50 line-through' : 'text-white/70'}`}>{t.task}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {'matrix' in screen && (
            <div className="h-full flex flex-col">
              <p className="text-white text-[10px] font-bold mb-2">Allergen Matrix</p>
              <div className="grid grid-cols-5 gap-px mb-1">
                {['Item', 'G', 'D', 'N', 'E'].map((h, i) => (
                  <div key={i} className={`text-[6px] font-bold text-white/40 ${i === 0 ? '' : 'text-center'}`}>{h}</div>
                ))}
              </div>
              {screen.matrix.map((row, i: number) => (
                <div key={i} className="grid grid-cols-5 gap-px py-0.5 border-t border-white/5">
                  <span className="text-white/60 text-[7px] truncate">{row.name}</span>
                  {[row.g, row.d, row.n, row.e].map((v, j: number) => (
                    <div key={j} className="flex justify-center">
                      <div className={`w-3 h-3 rounded-sm ${v ? 'bg-amber-500/70' : 'bg-white/5'}`} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={`h-5 bg-gradient-to-r ${screen.color} flex items-center justify-center`}>
          <div className="w-14 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
      <p className="text-center text-xs font-semibold text-[#0f1f5c] mt-3">{screen.title}</p>
    </div>
  )
}

export default function AppScreensSection() {
  return (
    <section className="w-full py-24 bg-[#f7f9ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="inline-flex items-center gap-2 text-[#2563eb] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            <span className="w-8 h-px bg-[#2563eb]" />
            App Interface
            <span className="w-8 h-px bg-[#2563eb]" />
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0f1f5c] leading-tight mb-4">
            Designed for the kitchen floor
          </h2>
          <p className="text-[#5a6282] max-w-xl mx-auto font-light text-base leading-relaxed">
            Five purpose-built screens covering every operational need — from live sales to HACCP compliance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {screens.map((screen, index) => (
            <Screen key={index} screen={screen} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
