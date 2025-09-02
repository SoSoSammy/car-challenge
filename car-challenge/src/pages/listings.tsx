import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Listings() {
    const carListings = api.list.list.useQuery();

    return (
        <>
        <Head>
            <title>Car Listings</title>
            <meta name="description" content="Car listings from Supabase" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Car Listings
            </h1>

            <p>{ carListings.data }</p>
        </main>
        </>
    )
}