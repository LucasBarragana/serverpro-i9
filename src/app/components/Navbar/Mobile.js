'use client'

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Menu from "../icons/Menu";

export default function Mobile() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setDropdownOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="block lg:hidden">
      <div className="fixed w-full z-50 h-[66px] backdrop-blur-lg shadow-lg ">
        <div className="mx-auto py-2 flex justify-between items-center max-w-6xl mt-3 px-6">
          <div className="text-lg font-bold">
            <Link href="/">
              <Image src='/logo4.svg' width={36} height={36} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href='#' className='flex justify-center items-center border rounded-md px-2 py-2 w-[30px] h-[30px]'>
              <Image src='/user.svg' width={19} height={19} alt='User Icon' />
            </Link>
            <Link href='#' className='flex justify-center items-center border rounded-md  px-2 py-3 w-[30px] h-[30px]'>
              <Image src='/question.svg' width={26} height={26} alt='Question Icon' />
            </Link>
            <div className="relative" ref={dropdownRef}>
              <button onClick={toggleDropdown} className="bg-secondary p-2 rounded-md">
                <Menu />
              </button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <div className="flex flex-col space-y-2">
                    <Link href="/" className="pl-4 py-2 hover:bg-gray-300">Plataforma</Link>
                    <Link href="/" className="pl-4 py-2 hover:bg-gray-300">Premium</Link>
                    <Link href="/" className="pl-4 py-2 hover:bg-gray-300">Preços</Link>
                    <Link href="/" className="pl-4 py-2 hover:bg-gray-300">Novidades</Link>
                    <Link href="/" className="pl-4 py-2 hover:bg-gray-300">Conect-se</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
