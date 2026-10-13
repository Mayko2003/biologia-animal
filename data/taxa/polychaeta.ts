import type { Taxon } from '@/lib/types';

const A = 'annelidos.md' as const;

const taxon: Taxon = {
  slug: 'polychaeta',
  nombre: 'Polychaeta',
  nombreComun: 'Poliquetos',
  nivel: 'clase',
  padre: 'annelida',
  orden: 1,
  resumen: [
    {
      texto: '(=muchas quetas.) Unas 8000 especies conocidas; miden 1 mm–10 cm de longitud y 2–10 mm de diámetro, con colores llamativos: rojos, rosas, verdes o combinaciones.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [164, 168], cita: 'unas 8000 especies conocidas' }],
    },
    {
      texto: 'Existen dos grupos de poliquetos: los Errantes, de movimientos libres (pelágicos, que se arrastran bajo conchas y rocas, cavadores en arena y fango o tubícolas), y los Sedentarios, que viven siempre en madrigueras permanentes, galerías o tubos de distinta complejidad.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [180, 185], cita: 'Errantes y Sedentarios' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'Cuerpo con segmentos cilíndricos e idénticos, cada uno provisto de un par de apéndices laterales carnosos semejantes a pequeños remos llamados parapodios. Hacia el extremo anterior hay un prostomio bien desarrollado que lleva órganos sensoriales y se proyecta hacia delante sobre la boca a modo de repisa.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [170, 173], cita: 'apéndices laterales carnosos' }],
    },
    {
      texto: 'La boca es ventral, entre el prostomio y la región postoral o peristomio (primer segmento verdadero), que forma los márgenes lateral y ventral de la boca; el peristomio a menudo lleva cirros tentaculares sensoriales o dos largos palpos tentaculares alimentadores. La región terminal no segmentada es el pigidio y lleva el ano.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [175, 198], cita: 'La boca es ventral' }],
    },
  ],
  embriologia: {},
  sistemas: {
    sentidos: [
      {
        texto: 'En el prostomio existen numerosas estructuras sensoriales: ojos, antenas y palpos ventrolaterales.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [187, 189], cita: 'ojos, antenas y palpos' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Muchos poliquetos poseen branquias (evaginaciones delgadas con una red vascular en su interior) o bien alguna parte del parapodio está especializada para el intercambio gaseoso superficial.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [253, 255], cita: 'evaginaciones delgadas con una red' }],
      },
    ],
    reproductor: [
      {
        texto: 'Los sexos son separados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [257, 257], cita: 'Los sexos son separados' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Parapodios',
      datos: [
        {
          texto: 'Cada parápodo es una expansión carnosa lateral de la pared del cuerpo, básicamente birrámea: parte dorsal (notopodio) y ventral (neuropodio), cada una con varillas quitinosas internas llamadas acículas que sirven de soporte, y una expansión tentacular (cirro) en la base de cada parte.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [200, 204], cita: 'Es básicamente birrámeo, formado' }],
        },
        {
          texto: 'En los gusanos escamosos algunos cirros dorsales se modificaron en escamas laminares llamadas élitros sobre la cara dorsal; en el ratón de mar Aphrodita toda la superficie dorsal está cubierta por un fieltro peludo de sedas del notopodio. Los lóbulos parapodiales contienen sacos setígeros con cerdas o sedas quitinosas.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [208, 216], cita: 'escamas laminares llamadas élitros' }],
        },
      ],
    },
    {
      titulo: 'Corona de radiolas',
      datos: [
        {
          texto: 'En muchos sedentarios (gusanos abanico o gusanos árboles de navidad) los palpos prostomiales forman una corona espiral o en embudo de salientes pinnadas llamadas radiolas, que se enrollan o pliegan cuando el gusano recoge su extremo anterior dentro del tubo.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [243, 247], cita: 'salientes pinnadas llamadas radiolas' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'La fecundación es externa y el desarrollo indirecto con una larva trocósfera.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [257, 259], cita: 'una larva trocósfera' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Se comportan como depredadores de pequeños invertebrados, carroñeros, omnívoros y herbívoros (algas).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [249, 251], cita: 'depredadores de pequeños invertebrados' }],
    },
    {
      texto: 'Los sedentarios ocupan galerías verticales o en U excavadas en el sustrato, con menos estructuras sensoriales prostomiales y parápodos reducidos; el tubo sirve de refugio para acechar presas, abastece de agua limpia y oxigenada, y permite habitar en superficies duras como rocas, conchas o coral. Los tubos pueden ser de material secretado o de granos de arena cementados.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [229, 241], cita: 'galerías verticales o en' }],
    },
    {
      texto: 'En algunos cavadores y tubícolas el tronco se especializa en regiones diferenciadas (tórax y abdomen) por variaciones en los parapodios o presencia/ausencia de branquias; el número de segmentos oscila desde menos de 10 a más de 200.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [218, 227], cita: 'tórax y abdomen' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Aphrodita',
      descripcion: 'ratón de mar; superficie dorsal cubierta por un fieltro peludo de sedas',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [212, 214], cita: 'el ratón de mar Aphrodita' }],
    },
  ],
  notas: [],
};

export default taxon;
