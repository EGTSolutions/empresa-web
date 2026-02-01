export function getHeaderOffset(): number {
  const v = getComputedStyle(document.documentElement).getPropertyValue("--header-h");
  const n = Number.parseFloat(v);
  return Number.isFinite(n) ? n : 0;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const header = getHeaderOffset();
  const extra = 20;

  const y = el.getBoundingClientRect().top + window.scrollY - header - extra;

  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  history.replaceState(null, "", `#${id}`);
}
