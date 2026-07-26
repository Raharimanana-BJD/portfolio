"use client";

import { SearchIcon } from "lucide-react";
import { debounce, parseAsInteger, parseAsString, useQueryStates } from "nuqs";
import { useTransition } from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd } from "@/components/ui/kbd";

export function SearchInput() {
  const [_isPending, startTransition] = useTransition();
  const [{ q }, setParams] = useQueryStates(
    { q: parseAsString.withDefault(""), page: parseAsInteger.withDefault(1) },
    { shallow: false, startTransition, limitUrlUpdates: debounce(300) },
  );

  return (
    <div className="relative w-full flex-1">
      <InputGroup>
        <InputGroupInput
          name="search"
          placeholder="Search posts"
          value={q}
          onChange={(e) => setParams({ q: e.target.value, page: 1 })}
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
