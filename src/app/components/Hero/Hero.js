'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Dispara a animação apenas uma vez
    threshold: 0.5, // Define o ponto de disparo quando 50% do componente estiver visível
  });

  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
        delay: 0.3, // Delay opcional para iniciar a animação
      },
    },
  };

  return (
    <section id='Hero' className="relative w-full h-screen lg:h-[750px] flex items-center justify-center overflow-hidden">
      <Image
        src="/fundo1.jpeg"
        alt="Background Image"
        layout="fill"
        quality={100}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 to-transparent opacity-100"></div>
      <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row justify-between items-center py-12">
          <motion.div
            className='w-full lg:w-1/2 flex flex-col justify-center items-start p-4 sm:p-8 lg:px-0 z-10'
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 md:mb-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              CRIE FORMULÁRIOS DIGITAIS EM MINUTOS
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6 md:mb-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              Uma plataforma de software empresarial completa e totalmente personalizável para transformar seus formulários em papel em formulários digitais e aplicativos de coleta de dados.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
            >
              <Link href="/" className="px-4 sm:px-6 py-2 sm:py-3 bg-purple-500 text-white text-sm sm:text-lg rounded-full hover:bg-purple-600">
                Experimente Grátis
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={containerVariants}
            className="hidden lg:block lg:w-1/2 flex justify-center items-center mb-8 sm:mb-0 relative"
          >
            <div className="absolute inset-0 flex justify-center items-center">
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
