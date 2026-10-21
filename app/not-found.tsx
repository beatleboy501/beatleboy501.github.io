import React from "react";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="text-2xl font-bold">The page you are looking for does not exist.</p>
            <Link href="/" className="text-blue-500">Go back to the homepage</Link>
        </div>
    );
}
