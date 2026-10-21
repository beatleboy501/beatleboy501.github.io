"use client";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="relative min-h-[85vh] overflow-hidden rounded-[20px] mt-20 bg-[#101817] text-white">
            <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 pt-20 pb-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
                <div className="relative z-10">
                    <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                        Enterprise Software & Cloud Consulting
                    </p>

                    <h1 className="max-w-xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-6xl">
                        Engineering solutions.
                        <span className="block text-emerald-200">
                            Built on experience.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-300">
                        I'm Andrew Allison, a technology professional with
                        decades of experience working at companies such as Broadcom, Amazon, and Spotify
                    </p>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href="/contact"
                            className="rounded-md bg-emerald-200 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-100"
                        >
                            Work With Me ↗
                        </Link>
                        <Link
                            href="/services"
                            className="rounded-md border border-white/30 px-6 py-3 font-medium transition hover:bg-white/10"
                        >
                            Explore Services
                        </Link>
                    </div>

                    <div className="mt-16 flex flex-wrap gap-8 border-t border-white/15 pt-6 text-sm text-slate-400">
                        <span>Cloud Architecture</span>
                        <span>Enterprise Software</span>
                    </div>
                </div>

                <div className="relative h-[460px] overflow-hidden rounded-2xl lg:h-[620px]">
                    <Image
                        src="/me.jpg"
                        alt="Andrew Allison in a modern architectural space"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-[50%_40%]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
