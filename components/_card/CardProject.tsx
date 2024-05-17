import React, { useRef } from "react";
import type { projectData } from "@/lib/data";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectData)[number];

export default function CardProject({
  title,
  description,
  tags,
  imageUrl,
  alt,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.div
      ref={ref}
      className="bg-background/25 p-4 rounded-lg flex-1 group"
      style={{ opacity, translateY }}
    >
      <div className="relative overflow-hidden min-h-[8.5625rem] max-w-[15rem] rounded-md">
        <Image
          src={imageUrl}
          alt={alt}
          quality={95}
          className="absolute z-10 h-full top-8 -right-16 rounded-t-md transition group-hover:-translate-y-4 rotate-3 group-hover:rotate-0 group-hover:-translate-x-8"
        />
      </div>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2">
        {title}
      </h4>
      <p className="leading-7 [&:not(:first-child)]:my-1">{description}</p>
      <div className="flex items-center gap-2">
        {tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
