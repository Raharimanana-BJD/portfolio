import { Calendar } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  slug: string;
  title: string;
  date: Date;
  description: string;
  category?: string[];
}

export function PostCard({
  slug,
  title,
  date,
  description,
  category,
}: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block rounded-lg border border-border p-6 transition-colors hover:bg-accent/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-2xl text-foreground">{title}</h3>
          <p className="mt-2 mb-4 line-clamp-2 text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-muted-foreground text-sm">
          <Calendar className="size-4" />
          <span>{formatDate(date)}</span>
        </div>
      </div>

      {category && category.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {category.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </Link>
  );
}
