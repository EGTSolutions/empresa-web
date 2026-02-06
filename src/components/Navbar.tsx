"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Facebook, Menu, MessageCircle, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { scrollToId } from "@/components/scroll";

const nav = [
  { id: "servicios", label: "Servicios" },
  { id: "proceso", label: "Proceso" },
  { id: "portafolio", label: "Portafolio" },
  { id: "precios", label: "Planes" },
  { id: "faq", label: "FAQ" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);

  // Publica altura real en --header-h (móvil/desktop)
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const setVar = () => {
      const h = el.getBoundingClientRect().height || 112;
      document.documentElement.style.setProperty("--header-h", `${Math.ceil(h)}px`);
    };

    setVar();
    const ro = new ResizeObserver(() => setVar());
    ro.observe(el);

    window.addEventListener("resize", setVar);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVar);
    };
  }, []);

  // Bloquea / libera scroll cuando abre/cierra el drawer
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    if (open) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";

      requestAnimationFrame(() => {
        window.scrollTo({ top: window.scrollY, behavior: "auto" });
      });
    }

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [open]);

  // Cierra drawer al pasar a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navTo = (id: string) => {
    setOpen(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <header
      ref={headerRef}
      style={
        {
          ["--nav-bg-alpha" as any]: 0.92,
        } as React.CSSProperties
      }
      className={cn(
        "sticky top-0 z-50 border-b border-white/10",
        "bg-[rgb(9_9_11/var(--nav-bg-alpha))]"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <button onClick={() => navTo("inicio")} className="flex items-center gap-3 text-left">
          <span className="relative grid h-10 w-10 place-items-center rounded-2xl bg-white/5 ring-1 ring-white/10">
            {/* Siempre logo blanco en tono oscuro */}
            <Image
              src={site.logo.markLight}
              alt={site.logo.alt}
              fill
              sizes="40px"
              className="object-contain p-[6px]"
              priority
            />
          </span>

          <div className="flex flex-col justify-center leading-none">
            <div className="text-[14px] font-semibold uppercase tracking-[0.20em] text-white leading-none sm:text-[24px]">
              {site.brand}
            </div>
            <div className="hidden lg:block text-[11px] font-medium tracking-wide text-zinc-400 leading-none mt-1">
              {site.tagline}
            </div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => navTo(n.id)}
              className="text-sm text-zinc-300 hover:text-white"
            >
              {n.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Placa de fondo atrás de los botones (desktop) */}
          <div
            className={cn(
              "hidden md:flex items-center gap-2 rounded-2xl px-2 py-2",
              "bg-white/5 ring-1 ring-white/10"
            )}
          >
            <a
              className={cn(
                "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
                "bg-white/10 hover:bg-white/15 border border-white/10"
              )}
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                "Hola, me interesa una cotización. ¿Podemos agendar una llamada?"
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>

            {/* Facebook */}
            <a
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
              href={site.social.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>

            <button
              className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
              onClick={() => navTo("contacto")}
            >
              Cotizar
            </button>
          </div>

          {/* Mobile button (con su propia placa) */}
          <div className="md:hidden rounded-2xl bg-white/5 ring-1 ring-white/10 p-1">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 hover:bg-white/15"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />

          <div
            className={cn(
              "absolute right-0 top-0 h-[100dvh] w-[88%] max-w-sm",
              "bg-[rgb(9_9_11/0.98)] shadow-2xl ring-1 ring-white/10",
              "flex flex-col"
            )}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <button onClick={() => navTo("inicio")} className="flex items-center gap-2 text-left">
                <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5">
                  {/* Siempre logo blanco también en el drawer */}
                  <Image
                    src={site.logo.markLight}
                    alt={site.logo.alt}
                    fill
                    sizes="40px"
                    className="object-contain p-[6px]"
                    priority
                  />
                </span>
                <div className="text-[15px] font-semibold uppercase tracking-[0.18em] text-white sm:text-[16px]">
                  {site.brand}
                </div>
              </button>

              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-2">
                <div className="grid gap-2">
                  {nav.map((n) => (
                    <button
                      key={n.id}
                      onClick={() => navTo(n.id)}
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-left text-sm font-semibold text-zinc-100 hover:bg-white/15"
                    >
                      {n.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-3 border-t border-white/10 pt-4">
                <button
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
                  onClick={() => navTo("contacto")}
                >
                  Cotizar
                </button>

                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15"
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    "Hola, me interesa una cotización. ¿Podemos agendar una llamada?"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>

                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold hover:bg-white/15"
                  href={site.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Facebook className="h-4 w-4" />
                  Facebook
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 px-4 py-3 text-xs text-zinc-400">
              {/* placeholder */}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
