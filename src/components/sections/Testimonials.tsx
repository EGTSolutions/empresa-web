const quotes = [
  {
    name: "Líder de Operaciones",
    role: "Retail / Backoffice",
    text: "Antes todo era Excel y “alguien que sabía”. Ahora hay estados, trazabilidad y reportes listos en minutos.",
  },
  {
    name: "Dirección",
    role: "Servicios B2B",
    text: "No vinieron a picar teclas: aterrizaron el problema, definieron métricas y entregaron una solución que se nota en el negocio.",
  },
  {
    name: "Responsable de TI",
    role: "Plataforma interna",
    text: "Se acabaron las caídas por picos. Rate limiting + cache + monitoreo: estabilidad sin complicar la operación.",
  },
  {
    name: "Product Owner",
    role: "Producto digital",
    text: "Por fin tenemos eventos y embudo. Dejamos de discutir “sensaciones” y empezamos a decidir con datos.",
  },
  {
    name: "Coordinación Administrativa",
    role: "Operación multi-área",
    text: "Roles y permisos bien implementados. Cada quien ve lo suyo y todo queda registrado: menos errores y más control.",
  },
  {
    name: "Líder de Integraciones",
    role: "Automatización",
    text: "La sincronización dejó de duplicar registros. Idempotencia y reintentos controlados nos ahorraron muchísimo retrabajo.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold md:text-3xl">Testimonios</h2>
        <p className="max-w-2xl text-zinc-300">
          Voces de stakeholders y equipos con los que hemos trabajado: impacto tangible en operación, estabilidad y métricas.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {quotes.map((q, idx) => (
          <div
            key={`${q.name}-${idx}`}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <p className="text-sm leading-relaxed text-zinc-200">“{q.text}”</p>
            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="font-semibold">{q.name}</div>
              <div className="text-sm text-zinc-400">{q.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
