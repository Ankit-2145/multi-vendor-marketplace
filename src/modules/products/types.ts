import { inferRouterOutputs } from "@trpc/server";

import { AppRouter } from "@/trpc/routers/_app";

export type ProductsGetManyOutput =
  inferRouterOutputs<AppRouter>["products"]["getMany"];
