import { MarcoSitio } from '@/components/layout/marco-sitio';

export default function SitioLayout({ children }: LayoutProps<'/'>) {
  return <MarcoSitio>{children}</MarcoSitio>;
}
