import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'agnatha',
  nombre: 'Agnatha',
  nombreComun: 'Agnatos (peces sin mandíbulas)',
  nivel: 'superclase',
  padre: 'vertebrata',
  orden: 1,
  resumen: [
    {
      texto: 'Peces sin mandíbulas, con notocordio permanente durante toda su vida; carecen de osificación interna, escamas y aletas pares, sin verdaderos dientes (dérmicos), típicamente con una sola abertura nasal, ojo pineal, aberturas branquiales en forma de poros y cuerpo anguiliforme.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [389, 394], cita: 'con notocordio permanente durante' }],
    },
    {
      texto: 'Comprendía a los ostracodermos fósiles (pequeños, de 5-70 cm, de agua dulce, habitantes del fondo con armadura de huesos dérmicos, ya extintos), a los cefalaspidomorfos (lampreas) y a los mixines.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [396, 405], cita: 'los Ostracodermos fósiles' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {},
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Los mixines son ciertamente más primitivos mientras que las lampreas están más relacionadas con los peces evolucionados; por eso se las situó en clases de vertebrados independientes, dejando a los agnatos como un conjunto artificial de peces sin mandíbulas y de relaciones inciertas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [396, 401], cita: 'deja al grupo de Agnatos' }],
    },
  ],
};

export default taxon;
