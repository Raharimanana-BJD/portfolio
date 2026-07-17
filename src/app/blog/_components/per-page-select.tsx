"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Rows3 } from "lucide-react";
import { useQueryStates, parseAsInteger } from "nuqs";
import { useTransition } from "react";

const OPTIONS = [5, 10, 20];

export function PerPageSelect() {
  const [, startTransition] = useTransition();
  const [{ perPage }, setParams] = useQueryStates(
    {
      perPage: parseAsInteger.withDefault(10),
      page: parseAsInteger.withDefault(1),
    },
    { shallow: false, startTransition },
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="outline">
            <Rows3 />
            {perPage} per page
          </Button>
        }
      />
      <DropdownMenuContent align="start" sideOffset={8} className="w-48">
        <div>Posts per page</div>
        <DropdownMenuRadioGroup
          value={String(perPage)}
          onValueChange={(value) =>
            setParams({ perPage: Number(value), page: 1 })
          }
        >
          {OPTIONS.map((n) => (
            <DropdownMenuRadioItem key={n} value={String(n)}>
              {n} per page
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
