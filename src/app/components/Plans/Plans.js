'use client'

import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

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
      <div className="max-w-7xl mx-auto relative flex flex-col justify-center items-center h-full text-white pt-20 pb-20 px-6 sm:px-6 lg:px-0">
        <motion.div
          ref={rocketRef}
          variants={rocketVariants}
          initial="hidden"
          animate={rocketRefInView ? 'visible' : 'hidden'}
          className="absolute z-10 h-72 w-[90%] top-22 mb-80 flex items-center justify-center"
        >
          <Image src='/Foguete2.png' layout="fill"  objectPosition="center" alt="foguete"/>
        </motion.div>
        <div className="flex flex-col items-center text-center mb-8 w-96 px-8 sm:px-6 lg:px-0">
          <h4 className="text-3xl mb-2">Encontre um plano para começar seu projeto</h4>
          <p className="text-sm">Independente do tamanho da sua campanha, você terá os melhores recursos do mercado.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          <motion.div 
            ref={card1Ref} 
            variants={cardVariants} 
            initial="hidden" 
            animate={card1InView ? 'visible' : 'hidden'} 
            className="card flex flex-col items-center text-center p-4 bg-gradient-to-b from-purple-700 to-purple-900 text-white lg:w-[350px] lg:h-[650px]">
            <div className="w-full h-full p-6 flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center text-sm mt-auto">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-6 z-10">
                  <h3 className="text-purple-700 text-lg font-bold">FREE</h3>
                </div>
                <div className="flex items-center mb-10">
                  <h2 className="text-5xl font-bold flex items-start mr-6">
                    <span className="text-lg">R$</span> 280
                  </h2>
                  <div className="text-xs mt-1">
                    <p>Por usuário / Anual</p>
                    <p>cobrado<br /> mensalmente</p>
                  </div>
                </div>
              </div>
              <div className="w-full text-sm">
                <div className="text-center py-1 mb-4">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-white text-xs">Criação de formulários</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200 mb-4">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-white text-xs">Envio de formulário para todos os usuários da conta</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-white text-xs">Relatórios personalizados em PDF, Word e Excel</p>
                </div>
              </div>
              <Link href="#" className="mt-4 bg-purple-700 text-white py-2 px-20 rounded-lg hover:bg-purple-800 text-sm">
                Experimente <br></br> Grátis
              </Link>
            </div>
          </motion.div>
          <motion.div 
            ref={card2Ref} 
            variants={cardVariants} 
            initial="hidden" 
            animate={card2InView ? 'visible' : 'hidden'} 
            className="card flex flex-col items-center text-center p-4 bg-white text-black lg:w-[350px] lg:h-[650px]">
            <div className="w-full h-full p-6 flex flex-col items-center justify-between">
              <div className="w-full flex flex-col items-center text-sm mt-auto">
                <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <h3 className="text-black text-lg font-bold">MENSAL</h3>
                </div>
                <div className="flex items-center mb-10">
                  <h2 className="text-5xl font-bold flex items-start text-purple-700 mr-6">
                    <span className="text-lg">R$</span> 280
                  </h2>
                  <div className="text-xs mt-1">
                    <p>Por usuário / Anual</p>
                    <p>cobrado<br /> mensalmente</p>
                  </div>
                </div>
              </div>
              <div className="w-full text-sm">
                <div className="text-center py-1 mb-4">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-xs">Criação de formulários</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200 mb-4">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-xs">Envio de formulário para todos os usuários da conta</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-xs">Relatórios personalizados em PDF, Word e Excel</p>
                </div>
              </div>
              <Link href="#" className="mt-4 bg-purple-700 text-white py-2 px-20 rounded-lg hover:bg-purple-800 text-sm">
                Experimente <br></br> Grátis
              </Link>
            </div>
          </motion.div>
          <motion.div 
            ref={card3Ref} 
            variants={cardVariants} 
            initial="hidden" 
            animate={card3InView ? 'visible' : 'hidden'} 
            className="card flex flex-col items-center text-center p-4 bg-white text-black lg:w-[350px] lg:h-[650px]">
            <div className="w-full h-full p-6 flex flex-col items-center justify-between backdrop-blur-lg">
              <div className="w-full flex flex-col items-center text-sm mt-auto pt-20">
                <div className="flex items-center justify-center mb-4">
                  <h3 className="text-black text-2xl font-bold">ANUAL</h3>
                </div>
                <div className="flex items-center mb-10">
                  <h2 className="text-5xl font-bold flex items-start text-purple-700 mr-6">
                    <span className="text-lg">R$</span> 280
                  </h2>
                  <div className="text-xs mt-1">
                    <p>Por usuário / Anual</p>
                    <p>cobrado<br /> mensalmente</p>
                  </div>
                </div>
              </div>
              <div className="w-full text-sm">
                <div className="text-center py-1 mb-4">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-xs">Criação de formulários</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200 mb-4">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-xs">Envio de formulário para todos os usuários da conta</p>
                </div>
                <div className="text-center py-1 border-t border-gray-200">
                  <h3 className="text-pink-500 font-semibold">ILIMITADO</h3>
                  <p className="text-xs">Relatórios personalizados em PDF, Word e Excel</p>
                </div>
              </div>
              <Link href="#" className="mt-4 bg-purple-700 text-white py-2 px-20 rounded-lg hover:bg-purple-800 text-sm">
                Experimente <br></br> Grátis
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
