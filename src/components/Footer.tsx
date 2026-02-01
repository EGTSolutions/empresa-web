import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-semibold">{site.brand}</div>
            <div className="text-sm text-zinc-400">
              © {new Date().getFullYear()} · Software que escala con tu negocio.
            </div>
          </div>
          <div className="text-sm text-zinc-400">
            {site.location} ·{" "}
            <a className="hover:text-white" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
