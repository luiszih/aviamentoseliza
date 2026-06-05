import { useEffect, useState } from "react";
import {
  Award, ShieldCheck, Factory, Sparkles, ArrowRight, Check, MessageCircle,
  Mail, Instagram, MapPin, ChevronDown, Palette, FileText, CheckCircle2,
  Cog, Truck, ClipboardList, Scissors, Footprints, Star, Image as ImageIcon,
  Download, Send, Loader2, Heart, Gem, ChevronLeft, ChevronRight,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import feedback1Asset from "@/assets/feedback-1.png.asset.json";
import feedback2Asset from "@/assets/feedback-2.png.asset.json";

const WHATSAPP_NUMBER = "5519995411832";
const WHATSAPP_MSG = "Olá! Tenho interesse em aviamentos personalizados para minha coleção. Gostaria de mais informações.";
const WHATSAPP_FORM_MSG = "Olá! Acabei de preencher o formulário no site e gostaria de saber mais sobre aviamentos personalizados.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`;
const EMAIL = "mailto:contato@elizadesign.com.br";
const INSTAGRAM = "https://instagram.com/elizaacessoriodesign";
const CATALOG_URL = "/catalogo-aviamentos-eliza-2026.pdf";

// Brand palette
const beige = "#FFD7AC";
const caramel = "#C8946F";
const brown = "#8E5C37";
const brownDark = "#5a3820";
const offWhite = "#FAF6F1";

/* ---------- Reusable ---------- */

function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-xl border-2 border-dashed bg-stone-100 text-stone-500 ${className}`}
      style={{ borderColor: `${caramel}66`, minHeight: 160 }}
    >
      <ImageIcon className="h-8 w-8 mb-2" style={{ color: caramel }} />
      <span className="text-xs px-3 text-center font-medium">📷 {label}</span>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  const color = light ? "#FFFFFF" : brownDark;
  const accent = light ? beige : caramel;
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-full border"
        style={{ borderColor: accent, background: light ? "transparent" : offWhite }}
      >
        <span className="font-extrabold text-xl leading-none" style={{ color }}>
          e<span style={{ color: accent }}>.</span>
        </span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wider uppercase" style={{ color }}>Eliza</div>
        <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: accent }}>
          Acessórios & Design
        </div>
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${brown} 0%, ${brownDark} 100%)`,
        color: "#FFFFFF",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,215,172,0.4) 0 1px, transparent 1px 8px)",
        }}
      />
      <header className="relative mx-auto max-w-7xl px-4 py-6 flex items-center justify-between">
        <Logo light />
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/90">
          <a href="#portfolio" className="hover:text-white">Portfólio</a>
          <a href="#diferenciais" className="hover:text-white">Diferenciais</a>
          <a href="#processo" className="hover:text-white">Processo</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#orcamento" className="hover:text-white">Orçamento</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
          style={{ background: beige, color: brownDark }}
        >
          <MessageCircle className="h-4 w-4" /> Falar agora
        </a>
      </header>

      <div className="relative mx-auto max-w-7xl px-4 pt-10 pb-20 md:pt-16 md:pb-28 grid md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7">
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs tracking-[0.25em] uppercase mb-6"
            style={{ borderColor: `${beige}88`, color: beige }}
          >
            <Sparkles className="h-3.5 w-3.5" /> Fábrica própria · Desde 1995
          </div>
          <h1 className="font-extrabold leading-[1.05] text-4xl md:text-6xl lg:text-[64px] text-white">
            30 anos fabricando o aviamento que{" "}
            <span className="italic font-light" style={{ color: beige }}>
              eleva o valor
            </span>{" "}
            de qualquer coleção.
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg font-light text-white/85">
            Fábrica própria de aviamentos metálicos para moda, calçados, lingerie e beachwear.&nbsp;
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold shadow-lg transition-colors"
              style={{ background: caramel, color: "#FFFFFF" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = beige)}
              onMouseLeave={(e) => (e.currentTarget.style.background = caramel)}
            >
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-7 py-4 text-base font-semibold transition-colors"
              style={{ borderColor: beige, color: beige }}
              onMouseEnter={(e) => { e.currentTarget.style.background = beige; e.currentTarget.style.color = brownDark; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = beige; }}
            >
              <Download className="h-4 w-4" /> Baixar catálogo
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {[
              { icon: Award, label: "30 anos de mercado" },
              { icon: ShieldCheck, label: "Certificação FAMA" },
              { icon: Gem, label: "ABVTEX Ouro" },
              { icon: Factory, label: "Fábrica própria" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-xs md:text-sm text-white/90">
                <b.icon className="h-4 w-4 shrink-0" style={{ color: beige }} />
                <span className="font-light">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-5 hidden md:block">
          <img
            src="/capa-catalogo-eliza-2026.jpg"
            alt="Capa do catálogo Aviamentos Eliza Acessórios 2026"
            className="w-full rounded-xl shadow-2xl object-cover aspect-[4/5]"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Portfólio (5 cards) ---------- */

function Portfolio() {
  const cards: { title: string; desc: string; photo: string; image?: string }[] = [
    {
      title: "Botões",
      desc: "Botões metálicos em acabamento preciso para moda e calçados. Redondos, quadrados, decorativos e funcionais. Disponíveis em dourado, prateado, ouro velho e grafite.",
      photo: "Flat lay de botões metálicos variados",
      image: "/botoes-new.jpg",
    },
    {
      title: "Fivelas",
      desc: "Fivelas para bolsas, calçados, cintos e vestuário. Produção com cuidado no desenvolvimento e acabamento impecável. Clássicas, geométricas e decorativas.",
      photo: "Flat lay de fivelas com bolsa de couro",
      image: "/fivela-new.jpg",
    },
    {
      title: "Passantes, Ponteiras e Laterais",
      desc: "Passantes e laterais para lingerie, beachwear e moda. Ponteiras para cordões e amarrações. Variedade de formatos em dourado, prateado e rosé.",
      photo: "Flat lay de passantes com biquíni aplicado",
      image: "/ponteira-new.jpg",
    },
    {
      title: "Pingentes",
      desc: "Pingentes decorativos e personalizados para moda, calçados e acessórios. Temáticos, com logos de marca ou exclusivos sob encomenda.",
      photo: "Flat lay de pingentes variados",
      image: "/pingente-1.png",
    },
    {
      title: "Reguladores",
      desc: "Reguladores para sutiãs, lingerie e beachwear. Disponíveis em múltiplos tamanhos, de 4mm a 26mm, e banhos: dourado, níquel, grafite e rosé.",
      photo: "Flat lay de reguladores com sutiã aplicado",
      image: "/regulador.png",
    },
  ];

  return (
    <section id="portfolio" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
            Nosso portfólio de aviamentos
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-neutral-800">
            Do regulador ao pingente,{" "}
            <span className="italic font-light" style={{ color: brown }}>
              do conceito ao acabamento
            </span>.
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Desenvolvemos sob medida para a identidade da sua marca.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article
              key={c.title}
              className="group flex flex-col rounded-2xl border bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ borderColor: `${caramel}40` }}
            >
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.title}
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <PhotoPlaceholder label={c.photo} className="aspect-[4/3] w-full rounded-none border-0 border-b-2" />
              )}
              <div className="p-6 flex flex-col items-center justify-center text-center gap-3 flex-1">
                <h3 className="font-bold text-xl text-neutral-800">{c.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{c.desc}</p>
                <div className="flex items-center gap-2 text-sm" style={{ color: brown }}>
                  <Check className="h-4 w-4" style={{ color: caramel }} />
                  <span className="font-semibold">Pedido mínimo: 500 unidades</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Galeria ---------- */

function Galeria() {
  const fotos: { label: string; src?: string; alt?: string }[] = [
    { label: "Botões", src: "/botoes.jpg", alt: "Botões metálicos Eliza Acessórios" },
    { label: "Fivelas", src: "/fivelas.jpg", alt: "Fivelas metálicas Eliza Acessórios" },
    { label: "Passantes, ponteiras e laterais", src: "/passantes-ponteiras.jpg", alt: "Passantes ponteiras e laterais Eliza Acessórios" },
    { label: "Pingentes — série 1", src: "/pingente-2.png", alt: "Pingentes Eliza Acessórios" },
    { label: "Pingentes — série 2 (licenciados)", src: "/pingentes-licenciados.jpg", alt: "Pingentes licenciados Eliza Acessórios" },
    { label: "Reguladores", src: "/reguladores.jpg", alt: "Reguladores metálicos Eliza Acessórios" },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: offWhite }}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
            Catálogo 2026
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-neutral-800">
            Conheça nosso <span className="italic font-light" style={{ color: brown }}>portfólio</span>
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {fotos.map((f) => (
            <div key={f.label} className="overflow-hidden rounded-xl group cursor-pointer aspect-square">
              {f.src ? (
                <img
                  src={f.src}
                  alt={f.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <PhotoPlaceholder
                  label={f.label}
                  className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-colors"
            style={{ background: brown, color: "#FFFFFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = caramel)}
            onMouseLeave={(e) => (e.currentTarget.style.background = brown)}
          >
            <Download className="h-5 w-5" /> Baixar catálogo completo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Diferenciais (3) ---------- */

function Diferenciais() {
  const FamaIcon = ({ className }: { className?: string }) => (
    <img src="/cert-fama.svg" alt="Certificado FAMA" className={className} />
  );

  const AbvtexIcon = ({ className }: { className?: string }) => (
    <img src="/cert-abvtex.svg" alt="Selo ABVTEX" className={className} />
  );

  const items: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }[] = [
    {
      icon: FamaIcon,
      title: "Certificado FAMA Walt Disney",
      desc: "Garanta conformidade social e ética em sua cadeia de suprimentos com a certificação oficial para parceiros Disney.",
    },
    {
      icon: AbvtexIcon,
      title: "Selo ABVTEX Ouro",
      desc: "Comprove o compromisso com a sustentabilidade e práticas trabalhistas justas com o mais alto nível de certificação ABVTEX.",
    },
    {
      icon: Factory,
      title: "30 Anos de Fábrica Própria",
      desc: "Três décadas fabricando com controle total de qualidade e atenção a cada detalhe, do briefing à entrega.",
    },
  ];
  return (
    <section id="diferenciais" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
            Por que Eliza
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-neutral-800">
            Tradição certificada,{" "}
            <span className="italic font-light" style={{ color: brown }}>
              precisão industrial
            </span>.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl p-8 border transition-all hover:-translate-y-1 hover:shadow-lg"
              style={{ borderColor: `${caramel}40`, background: offWhite }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl"
                style={{ background: brown, color: "#FFFFFF" }}
              >
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-bold text-xl text-neutral-800">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{it.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <img
            src="/fachada-eliza-v3.webp"
            alt="Fachada da fábrica Eliza em Limeira/SP"
            className="w-full h-[250px] md:h-[450px] rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Processo ---------- */

function Processo() {
  const steps = [
    { icon: FileText, label: "Briefing" },
    { icon: CheckCircle2, label: "Aprovação" },
    { icon: Cog, label: "Produção" },
    { icon: Truck, label: "Entrega" },
  ];
  return (
    <section id="processo" className="py-20 md:py-28" style={{ background: offWhite }}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
            Como funciona
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-neutral-800">
            Um <span className="italic font-light" style={{ color: brown }}>processo enxuto</span>, do conceito à entrega.
          </h2>
        </div>
        <div className="mt-14 relative md:max-w-4xl md:mx-auto">
          <div
            className="absolute top-6 left-0 right-0 h-px hidden md:block"
            style={{ background: `${caramel}88` }}
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {steps.map((s, i) => (
              <div key={s.label} className="relative flex flex-col items-center text-center">
                <div
                  className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white"
                  style={{ background: brown }}
                >
                  {i + 1}
                </div>
                <s.icon className="mt-4 h-5 w-5" style={{ color: caramel }} />
                <div className="mt-2 text-sm font-semibold text-neutral-800">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Para Quem (4 personas) ---------- */

function ParaQuem() {
  const personas = [
    {
      icon: Heart,
      title: "Confecção de Lingerie e Beachwear",
      pain: "Dificuldade em encontrar reguladores e passantes com acabamento consistente em escala.",
      sol: "Portfólio completo de reguladores, argolas, passantes e pingentes para cada coleção.",
    },
    {
      icon: Sparkles,
      title: "Estilista Criativa",
      pain: "Aviamentos genéricos que não traduzem a identidade da coleção.",
      sol: "Desenvolvimento personalizado com acabamento preciso e design exclusivo.",
    },
    {
      icon: Footprints,
      title: "Fabricante de Calçados",
      pain: "Componentes inconsistentes que comprometem o produto final.",
      sol: "Fábrica própria com controle individual de qualidade e pontualidade na entrega.",
    },
    {
      icon: ShieldCheck,
      title: "Licenciado de Grandes Marcas",
      pain: "Falta de fornecedores homologados para produzir itens licenciados com segurança.",
      sol: "Certificação FAMA Disney garantindo conformidade com padrões globais e rastreabilidade total.",
    },
  ];
  return (
    <section className="py-20 md:py-28" style={{ background: beige }}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brownDark }}>
            Para que é:
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-neutral-800">
            Feito para quem{" "}
            <span className="italic font-light" style={{ color: brown }}>
              não negocia qualidade
            </span>.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {personas.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-7 bg-white transition-transform hover:-translate-y-1"
              style={{ border: `1px solid ${brown}33` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{ background: brown, color: "#FFFFFF" }}
                >
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg text-neutral-800">{p.title}</h3>
              </div>
              <div className="mt-5 space-y-3 text-sm">
                <div>
                  <div className="text-xs tracking-wider uppercase font-semibold mb-1" style={{ color: caramel }}>
                    Dor
                  </div>
                  <p className="text-neutral-600 leading-relaxed">{p.pain}</p>
                </div>
                <div>
                  <div className="text-xs tracking-wider uppercase font-semibold mb-1" style={{ color: brown }}>
                    Solução
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{p.sol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Catálogo Download ---------- */

function CatalogoDownload() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className="rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0"
          style={{ background: offWhite, border: `1px solid ${caramel}55` }}
        >
          <div className="p-10 md:p-14 flex flex-col justify-center">
            <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
              Catálogo 2026
            </div>
            <h2 className="font-extrabold text-3xl md:text-4xl leading-tight text-neutral-800">
              Conheça nosso{" "}
              <span className="italic font-light" style={{ color: brown }}>
                catálogo completo
              </span>{" "}
              de aviamentos 2026
            </h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">
              Mais de 5 categorias, centenas de referências em dourado, prateado, rosé e grafite.
              Baixe agora e encontre o aviamento certo para a sua coleção.
            </p>
            <a
              href={CATALOG_URL}
              target="_blank"
              rel="noopener"
              className="mt-7 inline-flex self-start items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold transition-colors"
              style={{ background: caramel, color: "#FFFFFF" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = brown)}
              onMouseLeave={(e) => (e.currentTarget.style.background = caramel)}
            >
              <Download className="h-5 w-5" /> Baixar catálogo gratuito
            </a>
          </div>
          <div className="p-8 md:p-12 flex items-center justify-center" style={{ background: beige }}>
            <img
              src="/capa-catalogo-eliza-2026.jpg"
              alt="Catálogo de Aviamentos Eliza 2026"
              className="w-full max-w-sm h-auto shadow-2xl rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: `${brown}33` }}>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-base md:text-lg text-neutral-800">{q}</span>
        <ChevronDown
          className="h-5 w-5 shrink-0 transition-transform"
          style={{ color: brown, transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      {open && <p className="pb-5 pr-10 text-sm leading-relaxed text-neutral-600">{a}</p>}
    </div>
  );
}

function Faq() {
  const faqs = [
    {
      q: "Qual o pedido mínimo para aviamentos?",
      a: "O pedido mínimo é de 500 unidades por modelo. Esse volume garante a viabilidade do processo produtivo mantendo o padrão de qualidade que nossos clientes esperam.",
    },
    {
      q: "Quais acabamentos estão disponíveis?",
      a: "Trabalhamos com Banho dourado, níquel, grafite, ouro velha, prata velha. Cada peça passa por rigoroso controle de qualidade para garantir durabilidade e acabamento premium.",
    },
    {
      q: "Como funciona o desenvolvimento personalizado?",
      a: "Nosso processo começa com o seu briefing. Desenvolvemos a ficha técnica completa, criamos uma amostra física para sua aprovação e só então iniciamos a produção em escala, com acompanhamento dedicado em cada etapa.",
    },
    {
      q: "Qual o prazo de entrega?",
      a: "A partir de 30 dias úteis após aprovação da amostra, variando conforme a complexidade do projeto.",
    },
    {
      q: "A certificação FAMA cobre quais produtos?",
      a: "Nos habilita a produzir aviamentos e acessórios metálicos para todas as marcas licenciadas pela Disney e seus parceiros, com segurança jurídica e rastreabilidade total.",
    },
  ];
  return (
    <section id="faq" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
          Perguntas frequentes
        </div>
        <h2 className="font-extrabold text-3xl md:text-5xl leading-tight mb-10 text-neutral-800">
          Tudo o que <span className="italic font-light" style={{ color: brown }}>você precisa saber</span>.
        </h2>
        <div>
          {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Depoimentos ---------- */

function Depoimentos() {
  const feedback1 = new URL("../assets/feedback-1.png.asset.json", import.meta.url);
  return (
    <section className="py-20 md:py-28" style={{ background: offWhite }}>
      <div className="mx-auto max-w-6xl px-4 text-center">
        <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
          Prova social
        </div>
        <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-neutral-800">
          Parceria que se{" "}
          <span className="italic font-light" style={{ color: brown }}>
            constrói no detalhe
          </span>.
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 justify-items-center">
          <img
            src={feedback1Asset.url}
            alt="Depoimento de cliente Eliza - ficaram lindos os produtos"
            loading="lazy"
            decoding="async"
            className="w-full max-w-md h-auto object-contain rounded-3xl shadow-lg"
          />
          <img
            src={feedback2Asset.url}
            alt="Depoimento de cliente Eliza - gostamos da qualidade e da entrega"
            loading="lazy"
            decoding="async"
            className="w-full max-w-md h-auto object-contain rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Instagram ---------- */

function InstagramFeed() {
  const posts = [
    "DWqzGgVjTwP",
    "DRu1ePgkTYJ",
    "DTsXLEcEf3H",
    "DUnlb3HkdpY",
    "DVONXrnkaZt",
    "DWGwAGwjWe0",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [perView, setPerView] = useState(1);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth >= 768 ? 3 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const totalGroups = Math.max(1, posts.length - perView + 1);
  const safeIndex = Math.min(currentIndex, totalGroups - 1);
  const slideWidth = 100 / perView;

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brown }}>
            Instagram
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-neutral-800">
            Acompanhe nosso{" "}
            <span className="italic font-light" style={{ color: brown }}>
              portfólio
            </span>
          </h2>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener"
            className="mt-3 inline-flex items-center gap-2 text-base font-semibold"
            style={{ color: caramel }}
          >
            <Instagram className="h-5 w-5" /> @elizaacessoriodesign
          </a>
        </div>
        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${safeIndex * slideWidth}%)` }}
            >
              {posts.map((id) => (
                <div
                  key={id}
                  className="shrink-0 px-2"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div
                    className="relative w-full overflow-hidden rounded-xl"
                    style={{ background: "#f5f0eb", aspectRatio: "4 / 5" }}
                  >
                    <iframe
                      src={`https://www.instagram.com/p/${id}/embed/`}
                      title={`Instagram post ${id}`}
                      loading="lazy"
                      scrolling="no"
                      frameBorder={0}
                      allowTransparency
                      allow="encrypted-media"
                      className="absolute inset-0 h-full w-full border-0"
                      style={{ pointerEvents: "none" }}
                    />
                    <a
                      href={`https://www.instagram.com/p/${id}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver no Instagram"
                      aria-label="Ver no Instagram"
                      className="absolute inset-0 z-10 cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={safeIndex === 0}
            aria-label="Anterior"
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition"
            style={{ color: brown }}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setCurrentIndex((i) => Math.min(totalGroups - 1, i + 1))}
            disabled={safeIndex >= totalGroups - 1}
            aria-label="Próximo"
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 h-11 w-11 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition"
            style={{ color: brown }}
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-1.5">
            {Array.from({ length: totalGroups }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                aria-label={`Ir para grupo ${i + 1}`}
                className="h-2 w-2 rounded-full transition"
                style={{
                  background: i === safeIndex ? brown : "rgba(200,148,111,0.25)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Formulário ---------- */

function FormularioOrcamento() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    segmento: "",
    mensagem: "",
  });
  const [saving, setSaving] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.empresa || !form.telefone || !form.segmento) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }
    setSaving(true);
    try {
      const { error } = await supabase.from("leads").insert({
        nome: form.nome,
        empresa: form.empresa,
        telefone: form.telefone,
        segmento: form.segmento,
        observacoes: form.mensagem || null,
      });
      if (error) throw error;
      setSent(true);
      toast.success("Recebemos sua solicitação!");
      setTimeout(() => {
        window.open(
          `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_FORM_MSG)}`,
          "_blank"
        );
      }, 800);
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar. Tente novamente.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <section id="orcamento" className="py-20 md:py-28" style={{ background: beige }}>
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: brownDark }}>
            Solicite seu orçamento
          </div>
          <h2 className="font-extrabold text-3xl md:text-5xl leading-tight text-neutral-800">
            Vamos criar a sua{" "}
            <span className="italic font-light" style={{ color: brown }}>
              próxima coleção
            </span>
          </h2>
          <p className="mt-4 text-neutral-700">Nossa equipe responde em até 24 horas.</p>
        </div>

        {sent ? (
          <div
            className="mt-10 rounded-2xl bg-white p-10 text-center"
            style={{ border: `1px solid ${brown}33` }}
          >
            <CheckCircle2 className="h-14 w-14 mx-auto mb-4" style={{ color: brown }} />
            <h3 className="font-bold text-xl text-neutral-800">
              Recebemos sua solicitação.
            </h3>
            <p className="mt-2 text-neutral-600">
              Nossa equipe entrará em contato em breve. Redirecionando para o WhatsApp...
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl bg-white p-8 md:p-10 space-y-5"
            style={{ border: `1px solid ${brown}33` }}
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nome completo *">
                <input
                  required
                  value={form.nome}
                  onChange={(e) => update("nome", e.target.value)}
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2"
                  style={{ borderColor: `${brown}44`, background: offWhite }}
                />
              </Field>
              <Field label="Empresa *">
                <input
                  required
                  value={form.empresa}
                  onChange={(e) => update("empresa", e.target.value)}
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
                  style={{ borderColor: `${brown}44`, background: offWhite }}
                />
              </Field>
              <Field label="WhatsApp com DDD *">
                <input
                  required
                  value={form.telefone}
                  onChange={(e) => update("telefone", e.target.value)}
                  placeholder="(11) 99999-9999"
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none"
                  style={{ borderColor: `${brown}44`, background: offWhite }}
                />
              </Field>
              <Field label="Segmento *">
                <select
                  required
                  value={form.segmento}
                  onChange={(e) => update("segmento", e.target.value)}
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none bg-white"
                  style={{ borderColor: `${brown}44`, background: offWhite }}
                >
                  <option value="">Selecione...</option>
                  <option>Moda e vestuário</option>
                  <option>Calçados</option>
                  <option>Lingerie</option>
                  <option>Beachwear</option>
                  <option>Outro</option>
                </select>
              </Field>
            </div>
            <Field label="Mensagem (opcional)">
              <textarea
                rows={4}
                value={form.mensagem}
                onChange={(e) => update("mensagem", e.target.value)}
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none resize-none"
                style={{ borderColor: `${brown}44`, background: offWhite }}
              />
            </Field>
            <button
              type="submit"
              disabled={saving}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-white transition-colors disabled:opacity-60"
              style={{ background: brown }}
              onMouseEnter={(e) => !saving && (e.currentTarget.style.background = caramel)}
              onMouseLeave={(e) => !saving && (e.currentTarget.style.background = brown)}
            >
              {saving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
              {saving ? "Enviando..." : "Enviar solicitação"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: brownDark }}>
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------- CTA Final ---------- */

function CtaFinal() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${brown} 0%, ${brownDark} 100%)`,
        color: "#FFFFFF",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,215,172,0.3) 0 1px, transparent 1px 10px)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-extrabold text-4xl md:text-6xl leading-[1.05]">
          Pronto para elevar o valor
          <span className="block italic font-light" style={{ color: beige }}>
            da sua coleção?
          </span>
        </h2>
        <p className="mt-6 text-base md:text-lg font-light max-w-2xl mx-auto text-white/85">
          30 anos de tradição, certificações globais e cuidado no desenvolvimento de cada peça.
          Vamos criar juntos.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-5 text-base font-semibold shadow-2xl transition-colors"
            style={{ background: caramel, color: "#FFFFFF" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = beige) && (e.currentTarget.style.color = brownDark)}
            onMouseLeave={(e) => (e.currentTarget.style.background = caramel) && (e.currentTarget.style.color = "#FFFFFF")}
          >
            <MessageCircle className="h-5 w-5" /> Falar no WhatsApp
          </a>
          <a
            href={CATALOG_URL}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 px-8 py-5 text-base font-semibold transition-colors"
            style={{ borderColor: beige, color: beige }}
            onMouseEnter={(e) => { e.currentTarget.style.background = beige; e.currentTarget.style.color = brownDark; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = beige; }}
          >
            <Download className="h-5 w-5" /> Baixar catálogo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer style={{ background: brownDark, color: "#FFFFFFcc" }} className="py-14">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-10">
        <div>
          <Logo light />
          <p className="mt-5 text-sm font-light max-w-xs">
            Fábrica própria de aviamentos metálicos. 30 anos transformando metal em identidade de marca.
          </p>
        </div>
        <div className="text-sm">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: beige }}>
            Endereço
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 shrink-0" style={{ color: beige }} />
            <span>R. Cedro, 229 A · Vila Queiroz<br />Limeira / SP</span>
          </div>
        </div>
        <div className="text-sm">
          <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: beige }}>
            Contato
          </div>
          <div className="space-y-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white">
              <MessageCircle className="h-4 w-4" style={{ color: beige }} /> +55 19 99541-1832
            </a>
            <a href={EMAIL} className="flex items-center gap-2 hover:text-white">
              <Mail className="h-4 w-4" style={{ color: beige }} /> contato@elizadesign.com.br
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white">
              <Instagram className="h-4 w-4" style={{ color: beige }} /> @elizaacessoriodesign
            </a>
            <a href="https://www.elizadesign.com.br" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-white">
              <ArrowRight className="h-4 w-4" style={{ color: beige }} /> elizadesign.com.br
            </a>
          </div>
        </div>
      </div>
      <div
        className="mx-auto max-w-7xl px-4 mt-10 pt-6 border-t flex flex-col md:flex-row justify-between gap-3 text-xs"
        style={{ borderColor: `${beige}33` }}
      >
        <span>© {new Date().getFullYear()} Eliza Acessórios & Design. Todos os direitos reservados.</span>
        <span>Indústria homologada FAMA / ABVTEX Ouro</span>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

export function LandingPage() {
  return (
    <main
      style={{ fontFamily: "'Sora', system-ui, sans-serif" }}
      className="bg-white text-neutral-800"
    >
      <Hero />
      <Portfolio />
      <Galeria />
      <Diferenciais />
      <Processo />
      <ParaQuem />
      <CatalogoDownload />
      <Faq />
      <Depoimentos />
      <InstagramFeed />
      <FormularioOrcamento />
      <CtaFinal />
      <Footer />
    </main>
  );
}
