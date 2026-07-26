import {
  Award,
  Calendar,
  Check,
  Code,
  ExternalLink,
  File,
  Mail,
  MapPin,
  Share2,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CoverImage, ProfileImage } from "./public";

interface HeroPageProps {
  profileImage?: string | StaticImageData;
  coverImage?: string | StaticImageData;
  name?: string;
  title?: string;
  location?: string;
  bio?: string;
  status?: string;
  skills?: string[];
  onResumeClick?: () => void;
  onContactClick?: () => void;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  github?: string;
  featured?: boolean;
}

interface ProjectsSectionProps {
  title?: string;
  descriptions?: string;
  projects: ProjectCardProps[];
}

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  description?: string;
  skills?: string[];
}

interface AcademicSectionProps {
  title?: string;
  certificates: CertificateCardProps[];
  subtitle?: string;
}

function HeroPage({
  profileImage = ProfileImage,
  coverImage = CoverImage,
  name = "Brayann RAHARIMANANA",
  title = "Développeur Web Full Stack",
  location = "Toliara, Madagascar",
  bio = "Développeur Full Stack avec plus de 5 ans d'expérience dans la conception d'applications web modernes, performantes et scalables. Du frontend au déploiement, je maîtrise tout le cycle de vie d'un projet en plaçant l'expérience utilisateur au centre de mes priorités.",
  status = "Disponible pour de nouvelles opportunités",
  skills = [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "TanStack Start",
    "TailwindCSS",
    "ShadCN",
    "Better-auth",
    "Prisma",
    "PostgreSQL",
    "Node.js",
  ],
  onResumeClick = () => {},
}: HeroPageProps) {
  return (
    <section>
      {/* Conteneur de la bannière avec la couleur de fond orange/marron */}
      <div className="relative h-54 md:h-64 w-full overflow-hidden bg-linear-to-tl from-white to-black/25 dark:to-black">
        {/* L'image de couverture est placée de manière absolue tout à droite */}
        {coverImage && (
          <div className="relative left-1/2 max-sm:left-1/4 top-0 h-full aspect-208/200">
            <Image
              src={coverImage}
              alt="Cover image"
              width={200}
              height={300}
              priority
              loading="eager"
              className="bottom-0 max-md:-bottom-8 absolute right-0"
            />
          </div>
        )}

        {/* Badge dynamique "Available for work" */}
        <Badge
          variant="outline"
          className="absolute border-foreground top-4 left-6 md:left-12 z-20 "
        >
          <Check className="w-3 h-3 mr-1" />
          <span className="hidden md:block">{status}</span>
          <span className="block md:hidden">Disponible</span>
        </Badge>
      </div>

      {/* Reste du profil */}
      <div className="px-0 pt-20 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6 relative z-10 gap-4">
          {/* Avatar circulaire avec contour épais */}
          <div className=" hidden size-32 overflow-hidden rounded-full border-4 border-border bg-accent shadow-xl relative">
            {profileImage ? (
              <Image
                src={profileImage}
                alt={`Profile image ${name}`}
                fill
                loading="eager"
                className="object-cover"
              />
            ) : (
              <div className="size-full bg-primary" />
            )}
          </div>
        </div>

        <div className="space-y-3 md:ml-auto">
          <div>
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{name}</h1>
                <Button
                  size="sm"
                  variant="outline"
                  className={"flex max-md:hidden max-md:mr-6"}
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Partager</span>
                </Button>
              </div>
              <div className="space-x-2 mt-1">
                <Badge variant={"default"}>
                  <Code />
                  {title}
                </Badge>
                <Badge variant={"outline"}>
                  <MapPin />
                  {location}
                </Badge>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mt-2 mr-6">{bio}</p>
          </div>
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 mr-6">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="flex-auto">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 mr-6">
            <Button
              nativeButton={false}
              render={
                <Link
                  className="flex items-center"
                  href={"mailto:brayjuanico@gmail.com"}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  brayjuanico@gmail.com
                </Link>
              }
            />
            <Button onClick={onResumeClick} variant="outline">
              <File className="w-4 h-4 mr-2" />
              Télécharger le CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  title,
  description,
  tags = [],
  link,
  github,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card className="bg-inherit">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="leading-relaxed line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Tags */}
      {tags.length > 0 && (
        <CardContent className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardContent>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 px-4">
        {link && (
          <Button size="sm" variant="outline">
            <Link
              className="flex items-center"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Voir le site
            </Link>
          </Button>
        )}
        {github && (
          <Button size="sm" variant="outline" className="">
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}

function ProjectsSection({
  title = "Projets",
  descriptions = "",
  projects,
}: ProjectsSectionProps) {
  return (
    <section className="py-6 pt-12 max-md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-16 bg-linear-to-r from-primary to-primary-foreground rounded" />
          <p className="text-muted-foreground text-sm hidden">{descriptions}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} featured={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificateCard({
  title,
  issuer,
  date,
  description,
  skills = [],
}: CertificateCardProps) {
  return (
    <div>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{issuer}</p>
        </div>
        <Award className="w-5 h-5 text-primary shrink-0" />
      </div>
      {/* Date */}
      <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
        <Calendar className="w-4 h-4" />
        <span>{date}</span>
      </div>

      {/* Description */}
      {description && (
        <p className="mb-4 text-foreground text-sm leading-relaxed">
          {description}
        </p>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline">
              {skill}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

function AcademicSection({
  title = "Formation & Certifications",
  certificates,
  subtitle,
}: AcademicSectionProps) {
  return (
    <section className="px-0 max-md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <div className="h-1 w-16 bg-linear-to-r from-primary to-primary-foreground rounded" />
        </div>

        {/* Certificates Grid */}
        <div className="flex flex-col gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
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
