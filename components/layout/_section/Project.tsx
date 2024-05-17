"use client";

import HeadingMedium from "@/components/_Heading/HeadingMedium";
import CardProject from "@/components/_card/CardProject";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectData } from "@/lib/data";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import React, { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.175,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export default function Project() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.section
      className="container flex flex-col items-center justify-center pb-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Badge variant={"outline"} className="border-foreground">
        Browse My Recent
      </Badge>
      <HeadingMedium>Projects</HeadingMedium>
      <motion.div
        className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 overflow-hidden transition ${expanded ? 'h-auto' : 'h-[18rem]'}`}
        variants={containerVariants}
      >
        {projectData.map((project, index) => (
          <CardProject key={index} {...project} />
        ))}
      </motion.div>
      <Button onClick={toggleExpand} className="mt-4 flex items-center">
        <div className="flex flex-col items-center gap-1 py-1">
          <small className="text-sm font-medium leading-none">{expanded ? "Reduir" : "Voir plus"}</small>
          {expanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </Button>
    </motion.section>
  );
}
