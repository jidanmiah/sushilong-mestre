import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Instagram,
  Star,
  Clock,
  Menu as MenuIcon,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Facebook,
  Utensils,
  Flame,
  Fish,
  AlertTriangle,
  Baby,
  Coffee,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

import heroImg from "@/assets/hero.jpg";
import nigiriImg from "@/assets/nigiri.jpg";
import sashimiImg from "@/assets/sashimi.jpg";
import makiImg from "@/assets/maki.jpg";
import tempuraImg from "@/assets/tempura.jpg";
import ramenImg from "@/assets/ramen.jpg";
import veggieImg from "@/assets/veggie.jpg";
import ayceImg from "@/assets/ayce.jpg";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { id: "story", label: "Chi Siamo" },
  { id: "menu", label: "Menù" },
  { id: "ayce", label: "All You Can Eat" },
  { id: "gallery", label: "Galleria" },
  { id: "visit", label: "Dove Siamo" },
];

const MENU = [
  { name: "Nigiri", desc: "Riso pressato a mano, una fetta del pesce migliore del giorno.", price: "€2,5 – €4,5", img: nigiriImg },
  { name: "Sashimi", desc: "Salmone, tonno, branzino — il taglio prima di tutto.", price: "€8 – €18", img: sashimiImg },
  { name: "Maki Roll", desc: "Classici, uramaki e roll d'autore con tobiko.", price: "€6 – €14", img: makiImg },
  { name: "Tempura", desc: "Gambero, verdure — leggera, croccante, dorata.", price: "€7 – €12", img: tempuraImg },
  { name: "Ramen", desc: "Brodo lento, noodles e uovo fritto morbido sopra.", price: "€10", img: ramenImg },
  { name: "Vegetariano", desc: "Avocado, cetriolo, fiori commestibili — l'orto in tavola.", price: "€5 – €10", img: veggieImg },
];

const HOURS = [
  { day: "Lunedì", hours: "12:00 – 15:00 · 19:00 – 23:00" },
  { day: "Martedì", hours: "12:00 – 15:00 · 19:00 – 23:00" },
  { day: "Mercoledì", hours: "12:00 – 15:00 · 19:00 – 23:00" },
  { day: "Giovedì", hours: "12:00 – 15:00 · 19:00 – 23:00" },
  { day: "Venerdì", hours: "12:00 – 15:00 · 19:00 – 23:30" },
  { day: "Sabato", hours: "12:00 – 15:30 · 19:00 – 23:30" },
  { day: "Domenica", hours: "12:00 – 15:30 · 19:00 – 23:00" },
];

const REVIEWS = [
  {
    quote:
      "L'all you can eat è incredibile — la qualità non cala dal primo all'ultimo pezzo. Il ramen con l'uovo fritto vale da solo la visita.",
    author: "Giulia R.",
  },
  {
    quote:
      "Impiattamento elegante, servizio caloroso. I roll con la frutta sembrano strani finché non li assaggi. Il miglior sushi di Mestre, senza dubbio.",
    author: "Marco T.",
  },
  {
    quote:
      "Vieni per il nigiri, resti per l'atmosfera. Sembra un vero banco di Tokyo trapiantato a Venezia.",
    author: "Anna B.",
  },
  {
    quote:
      "Ho visitato questo ristorante molte volte e ho sempre avuto un'esperienza meravigliosa. Il proprietario e tutto lo staff sono incredibilmente gentili, accoglienti e attenti, facendo sentire ogni ospite apprezzato.",
    author: "Dung Nguyen",
  },
  {
    quote:
      "Il cibo è buono; hanno un buffet all-you-can-eat a 23,9€ oppure à la carte. Il ramen servito qui è ramen istantaneo con uovo fritto, non noodles freschi giapponesi.",
    author: "N Ng",
  },
  {
    quote:
      "Ho provato questo ristorante all you can eat sushi mentre ero in città per lavoro. Il posto è molto moderno e accattivante. L'atmosfera era fantastica e ha reso tutto piacevole.",
    author: "Miguel J",
  },
  {
    quote:
      "Delizioso: niente di quello che abbiamo ordinato era cattivo. I prezzi erano ottimi e anche il servizio eccellente.",
    author: "Terrell Vick",
  },
  {
    quote:
      "Solido cibo asiatico. Sashimi di qualità decente, piatti fusion asiatici, buon servizio, bel interno e prezzi convenienti.",
    author: "Emma Le",
  },
  {
    quote:
      "Siamo stati nelle vicinanze e questo posto di sushi non ha deluso. Decisamente vale il prezzo all you can eat!",
    author: "Chau Phan",
  },
  {
    quote:
      "Volevo provare questo posto da molto tempo e dopo aver cenato qui posso consigliarlo per chi vuole fare un pasto con amici o famiglia. Ampia selezione di sushi, non solo roll, e prezzi buoni soprattutto se divisi con altre persone.",
    author: "Darta Ivane",
  },
];

