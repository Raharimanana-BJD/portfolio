export const BLOG_CONFIG = {
  postsPerPage: 10,
  searchDebounceMs: 300,
} as const;

export const CATEGORIES = ["Dev web", "DevOps", "Resource"] as const;
export type Category = (typeof CATEGORIES)[number];

export const categorySlug = (category: Category): string => {
  return category.toLowerCase().replace(/\s+/g, "-");
};

export const slugToCategory = (slug: string): Category | null => {
  const map: Record<string, Category> = {
    "dev-web": "Dev web",
    devops: "DevOps",
    resource: "Resource",
  };
  return map[slug] || null;
};
