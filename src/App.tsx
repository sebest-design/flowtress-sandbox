import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet, Link } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TypographyPreview } from '../docs/typography/typography';
import { FontCombinationsMatrix } from '../docs/typography/combinations';
import { ColorSchemePreview } from '../docs/color-scheme/colors';
import { ColorCombinationsMatrix } from '../docs/color-scheme/combinations';

// Setup React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

// Root Route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="min-h-screen bg-slate-50 text-pulse-950 selection:bg-copper-100 selection:text-copper-900">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});

// Index Route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* Left: committed pulse-950 drench */}
      <div className="bg-pulse-950 flex flex-col justify-between px-12 py-16 min-h-[50vh] lg:min-h-screen">
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-copper-500">Design System</p>
        <div>
          <h1 className="text-7xl xl:text-8xl font-black tracking-tighter leading-none text-white mb-8">
            FLOW<br/>TRESS
          </h1>
          <p className="text-base text-pulse-300 leading-relaxed max-w-[38ch]">
            Institutional-grade security with the velocity of an agile startup.
            Built for high-performance data and regulated flows.
          </p>
        </div>
        <p className="text-[9px] font-mono text-pulse-700 uppercase tracking-widest">OKLCH Color System · Roboto + Lora</p>
      </div>
      {/* Right: light navigation surface */}
      <div className="flex flex-col justify-center px-12 py-16 bg-slate-50 gap-6">
        <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">Design matrices</p>
        <Link
          to="/color-scheme"
          className="group border border-slate-200 bg-white rounded-lg px-8 py-7 hover:border-pulse-900 transition-colors"
        >
          <p className="text-[9px] font-bold uppercase tracking-widest text-copper-600 mb-2">01</p>
          <p className="text-lg font-black text-pulse-950 tracking-tight group-hover:text-pulse-900 transition-colors">Color Matrix</p>
          <p className="text-xs text-slate-400 mt-2">OKLCH palettes, pairings, and WCAG compliance</p>
        </Link>
        <Link
          to="/typography"
          className="group border border-slate-200 bg-white rounded-lg px-8 py-7 hover:border-pulse-900 transition-colors"
        >
          <p className="text-[9px] font-bold uppercase tracking-widest text-copper-600 mb-2">02</p>
          <p className="text-lg font-black text-pulse-950 tracking-tight group-hover:text-pulse-900 transition-colors">Typography Matrix</p>
          <p className="text-xs text-slate-400 mt-2">Roboto, Roboto Condensed, Lora — responsive scale and weight</p>
        </Link>
      </div>
    </div>
  ),
});

// Typography Route
const typographyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/typography',
  component: TypographyPreview,
});

// Combinations Route
const combinationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/typography/combinations',
  component: FontCombinationsMatrix,
});

// Color Scheme Route
const colorSchemeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/color-scheme',
  component: ColorSchemePreview,
});

// Color Combinations Route
const colorCombinationsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/color-scheme/combinations',
  component: ColorCombinationsMatrix,
});

// Create Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute, 
  typographyRoute, 
  combinationsRoute,
  colorSchemeRoute,
  colorCombinationsRoute
]);

// Create Router
const router = createRouter({ routeTree });

// Register Router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
