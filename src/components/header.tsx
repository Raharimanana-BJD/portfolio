"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GitHubIcon from "./icon/github-icon";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 w-full bg-inherit">
      <div className="container flex items-center justify-between px-0 py-4 max-md:px-6">
        <Link href={"/"} className="flex items-center justify-center gap-2">
          <span className="bg-black px-2 py-1 font-semibold text-sm text-white">
            Br
          </span>
          <h1 className="hidden font-semibold text-lg text-primary md:block">
            Braharim
          </h1>
        </Link>

        <div className="flex items-center justify-center gap-2 md:gap-4">
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
