'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function Process() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section id="Process">
      <div className="relative w-full py-28 px-10 sm:px-10 md:px-20 lg:px-40">
        <Image
          src="/fundo2.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div
          className="backProcess1 absolute inset-0"
        ></div>
        <div
          className="backProcess2 absolute inset-0"
        ></div>
        <div className="mx-auto relative z-10 flex flex-col justify-center items-center h-full text-white max-w-screen-2xl">
          <div className="flex flex-col items-center text-center mb-16">
            <motion.h4
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-2 text-lg md:text-xl"
            >
              MODERNIZE SEUS FORMULÁRIOS EM 3 ETAPAS SIMPLES
            </motion.h4>
            <motion.h2
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="text-2xl md:text-3xl"
            >
              FORMULÁRIOS MÓVEIS PARA COLETA DE DADOS SEM PAPEL
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 mt-8">
            {/* Coluna 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
              className="flex flex-col items-center text-center"
            >
              <Image
                src="/process1.svg"
                width={200}
                height={200}
                alt="icon1"
                className="mb-4 max-w-full h-auto"
              />
              <motion.h6 className="mt-2 mb-4 text-lg">1. CONSTRUIR</motion.h6>
              <motion.p className="text-xs md:text-sm">
                Crie seus próprios formulários móveis personalizados usando nosso poderoso criador de formulários.
              </motion.p>
            </motion.div>
            {/* Coluna 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <Image
                src="/Distribuir.svg"
                width={160}
                height={160}
                alt="icon2"
                className="mb-4 max-w-full h-auto"
              />
              <motion.h6 className="mt-2 mb-4 text-lg">2. DISTRIBUIR</motion.h6>
              <motion.p className="text-xs md:text-sm">
                Distribua automaticamente seus dados e relatórios (PDF, Excel, Word, Json, XML, CSV e mais) de acordo com o fluxo de trabalho do seu próprio negócio.
              </motion.p>
            </motion.div>
            {/* Coluna 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <Image
                src="/Colete.svg"
                width={125}
                height={125}
                alt="icon3"
                className="mb-4 max-w-full h-auto"
              />
              <motion.h6 className="mt-2 mb-4 text-lg">3. COLETE</motion.h6>
              <motion.p className="text-xs md:text-sm">
                Colete conjuntos de dados ricos usando nossos aplicativos móveis intuitivos.
              </motion.p>
            </motion.div>
            {/* Coluna 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 1.0 }}
              className="flex flex-col items-center text-center"
            >
              <Image
                src="/Analizar.svg"
                width={200}
                height={200}
                alt="icon4"
                className="mb-4 max-w-full h-auto"
              />
              <motion.h6 className="mt-2 mb-4 text-lg">4. ANALISE</motion.h6>
              <motion.p className="text-xs md:text-sm">
                O Dashboard é a central de informações rápidas e essenciais sobre o status dos seus questionários.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
