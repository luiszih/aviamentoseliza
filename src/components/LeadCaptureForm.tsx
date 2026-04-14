import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { UserPlus, Send, RotateCcw, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface LeadData {
  nome: string;
  empresa: string;
  cargo: string;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  segmento: string;
  interesse: string[];
  quantidade: string;
  prazo: string;
  observacoes: string;
}

const initialLead: LeadData = {
  nome: "",
  empresa: "",
  cargo: "",
  email: "",
  telefone: "",
  cidade: "",
  estado: "",
  segmento: "",
  interesse: [],
  quantidade: "",
  prazo: "",
  observacoes: "",
};

const interesses = [
  "Private Label",
  "Brindes Corporativos",
  "Acessórios Personalizados",
  "Chaveiros",
  "Bijuterias",
  "Coleções Exclusivas",
  "Outros",
];

const segmentos = [
  "Moda e Vestuário",
  "Cosméticos e Beleza",
  "Varejo",
  "E-commerce",
  "Eventos e Promoções",
  "Brindes Promocionais",
  "Indústria",
  "Outro",
];

const estados = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

export function LeadCaptureForm() {
  const [lead, setLead] = useState<LeadData>(initialLead);
  const [leadCount, setLeadCount] = useState(0);
  const [saving, setSaving] = useState(false);

  const updateField = (field: keyof LeadData, value: string) => {
    setLead((prev) => ({ ...prev, [field]: value }));
  };

  const toggleInteresse = (item: string) => {
    setLead((prev) => ({
      ...prev,
      interesse: prev.interesse.includes(item)
        ? prev.interesse.filter((i) => i !== item)
        : [...prev.interesse, item],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.nome || !lead.empresa || !lead.telefone) {
      toast.error("Preencha os campos obrigatórios: Nome, Empresa e Telefone");
      return;
    }

    setSaving(true);
    try {
      const { error } = await supabase.from("leads").insert({
        nome: lead.nome,
        empresa: lead.empresa,
        cargo: lead.cargo || null,
        email: lead.email || null,
        telefone: lead.telefone,
        cidade: lead.cidade || null,
        estado: lead.estado || null,
        segmento: lead.segmento || null,
        interesse: lead.interesse.length > 0 ? lead.interesse : null,
        quantidade: lead.quantidade || null,
        prazo: lead.prazo || null,
        observacoes: lead.observacoes || null,
      });

      if (error) throw error;

      setLeadCount((prev) => prev + 1);
      setLead(initialLead);
      toast.success(`Lead "${lead.nome}" salvo com sucesso!`, {
        description: `Total nesta sessão: ${leadCount + 1}`,
      });
    } catch (err) {
      console.error(err);
      toast.error("Erro ao salvar lead. Tente novamente.");
    } finally {
      setSaving(false);
    }
  };

  const handleReset = () => {
    setLead(initialLead);
  };

  return (
    <div className="min-h-screen bg-warm-bg">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-4 py-6 text-center">
          <div className="mb-2 font-display text-sm font-medium tracking-[0.3em] uppercase text-copper">
            Eliza Acessórios & Design
          </div>
          <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-copper-dark">
            <span className="inline-block h-2 w-2 rounded-full bg-copper animate-pulse" />
            Brasil Promotion Day
          </div>
        </div>
      </header>

      {/* Counter */}
      {leadCount > 0 && (
        <div className="mx-auto max-w-3xl px-4 pt-4">
          <div className="flex items-center justify-between rounded-lg bg-copper/10 px-4 py-2.5 text-sm">
            <span className="font-medium text-copper-dark">
              <UserPlus className="mr-2 inline-block h-4 w-4" />
              Leads captados nesta sessão
            </span>
            <span className="rounded-full bg-copper px-3 py-0.5 text-xs font-bold text-primary-foreground">
              {leadCount}
            </span>
          </div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="mx-auto max-w-3xl px-4 py-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
          {/* Dados de Contato */}
          <SectionTitle>Dados de Contato</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <FieldWrapper label="Nome Completo *" htmlFor="nome">
              <Input
                id="nome"
                value={lead.nome}
                onChange={(e) => updateField("nome", e.target.value)}
                placeholder="Nome do contato"
                className="bg-warm-surface"
              />
            </FieldWrapper>
            <FieldWrapper label="Empresa *" htmlFor="empresa">
              <Input
                id="empresa"
                value={lead.empresa}
                onChange={(e) => updateField("empresa", e.target.value)}
                placeholder="Nome da empresa"
                className="bg-warm-surface"
              />
            </FieldWrapper>
            <FieldWrapper label="Cargo" htmlFor="cargo">
              <Input
                id="cargo"
                value={lead.cargo}
                onChange={(e) => updateField("cargo", e.target.value)}
                placeholder="Cargo / Função"
                className="bg-warm-surface"
              />
            </FieldWrapper>
            <FieldWrapper label="E-mail" htmlFor="email">
              <Input
                id="email"
                type="email"
                value={lead.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder="email@empresa.com"
                className="bg-warm-surface"
              />
            </FieldWrapper>
            <FieldWrapper label="Telefone / WhatsApp *" htmlFor="telefone">
              <Input
                id="telefone"
                value={lead.telefone}
                onChange={(e) => updateField("telefone", e.target.value)}
                placeholder="(00) 00000-0000"
                className="bg-warm-surface"
              />
            </FieldWrapper>
            <div className="grid grid-cols-2 gap-3">
              <FieldWrapper label="Cidade" htmlFor="cidade">
                <Input
                  id="cidade"
                  value={lead.cidade}
                  onChange={(e) => updateField("cidade", e.target.value)}
                  placeholder="Cidade"
                  className="bg-warm-surface"
                />
              </FieldWrapper>
              <FieldWrapper label="UF" htmlFor="estado">
                <Select value={lead.estado} onValueChange={(v) => updateField("estado", v)}>
                  <SelectTrigger className="bg-warm-surface">
                    <SelectValue placeholder="UF" />
                  </SelectTrigger>
                  <SelectContent>
                    {estados.map((uf) => (
                      <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FieldWrapper>
            </div>
          </div>

          {/* Segmento */}
          <SectionTitle className="mt-8">Segmento de Atuação</SectionTitle>
          <Select value={lead.segmento} onValueChange={(v) => updateField("segmento", v)}>
            <SelectTrigger className="bg-warm-surface">
              <SelectValue placeholder="Selecione o segmento" />
            </SelectTrigger>
            <SelectContent>
              {segmentos.map((s) => (
                <SelectItem key={s} value={s}>{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          {/* Interesses */}
          <SectionTitle className="mt-8">Interesse em Produtos</SectionTitle>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {interesses.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-border bg-warm-surface px-3 py-2.5 text-sm transition-colors hover:border-copper/40 has-[button[data-state=checked]]:border-copper has-[button[data-state=checked]]:bg-copper/5"
              >
                <Checkbox
                  checked={lead.interesse.includes(item)}
                  onCheckedChange={() => toggleInteresse(item)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>

          {/* Detalhes do Projeto */}
          <SectionTitle className="mt-8">Detalhes do Projeto</SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            <FieldWrapper label="Quantidade Estimada" htmlFor="quantidade">
              <Input
                id="quantidade"
                value={lead.quantidade}
                onChange={(e) => updateField("quantidade", e.target.value)}
                placeholder="Ex: 500 peças"
                className="bg-warm-surface"
              />
            </FieldWrapper>
            <FieldWrapper label="Prazo Desejado" htmlFor="prazo">
              <Input
                id="prazo"
                value={lead.prazo}
                onChange={(e) => updateField("prazo", e.target.value)}
                placeholder="Ex: 30 dias"
                className="bg-warm-surface"
              />
            </FieldWrapper>
          </div>
          <div className="mt-4">
            <FieldWrapper label="Observações" htmlFor="obs">
              <Textarea
                id="obs"
                value={lead.observacoes}
                onChange={(e) => updateField("observacoes", e.target.value)}
                placeholder="Detalhes adicionais, necessidades específicas..."
                rows={3}
                className="bg-warm-surface resize-none"
              />
            </FieldWrapper>
          </div>

          {/* Actions */}
          <div className="mt-8 flex gap-3">
            <Button
              type="submit"
              disabled={saving}
              className="flex-1 bg-copper text-primary-foreground hover:bg-copper-dark"
              size="lg"
            >
              {saving ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              {saving ? "Salvando..." : "Salvar Lead"}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleReset}
              className="border-border text-muted-foreground hover:text-foreground"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Limpar
            </Button>
          </div>
        </div>
      </form>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-4 text-center text-xs text-muted-foreground">
        Eliza Acessórios & Design · Brasil Promotion Day · {new Date().getFullYear()}
      </footer>
    </div>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`mb-4 flex items-center gap-3 font-display text-lg font-semibold text-foreground ${className}`}>
      <span className="h-px flex-1 bg-border" />
      <span>{children}</span>
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}

function FieldWrapper({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="text-xs font-medium text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
