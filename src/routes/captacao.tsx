import { createFileRoute } from "@tanstack/react-router";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";

export const Route = createFileRoute("/captacao")({
  component: () => <LeadCaptureForm />,
  head: () => ({
    meta: [
      { title: "Captação de Leads — Eliza Design | Brasil Promotion Day" },
      { name: "description", content: "Formulário de captação de leads do evento Brasil Promotion Day." },
    ],
  }),
});