import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Eliza Acessórios & Design — Fábrica de acessórios premium há 30 anos" },
      { name: "description", content: "Aviamentos, brindes corporativos e bijuterias com qualidade de joalheria. Certificação FAMA e ABVTEX Ouro. Solicite seu orçamento." },
      { name: "author", content: "Eliza Design" },
      { property: "og:title", content: "Eliza Acessórios & Design — Fábrica de acessórios premium há 30 anos" },
      { property: "og:description", content: "Aviamentos, brindes corporativos e bijuterias com qualidade de joalheria. Certificação FAMA e ABVTEX Ouro. Solicite seu orçamento." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Eliza Acessórios & Design — Fábrica de acessórios premium há 30 anos" },
      { name: "twitter:description", content: "Aviamentos, brindes corporativos e bijuterias com qualidade de joalheria. Certificação FAMA e ABVTEX Ouro. Solicite seu orçamento." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78914486-df95-485f-bb15-22ad89a296b8/id-preview-eb250123--3ef45871-dd7d-4a3d-ae16-c49b37b83c65.lovable.app-1780011064319.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/78914486-df95-485f-bb15-22ad89a296b8/id-preview-eb250123--3ef45871-dd7d-4a3d-ae16-c49b37b83c65.lovable.app-1780011064319.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:ital,wght@0,100;0,300;0,400;0,600;0,800;1,300;1,400&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
