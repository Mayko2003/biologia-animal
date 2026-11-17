import Image from 'next/image';
import type { ImagenGrupo } from '@/lib/types';

export function FiguraGrupo({ imagen }: { imagen: ImagenGrupo }) {
  // Los collages suelen listar decenas de autores: mostramos solo la licencia
  // y dejamos el crédito completo en la ficha de Wikimedia Commons.
  const autorCorto = imagen.autor && imagen.autor.length <= 60 ? imagen.autor : 'Wikimedia Commons';
  const credito = [autorCorto, imagen.licencia].filter(Boolean).join(', ');
  return (
    <figure>
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={imagen.src}
          alt={imagen.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[11px] leading-snug text-zinc-500">
        <span className="min-w-0 flex-1 truncate">{imagen.alt}</span>
        <a
          href={imagen.fuente}
          target="_blank"
          rel="noreferrer"
          title="Ver la fuente de la imagen en Wikimedia Commons"
          className="shrink-0 underline decoration-dotted underline-offset-2 hover:text-helecho"
        >
          Foto: {credito || 'Wikimedia Commons'}
        </a>
      </figcaption>
    </figure>
  );
}
