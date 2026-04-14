import { createFileRoute } from "@tanstack/react-router";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ficha de Captação - Eliza Design | Brasil Promotion Day" },
      { name: "description", content: "Formulário de captação de leads para o evento Brasil Promotion Day - Eliza Acessórios & Design" },
    ],
  }),
});

function Index() {
  return <LeadCaptureForm />;
}
