import { useState } from "react";
import {
  Award, ShieldCheck, Factory, Sparkles, Gem, Gift, ShoppingBag,
  ArrowRight, Check, MessageCircle, Mail, Instagram, MapPin,
  ChevronDown, Palette, FileText, CheckCircle2, Cog, Truck, ClipboardList,
  Scissors, Briefcase, Users, Footprints, Star,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5519995411832?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
const EMAIL = "mailto:contato@elizadesign.com.br";

// Brand utility classes via inline style for hard-coded brand hex
const beige = "#FFD7AC";
const caramel = "#C8946F";
const brown = "#8E5C37";
const brownDark = "#5a3820";
const offWhite = "#FAF6F1";
const black = "#0E0B08";

function Logo({ dark = false }: { dark?: boolean }) {
  const color = dark ? "#FFF" : brownDark;
  const accent = dark ? caramel : brown;
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full border"
        style={{ borderColor: accent, background: dark ? "transparent" : offWhite }}
      >
        <span className="font-extrabold text-xl leading-none" style={{ color }}>
          e<span style={{ color: accent }}>.</span>
        </span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wider uppercase" style={{ color }}>
          Eliza
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: accent }}>
          Acessórios & Design
        </div>
      </div>
    </div>
  );
}

function CredentialBar() {
  const items = [
    { icon: Award, label: "30 anos de mercado" },
    { icon: ShieldCheck, label: "Certificação FAMA" },
    { icon: Gem, label: "ABVTEX Ouro" },
    { icon: Factory, label: "Fábrica própria" },
  ];
  return (
    <section style={{ background: black, color: beige }} className="border-y" >
      <div className="mx-auto max-w-7xl px-4 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-center gap-2 text-sm md:text-base">
            <it.icon className="h-5 w-5" style={{ color: caramel }} />
            <span className="font-light tracking-wide">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `radial-gradient(1200px 600px at 80% -10%, ${caramel}33, transparent 60%), radial-gradient(900px 500px at 10% 110%, ${brown}55, transparent 60%), linear-gradient(135deg, ${black} 0%, #1a1310 60%, ${brownDark} 100%)`,
        color: offWhite,
      }}
    >
      {/* Subtle metallic noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,215,172,0.15) 0 1px, transparent 1px 6px)",
        }}
      />
      <header className="relative mx-auto max-w-7xl px-4 py-6 flex items-center justify-between">
        <Logo dark />
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: beige }}>
          <a href="#frentes" className="hover:opacity-80">Negócios</a>
          <a href="#diferenciais" className="hover:opacity-80">Diferenciais</a>
          <a href="#processo" className="hover:opacity-80">Processo</a>
          <a href="#faq" className="hover:opacity-80">FAQ</a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
          style={{ background: beige, color: brownDark }}
        >
          <MessageCircle className="h-4 w-4" /> Falar agora
        </a>
      </header>

      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-24 md:pt-16 md:pb-32 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-[0.25em] uppercase mb-6"
            style={{ borderColor: `${caramel}66`, color: beige }}
          >
            <Sparkles className="h-3.5 w-3.5" /> Private Label · Desde 1995
          </div>
          <h1
            className="font-extrabold leading-[1.05] text-4xl md:text-6xl lg:text-7xl"
            style={{ color: offWhite }}
          >
            <span className="block">30 anos transformando</span>
            <span className="block italic font-light" style={{ color: beige }}>
              metal em identidade
            </span>
            <span className="block">de marca.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg font-light" style={{ color: `${beige}cc` }}>
            Fábrica própria de acessórios metálicos personalizados sob demanda — aviamentos para moda,
            brindes corporativos e bijuterias com acabamento de joalheria, certificação{" "}
            <strong style={{ color: beige }}>FAMA</strong> e{" "}
            <strong style={{ color: beige }}>ABVTEX Ouro</strong>.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold shadow-lg transition-transform hover:scale-[1.02]"
              style={{ background: caramel, color: black, boxShadow: `0 20px 50px -20px ${caramel}` }}
            >
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#frentes"
              className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-base font-semibold"
              style={{ borderColor: `${beige}55`, color: beige }}
            >
              Ver linhas de produto
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs tracking-wider uppercase" style={{ color: `${beige}99` }}>
            <span className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: caramel }} /> Marcas licenciadas Disney</span>
            <span className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: caramel }} /> Inspeção peça a peça</span>
          </div>
        </div>

        {/* Decorative medallion */}
        <div className="md:col-span-5 relative hidden md:flex justify-center">
          <div className="relative">
            <div
              className="h-80 w-80 rounded-full"
              style={{
                background: `conic-gradient(from 210deg, ${caramel}, ${beige}, ${brown}, ${caramel})`,
                filter: "blur(2px)",
              }}
            />
            <div
              className="absolute inset-6 rounded-full flex items-center justify-center"
              style={{ background: black, border: `1px solid ${caramel}55` }}
            >
              <div className="text-center">
                <div className="font-extrabold text-7xl" style={{ color: beige }}>30</div>
                <div className="mt-1 text-xs tracking-[0.3em] uppercase" style={{ color: caramel }}>
                  Anos de Tradição
                </div>
              </div>
            </div>
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-[10px] tracking-[0.3em] uppercase"
              style={{ background: beige, color: brownDark }}
            >
              Fama · ABVTEX Ouro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Frentes() {
  const cards = [
    {
      icon: Scissors,
      title: "Aviamentos para Moda e Calçados",
      desc: "Pins, charms, fivelas, botões com banho premium, argolas e correntes para coleções autorais.",
      min: "Pedido mínimo: 500 unidades",
      prazo: "Prazo: a partir de 30 dias úteis",
    },
    {
      icon: Gift,
      title: "Brindes Corporativos Personalizados",
      desc: "Pins de lapela, chaveiros, charms e acessórios com logo, transformando presentes em experiência de marca.",
      min: "Pedido mínimo: 250 unidades",
      prazo: "Prazo: a partir de 45 dias úteis",
    },
    {
      icon: ShoppingBag,
      title: "Bijuterias e Acessórios no Atacado",
      desc: "Coleções prontas, prontas para revenda — sem necessidade de desenvolvimento.",
      min: "Pedido mínimo: 100 unidades",
      prazo: "Pronta entrega",
    },
  ];
  return (
    <section id="frentes" style={{ background: offWhite }} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
            Frentes de Negócio
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight" style={{ color: black }}>
            Três linhas, <span className="italic font-light" style={{ color: brown }}>uma só obsessão</span> por acabamento.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col rounded-2xl border bg-white p-7 transition-all hover:-translate-y-1"
              style={{ borderColor: `${caramel}40`, boxShadow: `0 30px 60px -40px ${brown}55` }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ background: beige, color: brownDark }}
              >
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-bold text-xl leading-snug" style={{ color: black }}>
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#5b4a3f" }}>
                {c.desc}
              </p>
              <div className="mt-6 space-y-2 text-sm" style={{ color: brownDark }}>
                <div className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: caramel }} /> {c.min}</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4" style={{ color: caramel }} /> {c.prazo}</div>
              </div>
              <a
                href={WHATSAPP}
                target="_blank"
                className="mt-7 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold self-start transition-colors"
                style={{ background: black, color: beige }}
              >
                Solicitar orçamento <ArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diferenciais() {
  const items = [
    {
      icon: ShieldCheck,
      title: "Certificação FAMA",
      desc: "Habilitada para produzir para marcas globais licenciadas, incluindo padrão Disney.",
    },
    {
      icon: Award,
      title: "ABVTEX Ouro",
      desc: "Ética, direitos humanos e cadeia produtiva responsável auditada.",
    },
    {
      icon: Factory,
      title: "30 anos de fábrica própria",
      desc: "Domínio total do processo — do briefing à entrega final.",
    },
    {
      icon: Gem,
      title: "Qualidade de joalheria",
      desc: "Inspeção individual peça a peça, com banhos premium e acabamento impecável.",
    },
    {
      icon: Cog,
      title: "Escala industrial",
      desc: "Volume sem abrir mão do acabamento artesanal que define uma marca.",
    },
    {
      icon: ClipboardList,
      title: "Desenvolvimento completo",
      desc: "Briefing, Pantone, ficha técnica, aprovação e entrega num único parceiro.",
    },
  ];
  return (
    <section id="diferenciais" style={{ background: black, color: offWhite }} className="py-20 md:py-28 relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30"
        style={{ background: `radial-gradient(circle, ${caramel}, transparent 70%)` }}
      />
      <div className="mx-auto max-w-7xl px-4 relative">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: caramel }}>
            Por que Eliza
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight">
            Tradição certificada, <span className="italic font-light" style={{ color: beige }}>precisão industrial</span>.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-px" style={{ background: `${caramel}22` }}>
          {items.map((it) => (
            <div key={it.title} className="p-7" style={{ background: black }}>
              <it.icon className="h-7 w-7" style={{ color: caramel }} />
              <h3 className="mt-4 font-bold text-lg" style={{ color: beige }}>{it.title}</h3>
              <p className="mt-2 text-sm font-light" style={{ color: `${offWhite}aa` }}>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Processo() {
  const steps = [
    { icon: FileText, label: "Briefing" },
    { icon: Palette, label: "Pantone" },
    { icon: ClipboardList, label: "Ficha Técnica" },
    { icon: CheckCircle2, label: "Aprovação" },
    { icon: Cog, label: "Produção" },
    { icon: Truck, label: "Entrega" },
  ];
  return (
    <section id="processo" style={{ background: offWhite }} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
            Como funciona
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight" style={{ color: black }}>
            Um <span className="italic font-light" style={{ color: brown }}>processo enxuto</span>, do conceito à entrega.
          </h2>
        </div>
        <div className="mt-14 relative">
          <div className="absolute top-6 left-0 right-0 h-px hidden md:block" style={{ background: `${caramel}55` }} />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
            {steps.map((s, i) => (
              <div key={s.label} className="relative flex flex-col items-center text-center">
                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-bold"
                  style={{ background: black, color: beige, border: `2px solid ${caramel}` }}
                >
                  {i + 1}
                </div>
                <s.icon className="mt-4 h-5 w-5" style={{ color: brown }} />
                <div className="mt-2 text-sm font-semibold" style={{ color: black }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ParaQuem() {
  const personas = [
    { icon: Sparkles, title: "Estilista Criativa", desc: "Coleções com peças exclusivas que elevam o storytelling da marca." },
    { icon: Users, title: "RH & Endomarketing", desc: "Itens premium que engajam equipes e ficam na memória, não na gaveta." },
    { icon: Briefcase, title: "Marketing B2B", desc: "Brindes de alto valor percebido para clientes VIP e ações estratégicas." },
    { icon: Footprints, title: "Fabricantes de Calçados", desc: "Componentes técnicos com tolerância industrial e acabamento perfeito." },
    { icon: ShieldCheck, title: "Marcas Licenciadas", desc: "Fornecedor homologado FAMA para grandes licenças globais." },
  ];
  return (
    <section style={{ background: beige }} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brownDark }}>
            Para quem é
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight" style={{ color: black }}>
            Feito para decisores que <span className="italic font-light">não negociam qualidade</span>.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-6 transition-transform hover:-translate-y-1"
              style={{ background: offWhite, border: `1px solid ${brown}33` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: brownDark, color: beige }}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg" style={{ color: black }}>{p.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "#5b4a3f" }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: `${brown}33` }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-base md:text-lg" style={{ color: black }}>{q}</span>
        <ChevronDown
          className="h-5 w-5 shrink-0 transition-transform"
          style={{ color: brown, transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      {open && (
        <p className="pb-5 pr-10 text-sm leading-relaxed" style={{ color: "#5b4a3f" }}>{a}</p>
      )}
    </div>
  );
}

function Faq() {
  const faqs = [
    {
      q: "A fábrica atende pedidos menores?",
      a: "Sim. O pedido mínimo varia por linha: 100 unidades no atacado de bijuterias, 250 para brindes corporativos personalizados e 500 para aviamentos sob demanda. Para projetos especiais, fale com nosso time.",
    },
    {
      q: "A certificação FAMA cobre quais produtos?",
      a: "Cobre toda nossa produção de acessórios metálicos para marcas licenciadas — incluindo pins, charms, chaveiros e aviamentos. Estamos habilitados ao padrão Disney e demais grandes licenciantes.",
    },
    {
      q: "Como funciona o desenvolvimento personalizado?",
      a: "Recebemos seu briefing, definimos referências Pantone, geramos ficha técnica, enviamos amostra para aprovação e seguimos para a produção com inspeção peça a peça. Tudo dentro da nossa fábrica em Limeira/SP.",
    },
    {
      q: "Qual o prazo médio de entrega?",
      a: "A partir de 30 dias úteis para aviamentos e 45 dias úteis para brindes personalizados, contados após aprovação da amostra. Pronta entrega para bijuterias do atacado.",
    },
  ];
  return (
    <section id="faq" style={{ background: offWhite }} className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
          Perguntas frequentes
        </div>
        <h2 className="font-extrabold text-3xl md:text-5xl leading-tight mb-10" style={{ color: black }}>
          Tudo o que <span className="italic font-light" style={{ color: brown }}>você precisa saber</span>.
        </h2>
        <div>
          {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  );
}

function ProvaSocial() {
  const depos = [
    { name: "Diretora de Marketing", company: "Marca de moda nacional", text: "Acabamento de joalheria com escala industrial. Encontramos o fornecedor que faltava." },
    { name: "Gerente de Endomarketing", company: "Multinacional", text: "Brindes que viraram conversa interna. Qualidade muito acima da média do mercado." },
    { name: "Diretor de Produto", company: "Calçadista premium", text: "Tolerância técnica precisa, prazos respeitados e parceria de verdade." },
  ];
  return (
    <section style={{ background: black, color: offWhite }} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: caramel }}>
            Prova social
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight">
            Quem produz com a Eliza <span className="italic font-light" style={{ color: beige }}>volta sempre</span>.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {depos.map((d) => (
            <div
              key={d.name}
              className="rounded-2xl p-7"
              style={{ background: "#1a1310", border: `1px solid ${caramel}33` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: caramel }} />
                ))}
              </div>
              <p className="text-sm italic font-light leading-relaxed" style={{ color: `${offWhite}cc` }}>
                "{d.text}"
              </p>
              <div className="mt-6">
                <div className="font-semibold text-sm" style={{ color: beige }}>{d.name}</div>
                <div className="text-xs" style={{ color: `${caramel}cc` }}>{d.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 opacity-80">
          {["FAMA", "ABVTEX OURO", "DISNEY READY", "30 ANOS"].map((b) => (
            <div
              key={b}
              className="rounded-full border px-5 py-2 text-xs tracking-[0.3em]"
              style={{ borderColor: `${caramel}55`, color: beige }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFinal() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${caramel} 0%, ${brown} 60%, ${brownDark} 100%)`,
        color: offWhite,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.2) 0 1px, transparent 1px 10px)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-extrabold text-4xl md:text-6xl leading-[1.05]">
          Sua próxima coleção
          <span className="block italic font-light" style={{ color: beige }}>
            merece acabamento de joalheria.
          </span>
        </h2>
        <p className="mt-6 text-base md:text-lg font-light max-w-2xl mx-auto" style={{ color: `${offWhite}dd` }}>
          Fale agora com nosso time e receba um orçamento personalizado em até 1 dia útil.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-5 text-base font-semibold shadow-2xl transition-transform hover:scale-[1.02]"
            style={{ background: black, color: beige }}
          >
            <MessageCircle className="h-5 w-5" /> WhatsApp (19) 99541-1832
          </a>
          <a
            href={EMAIL}
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-5 text-base font-semibold"
            style={{ borderColor: beige, color: beige }}
          >
            <Mail className="h-5 w-5" /> contato@elizadesign.com.br
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: black, color: `${offWhite}aa` }} className="py-14">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-10">
        <div>
          <Logo dark />
          <p className="mt-5 text-sm font-light max-w-xs">
            Fábrica própria de acessórios metálicos premium. 30 anos transformando metal em identidade de marca.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: caramel }}>Endereço</div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: caramel }} />
            <span>R. Cedro, 229 A · Vila Queiroz<br />Limeira / SP</span>
          </div>
        </div>
        <div className="text-sm">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: caramel }}>Contato</div>
          <div className="space-y-2">
            <a href={WHATSAPP} target="_blank" className="flex items-center gap-2 hover:opacity-80">
              <MessageCircle className="h-4 w-4" style={{ color: caramel }} /> +55 19 99541-1832
            </a>
            <a href={EMAIL} className="flex items-center gap-2 hover:opacity-80">
              <Mail className="h-4 w-4" style={{ color: caramel }} /> contato@elizadesign.com.br
            </a>
            <a href="https://www.instagram.com/elizaacessoriodesign" target="_blank" className="flex items-center gap-2 hover:opacity-80">
              <Instagram className="h-4 w-4" style={{ color: caramel }} /> @elizaacessoriodesign
            </a>
            <a href="https://www.elizadesign.com.br" target="_blank" className="flex items-center gap-2 hover:opacity-80">
              <ArrowRight className="h-4 w-4" style={{ color: caramel }} /> elizadesign.com.br
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-10 pt-6 border-t flex flex-col md:flex-row justify-between gap-3 text-xs" style={{ borderColor: `${caramel}22` }}>
        <span>© {new Date().getFullYear()} Eliza Acessórios & Design. Todos os direitos reservados.</span>
        <span>CNPJ · Indústria homologada FAMA / ABVTEX Ouro</span>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <main style={{ fontFamily: "'Sora', system-ui, sans-serif", background: offWhite, color: black }}>
      <Hero />
      <CredentialBar />
      <Frentes />
      <Diferenciais />
      <Processo />
      <ParaQuem />
      <Faq />
      <ProvaSocial />
      <CtaFinal />
      <Footer />
    </main>
  );
}