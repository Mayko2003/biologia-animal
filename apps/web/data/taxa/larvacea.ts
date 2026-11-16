import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'larvacea',
  nombre: 'Larvacea',
  nombreComun: 'Larváceos',
  nivel: 'clase',
  padre: 'urochordata',
  orden: 3,
  resumen: [
    {
      texto: 'Clase de urocordados pelágicos; los larváceos pueden representar urocordados progénicos que viven en casas mucosas, y filtran el plancton de la corriente de agua que pasa a través de la casa.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [232, 237], cita: 'viven en casas mucosas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Urocordados solitarios de aspecto de renacuajo: conservan la cola del adulto, que contiene una notocorda central, un nervio dorsal y bandas de músculo estriado, protegida por epitelio o membrana basal acelular.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cola protegida por tejido epitelial o por una membrana basal acelular.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'La notocorda central de la cola persiste en el adulto (carácter progénico).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Bandas de músculo estriado en la cola; su movimiento crea las corrientes que concentran el alimento.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Filtradores de agua como todos los urocordados: faringe perforada con endostilo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Intercambio gaseoso por la corriente de agua sobre la faringe y la superficie (plan urocordado).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón tubular del plan urocordado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Sin órganos excretores diferenciados documentados; plan urocordado.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Nervio dorsal en la cola y ganglio corporal reducido (plan urocordado).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Receptores sensoriales poco desarrollados (plan urocordado).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Hermafroditas, como los demás urocordados; Oikopleura dioica es especie modelo del desarrollo de los cordados.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Urochordata', titulo: 'Urochordata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Son candidatos a urocordados progénicos (madurez sexual conservando rasgos larvarios); viven en casas mucosas que filtran el plancton.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Planctónicos: filtran el plancton de la corriente de agua que pasa a través de la casa mucosa donde viven.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [236, 237], cita: 'a través de la casa' }],
    },
    {
      texto: 'Solitarios y pelágicos en todos los mares, sobre todo en aguas iluminadas; habitan «casas» mucosas que atrapan el plancton.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Oikopleura dioica',
      descripcion: 'especie modelo para la evolución de los cordados',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Fritillariidae y Kowalevskiidae',
      descripcion: 'familias de apendicularios',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Appendicularia', titulo: 'Appendicularia - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
