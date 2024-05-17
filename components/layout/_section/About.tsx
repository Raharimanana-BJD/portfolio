"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";
import { delay, motion } from "framer-motion";
import HeadingMedium from "@/components/_Heading/HeadingMedium";

export default function About() {
  return (
    <motion.section
      className="container flex flex-col items-center justify-center pb-[5rem] md:pb-[10rem]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "tween",
          duration: 0.2,
          delay: 0.5,
        }}
      >
        <Badge variant={"outline"} className="border-foreground">
          Get To Know More
        </Badge>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <HeadingMedium>About Me</HeadingMedium>
      </motion.div>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Passionate about animations and new technologies, I am RAHARIMANANA
        Brayann, a frontend developer and UX/UI designer dedicated to creating
        engaging and innovative user experiences. My expertise lies at the
        intersection of aesthetic design and technical performance, where every
        project becomes an opportunity to blend creativity and efficiency.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Since the beginning of my career, I have always been fascinated by how
        design and technology can transform the user experience. With a solid
        foundation in{" "}
        <a href="#" className="font-medium text-primary underline underline-offset-4" >frontend</a>{" "}
        development, I have acquired extensive skills in HTML, CSS, JavaScript,
        and various modern{" "}
        <a href="#" className="font-medium text-primary underline underline-offset-4" > frameworks </a>
        . My experience in UX/UI design has allowed me to master design tools
        like Sketch, Figma, and Adobe XD, while adopting a user-centered
        approach for each project.
      </p>
    </motion.section>
  );
}
