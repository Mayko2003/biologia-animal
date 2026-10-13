import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'hemichordata',
  nombre: 'Hemichordata',
  nombreComun: 'Hemicordados',
  nivel: 'phylum',
  padre: 'deuterostomia',
  orden: 2,
  resumen: [
    {
      texto: 'Filo de animales deuteróstomos, de aspecto vermiforme, relacionado con los cordados: no presentan una auténtica notocorda sino una estomocorda (expansión del tubo digestivo), y una faringe con hendiduras (faringotremas) que usan para filtrar el alimento, como los cordados. En la actualidad se conocen solo unas 100 especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [620, 632], cita: 'expansión del tubo digestivo' }],
    },
    {
      texto: 'Son animales exclusivamente marinos y bentónicos, divididos en dos clases: Enteropneustos y Pterobranquios. Fueron considerados cordados hasta comprobar que la estomocorda no era homóloga de la notocorda, por lo que se los clasificó como un nuevo filo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [638, 660], cita: 'un nuevo filo' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo blando en forma de gusano, no segmentado internamente, con simetría bilateral y dos ejes corporales definidos; coloraciones del blanco al violeta claro y tamaños desde unos pocos milímetros hasta 250 cm de largo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [642, 648], cita: 'un cuerpo blando en' }],
    },
    {
      texto: 'Organización característica en tres partes: prosoma (probóscide; en Pterobranchia en forma de escudo), mesosoma (collar donde se sitúa la boca) y metasoma (tronco largo); el celoma se divide en proceloma, mesoceloma y metaceloma.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [650, 657], cita: 'proceloma, mesoceloma y metaceloma' }],
    },
    {
      texto: 'El tronco, especialmente en los enteropneustos, incluye hasta cien hendiduras branquiales para respirar y dejar salir el agua absorbida con el alimento; en los pterobranquios solo hay un par de branquias o ninguna.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [662, 667], cita: 'cien hendiduras branquiales' }],
    },
  ],
  embriologia: {
    simetria: {
      valor: 'bilateral',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [644, 644], cita: 'una simetría bilateral' }],
    },
  },
  sistemas: {
    circulatorio: [
      {
        texto: 'Sistema cardiovascular abierto de configuración primitiva: dos únicos vasos sanguíneos en el prosoma y el mesosoma, y un "corazón" rudimentario formado por un único vaso contráctil que bombea hacia el vaso ventral; el flujo es unidireccional.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [634, 687], cita: 'aparato circulatorio abierto muy' }],
      },
    ],
    excretor: [
      {
        texto: 'Poseen una estructura única llamada glomérulo para la excresión.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [634, 635], cita: 'para la excresión' }],
      },
    ],
    nervioso: [
      {
        texto: 'Presentan un cordón nervioso dorsal y hueco.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [635, 635], cita: 'cordón nervioso dorsal y' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Estomocorda',
      datos: [
        {
          texto: 'En los enteropneustos hay un divertículo del estómago que llega a la cavidad oral llamado estomocorda; se consideró un posible precursor de la notocorda, pero como no presenta parecido esencial ni funciona como esqueleto hidrostático, esa idea fue prácticamente abandonada.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [669, 674], cita: 'cavidad oral, llamada estomocorda' }],
        },
      ],
    },
    {
      titulo: 'Hendiduras faríngeas',
      datos: [
        {
          texto: 'Faringe con hendiduras (faringotremas) usadas para filtrar el alimento, compartida con los cordados.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [630, 631], cita: 'hendiduras (faringotremas), que usan' }],
        },
      ],
    },
  ],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Exclusivamente marinos; todos son bentónicos cuando adultos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [636, 659], cita: 'cuando son adultos, son' }],
    },
  ],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'No presentan una auténtica notocorda sino una estomocorda (expansión del tubo digestivo); por eso dejaron de considerarse cordados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [620, 640], cita: 'no era homólogo de' }],
    },
  ],
};

export default taxon;
