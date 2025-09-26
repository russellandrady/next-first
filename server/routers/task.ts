import { z } from "zod";
import { router, protectedProcedure } from "../trpc";

export const taskRouter = router({
  getAll: protectedProcedure.query(async ({ ctx }) => {
    return ctx.prisma.task.findMany({
      where: { userId: ctx.session.user?.id },
      orderBy: { createdAt: "desc" },
    });
  }),
  create: protectedProcedure
    .input(z.object({ title: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user?.id;
      if (!userId) {
        throw new Error("User ID is missing from session.");
      }
      return ctx.prisma.task.create({
        data: {
          title: input.title,
          userId: userId,
        },
      });
    }),
  toggle: protectedProcedure
    .input(z.object({ id: z.string(), completed: z.boolean() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.task.update({
        where: { id: input.id, userId: ctx.session.user?.id },
        data: { completed: input.completed },
      });
    }),
  delete: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user?.id;
      if (!userId) {
        throw new Error("User ID is missing from session.");
      }
      return ctx.prisma.task.delete({
        where: { id: input.id, userId },
      });
    }),
});