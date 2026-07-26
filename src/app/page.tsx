"use client";

import {
  Award,
  Briefcase,
  Calendar,
  Code,
  ExternalLink,
  File,
  GraduationCap,
  Icon,
  icons,
  Mail,
  MapPin,
  Newspaper,
  Phone,
  Square,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import GitHubIcon from "@/components/icon/github-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CoverImage } from "../../public";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface HeroPageProps {
  profileImage?: string | StaticImageData;
  coverImage?: string | StaticImageData;
  name?: string;
  poste?: string;
  location?: string;
  status?: string;
  email?: string;
  phone?: string;
  socials?: SocialLink[];
  onResumeClick?: () => void;
}

interface AboutSectionProps {
  points: string[];
}

interface StackSectionProps {
  title?: string;
  skills: string[];
}

interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  type?: string;
  tags?: string[];
}

interface ExperienceSectionProps {
  title?: string;
  items: ExperienceItemProps[];
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
  description?: string;
  projects: ProjectCardProps[];
}

interface CertificateCardProps {
  title: string;
  issuer: string;
  icon: React.ReactNode;
  date: string;
  skills?: string[];
}

interface AcademicSectionProps {
  title?: string;
  subtitle?: string;
  certificates: CertificateCardProps[];
}

interface BlogPostProps {
  title: string;
  date: string;
  href: string;
  cover?: string | StaticImageData;
}

