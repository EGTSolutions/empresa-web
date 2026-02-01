const steps = [
  {
    n: "01",
    title: "Diagnóstico & objetivos",
    desc: "Definimos alcance, KPI, público, restricciones y éxito medible. Sin esto, todo es “me parece”.",
  },
  {
    n: "02",
    title: "Arquitectura & diseño",
    desc: "Estructura, UX, componentes y plan de entrega. Listo para escalar, no para sufrir.",
  },
  {
    n: "03",
    title: "Construcción",
    desc: "Desarrollo con buenas prácticas, revisiones y avances. Visible, auditable y sin humo.",
  },
  {
    n: "04",
    title: "Deploy & mejora continua",
    desc: "Publicación, medición, ajustes y nuevas iteraciones. Producto vivo, no PDF con fe.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold md:text-3xl">Proceso</h2>
        <p className="max-w-2xl text-zinc-300">
          Flujo simple, pero serio. Construimos como negocio, no como experimento.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((s) => (
          <div key={s.n} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-baseline justify-between">
              <div className="text-sm text-zinc-400">Paso {s.n}</div>
              <div className="text-xs text-zinc-400">Entrega incremental</div>
            </div>
            <div className="mt-2 text-lg font-semibold">{s.title}</div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
