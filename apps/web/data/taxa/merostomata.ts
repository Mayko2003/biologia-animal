import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'merostomata',
  nombre: 'Merostomata',
  nombreComun: 'Merostomados (cangrejos cacerola)',
  nivel: 'clase',
  padre: 'chelicerata',
  orden: 1,
  resumen: [
    {
      texto: 'Clase de quelicerados que incluye a los cangrejos cacerola, marinos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [153, 155], cita: 'Merostomata (cangrejos cacerola' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Como los arácnidos: quelíceros junto a la boca y cuerpo en prosoma (cefalotórax) y opistosoma (abdomen), este dividido en mesosoma y metasoma; sin pedipalpos, reemplazados por un par de patas marchadoras (5 pares de patas).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
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
        texto: 'Exoesqueleto quitinoso articulado que mudan periódicamente.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos asociados al exoesqueleto y a los apéndices locomotores.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo completo con quelíceros junto a la boca.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Acuáticos, con branquias.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio abierto con corazón en cavidad pericárdica.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Glándulas coxales en la base de las patas, como en los demás quelicerados.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso concentrado con masa cerebral, como en los arácnidos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arachnida', titulo: 'Arachnida - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Ojos compuestos laterales y ojos simples medianos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Chelicerata', titulo: 'Chelicerata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual; los xifosuros se reúnen en las playas para desovar.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Los xifosuros ponen los huevos en la arena de las playas.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Acuáticos, en su mayoría bentónicos marinos; algunos euriptéridos eran probablemente anfibios.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Limulus polyphemus',
      descripcion: 'cangrejo de herradura, el xifosuro más común',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Eurypterida',
      descripcion: 'orden extinta de «escorpiones de mar»',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Merostomata', titulo: 'Merostomata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
