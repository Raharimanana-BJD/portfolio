"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] space-y-4">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
        }}
      >
        <Badge variant={"outline"} className="border-gray-800">
          Hi, i' am
        </Badge>
      </motion.div>
      <motion.span
        className="!leading-5 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Braharim
        </span>
        <br />
        <span className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Frontend Developer
        </span>
      </motion.span>
      <motion.div
        className="grid grid-row-2 md:grid-cols-2 gap-4 pt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Button
          variant={"default"}
          className="min-w-[154px] flex-1 inline-flex items-center gap-4"
        >
          <Link href="#contact">Contact Me</Link>
          <ArrowRightIcon />
        </Button>
        <Button
          variant={"outline"}
          className="min-w-[154px] bg-inherit border-gray-800 flex-1 inline-flex items-center gap-4"
        >
          <Link href="/CV_RAHARIMANANA_Brayann.pdf" target="_blank" rel="noreferrer" download>
            Download CV
          </Link>
          <DownloadIcon />
        </Button>
      </motion.div>
    </div>
  );
}
