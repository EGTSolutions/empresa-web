const plans = [
  {
    name: "Starter",
    price: "Desde $6,500 MXN",
    desc: "Landing profesional lista para vender.",
    bullets: ["1 página (scroll)", "SEO técnico base", "WhatsApp + formulario", "Deploy y checklist"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "Desde $18,000 MXN",
    desc: "Sitio/sistema con más músculo.",
    bullets: ["3–6 páginas", "Microinteracciones", "Integración básica API", "Analytics y eventos"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Cotización",
    desc: "Arquitectura e integraciones avanzadas.",
    bullets: ["Panel admin + roles", "Automatizaciones", "Observabilidad", "Estrategia escalabilidad"],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold md:text-3xl">Planes</h2>
        <p className="max-w-2xl text-zinc-300">
          Precios orientativos. Si tu proyecto trae “modo incendio”, lo apagamos… pero no con agua bendita.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={[
              "rounded-3xl border p-6",
              p.highlight
                ? "border-white/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.12)]"
                : "border-white/10 bg-white/5",
            ].join(" ")}
          >
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              {p.highlight && (
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
                  Más elegido
                </span>
              )}
            </div>
            <div className="mt-2 text-2xl font-semibold">{p.price}</div>
            <div className="mt-2 text-sm text-zinc-300">{p.desc}</div>

            <ul className="mt-6 space-y-2 text-sm text-zinc-200">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className={[
                "mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold",
                p.highlight ? "bg-white text-black hover:opacity-90" : "border border-white/10 bg-white/5 hover:bg-white/10",
              ].join(" ")}
            >
              Quiero este plan
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
