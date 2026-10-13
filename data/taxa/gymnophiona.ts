import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'gymnophiona',
  nombre: 'Gymnophiona',
  nombreComun: 'Cecilias',
  sinonimos: ['Apoda'],
  nivel: 'subclase',
  padre: 'amphibia',
  orden: 3,
  resumen: [
    {
      texto: 'Orden de anfibios ápodos (gymnos=desnudo, ophiona=culebra): las cecilias, unas 160 especies de aspecto vermiforme características de las selvas tropicales de Sudamérica, África y Sudeste Asiático.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [292, 295], cita: 'De aspecto vermiforme, características de selvas' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo largo y delgado, con pequeñas escamas en la piel, numerosas vértebras, sin extremidades, con ano terminal; ojos pequeños y algunos ciegos; pequeños tentáculos sensoriales en el hocico.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [295, 300], cita: 'pequeños tentáculos sensoriales en el hocico' }],
    },
  ],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'Esqueleto similar al de los vertebrados largos, con numerosas vértebras y costillas —algunas cecilias poseen más de 200—; carecen de cinturas, ya que no tienen extremidades.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [297, 299], cita: 'esqueleto similar al de los vertebrados largos' }],
      },
    ],
    reproductor: [
      {
        texto: 'Fecundación interna; el macho posee un órgano copulador eyectable.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [302, 302], cita: 'un órgano copulador eyectable' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'Huevos depositados en la tierra húmeda, cerca del agua; larvas acuáticas o la totalidad del desarrollo larvario ocurre dentro del huevo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [302, 304], cita: 'Huevos depositados en la tierra húmeda' }],
    },
    {
      texto: 'La viviparidad es corriente en las formas más evolucionadas, donde los embriones obtienen su nutrición al devorar las paredes del oviducto materno.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [304, 305], cita: 'devorar las paredes del oviducto materno' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Hipógeos: viven en cuevas debajo de la tierra y rara vez son vistos por el hombre; se alimentan de lombrices y pequeños invertebrados que encuentran en el suelo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [300, 301], cita: 'viven en cuevas debajo de la tierra' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
