import {
  createSearchParamsCache,
  parseAsString,
  parseAsArrayOf,
  parseAsInteger,
} from "nuqs/server";

export const postsSearchParams = {
  q: parseAsString.withDefault(""),
  category: parseAsArrayOf(parseAsString).withDefault([]),
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(10),
};

export const searchParamsCache = createSearchParamsCache(postsSearchParams);
