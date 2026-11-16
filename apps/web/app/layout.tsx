import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { FiltroFuentesProvider } from "@/components/fuentes/filtro-fuentes";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TabBar, TabBarEstatica } from "@/components/layout/tab-bar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: 'Biología Animal', template: '%s · Biología Animal' },
  description: 'Estudio de Biología Animal: mapa conceptual embrionario, árbol taxonómico, fichas, comparador y buscador.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FiltroFuentesProvider>
          <SiteHeader />
          <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-8 pb-16">{children}</main>
          <SiteFooter />
          <Suspense fallback={<TabBarEstatica />}>
            <TabBar />
          </Suspense>
        </FiltroFuentesProvider>
      </body>
    </html>
  );
}
