"use client";

import { useEffect } from "react";
import { scrollToId } from "@/components/scroll";

export default function HashScroller() {
  useEffect(() => {
    const run = () => {
      const hash = window.location.hash?.replace("#", "");
      if (!hash) return;

      // Espera un tick para que el DOM esté listo
      requestAnimationFrame(() => scrollToId(hash));
    };

    run();
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, []);

  return null;
}
