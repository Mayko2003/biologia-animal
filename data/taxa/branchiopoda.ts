import type { Taxon } from '@/lib/types';

const A = 'chrustacea.md' as const;

const taxon: Taxon = {
  slug: 'branchiopoda',
  nombre: 'Branchiopoda',
  nombreComun: 'Branquiópodos',
  nivel: 'clase',
  padre: 'crustacea',
  orden: 2,
  resumen: [
    {
      texto: 'Clase de crustáceos que incluye, en el Orden Diplostraca, a Daphnia (pulgas de agua): crustáceo planctónico del suborden de los cladóceros que de adulto mide hasta 5 o 6 mm, se alimenta de fitoplancton y habita una gran variedad de aguas continentales, desde cenagales hasta aguas de deshielo o salobres, preferiblemente en masas de agua pequeñas sin peces.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [298, 308], cita: 'Daphnia, pulgas de agua' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'En Daphnia las hembras alcanzan hasta 5 o 6 mm y los machos son más pequeños, de tan sólo 2 mm; el cuerpo está protegido por un caparazón traslúcido de quitina, con una abertura central y cinco pares de extremidades torácicas que sirven para el filtrado; la cabeza tiene dos antenas y un gran ojo compuesto.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [312, 316], cita: 'caparazón traslúcido de quitina' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'En Daphnia el cuerpo está protegido por un caparazón traslúcido de quitina.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [313, 314], cita: 'un caparazón traslúcido' }],
      },
    ],
    digestivo: [
      {
        texto: 'En Daphnia el intestino tiene forma de gancho y cuenta con dos ciegos; cinco pares de extremidades torácicas sirven para el proceso de filtrado del alimento.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [314, 315], cita: 'forma de gancho' }],
      },
    ],
    sentidos: [
      {
        texto: 'En Daphnia la cabeza tiene dos antenas y un gran ojo compuesto.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [316, 316], cita: 'gran ojo compuesto' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Daphnia se usa en estudios sobre ecología y limnología, evolución y ecotoxicología, y es muy popular en acuicultura y acuariofilia como alimento para peces.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [309, 310], cita: 'ecología y limnología' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Daphnia',
      descripcion: 'pulga de agua cladócera planctónica de aguas continentales',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [299, 301], cita: 'Diplostraca (Daphnia, pulgas de' }],
    },
  ],
  notas: [],
};

export default taxon;
