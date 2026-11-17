import Image from 'next/image';
import Link from 'next/link';
import { FuenteBadge } from '@/components/fuentes/fuente-badge';
import { AlVer } from '@/components/inicio/al-ver';
import { IconoBuscar, IconoComparar, IconoRed } from '@/components/ui/iconos';
import { calcularEstadisticas } from '@/lib/estadisticas';
import { getPhylaIncluidos, getTaxon, todos } from '@/lib/taxa';

const LINAJES = ['parazoa', 'radiata', 'lophotrochozoa', 'ecdysozoa', 'deuterostomia'];
const RETRASO_LINAJE = [200, 340, 470, 580, 670];
const RETRASO_USO = [80, 140, 190];
const RETRASO_HERRAMIENTA = [70, 120, 160];

function tiempo(delay: number, extra: Record<string, string> = {}) {
  return { '--delay': `${delay}ms`, ...extra } as React.CSSProperties;
}

const USOS = [
  {
    titulo: 'Ubicar cualquier grupo',
    texto:
      'Encontrá dónde va cada phylum según sus capas germinativas, su simetría, su cavidad corporal y el destino del blastoporo.',
    linea: 'bg-helecho',
  },
  {
    titulo: 'Estudiar tema por tema',
    texto:
      'Cada ficha separa morfología, embriología, sistemas de órganos, reproducción y bioecología, con ejemplos de especies.',
    linea: 'bg-ocre',
  },
  {
    titulo: 'Saber de dónde sale cada dato',
    texto:
      'Lo que viene de los apuntes muestra el archivo y la cita literal. Lo que se completó con otras fuentes está marcado y se puede ocultar.',
    linea: 'bg-oxido',
  },
];

const HERRAMIENTAS = [
  {
    href: '/buscar',
    titulo: 'Red de la diversidad animal',
    texto:
      'Todos los grupos conectados por su clasificación y por sus rasgos embrionarios. Filtrá por linaje, nivel o criterio y mirá cómo se agrupan.',
    Icono: IconoRed,
  },
  {
    href: '/buscar?q=nefridios',
    titulo: 'Buscador',
    texto:
      'Escribí un término, como nefridios o celoma. Si aparece en un solo grupo, la red te lleva a él; si son varios, deja solo esos.',
    Icono: IconoBuscar,
  },
  {
    href: '/comparar',
    titulo: 'Comparar grupos',
    texto: 'Elegí dos grupos y armá un cuadro comparativo fila por fila, ideal para repasar antes del parcial.',
    Icono: IconoComparar,
  },
];

