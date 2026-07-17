import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Link from "next/link";
import type { SearchParams } from "nuqs/server";

import { getPosts } from "@/lib/posts";
import { searchParamsCache } from "@/lib/search-params";
import { SearchInput } from "./_components/search-input";
import { CategoryFilter } from "./_components/category-filter";
import { PerPageSelect } from "./_components/per-page-select";
import { PostsPagination } from "./_components/posts-pagination";

interface PostCardProps {
  slug: string;
  title: string;
  date: Date;
  description: string;
  category?: string[];
}

function PostCard({ slug, title, date, description, category }: PostCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="block rounded-lg border border-border p-6 transition-colors hover:bg-accent/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
          <p className="mb-4 mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="size-4" />
          <span>
            {new Intl.DateTimeFormat("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }).format(date)}
          </span>
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

interface PageBlogProps {
  searchParams: Promise<SearchParams>;
}

export default async function PageBlog({ searchParams }: PageBlogProps) {
  const { q, category, page, perPage } =
    await searchParamsCache.parse(searchParams);

  const allPosts = await getPosts();

  const allCategories = Array.from(
    new Set(allPosts.flatMap((post) => post.category ?? [])),
  ).sort();

  const filtered = allPosts.filter((post) => {
    const matchesQuery =
      q === "" ||
      post.title.toLowerCase().includes(q.toLowerCase()) ||
      post.description.toLowerCase().includes(q.toLowerCase());

    const matchesCategory =
      category.length === 0 || category.some((c) => post.category?.includes(c));

    return matchesQuery && matchesCategory;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage,
  );

  return (
    <section className="pl-0 max-md:px-12 space-y-8">
      <div className="py-12">
        <h1 className="text-3xl font-bold leading-relaxed text-foreground">
          Blogs
        </h1>
        <p className="text-muted-foreground">
          Writing about what I built, what broke, and occasionally both at once.
        </p>
        <div className="mt-8 flex items-start justify-between gap-4 max-md:flex-col max-md:items-center">
          <SearchInput />
          <div className="flex items-center gap-3">
            <CategoryFilter categories={allCategories} />
            <PerPageSelect />
          </div>
        </div>
      </div>

      <div className="space-y-8 mb-8">
        {paginated.length === 0 ? (
          <p className="text-muted-foreground">No posts found.</p>
        ) : (
          paginated.map((post, index) => <PostCard key={index} {...post} />)
        )}
      </div>

      <PostsPagination totalPages={totalPages} />
    </section>
  );
}
