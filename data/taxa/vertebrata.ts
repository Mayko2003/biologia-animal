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
    tegumento: [
      {
        texto: 'El tegumento consta de epidermis, dermis e hipodermis, y puede presentar diferenciaciones córneas, estructuras protectoras y sensoriales, glándulas y cromatóforos responsables de la coloración.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    muscular: [
      {
        texto: 'El aparato locomotor de los vertebrados se ha adaptado de su función inicial, la natación, a otras acciones que permiten movimientos complejos según el medio.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    digestivo: [
      {
        texto: 'El aparato digestivo es completo.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Respiración branquial en las formas acuáticas (ciclóstomos, peces y larvas de anfibios) y pulmonar en las terrestres.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Sistema circulatorio con corazón dividido en cámaras, arterias, venas y capilares, más un sistema linfático; en los peces hay un circuito sistémico y otro branquial con corazón de una aurícula y un ventrículo, y en muchos vertebrados terrestres la circulación es doble.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    excretor: [
      {
        texto: 'El aparato excretor está formado por el aparato renal y las glándulas sudoríparas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    nervioso: [
      {
        texto: 'La parte anterior del tubo neural se ensancha para formar el encéfalo, alojado en el cráneo; el sistema nervioso comprende el sistema nervioso central (encéfalo y médula espinal) y el periférico (ganglios y nervios espinales), más un sistema nervioso autónomo que inerva las vísceras.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [369, 376], cita: 'formar el encéfalo' }, { tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    sentidos: [
      {
        texto: 'Sentidos: ojos dispuestos en cámara de visión lateral (binocular en algunas aves y primates), tangorreceptores con órganos táctiles y demás órganos de los sentidos.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
    reproductor: [
      {
        texto: 'Reproducción sexual, habitualmente con sexos separados, fecundación interna o externa, y formas ovíparas y vivíparas.',
        fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'La reproducción es sexual salvo excepciones (hermafroditismo en algunos peces); habitualmente con sexos separados, fecundación interna o externa; en los mamíferos el embrión se desarrolla en el interior de la madre.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Ocupan mares, aguas dulces, tierra y aire con gran variedad de formas de vida.',
      fuentes: [{ tipo: 'web', url: 'https://es.wikipedia.org/wiki/Vertebrata', titulo: 'Vertebrata - Wikipedia en español', sitio: 'Wikipedia', consultado: '2026-10-13' }],
    },
  ],
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
