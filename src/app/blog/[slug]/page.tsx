import rehypeShiki from "@shikijs/rehype";
import {
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { PluggableList } from "unified";
import { MdxImage } from "@/components/mdx/mdx-image";
import { Pre } from "@/components/mdx/pre";
import { Badge } from "@/components/ui/badge";
import { getPostBySlug, getPosts, getRecentPosts } from "@/lib/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

// Configuration de Shiki avec gestion Dual Themes (Light/Dark) et Transformers utiles
const mdxOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypeShiki,
        {
          themes: {
            light: "github-light",
            dark: "github-dark",
          },
          defaultColor: false,
          transformers: [
            transformerNotationHighlight(),
            transformerNotationWordHighlight(),
          ],
        },
      ] satisfies PluggableList[number],
    ],
  },
};

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const recentPosts = await getRecentPosts(post.slug, 3);

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to blog
      </Link>

      <article className="mt-8">
        <header className="mb-10">
          <h1 className="font-bold text-4xl text-foreground leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="size-4" />
            <span>
              {new Intl.DateTimeFormat("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }).format(post.date)}
            </span>
          </div>
          {post.category.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {post.category.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <div
          className="
            prose prose-neutral dark:prose-invert max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight prose-headings:scroll-mt-24
            prose-h2:mt-12 prose-h2:text-2xl
            prose-h3:mt-8 prose-h3:text-xl
            prose-p:leading-relaxed
            prose-a:text-primary prose-a:underline-offset-4
            prose-code:rounded prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5
            prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-transparent prose-pre:p-0
            prose-img:rounded-lg
            prose-blockquote:border-l-primary prose-blockquote:font-normal prose-blockquote:not-italic
          "
        >
          <MDXRemote
            source={post.content}
            options={mdxOptions}
            components={{ pre: Pre, img: MdxImage }}
          />
        </div>
      </article>

      {recentPosts.length > 0 && (
        <section className="mt-16 border-t border-border pt-10">
          <h2 className="text-xl font-semibold text-foreground">
            Recent articles
          </h2>
          <div className="mt-6 space-y-4">
            {recentPosts.map((recent) => (
              <Link
                key={recent.slug}
                href={`/blog/${recent.slug}`}
                className="block rounded-lg border border-border p-4 transition-colors hover:bg-accent/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-medium text-foreground">
                      {recent.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                      {recent.description}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {new Intl.DateTimeFormat("fr-FR", {
                      day: "numeric",
                      month: "short",
                    }).format(recent.date)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
