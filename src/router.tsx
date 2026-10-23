import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // Нужно, когда сайт лежит в подпапке (user.github.io/repo/).
    basepath: import.meta.env.BASE_URL.replace(/\/$/, "") || "/",
  });

  return router;
};