interface BlogSectionProps {
  title?: string;
  posts: BlogPostProps[];
  allPostsHref?: string;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

interface HeroPageProps {
  coverImage?: string | StaticImageData;
  name?: string;
  title?: string;
  location?: string;
  status?: string;
  email?: string;
  socials?: SocialLink[];
  onResumeClick?: () => void;
}

/* -------------------------------------------------------------------------- */
/*  Shared building blocks                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Every section opens the same way: a small monospace eyebrow (the one
 * "developer" signature carried through the page), a title, and an
 * optional supporting line. Keeping this in one place keeps section
 * rhythm consistent without repeating markup.
 */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 space-y-2">
      <p className="font-mono text-xs tracking-wide text-primary">
        // {eyebrow}
      </p>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero / identity                                                          */
/* -------------------------------------------------------------------------- */

function HeroPage({
  status = "Disponible pour de nouvelles opportunités",
  coverImage = CoverImage,
  name = "Brayann RAHARIMANANA",
  poste = "Développeur Web Full Stack",
  location = "Toliara, Madagascar",
  email = "brayjuanico@gmail.com",
  phone = "+261 32 45 960 46",
  socials = [
    {
      label: "GitHub",
      href: "https://github.com/braharim",
      icon: <GitHubIcon />,
    },
  ],
  onResumeClick = () => {},
}: HeroPageProps) {
  return (
    <section className="mt-0 md:mt-16">
      <div className="flex items-start flex-col md:flex-row gap-2">
        <div className=" hidden md:block h-52 w-62 overflow-hidden border-4 border-secondary bg-linear-to-tl from-white to-black/25 dark:to-background relative">
          <Image
            src={coverImage}
            alt={`Profile image`}
            height={200}
            width={300}
            loading="eager"
            className="object-cover mt-3"
          />
        </div>
        <div className="relative block md:hidden h-54 md:h-64 w-full overflow-hidden bg-linear-to-tl from-white to-background/25 dark:to-background">
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
        </div>
        <div className="space-y-4 md:pt-0 p-6 w-full">
          <Badge variant="outline">
            <Square className="mr-1 size-4" fill="currentColor" stroke="none" />
            <span
              className="truncate
              "
            >
              {status}
            </span>
          </Badge>
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="flex items-center flex-wrap gap-2">
            <Badge variant="outline">
              <Code className="mr-1 size-4" />
              {poste}
            </Badge>
            <Badge variant="outline">
              <MapPin className="mr-1 size-4" />
              {location}
            </Badge>
            <Badge variant="outline">
              <Mail className="mr-1 size-4" />
              {email}
            </Badge>
            <Badge variant="outline">
              <Phone className="mr-1 size-4" />
              {phone}
            </Badge>
          </div>
          <Button
            onClick={onResumeClick}
            variant="default"
            className="max-md:w-full mt-2"
          >
            <File className="w-4 h-4 mr-1" />
            Télécharger le CV
          </Button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  About                                                                     */
/* -------------------------------------------------------------------------- */

function AboutSection({ points }: AboutSectionProps) {
  if (points.length === 0) return null;

  return (
    <section className="px-6 py-16 md:px-0">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="qui suis-je" title="À propos" />
        <ul className="space-y-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-foreground">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
              />
              <span className="leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Stack                                                                     */
/* -------------------------------------------------------------------------- */

function StackSection({ title = "Stack", skills }: StackSectionProps) {
  if (skills.length === 0) return null;

  return (
    <section className="px-6 py-16 md:px-0">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="outils du quotidien" title={title} />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="outline" className="font-mono text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Experience                                                                */
/* -------------------------------------------------------------------------- */

function ExperienceSection({
  title = "Expérience",
  items,
}: ExperienceSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="parcours" title={title} />
        <div className="divide-y divide-border">
          {items.map((item) => (
            <div
              key={`${item.company}-${item.role}`}
              className="flex flex-col gap-2 py-6 first:pt-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 shrink-0 text-primary" />
                  <h3 className="font-semibold text-foreground">
                    {item.role}
                    <span className="font-normal text-muted-foreground">
                      {" "}
                      · {item.company}
                    </span>
                  </h3>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </div>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-6">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Projects                                                                  */
/* -------------------------------------------------------------------------- */

function ProjectCard({
  title,
  description,
  tags = [],
  link,
  github,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={
        featured ? "border-primary/40 bg-inherit shadow-sm" : "bg-inherit"
      }
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          {featured && (
            <Badge variant="outline" className="text-xs font-normal">
              À la une
            </Badge>
          )}
        </div>
        <CardDescription className="leading-relaxed line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>

      {tags.length > 0 && (
        <CardContent className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </CardContent>
      )}

      {(link || github) && (
        <div className="flex gap-2 px-6">
          {link && (
            <Button
              size="sm"
              variant="outline"
              nativeButton={false}
              render={
                <Link href={link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Voir le site
                </Link>
              }
            />
          )}
          {github && (
            <Button
              size="sm"
              variant="outline"
              nativeButton={false}
              render={
                <Link href={github} target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                  GitHub
                </Link>
              }
            />
          )}
        </div>
      )}
    </Card>
  );
}

function ProjectsSection({
  title = "Projets",
  description,
  projects,
}: ProjectsSectionProps) {
  if (projects.length === 0) return null;

  return (
    <section className="px-6 py-16 md:px-0">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="ce que j'ai construit"
          title={title}
          subtitle={description}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              featured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Formation / certificates                                                  */
/* -------------------------------------------------------------------------- */

function CertificateCard({
  title,
  issuer,
  date,
  icon,
  skills = [],
}: CertificateCardProps) {
  return (
    <div className="flex flex-col gap-4 py-6 first:pt-0 sm:flex-row sm:gap-8">
      <div className="flex shrink-0 items-start gap-2 font-mono text-sm text-muted-foreground sm:w-40">
        <Calendar className="h-4 w-4 shrink-0" />
        <span>{date}</span>
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{issuer}</p>
          </div>
          {icon}
        </div>

        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function AcademicSection({
  title = "Formation & Certifications",
  subtitle,
  certificates,
}: AcademicSectionProps) {
  if (certificates.length === 0) return null;

  return (
    <section className="px-6 py-16 md:px-0">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="formation continue"
          title={title}
          subtitle={subtitle}
        />
        <div className="divide-y divide-border">
          {certificates.map((cert) => (
            <CertificateCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Blog                                                                      */
/* -------------------------------------------------------------------------- */

function BlogSection({
  title = "Blog",
  posts,
  allPostsHref,
}: BlogSectionProps) {
  if (posts.length === 0) return null;

  return (
    <section className="px-6 py-16 md:px-0">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="derniers articles" title={title} />
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="group block overflow-hidden rounded-lg border border-border"
            >
              {post.cover && (
                <div className="relative aspect-video w-full overflow-hidden bg-accent">
                  <Image
                    src={post.cover}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <div className="space-y-1 p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {allPostsHref && (
          <div className="mt-6">
            <Button
              variant="outline"
              nativeButton={false}
              render={
                <Link href={allPostsHref}>
                  <Newspaper className="mr-2 h-4 w-4" />
                  Tous les articles
                </Link>
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                      */
/*  New sections (experience, brands, blog) start empty on purpose — fill    */
/*  them in with real information and the section will appear automatically. */
/* -------------------------------------------------------------------------- */

const aboutPoints: string[] = [
  "Développeur Full Stack avec plus de 5 ans d'expérience, du frontend au déploiement.",
  "Je conçois des applications web modernes, performantes et centrées sur l'expérience utilisateur.",
  "Actuellement disponible pour des missions freelance et de nouvelles opportunités.",
];

const stackSkills: string[] = [
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
];

// Fill in with real roles to have the Experience section appear, e.g.:
// { role: "Développeur Front-End", company: "Nom de l'entreprise", period: "01.2022 – 12.2023", tags: ["React", "TypeScript"] }
const experience: ExperienceItemProps[] = [];

const projects: ProjectCardProps[] = [
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
    // github: "https://github.com/braharim/snapishot",
  },
];

const certificates: CertificateCardProps[] = [
  {
    title: "Master 1 - Informatique Générale (IG)",
    issuer:
      "E.N.I - École Nationale d'Informatique, Fianarantsoa (centre de Toliara)",
    date: "En cours",
    icon: <GraduationCap className="h-5 w-5 shrink-0 text-primary" />,
    skills: ["Génie logiciel", "IA", "Bases de données", "Réseaux"],
  },
  {
    title: "Développeur React Native",
    issuer: "Udemy",
    date: "2023",
    icon: <Award className="h-5 w-5 shrink-0 text-primary" />,
    skills: ["React Native", "Mobile"],
  },
  {
    title: "Designer UX/UI",
    issuer: "SAYNA",
    date: "2023",
    icon: <Award className="h-5 w-5 shrink-0 text-primary" />,
    skills: ["UX Design", "UI Design", "Figma"],
  },
  {
    title: "BACC Générale",
    issuer: "Lycee CPE - Toliara",
    date: "2021",
    icon: <GraduationCap className="h-5 w-5 shrink-0 text-primary" />,
    skills: ["Serie D"],
  },
];

// Fill in with real posts to have the Blog section appear, e.g.:
// { title: "...", date: "25.07.2026", href: "/blog/mon-article" }
const blogPosts: BlogPostProps[] = [];

const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/braharim",
    icon: <GitHubIcon />,
  },
  // Add real handles to surface them next to the contact buttons, e.g.:
  // { label: "X", href: "https://x.com/...", icon: <Twitter className="h-4 w-4" /> },
  // { label: "YouTube", href: "https://youtube.com/@...", icon: <Youtube className="h-4 w-4" /> },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  return (
    <div>
      <HeroPage socials={socials} />
      <AboutSection points={aboutPoints} />
      <StackSection skills={stackSkills} />
      <ExperienceSection items={experience} />
      <ProjectsSection
        title="Projets à la une"
        description="Une sélection de projets récents, de la fintech à l'artisanat en passant par des outils open source."
        projects={projects}
      />
      <AcademicSection
        title="Formation & Certifications"
        subtitle="Apprentissage continu et développement professionnel"
        certificates={certificates}
      />
      <BlogSection posts={blogPosts} />
    </div>
  );
}
