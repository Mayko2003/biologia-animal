import Link from 'next/link';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { TarjetaAcceso } from '@/components/inicio/tarjeta-acceso';
import { calcularEstadisticas } from '@/lib/estadisticas';
import { getPhylaIncluidos, getTaxon, todos } from '@/lib/taxa';

const LINAJES = ['parazoa', 'radiata', 'lophotrochozoa', 'ecdysozoa', 'deuterostomia'];

export default function Page() {
  const stats = calcularEstadisticas(todos);

  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Biología Animal</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Estudiá la diversidad animal según el desarrollo embrionario y la clasificación taxonómica,
          con los apuntes de la cátedra.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <TarjetaAcceso
          href="/mapa"
          titulo="Mapa conceptual embrionario"
          descripcion="Recorré la clasificación según capas germinativas, simetría, cavidad corporal y destino del blastoporo."
        >
          <p>Parazoa · Eumetazoa → Radiata · Bilateria → Protostomados · Deuterostomados</p>
        </TarjetaAcceso>
        <TarjetaAcceso
          href="/arbol"
          titulo="Árbol taxonómico"
          descripcion="Navegá de Reino a Subclase y encontrá las clases de cada phylum."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <TarjetaAcceso
          href="/buscar"
          titulo="Buscar"
          descripcion="Encontrá un término en todos los grupos y sistemas."
        />
        <TarjetaAcceso
          href="/comparar"
          titulo="Comparar grupos"
          descripcion="Elegí dos grupos y generá un cuadro comparativo fila por fila."
        />
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Phyla por linaje</h2>
        {LINAJES.map((slug) => {
          const clado = getTaxon(slug);
          const phyla = getPhylaIncluidos(slug);
          if (!clado || phyla.length === 0) return null;
          return (
            <div key={slug}>
              <h3 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{clado.nombreComun ?? clado.nombre}</h3>
              <ul className="mt-1 flex flex-wrap gap-1.5">
                {phyla.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/grupo/${p.slug}`}
                      className="inline-flex min-h-[40px] items-center rounded-full border border-zinc-300 px-3.5 py-1.5 text-sm hover:border-emerald-400 hover:text-emerald-700 dark:border-zinc-700 dark:hover:border-emerald-600 dark:hover:text-emerald-400"
                    >
                      {p.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">En números</h2>
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            [stats.phyla, 'Phyla'],
            [stats.clases, 'Clases y subclases'],
            [stats.datosApunte, 'Datos de los apuntes'],
            [stats.datosExternos, 'Datos de fuentes externas'],
          ].map(([n, label]) => (
            <div key={label} className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
              <dt className="text-xs text-zinc-500 dark:text-zinc-400">{label}</dt>
              <dd className="mt-1 text-2xl font-bold">{n}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Cómo leer las fuentes</h2>
        <div className="text-sm text-zinc-600 dark:text-zinc-400">
          Cada dato muestra de dónde sale: los datos de los apuntes de la cátedra llevan la insignia{' '}
          <FuenteBadge fuente={{ tipo: 'apunte', archivo: 'annelidos.md', lineas: [36, 38], cita: 'El sistema circulatorio es cerrado' }} />{' '}
          y los que se completaron con bibliografía externa llevan{' '}
          <FuenteBadge
            fuente={{
              tipo: 'web',
              url: 'https://animaldiversity.org/',
              titulo: 'Animal Diversity Web',
              sitio: 'Animal Diversity Web',
              consultado: '2025-01-01',
            }}
          />
          . Tocá una insignia para ver el detalle (líneas y cita literal, o el enlace externo). Con el filtro
          &ldquo;Solo apuntes&rdquo; de cada ficha podés ocultar los datos externos.
        </div>
      </section>
    </div>
  );
}
