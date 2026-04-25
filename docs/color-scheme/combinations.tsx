import { Link } from "@tanstack/react-router";

export function ColorCombinationsMatrix() {
  return (
    <div className="min-h-screen bg-slate-50 text-pulse-950 p-8 font-sans">
      <header className="mb-12 border-b border-slate-200 pb-6">
        <nav className="flex gap-6 mb-8 border-b border-slate-100 pb-4">
          <Link 
            to="/color-scheme" 
            className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors"
          >
            System Matrix
          </Link>
          <Link 
            to="/color-scheme/combinations" 
            className="text-[10px] font-bold uppercase tracking-widest text-pulse-900 underline underline-offset-8 decoration-copper-500"
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
          <h1 className="text-sm font-bold uppercase tracking-widest text-slate-400">Color Pairing Matrix</h1>
          <div className="text-xs text-slate-500">Model: Professional Pulse (OKLCH)</div>
        </div>
      </header>

      <main className="space-y-24">
        {/* Brand Combinations */}
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 pb-2 border-b border-slate-200 flex justify-between">
            <span>Core Brand Pairings</span>
            <span className="text-slate-300">Accessibility Validated</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Light Theme Mockup */}
            <div className="bg-white rounded-lg p-8 text-pulse-950 border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-12">
                    <div className="space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Corporate Light UI</div>
                        <div className="text-2xl font-black italic text-pulse-900">Professional Pulse</div>
                    </div>
                    <div className="bg-copper-50 text-copper-700 text-[10px] font-bold px-2 py-1 rounded border border-copper-100">AA PASS</div>
                </div>
                
                <div className="space-y-6 mb-12">
                    <div className="h-4 bg-slate-100 rounded-full w-3/4"></div>
                    <div className="h-4 bg-slate-100 rounded-full w-1/2"></div>
                    <button className="bg-copper-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-copper-600/20 active:scale-95 transition-transform">Primary Action</button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-100">
                    <div className="text-center">
                        <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Accent</div>
                        <div className="h-10 bg-copper-600 rounded-lg"></div>
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Anchor</div>
                        <div className="h-10 bg-pulse-900 rounded-lg"></div>
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Neutral</div>
                        <div className="h-10 bg-slate-100 rounded-lg"></div>
                    </div>
                </div>
            </div>

            {/* Dark Theme Mockup */}
            <div className="bg-pulse-950 rounded-lg p-8 text-white border border-pulse-900">
                <div className="flex justify-between items-start mb-12">
                    <div className="space-y-1">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-pulse-400">Security Dark UI</div>
                        <div className="text-2xl font-black italic">Fortress Stealth</div>
                    </div>
                    <div className="bg-copper-900/50 text-copper-400 text-[10px] font-bold px-2 py-1 rounded border border-copper-800">AA PASS</div>
                </div>
                
                <div className="space-y-6 mb-12">
                    <div className="h-4 bg-pulse-900 rounded-full w-2/3"></div>
                    <div className="h-4 bg-pulse-900 rounded-full w-1/3"></div>
                    <button className="bg-copper-500 text-pulse-950 px-8 py-3 rounded-xl font-bold shadow-lg shadow-copper-500/10 active:scale-95 transition-transform">Active Security</button>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 border-t border-pulse-900">
                    <div className="text-center">
                        <div className="text-[10px] font-bold text-pulse-400 mb-2 uppercase">Accent</div>
                        <div className="h-10 bg-copper-500 rounded-lg"></div>
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-bold text-pulse-400 mb-2 uppercase">Base</div>
                        <div className="h-10 bg-pulse-950 rounded-lg border border-pulse-800"></div>
                    </div>
                    <div className="text-center">
                        <div className="text-[10px] font-bold text-pulse-400 mb-2 uppercase">Stroke</div>
                        <div className="h-10 bg-pulse-800 rounded-lg"></div>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Status Pairings */}
        <section>
          <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 pb-2 border-b border-slate-200">
            Functional Status Pairing Matrix
          </h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-left text-[9px] font-bold uppercase tracking-widest text-slate-300 pb-3 pr-8">State</th>
                <th className="text-left text-[9px] font-bold uppercase tracking-widest text-slate-300 pb-3 pr-8">Indicator</th>
                <th className="text-left text-[9px] font-bold uppercase tracking-widest text-slate-300 pb-3">Token Pair</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-4 pr-8 font-bold text-pulse-900 text-xs uppercase tracking-tighter">System Active</td>
                <td className="py-4 pr-8"><div className="size-2 rounded-full bg-copper-500 animate-pulse inline-block" /></td>
                <td className="py-4 text-[10px] font-mono text-slate-400">copper-500 + pulse-950</td>
              </tr>
              <tr>
                <td className="py-4 pr-8 font-bold text-pulse-900 text-xs uppercase tracking-tighter">Encrypted State</td>
                <td className="py-4 pr-8"><div className="size-2 rounded-full bg-pulse-400 inline-block" /></td>
                <td className="py-4 text-[10px] font-mono text-slate-400">pulse-400 + pulse-950</td>
              </tr>
              <tr>
                <td className="py-4 pr-8 font-bold text-pulse-900 text-xs uppercase tracking-tighter">Standby Mode</td>
                <td className="py-4 pr-8"><div className="size-2 rounded-full bg-slate-400 inline-block" /></td>
                <td className="py-4 text-[10px] font-mono text-slate-400">slate-500 + pulse-950</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}
