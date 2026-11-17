import { Suspense } from 'react';
import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import { TabBar, TabBarEstatica } from '@/components/layout/tab-bar';

export function MarcoSitio({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-8 pb-16">{children}</main>
      <SiteFooter />
      <Suspense fallback={<TabBarEstatica />}>
        <TabBar />
      </Suspense>
    </>
  );
}
