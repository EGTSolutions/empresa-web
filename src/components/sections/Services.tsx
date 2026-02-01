import { Bot, Code, Database, Gauge, Globe, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing pages que convierten",
    desc: "Diseño premium + copy + SEO técnico. Cargas rápidas y CTA claros. Nada de “bonito pero inútil”.",
  },
  {
    icon: Code,
    title: "Sistemas web a medida",
    desc: "Paneles admin, multiusuario, roles, dashboards, flujos de negocio. Escalable desde el día 1.",
  },
  {
    icon: Bot,
    title: "Automatización de procesos",
    desc: "Integraciones, bots, notificaciones, tareas programadas. Tu operación deja de depender de héroes.",
  },
  {
    icon: Database,
    title: "Integraciones & APIs",
    desc: "Pagos, ERP/CRM, e-commerce, webhooks, ETL. Datos sincronizados y trazables.",
  },
  {
    icon: Gauge,
    title: "Performance & observabilidad",
    desc: "Optimización, monitoreo, logs, métricas. Menos “a veces falla” y más control operativo.",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y buenas prácticas",
    desc: "Validaciones, control de acceso, rate limit, saneamiento y bases sólidas para crecer seguro.",
  },
];

export default function Services() {
  return (
<section id="servicios" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24 scroll-mt-28">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold md:text-3xl">Servicios</h2>
        <p className="max-w-2xl text-zinc-300">
          Paquetes listos para vender y desarrollo a medida. Tú pones el objetivo,
          nosotros ponemos la ingeniería.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
                <s.icon className="h-5 w-5" />
              </span>
              <div className="font-semibold">{s.title}</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
