import type { Taxon } from '@/lib/types';

const A = 'anfibios, reptiles.md' as const;

const taxon: Taxon = {
  slug: 'crocodilia',
  nombre: 'Crocodilia',
  nombreComun: 'Cocodrilos, caimanes y aligátores',
  sinonimos: ['Cocodrilos'],
  nivel: 'subclase',
  padre: 'reptilia',
  orden: 1,
  resumen: [
    {
      texto: 'Orden de la subclase Arcosaurios, según el apunte: cocodrilos, caimanes y aligátores; los cocodrilos actuales son los únicos reptiles supervivientes del linaje de los arcosaurios que dio lugar a la gran radiación de los dinosaurios durante el Mesozoico y a las aves.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [351, 352], cita: 'SUBCLASE ARCOSAURIOS ORDEN COCODRILOS' }, { tipo: 'apunte', archivo: A, lineas: [362, 364], cita: 'los únicos reptiles supervivientes del linaje' }],
    },
    {
      texto: 'Los cocodrilos modernos se dividen en 3 familias: los aligátores y caimanes, fundamentalmente del Nuevo Mundo; los cocodrilos, ampliamente distribuidos y que incluyen al cocodrilo marino; y los gaviales, representados por una única especie de la India y Burma.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [364, 367], cita: 'se dividen en 3 familias' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El cuerpo consta de cabeza, cuello, tronco y cola; las extremidades llevan dedos provistos de uñas córneas y membranas interdigitales.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [354, 356], cita: 'El cuerpo consta de cabeza, cuello, tronco' }],
    },
    {
      texto: 'La boca amplia, en el extremo del hocico, lleva dientes cónicos implantados en alvéolos; cerca del extremo del hocico se ven dos aberturas nasales pequeñas; los ojos son grandes y laterales, provistos de párpados superior e inferior y una membrana nictitante; el oído es una pequeña abertura situada detrás del ojo y debajo de un pliegue de la piel; el ano es una hendidura longitudinal detrás de la base de las extremidades posteriores.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [355, 360], cita: 'dientes cónicos implantados en alvéolos' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'La piel es gruesa y coriácea, provista de escamas córneas rectangulares dispuestas sobre la mayor parte del cuerpo y la cola; la capa córnea exterior no se muda y la superficie que se gasta se reemplaza por capas córneas de la epidermis de debajo; en la parte inferior de la cabeza existe la glándula del almizcle, epidérmica.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [369, 383], cita: 'la piel es gruesa y coriácea' }],
      },
    ],
    esqueleto: [
      {
        texto: 'Los adultos poseen un exoesqueleto de placas dérmicas óseas separadas, debajo de las escamas dorsales del cuello y de la cola; éstas son rectangulares u ovales, a menudo con fositas, y algunas poseen una quilla mediana.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [378, 381], cita: 'exoesqueleto de placas dérmicas óseas' }],
      },
      {
        texto: 'El cráneo es macizo y posee un hocico alargado (suele tener fositas en los individuos más viejos), reforzado con una fuerte musculatura mandibular para una apertura amplia y un cierre rápido y potente; los dientes están alojados en alvéolos, disposición denominada tecodonta, típica de los arcosaurios y de las primeras aves.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [385, 388], cita: 'disposición denominada Tecodonta' }],
      },
      {
        texto: 'Ventralmente en el cráneo hay un paladar secundario, sobre el que se ubican los conductos respiratorios, que le permite respirar cuando tiene la boca llena de agua, de comida o de ambas cosas; la columna vertebral consta de vértebras cervicales (5), torácicas (10), lumbares (5), sacras (2) y caudales (39); existen costillas y esternón.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [389, 392], cita: 'un paladar secundario' }],
      },
    ],
    muscular: [
      {
        texto: 'Existen músculos muy bien diferenciados y bien desarrollados.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [394, 394], cita: 'músculos muy bien diferenciados' }],
      },
    ],
    digestivo: [
      {
        texto: 'La boca es capaz de coger grandes presas y contiene los dientes y una lengua plana, no protráctil, situada en el suelo de la boca; continúa una corta faringe, el esófago alargado y el estómago, en el que se diferencia una región esférica o fundus y una pequeña región pilórica en el lado derecho; ésta comunica con el intestino delgado arrollado, que continúa con el recto y desde éste a la cloaca y el ano; existe un hígado bilobulado y un páncreas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [395, 400], cita: 'una lengua plana, no protráctil' }],
      },
    ],
    circulatorio: [
      {
        texto: 'El corazón está formado por un seno venoso, dos aurículas y dos ventrículos; los ventrículos están perfectamente separados en los cocodrilos, pero no en los otros reptiles; la sangre circula por un sistema de arterias, venas y capilares sanguíneos hacia todas las regiones del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [402, 405], cita: 'un seno venoso, dos aurículas' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Dos pulmones; el aire pasa por las aberturas nasales y por encima del paladar duro a las coanas, situadas detrás del velo, y entonces por la glotis a la faringe, ubicada inmediatamente detrás de la lengua; la glotis contiene dos pares de cuerdas vocales y comunica con la tráquea, que a través de los bronquios llega a los pulmones.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [407, 410], cita: 'El aire pasa por las aberturas nasales' }],
      },
    ],
    excretor: [
      {
        texto: 'Está representado por dos riñones, de los que parten los uréteres que se abren en los lados de la cloaca.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [412, 414], cita: 'dos riñones de los que parten' }],
      },
    ],
    nervioso: [
      {
        texto: 'Encéfalo con dos grandes hemisferios cerebrales, dos lóbulos ópticos y dos lóbulos olfatorios, del que parte la médula espinal; hay 12 pares de nervios craneales y un par de nervios espinales en cada somito del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [416, 418], cita: 'dos grandes hemisferios cerebrales' }],
      },
    ],
    sentidos: [
      {
        texto: 'En la lengua hay papilas gustativas y órganos olfatorios en cada cavidad nasal; los ojos poseen glándulas lacrimales; el oído posee un conducto auditivo interno, una membrana timpánica, una cavidad timpánica u oído medio y el oído interno con tres conductos semicirculares y el órgano del oído; la trompa de Eustaquio comunica la cavidad timpánica con la faringe.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [419, 422], cita: 'tres conductos semicirculares' }],
      },
    ],
    reproductor: [
      {
        texto: 'Gónadas pares: en los machos existen dos testículos y dos vasos deferentes que desembocan en el pene, ubicado en la pared inferior de la cloaca; en la hembra hay dos ovarios cerca de los riñones y dos oviductos que se abren en la cloaca; los huevos se forman en los ovarios, son fecundados en el oviducto y allí se recubren de la cáscara antes de ser depuestos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [424, 428], cita: 'dos vasos deferentes que desembocan en el pene' }],
      },
    ],
  },
  estructurasEspeciales: [],
  reproduccion: [
    {
      texto: 'La hembra del caimán americano construye un nido con vegetales en descomposición y pone 30–60 huevos, que son incubados por el calor que produce la descomposición de los vegetales con los que han sido construidos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [432, 435], cita: 'un nido con vegetales en descomposición' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Los caimanes viven en pantanos y ríos, mientras que otros cocodrílidos se hallan en costas marinas; excavan galerías en la orilla de los ríos donde se guarecen; comen varias clases de animales —desde hormigas hasta perros y cerdos— pero raramente atacan al hombre.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [430, 432], cita: 'viven en pantanos y ríos' }],
    },
  ],
  ejemplos: [],
  notas: [],
};

export default taxon;
