import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'chelicerata',
  nombre: 'Chelicerata',
  nombreComun: 'Quelicerados',
  nivel: 'subphylum',
  padre: 'arthropoda',
  orden: 1,
  resumen: [
    {
      texto: 'Presentan el cuerpo dividido en cefalotórax y abdomen y carecen de antenas. Se agrupan en tres Clases: Merostomata (cangrejos cacerola, marinos), Pycnogonida (arañas de mar) y Arachnida (terrestres).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [148, 155], cita: 'cefalotórax y abdomen' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El primer par de apéndices se denominan quelíceros y sirven para la alimentación; el segundo par son los pedipalpos, que se modifican para cumplir diferentes funciones según los grupos; a los pedipalpos les siguen normalmente cuatro pares de patas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [149, 151], cita: 'se denominan quelíceros' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cuerpo recubierto por el exoesqueleto quitinoso de los artrópodos; se diferencian de los demás por los quelíceros y por carecer de antenas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chelicerata', titulo: 'Chelicerata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto quitinoso articulado que mudan periódicamente (ecdisis).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos segmentarios asociados al exoesqueleto y a los apéndices articulados.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo completo; los quelíceros, primer par de apéndices, procesan o inyectan el alimento.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chelicerata', titulo: 'Chelicerata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Branquias en los acuáticos (merostomados); filotráqueas (pulmones en libro), tráqueas o ambas en los terrestres (arácnidos).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio abierto con corazón dentro de la cámara pericárdica y hendiduras laterales por donde ingresa la sangre.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glándulas coxales que desembocan en la base de las patas; en arácnidos además tubos de Malpighi.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso concentrado, con fusión de numerosos ganglios formando una masa cerebral.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Ojos compuestos laterales y/o ojos simples medianos; carecen de antenas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chelicerata', titulo: 'Chelicerata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual; ponen huevos y el desarrollo puede ser directo o indirecto.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Quelíceros y pedipalpos',
      datos: [
        {
          texto: 'Los quelíceros (primer par de apéndices) sirven para la alimentación; los pedipalpos (segundo par) cumplen funciones diversas según el grupo.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [149, 151], cita: 'par son los pedipalpos' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Reproducción sexual con puesta de huevos; los merostomados (xifosuros) los depositan en la arena de las playas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Los merostomados son acuáticos con branquias; los arácnidos conquistaron el medio terrestre con filotráqueas y tráqueas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
