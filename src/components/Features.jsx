import { Headphones, Timer, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: 'Smart dialer',
    desc: 'Queue calls, auto-log outcomes, and focus on conversations.'
  },
  {
    icon: Timer,
    title: 'Voicemail drops',
    desc: 'One-click voicemail drops to save time between dials.'
  },
  {
    icon: BarChart3,
    title: 'Live analytics',
    desc: 'Real-time dashboards for connect rate and meeting conversions.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Everything you need to cold call at scale</h2>
          <p className="mt-3 text-slate-600">Tools that help you reach more prospects and book more meetings.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center mb-4">
                <f.icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
