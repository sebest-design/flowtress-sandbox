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
    <span className={`text-[10px] font-condensed uppercase tracking-widest text-copper-400 ${className}`}>
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute -top-3 left-4 px-2 bg-black z-10">
      <Annotation>{children}</Annotation>
    </div>
  );
}

function WireframeHeader({ compact = false }: { compact?: boolean }) {
  return (
    <div className="border border-dashed border-white/20 rounded-lg p-4 flex items-center justify-between relative">
      <SectionLabel>Header / Nav</SectionLabel>
      <div className="font-condensed font-bold text-copper-400 tracking-wider text-sm">
        FLOWTRESS
      </div>
      <div className="flex items-center gap-3">
        {!compact && (
          <div className="w-5 h-5 border border-dashed border-white/30 rounded flex items-center justify-center">
            <svg className="w-3 h-3 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </div>
        )}
        <div className="flex flex-col gap-[3px]">
          <div className="w-4 h-[2px] bg-white/40" />
          <div className="w-4 h-[2px] bg-white/40" />
          <div className="w-3 h-[2px] bg-white/40" />
        </div>
      </div>
    </div>
  );
}

function WireframeFooter({ compact = false }: { compact?: boolean }) {
  const links = ['Portfolio', 'Contact', 'Privacy', 'Terms'];
  const socials = ['Li', 'X', 'Dr'];

  return (
    <div className="border border-dashed border-white/20 rounded-lg p-4 relative">
      <SectionLabel>Footer</SectionLabel>
      <div className={`flex ${compact ? 'flex-col gap-3' : 'items-center justify-between'}`}>
        <div className={`flex ${compact ? 'flex-wrap' : ''} gap-3`}>
          {links.map((l) => (
            <span key={l} className="text-[10px] text-white/40 font-condensed">{l}</span>
          ))}
        </div>
        <div className="flex gap-2">
          {socials.map((s) => (
            <span
              key={s}
              className="w-5 h-5 border border-dashed border-white/20 rounded text-[8px] flex items-center justify-center text-white/30 font-condensed"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <p className="text-[9px] text-white/25 mt-2 font-condensed">
        © 2026 Flowtress. Disruptive branding for regulated industries.
      </p>
    </div>
  );
}

function ChartIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-6 h-6 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path d="M3 3v18h18" />
      <path d="m7 14 4-4 4 4 5-6" />
    </svg>
  );
}

function ImagePlaceholder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-12 border border-dashed border-white/15 rounded flex items-center justify-center ${className}`}>
      <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    </div>
  );
}

function GraphPlaceholder({ className = '' }: { className?: string }) {
  return (
    <div className={`w-full h-12 border border-dashed border-white/15 rounded flex items-center justify-center ${className}`}>
      <svg className="w-5 h-5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M3 3v18h18" />
        <rect x="7" y="10" width="3" height="8" rx="0.5" />
        <rect x="12" y="6" width="3" height="12" rx="0.5" />
        <rect x="17" y="13" width="3" height="5" rx="0.5" />
      </svg>
    </div>
  );
}

/* ─────────── DESKTOP (1440px) ─────────── */
function DesktopView() {
  return (
    <motion.section
      className="w-full max-w-[900px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Viewport Label */}
      <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-4">
        <Annotation>Desktop — 1440px</Annotation>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      <motion.div custom={1} variants={fadeUp} className="glass rounded-2xl p-6 space-y-4">
        {/* Header */}
        <WireframeHeader />

        {/* Hero — Asymmetric */}
        <div className="relative">
          <SectionLabel>Hero — Asymmetric 66% / 33%</SectionLabel>
          <div className="grid grid-cols-3 gap-4 border border-dashed border-copper-600/40 rounded-lg p-4 pt-5">
            {/* Main Hero 66% */}
            <motion.div
              custom={2}
              variants={fadeUp}
              className="col-span-2 border border-dashed border-white/20 rounded-lg p-6 flex flex-col justify-between min-h-[180px] relative"
            >
              <Annotation className="absolute top-2 right-3">66% width</Annotation>
              <div>
                <h1 className="font-serif text-xl font-bold leading-tight text-white/90 mb-2">
                  We Build Brands That Win in Regulated Markets
                </h1>
                <p className="text-xs text-white/40 leading-relaxed max-w-md">
                  Flowtress combines disruptive design with deep compliance understanding to create
                  digital experiences that FinTech, Healthcare, and AI companies trust with their reputation.
                </p>
              </div>
              <div className="mt-4">
                <span className="inline-block border border-copper-500/60 text-copper-400 text-[11px] font-condensed px-4 py-1.5 rounded-full">
                  Explore Our Portfolio
                </span>
              </div>
            </motion.div>

            {/* Feature Callout 33% */}
            <motion.div
              custom={3}
              variants={fadeUp}
              className="col-span-1 border border-dashed border-copper-600/30 bg-copper-950/20 rounded-lg p-5 flex flex-col justify-between relative"
            >
              <Annotation className="absolute top-2 right-3">33% width</Annotation>
              <div>
                <h3 className="font-condensed font-bold text-sm text-copper-300 mb-2">
                  Direct Access, No Gatekeepers
                </h3>
                <p className="text-[10px] text-white/35 leading-relaxed">
                  Skip the contact forms and chatbot queues. Reach our founding team directly via
                  SMS or email for a candid conversation about your brand.
                </p>
              </div>
              <span className="text-copper-400 text-[11px] font-condensed mt-3 inline-block">
                Get in Touch →
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bento Grid Row 1 */}
        <div className="relative">
          <SectionLabel>Bento Grid Row 1 — 33% / 33% / 33%</SectionLabel>
          <Annotation className="absolute -top-3 right-4 px-2 bg-black z-10">8pt spacing</Annotation>
          <div className="grid grid-cols-3 gap-4 border border-dashed border-copper-600/40 rounded-lg p-4 pt-5">
            <motion.div custom={4} variants={fadeUp} className="glass rounded-lg p-4 glass-hover">
              <ChartIcon className="text-copper-500/60 mb-2" />
              <h4 className="font-condensed font-bold text-sm text-white/80">150% Trust Score Lift</h4>
              <p className="text-[10px] text-white/35 mt-1">SecureVault FinTech Rebrand</p>
            </motion.div>

            <motion.div custom={5} variants={fadeUp} className="glass rounded-lg p-4 glass-hover">
              <ImagePlaceholder className="mb-2" />
              <h4 className="font-condensed font-bold text-sm text-white/80">3x Demo Conversions</h4>
              <p className="text-[10px] text-white/35 mt-1">MedFlow AI Healthcare Platform</p>
            </motion.div>

            <motion.div custom={6} variants={fadeUp} className="glass rounded-lg p-4 glass-hover">
              <GraphPlaceholder className="mb-2" />
              <h4 className="font-condensed font-bold text-sm text-white/80">Sub-800ms Load Times</h4>
              <p className="text-[10px] text-white/35 mt-1">Across All Portfolio Projects</p>
            </motion.div>
          </div>
        </div>

        {/* Bento Grid Row 2 */}
        <div className="relative">
          <SectionLabel>Bento Grid Row 2 — 66% / 33%</SectionLabel>
          <div className="grid grid-cols-3 gap-4 border border-dashed border-copper-600/40 rounded-lg p-4 pt-5">
            <motion.div
              custom={7}
              variants={fadeUp}
              className="col-span-2 glass rounded-lg p-5 relative glass-hover"
            >
              <Annotation className="absolute top-2 right-3">66% — Process</Annotation>
              <h4 className="font-condensed font-bold text-sm text-white/80 mb-2">The Flowtress Process</h4>
              <p className="text-[11px] text-white/40 leading-relaxed">
                Outcome → Problem → Solution. Every project starts with the result your stakeholders
                care about, then reverse-engineers the brand experience to deliver it.
              </p>
            </motion.div>

            <motion.div
              custom={8}
              variants={fadeUp}
              className="col-span-1 glass rounded-lg p-5 relative glass-hover"
            >
              <Annotation className="absolute top-2 right-3">33% — Stats</Annotation>
              <h4 className="font-condensed font-bold text-sm text-white/80 mb-3">By the Numbers</h4>
              <ul className="space-y-1.5">
                <li className="text-[11px] text-white/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500/60" />
                  8 projects shipped
                </li>
                <li className="text-[11px] text-white/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500/60" />
                  0 templates used
                </li>
                <li className="text-[11px] text-white/50 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-500/60" />
                  100% regulated-industry clients
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <WireframeFooter />
      </motion.div>
    </motion.section>
  );
}

/* ─────────── TABLET (768px) ─────────── */
function TabletView() {
  return (
    <motion.section
      className="w-full max-w-[576px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-4">
        <Annotation>Tablet — 768px</Annotation>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      <motion.div custom={1} variants={fadeUp} className="glass rounded-2xl p-5 space-y-3">
        <WireframeHeader />

        {/* Hero — stacked on tablet */}
        <div className="relative">
          <SectionLabel>Hero — Stacked (was 66/33)</SectionLabel>
          <div className="border border-dashed border-copper-600/40 rounded-lg p-4 pt-5 space-y-3">
            <motion.div custom={2} variants={fadeUp} className="border border-dashed border-white/20 rounded-lg p-5">
              <h1 className="font-serif text-lg font-bold leading-tight text-white/90 mb-2">
                We Build Brands That Win in Regulated Markets
              </h1>
              <p className="text-[10px] text-white/40 leading-relaxed">
                Flowtress combines disruptive design with deep compliance understanding to create
                digital experiences that FinTech, Healthcare, and AI companies trust with their reputation.
              </p>
              <span className="inline-block border border-copper-500/60 text-copper-400 text-[10px] font-condensed px-3 py-1 rounded-full mt-3">
                Explore Our Portfolio
              </span>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} className="border border-dashed border-copper-600/30 bg-copper-950/20 rounded-lg p-4">
              <h3 className="font-condensed font-bold text-xs text-copper-300 mb-1">
                Direct Access, No Gatekeepers
              </h3>
              <p className="text-[9px] text-white/35 leading-relaxed">
                Skip the contact forms and chatbot queues. Reach our founding team directly via
                SMS or email for a candid conversation about your brand.
              </p>
              <span className="text-copper-400 text-[10px] font-condensed mt-2 inline-block">
                Get in Touch →
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bento Grid Row 1 — 2 + 1 on tablet */}
        <div className="relative">
          <SectionLabel>Bento Row 1 — 50/50 + full</SectionLabel>
          <div className="border border-dashed border-copper-600/40 rounded-lg p-3 pt-5 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <motion.div custom={4} variants={fadeUp} className="glass rounded-lg p-3 glass-hover">
                <ChartIcon className="text-copper-500/60 mb-1 w-5 h-5" />
                <h4 className="font-condensed font-bold text-xs text-white/80">150% Trust Score Lift</h4>
                <p className="text-[9px] text-white/35 mt-0.5">SecureVault FinTech Rebrand</p>
              </motion.div>
              <motion.div custom={5} variants={fadeUp} className="glass rounded-lg p-3 glass-hover">
                <ImagePlaceholder className="mb-1 h-8" />
                <h4 className="font-condensed font-bold text-xs text-white/80">3x Demo Conversions</h4>
                <p className="text-[9px] text-white/35 mt-0.5">MedFlow AI Healthcare Platform</p>
              </motion.div>
            </div>
            <motion.div custom={6} variants={fadeUp} className="glass rounded-lg p-3 glass-hover">
              <div className="flex items-center gap-3">
                <GraphPlaceholder className="w-16 h-8 shrink-0" />
                <div>
                  <h4 className="font-condensed font-bold text-xs text-white/80">Sub-800ms Load Times</h4>
                  <p className="text-[9px] text-white/35 mt-0.5">Across All Portfolio Projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bento Grid Row 2 — stacked on tablet */}
        <div className="relative">
          <SectionLabel>Bento Row 2 — Stacked</SectionLabel>
          <div className="border border-dashed border-copper-600/40 rounded-lg p-3 pt-5 space-y-3">
            <motion.div custom={7} variants={fadeUp} className="glass rounded-lg p-4 glass-hover">
              <h4 className="font-condensed font-bold text-xs text-white/80 mb-1">The Flowtress Process</h4>
              <p className="text-[10px] text-white/40 leading-relaxed">
                Outcome → Problem → Solution. Every project starts with the result your stakeholders
                care about, then reverse-engineers the brand experience to deliver it.
              </p>
            </motion.div>
            <motion.div custom={8} variants={fadeUp} className="glass rounded-lg p-4 glass-hover">
              <h4 className="font-condensed font-bold text-xs text-white/80 mb-2">By the Numbers</h4>
              <div className="flex gap-4">
                {['8 projects shipped', '0 templates used', '100% regulated-industry clients'].map((stat) => (
                  <span key={stat} className="text-[10px] text-white/50 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-copper-500/60" />
                    {stat}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <WireframeFooter />
      </motion.div>
    </motion.section>
  );
}

/* ─────────── MOBILE (375px) ─────────── */
function MobileView() {
  return (
    <motion.section
      className="w-full max-w-[300px] mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-4">
        <Annotation>Mobile — 375px</Annotation>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      <motion.div custom={1} variants={fadeUp} className="glass rounded-2xl p-4 space-y-3">
        <WireframeHeader compact />

        {/* Hero — fully stacked mobile */}
        <div className="relative">
          <SectionLabel>Hero — Full Width Stack</SectionLabel>
          <div className="border border-dashed border-copper-600/40 rounded-lg p-3 pt-5 space-y-2">
            <motion.div custom={2} variants={fadeUp} className="border border-dashed border-white/20 rounded-lg p-4">
              <h1 className="font-serif text-base font-bold leading-tight text-white/90 mb-1.5">
                We Build Brands That Win in Regulated Markets
              </h1>
              <p className="text-[9px] text-white/40 leading-relaxed">
                Flowtress combines disruptive design with deep compliance understanding to create
                digital experiences that FinTech, Healthcare, and AI companies trust with their reputation.
              </p>
              <span className="inline-block border border-copper-500/60 text-copper-400 text-[9px] font-condensed px-3 py-1 rounded-full mt-2">
                Explore Our Portfolio
              </span>
            </motion.div>

            <motion.div custom={3} variants={fadeUp} className="border border-dashed border-copper-600/30 bg-copper-950/20 rounded-lg p-3">
              <h3 className="font-condensed font-bold text-[11px] text-copper-300 mb-1">
                Direct Access, No Gatekeepers
              </h3>
              <p className="text-[8px] text-white/35 leading-relaxed">
                Skip the contact forms and chatbot queues. Reach our founding team directly via
                SMS or email for a candid conversation about your brand.
              </p>
              <span className="text-copper-400 text-[9px] font-condensed mt-1.5 inline-block">
                Get in Touch →
              </span>
            </motion.div>
          </div>
        </div>

        {/* Bento Grid — single column on mobile */}
        <div className="relative">
          <SectionLabel>Bento Grid — Single Column</SectionLabel>
          <div className="border border-dashed border-copper-600/40 rounded-lg p-3 pt-5 space-y-2">
            <motion.div custom={4} variants={fadeUp} className="glass rounded-lg p-3 glass-hover">
              <div className="flex items-center gap-2 mb-1">
                <ChartIcon className="text-copper-500/60 w-4 h-4" />
                <h4 className="font-condensed font-bold text-[11px] text-white/80">150% Trust Score Lift</h4>
              </div>
              <p className="text-[8px] text-white/35">SecureVault FinTech Rebrand</p>
            </motion.div>

            <motion.div custom={5} variants={fadeUp} className="glass rounded-lg p-3 glass-hover">
              <ImagePlaceholder className="mb-1 h-8" />
              <h4 className="font-condensed font-bold text-[11px] text-white/80">3x Demo Conversions</h4>
              <p className="text-[8px] text-white/35 mt-0.5">MedFlow AI Healthcare Platform</p>
            </motion.div>

            <motion.div custom={6} variants={fadeUp} className="glass rounded-lg p-3 glass-hover">
              <GraphPlaceholder className="mb-1 h-8" />
              <h4 className="font-condensed font-bold text-[11px] text-white/80">Sub-800ms Load Times</h4>
              <p className="text-[8px] text-white/35 mt-0.5">Across All Portfolio Projects</p>
            </motion.div>

            <motion.div custom={7} variants={fadeUp} className="glass rounded-lg p-3 glass-hover">
              <h4 className="font-condensed font-bold text-[11px] text-white/80 mb-1">The Flowtress Process</h4>
              <p className="text-[8px] text-white/40 leading-relaxed">
                Outcome → Problem → Solution. Every project starts with the result your stakeholders
                care about, then reverse-engineers the brand experience to deliver it.
              </p>
            </motion.div>

            <motion.div custom={8} variants={fadeUp} className="glass rounded-lg p-3 glass-hover">
              <h4 className="font-condensed font-bold text-[11px] text-white/80 mb-1.5">By the Numbers</h4>
              <ul className="space-y-1">
                {['8 projects shipped', '0 templates used', '100% regulated-industry clients'].map((stat) => (
                  <li key={stat} className="text-[9px] text-white/50 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-copper-500/60" />
                    {stat}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <WireframeFooter compact />
      </motion.div>
    </motion.section>
  );
}

/* ─────────── MAIN COMPONENT ─────────── */
export function Variation3Editorial() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
      {/* Page Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-condensed text-xs uppercase tracking-[0.3em] text-copper-500 mb-2">
          Wireframe Variation 3
        </h2>
        <h1 className="font-serif text-3xl font-bold text-white/90 mb-1">
          Editorial Grid
        </h1>
        <p className="text-sm text-white/30 font-condensed max-w-md mx-auto">
          Asymmetric hero with bento grid content blocks — outcome-driven storytelling layout
        </p>
      </motion.div>

      {/* Three Breakpoints */}
      <div className="space-y-20">
        <DesktopView />
        <TabletView />
        <MobileView />
      </div>

      {/* Grid Spec Footer */}
      <motion.div
        className="mt-20 text-center space-y-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Annotation>Grid Spec: 8pt base · 12-col desktop · 8-col tablet · 4-col mobile</Annotation>
        <br />
        <Annotation>Glassmorphism: bg-white/5 · backdrop-blur-md · border-white/10</Annotation>
      </motion.div>
    </div>
  );
}
