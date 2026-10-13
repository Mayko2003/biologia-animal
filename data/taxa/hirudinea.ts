import type { Taxon } from '@/lib/types';

const A = 'annelidos.md' as const;

const taxon: Taxon = {
  slug: 'hirudinea',
  nombre: 'Hirudinea',
  nombreComun: 'Hirudíneos (sanguijuelas)',
  nivel: 'clase',
  padre: 'annelida',
  orden: 3,
  resumen: [
    {
      texto: '(Sanguijuelas.) Se conocen aproximadamente unas 500 especies; son gusanos marinos, dulceacuícolas y terrestres. Muchas especies son hematófagas y un gran número se comportan como ectoparásitas; son los anélidos más especializados del grupo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [261, 266], cita: 'aproximadamente unas 500 especies' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Miden entre 1-5 cm de longitud (Hirudo medicinalis llega a los 12 cm); de color negro, marrón, verde oliva y rojo, con especies rayadas y jaspeadas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [268, 271], cita: 'Hirudo medicinalis llega a' }],
    },
    {
      texto: 'Cuerpo alargado y oval, aplanado dorsoventralmente, con 34 somitas; la superficie externa de cada somito posee surcos transversales que los dividen en muchos anillos (1-5 anillos por somita).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [273, 275], cita: 'Contiene 34 somitas' }],
    },
    {
      texto: 'En el extremo posterior hay una ventosa redondeada formada por siete somitas; otra ventosa (de dos somitas) rodea a la boca ventral en el extremo anterior; el ano se abre dorsalmente en o cerca del último segmento del tronco.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [277, 279], cita: 'una ventosa redondeada formada por' }],
    },
    {
      texto: 'Otros poros exteriores: poro masculino en el somito 10, poro femenino en el 11, nefridioporos en cada segmento del 7° al 23°, y papilas sensoriales (6 por somito) del somito 5 al 24.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [286, 288], cita: 'el poro masculino en el' }],
    },
  ],
  embriologia: {},
  sistemas: {
    excretor: [
      {
        texto: 'Nefridioporos en cada uno de los segmentos desde el 7° al 23°.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [286, 288], cita: 'los nefridioporos en cada' }],
      },
    ],
    reproductor: [
      {
        texto: 'Hermafroditas; existe un órgano copulador (poro masculino en el somito 10 y femenino en el 11).',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [286, 290], cita: 'Las sanguijuelas son hermafroditas' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Ventosas',
      datos: [
        {
          texto: 'Ventosa posterior redondeada (siete somitas) y ventosa anterior (dos somitas) que rodea a la boca ventral.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [277, 279], cita: 'otra ventosa (de dos somitas)' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La fecundación es interna, ya que existe un órgano copulador; el desarrollo es directo. La reproducción es un proceso semejante al de los oligoquetos, con formación de un cocón o capullo (huevo), ya que existe también un clitelo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [290, 296], cita: 'un cocón o capullo' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Muchas especies son hematófagas y existe un gran número que se comportan como ectoparásitas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [264, 266], cita: 'Muchas especies son hematófagas' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Hirudo medicinalis',
      descripcion: 'sanguijuela que llega a los 12 cm',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [268, 268], cita: 'Hirudo medicinalis llega a' }],
    },
  ],
  notas: [],
};

export default taxon;
