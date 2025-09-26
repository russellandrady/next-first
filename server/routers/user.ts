import { procedure, router } from "../trpc";
import { z } from "zod";

export const userRouter = router({
    getUsers: procedure.query(() => {
        return [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
    }),
    addUser: procedure.input(z.object({ name: z.string() })).mutation((opts) => {
        const { input } = opts;
        return { id: 3, name: input.name };
    }),
});