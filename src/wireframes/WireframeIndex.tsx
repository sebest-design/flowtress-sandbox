import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const VARIATIONS = [
  {
    id: 1,
    path: '/wireframes/variation-1' as const,
    title: 'Central Focus',
    description:
      'Single-column centered hero with a bold CTA. Feature grid adapts from 3-col to stacked across breakpoints. Best for maximum clarity and a clean conversion funnel.',
    layout: 'Centered Hero + 3-Col Features + Simple Footer',
    tags: ['Centered', 'Single CTA', '3-Col Grid'],
  },
  {
    id: 2,
    path: '/wireframes/variation-2' as const,
    title: 'Split Impact',
    description:
      'Double-column hero with headline and visual side-by-side. Alternating zig-zag case study rows create visual rhythm. Multi-column footer with full sitemap.',
    layout: '50/50 Hero + Zig-Zag Features + 4-Col Footer',
    tags: ['Split Hero', 'Zig-Zag', 'Sitemap Footer'],
  },
  {
    id: 3,
    path: '/wireframes/variation-3' as const,
    title: 'Editorial Grid',
    description:
      'Asymmetric 66/33 hero with feature callout sidebar. Bento grid content blocks showcase outcome metrics, process, and stats. 8pt grid system throughout.',
    layout: 'Asymmetric Hero + Bento Grid + Stats Panel',
    tags: ['Bento Grid', 'Asymmetric', '8pt System'],
  },
] as const;

export function WireframeIndex() {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 flex flex-col items-center">
      <motion.div
        className="text-center max-w-2xl mb-16"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-[11px] font-condensed uppercase tracking-[0.3em] text-copper-500 block mb-3">
          Flowtress Homepage
        </span>
        <h1 className="font-serif text-4xl font-bold text-white/95 mb-4 leading-tight">
          Wireframe Variations
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed max-w-lg mx-auto">
          Three layout approaches for the Flowtress homepage — each designed for regulated-industry
          clients who need disruptive design without sacrificing trust. Every wireframe shows
          Desktop (1440px), Tablet (768px), and Mobile (375px) breakpoints.
        </p>
      </motion.div>

      <div className="grid gap-6 w-full max-w-4xl">
        {VARIATIONS.map((v) => (
          <motion.div
            key={v.id}
            custom={v.id}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Link
              to={v.path}
              className="glass glass-hover rounded-2xl p-8 flex flex-col gap-4 group cursor-pointer block transition-all duration-300 hover:border-copper-600/30"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-xl bg-copper-600/20 border border-copper-600/30 flex items-center justify-center font-condensed font-bold text-copper-400 text-lg">
                    {v.id}
                  </span>
                  <div>
                    <h2 className="font-condensed text-xl font-bold text-white/90 group-hover:text-copper-300 transition-colors">
                      {v.title}
                    </h2>
                    <span className="text-[10px] font-condensed uppercase tracking-widest text-copper-500/70">
                      {v.layout}
                    </span>
                  </div>
                </div>
                <span className="text-copper-400 opacity-0 group-hover:opacity-100 transition-opacity text-sm font-condensed">
                  View Wireframe →
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed">
                {v.description}
              </p>

              <div className="flex gap-2 mt-1">
                {v.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-condensed uppercase tracking-wider text-copper-400/60 border border-copper-600/20 rounded-full px-3 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          to="/"
          className="text-xs font-condensed text-slate-500 hover:text-copper-400 transition-colors"
        >
          ← Back to Flowtress Home
        </Link>
      </motion.div>
    </div>
  );
}
