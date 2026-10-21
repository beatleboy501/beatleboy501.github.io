"use client";

import Link from "next/link";

export default function Error() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold">Error</h1>
            <p className="text-2xl font-bold">An error occurred while loading the page.</p>
            <Link href="/" className="text-blue-500">Go back to the homepage</Link>
        </div>
    );
}
