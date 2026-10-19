import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig, programParamLabels } from "@/config/site";
import { GlassesMark, coverageIcons } from "./Icons";
import heroImg from "@/assets/hero-glasses.jpg";
import detailImg from "@/assets/detail-glasses.jpg";

const c = siteConfig;


export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-bold tracking-tight">
      <GlassesMark className="h-4 w-8" />
      <span className="text-base sm:text-lg">{c.name}</span>
    </a>
  );
}

export function Header({ onApply }: OpenProps) {
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav aria-label="Основная навигация" className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            {c.nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:underline underline-offset-4">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="lime" size="pill" onClick={onApply}>
          {c.hero.cta}
        </Button>
      </div>
    </header>
  );
}

export function Hero({ onApply }: OpenProps) {
  const h = c.hero;
  return (
    <section id="top" className="container-page grid gap-10 pt-10 pb-16 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-14 lg:pb-24">
      <div>
        <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface px-4 py-1.5 text-sm font-semibold">
          <GlassesMark className="h-3 w-6" /> {h.eyebrow}
        </p>
        <h1 className="display">
          <span className="block max-w-xl text-base font-semibold leading-snug tracking-normal text-muted-foreground sm:text-2xl">
            {h.lead}
          </span>
          <span className="mt-3 block text-[2.4rem] sm:text-5xl lg:text-[4.25rem]">{h.main}</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{h.description}</p>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="display text-4xl sm:text-5xl">
              {c.price.amount}{" "}
              <span className="text-xl font-semibold tracking-normal sm:text-2xl">{c.price.period}</span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{c.price.note}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button variant="lime" size="lg" onClick={onApply}>
            {h.cta} <ArrowRight />
          </Button>
          <a href="#terms" className="px-1 font-semibold underline underline-offset-4">
            {h.secondary}
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Коротко о программе">
          {h.tags.map((t) => (
            <li key={t} className="rounded-full border px-4 py-2 text-sm font-medium">
              {t}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <img
          src={heroImg}
          alt="Очки в зелёной оправе на светлом фоне"
          width={1200}
          height={1408}
          fetchPriority="high"
          className="aspect-[6/7] w-full rounded-3xl object-cover"
        />
        <div className="absolute bottom-5 left-5 rounded-2xl bg-background/95 px-5 py-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Защита</p>
          <p className="text-lg font-bold">12 месяцев</p>
        </div>
      </div>
    </section>
  );
}

export function Coverage() {
  const first = c.coverage.items[0]!;
  const rest = c.coverage.items.slice(1);
  const FirstIcon = coverageIcons[first.icon as keyof typeof coverageIcons];
  const [before, after] = first.text.split(first.highlight!);
  return (
    <section id="coverage" className="bg-surface py-20 lg:py-28">
      <div className="container-page">
        <h2 className="display max-w-2xl text-4xl sm:text-5xl">{c.coverage.title}</h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <article className="flex flex-col justify-between rounded-3xl bg-ink p-8 text-ink-foreground sm:p-10">
            <div className="flex items-start justify-between gap-6">
              <FirstIcon className="size-12" />
              <p className="display text-right text-5xl text-lime sm:text-7xl">
                ≥ 0,5
                <span className="block text-base font-semibold tracking-normal">диоптрии</span>
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{first.title}</h3>
              <p className="mt-4 max-w-xl leading-relaxed opacity-90">
                {before}
                <mark className="rounded bg-lime px-1 font-semibold text-lime-foreground">{first.highlight}</mark>
                {after}
              </p>
            </div>
          </article>
          <div className="grid gap-6">
            {rest.map((it) => {
              const Icon = coverageIcons[it.icon as keyof typeof coverageIcons];
              return (
                <article key={it.title} className="rounded-3xl bg-background p-8">
                  <Icon className="size-11" />
                  <h3 className="mt-6 text-xl font-bold tracking-tight">{it.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{it.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section id="how" className="container-page py-20 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h2 className="display text-4xl sm:text-5xl">{c.steps.title}</h2>
          <img
            src={detailImg}
            alt="Крупный план шарнира оправы и края линзы"
            width={1200}
            height={912}
            loading="lazy"
            className="mt-10 hidden aspect-[4/3] w-full rounded-3xl object-cover lg:block"
          />
        </div>
        <ol className="divide-y border-y">
          {c.steps.items.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[3.5rem_1fr] gap-4 py-8 sm:grid-cols-[5rem_1fr]">
              <span className="display text-4xl text-muted-foreground sm:text-5xl" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  <span className="sr-only">Шаг {i + 1}. </span>
                  {s.title}
                </h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Terms() {
  const params = (Object.keys(c.program) as (keyof typeof c.program)[]).filter((k) => c.program[k]);
  return (
    <section id="terms" className="border-y bg-card py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 className="display text-4xl sm:text-5xl">{c.terms.title}</h2>
          <p className="mt-6 max-w-sm rounded-2xl bg-surface p-5 font-medium leading-relaxed">{c.terms.note}</p>
        </div>
        <dl className="divide-y">
          {c.terms.rows.map((r) => (
            <div key={r.label} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{r.label}</dt>
              <dd className="text-lg font-medium">{r.value}</dd>
            </div>
          ))}
          {params.map((k) => (
            <div key={k} className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{programParamLabels[k]}</dt>
              <dd className="text-lg font-medium">{c.program[k]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="container-page max-w-4xl py-20 lg:py-28">
      <h2 className="display text-4xl sm:text-5xl">{c.faq.title}</h2>
      <Accordion type="single" collapsible className="mt-10">
        {c.faq.items.map((f, i) => (
          <AccordionItem key={f.q} value={`q${i}`}>
            <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function FinalCta({ onApply }: OpenProps) {
  return (
    <section className="container-page pb-20">
      <div className="rounded-3xl bg-ink px-6 py-16 text-ink-foreground sm:px-12 lg:py-24">
        <h2 className="display max-w-3xl text-4xl sm:text-6xl">{c.final.title}</h2>
        <p className="mt-6 text-xl font-semibold text-lime">{c.final.price}</p>
        <Button variant="lime" size="lg" className="mt-8" onClick={onApply}>
          {c.final.cta} <ArrowRight />
        </Button>
        <p className="mt-5 max-w-md text-sm opacity-80">{c.final.note}</p>
      </div>
    </section>
  );
}

export function Footer() {
  const docs = [c.documents.terms, c.documents.rules, c.documents.kid, c.documents.privacy];
  return (
    <footer className="border-t pb-28 pt-12 md:pb-12">
      <div className="container-page grid gap-8 md:grid-cols-[1fr_1.5fr]">
        <div>
          <Logo />
          {c.insurer.requisites && <p className="mt-4 text-sm text-muted-foreground">{c.insurer.requisites}</p>}
          {c.insurer.contacts && <p className="mt-2 text-sm text-muted-foreground">{c.insurer.contacts}</p>}
        </div>
        {docs.some((d) => d.url) && (
          <ul className="grid gap-3 text-sm sm:grid-cols-2">
            {docs.map((d) =>
              d.url ? (
                <li key={d.label}>
                  <a href={d.url} target="_blank" rel="noopener noreferrer" className="font-medium underline underline-offset-4">
                    {d.label}
                  </a>
                </li>
              ) : null,
            )}
          </ul>
        )}
      </div>
    </footer>
  );
}

export function MobileBar({ onApply }: OpenProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/95 backdrop-blur md:hidden">
      <div className="container-page flex h-18 items-center justify-between gap-3 py-3">
        <div>
          <p className="font-bold leading-tight">{c.price.amount}</p>
          <p className="text-xs text-muted-foreground">{c.price.period}</p>
        </div>
        <Button variant="lime" size="pill" onClick={onApply}>
          {c.hero.cta}
        </Button>
      </div>
    </div>
  );
}
