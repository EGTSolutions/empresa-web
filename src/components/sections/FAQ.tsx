const faqs = [
  { q: "¿En cuánto tiempo entregan?", a: "Depende del alcance. Landing: 7–21 días. Sistemas: por fases con entregas incrementales." },
  { q: "¿Incluye hosting y dominio?", a: "Te ayudamos a configurarlo. Por defecto queda listo para deploy en Vercel." },
  { q: "¿Hacen automatizaciones e integraciones?", a: "Sí: APIs, webhooks, jobs programados y sincronización con trazabilidad." },
  { q: "¿Cómo evitamos sorpresas de alcance?", a: "Definimos objetivos, criterios de éxito y backlog por fases. Cambia el alcance, cambia el plan." },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold md:text-3xl">FAQ</h2>
        <p className="max-w-2xl text-zinc-300">
          Respuestas rápidas. Si tu pregunta no está aquí, la resolvemos en llamada.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.q} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="font-semibold">{f.q}</div>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
