import { Link } from "@tanstack/react-router";

export function HeroSplitImpact() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-pulse-950">

      {/* Nav */}
      <nav className="px-4 sm:px-8 py-5 flex items-center justify-between border-b border-slate-200 bg-white">
        <span className="text-sm font-black tracking-tighter text-pulse-950">FLOWTRESS</span>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors">Features</a>
          <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors">Pricing</a>
          <a href="#" className="text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors">Docs</a>
          <button className="bg-pulse-900 text-white px-5 py-2 font-bold text-xs rounded hover:bg-pulse-800 transition-colors">
            Request Access
          </button>
        </div>
        <Link to="/" className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors md:hidden">← Back</Link>
      </nav>

      {/* Hero — 60/40 asymmetric split */}
      <section className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] min-h-[80vh]">
        {/* Text col */}
        <div className="bg-pulse-950 px-6 sm:px-10 md:px-16 py-16 sm:py-24 flex flex-col justify-between">
          <div />
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white mb-8 max-w-[16ch]">
              Security That Doesn't Slow the Flow
            </h1>
            <p className="text-base text-pulse-300 leading-relaxed max-w-[46ch] mb-10">
              Flowtress gives regulated industries the security posture of a defense contractor
              with the deployment speed of a SaaS startup.
              8 enterprise deployments live. Zero incidents.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-copper-500 text-white px-10 py-4 font-bold text-sm rounded hover:bg-copper-400 transition-colors active:scale-[0.98]">
                Request Access
              </button>
              <button className="bg-transparent border border-pulse-700 text-pulse-300 px-10 py-4 font-bold text-sm rounded hover:border-pulse-400 hover:text-white transition-colors">
                View Demo
              </button>
            </div>
          </div>
          <p className="text-[9px] font-mono text-pulse-700 uppercase tracking-widest">OKLCH System · AES-256 · SOC 2</p>
        </div>
        {/* Live system status panel */}
        <div className="bg-white border-t lg:border-t-0 border-l-0 lg:border-l border-slate-200 px-6 sm:px-8 py-10 sm:py-12 flex flex-col justify-center gap-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="size-1.5 rounded-full bg-copper-500 motion-safe:animate-pulse" aria-hidden="true" />
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Live System Status</span>
          </div>
          {[
            { label: "Active pipelines", value: "8", unit: "live" },
            { label: "Threat detections", value: "0", unit: "incidents" },
            { label: "Uptime", value: "100%", unit: "30 days" },
            { label: "Avg response", value: "184ms", unit: "p99" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{row.label}</span>
              <div className="text-right">
                <span className="text-lg font-black text-pulse-950 tracking-tight">{row.value}</span>
                <span className="text-[10px] text-slate-400 font-mono ml-2">{row.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
