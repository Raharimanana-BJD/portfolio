import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getPersonSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Braharim - Développeur Full Stack",
    template: "%s | Braharim",
  },
  description:
    "Portfolio et blog de Braharim, développeur full stack passionné par les technologies web modernes.",
  applicationName: "Braharim Portfolio",
  authors: [{ name: "Braharim" }],
  generator: "Next.js",
  keywords: [
    "développeur",
    "full stack",
    "web",
    "react",
    "next.js",
    "typescript",
    "portfolio",
    "blog",
  ],
  creator: "Braharim",
  publisher: "Braharim",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Braharim",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://braharim.vercel.app",
    title: "Braharim - Développeur Full Stack",
    description:
      "Portfolio et blog de Braharim, développeur full stack passionné par les technologies web modernes.",
    siteName: "Braharim",
  },
  twitter: {
    card: "summary_large_image",
    title: "Braharim - Développeur Full Stack",
    description:
      "Portfolio et blog de Braharim, développeur full stack passionné par les technologies web modernes.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "mx-auto h-full max-w-2xl font-sans antialiased",
        inter.variable,
      )}
      suppressHydrationWarning
    >
      <head>
        <meta name="apple-mobile-web-app-title" content="Braharim" />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD, "<" escaped below
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonSchema()).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NuqsAdapter>
            <TooltipProvider>
              <Header />
              {children}
              <footer className="py-6">
                <p className="text-center text-muted-foreground text-sm">
                  &copy; Braharim
                </p>
              </footer>
            </TooltipProvider>
            <Toaster richColors position="bottom-right" />
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
