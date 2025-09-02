import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const listRouter = createTRPCRouter({
    list: publicProcedure.query(async ({ ctx }) => {
        return 'car listing';
    }),
});