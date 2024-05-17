"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { links } from '@/lib/data';

export default function Header() {
  return (
    <motion.header className="relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 w-full h-[4.5rem] bg-white bg-opacity-80 border border-white border-opacity-40 shadow-md shadow-black/[0.03] backdrop-blur-[0.5rem] md:top-6 md:w-1/2 md:h-[3.24rem] md:rounded-lg rounded-none"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <nav className="flex items-center justify-center translate-y-1/2">
          <ul className="flex items-center justify-center gap-4 sm:gap-5 font-medium text-gray-800">
            {links.map(link => (
              <motion.li key={link.name} className=""
                initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
                <Link href={link.hash} passHref className="transition hover:text-gray-950">
                    {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </motion.header>
  );
}
