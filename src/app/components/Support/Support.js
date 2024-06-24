'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
    const { ref, inView } = useInView({
        triggerOnce: true, // Só ativa uma vez
        threshold: 0.5, // Quando 50% do componente está visível
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
        <section id="About" className="mx-auto relative px-10 sm:px-10 md:px-20 my-16 lg:px-40 mb-20">
            <div ref={ref} className="flex flex-col md:flex-row justify-between items-center h-auto lg:h-[50vh]">
                <div className="w-full md:w-2/5 flex flex-col justify-between items-start h-full md:pr-10">
                    <div className="flex flex-col justify-start w-full">
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-4xl text-white mb-8"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={containerVariants}
                        >
                            UM CRIADOR DE FORMULÁRIOS DIGITAIS COM EXTREMA FLEXIBILIDADE
                        </motion.h1>
                        <motion.p
                            className="text-gray-200 mb-6 text-sm"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={containerVariants}
                        >
                            Nosso criador de formulários flexível permite criar facilmente formulários móveis personalizados, 
                            ideais para coletar uma variedade de dados, como texto, fotos, áudio, vídeo e assinaturas digitais. 
                            Não é necessário conhecimento técnico, pois os formulários são automaticamente adaptados para funcionar 
                            nos aplicativos FastField para iOS, Android e Web.
                        </motion.p>
                        <motion.p
                            className="text-gray-200 text-sm"
                            initial="hidden"
                            animate={inView ? 'visible' : 'hidden'}
                            variants={containerVariants}
                        >
                            Capture todos os tipos de dados, incluindo alfanuméricos, fotos,
                            áudio, vídeo, assinaturas digitais e muito mais.
                        </motion.p>
                    </div>
                </div>
                <motion.div
                    className="relative w-full md:w-3/5 h-full flex justify-center items-center mt-10 sm:mt-10 md:mt-0"
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                >
                    <div className=" w-auto h-64 md:h-auto">
                        <Image
                            src="/Suporte.png"
                            alt="Image 1"
                            layout="fill"
                            className="rounded-lg"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
