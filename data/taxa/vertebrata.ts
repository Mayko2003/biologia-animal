import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'vertebrata',
  nombre: 'Vertebrata',
  nombreComun: 'Vertebrados',
  nivel: 'subphylum',
  padre: 'chordata',
  orden: 3,
  resumen: [
    {
      texto: 'La historia de los vertebrados se remonta a 544 millones de años y han ocupado mares, aguas dulces, tierra y aire con gran variedad de formas de vida; en algún momento de su vida presentan, como todo cordado, notocorda dorsal, hendiduras branquiales faríngeas, cordón nervioso tubular dorsal y cola postanal.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [335, 343], cita: '544 millones de años' }],
    },
    {
      texto: 'Su éxito se debería a su gran variedad innovativa, destacando la columna vertebral y el cráneo.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [349, 351], cita: 'columna vertebral y el' }],
    },
  ],
  morfologiaExterna: [],
  embriologia: {},
  sistemas: {
    esqueleto: [
      {
        texto: 'La columna vertebral está compuesta por vértebras unidas que forman la espina dorsal (principal eje de sostén), con discos intervertebrales entre cada una; una vértebra típica consta de un cuerpo o centro, un arco neural (médula espinal) y un arco hemal ventral (vasos sanguíneos), con sus espinas neural y hemal.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [353, 361], cita: 'unidades llamadas vértebras' }],
      },
      {
        texto: 'Los primeros vertebrados solo tenían notocorda reforzada, reemplazada paulatinamente por vértebras hasta desaparecer; en los mamíferos persiste solo como núcleo pulposo gelatinoso dentro de cada disco intervertebral.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [363, 367], cita: 'núcleo gelatinoso llamado núcleo' }],
      },
      {
        texto: 'El cráneo anterior, compuesto por hueso y cartílago, contiene el encéfalo y los órganos de los sentidos; la parte anterior del tubo neural se ensancha para formar el encéfalo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [369, 376], cita: 'formar el encéfalo' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [],
  bioecologia: [],
  ejemplos: [],
  notas: [
    {
      tipo: 'aclaracion',
      texto: 'Algunos vertebrados carecen de vértebras pero todos tienen cráneo, por lo que algunos autores prefieren el nombre Craneados y el subphylum Craniata.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [378, 380], cita: 'entonces tendríamos el Subphylum' }],
    },
  ],
};

export default taxon;
