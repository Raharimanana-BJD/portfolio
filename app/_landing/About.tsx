import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center max-w-[45rem] mx-auto space-y-8">
      <Badge variant={"outline"} className="border-gray-800">
        Hi, i' am
      </Badge>
      <div className="w-full text-center">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          Hi, je suis RAHARIMANANA Brayann,
        </h3>
        <p className="leading-7 [&:not(:first-child)]:my-4 line-clamp-3">
          Un développeur frontend et designer UX/UI dédié à la création
          d'expériences utilisateur engageantes et innovantes, Passionné par les
          animations et les nouvelles technologies. Mon expertise se situe à
          l'intersection du design esthétique et de la performance technique, où
          chaque projet devient une opportunité d'allier créativité et
          efficacité.
        </p>
        <Button variant={"default"}>Voir plus</Button>
      </div>
    </section>
  );
}
