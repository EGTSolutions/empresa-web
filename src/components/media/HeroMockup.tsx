"use client";

import { motion } from "framer-motion";

type Props = {
  mode?: "bg" | "card";
};

export default function HeroMockup({ mode = "card" }: Props) {
  const isBg = mode === "bg";

  return (
    <div className={isBg ? "h-full w-full" : "relative"}>
      {!isBg && (
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 md:p-6">
          <div className="pointer-events-none absolute inset-0">
            <div className="hero-spotlight" />
            <div className="hero-grid" />
          </div>
          <Stage isBg={false} />
        </div>
      )}

      {isBg && (
        <div className="relative h-full w-full overflow-hidden">
          {/* vignette suave */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_55%)]" />
          <Stage isBg />
        </div>
      )}

      {!isBg && (
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-black/30 blur-2xl" />
      )}
    </div>
  );
}

function Stage({ isBg }: { isBg: boolean }) {
  return (
    <div className={isBg ? "relative h-full w-full" : "relative mx-auto max-w-[640px]"}>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={isBg ? "absolute inset-0" : "relative"}
      >
        {/* Laptop */}
        <motion.div
          animate={{
            rotateY: [0, -8, 0, 8, 0],
            rotateX: [0, 3, 0, -3, 0],
            y: [0, -6, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" as any }}
          className={
  isBg
    ? "absolute inset-0 [perspective:1200px]"
    : "mx-auto w-full [perspective:1200px]"
}
        >
          <div className={isBg ? "relative mx-auto w-full max-w-[720px]" : "relative mx-auto w-full max-w-[560px]"}>
            <div className="relative [transform:rotateX(12deg)_rotateY(-12deg)]">
              {/* Screen */}
              <div
                className={
                  isBg
                    ? "relative overflow-hidden rounded-[28px] border border-white/15 bg-zinc-950/55 shadow-[0_40px_120px_rgba(0,0,0,0.70)]"
                    : "relative overflow-hidden rounded-[26px] border border-white/15 bg-zinc-950/60 shadow-[0_30px_90px_rgba(0,0,0,0.65)]"
                }
              >
                <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
                <div className="absolute left-1/2 top-3 h-1.5 w-16 -translate-x-1/2 rounded-full bg-white/10" />

                <div className={isBg ? "relative p-5 sm:p-6" : "relative p-4 md:p-5"}>
                  <SystemUI />
                </div>

                {/* Glass reflection */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.07)_35%,transparent_60%)] opacity-60" />
              </div>

              {/* Base */}
              <div
                className={
                  isBg
                    ? "relative mx-auto mt-[-12px] h-11 w-[92%] rounded-b-[30px] border border-white/10 bg-white/5 shadow-[0_30px_70px_rgba(0,0,0,0.60)]"
                    : "relative mx-auto mt-[-10px] h-10 w-[92%] rounded-b-[28px] border border-white/10 bg-white/5 shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
                }
              >
                <div className="absolute left-1/2 top-2 h-2 w-24 -translate-x-1/2 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phone: solo sm+ */}
        <motion.div
          initial={{ opacity: 0, x: 18, y: 8 }}
          animate={{ opacity: 1, x: 0, y: [0, -4, 0] }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
            y: { duration: 4.2, repeat: Infinity, ease: "easeInOut" },
          }}
          className={isBg ? "absolute right-[10%] top-[62%] hidden sm:block" : "absolute -bottom-6 right-0 hidden md:block"}
        >
          <div className="w-[178px] [perspective:1200px]">
            <div className="relative rotate-[10deg] [transform:rotateX(10deg)_rotateY(18deg)]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-zinc-950/60 shadow-[0_25px_70px_rgba(0,0,0,0.65)]">
                <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/10" />
                <div className="absolute left-1/2 top-3 h-4 w-16 -translate-x-1/2 rounded-full bg-black/50 ring-1 ring-white/10" />
                <div className="p-3">
                  <PhoneUI />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function SystemUI() {
  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <div className="ml-3 text-[11px] text-zinc-300">Control Center</div>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300">
            Leads
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300">
            Integrations
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-zinc-300">
            Metrics
          </span>
        </div>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-3">
        <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-zinc-400">Pipeline</div>
          <div className="mt-1 text-sm font-semibold text-white">
            Captación → Calificación → Cierre
          </div>

          <div className="mt-4 space-y-2">
            <Bar label="Conversión" value="↑ +18%" w="w-[78%]" />
            <Bar label="Tiempo operativo" value="↓ -40%" w="w-[64%]" />
            <Bar label="Errores" value="↓ -55%" w="w-[58%]" />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            <MiniStat title="Carga" value="< 2.5s" />
            <MiniStat title="Uptime" value="99.9%" />
            <MiniStat title="Logs" value="Trazables" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs text-zinc-400">Automations</div>
          <div className="mt-1 text-sm font-semibold text-white">Workflows</div>

          <div className="mt-4 space-y-2">
            <Pill>WhatsApp</Pill>
            <Pill>Email</Pill>
            <Pill>CRM</Pill>
            <Pill>ERP</Pill>
          </div>

          <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-950/40 p-3 text-[11px] text-zinc-300">
            Picos controlados: cache + rate limit + colas.
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[26px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]" />
    </div>
  );
}

function PhoneUI() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="text-[10px] text-zinc-400">Leads hoy</div>
        <div className="mt-1 text-xs font-semibold text-white">12 nuevos</div>
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
          <div className="h-1.5 w-[70%] rounded-full bg-white/40" />
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="text-[10px] text-zinc-400">Estado</div>
        <div className="mt-1 text-xs text-zinc-200">Integraciones OK</div>
        <div className="mt-2 text-[10px] text-zinc-400">Sin fallos críticos</div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
        <div className="text-[10px] text-zinc-400">Acción</div>
        <div className="mt-1 text-xs font-semibold text-white">Contactar</div>
        <div className="mt-2 h-9 rounded-xl bg-white text-center text-xs font-semibold leading-9 text-black">
          WhatsApp
        </div>
      </div>
    </div>
  );
}

function Bar({ label, value, w }: { label: string; value: string; w: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-3">
      <div className="flex items-center justify-between text-[11px] text-zinc-300">
        <span>{label}</span>
        <span className="text-zinc-400">{value}</span>
      </div>
      <div className="mt-2 h-1.5 w-full rounded-full bg-white/10">
        <div className={`h-1.5 rounded-full bg-white/40 ${w}`} />
      </div>
    </div>
  );
}

function MiniStat({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <div className="text-[10px] text-zinc-400">{title}</div>
      <div className="mt-1 text-[11px] font-semibold text-zinc-200">{value}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
      <span className="text-[11px] text-zinc-200">{children}</span>
      <span className="h-2 w-2 rounded-full bg-white/40" />
    </div>
  );
}
