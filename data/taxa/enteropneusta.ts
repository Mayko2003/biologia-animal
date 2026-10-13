import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'enteropneusta',
  nombre: 'Enteropneusta',
  nombreComun: 'Enteropneustos, gusanos bellota',
  nivel: 'clase',
  padre: 'hemichordata',
  orden: 1,
  resumen: [
    {
      texto: 'Gusanos con probóscide en forma de bellota (gusanos bellota) que utilizan para excavar en el sedimento; es la clase más conocida del filo. Son vermiformes solitarios que viven en galerías, con numerosos poros branquiales en la parte anterior del tronco y una faringe con hendiduras branquiales implicada también en la recolección del alimento.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [689, 695], cita: 'forma de bellota (gusanos' }],
    },
    {
      texto: 'Tubo digestivo rectilíneo, a diferencia de los pterobranquios; suelen medir entre 2 y 2,5 cm, viven en el litoral e incluyen unas 70 especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [695, 697], cita: 'tubo digestivo rectilíneo' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [
    {
      texto: 'Solitarios, viven en galerías que excavan en el sedimento del litoral.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [692, 696], cita: 'galerías que excavan' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
