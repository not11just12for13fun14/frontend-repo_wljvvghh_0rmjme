import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$19',
    period: '/mo',
    features: ['500 credits', 'Basic dialer', 'Email support'],
    cta: 'Choose Starter'
  },
  {
    name: 'Growth',
    price: '$49',
    period: '/mo',
    features: ['2,500 credits', 'Advanced dialer', 'Priority support'],
    featured: true,
    cta: 'Choose Growth'
  },
  {
    name: 'Team',
    price: '$99',
    period: '/mo',
    features: ['8,000 credits', 'Team analytics', 'SLA support'],
    cta: 'Choose Team'
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Simple subscription plans</h2>
          <p className="mt-3 text-slate-600">Pick a plan and scale as you grow. Upgrade anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border ${p.featured ? 'border-indigo-300 shadow-indigo-200' : 'border-slate-200'} bg-white p-6 shadow-sm relative`}>
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-indigo-600 text-white shadow">Most popular</span>
              )}
              <h3 className="font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <div className="text-4xl font-extrabold text-slate-900">{p.price}</div>
                <div className="text-slate-500 mb-1">{p.period}</div>
              </div>
              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-slate-600"><Check size={16} className="text-green-600" /> {f}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full h-11 rounded-xl ${p.featured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-slate-900 text-white hover:bg-slate-800'} transition`}>{p.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
