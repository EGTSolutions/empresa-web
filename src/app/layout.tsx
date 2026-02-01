import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${site.brand} | Desarrollo web y automatización`,
  description:
    "Desarrollo web, automatización, integraciones y proyectos a medida. Software que escala con tu negocio.",
  metadataBase: new URL(site.social.website),
  openGraph: {
    title: site.brand,
    description:
      "Desarrollo web y automatización. Software que escala con tu negocio.",
    url: site.social.website,
    siteName: site.brand,
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.brand,
    description:
      "Desarrollo web y automatización. Software que escala con tu negocio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