export default function Page() {
  const stats = calcularEstadisticas(todos);

  return (
    <div className="space-y-24 sm:space-y-32">
      <section className="grid items-center gap-10 pt-4 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
        <div>
          <h1
            style={tiempo(0, { '--dy': '16px' })}
            className="landing-entrada font-display text-5xl font-semibold leading-[0.95] tracking-tight text-tinta sm:text-7xl"
          >
            Biología Animal
          </h1>
          <p
            style={tiempo(90, { '--dy': '10px', '--dur': '550ms' })}
            className="landing-entrada mt-6 max-w-xl text-lg leading-relaxed text-zinc-700"
          >
            La diversidad animal de la materia en un solo lugar, ordenada por desarrollo embrionario y por taxonomía.
            Cada dato está vinculado al apunte de la cátedra del que sale.
          </p>
          <div
            style={tiempo(160, { '--dy': '8px', '--dur': '500ms' })}
            className="landing-entrada mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/buscar"
              className="landing-presion inline-flex min-h-[44px] items-center rounded-full bg-tinta px-5 py-2.5 text-sm font-medium text-white hover:bg-helecho"
            >
              Explorar la red de grupos
            </Link>
            <Link
              href="/comparar"
              className="landing-presion inline-flex min-h-[44px] items-center rounded-full border border-tinta/30 px-5 py-2.5 text-sm font-medium text-tinta hover:border-helecho hover:text-helecho"
            >
              Comparar dos grupos
            </Link>
          </div>
          <p
            style={tiempo(220, { '--dy': '0px', '--dur': '400ms' })}
            className="landing-entrada mt-8 text-sm text-zinc-500"
          >
            {stats.phyla} phyla, {stats.clases} clases y subclases, {stats.datosApunte} datos tomados de los apuntes.
          </p>
        </div>
        <Image
          src="/brand/logo.svg"
          alt="Logo de Biología Animal: una esponja, una medusa, un insecto, un pez, un reptil, un ave y un ciervo dentro de un círculo"
          width={571}
          height={584}
          priority
          className="landing-logo mx-auto w-full max-w-sm lg:max-w-md"
        />
      </section>

      <section aria-labelledby="para-que">
        <AlVer className="space-y-10">
          <h2
            id="para-que"
            className="landing-escalon font-display text-3xl font-semibold tracking-tight text-tinta sm:text-4xl"
          >
            Para qué sirve
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {USOS.map((u, i) => (
              <div key={u.titulo} style={tiempo(RETRASO_USO[i])} className="landing-escalon relative pt-6">
                <span
                  aria-hidden="true"
                  style={tiempo(RETRASO_USO[i], { '--dur': '700ms' })}
                  className={`landing-trazo-x absolute inset-x-0 top-0 h-1 ${u.linea}`}
                />
                <h3 className="font-display text-xl font-semibold text-tinta">{u.titulo}</h3>
                <p className="mt-2 leading-relaxed text-zinc-600">{u.texto}</p>
              </div>
            ))}
          </div>
        </AlVer>
      </section>

      <section aria-labelledby="herramientas">
        <AlVer className="space-y-10">
          <h2
            id="herramientas"
            className="landing-escalon font-display text-3xl font-semibold tracking-tight text-tinta sm:text-4xl"
          >
            Tres formas de recorrer la materia
          </h2>
          <ul className="grid gap-x-10 lg:grid-cols-3">
            {HERRAMIENTAS.map(({ href, titulo, texto, Icono }, i) => (
              <li
                key={href}
                style={tiempo(RETRASO_HERRAMIENTA[i], { '--dy': '10px' })}
                className="landing-escalon border-b border-zinc-200 py-6"
              >
                <Link
                  href={href}
                  style={{ '--presion': '0.98' } as React.CSSProperties}
                  className="landing-presion group flex gap-4"
                >
                  <span className="landing-presion mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-full bg-salvia text-helecho group-hover:bg-helecho group-hover:text-white">
                    <Icono className="size-5" />
                  </span>
                  <span>
                    <span className="block font-display text-lg font-semibold text-tinta group-hover:text-helecho">
                      {titulo}
                    </span>
                    <span className="mt-1 block leading-relaxed text-zinc-600">{texto}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </AlVer>
      </section>

      <section aria-labelledby="linajes">
        <AlVer className="space-y-8">
          <div className="landing-escalon max-w-2xl space-y-3">
            <h2 id="linajes" className="font-display text-3xl font-semibold tracking-tight text-tinta sm:text-4xl">
              Phyla por linaje
            </h2>
            <p className="leading-relaxed text-zinc-600">
              Desde las esponjas, sin tejidos verdaderos, hasta los deuterostomados. Tocá un phylum para abrir su ficha.
            </p>
          </div>
          <div className="relative ml-2">
            <span
              aria-hidden="true"
              style={tiempo(0, { '--dur': '800ms' })}
              className="landing-trazo-y absolute inset-y-0 left-0 w-0.5 bg-tinta/70"
            />
            <ol className="space-y-8">
              {LINAJES.map((slug, i) => {
                const clado = getTaxon(slug);
                const phyla = getPhylaIncluidos(slug);
                if (!clado || phyla.length === 0) return null;
                return (
                  <li
                    key={slug}
                    style={tiempo(RETRASO_LINAJE[i], { '--dx': '-8px', '--dy': '0px', '--dur': '450ms' })}
                    className="landing-escalon relative pl-8"
                  >
                    <span
                      aria-hidden="true"
                      style={tiempo(RETRASO_LINAJE[i], { '--dur': '300ms' })}
                      className="landing-trazo-x absolute left-0 top-3.5 h-0.5 w-5 bg-tinta/70"
                    />
                    <h3 className="font-display text-xl font-semibold text-tinta">
                      {clado.nombreComun ?? clado.nombre}
                      {clado.nombreComun && (
                        <span className="ml-2 text-base font-normal text-zinc-500">{clado.nombre}</span>
                      )}
                    </h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {phyla.map((p) => (
                        <li key={p.slug}>
                          <Link
                            href={`/grupo/${p.slug}`}
                            className="landing-presion inline-flex min-h-[40px] items-center rounded-full border border-zinc-300 px-3.5 py-1.5 text-sm hover:border-helecho hover:text-helecho"
                          >
                            {p.nombre}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ol>
          </div>
        </AlVer>
      </section>

      <AlVer>
        <section
          aria-labelledby="fuentes"
          style={tiempo(0, { '--dy': '16px', '--dur': '600ms' })}
          className="landing-escalon rounded-3xl bg-salvia px-6 py-10 sm:px-10"
        >
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="space-y-4">
              <h2 id="fuentes" className="font-display text-3xl font-semibold tracking-tight text-tinta">
                Cómo leer las fuentes
              </h2>
              <div className="max-w-xl leading-relaxed text-zinc-700">
                Los datos de los apuntes de la cátedra llevan la insignia{' '}
                <FuenteBadge
                  fuente={{
                    tipo: 'apunte',
                    archivo: 'annelidos.md',
                    lineas: [36, 38],
                    cita: 'El sistema circulatorio es cerrado',
                  }}
                />{' '}
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
                . Tocá una insignia para ver las líneas y la cita literal, o el enlace externo. Con el filtro
                &ldquo;Solo apuntes&rdquo; de cada ficha podés ocultar los datos externos.
              </div>
            </div>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-8 self-center">
              {[
                [stats.phyla, 'phyla'],
                [stats.clases, 'clases y subclases'],
                [stats.datosApunte, 'datos de los apuntes'],
                [stats.datosExternos, 'datos de fuentes externas'],
              ].map(([n, label]) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="mt-1 text-sm text-zinc-600">{label}</dt>
                  <dd className="font-display text-4xl font-semibold text-tinta">{n}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </AlVer>
    </div>
  );
}
