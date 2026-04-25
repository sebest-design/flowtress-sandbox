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
    <div className="flex flex-col items-center justify-center min-h-screen px-8 py-24 text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-copper-600 mb-8">
        Design System Preview
      </p>
      <h1 className="text-8xl font-black mb-6 text-pulse-950 tracking-tighter leading-none">
        FLOWTRESS
      </h1>
      <p className="text-xl text-slate-500 max-w-[52ch] mb-16 leading-relaxed">
        Institutional-grade security with the velocity of an agile startup.
        Built for high-performance data and regulated flows.
      </p>
      <div className="flex gap-3">
        <Link to="/color-scheme" className="bg-pulse-900 text-white px-8 py-3.5 rounded font-bold text-sm hover:bg-pulse-800 transition-colors active:scale-[0.98]">
          Color Matrix
        </Link>
        <Link to="/typography" className="bg-transparent border border-slate-300 text-pulse-900 px-8 py-3.5 rounded font-bold text-sm hover:border-pulse-900 hover:bg-slate-50 transition-colors active:scale-[0.98]">
          Typography Matrix
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
