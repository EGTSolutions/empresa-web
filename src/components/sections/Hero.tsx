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
      <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
        {/* ===== Left / Copy ===== */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-300">
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

        {/* ===== Right / Full-height background mockup ===== */}
        <div className="relative min-h-[420px] md:min-h-[520px]">
          {/* Glow/gradiente para integrar el mockup con el fondo */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="hero-spotlight" />
            <div className="hero-grid" />
          </div>

          {/* Mockup como “fondo” del lado derecho */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-full md:w-[115%] lg:w-[125%]">
            <HeroMockup mode="bg" />
          </div>

          {/* En móviles: el mockup no tapa el texto porque está en otra columna.
              Aún así lo hacemos más “soft” por si el layout se aprieta */}
          <div className="pointer-events-none absolute inset-0 md:hidden">
            <div className="hero-mobile-fade" />
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