function Index() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [review, setReview] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setReview((r) => (r + 1) % REVIEWS.length), 6500);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id: string) => {
    setNavOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-ink font-sans text-cream antialiased">
      {/* ================= HEADER ================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-ink/80 backdrop-blur-md border-b border-gold/15 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 lg:grid-cols-3">
          <button
            onClick={() => scrollTo("top")}
            className="flex min-w-0 items-center gap-3 text-left"
            aria-label="Sushi Long home"
          >
            <span className="font-display text-3xl leading-none text-gold">龍</span>
            <span className="flex min-w-0 flex-col leading-tight">
              <span className="font-display text-lg tracking-wide text-cream">Sushi Long</span>
              <span className="text-[10px] uppercase tracking-[0.32em] text-gold/80">Mestre</span>
            </span>
          </button>

          <nav className="hidden justify-center gap-8 lg:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="group relative text-xs uppercase tracking-[0.28em] text-cream/80 transition-colors hover:text-cream"
              >
                {n.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <a
              href="tel:+390415343886"
              className="hidden items-center gap-2 text-xs uppercase tracking-[0.28em] text-cream/80 transition-colors hover:text-gold lg:inline-flex"
            >
              <Phone className="h-3.5 w-3.5" />
              041 534 3886
            </a>
            <button
              onClick={() => { window.location.href = "tel:+390415343886"; }}
              className="hidden rounded-none border border-gold/60 px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink lg:inline-block"
            >
              Prenota
            </button>
            <button
              className="lg:hidden text-cream"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {navOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {navOpen && (
          <div className="lg:hidden mx-6 mt-4 border-t border-gold/15 bg-ink/95 backdrop-blur-md">
            <div className="flex flex-col gap-1 py-4">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="px-2 py-3 text-left text-sm uppercase tracking-[0.28em] text-cream/85 hover:text-gold"
                >
                  {n.label}
                </button>
              ))}
              <a
                href="tel:+390415343886"
                className="flex items-center gap-2 px-2 py-3 text-sm uppercase tracking-[0.28em] text-gold"
              >
                <Phone className="h-4 w-4" /> 041 534 3886
              </a>
            </div>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section id="top" className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Chef plating nigiri at Sushi Long Mestre"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(17,17,17,0.55)_75%)]" />

        {/* Floating dragon glyph */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-[6%] top-[18%] font-display text-[22rem] leading-none text-crimson/10 animate-float-slow select-none hidden md:block"
        >
          龍
        </span>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] text-gold/90">
            <span className="h-px w-8 bg-gold/60" />
            Venezia · Mestre
            <span className="h-px w-8 bg-gold/60" />
          </div>
          <h1 className="font-display text-6xl font-light tracking-tight text-cream sm:text-7xl md:text-8xl">
            Sushi Long <span className="text-crimson-glow">龍</span>
          </h1>
          <p className="mt-6 max-w-xl text-balance text-base text-cream/80 sm:text-lg">
            L'arte del sushi giapponese nel cuore di Mestre. Nigiri, sashimi,
            ramen e la nostra formula All You Can Eat.
          </p>

          <div className="mt-8 flex items-center gap-2 text-sm text-cream/90">
            <span className="flex items-center gap-1 text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-gold" strokeWidth={0} />
              ))}
            </span>
            <span className="tracking-wide">4.5</span>
            <span className="text-cream/60">· 750+ recensioni Google</span>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+390415343886"
              className="group relative overflow-hidden bg-crimson px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-cream transition-all duration-300 hover:bg-crimson-glow hover:shadow-[0_18px_50px_-15px_rgba(179,18,46,0.7)] active:scale-[0.98]"
            >
              Prenota un Tavolo
            </a>
            <a
              href="tel:+390415343886"
              className="group border border-gold/50 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink active:scale-[0.98]"
            >
              Ordina Online
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-cream/50">
          Scorri
        </div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section id="story" className="relative overflow-hidden py-28">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-16 top-16 font-display text-[18rem] leading-none text-gold/[0.04] select-none"
        >
          龍
        </span>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <SectionEyebrow>Chi Siamo</SectionEyebrow>
            <h2 className="mt-4 font-display text-5xl font-light leading-[1.05] text-cream md:text-6xl">
              Precisione al banco,<br />
              <span className="italic text-gold">calore</span> a tavola.
            </h2>
            <div className="mt-8 space-y-5 text-cream/75 leading-relaxed">
              <p>
                Sushi Long 龍 nasce da un'idea semplice: la disciplina di un
                sushi bar giapponese non deve mai risultare fredda. A Mestre,
                a pochi minuti dalla laguna veneziana, mettiamo un banco
                scuro, una lama affilata e una lunga carta di pesce.
              </p>
              <p>
                Ogni roll è tagliato al momento, ogni ciotola di ramen
                completata con un uovo fritto sul brodo lento. Cena da noi
                per il rito completo, o portalo a casa — delivery e asporto
                con la stessa cura.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-xs uppercase tracking-[0.32em] text-gold">
              <span>In sala</span>
              <span className="text-gold/40">·</span>
              <span>Asporto</span>
              <span className="text-gold/40">·</span>
              <span>Delivery</span>
            </div>
          </div>
          <div className="reveal relative aspect-[4/5] overflow-hidden">
            <img
              src={gallery3}
              alt="Aburi salmon nigiri torched at the counter"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
        </div>
      </section>

      {/* ================= MENU ================= */}
      <section id="menu" className="relative bg-ink-soft py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <SectionEyebrow centered>Il Menù</SectionEyebrow>
            <h2 className="mt-4 font-display text-5xl font-light text-cream md:text-6xl">
              Tagliato, pressato, versato.
            </h2>
            <p className="mt-5 text-cream/70">
              Una selezione dal banco. Chiedi allo chef cosa è arrivato oggi —
              la carta del pesce ruota con il mercato.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {MENU.map((m, i) => (
              <article
                key={m.name}
                className="reveal group relative overflow-hidden bg-ink"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-cream">{m.name}</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">
                      {m.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-cream/70">{m.desc}</p>
                  <span className="mt-4 block h-px w-10 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AYCE ================= */}
      <section id="ayce" className="relative overflow-hidden">
        <div className="relative h-[560px] w-full">
          <img
            src={ayceImg}
            alt="All-you-can-eat sushi spread"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
            <div className="reveal max-w-xl">
              <SectionEyebrow>All You Can Eat</SectionEyebrow>
              <h2 className="mt-4 font-display text-5xl font-light leading-tight text-cream md:text-6xl">
                Un rito.<br />
                <span className="text-gold italic">Tutto il menù.</span>
              </h2>
              <p className="mt-6 text-cream/80">
                Giapponese & Asian Fusion. Siediti, scegli il tuo ritmo,
                lascia che il banco mandi un pezzo dopo l'altro. Nigiri,
                maki, tempura, ramen — tutto fresco al momento.
              </p>
              <a
                href="tel:+390415343886"
                className="mt-8 inline-block border border-gold/60 px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                Prenota l'Esperienza
              </a>
            </div>
          </div>
        </div>

        {/* ---- Pricing cards ---- */}
        <div className="bg-ink-soft py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mx-auto max-w-2xl text-center">
              <SectionEyebrow centered>Formula & Prezzi</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-light text-cream md:text-5xl">
                Scegli la tua tavolata.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {[
                {
                  label: "Menù Pranzo",
                  price: "13,90",
                  note: "a persona",
                  detail: "Tutti i giorni, orario pranzo",
                },
                {
                  label: "Menù Cena",
                  price: "23,90",
                  note: "a persona",
                  detail: "Tutte le sere, orario cena",
                  featured: true,
                },
              ].map((p) => (
                <div
                  key={p.label}
                  className={`reveal relative overflow-hidden border p-10 text-center ${
                    p.featured
                      ? "border-gold bg-gradient-to-b from-crimson/20 to-ink"
                      : "border-gold/25 bg-ink"
                  }`}
                >
                  {p.featured && (
                    <span className="absolute right-4 top-4 border border-gold/50 px-2 py-1 text-[9px] uppercase tracking-[0.28em] text-gold">
                      Più Richiesto
                    </span>
                  )}
                  <div className="text-[11px] uppercase tracking-[0.32em] text-gold">
                    {p.label}
                  </div>
                  <div className="mt-6 flex items-start justify-center gap-1">
                    <span className="mt-3 font-display text-2xl text-cream/70">€</span>
                    <span className="font-display text-7xl leading-none text-cream">
                      {p.price}
                    </span>
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.32em] text-cream/60">
                    {p.note}
                  </div>
                  <p className="mt-6 text-sm text-cream/70">{p.detail}</p>
                </div>
              ))}
            </div>

            {/* Info badges */}
            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {[
                {
                  icon: <Utensils className="h-4 w-4" />,
                  title: "Coperto",
                  body: "€ 2,00 a persona",
                },
                {
                  icon: <Baby className="h-4 w-4" />,
                  title: "Bambini",
                  body: "Sotto 120 cm pagano metà",
                },
                {
                  icon: <Coffee className="h-4 w-4" />,
                  title: "Esclusi",
                  body: "Bevande, dolci e caffè",
                },
                {
                  icon: <AlertTriangle className="h-4 w-4" />,
                  title: "Anti-Spreco",
                  body: "Cibo non consumato addebitato a listino",
                  warn: true,
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className={`reveal border p-5 ${
                    b.warn
                      ? "border-crimson/50 bg-crimson/10"
                      : "border-gold/20 bg-ink"
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] ${
                      b.warn ? "text-crimson-glow" : "text-gold"
                    }`}
                  >
                    {b.icon}
                    {b.title}
                  </div>
                  <p className="mt-3 text-sm text-cream/85">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ---- Limits ---- */}
        <div className="bg-ink py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="reveal mx-auto max-w-2xl text-center">
              <SectionEyebrow centered>Limiti Ordinazione</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-light text-cream md:text-5xl">
                Regole della casa.
              </h2>
              <p className="mt-4 text-sm text-cream/65">
                Per garantire qualità e freschezza a tutti i nostri ospiti.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {/* Pranzo */}
              <div className="reveal border border-gold/25 bg-ink-soft p-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gold" />
                  <span className="text-[11px] uppercase tracking-[0.32em] text-gold">
                    Menù Pranzo
                  </span>
                </div>
                <ul className="mt-6 divide-y divide-gold/10">
                  {[
                    {
                      icon: <Flame className="h-4 w-4 text-crimson-glow" />,
                      name: "Piatti alla piastra",
                      limit: "Max 2 volte / persona",
                    },
                    {
                      icon: <Fish className="h-4 w-4 text-gold" />,
                      name: "Sashimi di salmone (art. 156)",
                      limit: "Max 2 volte / persona",
                    },
                  ].map((l) => (
                    <li
                      key={l.name}
                      className="flex items-center justify-between gap-4 py-4"
                    >
                      <span className="flex items-center gap-3 text-sm text-cream/90">
                        {l.icon}
                        {l.name}
                      </span>
                      <span className="shrink-0 text-[10px] uppercase tracking-[0.28em] text-gold">
                        {l.limit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cena */}
              <div className="reveal border border-gold/40 bg-gradient-to-b from-ink-soft to-ink p-8">
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-gold" />
                  <span className="text-[11px] uppercase tracking-[0.32em] text-gold">
                    Menù Cena
                  </span>
                </div>
                <ul className="mt-6 divide-y divide-gold/10">
                  {[
                    {
                      icon: <Flame className="h-4 w-4 text-crimson-glow" />,
                      name: "Piatti alla piastra",
                      limit: "Max 10 porzioni / persona",
                    },
                    {
                      icon: <Fish className="h-4 w-4 text-gold" />,
                      name: "Carpacci & Sashimi",
                      limit: "Max 10 porzioni / persona",
                    },
                    {
                      icon: <Utensils className="h-4 w-4 text-gold" />,
                      name: "Tartar",
                      limit: "Max 10 porzioni / persona",
                    },
                    {
                      icon: <Star className="h-4 w-4 fill-gold text-gold" />,
                      name: "Speciali (Scampi sashimi, Chirashi black tartar, Tartar long style)",
                      limit: "Max 2 volte / persona",
                    },
                  ].map((l) => (
                    <li
                      key={l.name}
                      className="flex items-start justify-between gap-4 py-4"
                    >
                      <span className="flex items-start gap-3 text-sm text-cream/90">
                        <span className="mt-0.5">{l.icon}</span>
                        {l.name}
                      </span>
                      <span className="shrink-0 text-[10px] uppercase tracking-[0.28em] text-gold">
                        {l.limit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section id="gallery" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <SectionEyebrow centered>Galleria</SectionEyebrow>
            <h2 className="mt-4 font-display text-5xl font-light text-cream md:text-6xl">
              Dal banco all'obiettivo.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { src: gallery1, alt: "Fruit-topped sushi rolls", span: "col-span-2 row-span-2 aspect-square" },
              { src: nigiriImg, alt: "Nigiri platter", span: "aspect-square" },
              { src: sashimiImg, alt: "Sashimi", span: "aspect-square" },
              { src: gallery2, alt: "Restaurant interior", span: "col-span-2 aspect-[2/1]" },
              { src: makiImg, alt: "Maki rolls", span: "aspect-square" },
              { src: tempuraImg, alt: "Tempura prawns", span: "aspect-square" },
            ].map((g, i) => (
              <figure
                key={i}
                className={`reveal group relative overflow-hidden ${g.span}`}
                style={{ transitionDelay: `${i * 70}ms` }}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="relative bg-ink-soft py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <SectionEyebrow centered>Ospiti</SectionEyebrow>
          <div className="mt-6 flex items-center justify-center gap-2">
            <span className="flex items-center gap-1 text-gold">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-gold" strokeWidth={0} />
              ))}
            </span>
            <span className="font-display text-2xl text-cream">4.5</span>
            <span className="text-sm text-cream/60">/ 5 · 750+ recensioni su Google</span>
          </div>

          <div className="mt-14 relative min-h-[200px]">
            {REVIEWS.map((r, i) => (
              <blockquote
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  i === review ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                <p className="font-display text-2xl italic leading-relaxed text-cream md:text-3xl">
                  “{r.quote}”
                </p>
                <footer className="mt-6 text-xs uppercase tracking-[0.32em] text-gold">
                  — {r.author}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={() => setReview((r) => (r - 1 + REVIEWS.length) % REVIEWS.length)}
              aria-label="Previous review"
              className="text-cream/60 transition-colors hover:text-gold"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Review ${i + 1}`}
                  onClick={() => setReview(i)}
                  className={`h-px w-8 transition-colors ${
                    i === review ? "bg-gold" : "bg-cream/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setReview((r) => (r + 1) % REVIEWS.length)}
              aria-label="Next review"
              className="text-cream/60 transition-colors hover:text-gold"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= VISIT ================= */}
      <section id="visit" className="py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <SectionEyebrow centered>Dove Siamo</SectionEyebrow>
            <h2 className="mt-4 font-display text-5xl font-light text-cream md:text-6xl">
              Trova il banco.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="reveal aspect-[4/3] overflow-hidden border border-gold/20 lg:aspect-auto">
              <iframe
                title="Sushi Long Mestre location"
                src="https://www.google.com/maps?q=Via+S.+Don%C3%A0,+156,+30174+Venezia+VE,+Italy&output=embed"
                className="h-full w-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="reveal space-y-8">
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.32em] text-gold">Indirizzo</h3>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+S.+Don%C3%A0,+156,+30174+Venezia+VE,+Italy"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 flex items-start gap-3 text-cream/85 transition-colors hover:text-gold"
                >
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>Via S. Donà, 156<br />30174 Venezia VE, Italy</span>
                </a>
              </div>

              <div>
                <h3 className="text-[11px] uppercase tracking-[0.32em] text-gold">Prenota · Ordina</h3>
                <a
                  href="tel:+390415343886"
                  className="mt-3 flex items-center gap-3 font-display text-2xl text-cream transition-colors hover:text-gold"
                >
                  <Phone className="h-4 w-4 text-gold" /> 041 534 3886
                </a>
              </div>

              <div>
                <h3 className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-gold">
                  <Clock className="h-3.5 w-3.5" /> Orari
                </h3>
                <dl className="mt-4 divide-y divide-gold/10 border-t border-gold/10">
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="grid grid-cols-[minmax(0,auto)_1fr] gap-6 py-3 text-sm"
                    >
                      <dt className="text-cream/60">{h.day}</dt>
                      <dd className="text-right text-cream/90">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="relative overflow-hidden border-y border-gold/20 bg-crimson/95">
        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 font-display text-[16rem] leading-none text-ink/10 select-none"
        >
          龍
        </span>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[1.4fr_auto] md:items-center">
          <div>
            <SectionEyebrow tone="cream">Stasera</SectionEyebrow>
            <h2 className="mt-3 font-display text-4xl font-light text-cream md:text-5xl">
              Prenota un tavolo, o porta il banco a casa.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+390415343886"
              className="border border-cream/70 bg-transparent px-8 py-4 text-center text-[11px] uppercase tracking-[0.32em] text-cream transition-all duration-300 hover:bg-cream hover:text-ink"
            >
              Chiama 041 534 3886
            </a>
            <a
              href="tel:+390415343886"
              className="bg-ink px-8 py-4 text-[11px] uppercase tracking-[0.32em] text-gold transition-all duration-300 hover:bg-ink/80"
            >
              Prenota un Tavolo
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-ink py-16">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="font-display text-4xl leading-none text-gold">龍</span>
              <div className="leading-tight">
                <div className="font-display text-xl text-cream">Sushi Long</div>
                <div className="text-[10px] uppercase tracking-[0.32em] text-gold/80">Mestre · Venezia</div>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm text-cream/60">
              Artigianato giapponese, ospitalità veneziana. In sala, asporto
              e delivery — ogni sera della settimana.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-gold">Contatti</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li>
                <a href="tel:+390415343886" className="hover:text-gold">041 534 3886</a>
              </li>
              <li>
                <a
                  href="https://wa.me/393791481589"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp · 379 148 1589
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Via+S.+Don%C3%A0,+156,+30174+Venezia+VE,+Italy"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  Via S. Donà, 156, Mestre
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/longmestre"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <Instagram className="h-4 w-4" /> @longmestre
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Sushi-Long%E9%BE%8D-Mestre/100049105158638/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-gold"
                >
                  <Facebook className="h-4 w-4" /> Facebook
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.32em] text-gold">Orari</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>Lun – Gio · 12:00 – 23:00</li>
              <li>Ven – Sab · 12:00 – 23:30</li>
              <li>Domenica · 12:00 – 23:00</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-gold/10 px-6 pt-6 text-[11px] uppercase tracking-[0.28em] text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Sushi Long 龍 Mestre</span>
          <span>P.IVA — Venezia, Italia</span>
        </div>
      </footer>
    </div>
  );
}

function SectionEyebrow({
  children,
  centered,
  tone = "gold",
}: {
  children: React.ReactNode;
  centered?: boolean;
  tone?: "gold" | "cream";
}) {
  const color = tone === "gold" ? "text-gold" : "text-cream/85";
  const bar = tone === "gold" ? "bg-gold/60" : "bg-cream/60";
  return (
    <div
      className={`flex items-center gap-3 text-[10px] uppercase tracking-[0.5em] ${color} ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className={`h-px w-8 ${bar}`} />
      {children}
      {centered && <span className={`h-px w-8 ${bar}`} />}
    </div>
  );
}
