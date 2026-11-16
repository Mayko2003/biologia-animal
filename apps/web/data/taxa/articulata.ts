import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'articulata',
  nombre: 'Articulata',
  nombreComun: 'Braquiópodos articulados',
  nivel: 'clase',
  padre: 'brachiopoda',
  orden: 1,
  resumen: [
    {
      texto: 'Los articulados tienen las valvas calcáreas dorsal y ventral diferentes entre sí.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [417, 417], cita: 'Los articulados tienen las' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Presentan charnela y un pico para el pedúnculo y asa para el lofóforo; carecen de ano.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [419, 419], cita: 'presentan charnela y un pico' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Valvas calcáreas dorsal y ventral diferentes entre sí, con charnela, pico para el pedúnculo y asa para el lofóforo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [417, 419], cita: 'asa para el lofóforo' }],
      },
    ],
    tegumento: [
      {
        texto: 'Las dos valvas calcáreas (braquial y pedicular) son secretadas por repliegues del manto.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos aductores cierran las valvas y abductores las abren.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo incompleto: carecen de ano (solo los inarticulados tienen tubo digestivo completo).',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'apunte', archivo: A, lineas: [417, 419], cita: 'carecen de ano' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin órganos respiratorios; los vasos celómicos serían el principal sistema de transporte de los gases.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Aparato circulatorio abierto, con un pequeño corazón suspendido en el metacele.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Dos nefridios con nefrostoma ciliado y nefridioporo lateral, por donde también salen los gametos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso poco evolucionado: un par de ganglios, uno dorsal y otro ventral.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción siempre sexual; la mayoría hermafroditas, con las gónadas en la cavidad celomática.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Sin órganos sensoriales conocidos (los estatocistos descritos son de una especie de Lingula, inarticulado).',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
      {
        texto: 'La fecundación es generalmente externa; las hembras de algunas especies incuban los huevos en el lofóforo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
  ],
  bioecologia: [
      {
        texto: 'Bentónicos: viven fijos a sustratos duros por un pedúnculo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
  ],
  ejemplos: [
    {
      nombre: 'Terebratulida',
      descripcion: 'orden de braquiópodos articulados',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Rhynchonellida',
      descripcion: 'orden de braquiópodos articulados',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
