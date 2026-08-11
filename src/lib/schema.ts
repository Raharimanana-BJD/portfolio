import type { Person, WithContext } from "schema-dts";

export function getPersonSchema(): WithContext<Person> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Brayann RAHARIMANANA",
    alternateName: "Braharim",
    url: "https://braharim.dev",
    image: "https://braharim.dev/pdp.png",
    jobTitle: "Développeur Web Full Stack",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toliara",
      addressCountry: "MG",
    },
    email: "brayjuanico@gmail.com",
    sameAs: ["https://github.com/braharim"],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Web Development",
      "Full Stack Development",
    ],
  };
}
