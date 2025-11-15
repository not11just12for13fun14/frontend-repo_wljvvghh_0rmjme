import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-white/60 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm">AI-powered cold calling</span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Book more meetings with less dialing
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Launch targeted call campaigns, track outcomes, and scale outreach with credits. Simple, fast, and built for modern sales teams.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#pricing" className="inline-flex h-11 items-center rounded-xl bg-indigo-600 px-6 text-white hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20">See plans</a>
            <a href="#credits" className="inline-flex h-11 items-center rounded-xl bg-white/70 backdrop-blur px-6 text-slate-900 ring-1 ring-slate-200 hover:bg-white transition">Buy credits</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white"></div>
    </section>
  )
}
