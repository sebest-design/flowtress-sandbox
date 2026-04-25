import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

function useViewportWidth(): number {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280,
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

const fonts = [
  { id: "sans", name: "Roboto (Sans)", class: "font-sans", role: "Primary (99%)" },
  { id: "condensed", name: "Roboto Condensed (UI)", class: "font-condensed", role: "Accent" },
  { id: "serif", name: "Lora (Display)", class: "font-serif", role: "Accent" },
] as const;

const headingTokens = [
  { name: "h1", mobile: "3xl", tablet: "4xl", desktop: "5xl", classes: "text-3xl md:text-4xl lg:text-5xl" },
  { name: "h2", mobile: "2xl", tablet: "3xl", desktop: "4xl", classes: "text-2xl md:text-3xl lg:text-4xl" },
  { name: "h3", mobile: "xl", tablet: "2xl", desktop: "3xl", classes: "text-xl md:text-2xl lg:text-3xl" },
  { name: "h4", mobile: "lg", tablet: "xl", desktop: "2xl", classes: "text-lg md:text-xl lg:text-2xl" },
  { name: "h5", mobile: "base", tablet: "lg", desktop: "xl", classes: "text-base md:text-lg lg:text-xl" },
  { name: "h6", mobile: "sm", tablet: "base", desktop: "lg", classes: "text-sm md:text-base lg:text-lg" },
] as const;

const sizeTokens = [
  { name: "xs", val: "12px" },
  { name: "sm", val: "14px" },
  { name: "base", val: "16px" },
  { name: "lg", val: "18px" },
  { name: "xl", val: "20px" },
  { name: "2xl", val: "24px" },
  { name: "3xl", val: "30px" },
  { name: "4xl", val: "36px" },
  { name: "5xl", val: "48px" },
  { name: "6xl", val: "60px" },
  { name: "7xl", val: "72px" },
  { name: "8xl", val: "96px" },
  { name: "9xl", val: "128px" },
] as const;

const weights = [
  { class: "font-normal", label: "Regular (400)" },
  { class: "font-medium", label: "Medium (500)" },
  { class: "font-semibold", label: "Semi-Bold (600)" },
  { class: "font-bold", label: "Bold (700)" },
  { class: "italic font-normal", label: "Italic (400i)" },
] as const;

export function TypographyPreview() {
  const [activeTab, setActiveTab] = useState<(typeof fonts)[number]>(fonts[0]);
  const width = useViewportWidth();

  return (
    <div className="min-h-screen bg-slate-50 text-pulse-950 p-8 font-sans">
      <header className="mb-12 border-b border-slate-200 pb-6">
        <nav className="flex gap-6 mb-8 border-b border-slate-100 pb-4">
          <Link 
            to="/typography" 
            className="text-[10px] font-bold uppercase tracking-widest text-pulse-900 underline underline-offset-8 decoration-copper-500 transition-colors"
          >
            System Matrix
          </Link>
          <Link 
            to="/typography/combinations" 
            className="text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors"
          >
            Pairing Matrix
          </Link>
          <Link 
            to="/color-scheme" 
            className="ml-auto text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-pulse-900 transition-colors"
          >
            Color Matrix →
          </Link>
        </nav>

        <div className="flex justify-between items-center mb-8">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Typography System</p>
          <div className="text-xs text-slate-500">Viewport: {width}px</div>
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-[9px] font-bold uppercase tracking-tight text-slate-300">Select Typeface</span>
          <nav className="flex gap-2">
            {fonts.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveTab(f)}
                aria-pressed={activeTab.id === f.id}
                className={`px-4 py-2 rounded text-sm font-bold transition-all relative group ${
                  activeTab.id === f.id
                    ? "bg-pulse-900 text-white shadow-lg shadow-pulse-900/20"
                    : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {f.name}
                <span className="absolute -top-2 -right-2 bg-slate-800 text-white text-[8px] px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  {f.role}
                </span>
                {f.id === 'sans' && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-copper-500 rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <div className="grid grid-cols-1 gap-24">
          {/* Responsive Headings Weight Matrix */}
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 pb-2 border-b border-slate-100 flex justify-between">
              <span>Responsive Headings Matrix — {activeTab.name}</span>
              <span className="text-slate-300">{activeTab.role}</span>
            </h2>
            <div className="space-y-16">
              {headingTokens.map((h) => (
                <div key={h.name} className="border-b border-slate-100 pb-12">
                  <div className="text-[10px] font-bold text-slate-300 mb-6 uppercase tracking-tighter">
                    {h.name.toUpperCase()} • Responsive: {h.mobile} → {h.tablet} → {h.desktop}
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                    {weights.map((w) => (
                      <div key={w.label} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                        <div className="min-w-[120px] text-[9px] text-slate-400 uppercase font-bold">
                          {w.label}
                        </div>
                        <div className={`${h.classes} ${w.class} ${activeTab.class} leading-tight text-pulse-950`}>
                          Headline Level {h.name.slice(1)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Static Size Matrix */}
          <section>
            <h2 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-8 pb-2 border-b border-slate-100 flex justify-between">
              <span>Static Size Matrix — {activeTab.name}</span>
              <span className="text-slate-300">{activeTab.role}</span>
            </h2>
            <div className="space-y-16">
              {sizeTokens.map((s) => (
                <div key={s.name} className="border-b border-slate-100 pb-12">
                  <div className="text-[10px] font-bold text-slate-300 mb-6 uppercase tracking-tighter">
                    Token: text-{s.name} ({s.val})
                  </div>
                  <div className="grid grid-cols-1 gap-8">
                    {weights.map((w) => (
                      <div key={w.label} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                        <div className="min-w-[120px] text-[9px] text-slate-400 uppercase font-bold">
                          {w.label}
                        </div>
                        <div className={`text-${s.name} ${w.class} ${activeTab.class} leading-tight text-pulse-950`}>
                          The quick brown fox jumps over the lazy dog
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
