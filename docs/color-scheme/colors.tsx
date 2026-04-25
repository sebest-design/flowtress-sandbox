import { Link } from "@tanstack/react-router";

const palettes = [
  {
    name: "Flow Accent (Copper)",
    description: "Primary Flow (10%) - Optimized for 4.5:1 Contrast at 600",
    anchor: "#EA580C",
    prefix: "copper",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
  },
  {
    name: "Fortress Anchor (Pulse Indigo)",
    description: "Primary Anchor (90%) - Institutional Weight",
    anchor: "#1E1B4B",
    prefix: "pulse",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
  },
  {
    name: "Corporate Neutrals (Slate)",
    description: "Modern Fintech-style background and structural scales",
    prefix: "slate",
    shades: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
  }
];

export function ColorSchemePreview() {
  return (
    <div className="min-h-screen bg-slate-50 text-pulse-950 font-sans">
      <header className="bg-pulse-950 text-white px-8 pt-10 pb-0">
        <nav className="flex gap-6 mb-10 border-b border-pulse-800 pb-4">
          <Link 
            to="/color-scheme" 
            className="text-[10px] font-bold uppercase tracking-widest text-white underline underline-offset-8 decoration-copper-500"
          >
            System Matrix
          </Link>
          <Link 
            to="/color-scheme/combinations" 
            className="text-[10px] font-bold uppercase tracking-widest text-pulse-400 hover:text-white transition-colors"
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
            System Matrix
          </h1>
          <p className="text-base text-pulse-300 leading-relaxed max-w-[52ch]">
            Three committed OKLCH palettes — Copper accent, Pulse Indigo anchor, Slate neutral.
            Every token is perceptually calibrated for institutional contrast.
          </p>
        </div>
      </header>

      <main className="px-8 py-16 space-y-24">
        {palettes.map((palette) => (
          <section key={palette.name}>
            <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-slate-200">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">{palette.name}</h2>
              <span className="text-[10px] text-slate-300 font-mono">{palette.description}</span>
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-11 gap-2">
              {palette.shades.map((shade) => (
                <div key={shade} className="space-y-3 group">
                  <div 
                    className={`h-40 rounded-lg shadow-sm transition-transform group-hover:scale-[1.02] bg-${palette.prefix}-${shade} ${shade === 600 || (palette.prefix === 'pulse' && shade === 900) ? 'ring-2 ring-pulse-900 ring-offset-2' : 'border border-slate-200/50'}`}
                  ></div>
                  <div className="flex flex-col gap-1">
                    <span className={`text-[10px] font-bold ${shade === 600 || (palette.prefix === 'pulse' && shade === 900) ? 'text-pulse-900' : 'text-slate-500'}`}>
                      {shade}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Contrast Checker */}
        <section>
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400">WCAG Accessibility</h2>
            <span className="text-[10px] text-slate-300 font-mono">Contrast ratios</span>
          </div>
          <div className="bg-pulse-950 rounded-lg border border-pulse-800 overflow-hidden">
            <div className="px-8 py-5 border-b border-pulse-800">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-pulse-400">Validated pairings</p>
            </div>
            <div className="px-8 py-7 border-b border-pulse-800 flex items-center justify-between gap-8">
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-tight">Copper 600 on White</p>
                <p className="text-[10px] text-pulse-400 mt-0.5 font-mono">copper-600 · white</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-black text-white tabular-nums">4.58:1</span>
                <span className="text-[9px] font-bold text-copper-500 uppercase tracking-widest">AA</span>
                <span className="text-copper-600 font-bold text-sm bg-white px-3 py-1 rounded">Sample text</span>
              </div>
            </div>
            <div className="px-8 py-7 border-b border-pulse-800 flex items-center justify-between gap-8">
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-tight">Copper 400 on Pulse 900</p>
                <p className="text-[10px] text-pulse-400 mt-0.5 font-mono">copper-400 · pulse-900</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-black text-white tabular-nums">5.12:1</span>
                <span className="text-[9px] font-bold text-copper-500 uppercase tracking-widest">AA</span>
                <span className="bg-pulse-900 text-copper-400 font-bold text-sm px-3 py-1 rounded border border-pulse-800">Sample text</span>
              </div>
            </div>
            <div className="px-8 py-7 flex items-center justify-between gap-8">
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-tight">Pulse 900 on White</p>
                <p className="text-[10px] text-pulse-400 mt-0.5 font-mono">pulse-900 · white</p>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-2xl font-black text-white tabular-nums">14.2:1</span>
                <span className="text-[9px] font-bold text-copper-500 uppercase tracking-widest">AAA</span>
                <span className="text-pulse-900 font-bold text-sm bg-white px-3 py-1 rounded">Sample text</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
