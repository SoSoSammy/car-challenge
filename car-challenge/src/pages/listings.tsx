import Head from "next/head";

import { api } from "~/utils/api";

export default function Listings() {
    const list = api.list.list.useQuery();

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

            <ul>
                {list.data?.map((listItem) => (
                    <li key={listItem.id}>
                        <div>ID: {listItem.id}</div>
                        <div>Make: {listItem.make}</div>
                        <div>Model: {listItem.model}</div>
                        <div>Year: {listItem.year}</div>
                        <div>Price: {listItem.price}</div>    
                    </li>
                ))}
            </ul>
        </main>
        </>
    )
}