import Image from "next/image";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Top */}
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div className="space-y-3">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-black/40 ring-1 ring-white/15">
                {/* Siempre logo blanco para fondo oscuro */}
                <Image
                  src={site.logo.markLight}
                  alt={site.logo.alt}
                  fill
                  sizes="44px"
                  className="object-contain p-[6px]"
                  priority
                />
              </span>

              <div className="leading-none">
                <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  {site.brand}
                </div>
                <div className="mt-1 text-xs text-zinc-500">
                  © {year} · Software que escala con tu negocio.
                </div>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-zinc-400">
              Software a la medida, automatización y productos digitales con enfoque en performance,
              seguridad y crecimiento.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Contacto
            </div>

            <div className="text-sm text-zinc-400">
              <span className="text-zinc-500">Ubicación:</span>{" "}
              <span className="text-zinc-300">{site.location}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>

              <a
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:bg-white/10"
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  "Hola, me interesa una cotización. ¿Podemos agendar una llamada?"
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-3 md:justify-self-end md:text-right">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Siguiente paso
            </div>

            <p className="text-sm text-zinc-400 md:max-w-xs md:ml-auto">
              Cuéntanos tu objetivo y te regresamos una propuesta con alcance, tiempos y plan de ejecución.
            </p>

            <a
              className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90 md:ml-auto"
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hola, quiero agendar una llamada de 15 minutos para revisar mi proyecto."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Agendar llamada
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>
            © {year} {site.brand}. Todos los derechos reservados.
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-2">
            <span className="text-zinc-600">Hecho para escalar.</span>
            <span className="hidden md:inline text-zinc-700">·</span>
            <a className="hover:text-white" href={`mailto:${site.email}`}>
              Soporte
            </a>
            <span className="text-zinc-700">·</span>
            <a
              className="hover:text-white"
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hola, necesito soporte."
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
