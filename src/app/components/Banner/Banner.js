import Image from "next/image";
import Link from "next/link";

export default function Banner() {
    return (
        <section id="Banner" className="relative">
            {/* Conteúdo do banner */}
            <div className="overflow-hidden relative mx-auto z-10 max-w-7xl">
                <div className="banner absolute inset-x-0 bottom-0 h-full opacity-100 z-0"></div>
                <div className="banner2 absolute inset-x-0 bottom-0 h-full opacity-100 z-0"></div>
                <div className="p-8 relative mx-auto">
                    <div className="flex flex-col md:flex-row gap-20 justify-center items-center">
                        <div className="flex gap-4 items-center mb-4 md:mb-0">
                            <Image src='/logo4.svg' width={80} height={80} alt="logo" className="w-5 h-5 md:w-36 md:h-36" />
                            <Image src='/name-logo-line.svg' width={180} height={60} alt="logo" className="w-28 h-8 md:w-80 md:h-20" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-base md:text-2xl font-bold">
                                CRIE SEUS PRÓPRIOS <br />
                                FORMULÁRIOS DIGITAIS!
                            </h2>
                            <Link href="#" className="inline-block mt-4 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800">
                                Experimente agora
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
