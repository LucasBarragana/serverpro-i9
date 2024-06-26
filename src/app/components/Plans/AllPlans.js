'use client'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function AllPlans() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full flex flex-col items-center mt-14 p-10"
    >
      <div className="text-white text-center"> {/* Alinhar o texto ao centro */}
        <h3 className="text-pink-500 text-3xl md:text-4xl mb-4 font-semibold">Todos os planos SurveyPro incluem</h3>
        <ul className="flex flex-col items-center gap-2"> {/* Tornar a lista um flex container com direção de coluna e itens centralizados */}
          <li className="mb-2">Construtor de formulários robusto e sem código</li>
          <li className="mb-2">Formulários móveis dinâmicos para iOS e Android</li>
          <li className="mb-2">Capacidade off-line</li>
          <li className="mb-2">Captura de rich media</li>
          <li className="mb-2">Gerenciamento fácil de formulários e tarefas de acompanhamento</li>
          <li className="mb-2">Fluxos de trabalho de formulário automatizados</li>
          <li className="mb-2">Painéis e análises personalizados</li>
          <li className="mb-2">Relatórios personalizados em PDF, Word e Excel</li>
          <li className="mb-2">Integrações perfeitas</li>
        </ul>
        <Link href="#" className="text-pink-500 mt-4 inline-block">Veja a lista completa de recursos</Link>
      </div>
    </motion.div>
  );
}
