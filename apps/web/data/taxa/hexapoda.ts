import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'hexapoda',
  nombre: 'Hexapoda',
  nombreComun: 'Hexápodos',
  nivel: 'subphylum',
  padre: 'arthropoda',
  orden: 4,
  resumen: [
    {
      texto: 'Es el subfilo (o superclase) de artrópodos que más especies agrupa: incluye a los insectos (1 millón de especies), Proturos, Dipluros y Colémbolos (unas 9.000 especies entre los tres). Su nombre deriva del griego "hexa", seis, y "poda", patas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [14, 20], cita: 'que más especies agrupa' }],
    },
    {
      texto: 'Son artrópodos con el cuerpo dividido en cabeza, tórax con tres pares de patas y abdomen; la cabeza lleva un par de antenas y generalmente son alados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [22, 26], cita: 'con tres pares de' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo dividido en cabeza (con un par de antenas), tórax con tres pares de patas y abdomen; generalmente alados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [22, 26], cita: 'Generalmente son alados' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Cuerpo recubierto uniformemente por un exoesqueleto, con escleritos dorsales (tergum), ventrales (sternum) y pleuron lateral.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Insecta', titulo: 'Insecta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Exoesqueleto o integumento que recubre todo el cuerpo y se muda periódicamente.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Insecta', titulo: 'Insecta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Músculos longitudinales y dorsoventrales antagonistas en cada metámero; los dorsoventrales mueven las alas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Tubo digestivo completo con aparato bucal variado según la dieta del grupo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Sistema traqueal con espiráculos (en el tórax, un máximo de dos en meso y metatórax).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón dorsal tubular que bombea la hemolinfa hacia la cabeza; la sangre regresa por ostiolos pares.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'Tubos de Malpighi que desembocan entre el intestino medio y el proctodeo, como en los demás hexápodos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cerebro dividido en tres secciones (el protocerebro corresponde al segmento ocular) y cadena nerviosa ventral ganglionar.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Ojos (segmento ocular) y antenas (segmento antenal, ausentes en los proturos).',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual con huevos; el desarrollo puede ser directo o indirecto.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Arthropoda', titulo: 'Arthropoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Desarrollo directo (ametábolos), incompleto (hemimetábolos) o completo con metamorfosis (holometábolos).',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Subfilo que más especies agrupa (incluye un millón de especies de insectos); ocupan todos los ambientes terrestres y de agua dulce.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Hexapoda', titulo: 'Hexapoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Protura, Diplura y Collembola',
      descripcion: 'hexápodos ápteros cercanos a los insectos',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Protura', titulo: 'Protura - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Insecta',
      descripcion: 'clase que agrupa la mayoría de las especies',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Insecta', titulo: 'Insecta - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El apunte divide a los hexápodos en Entognatha (artrópodos primitivamente ápteros, con el aparato bucal escondido en un repliegue cefálico: Protura, Diplura y Collembola) y Ectognatha (aparato bucal expuesto: Insecta).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 36], cita: 'aparato bucal está escondido' }],
    },
    {
      tipo: 'aclaracion',
      texto: 'El apunte llama a Hexapoda «subfilo (o superclase)»; aquí se muestra como subphylum, que es el uso más corriente.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [14, 16], cita: 'subfilo (o superclase) de artrópodos' }],
    },
  ],
};

export default taxon;
