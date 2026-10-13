import type { Taxon } from '@/lib/types';

const A = 'gnatostomatha.md' as const;

const taxon: Taxon = {
  slug: 'holocephali',
  nombre: 'Holocephali',
  nombreComun: 'Quimeras',
  nivel: 'subclase',
  padre: 'chondrichthyes',
  orden: 2,
  resumen: [
    {
      texto: 'Subclase llamada quimeras o peces rata: hendiduras branquiales cubiertas por un opérculo, sin cloaca ni espiráculos, primera aleta dorsal muy hacia delante con una fuerte espina y cola alargada en forma de látigo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [71, 73], cita: 'llamados quimeras o peces rata' }],
    },
    {
      texto: 'Cada mandíbula con seis pares de placas dentarias con dientes fusiformes, mandíbula superior fusionada al cráneo, adultos sin escamas; los machos tienen órganos copuladores pelvianos y un único gancho mediano sobre la cabeza que sujetaría a la hembra durante la cópula.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [73, 76], cita: 'seis pares de placas dentarias' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Los adultos carecen de escamas.',
        ausente: true,
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [75, 75], cita: 'sin escamas; machos con' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Pasan la mayor parte del tiempo en aguas profundas, a más de 80 m, y no tienen valor comercial; su dieta incluye algas marinas, crustáceos, moluscos, equinodermos y peces, que capturan con las placas trituradoras de sus dientes.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [76, 79], cita: 'tiempo en aguas profundas' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Callorhynchus',
      descripcion: 'pez elefante, ejemplo de holocéfalo',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [79, 79], cita: 'Ej.: Callorhynchus (pez elefante)' }],
    },
  ],
  notas: [],
};

export default taxon;
