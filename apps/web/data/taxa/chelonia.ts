import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'chelonia',
  nombre: 'Chelonia',
  nombreComun: 'Quelonios (tortugas)',
  sinonimos: ['Quelonios', 'Testudines'],
  nivel: 'subclase',
  padre: 'reptilia',
  orden: 2,
  resumen: [
    {
      texto: 'Orden de la subclase Anapsidos, según el apunte: las tortugas, con el cuerpo dentro de un caparazón oval formado por escudos córneos estrechamente unidos entre sí.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [444, 448], cita: 'SUBCLASE ANAPSIDOS ORDEN QUELONIOS' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El caparazón tiene una parte convexa, el espaldar, y una ventral más plana, el peto; está compuesto por dos capas: una externa, córnea, de queratina, y otra interna, de hueso; nuevas capas de queratina se van sucediendo bajo la vieja a medida que la tortuga crece y envejece.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [447, 452], cita: 'una externa, córnea, de queratina' }],
    },
    {
      texto: 'La cabeza, la cola y las patas se retraen entre las dos partes del caparazón y en la mayor parte de las especies pueden esconderse del todo para protegerse; las mandíbulas carecen de dientes pero poseen un fuerte y robusto pico córneo para aplastar el alimento; los dedos terminan en uñas córneas útiles para arrastrarse y cavar; los pies de las formas terrestres son rechonchos y en las tortugas acuáticas las patas tienen forma de paleta para nadar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [453, 458], cita: 'un fuerte y robusto pico córneo' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Las vértebras torácicas suelen estar soldadas al espaldar óseo, y las costillas al peto.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [449, 449], cita: 'las costillas al peto' }],
      },
    ],
    respiratorio: [
      {
        texto: 'En la cloaca de las tortugas acuáticas hay unos sacos vasculares que funcionan como branquias cloacales y ayudan a respirar al animal cuando está sumergido.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [458, 459], cita: 'sacos vasculares que funcionan como branquias' }],
      },
    ],
    excretor: [
      {
        texto: 'La orina es líquida.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [459, 460], cita: 'La orina es líquida' }],
      },
    ],
    sentidos: [
      {
        texto: 'Tienen tanto oído medio como interno, pero su percepción de sonidos es pobre; poseen un buen sentido del olfato, visión aguda y una percepción de los colores tan buena como la de los seres humanos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [460, 462], cita: 'una percepción de los colores' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Son ovíparas con fecundación interna e incluso las formas marinas entierran sus huevos amnióticos en la tierra.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [463, 464], cita: 'ovíparas con fecundación interna' }],
    },
    {
      texto: 'En ciertas familias —como en todos los cocodrilos y algunos lagartos— la temperatura del nido determina el sexo de las crías: las bajas temperaturas durante la incubación producen machos, mientras que con más calor nacen hembras; estos reptiles dependientes de las temperaturas carecen de cromosomas sexuales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [464, 468], cita: 'la temperatura del nido determina el sexo' }],
    },
    {
      texto: 'El macho tiene un plastrón cóncavo que se adapta al caparazón muy convexo de la hembra, lo que les confiere estabilidad durante el apareamiento; los machos emiten un sonido ronco durante el apareamiento, el único momento conocido en que vocalizan.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [468, 471], cita: 'El macho tiene un plastrón cóncavo' }],
    },
  ],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
