export default function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-[-200px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-[-120px] top-[180px] h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-[-220px] left-[10%] h-[520px] w-[520px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-black" />
      <div className="absolute inset-0 [background:radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.05),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:60px_60px]" />
    </div>
  );
}
