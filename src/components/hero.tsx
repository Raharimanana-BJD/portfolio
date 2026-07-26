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
