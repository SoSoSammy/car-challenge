# Car Challenge

<br />
<p align="center">
  <a href="[LINK_TO_LIVE_DEMO]">
    <img width="1913" height="862" alt="image" src="https://github.com/user-attachments/assets/44fdc15f-42f7-47b7-88e6-e0927179c412" />

  </a>

  <h3 align="center">Car Challenge</h3>

  <p align="center">
    A T3-stack web application which displays car listings from a Supabase database.
    <br />
    <a href="[LINK_TO_LIVE_DEMO]"><strong>View Demo »</strong></a>
  </p>
</p>

## About the Project

This project takes data from a Supabase PostgreSQL database and renders it in a webpage.

**Key Features:**
* Loading message when data is being fetched
* Sale price of car displayed in US currency format
* Tailwind CSS styling

### A Major Challenge I Overcame
The trickiest part of this project was integrating all the different components together. At one point my new Prisma schema was not showing up in my context in tRPC, and I was confused since I had updated my Prisma schema to match my Supabase database. I had tried running `npx prisma generate` but faced a weird error. I learned that the error was caused by having my local development server running, so my filesystem had a lock on the file that Prisma needed to change. Once I stopped my server and reran the command, my Prisma Client was updated and I was able to access my schema from the database context in tRPC.

### Built With

[![Next.js][Nextjs-shield]][Nextjs-url]
[![TypeScript][TypeScript-shield]][TypeScript-url]
[![tRPC][tRPC-shield]][tRPC-url]
[![Prisma][Prisma-shield]][Prisma-url]
[![Tailwind CSS][Tailwind-shield]][Tailwind-url]
[![Supabase][Supabase-shield]][Supabase-url]

[Nextjs-shield]: https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Nextjs-url]: https://nextjs.org/
[TypeScript-shield]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org
[tRPC-shield]: https://img.shields.io/badge/tRPC-2596BE?style=for-the-badge&logo=trpc&logoColor=white
[tRPC-url]: https://trpc.io/
[Prisma-shield]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/
[Tailwind-shield]: https://img.shields.io/badge/Tailwind-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
[Supabase-shield]: https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
