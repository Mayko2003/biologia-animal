import type { Taxon } from '@/lib/types';

const A = 'equidodermos.md' as const;

const taxon: Taxon = {
  slug: 'pterobranchia',
  nombre: 'Pterobranchia',
  nombreComun: 'Pterobranquios',
  nivel: 'clase',
  padre: 'hemichordata',
  orden: 2,
  resumen: [
    {
      texto: 'Más pequeños que los enteropneustos; sésiles y coloniales o pseudocoloniales (género Rhabdopleura), viven en tubos que ellos mismos fabrican y se alimentan con brazos provistos de tentáculos ciliados situados en la base del collar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [699, 703], cita: 'brazos provistos de tentáculos' }],
    },
    {
      texto: 'No tienen una probóscide alargada como los enteropneustos sino modificada en forma de escudo para adherirse al sustrato; con un par o sin poros branquiales y un tubo digestivo en forma de "U". Se han recogido en dragados profundos en la Antártida y las Bermudas; se conocen 3 géneros y 17 especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [703, 707], cita: 'forma de escudo' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [
    {
      nombre: 'Rhabdopleura',
      descripcion: 'género pseudocolonial citado en el apunte',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [701, 701], cita: 'del género Rhabdopleura' }],
    },
  ],
  notas: [],
};

export default taxon;
