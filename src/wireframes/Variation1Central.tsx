import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const FEATURES = [
  {
    title: "Outcome-Driven Portfolios",
    body: "Every case study leads with the win. We showcase 150% trust increases, 3x conversion lifts, and sub-second load times — before explaining how we got there.",
  },
  {
    title: "Regulated-Industry Expertise",
    body: "From HIPAA-compliant healthcare platforms to SEC-ready FinTech dashboards, we understand the compliance constraints that shape your digital presence.",
  },
  {
    title: "High-Performance Engineering",
    body: "React 19, sub-1s page loads, and pixel-perfect Framer Motion animations. Our builds signal technical excellence to your most discerning stakeholders.",
  },
] as const;

const FOOTER_LINKS = ["Portfolio", "Contact", "Privacy Policy", "Terms of Service"];

/* ------------------------------------------------------------------ */
/*  Sub-components shared across breakpoints                          */
/* ------------------------------------------------------------------ */

function WireframeNav({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center justify-between border-b border-dashed border-white/20 px-4 py-3">
      <span className="font-condensed text-sm font-bold tracking-widest text-copper-400 uppercase">
        Flowtress
      </span>
      {!compact && (
        <div className="flex gap-4 text-xs text-slate-400">
          {["Work", "Services", "About", "Contact"].map((l) => (
            <span key={l} className="hover:text-white transition-colors cursor-pointer">
              {l}
            </span>
          ))}
        </div>
      )}
      {compact && (
        <div className="flex flex-col gap-[3px] cursor-pointer">
          <span className="block h-[2px] w-4 bg-slate-400 rounded" />
          <span className="block h-[2px] w-4 bg-slate-400 rounded" />
          <span className="block h-[2px] w-3 bg-slate-400 rounded" />
        </div>
      )}
    </div>
  );
}

function WireframeHero({ size }: { size: "desktop" | "tablet" | "mobile" }) {
  const headlineClass =
    size === "desktop"
      ? "text-3xl"
      : size === "tablet"
        ? "text-2xl"
        : "text-xl";

  const subClass =
    size === "desktop"
      ? "text-sm max-w-[520px]"
      : size === "tablet"
        ? "text-xs max-w-[400px]"
        : "text-xs max-w-[280px]";

  return (
    <div className="flex flex-col items-center text-center border border-dashed border-white/15 rounded-lg p-6 relative">
      <span className="absolute -top-2.5 left-3 bg-black px-2 text-[10px] font-condensed text-copper-500 tracking-wider uppercase">
        Hero — centered
      </span>
      <h2
        className={`font-serif font-bold leading-tight text-white ${headlineClass}`}
      >
        Disruptive Design for Regulated Industries
      </h2>
      <p className={`mt-3 leading-relaxed text-slate-400 ${subClass}`}>
        We transform how FinTech, Healthcare, and AI companies present their
        value — replacing stale corporate aesthetics with outcome-driven digital
        experiences that convert.
      </p>
      <button className="mt-5 rounded-full border border-copper-500 bg-copper-600/10 px-5 py-2 text-xs font-condensed font-bold uppercase tracking-wider text-copper-400 hover:bg-copper-600/20 transition-colors">
        See Our Results
      </button>
    </div>
  );
}

function WireframeFeatures({
  cols,
}: {
  cols: "3-col grid" | "2-col grid" | "1-col stack";
}) {
  const gridClass =
    cols === "3-col grid"
      ? "grid-cols-3"
      : cols === "2-col grid"
        ? "grid-cols-2"
        : "grid-cols-1";

  return (
    <div className="border border-dashed border-white/15 rounded-lg p-4 relative">
      <span className="absolute -top-2.5 left-3 bg-black px-2 text-[10px] font-condensed text-copper-500 tracking-wider uppercase">
        Features — {cols}
      </span>
      <div className={`grid gap-3 ${gridClass}`}>
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="glass rounded-lg p-4 flex flex-col gap-2"
          >
            <h3 className="font-condensed text-sm font-bold text-copper-300">
              {f.title}
            </h3>
            <p className="text-[11px] leading-relaxed text-slate-400">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WireframeFooter() {
  return (
    <div className="border-t border-dashed border-white/20 pt-3 pb-2 flex flex-col items-center gap-2">
      <div className="flex flex-wrap justify-center gap-4 text-[10px] text-slate-500">
        {FOOTER_LINKS.map((l) => (
          <span key={l} className="hover:text-slate-300 transition-colors cursor-pointer">
            {l}
          </span>
        ))}
      </div>
      <span className="text-[9px] text-slate-600">
        © 2026 Flowtress. All rights reserved.
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Breakpoint wrapper                                                */
/* ------------------------------------------------------------------ */

function BreakpointFrame({
  label,
  width,
  children,
  index,
}: {
  label: string;
  width: string;
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.section
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="flex flex-col items-center"
    >
      {/* Breakpoint label */}
      <div className="mb-3 flex items-center gap-3">
        <span className="h-px w-8 bg-copper-700" />
        <span className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-copper-500">
          {label}
        </span>
        <span className="rounded-full border border-copper-800 bg-copper-950/40 px-2.5 py-0.5 text-[10px] tabular-nums text-copper-400">
          {width}
        </span>
        <span className="h-px w-8 bg-copper-700" />
      </div>

      {/* Device frame */}
      <div
        className="w-full border border-white/10 rounded-xl bg-black/80 overflow-hidden shadow-[0_0_60px_-15px_rgba(var(--color-copper-600),0.08)]"
        style={{ maxWidth: width }}
      >
        {children}
      </div>
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main export                                                       */
/* ------------------------------------------------------------------ */

export function Variation1Central() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center gap-20">
      {/* Page title */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="font-condensed text-lg font-bold uppercase tracking-[0.25em] text-copper-400">
          Variation 1 — Central Focus
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-md mx-auto">
          Single-column hero with centered CTA. Feature grid adapts from 3-col
          → 2-col → stacked across breakpoints.
        </p>
      </motion.div>

      {/* ---- Desktop 1440px ---- */}
      <BreakpointFrame label="Desktop" width="1440px" index={0}>
        <div className="flex flex-col gap-6 p-8">
          <WireframeNav />
          <WireframeHero size="desktop" />
          <WireframeFeatures cols="3-col grid" />
          <WireframeFooter />
        </div>
      </BreakpointFrame>

      {/* ---- Tablet 768px ---- */}
      <BreakpointFrame label="Tablet" width="768px" index={1}>
        <div className="flex flex-col gap-5 p-6">
          <WireframeNav />
          <WireframeHero size="tablet" />
          <WireframeFeatures cols="2-col grid" />
          <WireframeFooter />
        </div>
      </BreakpointFrame>

      {/* ---- Mobile 375px ---- */}
      <BreakpointFrame label="Mobile" width="375px" index={2}>
        <div className="flex flex-col gap-4 p-4">
          <WireframeNav compact />
          <WireframeHero size="mobile" />
          <WireframeFeatures cols="1-col stack" />
          <WireframeFooter />
        </div>
      </BreakpointFrame>
    </div>
  );
}
