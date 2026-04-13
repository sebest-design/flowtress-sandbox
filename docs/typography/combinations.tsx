import { Link } from "@tanstack/react-router";

const fonts = [
  { id: "sans", name: "Roboto (Sans)", class: "font-sans", role: "Primary (99%)" },
  { id: "condensed", name: "Roboto Condensed (UI)", class: "font-condensed", role: "Accent" },
  { id: "serif", name: "Lora (Serif)", class: "font-serif", role: "Accent" },
] as const;

export function FontCombinationsMatrix() {
  return (
    <div className="min-h-screen bg-black text-white p-8" style={{ fontFamily: 'Arial, sans-serif' }}>
      <header className="mb-12 border-b border-zinc-800 pb-6">
        <nav className="flex gap-6 mb-8 border-b border-zinc-900 pb-4">
          <Link 
            to="/typography" 
            className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            activeProps={{ className: "text-white underline underline-offset-8 decoration-zinc-700" }}
          >
            System Matrix
          </Link>
          <Link 
            to="/typography/combinations" 
            className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            activeProps={{ className: "text-white underline underline-offset-8 decoration-zinc-700" }}
          >
            Pairing Matrix
          </Link>
        </nav>

        <h1 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Font Pairing Matrix</h1>
        <p className="text-[10px] text-zinc-600 uppercase tracking-tighter">Strictly Arial Metadata • Horizontal: Heading Axis (Roboto Primary) • Vertical: Body Axis</p>
      </header>

      <main>
        {/* Axis Labels for Large Screens */}
        <div className="hidden lg:grid grid-cols-4 gap-8 mb-8">
          <div className="col-start-2 text-[9px] font-bold uppercase text-center text-zinc-700">Heading: {fonts[0].name} (99%)</div>
          <div className="text-[9px] font-bold uppercase text-center text-zinc-700">Heading: {fonts[1].name}</div>
          <div className="text-[9px] font-bold uppercase text-center text-zinc-700">Heading: {fonts[2].name}</div>
        </div>

        <div className="space-y-16">
          {fonts.map((bFont) => (
            <div key={bFont.id} className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Row Label */}
              <div className="flex flex-col justify-center border-r border-zinc-900 pr-4">
                <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-600">Body Axis</span>
                <span className="text-sm font-bold text-white">{bFont.name}</span>
                <span className="text-[9px] text-zinc-800 uppercase mt-1">{bFont.role}</span>
              </div>

              {/* Grid Cells */}
              {fonts.map((hFont) => (
                <div 
                  key={`${hFont.id}-${bFont.id}`} 
                  className={`bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl flex flex-col gap-6 group transition-all hover:bg-white/10 ${
                    hFont.id === 'sans' && bFont.id === 'sans' ? 'ring-1 ring-zinc-700 bg-white/[0.07]' : ''
                  }`}
                >
                  <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                    <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-500">
                      H: {hFont.id} + B: {bFont.id}
                    </span>
                    {hFont.id === 'sans' && bFont.id === 'sans' && (
                      <span className="text-[8px] font-black uppercase text-zinc-400 bg-zinc-800 px-1 rounded">Primary View</span>
                    )}
                  </div>
                  <div className="space-y-4">
                    <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${hFont.class}`}>
                      Design for clarity and action
                    </h2>
                    <p className={`text-sm font-normal leading-relaxed text-zinc-400 ${bFont.class}`}>
                      Foundinity uses an alignment-first matchmaking approach, 
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
