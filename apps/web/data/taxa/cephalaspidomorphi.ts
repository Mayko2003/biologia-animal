import type { Taxon } from '@/lib/types';

const A = 'chordata.md' as const;

const taxon: Taxon = {
  slug: 'cephalaspidomorphi',
  nombre: 'Cephalaspidomorphi',
  nombreComun: 'Lampreas',
  nivel: 'clase',
  padre: 'agnatha',
  orden: 2,
  resumen: [
    {
      texto: 'Clase que comprende a las lampreas: poseen 7 pares de branquias cada una con su propio orificio, la cavidad nasal no comunica con la boca, dos pares de conductos semicirculares; son ovíparos con una fase larvaria (ammocete).',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [407, 410], cita: '7 pares de branquias' }],
    },
  ],
  morfologiaExterna: [
    {
      texto: 'El cuerpo (cabeza + tronco) es cilíndrico y la cola está comprimida lateralmente, con aletas medianas; ventralmente en la cabeza hay un embudo bucal rodeado de papilas blandas y tapizado por dentro de dientes córneos amarillos y cónicos.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [415, 418], cita: 'hay un embudo bucal' }],
    },
    {
      texto: 'La abertura nasal es única y dorsal media; los dos ojos laterales carecen de párpados; detrás hay 7 aberturas branquiales redondeadas y una serie de pequeñas fositas sensitivas laterales se extiende a lo largo de los lados del cuerpo; todo el animal está cubierto por un epitelio liso con numerosas glándulas mucosas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [418, 425], cita: 'fositas sensitivas laterales' }],
    },
  ],
  embriologia: {},
  sistemas: {
    tegumento: [
      {
        texto: 'Todo el animal está cubierto por un epitelio liso que contiene numerosas glándulas mucosas.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [424, 425], cita: 'numerosas glándulas mucosas' }],
      },
    ],
    esqueleto: [
      {
        texto: 'El notocordio persiste toda la vida como esqueleto axial, un bastón gelatinoso con tejido conjuntivo; los demás elementos son cartilaginosos: cráneo y cápsulas sensoriales, cartílago lingual, cartílago del embudo bucal, arcos branquiales (cesto branquial) y los arcualia (dos pares por segmento) que representan los arcos neurales de los vertebrados superiores.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [426, 432], cita: 'como un esqueleto axial' }],
      },
    ],
    muscular: [
      {
        texto: 'Las regiones del tronco y la cola poseen músculos segmentarios dispuestos en forma de M como en los demás peces; músculos radiales operan el embudo bucal y la lengua se mueve por un robusto músculo retractor y protractores menores.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [434, 437], cita: 'forma de M' }],
      },
    ],
    digestivo: [
      {
        texto: 'La boca está en el centro del embudo bucal con dientes córneos en la lengua; sigue una faringe corta y el tubo se divide en un esófago dorsal y un tubo respiratorio ventral protegido por el velo. No hay estómago; el intestino recto tiene un pliegue en espiral (tiflosol o válvula espiral) y termina en un ano pequeño.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [439, 454], cita: '(tiflosol) o válvula espiral' }],
      },
    ],
    respiratorio: [
      {
        texto: 'Existen 7 sacos branquiales oblicuos a los lados del cuerpo entre el tubo respiratorio y la pared, con filamentos de finos capilares donde se airea la sangre; en las lampreas adultas el agua entra y sale por las hendiduras (necesario porque se adhieren por el embudo), mientras que en las larvas entra por la boca como en los peces.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [466, 474], cita: '7 sacos branquiales' }],
      },
    ],
    circulatorio: [
      {
        texto: 'Corazón en un saco pericárdico con una aurícula y un ventrículo de paredes más gruesas con cono arterioso; la sangre va a la aorta ventral que la distribuye en 8 pares de ramas aferentes a los filamentos branquiales y luego a una aorta dorsal mediana; hay sistema hepático pero no porta renal, y vasos linfáticos.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [456, 464], cita: 'en un saco pericárdico' }],
      },
    ],
    excretor: [
      {
        texto: 'Dos riñones (mesonefros) en posición dorsal de la cavidad del cuerpo; un uréter tubular los comunica con el seno urogenital que vacía al exterior por la papila urogenital.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [476, 478], cita: 'de 2 riñones (mesonefros)' }],
      },
    ],
    nervioso: [
      {
        texto: 'Cerebro con lóbulos olfatorios, hemisferios menores, diencéfalo con infundíbulum y ojo pineal dorsal, grandes lóbulos ópticos en el cerebro medio, cerebelo en banda transversa y médula oblongada; 4 ventrículos, 10 pares de nervios craneales, cordón nervioso aplanado y raíces espinales que salen alternativamente sin formar haces.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [480, 491], cita: '10 pares de nervios' }],
      },
    ],
    sentidos: [
      {
        texto: 'Abertura nasal única a un saco olfatorio; un par de ojos y un complicado ojo pineal con lente y retina pigmentada; cada oído interno con dos conductos semicirculares; yemas gustativas en la faringe y una línea lateral de órganos sensoriales a ambos lados del cuerpo.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [493, 499], cita: 'un complicado ojo pineal' }],
      },
    ],
    reproductor: [
      {
        texto: 'La gónada inmadura es hermafrodita pero se convierte en masculina o femenina (adultos de sexos separados); en la madurez una sola gónada alargada llena la cavidad abdominal; no hay conducto genital: los gametos quedan libres en la cavidad y pasan por poros genitales al seno urogenital.',
        fuentes: [{ tipo: 'apunte', archivo: A, lineas: [513, 518], cita: 'par de poros genitales' }],
      },
    ],
  },
  estructurasEspeciales: [
    {
      titulo: 'Embudo bucal',
      datos: [
        {
          texto: 'Embudo bucal ventral rodeado de papilas blandas y tapizado de dientes córneos cónicos; las lampreas parásitas se adhieren a los peces por succión del embudo y los dientes linguales excavan un hoyo e inyectan un anticoagulante.',
          fuentes: [{ tipo: 'apunte', archivo: A, lineas: [416, 523], cita: 'inyectan un anticuagulante' }],
        },
      ],
    },
  ],
  reproduccion: [
    {
      texto: 'En primavera los adultos remontan ríos y preparan un nido moviendo piedras con el embudo; la fecundación es externa, con huevos pequeños y adherentes (hasta 65.000 en lampreas de arroyo y 236.000 en las marinas); todos los adultos mueren después de desovar.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [526, 538], cita: 'la fecundación es externa' }],
    },
    {
      texto: 'Las larvas ammocetes son ciegas y sin dientes, viven en galerías en U en la arena alimentándose del cieno filtrado con mucus del endostilo; su vida larvaria dura de 3 a quizás 7 años antes de la metamorfosis.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [539, 548], cita: 'larvas denominadas ammocetes' }],
    },
  ],
  bioecologia: [
    {
      texto: 'Hay lampreas de aguas dulces y saladas; las parásitas se adhieren a los peces por succión del embudo y los dientes linguales excavan e inyectan anticoagulante para beber su sangre, pudiendo matarlos. Las larvas sirven de cebo y los adultos de alimento humano; las especies marinas que invaden lagos son un peligro para las truchas.',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [520, 573], cita: 'empleo de los dientes' }],
    },
  ],
  ejemplos: [
    {
      nombre: 'Petromyzon',
      descripcion: 'lampreas marinas de la costa del Atlántico y Europa, de casi 1 m',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [410, 411], cita: '(ammocete). Ej. Petromyzon' }],
    },
    {
      nombre: 'Enthosphenus tridentatus',
      descripcion: 'lamprea del Pacífico norte con larva de al menos 3 años',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [545, 546], cita: 'lamprea del Pacífico norte' }],
    },
    {
      nombre: 'Ichthyomyzon unicolor',
      descripcion: 'lamprea de arroyos del centro de EEUU y Canadá, larva de quizás 7 años',
      fuentes: [{ tipo: 'apunte', archivo: A, lineas: [547, 547], cita: 'arroyos del centro de' }],
    },
  ],
  notas: [],
};

export default taxon;
