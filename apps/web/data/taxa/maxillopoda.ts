import type { Taxon } from '@/lib/types';

const A = 'chrustacea.md' as const;

const taxon: Taxon = {
  slug: 'maxillopoda',
  nombre: 'Maxillopoda',
  nombreComun: 'Maxilópodos',
  nivel: 'clase',
  padre: 'crustacea',
  orden: 3,
  resumen: [
    {
      texto: 'Clase de crustáceos que incluye las subclases Copepoda (copépodos) y Cirripedia (cirrípedos o percebes).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [318, 356], cita: 'CLASE MAXILLOPODA SUBCLASE' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Clase polifilética de crustáceos caracterizada por la reducción del pleon (abdomen) y de sus apéndices.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Maxillopoda', titulo: 'Maxillopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Exoesqueleto quitinoso del plan crustáceo; los copépodos carecen de caparazón y los cirrípedos llevan placas calcificadas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Crustacea', titulo: 'Crustacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto articulado; en cirrípedos forma una armadura de placas externas calcificadas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos estriados asociados al exoesqueleto y a los apéndices.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo completo; copépodos y cirrípedos filtran o capturan el alimento con los apéndices.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Copepoda', titulo: 'Copepoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin órganos respiratorios especializados en la mayoría (los copépodos carecen de branquias); intercambio por la superficie corporal.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Copepoda', titulo: 'Copepoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Reducido o ausente: por su pequeño tamaño los copépodos no necesitan corazón ni sistema circulatorio desarrollado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Copepoda', titulo: 'Copepoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glándulas maxilares (copépodos) o antenales/maxilares del plan crustáceo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Copepoda', titulo: 'Copepoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cadena nerviosa ventral ganglionar y cerebro dorsal del plan artrópodo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Ojo naupliano mediano en larvas; los copépodos llevan un solo ojo mediano.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Crustacea', titulo: 'Crustacea - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Copepoda', titulo: 'Copepoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual; los cirrípedos son hermafroditas que alternan el estado masculino y femenino.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Desarrollo con larva nauplio; en cirrípedos le sigue la larva cipris que se fija y metamorfosea en adulto sésil.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Los copépodos dominan el zooplancton; los cirrípedos adultos son sésiles intermareales.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Copepoda', titulo: 'Copepoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Copepoda',
      descripcion: 'copépodos, crustáceos planctónicos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Copepoda', titulo: 'Copepoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Cirripedia',
      descripcion: 'percebes y bellotas de mar',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Cirripedia', titulo: 'Cirripedia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [
    {
      tipo: 'discrepancia',
      texto: 'El apunte usa Maxillopoda como clase válida; la literatura actual la reconoce como clase polifilética (no natural), caracterizada solo por la reducción del abdomen y sus apéndices.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Maxillopoda', titulo: 'Maxillopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
