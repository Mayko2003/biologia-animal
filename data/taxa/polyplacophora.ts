import type { Taxon } from '@/lib/types';

const A = 'mollusca, briozoos, brachiopoda, chaetognatha.md' as const;

const taxon: Taxon = {
  slug: 'polyplacophora',
  nombre: 'Polyplacophora',
  nombreComun: 'Poliplacóforos (quitones)',
  nivel: 'clase',
  padre: 'mollusca',
  orden: 1,
  resumen: [
    {
      texto: '(=Amphineura, portador de muchas placas.) Unas 800 especies llamadas comúnmente quitones, de 3 mm a 40 cm de longitud, generalmente de colores pardos con tonalidades rojizas, marrones, amarillas o verdes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [90, 94], cita: 'unas 800 especies' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo elíptico con el dorso convexo, provisto de 8 placas o valvas calcáreas (ceramas) imbricadas que se articulan entre sí y están cubiertas en los bordes, o enteramente, por un grueso cinturón carnoso (parte del manto) que contiene cerdas o espinas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [96, 98], cita: '8 placas o valvas' }],
    },
    {
      texto: 'El manto cubre la superficie dorsal y lateral, y el pie blando ocupa la mayor parte de la superficie ventral; entre el pie y el manto existe un surco paleal. Debajo del borde anterior del cinturón está la pequeña cabeza, que contiene la boca pero carece de ojos y tentáculos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [100, 113], cita: 'un surco paleal' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: '8 placas o valvas calcáreas imbricadas que se articulan entre sí, cubiertas en los bordes o enteramente por el cinturón carnoso.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [96, 98], cita: 'imbricadas, que se articulan' }],
      },
    ],
    digestivo: [
      {
        texto: 'En la cavidad bucal está la rádula; se alimentan de algas y microorganismos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [113, 119], cita: 'Se alimentan de algas' }],
      },
    ],
    reproductor: [
      {
        texto: 'La mayoría son dioicos y poseen una sola gónada localizada por debajo de las placas más centrales; los gonoporos se ubican en los surcos paleales por delante de los poros excretores.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [120, 122], cita: 'una sola gónada' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'La fecundación es externa; los huevos son puestos en rosario o independientemente. Desarrollo indirecto sólo con larva trocósfera.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [122, 123], cita: 'Los huevos son puestos en' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Marinos, viven sobre las rocas, principalmente en aguas poco profundas; se adhieren fuertemente o se arrastran lentamente mediante el pie, y si se les coge se enrollan como una cochinilla de humedad.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [115, 117], cita: 'se enrollan como una cochinilla' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
