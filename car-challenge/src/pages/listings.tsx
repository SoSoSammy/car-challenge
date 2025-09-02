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
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] m-2">
                Car Listings
            </h1>

            <table className="table-auto text-white border-collapse border">
                <thead>
                    <tr>
                        <th className="border p-2">ID</th>
                        <th className="border p-2">Make</th>
                        <th className="border p-2">Model</th>
                        <th className="border p-2">Year</th>
                        <th className="border p-2">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {list.data?.map((listItem) => (
                        <tr key={listItem.id}>
                            <td className="border p-2">{listItem.id}</td>
                            <td className="border p-2">{listItem.make}</td>
                            <td className="border p-2">{listItem.model}</td>
                            <td className="border p-2">{listItem.year}</td>
                            <td className="border p-2">${listItem.price.toLocaleString("en-US")}</td>   
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
        </>
    )
}