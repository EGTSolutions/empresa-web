import { site } from "@/data/site";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">
              ¿Listo para dejar de improvisar y empezar a escalar?
            </h3>
            <p className="mt-3 text-zinc-300">
              Llamada de 15 minutos: objetivo, ruta y siguiente paso. Sin humo, con números.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
              href="#contacto"
            >
              Agendar
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10"
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hola, quiero una llamada de 15 minutos. ¿Qué disponibilidad tienes?"
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp directo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
