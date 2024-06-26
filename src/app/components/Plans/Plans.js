'use client'

import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AllPlans from './AllPlans';

export default function Plans() {
  const { ref: card1Ref, inView: card1InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: card2Ref, inView: card2InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: card3Ref, inView: card3InView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const { ref: rocketRef, inView: rocketRefInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const rocketVariants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2.0,
      },
    },
  };

  return (
    <section id="Plans">
      <div className="mx-auto relative flex flex-col justify-center items-center h-full text-white pt-20 pb-20 px-4 sm:px-10 md:px-20 lg:px-60">
        <motion.div
          ref={rocketRef}
          variants={rocketVariants}
          initial="hidden"
          animate={rocketRefInView ? 'visible' : 'hidden'}
          className="absolute z-10 h-72 w-[70%] top-[140px] items-center justify-center hidden md:flex"
        >
          <Image src='/Foguete2.png' layout="fill" objectPosition="center" alt="foguete"/>
        </motion.div>
        <div className="flex flex-col items-center text-center mb-8 ">
          <h4 className="text-2xl sm:text-3xl md:text-4xl mb-2">Encontre um plano para <br /> começar seu projeto</h4>
          <p className="text-xs sm:text-sm md:sm">Independente do tamanho da sua campanha, você terá <br /> os melhores recursos do mercado.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          <motion.div 
            ref={card1Ref} 
            variants={cardVariants} 
            initial="hidden" 
            animate={card1InView ? 'visible' : 'hidden'} 
            className="card flex flex-col items-center text-center p-4 bg-white text-black hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-900 hover:text-white shadow-lg transition-colors duration-300">
            <div className="w-full h-full p-6 flex flex-col items-center justify-between  pt-6 md:pt-28">
              <div className="w-full flex flex-col items-center text-sm mt-auto ">
                <div className="bubleTitle bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <h3 className="text-purple-700 text-lg font-bold">FREE</h3>
                </div>
                <div className="flex items-center mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold flex items-start text-purple-700 mr-2 ">
                    <span className="text-lg">R$</span> 280
                  </h2>
                  <div className="text-xs mt-1">
                    <p>Por usuário/Anual</p>
                    <p>cobrado<br /> mensalmente</p>
                  </div>
                </div>
              </div>
              <div className="w-full text-sm">
                <div className="text-center py-1 mb-4">
                  <h4 className="text-pink-500 font-semibold">ILIMITADO</h4>
                  <p className="text-xs">Criação de formulários</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200 mb-4">
                  <h4 className="text-pink-500 font-semibold">ILIMITADO</h4>
                  <p className="text-xs">Envio de formulário para todos os usuários da conta</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-xs">Relatórios personalizados em PDF, Word e Excel</p>
                </div>
              </div>
              <Link href="#" className="mt-4 bg-purple-700 text-white py-2 px-6 md:px-20 rounded-lg hover:bg-purple-800 text-sm">
                Experimente <br /> Grátis
              </Link>
            </div>
          </motion.div>
          <motion.div 
            ref={card2Ref} 
            variants={cardVariants} 
            initial="hidden" 
            animate={card2InView ? 'visible' : 'hidden'} 
            className="card flex flex-col items-center text-center p-4 bg-white text-black hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-900 hover:text-white shadow-lg transition-colors duration-300">
            <div className="w-full h-full p-6 flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center text-sm mt-auto">
                <div className="bubleTitle bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <h3 className="text-purple-700 text-lg font-bold">MENSAL</h3>
                </div>
                <div className="flex items-center mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold flex items-start text-purple-700 mr-2 ">
                    <span className="text-lg">R$</span> 280
                  </h2>
                  <div className="text-xs mt-1">
                    <p>Por usuário/Anual</p>
                    <p>cobrado<br /> mensalmente</p>
                  </div>
                </div>
              </div>
              <div className="w-full text-sm">
                <div className="text-center py-1 mb-4">
                  <h4 className="text-pink-500 font-semibold">ILIMITADO</h4>
                  <p className="text-xs">Criação de formulários</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200 mb-4">
                  <h4 className="text-pink-500 font-semibold">ILIMITADO</h4>
                  <p className="text-xs">Envio de formulário para todos os usuários da conta</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200">
                  <h4 className="text-pink-500 font-semibold">ILIMITADO</h4>
                  <p className="text-xs">Relatórios personalizados em PDF, Word e Excel</p>
                </div>
              </div>
              <Link href="#" className="mt-4 bg-purple-700 text-white py-2 px-6 md:px-20 rounded-lg hover:bg-purple-800 text-sm">
                Experimente <br /> Grátis
              </Link>
            </div>
          </motion.div>
          <motion.div 
            ref={card3Ref} 
            variants={cardVariants} 
            initial="hidden" 
            animate={card3InView ? 'visible' : 'hidden'} 
            className="card flex flex-col items-center text-center p-4 bg-white text-black hover:bg-gradient-to-b hover:from-purple-700 hover:to-purple-900 hover:text-white shadow-lg transition-colors duration-300">
            <div className="w-full h-full p-6 flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center text-sm mt-auto">
                <div className="bubleTitle bg-white rounded-full w-20 h-20 flex items-center justify-center mb-6">
                  <h3 className="text-purple-700 text-lg font-bold">ANUAL</h3>
                </div>
                <div className="flex items-center mb-6">
                  <h2 className="text-4xl md:text-5xl font-bold flex items-start text-purple-700 mr-2 ">
                    <span className="text-lg">R$</span> 280
                  </h2>
                  <div className="text-xs mt-1">
                    <p>Por usuário/Anual</p>
                    <p>cobrado<br /> mensalmente</p>
                  </div>
                </div>
              </div>
              <div className="w-full text-sm">
                <div className="text-center py-1 mb-4">
                  <h4 className="text-pink-500 font-semibold">ILIMITADO</h4>
                  <p className="text-xs">Criação de formulários</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200 mb-4">
                  <h4 className="text-pink-500 font-semibold">ILIMITADO</h4>
                  <p className="text-xs">Envio de formulário para todos os usuários da conta</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200">
                  <h4 className="text-pink-500 font-semibold">ILIMITADO</h4>
                  <p className="text-xs">Relatórios personalizados em PDF, Word e Excel</p>
                </div>
              </div>
              <Link href="#" className="mt-4 bg-purple-700 text-white py-2 px-6 md:px-20 rounded-lg hover:bg-purple-800 text-sm">
                Experimente <br /> Grátis
              </Link>
            </div>
          </motion.div>
        </div>
        <AllPlans />
      </div>
    </section>
  );
}
