import type { Taxon } from '@/lib/types';

const A = 'insecta.md' as const;

const taxon: Taxon = {
  slug: 'hexapoda',
  nombre: 'Hexapoda',
  nombreComun: 'Hexápodos',
  nivel: 'subphylum',
  padre: 'arthropoda',
  orden: 4,
  resumen: [
    {
      texto: 'Es el subfilo (o superclase) de artrópodos que más especies agrupa: incluye a los insectos (1 millón de especies), Proturos, Dipluros y Colémbolos (unas 9.000 especies entre los tres). Su nombre deriva del griego "hexa", seis, y "poda", patas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [14, 20], cita: 'que más especies agrupa' }],
    },
    {
      texto: 'Son artrópodos con el cuerpo dividido en cabeza, tórax con tres pares de patas y abdomen; la cabeza lleva un par de antenas y generalmente son alados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [22, 26], cita: 'con tres pares de' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo dividido en cabeza (con un par de antenas), tórax con tres pares de patas y abdomen; generalmente alados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [22, 26], cita: 'Generalmente son alados' }],
    },
  ],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'El apunte divide a los hexápodos en Entognatha (artrópodos primitivamente ápteros, con el aparato bucal escondido en un repliegue cefálico: Protura, Diplura y Collembola) y Ectognatha (aparato bucal expuesto: Insecta).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [28, 36], cita: 'aparato bucal está escondido' }],
    },
  ],
};

export default taxon;
