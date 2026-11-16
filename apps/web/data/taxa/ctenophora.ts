import type { Taxon } from '@/lib/types';

const A = 'porifera y cnidarios.md' as const;

const taxon: Taxon = {
  slug: 'ctenophora',
  nombre: 'Ctenophora',
  nombreComun: 'Ctenóforos',
  nivel: 'phylum',
  padre: 'radiata',
  orden: 2,
  resumen: [
    {
      texto: 'Pequeño filo de animales marinos planctónicos casi transparentes, conocidos como "nueces de mar" o "medusas con peine". Existen aproximadamente 50 especies, algunas abundantes en aguas costeras y otras oceánicas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [597, 601], cita: 'animales marinos planctónicos casi transparentes' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo de aspecto gelatinoso, esferoidal o piriforme; algunos tienen forma de cinta. Su tamaño va desde un guisante a una pelota de golf; algunas especies de profundidades mayores son como sandías.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [618, 621], cita: 'esferoidal o piriforme' }],
    },
    {
      texto: 'La mayoría son transparentes, pero algunas poseen colores llamativos o manchas de vivos pigmentos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [622, 624], cita: 'La mayoría son transparentes' }],
    },
    {
      texto: 'Algunos poseen un par de tentáculos, otros no.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [611, 611], cita: 'Algunos poseen un par de tentáculos' }],
    },
  ],
  embriologia: {
    capas: {
      valor: 'triblastico',
      nota: 'El apunte los considera tripoblásticos aunque los ubica en Radiata.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [597, 597], cita: 'PHYLUM CTENOPHORA (TRIPOBLÁSTICOS)' }],
    },
    simetria: {
      valor: 'birradial',
      nota: 'Falsa simetría bilateral; unos pocos presentan simetría bilateral.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [605, 606], cita: 'simetría birradial o falsa simetría bilateral' }],
    },
    cavidad: {
      valor: 'acelomado',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Ctenophora/', titulo: 'Ctenophora - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    blastoporo: {
      valor: 'boca',
      nota: 'El labio del blastoporo induce la formación de faringe y boca (organizador blastoporal).',
      fuentes: [{ tipo: 'web', url: 'https://www.nature.com/articles/s41586-026-10643-z', titulo: 'A blastoporal organizer in a ctenophore', sitio: 'Nature', consultado: '2026-10-13' }],
    },
    segmentacion: {
      valor: 'otra',
      nota: 'Segmentación total y determinada, propia del grupo.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Ctenophora', titulo: 'Ctenophora - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  },
  sistemas: {
    tegumento: [
      {
        texto: 'Epidermis externa y gastrodermis interna que encierran a la mesoglea, una capa gelatinosa de tejido mesenquimático.',
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Ctenophora/', titulo: 'Ctenophora - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Cuerpo gelatinoso sin estructuras esqueléticas.',
        ausente: true,
        fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Ctenophora/', titulo: 'Ctenophora - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'Contienen ocho hileras lineales de cilios, denominados paletas natatorias o peines (de donde deriva su nombre), que se mueven sincrónicamente para nadar; las células musculares para las contracciones están en la mesoglea.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [609, 615], cita: 'ocho hileras lineales de cilios' }],
      },
    ],
    digestivo: [
      {
        texto: 'Poseen aparato digestivo; en el polo oral se abre la boca con forma de hendidura. Carnívoros: atrapan con los tentáculos animales planctónicos (medusas, copépodos, ostras, huevos de peces).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [612, 637], cita: 'sí poseen aparato digestivo' }],
      },
      {
        texto: 'A continuación del estómago, el canal aboral desemboca en dos poros anales que comunican el digestivo con el exterior.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Ctenophora', titulo: 'Ctenophora - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'No tienen aparato respiratorio.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [611, 612], cita: 'No tienen aparatos excretor, respiratorio ni circulatorio' }],
      },
    ],
    circulatorio: [
      {
        texto: 'No tienen aparato circulatorio.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [611, 612], cita: 'No tienen aparatos excretor, respiratorio ni circulatorio' }],
      },
    ],
    excretor: [
      {
        texto: 'No tienen aparato excretor.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [611, 612], cita: 'No tienen aparatos excretor, respiratorio ni circulatorio' }],
      },
    ],
    nervioso: [
      {
        texto: 'Sistema nervioso muy desarrollado por debajo de las paletas natatorias.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [612, 639], cita: 'sistema nervioso muy desarrollado' }],
      },
    ],
    sentidos: [
      {
        texto: 'En el polo aboral (extremo opuesto a la boca) se encuentra un órgano sensorial característico que incluye un estatocisto; los estatolitos están ubicados en depresiones sobre penachos de cilios o balancines y rigen la orientación respecto a la gravedad y la coordinación de los movimientos de las láminas pectinadas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [626, 642], cita: 'órgano sensorial característico que incluye un estatocisto' }],
      },
    ],
    reproductor: [
      {
        texto: 'Hermafroditas (monoicos): óvulos y espermatozoides se forman en la cubierta endodérmica de los canales digestivos meridianos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [644, 645], cita: 'son hermafroditas (monoicos); óvulos' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Coloblastos',
      datos: [
        {
          texto: 'A diferencia de las medusas, que poseen cnidocitos, los ctenóforos poseen coloblastos: células exclusivas del grupo utilizadas para atrapar el alimento (zooplancton).',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [603, 605], cita: 'los ctenóforos poseen coloblastos' }],
        },
      ],
    },
    {
      titulo: 'Paletas natatorias (peines)',
      datos: [
        {
          texto: 'Ocho hileras lineales de cilios que se mueven sincrónicamente para nadar; algunos ctenóforos viven sobre el fondo o sobre otros animales.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [609, 611], cita: 'paletas natatorias o peines' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'Las células sexuales maduras salen por la boca, la fecundación tiene lugar en el agua y el desarrollo suele ser directo a la forma adulta.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [646, 648], cita: 'la fecundación tiene lugar en el agua' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Tienen bioluminiscencia que depende de la mesoglea; la luz es producida por fotocitos que se localizan en los canales digestivos meridianos, por lo que parece que la luz emana de las paletas natatorias.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [614, 616], cita: 'bioluminiscencia que depende de la mesoglea' }],
    },
    {
      texto: 'Carnívoros: se alimentan de otros animales planctónicos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [635, 637], cita: 'Carnívoros, se alimentan de otros animales' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Mnemiopsis leidyi',
      descripcion: 'ctenóforo modelo de estudio; especie invasora que dañó la pesca del mar Negro',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Ctenophora/', titulo: 'Ctenophora - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
    {
      nombre: 'Pleurobrachia',
      descripcion: 'género de ctenóforos incapaz de producir luz (no bioluminiscente)',
      fuentes: [{ tipo: 'web', url: 'https://animaldiversity.org/accounts/Ctenophora/', titulo: 'Ctenophora - Animal Diversity Web', sitio: 'Animal Diversity Web', consultado: '2026-10-13' }],
    },
  ],
  notas: [
    {
      tipo: 'discrepancia',
      texto: 'El apunte los declara tripoblásticos y los ubica en Radiata aunque unos pocos tienen simetría bilateral.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [597, 607], cita: 'PHYLUM CTENOPHORA (TRIPOBLÁSTICOS)' }],
    },
    {
      tipo: 'discrepancia',
      texto: 'La literatura actual los considera mayormente diblásticos (su mesénquima derivaría del endodermo, como ectomesodermo) aunque el debate continúa; además, varios estudios filogenómicos los ubican como grupo hermano del resto de los animales.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Ctenophora', titulo: 'Ctenophora - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }, { tipo: 'web', url: 'https://www.nature.com/articles/s41586-026-10643-z', titulo: 'A blastoporal organizer in a ctenophore', sitio: 'Nature', consultado: '2026-10-13' }],
    },
  ],
};

export default taxon;
