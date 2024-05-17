"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { links } from "@/lib/data";
import { ModeToggle } from "@/components/_card/ModeToggle";

export default function Header() {
  return (
    <motion.header
      className="fixed flex items-center justify-between left-1/2 top-6 -translate-x-1/2 z-50 container bg-background/25 bg-opacity-80 border border-border/25 border-opacity-40 shadow-md shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-lg h-[3.24rem]"
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
    >
      <h3 className="scroll-m-20 text-2xl font-light tracking-tight">
        Braharim
      </h3>
      <ul className="hidden items-center justify-center gap-4 sm:gap-5 font-medium tracking-tight md:flex">
        {links.map((link) => (
          <motion.li
            key={link.name}
            className=""
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href={link.hash}
              passHref
              className="transition hover:text-gray-950"
            >
              {link.name}
            </Link>
          </motion.li>
        ))}
      </ul>
        <ModeToggle/>
    </motion.header>
  );
}
