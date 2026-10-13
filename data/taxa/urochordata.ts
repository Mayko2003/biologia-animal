import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'urochordata',
  nombre: 'Urochordata',
  nombreComun: 'Urocordados (tunicados)',
  nivel: 'subphylum',
  padre: 'chordata',
  orden: 1,
  resumen: [
    {
      texto: 'Los urocordados adultos se conocen como tunicados: animales marinos frecuentes que se parecen poco a los cordados; la mayoría son sésiles y el cuerpo está recubierto por una compleja túnica exoesquelética.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [85, 89], cita: 'conocen como tunicados' }],
    },
    {
      texto: 'Presentan una faringe perforada desarrollada, pero en el adulto la notocorda y el cordón nervioso desaparecen; solamente los estadios larvarios, que se parecen a renacuajos, poseen las características distintivas de los cordados. Se han descrito 1250 especies.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [89, 98], cita: 'se parecen a renacuajos' }],
    },
    {
      texto: 'Incluyen tres clases: Ascidiacea, Thaliacea y Larvacea; las ascidias reúnen la mayor parte de las especies y son los tunicados más comunes, mientras que las otras dos clases están adaptadas a la existencia planctónica.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [96, 98], cita: 'adaptadas a la existencia' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'El cuerpo está recubierto por una compleja túnica exoesquelética.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [88, 89], cita: 'una compleja túnica exoesquelética' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [],
};

export default taxon;
