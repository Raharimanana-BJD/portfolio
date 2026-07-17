import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  link?: string;
  github?: string;
  featured?: boolean;
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

interface ProjectsSectionProps {
  title?: string;
  descriptions?: string;
  projects: ProjectCardProps[];
}

export default function ProjectsSection({
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
