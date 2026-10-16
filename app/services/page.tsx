const Services = () => {
    return (
        <section className="relative min-h-[85vh] overflow-hidden rounded-[20px] mt-20">
            <h1 className="text-4xl font-bold text-center pt-10">Services</h1>
            <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 pt-20 pb-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10">
                        Cloud Infrastructure Consulting
                    </h1>
                    <ul className="mt-7 mx-auto max-w-lg list-disc space-y-2 text-left text-lg leading-relaxed text-emerald-200">
                        <li>Cloud server and database migrations</li>
                        <li>Infrastructure as code</li>
                        <li>Container orchestration</li>
                        <li>Scalable CI/CD pipelines</li>
                    </ul>
                </div>

                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10 text-emerald-200">
                        Enterprise Software Development
                    </h1>
                    <ul className="mt-7 mx-auto max-w-lg list-disc space-y-2 text-left text-lg leading-relaxed text-slate-300">
                        <li>Application and service architecture</li>
                        <li>Concurrent and distributed applications</li>
                        <li>Third-party system integrations</li>
                        <li>Legacy application modernization</li>
                    </ul>
                </div>

                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10 text-emerald-200">
                        Data Processing &amp; Analytics
                    </h1>
                    <ul className="mt-7 mx-auto max-w-lg list-disc space-y-2 text-left text-lg leading-relaxed text-slate-300">
                        <li>Medallion and lakehouse architectures</li>
                        <li>Streaming and batch data workflows</li>
                        <li>Automated reporting pipelines</li>
                        <li>Behavioral analytics dashboards</li>
                    </ul>
                </div>

                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10">
                        Mobile App Development
                    </h1>
                    <ul className="mt-7 mx-auto max-w-lg list-disc space-y-2 text-left text-lg leading-relaxed text-emerald-200">
                        <li>Native and cross-platform mobile apps</li>
                        <li>Offline-first field-service tools</li>
                        <li>Secure backend integrations</li>
                        <li>App performance optimization</li>
                    </ul>
                </div>

                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10">
                        AI &amp; Machine Learning
                    </h1>
                    <ul className="mt-7 mx-auto max-w-lg list-disc space-y-2 text-left text-lg leading-relaxed text-emerald-200">
                        <li>Document classification and extraction</li>
                        <li>Demand forecasting</li>
                        <li>Retrieval-augmented knowledge assistants</li>
                        <li>Anomaly detection</li>
                    </ul>
                </div>

                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10 text-emerald-200">
                        Systems Design Services
                    </h1>
                    <ul className="mt-7 mx-auto max-w-lg list-disc space-y-2 text-left text-lg leading-relaxed text-slate-300">
                        <li>Scalable distributed systems</li>
                        <li>API and event-driven integration design</li>
                        <li>Reliability and failure recovery</li>
                        <li>Performance and capacity planning</li>
                    </ul>
                </div>

                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10 text-emerald-200">
                        Marketing &amp; Advertising
                    </h1>
                    <ul className="mt-7 mx-auto max-w-lg list-disc space-y-2 text-left text-lg leading-relaxed text-slate-300">
                        <li>OpenRTB and ad-tech integrations</li>
                        <li>Real-time bidding systems</li>
                        <li>Conversion tracking and attribution</li>
                        <li>Campaign landing pages</li>
                    </ul>
                </div>

                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10">
                        Quality Assurance &amp; Automation
                    </h1>
                    <ul className="mt-7 mx-auto max-w-lg list-disc space-y-2 text-left text-lg leading-relaxed text-emerald-200">
                        <li>Automated regression suites</li>
                        <li>End-to-end and load testing</li>
                        <li>Continuous integration quality gates</li>
                        <li>Custom test frameworks</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Services;
