import type { Taxon } from '@/lib/types';

const A = 'quilicerados y miriapodos.md' as const;

const taxon: Taxon = {
  slug: 'chelicerata',
  nombre: 'Chelicerata',
  nombreComun: 'Quelicerados',
  nivel: 'subphylum',
  padre: 'arthropoda',
  orden: 1,
  resumen: [
    {
      texto: 'Presentan el cuerpo dividido en cefalotórax y abdomen y carecen de antenas. Se agrupan en tres Clases: Merostomata (cangrejos cacerola, marinos), Pycnogonida (arañas de mar) y Arachnida (terrestres).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [148, 155], cita: 'cefalotórax y abdomen' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El primer par de apéndices se denominan quelíceros y sirven para la alimentación; el segundo par son los pedipalpos, que se modifican para cumplir diferentes funciones según los grupos; a los pedipalpos les siguen normalmente cuatro pares de patas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [149, 151], cita: 'se denominan quelíceros' }],
    },
  ],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [
    {
      titulo: 'Quelíceros y pedipalpos',
      datos: [
        {
          texto: 'Los quelíceros (primer par de apéndices) sirven para la alimentación; los pedipalpos (segundo par) cumplen funciones diversas según el grupo.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [149, 151], cita: 'par son los pedipalpos' }],
        },
      ],
    },
  ],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
