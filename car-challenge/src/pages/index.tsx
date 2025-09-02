import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Car Listing Challenge</title>
        <meta name="description" content="My solution to the car listing challenge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <span className="text-[hsl(280,100%,70%)]">Car Listing</span> Challenge
          </h1>
          <div>
            <Link
              className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
              href="/listings"
            >
              <h3 className="text-2xl font-bold">Car Listings →</h3>
              <div className="text-lg">
                See the car listings from Supabase.
              </div>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
