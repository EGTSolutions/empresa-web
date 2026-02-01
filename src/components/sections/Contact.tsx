"use client";

import { useMemo, useState } from "react";
import { site } from "@/data/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Contacto desde ${site.brand}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nEmpresa: ${form.company}\n\nMensaje:\n${form.message}\n`
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Contacto</h2>
          <p className="mt-3 max-w-xl text-zinc-300">
            Cuéntanos qué quieres lograr (ventas, automatización, sistema interno, integración).
            Te respondemos con un plan claro: alcance, tiempos y costo.
          </p>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-zinc-300">
            <div className="font-semibold text-white">Checklist para cotizar rápido</div>
            <ul className="mt-3 space-y-2">
              <li>• Objetivo: ¿qué debe mejorar sí o sí?</li>
              <li>• Usuarios: ¿quién lo usa y cuántos?</li>
              <li>• Datos: ¿de dónde salen (Excel, ERP, API)?</li>
              <li>• Integraciones: pagos, CRM, WhatsApp, etc.</li>
            </ul>
            <div className="mt-4 text-xs text-zinc-400">
              Si no tienes esto, no pasa nada: lo sacamos en llamada.
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-3">
            <Field
              label="Nombre"
              value={form.name}
              onChange={(v) => setForm((s) => ({ ...s, name: v }))}
              placeholder="Tu nombre"
            />
            <Field
              label="Email"
              value={form.email}
              onChange={(v) => setForm((s) => ({ ...s, email: v }))}
              placeholder="tu@email.com"
              type="email"
            />
            <Field
              label="Empresa (opcional)"
              value={form.company}
              onChange={(v) => setForm((s) => ({ ...s, company: v }))}
              placeholder="Nombre de tu negocio"
            />
            <div>
              <div className="mb-2 text-sm text-zinc-300">Mensaje</div>
              <textarea
                className="h-32 w-full rounded-2xl border border-white/10 bg-zinc-950/40 p-3 text-sm outline-none focus:border-white/20"
                placeholder="Ej: necesito una landing + automatización de seguimiento por WhatsApp"
                value={form.message}
                onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              />
            </div>

            <div className="mt-2 grid gap-3 sm:grid-cols-2">
              <a
                href={mailto}
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
              >
                Enviar por email
              </a>

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `Hola, soy ${form.name || "—"}. Mi email es ${form.email || "—"}. ${form.company ? `Empresa: ${form.company}. ` : ""}Mensaje: ${form.message || "Quiero cotizar un proyecto."}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Enviar por WhatsApp
              </a>
            </div>

            <div className="text-xs text-zinc-400">
              Este formulario usa mailto/WhatsApp (sin backend). Si quieres envío real a inbox con API (Resend/SMTP),
              se agrega rápido.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <div className="mb-2 text-sm text-zinc-300">{label}</div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-zinc-950/40 p-3 text-sm outline-none focus:border-white/20"
      />
    </div>
  );
}
