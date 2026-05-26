import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Eliza Acessórios & Design — Fábrica premium há 30 anos" },
      { name: "description", content: "Aviamentos, brindes corporativos e bijuterias com acabamento de joalheria. Certificação FAMA e ABVTEX Ouro. Solicite seu orçamento." },
    ],
  }),
});

function Index() {
  return <LandingPage />;
}
