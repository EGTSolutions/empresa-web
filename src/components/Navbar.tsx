"use client";

import { useEffect, useRef, useState } from "react";
import { Code2, Github, Linkedin, Menu, MessageCircle, X } from "lucide-react";
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

  // Bloquea / libera scroll del body cuando abre/cierra el drawer
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
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
    // Importantísimo: cierra primero, luego scroll (para que no se quede el body en overflow hidden)
    setOpen(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 border-b border-white/10",
        "bg-zinc-950",
        "supports-[backdrop-filter]:bg-zinc-950/95 supports-[backdrop-filter]:backdrop-blur"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <button onClick={() => navTo("inicio")} className="flex items-center gap-2 text-left">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/10">
            <Code2 className="h-5 w-5" />
          </span>
          <div className="leading-tight">
            <div className="font-semibold">{site.brand}</div>
            <div className="hidden text-xs text-zinc-400 sm:block">{site.tagline}</div>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
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
          {/* WhatsApp desktop */}
          <a
            className={cn(
              "hidden md:inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm",
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

          {/* Social desktop */}
          <a
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          {/* CTA */}
          <button
            className="hidden sm:inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
            onClick={() => navTo("contacto")}
          >
            Cotizar
          </button>

          {/* Mobile button */}
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (OPACO) */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/85" onClick={() => setOpen(false)} />

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-zinc-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div className="font-semibold">{site.brand}</div>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:bg-white/10"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-4 py-4">
              <div className="grid gap-2">
                {nav.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => navTo(n.id)}
                    className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-left text-sm font-semibold text-zinc-100 hover:bg-zinc-800"
                  >
                    {n.label}
                  </button>
                ))}
              </div>

              <div className="mt-6 grid gap-3 border-t border-white/10 pt-4">
                <button
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
                  onClick={() => navTo("contacto")}
                >
                  Cotizar
                </button>

                <a
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm font-semibold hover:bg-zinc-800"
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

                <div className="grid grid-cols-2 gap-3">
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm font-semibold hover:bg-zinc-800"
                    href={site.social.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    GitHub
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-sm font-semibold hover:bg-zinc-800"
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
