import { Check, Code, File, Mail, MapPin, Share2 } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { CoverImage, ProfileImage } from "../../public";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

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

export default function HeroPage({
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
      <div className="relative h-54 w-full overflow-hidden bg-linear-to-tl from-white to-black/25 md:h-64 dark:to-black">
        {/* L'image de couverture est placée de manière absolue tout à droite */}
        {coverImage && (
          <div className="relative top-0 left-1/2 aspect-208/200 h-full max-sm:left-1/4">
            <Image
              src={coverImage}
              alt="Cover image"
              width={200}
              height={300}
              priority
              loading="eager"
              className="max-md:-bottom-8 absolute right-0 bottom-0"
            />
          </div>
        )}

        {/* Badge dynamique "Available for work" */}
        <Badge
          variant="outline"
          className="absolute top-4 left-6 z-20 border-foreground md:left-12"
        >
          <Check className="mr-1 h-3 w-3" />
          <span className="hidden md:block">{status}</span>
          <span className="block md:hidden">Disponible</span>
        </Badge>
      </div>

      {/* Reste du profil */}
      <div className="px-0 pt-20 md:px-6">
        <div className="-mt-16 relative z-10 mb-6 flex flex-col gap-4 md:flex-row md:items-end">
          {/* Avatar circulaire avec contour épais */}
          <div className="relative hidden size-32 overflow-hidden rounded-full border-4 border-border bg-accent shadow-xl">
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
                <h1 className="font-bold text-3xl">{name}</h1>
                <Button
                  size="sm"
                  variant="outline"
                  className={"flex max-md:mr-6 max-md:hidden"}
                >
                  <Share2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Partager</span>
                </Button>
              </div>
              <div className="mt-1 space-x-2">
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
            <p className="mt-2 mr-6 text-lg text-muted-foreground">{bio}</p>
          </div>
          {skills.length > 0 && (
            <div className="mr-6 flex flex-wrap gap-2 pt-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="outline" className="flex-auto">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
          <div className="mr-6 flex flex-col gap-3 pt-4 sm:flex-row">
            <Button
              nativeButton={false}
              render={
                <Link
                  className="flex items-center"
                  href={"mailto:brayjuanico@gmail.com"}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  brayjuanico@gmail.com
                </Link>
              }
            />
            <Button onClick={onResumeClick} variant="outline">
              <File className="mr-2 h-4 w-4" />
              Télécharger le CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
