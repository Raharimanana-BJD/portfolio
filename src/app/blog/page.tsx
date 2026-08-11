import type { Metadata } from "next";
import type { SearchParams } from "nuqs/server";

import { PostCard } from "@/components/post-card";
import { getPosts } from "@/lib/posts";
import { searchParamsCache } from "@/lib/search-params";
import { CategoryFilter } from "./_components/category-filter";
import { PerPageSelect } from "./_components/per-page-select";
import { PostsPagination } from "./_components/posts-pagination";
import { SearchInput } from "./_components/search-input";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles techniques sur le développement web, Docker, Linux et les technologies modernes. Guides pratiques et retours d'expérience.",
  openGraph: {
    title: "Blog - Braharim",
    description:
      "Articles techniques sur le développement web, Docker, Linux et les technologies modernes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Braharim",
    description:
      "Articles techniques sur le développement web, Docker, Linux et les technologies modernes.",
  },
};

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
    <section className="space-y-8 pl-0 max-md:px-12">
      <div className="py-12">
        <h1 className="font-bold text-3xl text-foreground leading-relaxed">
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

      <div className="mb-8 space-y-8">
        {paginated.length === 0 ? (
          <p className="text-muted-foreground">No posts found.</p>
        ) : (
          paginated.map((post) => <PostCard key={post.slug} {...post} />)
        )}
      </div>

      <PostsPagination totalPages={totalPages} />
    </section>
  );
}
