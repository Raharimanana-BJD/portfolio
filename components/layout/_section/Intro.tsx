"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, DownloadIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import HeadingLarge from "@/components/_Heading/HeadingLarge";
import HeadingMedium from "@/components/_Heading/HeadingMedium";

export default function Intro() {
  return (
    <section id="home" className="flex items-center min-h-[100dvh]">
      <div className="container flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
            delay: 0.5,
          }}
        >
          <Badge variant={"outline"} className="border-foreground mb-3">
            Hi, i' am
          </Badge>
        </motion.div>
        <motion.div className="text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <HeadingLarge>Braharim</HeadingLarge>
          <HeadingMedium>Frontend Developer && Designer UX/UI</HeadingMedium>
        </motion.div>
        <motion.div
        className="grid grid-row-2 md:grid-cols-2 gap-4 mt-4"
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
    </section>
  );
}
