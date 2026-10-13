import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'inarticulata',
  nombre: 'Inarticulata',
  nombreComun: 'Braquiópodos inarticulados',
  nivel: 'clase',
  padre: 'brachiopoda',
  orden: 2,
  resumen: [
    {
      texto: 'Los inarticulados poseen dos valvas iguales de naturaleza quitinoide y con espículas calcáreas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [421, 423], cita: 'naturaleza quitinoide y con' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'No tienen charnela y carecen también de pico y asa. El ano está presente.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [423, 423], cita: 'El ano está presente' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Dos valvas iguales de naturaleza quitinoide con espículas calcáreas, sin charnela, pico ni asa.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [421, 423], cita: 'y con espículas calcáreas' }],
      },
    ],
    tegumento: [
      {
        texto: 'Valvas iguales de naturaleza quitinoide, con espículas calcáreas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [421, 423], cita: 'valvas iguales de naturaleza quitinoide' }],
      },
    ],
    muscular: [
      {
        texto: 'Las valvas están unidas solo por músculos; la presión celómica ayuda a abrirlas.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'Son los únicos braquiópodos con tubo digestivo completo: el ano está presente.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'apunte', archivo: A, lineas: [423, 423], cita: 'El ano está presente' }],
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
        texto: 'Dos nefridios con nefrostoma ciliado y nefridioporo lateral.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso poco evolucionado: un par de ganglios, uno dorsal y otro ventral.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'En una especie de Lingula se describe un par de estatocistos, quizá para orientarse dentro del sustrato.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción siempre sexual; la mayoría hermafroditas, con las gónadas en la cavidad celómica.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
      {
        texto: 'Desarrollo heterometábolo: el juvenil es diferente del adulto pero sin metamorfosis.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
  ],
  bioecologia: [
      {
        texto: 'Bentónicos: se entierran en sustratos blandos, donde excavan extensas galerías.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Brachiopoda', titulo: 'Brachiopoda - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
  ],
  ejemplos: [
    {
      nombre: 'Lingula',
      descripcion: 'braquiópodo inarticulado excavador, fósil viviente',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Lingulida y Discinida',
      descripcion: 'órdenes de inarticulados de valva quitinosa',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Brachiopoda/', titulo: 'Brachiopoda - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  ],
  notas: [],
};

export default taxon;
