import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const listRouter = createTRPCRouter({
    list: publicProcedure.query(async ({ ctx }) => {
        // Get all the entries in the listings table
        const listings = await ctx.db.listings.findMany();
        return listings ?? null;
    }),
});