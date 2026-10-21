import Link from "next/link";

const Footer = () => {
    return <footer>
        <div className="mx-auto flex max-w-7xl items-center gap-12 px-6 pt-20 pb-10 lg:gap-16 lg:px-12">
            <p>© 2026 Andrew Allison Services. All rights reserved.</p>
            <div className="flex items-center gap-4">
                {/* <Link
                    href="https://www.linkedin.com/in/andrew-allison-services/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Andrew Allison Services on LinkedIn"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 fill-current"
                    >
                        <path d="M19 0H5C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5V5c0-2.761-2.238-5-5-5ZM8 19H5v-9h3v9ZM6.5 8.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764ZM20 19h-3v-4.604c0-1.098-.021-2.511-1.53-2.511-1.532 0-1.767 1.197-1.767 2.431V19h-3v-9h2.879v1.23h.041c.4-.759 1.379-1.56 2.838-1.56 3.036 0 3.539 1.999 3.539 4.599V19Z" />
                    </svg>
                </Link> */}
                <Link
                    href="https://medium.com/@andrewrobertallison"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Andrew Allison on Medium"
                >
                    <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 fill-current"
                    >
                        <path d="M2 5h5l5 11L17 5h5v2l-2 1v8l2 1v2h-8v-2l2-1V9l-5 10h-1L5 9v7l2 1v2H2v-2l2-1V8L2 7V5Z" />
                    </svg>
                </Link>
            </div>
        </div>
    </footer>;
};

export default Footer;
