import { Menu, PhoneCall } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 grid place-items-center text-white shadow-lg shadow-indigo-500/30">
            <PhoneCall size={18} />
          </div>
          <span className="font-semibold text-slate-800">ColdCall</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition">Features</a>
          <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
          <a href="#credits" className="hover:text-slate-900 transition">Buy Credits</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition">Sign in</button>
          <button className="inline-flex h-9 px-4 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Get Started</button>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700"><Menu size={18} /></button>
        </div>
      </div>
    </header>
  )
}
