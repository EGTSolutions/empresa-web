type Case = {
  title: string;
  tag: string;
  situation: string;   // Qué nos reportaron
  diagnosis: string[]; // Qué detectamos
  execution: string[]; // Qué hicimos
  result: string[];    // Qué mejoró (sin humo)
  note?: string;       // nota de confidencialidad o alcance
  cta?: { label: string; href: string };
};

const cases: Case[] = [
  {
    title: "Landing + captación de leads con medición completa",
    tag: "Marketing",
    situation:
      "Nos reportaron baja conversión y poca claridad de qué canal generaba oportunidades reales. El sitio cargaba bien “a veces”, pero en móvil se sentía pesado y el embudo no estaba instrumentado.",
    diagnosis: [
      "Ruta crítica sin optimizar: recursos bloqueando render y assets sin prioridades.",
      "Imágenes sin estrategia responsive (peso innecesario en móvil).",
      "Sin eventos de negocio: no había trazabilidad de CTA → formulario → contacto.",
    ],
    execution: [
      "Optimización de performance: carga progresiva, prioridades y limpieza de payload.",
      "SEO técnico base + estructura de contenido orientada a intención.",
      "Instrumentación de eventos: CTA, envío de formulario, clic WhatsApp, scroll clave.",
    ],
    result: [
      "Experiencia más fluida en móvil y tiempos de carga controlados con objetivos claros.",
      "Embudo medible: se identifica dónde cae el usuario y qué canal trae mejores leads.",
      "Base lista para iterar: mejoras enfocadas en impacto, no en suposiciones.",
    ],
    note:
      "Los resultados exactos dependen de tráfico y oferta; el entregable incluye medición y objetivos por etapa.",
    cta: { label: "Quiero una landing así", href: "#contacto" },
  },
  {
    title: "APIs estables ante picos de tráfico (sin caídas)",
    tag: "Backend",
    situation:
      "Nos reportaron caídas cuando había muchas peticiones GET (picos de uso). El sistema se saturaba, la latencia subía y en ocasiones dejaba de responder.",
    diagnosis: [
      "Endpoints sin rate limiting: susceptible a picos y abuso involuntario.",
      "Sin cache/ETag en recursos consultados repetitivamente.",
      "Logs no estructurados: difícil identificar cuál ruta detonaba la caída.",
    ],
    execution: [
      "Rate limiting por ruta y patrón de consumo (sin bloquear operación legítima).",
      "Cache estratégico + ETags donde aplica para reducir carga del backend.",
      "Observabilidad mínima viable: logs estructurados, métricas de latencia y errores.",
    ],
    result: [
      "Estabilidad operativa ante picos: menor probabilidad de saturación.",
      "Menos carga innecesaria: recursos repetidos se sirven más rápido.",
      "Diagnóstico rápido: visibilidad por endpoint para corregir con precisión.",
    ],
    cta: { label: "Quiero estabilizar mi API", href: "#contacto" },
  },
  {
    title: "Panel administrativo con roles, auditoría y reportes",
    tag: "Operación",
    situation:
      "Nos reportaron operación dependiente de Excel y procesos manuales: datos duplicados, errores frecuentes y poca trazabilidad de cambios.",
    diagnosis: [
      "No existían roles/permisos formales ni bitácora de modificaciones.",
      "Procesos sin estados ni validaciones consistentes (cada área lo hacía distinto).",
      "Reporteo manual: alto costo y baja confiabilidad del dato.",
    ],
    execution: [
      "Autenticación + roles (RBAC) y permisos por acción (ver/editar/exportar/admin).",
      "Bitácora (audit log) para cambios críticos y accesos relevantes.",
      "Reportes con filtros y exportables listos para operación.",
    ],
    result: [
      "Trazabilidad real: quién cambió qué y cuándo.",
      "Menos retrabajo por procesos estandarizados y validaciones consistentes.",
      "Reportes listos en minutos con un “single source of truth”.",
    ],
    cta: { label: "Quiero un panel así", href: "#contacto" },
  },
  {
    title: "Integración entre sistemas con control de duplicados",
    tag: "Automatización",
    situation:
      "Nos reportaron inconsistencias entre sistemas (A y B): duplicados, reintentos que duplicaban registros y conciliación manual constante.",
    diagnosis: [
      "Falta de idempotencia (reintentos creaban duplicados).",
      "Sin reintento controlado y sin cola: errores intermitentes rompían el flujo.",
      "Sin trazabilidad por folio/correlation-id para investigar fallas.",
    ],
    execution: [
      "Diseño idempotente por folio/id externo (crear/actualizar seguro).",
      "Jobs con reintento exponencial y logs por transacción.",
      "Panel de errores con reintento manual y estados claros (pendiente/en proceso/ok/error).",
    ],
    result: [
      "Reducción de duplicados y conciliación manual.",
      "Errores rastreables y recuperables sin detener la operación.",
      "Flujo automatizado con control y visibilidad por transacción.",
    ],
    cta: { label: "Quiero automatizar integraciones", href: "#contacto" },
  },
  {
    title: "Control de acceso correcto (seguridad sin fricción)",
    tag: "Seguridad",
    situation:
      "Nos reportaron que usuarios podían ver o modificar información fuera de su rol. Había permisos “en pantalla”, pero no siempre se validaban correctamente en servidor.",
    diagnosis: [
      "Validación parcial en frontend (riesgo cuando el backend no aplica reglas).",
      "Ausencia de políticas de autorización centralizadas.",
      "Sin auditoría de acciones sensibles.",
    ],
    execution: [
      "Autorización server-side con políticas por recurso/acción.",
      "RBAC/ABAC según necesidad del negocio (roles vs atributos).",
      "Audit log para acciones sensibles y cambios críticos.",
    ],
    result: [
      "Accesos coherentes: cada rol ve y hace solo lo que debe.",
      "Menos riesgo operativo y mejor control para auditorías internas.",
      "Seguridad implementada como regla de negocio, no como parche.",
    ],
    cta: { label: "Quiero asegurar mi sistema", href: "#contacto" },
  },
  {
    title: "Métricas y embudo: decisiones con datos",
    tag: "Analytics",
    situation:
      "Nos reportaron que no podían explicar por qué cambiaba la conversión. No había baseline, ni eventos consistentes, ni segmentación por canal/dispositivo.",
    diagnosis: [
      "Eventos clave inexistentes o inconsistentes.",
      "Sin funnel ni visibilidad por etapa (CTA → formulario → contacto).",
      "No existía un tablero simple para seguimiento semanal.",
    ],
    execution: [
      "Plan de medición: eventos con nombres y propiedades consistentes.",
      "Embudo con segmentación por canal y dispositivo.",
      "Dashboard de KPIs + alertas básicas cuando algo cae.",
    ],
    result: [
      "Baseline claro y medición confiable para iterar mejoras.",
      "Priorización por ROI: se ataca el cuello de botella real.",
      "Operación de producto: seguimiento semanal con señales accionables.",
    ],
    cta: { label: "Quiero medir y optimizar", href: "#contacto" },
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

export default function Portfolio() {
  return (
    <section id="portafolio" className="mx-auto max-w-6xl px-4 pt-16 md:pt-24">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold md:text-3xl">Portafolio</h2>
        <p className="max-w-2xl text-zinc-300">
          Diagnóstico, ejecución y mejora observable en operación,
          performance, integraciones y control.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cases.map((c) => (
          <article
            key={c.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-semibold leading-snug">{c.title}</h3>
              <Chip>{c.tag}</Chip>
            </div>

            <div className="mt-4 space-y-4 text-sm text-zinc-300">
              <div>
                <div className="text-xs font-semibold text-white/90">Nos reportaron</div>
                <p className="mt-1 leading-relaxed">{c.situation}</p>
              </div>

              <div>
                <div className="text-xs font-semibold text-white/90">Diagnóstico</div>
                <ul className="mt-2 space-y-2">
                  {c.diagnosis.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="text-xs font-semibold text-white/90">Ejecución</div>
                <ul className="mt-2 space-y-2">
                  {c.execution.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-950/40 p-4">
                <div className="text-xs font-semibold text-zinc-200">Resultado</div>
                <ul className="mt-2 space-y-2 text-xs text-zinc-300">
                  {c.result.map((x) => (
                    <li key={x} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>

                {c.note && (
                  <div className="mt-3 text-[11px] text-zinc-500">{c.note}</div>
                )}
              </div>

              {c.cta && (
                <a
                  href={c.cta.href}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:opacity-90"
                >
                  {c.cta.label}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
