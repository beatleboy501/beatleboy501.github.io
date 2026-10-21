"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    // { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Image src="/logo.png" alt="Andrew Allison Services" width={140} height={100} />
                    <button
                        type="button"
                        aria-expanded={isMenuOpen}
                        aria-controls="navigation-menu"
                        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        onClick={() => setIsMenuOpen((open) => !open)}
                        className="rounded-md p-2 transition hover:bg-zinc-100 dark:hover:bg-zinc-900"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        id="navigation-menu"
                        className="absolute right-4 top-16 w-56 rounded-md border border-zinc-200 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-black"
                    >
                        <ul className="flex flex-col">
                            {navigation.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block rounded px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
};

export default Navbar;
