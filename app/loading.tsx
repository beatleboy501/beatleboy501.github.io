import React from "react";

export default function Loading() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
            <p className="text-2xl font-bold">Loading...</p>
        </div>
    );
}
