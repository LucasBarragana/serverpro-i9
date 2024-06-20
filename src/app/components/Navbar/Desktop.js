'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Desktop() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'Hero';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="hidden lg:block">
      <div className='fixed top-0 left-0 w-full z-50 h-[66px] backdrop-blur-lg shadow-lg'>
        <div className="mx-auto py-2 flex justify-between items-center max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="flex items-center">
            <div className="font-bold">
              <Link href="/">
                <Image src='/logo4.svg' width={42} height={42} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#Hero" className={`nav-link ${activeSection === 'Hero' ? 'active' : ''}`}>
              Plataforma
            </Link>
            <Link href="#About" className={`nav-link ${activeSection === 'About' ? 'active' : ''}`}>
              Recursos Premium
            </Link>
            <Link href="#Process" className={`nav-link ${activeSection === 'Process' ? 'active' : ''}`}>
              Preços
            </Link>
            <Link href="#VideoAbout" className={`nav-link ${activeSection === 'VideoAbout' ? 'active' : ''}`}>
              O que há de novo
            </Link>
            <Link href="#Support" className={`nav-link ${activeSection === 'Support' ? 'active' : ''}`}>
              Conecte-se
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href='#' className='flex justify-center align-center border rounded-md px-2 py-2 w-[40px] h-[40px]'>
              <Image src='/user.svg' width={16} height={16} alt='User Icon' />
            </Link>
            <Link href='#' className='flex justify-center align-center border rounded-md px-3 py-2 w-[40px] h-[40px]'>
              <Image src='/question.svg' width={16} height={16} alt='Question Icon' />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
