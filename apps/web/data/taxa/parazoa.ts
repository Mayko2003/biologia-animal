import type { Taxon } from '@/lib/types';

const taxon: Taxon = {
  slug: 'parazoa',
  nombre: 'Parazoa',
  nombreComun: 'Parazoos',
  nivel: 'subreino',
  padre: 'animalia',
  orden: 1,
  resumen: [
    {
      texto: 'El nombre (para = al lado de) alude a que son los únicos animales con organización a nivel celular integrado: no forman tejidos verdaderos ni órganos específicos.',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [16, 18], cita: 'organización a nivel celular integrado' }],
    },
    {
      texto: 'La estructura de las esponjas la conforman masas de células con aspecto gelatinoso, con poros inhalantes (ostíolos) y poros exhalantes (ósculos).',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [18, 20], cita: 'innumerables poros inhalantes u ostíolos' }],
    },
    {
      texto: 'Formas fijas con esqueleto de espículas inorgánicas y fibras orgánicas (Porifera); excepcionalmente el esqueleto puede faltar o ser de murallas calcáreas dobles perforadas (Archaecyatha, extinto en el Cámbrico).',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [20, 23], cita: 'Phylum Archaecyatha, desaparecido en el Cámbrico' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {
    capas: {
      valor: 'sin-tejidos',
      fuentes: [{ tipo: 'apunte', archivo: 'porifera y cnidarios.md', lineas: [16, 18], cita: 'no llegan a formas verdaderos tejidos' }],
    },
  },
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
