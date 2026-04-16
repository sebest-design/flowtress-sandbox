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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-copper-500)_0%,_transparent_70%)] opacity-[0.03]"></div>
      <h1 className="text-8xl font-black mb-6 bg-gradient-to-br from-pulse-950 via-pulse-900 to-copper-600 bg-clip-text text-transparent tracking-tighter">
        FLOWTRESS
      </h1>
      <p className="text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed">
        Institutional-grade security with the velocity of an agile startup. <br/>
        Built for high-performance data and regulated flows.
      </p>
      <div className="flex gap-4 relative z-10">
        <Link to="/color-scheme" className="bg-pulse-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-pulse-800 transition-all shadow-xl shadow-pulse-900/20 active:scale-95">
          Color Matrix
        </Link>
        <Link to="/typography" className="bg-white border border-slate-200 text-pulse-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-sm active:scale-95">
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
