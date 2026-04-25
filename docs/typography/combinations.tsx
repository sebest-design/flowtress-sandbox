import { Link } from "@tanstack/react-router";

const fonts = [
  { id: "sans", name: "Roboto (Sans)", class: "font-sans", role: "Primary (99%)" },
  { id: "condensed", name: "Roboto Condensed (UI)", class: "font-condensed", role: "Accent" },
  { id: "serif", name: "Lora (Serif)", class: "font-serif", role: "Accent" },
] as const;

export function FontCombinationsMatrix() {
  return (
    <div className="min-h-screen bg-slate-50 text-pulse-950 font-sans">
      <header className="bg-pulse-950 text-white px-8 pt-10 pb-0">
        <nav className="flex gap-6 mb-10 border-b border-pulse-800 pb-4">
          <Link 
            to="/typography" 
            className="text-[10px] font-bold uppercase tracking-widest text-pulse-400 hover:text-white transition-colors"
          >
            System Matrix
          </Link>
          <Link 
            to="/typography/combinations" 
            className="text-[10px] font-bold uppercase tracking-widest text-white underline underline-offset-8 decoration-copper-500 transition-colors"
          >
            Pairing Matrix
          </Link>
          <Link 
            to="/color-scheme" 
            className="ml-auto text-[10px] font-bold uppercase tracking-widest text-pulse-400 hover:text-white transition-colors"
          >
            Color Matrix →
          </Link>
        </nav>

        <div className="max-w-2xl pb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-copper-500 mb-4">Typography System</p>
          <h1 className="text-5xl font-black tracking-tighter leading-none text-white mb-6">
            Pairing Matrix
          </h1>
          <p className="text-base text-pulse-300 leading-relaxed max-w-[52ch]">
            Every heading and body font combination rendered side by side.
            Horizontal axis: heading font. Vertical axis: body font.
          </p>
        </div>

        {/* Axis labels inside header */}
        <div className="hidden lg:grid grid-cols-4 gap-8 pb-6 border-t border-pulse-800 pt-5">
          <div className="col-start-2 text-[9px] font-bold uppercase text-center text-pulse-600">H: {fonts[0].name} (99%)</div>
          <div className="text-[9px] font-bold uppercase text-center text-pulse-600">H: {fonts[1].name}</div>
          <div className="text-[9px] font-bold uppercase text-center text-pulse-600">H: {fonts[2].name}</div>
        </div>
      </header>

      <main className="px-8 py-16">
        <div className="space-y-16">
          {fonts.map((bFont) => (
            <div key={bFont.id} className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Row Label */}
              <div className="flex flex-col justify-center border-r border-slate-200 pr-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-300">Body Axis</span>
                <span className="text-sm font-bold text-pulse-900">{bFont.name}</span>
                <span className="text-[9px] text-slate-300 uppercase mt-1">{bFont.role}</span>
              </div>

              {/* Grid Cells */}
              {fonts.map((hFont) => (
                <div 
                  key={`${hFont.id}-${bFont.id}`} 
                  className={`bg-white border border-slate-200 p-8 rounded-lg flex flex-col gap-8 group transition-all hover:shadow-xl hover:shadow-pulse-900/5 ${
                    hFont.id === 'sans' && bFont.id === 'sans' ? 'ring-2 ring-copper-500/20 bg-white' : ''
                  }`}
                >
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-400">
                      H: {hFont.id} + B: {bFont.id}
                    </span>
                    {hFont.id === 'sans' && bFont.id === 'sans' && (
                      <span className="text-[8px] font-black uppercase text-copper-600 bg-copper-50 px-1 rounded">Primary View</span>
                    )}
                  </div>
                  <div className="space-y-4">
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-pulse-950 ${hFont.class}`}>
                      Design for clarity and action
                    </h2>
                    <p className={`text-sm font-normal leading-relaxed text-slate-500 ${bFont.class}`}>
                      Flowtress uses an alignment-first matchmaking approach, 
                      connecting entrepreneurs based on skills, commitment, and values.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
