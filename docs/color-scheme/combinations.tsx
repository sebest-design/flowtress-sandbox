import { Link } from "@tanstack/react-router";

export function ColorCombinationsMatrix() {
  return (
    <div className="min-h-screen bg-slate-50 text-pulse-950 font-sans">

      {/* Committed-color page header — Pulse 950 drench establishes hierarchy immediately */}
      <header className="bg-pulse-950 text-white px-4 sm:px-8 pt-10 pb-0">
        <nav className="flex gap-6 mb-10 border-b border-pulse-800 pb-4">
          <Link 
            to="/color-scheme" 
            className="text-[10px] font-bold uppercase tracking-widest text-pulse-400 hover:text-white transition-colors"
          >
            System Matrix
          </Link>
          <Link 
            to="/color-scheme/combinations" 
            className="text-[10px] font-bold uppercase tracking-widest text-white underline underline-offset-8 decoration-copper-500"
          >
            Pairing Matrix
          </Link>
          <Link 
            to="/typography" 
            className="ml-auto text-[10px] font-bold uppercase tracking-widest text-pulse-400 hover:text-white transition-colors"
          >
            Typography Matrix →
          </Link>
        </nav>

        <div className="max-w-2xl pb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-copper-500 mb-4">Color System</p>
          <h1 className="text-5xl font-black tracking-tighter leading-none text-white mb-6">
            Pairing Matrix
          </h1>
          <p className="text-base text-pulse-300 leading-relaxed max-w-[52ch]">
            Every surface in Flowtress is classified by scene before a palette is chosen.
            These pairings show the OKLCH system in context — not swatches, but intent.
          </p>
        </div>
      </header>

      <main className="px-4 sm:px-8 py-16 space-y-32">

        {/* Brand Combinations */}
        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-12 pb-3 border-b border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Core Brand Pairings</h2>
            <span className="text-[10px] text-slate-300 font-mono">WCAG AA validated</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Light — Corporate compliance surface */}
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <div className="px-8 pt-8 pb-6 border-b border-slate-100">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-3">Corporate Light</p>
                <h3 className="text-2xl font-black text-pulse-950 tracking-tight leading-tight">Compliance<br/>Dashboard</h3>
              </div>
              <div className="px-8 py-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Annual report</span>
                  <span className="text-xs font-bold text-copper-600 uppercase tracking-wider">In review</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">SOC 2 Type II</span>
                  <span className="text-xs font-bold text-pulse-900 uppercase tracking-wider">Certified</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">GDPR filing</span>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pending</span>
                </div>
              </div>
              <div className="px-8 py-6 border-t border-slate-100">
                <button aria-label="Primary action" className="w-full bg-pulse-900 text-white py-3 rounded font-bold text-sm hover:bg-pulse-800 transition-colors active:scale-[0.98]">
                  Request audit
                </button>
              </div>
              <div className="px-8 pb-6 flex gap-2">
                <span className="text-[9px] font-mono text-slate-300">pulse-950 · copper-600 · slate-*</span>
              </div>
            </div>

            {/* Dark — Security monitoring surface */}
            <div className="bg-pulse-950 rounded-lg border border-pulse-800 overflow-hidden">
              <div className="px-8 pt-8 pb-6 border-b border-pulse-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="size-1.5 rounded-full bg-copper-500 motion-safe:animate-pulse" aria-hidden="true" />
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pulse-400">Live monitoring</p>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight leading-tight">Threat<br/>Intelligence</h3>
              </div>
              <div className="px-8 py-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pulse-400 uppercase tracking-wider">Intrusion attempts</span>
                  <span className="text-xs font-bold text-copper-400 uppercase tracking-wider font-mono">0 detected</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pulse-400 uppercase tracking-wider">Encryption status</span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">AES-256 active</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-pulse-400 uppercase tracking-wider">Last scan</span>
                  <span className="text-xs font-bold text-pulse-300 uppercase tracking-wider font-mono">4s ago</span>
                </div>
              </div>
              <div className="px-8 py-6 border-t border-pulse-800">
                <button aria-label="Active security action" className="w-full bg-copper-500 text-pulse-950 py-3 rounded font-bold text-sm hover:bg-copper-400 transition-colors active:scale-[0.98]">
                  Run full scan
                </button>
              </div>
              <div className="px-8 pb-6 flex gap-2">
                <span className="text-[9px] font-mono text-pulse-700">pulse-950 · copper-500 · pulse-*</span>
              </div>
            </div>
          </div>
        </section>

        {/* Status Pairings — committed dark surface, not a neutral table */}
        <section>
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-12 pb-3 border-b border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">Functional Status Pairings</h2>
            <span className="text-[10px] text-slate-300 font-mono">Semantic color roles</span>
          </div>

          <div className="bg-pulse-950 rounded-lg border border-pulse-800 overflow-hidden">
            <div className="px-8 py-5 border-b border-pulse-800 flex items-center gap-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pulse-400">System state matrix</p>
            </div>

            {/* System Active */}
            <div className="px-8 py-7 border-b border-pulse-800 flex items-start justify-between gap-8">
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-2 rounded-full bg-copper-500 shrink-0 motion-safe:animate-pulse" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">System Active</p>
                  <p className="text-[10px] text-pulse-400 mt-0.5">All services operational. Accepting encrypted payloads.</p>
                </div>
              </div>
              <span className="text-[9px] font-mono text-copper-500 shrink-0 pt-0.5">copper-500</span>
            </div>

            {/* Encrypted State */}
            <div className="px-8 py-7 border-b border-pulse-800 flex items-start justify-between gap-8">
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-2 rounded-full bg-pulse-400 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-white uppercase tracking-tight">Encrypted State</p>
                  <p className="text-[10px] text-pulse-400 mt-0.5">Payload secured. Awaiting verification handshake.</p>
                </div>
              </div>
              <span className="text-[9px] font-mono text-pulse-400 shrink-0 pt-0.5">pulse-400</span>
            </div>

            {/* Standby */}
            <div className="px-8 py-7 flex items-start justify-between gap-8">
              <div className="flex items-center gap-3 min-w-0">
                <div className="size-2 rounded-full bg-slate-600 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-pulse-400 uppercase tracking-tight">Standby Mode</p>
                  <p className="text-[10px] text-pulse-700 mt-0.5">No active sessions. Monitoring passive channels.</p>
                </div>
              </div>
              <span className="text-[9px] font-mono text-pulse-600 shrink-0 pt-0.5">slate-600</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
