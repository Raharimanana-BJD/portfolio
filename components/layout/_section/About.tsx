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
        Jokester began sneaking into the castle in the middle of the night and{" "}
        <a
          href="#"
          className="font-medium text-primary underline underline-offset-4"
        >
          a brilliant plan
        </a>
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        And then, one day, the people of the kingdom discovered that the jokes
        left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
      </p>
    </motion.section>
  );
}
