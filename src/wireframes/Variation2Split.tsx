import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' as const },
  }),
};

function Annotation({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`text-[10px] font-condensed uppercase tracking-widest text-copper-400/70 ${className}`}>
      {children}
    </span>
  );
}

function Placeholder({ label, aspect = 'aspect-video' }: { label: string; aspect?: string }) {
  return (
    <div
      className={`${aspect} w-full rounded-lg border-2 border-dashed border-white/15 bg-white/[0.03] flex items-center justify-center p-4`}
    >
      <span className="text-xs font-condensed text-slate-400 text-center leading-snug">{label}</span>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px flex-1 bg-gradient-to-r from-copper-500/40 to-transparent" />
      <span className="text-[11px] font-condensed uppercase tracking-[0.2em] text-copper-400">
        {children}
      </span>
      <div className="h-px flex-1 bg-gradient-to-l from-copper-500/40 to-transparent" />
    </div>
  );
}

/* ─── NAV ─── */
function NavBar({ compact = false }: { compact?: boolean }) {
  const links = ['Case Studies', 'Services', 'Process', 'About'];
  return (
    <div className="flex items-center justify-between border-b border-dashed border-white/10 pb-3 mb-4">
      <span className="font-black text-sm tracking-tighter text-copper-400">FLOWTRESS</span>
      {!compact && (
        <div className="flex gap-4">
          {links.map((l) => (
            <span key={l} className="text-[10px] font-condensed text-slate-400">
              {l}
            </span>
          ))}
        </div>
      )}
      <span className="text-[10px] font-condensed bg-copper-600/20 text-copper-300 px-2 py-0.5 rounded">
        Get in Touch
      </span>
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection({ stacked = false }: { stacked?: boolean }) {
  return (
    <div className={`${stacked ? 'flex flex-col gap-4' : 'grid grid-cols-2 gap-6'} mb-6`}>
      <div className="flex flex-col justify-center gap-3">
        <h2 className="font-serif font-bold text-sm leading-tight text-white/90">
          Your Brand Should Outperform Your Competitors — Not Blend In
        </h2>
        <p className="text-[10px] leading-relaxed text-slate-400">
          Flowtress builds digital experiences that make FinTech founders, healthcare executives, and
          AI leaders look as innovative as their products. 8 portfolio projects shipped. Zero
          templates used.
        </p>
        <div className="flex gap-2 mt-1">
          <span className="text-[9px] font-condensed bg-copper-600/30 text-copper-200 px-2 py-0.5 rounded">
            View Case Studies
          </span>
          <span className="text-[9px] font-condensed border border-white/15 text-slate-300 px-2 py-0.5 rounded">
            Contact Us Directly
          </span>
        </div>
      </div>
      <Placeholder label="Portfolio Preview — Bento Grid Showcase" />
    </div>
  );
}

/* ─── ZIG-ZAG FEATURES ─── */
function ZigZagSection({ stacked = false }: { stacked?: boolean }) {
  return (
    <div className="flex flex-col gap-6 mb-6">
      {/* Zig: Image – Text */}
      <div className={`${stacked ? 'flex flex-col gap-3' : 'grid grid-cols-2 gap-6'}`}>
        {stacked ? null : <Placeholder label="FinTech Dashboard Redesign — SecureVault" />}
        <div className="flex flex-col justify-center gap-2">
          <Annotation>{stacked ? '↕ stacked' : '← image | text →'}</Annotation>
          <h3 className="font-serif font-semibold text-xs text-white/90">
            150% Increase in User Trust Scores
          </h3>
          <p className="text-[10px] leading-relaxed text-slate-400">
            SecureVault's compliance dashboard looked like it was built in 2015. We rebuilt it with
            glassmorphism surfaces, real-time data visualizations, and 24/7 uptime monitoring —
            increasing user trust scores by 150% in 90 days.
          </p>
          <span className="text-[9px] font-condensed text-copper-400 underline underline-offset-2">
            Read the Case Study →
          </span>
        </div>
        {stacked ? <Placeholder label="FinTech Dashboard Redesign — SecureVault" /> : null}
      </div>

      {/* Zag: Text – Image */}
      <div className={`${stacked ? 'flex flex-col gap-3' : 'grid grid-cols-2 gap-6'}`}>
        <div className="flex flex-col justify-center gap-2">
          <Annotation>{stacked ? '↕ stacked' : '← text | image →'}</Annotation>
          <h3 className="font-serif font-semibold text-xs text-white/90">
            3x Conversion Lift for MedFlow AI
          </h3>
          <p className="text-[10px] leading-relaxed text-slate-400">
            MedFlow's AI diagnostic platform had groundbreaking technology hidden behind a
            forgettable interface. We delivered sub-800ms load times, HIPAA-compliant UX, and an
            outcome-first landing page that tripled their demo conversions.
          </p>
          <span className="text-[9px] font-condensed text-copper-400 underline underline-offset-2">
            See the Transformation →
          </span>
        </div>
        <Placeholder label="Healthcare Platform Redesign — MedFlow AI" />
      </div>
    </div>
  );
}

/* ─── FOOTER ─── */
function FooterSection({ compact = false }: { compact?: boolean }) {
  const columns: [string, string[]][] = [
    ['Product', ['Case Studies', 'Services', 'Our Process']],
    ['Resources', ['Brand Guidelines', 'Design System', 'Blog']],
    ['Company', ['About Flowtress', 'Careers', 'Contact']],
    ['Legal', ['Privacy Policy', 'Terms of Service', 'Cookie Policy']],
  ];
  return (
    <div className="border-t border-dashed border-white/10 pt-4 mt-2">
      <div className={`grid ${compact ? 'grid-cols-2' : 'grid-cols-4'} gap-4 mb-3`}>
        {columns.map(([title, links]) => (
          <div key={title}>
            <span className="text-[9px] font-condensed font-bold uppercase tracking-wider text-copper-400/80 block mb-1">
              {title}
            </span>
            {links.map((l) => (
              <span key={l} className="text-[9px] text-slate-500 block leading-relaxed">
                {l}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="text-[8px] text-slate-600 text-center pt-2 border-t border-white/5">
        © 2026 Flowtress
      </div>
    </div>
  );
}

/* ─── VIEWPORT FRAME ─── */
function ViewportFrame({
  width,
  label,
  breakpoint,
  index,
  children,
}: {
  width: string;
  label: string;
  breakpoint: string;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex flex-col items-center"
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
    >
      {/* Breakpoint header */}
      <div className="flex items-center gap-3 mb-4 w-full justify-center">
        <div className="h-px w-8 bg-copper-500/30" />
        <span className="text-xs font-condensed uppercase tracking-[0.25em] text-copper-400 font-bold">
          {label}
        </span>
        <span className="text-[10px] font-condensed text-slate-500">{breakpoint}</span>
        <div className="h-px w-8 bg-copper-500/30" />
      </div>

      {/* Device chrome */}
      <div
        className={`${width} glass rounded-xl p-5 relative`}
        style={{ maxWidth: '100%' }}
      >
        {/* Corner dimension labels */}
        <Annotation className="absolute top-2 right-3">{breakpoint}</Annotation>
        {children}
      </div>
    </motion.div>
  );
}

/* ─── MAIN EXPORT ─── */
export function Variation2Split() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 flex flex-col items-center gap-20 overflow-x-hidden">
      {/* Page title */}
      <motion.div
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-2xl font-black tracking-tighter font-condensed uppercase text-copper-400 mb-2">
          Variation 2 — Split Impact
        </h1>
        <p className="text-sm text-slate-500 font-condensed">
          Homepage wireframe &middot; Double-column hero &middot; Zig-zag features &middot;
          Multi-column footer
        </p>
      </motion.div>

      {/* ──────────── DESKTOP 1440px ──────────── */}
      <ViewportFrame
        width="w-[900px]"
        label="Desktop"
        breakpoint="1440px"
        index={0}
      >
        <SectionLabel>Header — Nav Bar</SectionLabel>
        <NavBar />

        <SectionLabel>Hero — 50 / 50 Split</SectionLabel>
        <Annotation>← Headline + CTAs | Visual Placeholder →</Annotation>
        <div className="mt-2" />
        <HeroSection />

        <SectionLabel>Features — Zig-Zag Rows</SectionLabel>
        <ZigZagSection />

        <SectionLabel>Footer — 4-Column Sitemap</SectionLabel>
        <FooterSection />
      </ViewportFrame>

      {/* ──────────── TABLET 768px ──────────── */}
      <ViewportFrame
        width="w-[520px]"
        label="Tablet"
        breakpoint="768px"
        index={1}
      >
        <SectionLabel>Header</SectionLabel>
        <NavBar />

        <SectionLabel>Hero — 50 / 50 (narrower)</SectionLabel>
        <Annotation>columns compress — text wraps earlier</Annotation>
        <div className="mt-2" />
        <HeroSection />

        <SectionLabel>Features — Zig-Zag (compressed)</SectionLabel>
        <ZigZagSection />

        <SectionLabel>Footer — 2×2 Grid</SectionLabel>
        <FooterSection compact />
      </ViewportFrame>

      {/* ──────────── MOBILE 375px ──────────── */}
      <ViewportFrame
        width="w-[320px]"
        label="Mobile"
        breakpoint="375px"
        index={2}
      >
        <SectionLabel>Header</SectionLabel>
        <NavBar compact />

        <SectionLabel>Hero — Stacked</SectionLabel>
        <Annotation>single column — CTA full-width</Annotation>
        <div className="mt-2" />
        <HeroSection stacked />

        <SectionLabel>Features — Stacked</SectionLabel>
        <ZigZagSection stacked />

        <SectionLabel>Footer — 2×2 Grid</SectionLabel>
        <FooterSection compact />
      </ViewportFrame>
    </section>
  );
}
