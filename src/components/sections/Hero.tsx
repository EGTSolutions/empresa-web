"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import HeroMockup from "@/components/media/HeroMockup";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="mx-auto max-w-6xl px-4"
      style={{ paddingTop: "calc(var(--header-h) + 24px)" }}
    >
      {/* Wrapper relativo para poder poner el mockup como fondo en lg+ */}
      <div className="relative overflow-hidden">
        {/* ===== Mockup de fondo SOLO en pantallas grandes (lg+) ===== */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block w-[60%]">
          {/* grid/glow detrás */}
          <div className="absolute inset-0">
            <div className="hero-spotlight" />
            <div className="hero-grid" />
          </div>

          {/* Mockup como fondo */}
          <div className="absolute inset-0">
            <HeroMockup mode="bg" />
          </div>

          {/* Fade derecho para que el corte se vea premium */}
          <div className="absolute inset-y-0 right-0 w-44 bg-gradient-to-l from-zinc-950/95 to-transparent" />
          {/* Fade inferior sutil */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950/85 to-transparent" />
        </div>

        <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
          {/* ===== Left / Copy ===== */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/60 px-3 py-1 text-sm text-zinc-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>Entregas rápidas, código limpio, enfoque negocio.</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-5 text-4xl font-semibold tracking-tight md:text-5xl"
            >
              {site.hero.headline}
            </motion.h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">
              {site.hero.subheadline}
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
                href="#contacto"
              >
                {site.hero.ctas.primary}
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                href="#servicios"
              >
                {site.hero.ctas.secondary}
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-zinc-400">
              <Stat title="Entrega" value="7–21 días" />
              <Stat title="Stack" value="Next.js · TS" />
              <Stat title="Enfoque" value="ROI + UX" />
            </div>
          </div>

          {/* ===== Right / Mockup NORMAL (solo hasta md) ===== */}
          {/* En lg+ lo ocultamos porque el mockup ya es fondo */}
          <div className="relative min-h-[420px] md:min-h-[520px] overflow-hidden lg:hidden">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="hero-spotlight" />
              <div className="hero-grid" />
            </div>

            <div className="relative h-full w-full">
              <HeroMockup mode="bg" />
            </div>

            {/* En móviles: scrim para legibilidad */}
            <div className="pointer-events-none absolute inset-0 md:hidden">
              <div className="hero-mobile-scrim" />
            </div>

            {/* fade derecho */}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-zinc-950/90 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
      <div className="text-[11px] uppercase tracking-wide">{title}</div>
      <div className="mt-1 text-sm font-semibold text-zinc-200">{value}</div>
    </div>
  );
}
