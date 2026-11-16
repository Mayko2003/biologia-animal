import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'radiata',
  nombre: 'Radiata',
  nombreComun: 'Radiados',
  nivel: 'rama',
  padre: 'eumetazoa',
  orden: 1,
  resumen: [
    {
      texto: 'Animales con simetría radial octómera, hexámera, tetrámera o dímera (birradial) y eje principal oral-aboral.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [300, 301], cita: 'simetría radial octómera, hexámera, tetrámera o dimera' }],
    },
    {
      texto: 'Incluye al Superphylum Coelenterata: metazoos de organización tisular o incipiente formación de órganos, con celenterón o cavidad gastrovascular con funciones variadas además de la digestiva.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [303, 306], cita: 'Metazoos de organización tisular o incipiente formación de órganos' }],
    },
    {
      texto: 'El celenterón puede comportarse como esqueleto hidrostático y ayudar a la locomoción; son de cuerpo blando y gelatinoso, a veces rodeados de un esqueleto duro; fijos o nadadores, marinos y dulceacuícolas.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [306, 308], cita: 'esqueleto hidrostático y ayudar a la locomoción' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {
    simetria: {
      valor: 'radial',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [300, 301], cita: 'Rama Radiata: simetría radial' }],
    },
  },
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El apunte menciona el Superphylum Coelenterata dentro de Radiata.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [303, 308], cita: 'Superphylum Coelenterata: Metazoos de organización tisular' }],
    },
  ],
};

export default taxon;
