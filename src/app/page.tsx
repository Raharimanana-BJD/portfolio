"use client";
import AcademicSection from "@/components/certificated";
import HeroPage from "@/components/hero";
import ProjectsSection from "@/components/project";

export default function Home() {
  const projects = [
    {
      title: "Univpass",
      description:
        "Solution moderne dédiée à l'écosystème universitaire : landing page orientée SEO couplée à un dashboard authentifié gérant des flux transactionnels sensibles (paiements MVola) via un système de file d'attente (job queue) maison, adossé à PostgreSQL pour garantir fiabilité et traçabilité des traitements.",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "MVola API"],
      link: "https://univ-pass.tech/fr",
    },
    {
      title: "Art Lanto Design",
      description:
        "Vitrine web dédiée à la valorisation de l'artisanat de Toliara. Une interface soignée et rapide, pensée pour mettre en avant le savoir-faire des artisans locaux et faciliter la prise de contact avec leur clientèle.",
      tags: ["Next.js", "React", "TailwindCSS", "TypeScript"],
      link: "https://toliara-handicraft-app.vercel.app/",
    },
    {
      title: "Snapishot",
      description:
        "Outil en ligne de commande transformant n'importe quel fichier source en capture d'écran stylisée et thématisée. Utilise Monaco Editor en mode headless via Puppeteer et Shiki pour la coloration syntaxique. Prend en charge plus de 20 langages et thèmes, avec un style entièrement personnalisable.",
      tags: ["CLI", "TypeScript", "Puppeteer", "Monaco Editor", "Shiki"],
      github: "https://github.com/braharim/snapishot",
    },
    {
      title: "Queue Engine",
      description:
        "Système de file d'attente (job queue) maison, backé par PostgreSQL, conçu pour gérer des traitements asynchrones critiques : identité des jobs, télémétrie, gestion des incompatibilités de version et contrat JobStorePort pour garder le système découplé et testable.",
      tags: ["TypeScript", "Node.js", "PostgreSQL", "Zod"],
      github: "https://github.com/braharim/queue-engine",
    },
  ];
  const certificates = [
    {
      title: "Master 1 - Informatique Générale (IG)",
      issuer:
        "E.N.I - École Nationale d'Informatique, Fianarantsoa (centre de Toliara)",
      date: "En cours",
      description:
        "Formation d'ingénieur complète et hybride couvrant le génie logiciel, les réseaux, l'intelligence artificielle, les bases de données et le marketing.",
      skills: ["Génie logiciel", "IA", "Bases de données", "Réseaux"],
    },
    {
      title: "Développeur React Native",
      issuer: "Udemy",
      date: "2023",
      skills: ["React Native", "Mobile"],
    },
    {
      title: "Designer UX/UI",
      issuer: "SAYNA",
      date: "2023",
      skills: ["UX Design", "UI Design", "Figma"],
    },
    {
      title: "BACC Générale",
      issuer: "Lycee CPE - Toliara",
      description:
        "Cours de préparation aux examens et aux concours d'entrée aux grandes écoles",
      date: "2021",
      skills: ["Serie D"],
    },
  ];
  return (
    <div>
      <HeroPage />
      <ProjectsSection
        title="Projets à la une"
        descriptions="Une sélection de projets récents, de la fintech à l'artisanat en passant par des outils open source."
        projects={projects}
      />
      <AcademicSection
        title="Formation & Certifications"
        subtitle="Apprentissage continu et développement professionnel"
        certificates={certificates}
      />
    </div>
  );
}
