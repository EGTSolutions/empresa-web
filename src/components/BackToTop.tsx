"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { scrollToId } from "@/components/scroll";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 350);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => scrollToId("inicio")}
      className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm font-semibold text-white shadow-2xl hover:bg-zinc-900"
      aria-label="Ir arriba"
    >
      <ArrowUp className="h-4 w-4" />
      Arriba
    </button>
  );
}
