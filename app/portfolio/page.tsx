import Card from "@/src/components/Card";

const Portfolio = () => {
    return (
        <section className="relative min-h-[85vh] overflow-hidden rounded-[20px] mt-20">
            <h1 className="text-4xl font-bold text-center pt-10">Portfolio</h1>

            <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 pt-20 pb-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10">
                        IntelliPostal
                    </h1>

                    <p className="mt-7 max-w-lg text-lg leading-relaxed text-emerald-200">
                        Web app for sending physical mail from your browser
                    </p>
                </div>
            </div>

            <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 pt-20 pb-10 lg:grid-cols-2 lg:gap-16 lg:px-12">
                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10">
                        Portacar
                    </h1>

                    <p className="mt-7 max-w-lg text-lg leading-relaxed text-emerald-200">
                        Mobile app for booking and managing C2C car rentals
                    </p>
                </div>

                <div className="relative z-10 text-center bg-[#101817] text-white rounded-[20px] p-10">
                    <h1 className="text-4xl font-bold text-center pt-10 text-emerald-200">
                        Loteria Learn
                    </h1>
                    <p className="mt-7 max-w-lg text-lg leading-relaxed text-slate-300">
                        Mobile game for learning languages
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;