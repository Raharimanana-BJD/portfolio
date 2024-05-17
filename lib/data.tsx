import StockMediaApp from "@/assets/project-1.png";
import RecipeApp from "@/assets/project-2.png";
import GithubUserFinder from "@/assets/project-3.png";
import LiveWeatherApp from "@/assets/project-4.png";
import NetflixClone from "@/assets/project-5.png";
import TravelWebsite from "@/assets/project-6.png";

export const urlProfile = "/profile.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Project",
    hash: "#project",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectData = [
  {
    title: "Pixstock",
    description: "Pixstock - Stock Media App",
    tags: ["html", "css", "javaScript"],
    imageUrl: StockMediaApp,
    alt: "StockMediaApp",
  },
  {
    title: "Cook.io",
    description: "GitFinder - Github User Finder",
    tags: ["html", "css", "javaScript"],
    imageUrl: RecipeApp,
    alt: "Recipe App",
  },
  {
    title: "GitFinder",
    description: "Weatherio - Live Weather App",
    tags: ["html", "css", "javaScript"],
    imageUrl: GithubUserFinder,
    alt: "Github User Finder",
  },
  {
    title: "Weatherio",
    description: "Weatherio - Live Weather App",
    tags: ["html", "css", "javaScript"],
    imageUrl: LiveWeatherApp,
    alt: "Live Weather App",
  },
  {
    title: "Tvflix",
    description: "Tvflix - Netflix Clone 2.0",
    tags: ["html", "css", "javaScript"],
    imageUrl: NetflixClone,
    alt: "Netflix Clone 2.0",
  },
  {
    title: "Travelia",
    description: "Travelia - Travel Website",
    tags: ["html", "css", "javaScript"],
    imageUrl: TravelWebsite,
    alt: "Travel Website",
  },
] as const;
