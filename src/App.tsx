import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { TypographyPreview } from '../docs/typography/typography';
import { FontCombinationsMatrix } from '../docs/typography/combinations';

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
      <div className="min-h-screen bg-black text-white selection:bg-primary/30">
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
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-6xl font-black mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        FLOWTRESS
      </h1>
      <p className="text-xl text-zinc-400 max-w-2xl mb-8">
        Disruptive branding & web design for regulated industries.
      </p>
      <div className="flex gap-4">
        <button className="glass glass-hover px-6 py-3 rounded-full font-bold">
          View Portfolio
        </button>
        <button className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-zinc-200 transition-colors">
          Contact Us
        </button>
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

// Create Route Tree
const routeTree = rootRoute.addChildren([indexRoute, typographyRoute, combinationsRoute]);

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
