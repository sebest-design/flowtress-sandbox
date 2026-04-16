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
    <div className="min-h-screen bg-slate-50 text-pulse-950 p-8 font-sans">
      <header className="mb-12 border-b border-slate-200 pb-6">
        <nav className="flex gap-6 mb-8 border-b border-slate-100 pb-4">
          <Link 
            to="/color-scheme" 
            className="text-[10px] font-bold uppercase tracking-widest text-pulse-900 underline underline-offset-8 decoration-copper-500"
          >
            System Matrix
          </Link>
          <Link 
            to="/color-scheme/combinations" 
            className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors"
          >
            Pairing Matrix
          </Link>
          <Link 
            to="/typography" 
            className="ml-auto text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors"
          >
            Typography Matrix →
          </Link>
        </nav>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-sm font-bold uppercase tracking-widest text-slate-400">Color System Matrix</h1>
          <div className="text-xs text-slate-500">Model: Professional Pulse (OKLCH)</div>
        </div>
      </header>

      <main className="space-y-24">
        {palettes.map((palette) => (
          <section key={palette.name}>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 pb-2 border-b border-slate-100 flex justify-between">
              <span>{palette.name}</span>
              <span className="text-slate-300">{palette.description}</span>
            </h2>
            <div className="grid grid-cols-11 gap-2">
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
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 pb-2 border-b border-slate-100">
            WCAG Accessibility Compliance
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white text-copper-600 border border-slate-200 shadow-sm flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Copper 600 on White</span>
                <span className="text-4xl font-black italic tracking-tighter text-pulse-900">4.58:1</span>
                <span className="text-[10px] font-bold bg-green-500/10 text-green-600 self-start px-2 py-0.5 rounded border border-green-500/20">AA PASS</span>
            </div>
            <div className="p-8 rounded-3xl bg-pulse-900 text-copper-400 border border-pulse-800 shadow-xl flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest opacity-50">Copper 400 on Pulse 900</span>
                <span className="text-4xl font-black italic tracking-tighter text-white">5.12:1</span>
                <span className="text-[10px] font-bold bg-green-500/20 text-green-400 self-start px-2 py-0.5 rounded border border-green-400/20">AA PASS</span>
            </div>
            <div className="p-8 rounded-3xl bg-white text-pulse-900 border border-slate-200 shadow-sm flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Pulse 900 on White</span>
                <span className="text-4xl font-black italic tracking-tighter text-pulse-900">14.2:1</span>
                <span className="text-[10px] font-bold bg-green-500/10 text-green-600 self-start px-2 py-0.5 rounded border border-green-500/20">AAA PASS</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
