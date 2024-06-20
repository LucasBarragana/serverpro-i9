'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Suporte() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Dispara a animação apenas uma vez
        threshold: 0.5, // Define o ponto de disparo quando 50% do componente estiver visível
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.3, // Delay opcional para iniciar a animação
            },
        },
    };

    return (
        <section id="Support">
            <div ref={ref} className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-10 lg:pb-28">
                <motion.h1
                    className="text-white text-4xl sm:text-5xl md:text-6xl pt-20 text-center"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    Suporte
                </motion.h1>
                <div className="flex flex-col md:flex-row justify-between items-center py-12">
                    <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4 sm:p-8 lg:pr-14 lg:pl-0">
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl text-white mb-6 md:mb-8"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={containerVariants}
                        >
                            UM CRIADOR DE FORMULÁRIOS DIGITAIS COM EXTREMA FLEXIBILIDADE
                        </motion.h1>
                        <motion.p
                            className="text-gray-200 mb-6 md:mb-8 w-full "
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={containerVariants}
                        >
                            Nosso criador de formulários flexível permite criar facilmente formulários móveis personalizados, ideais para coletar uma variedade de dados, como texto, fotos, áudio, vídeo e assinaturas digitais. Não é necessário conhecimento técnico, pois os formulários são automaticamente adaptados para funcionar nos aplicativos FastField para iOS, Android e Web.
                        </motion.p>
                    </div>
                    <motion.div
                        className="relative w-1/2 flex justify-center items-center mt-10 md:mt-0"
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                    >
                        <div className="w-full sm:w-[400px] md:w-[250px]  h-[300px] sm:h-[350px] md:h-[300px]   shadow-lg">
                            <Image
                                src="/Suporte.png"
                                alt="Image 1"
                                layout="fill"
                                className="rounded-lg"
                            />
                        </div>
                    </motion.div>
                </div>    
            </div>
        </section>
    );
}
