import { taskRouter } from "./routers/task";
import { userRouter } from "./routers/user";
import { router } from "./trpc";

export const appRouter = router({
    user : userRouter,
    task : taskRouter,
});

export type AppRouter = typeof appRouter;