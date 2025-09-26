import { initTRPC, TRPCError } from '@trpc/server';
import { auth } from "@/auth";
import { prisma } from "@/prisma";

export const createTRPCContext = async () => {
  const session = await auth();
  
  return {
    session,
    prisma,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create();

export const router = t.router;
export const procedure = t.procedure;

// Protected procedure - only for authenticated users
const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.session?.user) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next({
    ctx: { session: ctx.session }
  });
});

export const protectedProcedure = t.procedure.use(isAuthed);