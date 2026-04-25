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
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Color System Matrix</p>
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
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 pb-2 border-b border-slate-100">
            WCAG Accessibility Compliance
          </h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-[9px] font-bold uppercase tracking-widest text-slate-300 pb-3 pr-8">Combination</th>
                <th className="text-left text-[9px] font-bold uppercase tracking-widest text-slate-300 pb-3 pr-8">Ratio</th>
                <th className="text-left text-[9px] font-bold uppercase tracking-widest text-slate-300 pb-3 pr-8">WCAG</th>
                <th className="text-left text-[9px] font-bold uppercase tracking-widest text-slate-300 pb-3">Sample</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-4 pr-8 text-[10px] font-mono text-slate-500">copper-600 on white</td>
                <td className="py-4 pr-8 font-bold text-pulse-900 tabular-nums">4.58:1</td>
                <td className="py-4 pr-8 text-[10px] font-bold text-copper-700 uppercase tracking-wider">AA</td>
                <td className="py-4"><span className="text-copper-600 font-bold text-sm">Sample text</span></td>
              </tr>
              <tr>
                <td className="py-4 pr-8 text-[10px] font-mono text-slate-500">copper-400 on pulse-900</td>
                <td className="py-4 pr-8 font-bold text-pulse-900 tabular-nums">5.12:1</td>
                <td className="py-4 pr-8 text-[10px] font-bold text-copper-700 uppercase tracking-wider">AA</td>
                <td className="py-4"><span className="bg-pulse-900 text-copper-400 font-bold text-sm px-2 py-0.5 rounded">Sample text</span></td>
              </tr>
              <tr>
                <td className="py-4 pr-8 text-[10px] font-mono text-slate-500">pulse-900 on white</td>
                <td className="py-4 pr-8 font-bold text-pulse-900 tabular-nums">14.2:1</td>
                <td className="py-4 pr-8 text-[10px] font-bold text-copper-700 uppercase tracking-wider">AAA</td>
                <td className="py-4"><span className="text-pulse-900 font-bold text-sm">Sample text</span></td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
