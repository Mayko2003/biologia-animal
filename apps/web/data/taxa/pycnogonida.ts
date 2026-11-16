import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'pycnogonida',
  nombre: 'Pycnogonida',
  nombreComun: 'Picnogónidos (arañas de mar)',
  nivel: 'clase',
  padre: 'chelicerata',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de quelicerados conocidos como arañas de mar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [153, 155], cita: 'Pygnogonida (arañas de mar)' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: '«Arañas de mar»: cuerpo muy reducido con ocho largas patas locomotoras; el tubo digestivo y las gónadas se ramifican hacia el interior de las patas. Apéndices: quelíceros, palpos y ovígeros.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Exoesqueleto quitinoso del plan quelicerado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto quitinoso articulado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Musculatura de succión en la probóscide; músculos de los apéndices locomotores.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Probóscide suctora con apertura terminal y musculatura de succión; el tubo digestivo se ramifica hacia las patas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sin órganos respiratorios especializados; intercambio por la superficie corporal.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio abierto del plan quelicerado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glándulas coxales en la base de las patas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso concentrado del plan quelicerado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Ojos simples; palpos y ovígeros sensoriales.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los machos transportan los huevos en los ovígeros (apéndices especiales de cuidado).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'El macho cuida los huevos adheridos a sus ovígeros.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Marinos bentónicos; las especies abisales llegan a 50 cm entre los extremos de las patas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Pycnogonidae',
      descripcion: 'familia de arañas de mar',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Nymphonidae',
      descripcion: 'familia de picnogónidos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Pycnogonida', titulo: 'Pycnogonida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
