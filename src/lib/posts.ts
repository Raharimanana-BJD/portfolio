import fs from "fs/promises";
import path from "path";
import { z } from "zod";
import matter from "gray-matter";

const postSchema = z.object({
  title: z.string().min(24).max(45),
  description: z.string().min(65),
  date: z.coerce.date(),
  published: z.boolean().optional().default(false),
  category: z.array(z.string()).optional().default([]),
});

export type Post = z.infer<typeof postSchema> & {
  slug: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "contents");

const stripPrefix = (fileName: string) =>
  fileName.replace(/^\d+-/, "").replace(/\.mdx$/, "");

export const getPosts = async (): Promise<Post[]> => {
  const files = await fs.readdir(postsDirectory);
  const fileNames = files.filter((f) => f.endsWith(".mdx"));

  // détecte les collisions de slug avant même de parser le contenu
  const slugMap = new Map<string, string>();
  for (const fileName of fileNames) {
    const slug = stripPrefix(fileName);
    if (slugMap.has(slug)) {
      console.warn(
        `Slug collision: "${fileName}" and "${slugMap.get(slug)}" both resolve to "${slug}". Only one will be reachable via getPostBySlug.`,
      );
    }
    slugMap.set(slug, fileName);
  }

  const results = await Promise.all(
    fileNames.map(async (fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContent = await fs.readFile(fullPath, "utf-8");
      const { data, content } = matter(fileContent);

      const safeData = postSchema.safeParse(data);

      if (!safeData.success) {
        console.error(`Error parsing file: ${fileName}`);
        safeData.error.issues.forEach((issue) => {
          console.error(`  - ${issue.path.join("->")}: ${issue.message}`);
        });
        return null;
      }

      if (!safeData.data.published && process.env.NODE_ENV !== "development") {
        return null;
      }

      return {
        ...safeData.data,
        slug: stripPrefix(fileName),
        content,
      };
    }),
  );

  return results
    .filter((post): post is Post => post !== null)
    .sort((a, b) => b.date.getTime() - a.date.getTime());
};

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const files = await fs.readdir(postsDirectory);

  const fileName = files.find(
    (f) => f.endsWith(".mdx") && stripPrefix(f) === slug,
  );

  if (!fileName) return null;

  const fullPath = path.join(postsDirectory, fileName);

  try {
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const { data, content } = matter(fileContent);
    const safeData = postSchema.safeParse(data);

    if (!safeData.success) {
      console.error(`Error parsing file: ${fileName}`);
      return null;
    }

    if (!safeData.data.published && process.env.NODE_ENV !== "development") {
      return null;
    }

    return { ...safeData.data, slug, content };
  } catch {
    return null; // fichier introuvable → 404, pas un crash
  }
};

export const getRecentPosts = async (
  excludeSlug?: string,
  limit = 3,
): Promise<Post[]> => {
  const posts = await getPosts();
  return posts.filter((post) => post.slug !== excludeSlug).slice(0, limit); // déjà triés par date dans getPosts, pas besoin de re-trier
};
