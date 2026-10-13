import type { Taxon } from '@/lib/types';

const A = 'chrustacea.md' as const;

const taxon: Taxon = {
  slug: 'copepoda',
  nombre: 'Copepoda',
  nombreComun: 'Copépodos',
  nivel: 'subclase',
  padre: 'maxillopoda',
  orden: 1,
  resumen: [
    {
      texto: 'Los copépodos (del griego "cope", remo, y "poda", pata) son una subclase de crustáceos maxilópodos de pequeño tamaño, muy extendidos por todo el planeta, principalmente formando parte del zooplancton; existen especies adaptadas a casi todo tipo de ambientes acuáticos y son considerados los artrópodos más abundantes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [321, 327], cita: 'los artrópodos más abundantes' }],
    },
    {
      texto: 'Se conocen unas 12.000 especies; la mayoría son de vida libre, pero algunos géneros se adaptaron a estilos de vida comensal e incluso al parasitismo, utilizando un enorme rango de hospedadores para el desarrollo de su ciclo vital.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [329, 331], cita: 'unas 12 000 especies' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Cyclops el aspecto es el de un crustáceo decápodo: una porción anterior en forma de pera incluye la región cefálica y los dos primeros segmentos del tórax, luego tres segmentos torácicos móviles y por último el abdomen, sin apéndices, que termina en una cola ahorquillada con filamentos plumosos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [337, 340], cita: 'forma de pera' }],
    },
    {
      texto: 'Tienen un solo ojo, que evolucionó de dos ojos que se fusionaron, y las antenas principales, muy articuladas, son mucho mayores que las secundarias. La gran mayoría son de cuerpo transparente, aunque algunas especies marinas son luminosas por sustancias fosforescentes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [340, 349], cita: 'ojos que se fusionaron' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Los copépodos carecen de caparazón.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [333, 333], cita: 'carecen de caparazón' }],
      },
    ],
    muscular: [
      {
        texto: 'Poseen 4 pares de apéndices torácicos que les sirven para nadar, y vestigios de un quinto par; además de las mandíbulas y maxilas, el primer par de apéndices torácicos evolucionó hasta convertirse en maxilas secundarias.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [342, 345], cita: 'sirven para nadar' }],
      },
    ],
    sentidos: [
      {
        texto: 'Un solo ojo (ojo naupliar) evolucionado de la fusión de dos ojos; antenas principales muy articuladas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [340, 342], cita: 'Tienen un solo ojo' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Su desarrollo se inicia a partir de una larva nauplio.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [333, 334], cita: 'una larva nauplio' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Forman parte principalmente del zooplancton; colonizaron una innumerable cantidad de nichos en todo el mundo y algunas especies marinas son luminosas por sustancias fosforescentes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [323, 349], cita: 'alguna sustancia fosforescente' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Cyclops',
      descripcion: 'copépodo de agua dulce muy estudiado, con aspecto de decápodo y un solo ojo',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [334, 337], cita: 'géneros copépodos de agua' }],
    },
    {
      nombre: 'Diaptomus',
      descripcion: 'otro género copépodo de agua dulce muy estudiado (escrito "Diaptomu" en el apunte)',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [334, 334], cita: 'Cyclops y el Diaptomu' }],
    },
  ],
  notas: [],
};

export default taxon;
