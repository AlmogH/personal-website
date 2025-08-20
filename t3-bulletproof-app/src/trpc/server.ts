import "server-only";

import { headers } from "next/headers";

import { createTRPCContext } from "~/server/api/trpc";
import { appRouter } from "~/server/api/root";
import { createCallerFactory } from "~/server/api/trpc";

const createCaller = createCallerFactory(appRouter);

export const api = createCaller(async () => {
  return createTRPCContext({
    headers: await headers(),
  });
});