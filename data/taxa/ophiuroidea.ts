import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'ophiuroidea',
  nombre: 'Ophiuroidea',
  nombreComun: 'Ofiuros, cestas de mar',
  nivel: 'clase',
  padre: 'echinodermata',
  orden: 2,
  resumen: [
    {
      texto: 'Unas 2000 especies conocidas comúnmente como cestas de mar, estrellas serpentiformes, estrellas frágiles u ofiuras; viven en todos los tipos de hábitats marinos, son abundantes sobre fondos blandos, activas de noche y pueden nadar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [263, 272], cita: 'cestas de mar, estrellas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Poseen un disco central (de 1 a 3 cm en la mayoría; hasta 12 cm en las cestas de mar) y brazos largos y delgados a veces sumamente ramificados; carecen de surco ambulacral y los pies apenas intervienen en la locomoción.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [287, 321], cita: 'disco central y brazos' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'El interior de los brazos está ocupado por grandes osículos (vértebras) articulados entre sí, cada uno tapado por un osículo superficial aplanado (escudo) con espinas; las vértebras reducen el celoma de los brazos a una pequeña cámara aboral.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [291, 297], cita: 'grandes osículos (vértebras)' }],
      },
    ],
    digestivo: [
      {
        texto: 'La boca está centrada oralmente, rodeada de 5 grupos de láminas móviles que sirven de mandíbulas; hay un estómago en forma de saco, pero no existen ciegos ni ano: los residuos indigeribles se eliminan directamente por la boca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [314, 318], cita: 'no existen ciegos ni' }],
      },
    ],
    respiratorio: [
      {
        texto: 'La reducción de la cavidad celomática hace que el intercambio gaseoso se produzca en su mayor parte en 5 pares de invaginaciones en forma de sacos (bursas) situadas en la cara oral del disco.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [304, 306], cita: 'en forma de sacos' }],
      },
    ],
    reproductor: [
      {
        texto: 'Las gónadas están en las paredes de las bursas; las bursas son los sitios por donde salen los gametos al exterior y donde ocurre el desarrollo embrionario en las especies incubadoras.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [306, 310], cita: 'las paredes de las' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Bursas',
      datos: [
        {
          texto: 'Cinco pares de invaginaciones en forma de sacos en la cara oral del disco: intervienen en el intercambio gaseoso, son la salida de los gametos y en las especies incubadoras alojan el desarrollo embrionario.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [304, 310], cita: 'sacos (bursas) situadas' }],
        },
      ],
    },
    {
      titulo: 'Sistema ambulacral sin ampollas',
      datos: [
        {
          texto: 'El sistema ambulacral carece de ampollas: son los canales laterales o los canales radiales los que asumen su función; el madreporito está situado en uno de los escudos orales.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [299, 303], cita: 'carece de ampollas' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'En las especies no incubadoras el desarrollo conduce a una larva pluteus que sufre la metamorfosis antes de caer al sustrato; en las incubadoras el desarrollo ocurre dentro de las bursas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [309, 312], cita: 'una larva pluteus' }],
    },
    {
      texto: 'Pueden perder los brazos, incluso parte del disco, y regenerarlos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [278, 278], cita: 'parte del disco y' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Viven en todos los hábitats marinos, abundantes sobre fondos blandos tanto costeros como de grandes profundidades; se esconden bajo piedras, algas y barros, son activas de noche, se mueven rápidamente y también pueden nadar; se alimentan de pequeños crustáceos, moluscos y desechos del fondo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [269, 276], cita: 'activas durante la noche' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'cestas de mar',
      descripcion: 'especies más grandes de la clase, con disco de hasta 12 cm',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [320, 321], cita: 'cestas o canastas de' }],
    },
  ],
  notas: [],
};

export default taxon;
