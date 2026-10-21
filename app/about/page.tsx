import React from "react";

export default function About() {
    return (
        <div className="flex flex-col flex-1 items-center pt-20 bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-4xl font-bold">About Andrew Allison</h1>
            <br />
            <p className="text-xl">Software engineer, cloud consultant, and practical problem-solver.</p>
            <br />
            <div className="flex flex-col gap-4 max-w-7xl">
                <div className="bg-[#101817] text-white rounded-[20px] p-10">
                    <h2 className="text-2xl font-bold">What I Do</h2>
                    <p className="text-lg">I design and build software, cloud infrastructure, and data systems for organizations that need dependable solutions to real business problems. My work has ranged from modernizing large applications and integrating enterprise platforms to building customer-facing products, revenue attribution systems, and services used by millions of people.
                    </p>
                </div>
                <br />
                <div className="bg-[#101817] text-white rounded-[20px] p-10">
                    <h2 className="text-2xl font-bold">How I Work</h2>
                    <p className="text-lg">I like to understand the problem before reaching for a solution. That means asking direct questions, explaining tradeoffs in plain language, and keeping the work tied to what the client actually needs. I take ownership, communicate clearly, and pay attention to the less visible parts of a project—reliability, maintainability, monitoring, and the details that make a system hold up after launch.
                    </p>
                </div>
                <br />
                <div className="bg-[#101817] text-white rounded-[20px] p-10">
                    <h2 className="text-2xl font-bold">The Perspective I Bring</h2>
                    <p className="text-lg">Before working in technology, I bartended and cooked at <i>Hibernia Irish Tavern</i>, worked in landscaping, construction, and roofing, ran a small AutoCAD design and home-renovation business, and worked in banking. Those jobs taught me to be resourceful, dependable, and comfortable working with all kinds of people. They also gave me a lasting respect for practical solutions and a job done properly.</p>
                </div>
                <br />
                <div className="bg-[#101817] text-white rounded-[20px] p-10">
                    <h2 className="text-2xl font-bold">Experience That Holds Up</h2>
                    <p className="text-lg">After earning degrees in Construction Management and Information Systems, I built my technology career at companies including <i>CA Technologies</i>, <i>Echo360</i>, <i>Amazon Web Services</i>, <i>Amazon Live</i>, <i>Ring</i>, and <i>Spotify</i>. I have worked as an engineer, consultant, and manager; supported customers around the world; and delivered systems under demanding performance, security, and compliance requirements. The environments have changed, but the standard has not: understand the work, follow through, and leave things better than I found them.
                    </p>
                </div>
                <br />
                <div className="bg-[#101817] text-white rounded-[20px] p-10">
                    <h2 className="text-2xl font-bold">What You Can Expect</h2>
                    <p className="text-lg">I am straightforward, collaborative, and comfortable getting into the details without losing sight of the larger goal. Clients can expect honest guidance, steady communication, and work shaped by their priorities—not unnecessary complexity. I take the responsibility seriously, but I am easy to talk to and enjoy working with people who care about building something useful.</p>
                </div>
            </div>
        </div>
    );
}
