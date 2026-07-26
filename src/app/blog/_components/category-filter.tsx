"use client";

import { Tag } from "lucide-react";
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryStates,
} from "nuqs";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface CategoryFilterProps {
  categories: string[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const [, startTransition] = useTransition();
  const [{ category }, setParams] = useQueryStates(
    {
      category: parseAsArrayOf(parseAsString).withDefault([]),
      page: parseAsInteger.withDefault(1),
    },
    { shallow: false, startTransition },
  );

  if (categories.length === 0) return null;

  function toggle(value: string, checked: boolean) {
    const next = checked
      ? [...category, value]
      : category.filter((c) => c !== value);
    setParams({ category: next.length > 0 ? next : null, page: 1 });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline">
            <Tag />
            Category
            {category.length > 0 && ` (${category.length})`}
          </Button>
        }
      />
      <DropdownMenuContent className="w-48">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Category</DropdownMenuLabel>
          {categories.map((cat) => (
            <DropdownMenuCheckboxItem
              key={cat}
              checked={category.includes(cat)}
              onCheckedChange={(checked) => toggle(cat, checked)}
            >
              {cat}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
