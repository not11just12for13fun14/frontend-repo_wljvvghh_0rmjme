import { CreditCard, Coins, Gift } from 'lucide-react'

const packs = [
  { name: 'Mini Pack', credits: '1,000', price: '$10', icon: Gift },
  { name: 'Pro Pack', credits: '5,000', price: '$45', icon: CreditCard },
  { name: 'Agency Pack', credits: '25,000', price: '$200', icon: Coins }
]

export default function Credits() {
  return (
    <section id="credits" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Buy credits on demand</h2>
          <p className="mt-3 text-slate-600">Top up anytime. Credits power dials, voicemail drops, and data lookups.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packs.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center mb-4">
                <p.icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900">{p.name}</h3>
              <p className="mt-1 text-slate-600 text-sm">{p.credits} credits</p>
              <div className="mt-4 text-2xl font-bold text-slate-900">{p.price}</div>
              <button className="mt-6 w-full h-11 rounded-xl bg-white/70 backdrop-blur text-slate-900 ring-1 ring-slate-200 hover:bg-white transition">Buy now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
