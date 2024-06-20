'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function VideoAbout() {
  const { ref, inView } = useInView({
    triggerOnce: true, // Dispara a animação apenas uma vez
    threshold: 0.5, // Quando 50% do componente estiver visível
  });

  return (
    <section id="VideoAbout">
      <div className="max-w-7xl mx-auto relative flex flex-col sm:mt-20 lg:flex-row justify-between items-center h-auto px-14 sm:px-6 lg:px-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="w-full mt-10 md:w-1/2 flex flex-col justify-center items-start sm:mb-0 sm:pb-0 lg:mr-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-white lg:mb-6 sm:mb-8">
            UM CRIADOR DE FORMULÁRIOS DIGITAIS COM EXTREMA FLEXIBILIDADE
          </h1>
          <p className="text-gray-200 mb-6 sm:mb-8 w-full">
            Nosso criador de formulários flexível permite criar facilmente formulários móveis personalizados, ideais para coletar uma variedade de dados, como texto, fotos, áudio, vídeo e assinaturas digitais. Não é necessário conhecimento técnico, pois os formulários são automaticamente adaptados para funcionar nos aplicativos FastField para iOS, Android e Web.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative w-full md:w-1/2 h-auto flex justify-center items-center mt-10 md:mt-0"
        >
          <div className="relative w-full h-[200px] sm:h-[300px] md:w-[600px] md:h-[350px] lg:w-[700px] lg:h-[400px] shadow-lg">
            <Image
              src="/Video.png"
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
