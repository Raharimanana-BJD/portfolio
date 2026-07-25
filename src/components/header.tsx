"use client";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GitHubIcon from "./icon/github-icon";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 w-full z-50 bg-inherit">
      <div className="container px-0 max-md:px-6 py-4 flex items-center justify-between">
        <Link href={"/"} className="flex items-center justify-center gap-2">
          <span className="bg-black text-white px-2 py-1 font-semibold text-sm">
            Br
          </span>
          <h1 className="text-primary hidden md:block text-lg font-semibold">
            Braharim
          </h1>
        </Link>

        <div className="flex gap-2 md:gap-4 items-center justify-center">
          {pathname === "/blog" ? (
            <Link href={"/"} className="text-primary">
              /Accueil
            </Link>
          ) : (
            <Link href={"/blog"} className="text-primary">
              /Blog
            </Link>
          )}
          <ThemeToggle variant={"link"} />
          <Button>
            <GitHubIcon />
            GitHub
          </Button>
        </div>
      </div>
    </header>
  );
};
